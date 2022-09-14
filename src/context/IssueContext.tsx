import { createContext, useCallback, useContext, useState } from 'react';

export const IssueContext = createContext(null);

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ issueService, children }: any) {
  const [issues, setIssues] = useState([]);

  const getIssues = useCallback(() => {
    issueService.getIssues().then(setIssues);
  }, [issueService]);

  const value: any = {
    issues,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
