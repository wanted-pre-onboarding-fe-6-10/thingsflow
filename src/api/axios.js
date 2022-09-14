import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN;
    return config;
  },
  err => Promise.reject(err)
);

// instance.interceptors.response.use(
// )

export default instance;
