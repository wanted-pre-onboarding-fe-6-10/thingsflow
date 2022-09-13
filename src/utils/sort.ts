import { IssueType } from './Type';

export const sortBy = (data: IssueType[]) => {
  return data.sort((a, b) => (a.comments > b.comments ? -1 : 1));
};
