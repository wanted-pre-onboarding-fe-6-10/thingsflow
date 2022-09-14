import { getIssues, getOpenIssues } from 'api/IssueService2';
import { useEffect, useState } from 'react';
import { IssueType } from 'src/types/IssueType';

type useIssueSearchType = {
  query: string;
  pageNumber: number;
};

export default function useIssueSearch({ query, pageNumber }: useIssueSearchType) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState<Array<IssueType>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIssues([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getOpenIssues(pageNumber)
      .then(res => {
        setIssues(prevIssues => [...prevIssues, ...res.data]);
        setHasMore(res.data.length >= 20);
        setLoading(false);
      })
      .catch(err => setError(true));
  }, [query, pageNumber]);

  return { loading, error, issues, hasMore };
}
