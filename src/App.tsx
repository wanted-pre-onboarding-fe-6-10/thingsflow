import instance from 'api/axios';
import IssueService from 'api/IssueService';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme } from 'styles/theme';
import { IssueProvider } from './context/IssueContext';
import Router from './Router';

const issueService = new IssueService(instance);

function App() {
  return (
    <IssueProvider issueService={issueService}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </IssueProvider>
  );
}

export default App;
