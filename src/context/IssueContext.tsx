import IssueService from 'api/IssueService';
import useIssueSearch from 'hooks/useIssueSearch';
import { useEffect, useRef } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';

type IssueProviderType = {
  issueService: IssueService;
  children: any;
};

// FIXME typescript 도입으로 인한 context default값 설정 문제
export const IssueContext = createContext({
  issues: [],
  isLoading: false,
  error: false,
  setTargetRepository: (tt: any) => console.log(),
  lastIssueElementRef: null,
});

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ issueService, children }: IssueProviderType) {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [focusedIssue, setFocusedIssue] = useState();

  const { issues, hasMore, loading, error } = useIssueSearch({
    query: '',
    pageNumber,
    getOpenIssues: issueService.getOpenIssues,
  });

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

  useEffect(() => {
    // TODO Delete: 시연용
    // setInterval(() => console.log('LOADING'), 10000);

    setIsLoading(loading);
  }, [loading]);

  const setTargetRepository = (repository: string) => {
    issueService.setTargetRepository(repository);
    setPageNumber(1);
    setIsLoading(true);
  };

  const value: any = {
    issues,
    isLoading,
    error,
    setTargetRepository,
    lastIssueElementRef,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
