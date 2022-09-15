import { getIssueList } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssueType } from 'src/type/type';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import dateConvert from 'utils/convertStringTodate';
import '../../../node_modules/github-markdown-css/github-markdown-light.css';
import { loadingImg } from 'pages/Issue/IssueProvider';

const Detail = () => {
  const { number } = useParams();
  const issueURL = `/issues/`;
  const [issueDetail, setIssueDetail] = useState<IssueType | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const getIssueDetail = async () => {
    const response = await getIssueList(issueURL + number);
    setIssueDetail(response);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Observer src={loadingImg} alt="로딩중..." />
      ) : (
        <>
          <Box>
            <ProfileImg src={issueDetail?.user.avatar_url} />
            <IssueInfo>
              <Wrapper>
                <TitleBox>
                  <Title>#{issueDetail?.number} </Title>
                  <Title> {issueDetail?.title}</Title>
                </TitleBox>
                <SubInfo>
                  <InfoText>작성자: {issueDetail?.user.login} </InfoText>
                  <InfoText>작성일: {dateConvert(issueDetail?.created_at as Date)}</InfoText>
                </SubInfo>
              </Wrapper>
              <Comments>코멘트 {issueDetail?.comments}</Comments>
            </IssueInfo>
          </Box>
          <MainBox>
            <ReactMarkdown className="markdown-body light scheme">
              {issueDetail?.body as string}
            </ReactMarkdown>
          </MainBox>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 70%;
  margin: 2rem;
  padding: 1rem;
  line-height: 2rem;
`;
const Box = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #707070;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;
const ProfileImg = styled.img`
  width: 15%;
  border-radius: 50%;
  margin: 2rem;
`;
const IssueInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  width: 70%;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  width: 80%;
`;
const TitleBox = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Title = styled.span`
  margin-right: 1rem;
`;
const InfoText = styled.span`
  margin-right: 1rem;
`;
const SubInfo = styled.p`
  font-size: 1rem;
  color: #9e9e9e;
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const Comments = styled.p`
  width: 10%;
  margin: 1rem 2rem;
  @media screen and (max-width: 950px) {
    text-align: center;
    width: 50%;
  }
`;

const Observer = styled.img`
  text-align: center;
  width: 20%;
  margin: 2rem;
`;
