import IssueProvider from 'pages/Issue/IssueProvider';
import Router from './Router';

function App() {
  return (
    <IssueProvider>
      <Router />
    </IssueProvider>
  );
}

export default App;
