import { GetDetailIssue } from 'api/gitAPI';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Template from 'components/Template';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from 'styles/theme';

type User = {
  number: number;
  title: string;
  updated_at: string;
  comments: number;
  body: string;
  user: {
    avatar_url: string;
    login: string;
  };
};

const Detail = () => {
  const [details, setDetails] = useState<User | null>();
  const [loading, setLoading] = useState(false);
  const { number } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const res = await GetDetailIssue(number);
      setDetails(res);
      setLoading(false);
    };

    getDetails();
  }, [number]);

  return loading ? (
    <Loading />
  ) : (
    <Template>
      <Header />
      <Container>
        <DetailBox>
          <UserImage>
            <img src={details?.user.avatar_url} alt="avatar" />
          </UserImage>
          <DetailIssueWrapper>
            <IssueInfoBox>
              <IssueTitle>
                <span>#{details?.number}</span>
                <span>{details?.title}</span>
              </IssueTitle>
              <IssueInfo>
                <span>작성자 : {details?.user.login}</span>
                <span>작성일 : {details?.updated_at.slice(0, 10)}</span>
              </IssueInfo>
            </IssueInfoBox>
            <IssueCommentBox>
              <span>코멘트 : {details?.comments}</span>
            </IssueCommentBox>
          </DetailIssueWrapper>
        </DetailBox>
        <DetailBody>{details?.body}</DetailBody>
      </Container>
    </Template>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
`;
const DetailBox = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const DetailIssueWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightTheme.borderColor};
  padding: 1rem;
  cursor: pointer;
`;

const IssueInfoBox = styled.div``;
const IssueCommentBox = styled.div`
  font-size: 0.875rem;
  color: ${lightTheme.subTextColor};
`;

const IssueTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;

  span {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;
const IssueInfo = styled.div`
  font-size: 0.875rem;
  color: ${lightTheme.subTextColor};
  span {
    margin-right: 1rem;
  }
`;

const DetailBody = styled.div`
  width: 100%;
  margin-top: 4rem;
`;
