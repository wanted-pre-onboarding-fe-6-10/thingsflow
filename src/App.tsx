import IssueProvider from 'pages/Issue/IssueProvider';
import Router from './Router';
import styled from 'styled-components';

function App() {
  return (
    <IssueProvider>
      <Header>Angular/Angular-cli</Header>
      <Router />
    </IssueProvider>
  );
}

export default App;

const Header = styled.h1``;
