import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { useState } from 'react';
import AppContext, { IssueDataType } from './AppContext';
import Router from './Router';

function App() {
  const [issueListData, setIssueListData] = useState<IssueDataType[]>([]);

  return (
    <AppContext.Provider value={{ issueListData, setIssueListData }}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
