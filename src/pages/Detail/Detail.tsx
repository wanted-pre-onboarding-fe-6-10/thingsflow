import { getIssueList } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssueType } from 'src/type/type';
import styled from 'styled-components';
import dateConvert from 'utils/convertStringTodate';

const Detail = () => {
  const { number } = useParams();
  const issueURL = `/issues/`;
  const [issueDetail, setIssueDetail] = useState<IssueType | undefined>();
  const getIssueDetail = async () => {
    const response = await getIssueList(issueURL + number);
    setIssueDetail(response);
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  return (
    <Container>
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
              <>작성일: {dateConvert(issueDetail?.created_at as Date)}</>
            </SubInfo>
          </Wrapper>
          <Comments>{issueDetail?.comments}</Comments>
        </IssueInfo>
      </Box>
      <>{issueDetail?.body}</>
    </Container>
  );
};

export default Detail;

const Container = styled.div``;
const Box = styled.div``;
const ProfileImg = styled.img`
  width: 15%;
  border-radius: 50%;
`;
const IssueInfo = styled.div``;
const TitleBox = styled.p``;
const Title = styled.span``;
const InfoText = styled.span``;
const SubInfo = styled.p``;
const Wrapper = styled.div``;
const Comments = styled.p``;
