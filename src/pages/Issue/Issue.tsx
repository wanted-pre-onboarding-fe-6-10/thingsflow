/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useRef } from 'react';
import AppContext from '../../AppContext';
import IssueItem from './IssueItem/IssueItem';
import Loading from 'components/Loading';
import { getIssueList } from '../../api/issueApi';

let pageNum = 1;

const Issue = () => {
  const appContext = useContext(AppContext);
  const { setIssueListData } = appContext;

  const isScroll = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRequest = async (pageNum: number) => {
    const response = await getIssueList({
      page: pageNum,
      per_page: 10,
      state: 'open',
      sort: 'comments',
    });

    if (response.status === 200) {
      setTimeout(() => {
        setIsLoading(false);

        if (pageNum === 1) {
          const ad = { type: 'ad', id: Date.now() };
          response.data.splice(4, 0, ad);
        }

        setIssueListData(prev => [...prev, ...response.data]);
      }, 1000);
    }
  };

  useEffect(() => {
    getRequest(pageNum);
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    if (isScroll.current === false && window.innerHeight + window.scrollY >= scrollHeight - 50) {
      isScroll.current = true;
      pageNum += 1;

      getRequest(pageNum);
    }

    setTimeout(() => {
      isScroll.current = false;
      setIsLoading(true);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <IssueItem />
      <div style={{ height: '8rem' }}>{isLoading && <Loading />}</div>
    </div>
  );
};

export default Issue;
