import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          alert('API 요청 호출 제한 초과');
          break;
        case 404:
          alert('접근 불가한 레포지토리입니다.');
          // history.push('/error');
          break;
        default:
      }
    } else {
      // ex. 서버 키지 않은 경우
    }
    return Promise.reject(error);
    // return false;
  }
);

export default instance;
