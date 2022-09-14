import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme } from 'styles/theme';

type Issue = {
  number: number;
  title: string;
  updated_at: string;
  comments: number;
  user: {
    login: string;
  };
};

type Issues = {
  issue: Issue;
};

const IssueList = ({ issue }: Issues) => {
  const navigate = useNavigate();

  const onMoveDetail = () => {
    navigate(`/${issue.number}`);
  };
  return (
    <Container onClick={onMoveDetail}>
      <IssueInfoBox>
        <IssueTitle>
          <span>#{issue.number}</span>
          <span>{issue.title}</span>
        </IssueTitle>
        <IssueInfo>
          <span>작성자 : {issue.user.login}</span>
          <span>작성일 : {issue.updated_at.slice(0, 10)}</span>
        </IssueInfo>
      </IssueInfoBox>
      <IssueCommentBox>
        <span>코멘트 : {issue.comments}</span>
      </IssueCommentBox>
    </Container>
  );
};

export default IssueList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightTheme.borderColor};
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const IssueInfoBox = styled.div`
  /* width: 80%;
  overflow: hidden;
  white-space: nowrap; */
`;
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
