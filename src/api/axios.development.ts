import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
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
        case 404:
          // alert('찾을 수 없는 정보입니다');
          history.push('/error');
          // window.location.reload();
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
