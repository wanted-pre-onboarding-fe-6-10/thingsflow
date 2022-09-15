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
  const [isLoading, setIsLoading] = useState(false);
  const [targetRepository, setTargetRepository] = useState('angular/angular-cli');

  const { issues, hasMore, loading, error, lastIssueElementRef } = useIssueSearch({
    query: '',
    defaultPageNumber: 1,
    getOpenIssues: issueService.getOpenIssues,
    targetRepo: targetRepository,
  });

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    issueService.setTargetRepository(targetRepository);
  }, [issueService, targetRepository]);

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
