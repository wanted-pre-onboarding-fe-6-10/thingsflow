import { IssueProvider } from 'pages/IssuesContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Router from './Router';
import { lightTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <IssueProvider>
        <GlobalStyle />
        <Router />
      </IssueProvider>
    </ThemeProvider>
  );
}

export default App;
