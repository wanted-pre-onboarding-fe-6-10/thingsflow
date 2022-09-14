import Detail from 'pages/Detail/Detail';
import Error from 'pages/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Issue from './pages/Issue/Issue';
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/:number" element={<Detail />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
