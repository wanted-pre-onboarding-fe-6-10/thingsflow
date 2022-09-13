import { useContext } from 'react';
import { IssueContext } from './IssueProvider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Issue = () => {
  const nav = useNavigate();
  const issues = useContext(IssueContext);

  return (
    <IssueContainer>
      {issues?.map((issue, index: number) => {
        return (
          <IssueBox onClick={() => nav(`/${issue.id}`)} key={issue.id as number}>
            <Wrapper>
              <IssueTitle>
                #{issue.number} {issue.title}
              </IssueTitle>
              <IssueSubText>
                작성자: {issue.user.login}, 작성일: {issue.created_at}
              </IssueSubText>
            </Wrapper>
            <Comments>{issue.comments}</Comments>
          </IssueBox>
        );
      })}
    </IssueContainer>
  );
};

export default Issue;

const IssueContainer = styled.div``;
const IssueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  border: 1px solid black;
  width: 50%;
`;

const Comments = styled.p`
  margin: 1rem 2rem;
`;
const IssueTitle = styled.h4``;
const IssueSubText = styled.h5``;
const Wrapper = styled.div`
  margin: 0 1rem;
`;
