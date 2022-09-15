import IssueService from 'api/IssueService';
import useIssueSearch from 'hooks/useIssueSearch';
import { useEffect, useRef } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';
import { IssueType } from 'src/types/IssueType';

type IssueProviderType = {
  issueService: IssueService;
  children: any;
};

export type IssueContextType = {
  targetRepository: string;
  issues: Array<IssueType>;
  isLoading: boolean;
  error: boolean;
  setTargetRepository: any;
  lastIssueElementRef: any;
  getIssueDetail: any;
};

// FIXME typescript 도입으로 인한 context default값 설정 문제
export const IssueContext = createContext<IssueContextType | null>(null);

export const useIssue = () => {
  const context = useContext<IssueContextType | null>(IssueContext);
  if (!context) throw new Error('No context');
  return context;
};

export function IssueProvider({ issueService, children }: IssueProviderType) {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(loading);
  }, [loading]);

  const setTargetRepository = (repository: string) => {
    issueService.setTargetRepository(repository);
  };

  const getNewIssues = useCallback(() => {
    // alert('NEW');
    setPageNumber(1);
    setIsLoading(true);
  }, [issueService]);

  useEffect(getNewIssues, [getNewIssues]);

  const value: any = {
    targetRepository: issueService.targetRepository,
    issues,
    isLoading,
    error,
    setTargetRepository,
    lastIssueElementRef,
    getIssueDetail: issueService.getIssueDetail,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
