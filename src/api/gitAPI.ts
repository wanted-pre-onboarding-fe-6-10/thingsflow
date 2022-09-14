import axios from 'axios';

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
};

export const getGithubIssues = async (page: number) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}?sort=comments&per_page=30&page=${page}`,
      {
        headers,
      }
    );
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const GetDetailIssue = async (number: string | undefined) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${number}`, {
      headers,
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};
