import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme } from 'styles/theme';
import { IssueProvider } from 'utils/IssueContext';
import Router from './Router';

function App() {
  return (
    <IssueProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </IssueProvider>
  );
}

export default App;
