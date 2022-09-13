import { createContext, useEffect, useState } from 'react';
import { getIssueList } from 'api/api';
import React from 'react';

export const IssueContext = createContext<Issuetype[] | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface Issuetype {
  [key: string]: any;
}

const IssueProvider = ({ children }: Props) => {
  useEffect(() => {
    getIssues();
  }, []);

  const [issues, setIssues] = useState<Issuetype[]>([]);

  const getIssues = async () => {
    const res = await getIssueList();
    setIssues(res);
  };

  return <IssueContext.Provider value={issues}>{children}</IssueContext.Provider>;
};

export default IssueProvider;
