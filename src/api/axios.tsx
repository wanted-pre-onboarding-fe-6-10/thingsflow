import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  config => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    if (accessToken) {
      config.headers!.Authorization = accessToken;
    }
    return config;
  },

  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => response,
  err => Promise.resolve(err.response)
);

export default instance;
