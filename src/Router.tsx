import Detail from 'pages/Detail/Detail';
import Error from 'pages/Error/Error';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext, { IssueDataType } from './AppContext';
import Issue from './pages/Issue/Issue';
import Header from './components/Header';

const Router = () => {
  // [질문clear] -type?
  const [issueListData, setIssueListData] = useState<IssueDataType[]>([]);

  return (
    <AppContext.Provider value={{ issueListData, setIssueListData }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Issue />} />
          <Route path="/:number" element={<Detail />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
