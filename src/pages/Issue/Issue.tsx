import Header from 'components/Header';
import Template from 'components/Template';
import IssueList from './IssueList';
import { getGithubIssues } from 'api/gitAPI';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';

const Issue = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
      try {
        const res = await getGithubIssues(page);
        setIssues(issues.concat(res));
      } catch {
        console.error('fetching error');
      }
    };
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(issues);

  return (
    <Template>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        issues && issues.map((issue, idx) => <IssueList key={idx} issue={issue} />)
      )}
    </Template>
  );
};

export default Issue;
