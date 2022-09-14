import Header from 'components/Header';
import Template from 'components/Template';
import IssueList from './IssueList';
import { getGithubIssues } from 'api/gitAPI';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { useIssueDispatch, useIssueState } from 'utils/IssueContext';

const Issue = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useIssueDispatch();
  const state = useIssueState();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const getRandomImageThenSet = async () => {
      setLoading(true);
      try {
        const res = await getGithubIssues(page);
        dispatch({ type: 'SET_ISSUE', issue: state.issue.concat(res) });
      } catch {
        console.error('fetching error');
      }
      setLoading(false);
    };
    getRandomImageThenSet();
  }, [page, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Template>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        state.issue &&
        state?.issue.map((issue, idx) => <IssueList key={idx} index={idx} issue={issue} />)
      )}
    </Template>
  );
};

export default Issue;
