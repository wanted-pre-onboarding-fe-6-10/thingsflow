import axios from 'axios';
import { useContext, useEffect } from 'react';
import { IssueDataType } from '../../AppContext';
import AppContext from '../../AppContext';
import IssueItem from './IssueItem/IssueItem';
import Loading from 'components/Loading';

const Issue = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_KEY = process.env.REACT_APP_ACCESS_TOKEN;

  const appContext = useContext(AppContext);
  const { isLoading, setIsLoading } = appContext;

  const getRequest = async () => {
    const response = await axios({ url: BASE_URL, headers: { Authorization: `${API_KEY}` } });

    if (response.status === 200) {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);

      const openData = response.data.filter((data: IssueDataType) => data.state === 'open');

      type sortTpye = { comments: number };

      const SortedData = openData.sort((a: sortTpye, b: sortTpye) =>
        a.comments > b.comments ? -1 : 1
      );

      const ad = { type: 'ad', id: Date.now() };
      SortedData.splice(4, 0, ad);

      appContext.setIssueListData(SortedData);
    }
  };

  useEffect(() => {
    getRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{isLoading ? <Loading /> : <IssueItem />}</div>;
};

export default Issue;
