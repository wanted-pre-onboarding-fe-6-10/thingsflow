import React, { useState } from 'react';
import { IssueContextType, IssueType, Props } from 'src/type/type';

export const IssueContext = React.createContext<IssueContextType>({
  issues: [],
  setIssues: () => null,
});

const IssueProvider = ({ children }: Props) => {
  const [issues, setIssues] = useState<IssueType[]>([]);

  return <IssueContext.Provider value={{ issues, setIssues }}>{children}</IssueContext.Provider>;
};

export default IssueProvider;
