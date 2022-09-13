import Detail from 'pages/Detail/Detail';
import Error from 'pages/Error/Error';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './AppContext';
import Issue from './pages/Issue/Issue';

const Router = () => {
  const [IssueListData, setIssueListData] = useState([]);

  return (
    // [질문] -type?
    <AppContext.Provider value={{ IssueListData, setIssueListData }}>
      <BrowserRouter>
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
