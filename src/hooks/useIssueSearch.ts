import { useCallback, useEffect, useRef, useState } from 'react';
import { IssueType } from 'src/types/IssueType';

type useIssueSearchType = {
  query: string;
  defaultPageNumber: number;
  getOpenIssues: any;
  targetRepo: string;
};

export default function useIssueSearch({
  query,
  defaultPageNumber,
  getOpenIssues,
  targetRepo,
}: useIssueSearchType) {
  const [pageNumber, setPageNumber] = useState(defaultPageNumber);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState<Array<IssueType>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIssues([]);
  }, [query]);

  useEffect(() => {
    setIssues([]);
    setPageNumber(defaultPageNumber);
  }, [targetRepo]);

  useEffect(() => {
    if (targetRepo.length > 0) {
      setLoading(true);
      setError(false);
      getOpenIssues(targetRepo, pageNumber)
        .then((res: any) => {
          setIssues(prevIssues => [...prevIssues, ...res.data]);
          setHasMore(res.data.length >= 20);
          setLoading(false);
        })
        .catch((err: any) => setError(true));
    }
  }, [query, defaultPageNumber, targetRepo]);

  const observer = useRef<any>();
  const lastIssueElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return { loading, error, issues, hasMore, lastIssueElementRef };
}
