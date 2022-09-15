import axios from 'axios';

export const getGithubIssues = async (page: number) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}?sort=comments&per_page=30&page=${page}`
    );
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const GetDetailIssue = async (number: string | undefined) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${number}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
