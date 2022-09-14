import { IssueType } from './Type';

export const sortBy = (data: IssueType[]) => {
  const filteredData = data.filter(v => {
    return v.state === 'open';
  });
  return filteredData.sort((a, b) => (a.comments > b.comments ? -1 : 1));
};
