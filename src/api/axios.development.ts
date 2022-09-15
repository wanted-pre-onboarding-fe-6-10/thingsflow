import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
  },
});

export default instance;
