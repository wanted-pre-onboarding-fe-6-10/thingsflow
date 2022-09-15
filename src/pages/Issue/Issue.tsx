import styled from 'styled-components';
import IssueList from './IssueList/IssueList';
import IssueRepo from './IssueRepo/IssueRepo';
import IssueRepoInput from './IssueRepo/IssueRepoInput';

const Issue = () => {
  return (
    <Container>
      <IssueRepo />
      <IssueRepoInput />
      <IssueList />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.subBgColor};
`;

export default Issue;
