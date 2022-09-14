import styled from 'styled-components';
import IssueList from './IssueList/IssueList';

const Issue = () => {
  return (
    <Container>
      <IssueList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export default Issue;
