import axios from 'axios';
import { useContext, useEffect } from 'react';
import { IssueDataType } from '../../AppContext';

import AppContext from '../../AppContext';
import IssueItem from './IssueItem/IssueItem';

const Issue = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_ACCESS_TOKEN;

  const appContext = useContext(AppContext);

  const getRequest = async () => {
    const response = await axios({ url: BASE_URL, headers: { Authorization: `${API_KEY}` } });

    if (response.status === 200) {
      const openData = response.data.filter((data: IssueDataType) => data.state === 'open');

      const SortedData = openData.sort((a: { comments: number }, b: { comments: number }) => {
        if (a.comments > b.comments) {
          return -1;
        }
        if (a.comments < b.comments) {
          return 1;
        }
        return 0;
      });

      const ad = { type: 'ad', id: Date.now() };
      SortedData.splice(4, 0, ad);

      appContext.setIssueListData(SortedData);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return <IssueItem />;
};

export default Issue;
