import Header from 'components/Header';
import Detail from 'pages/Detail/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Issue from './pages/Issue/Issue';
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/:number" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
