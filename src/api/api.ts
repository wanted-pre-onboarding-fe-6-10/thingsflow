import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Basic ${API_KEY}`,
  },
});

export const getIssueList = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data;
  } catch {
    console.error('error');
  }
};
