import instance from './axios';

const COMMOM = process.env.REACT_APP_BASE_URL;

type QueryType = any;

export const getIssueList = async (obj: QueryType) => {
  let query = '';
  const queryArr = Object.entries(obj);

  queryArr.forEach(arr => (query += `${arr[0]}=${arr[1]}&`));

  const response = await instance.get(COMMOM + `?${query}`);
  return response;
};

export const getIssueItem = async (number: string | undefined) => {
  const response = await instance.get(COMMOM + `/${number}`);
  return response;
};
