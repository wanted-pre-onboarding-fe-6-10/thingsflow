import axios from 'axios';
import { Parameter } from 'utils/Type';

export const issueAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
});

export const getIssue = async ({ sort, state, perPage, page }: Parameter) => {
  return issueAxios.get(`issues?sort=${sort}&state=${state}&per_page=${perPage}&page=${page}`);
};
