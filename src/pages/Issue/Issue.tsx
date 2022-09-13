import axios from 'axios';
import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';

const Issue = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_ACCESS_TOKEN;

  const appContext = useContext(AppContext);

  const getRequest = async () => {
    const response = await axios({ url: BASE_URL, headers: { Authorization: `${API_KEY}` } });
    if (response.status === 200) {
      appContext.setIssueListData(response.data);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const data = appContext.IssueListData;
  console.log(data);

  return <>Issue</>;
};

export default Issue;
