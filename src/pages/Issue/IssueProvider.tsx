import React, { useState } from 'react';
import { IssueContextType, IssueType, Props } from 'src/type/type';

export const loadingImg =
  'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!c1024wm0';

export const IssueContext = React.createContext<IssueContextType>({
  issues: [],
  setIssues: () => null,
});

const IssueProvider = ({ children }: Props) => {
  const [issues, setIssues] = useState<IssueType[]>([]);

  return <IssueContext.Provider value={{ issues, setIssues }}>{children}</IssueContext.Provider>;
};

export default IssueProvider;
