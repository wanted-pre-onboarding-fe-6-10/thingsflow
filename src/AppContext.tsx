import React, { Dispatch, SetStateAction } from 'react';

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at?: any;
}

interface Reactions {
  url: string;
  total_count: number;
  ' +1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface IssueList {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee?: any;
  assignees: any[];
  milestone?: any;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at?: any;
  author_association: string;
  active_lock_reason?: any;
  draft: boolean;
  pull_request: PullRequest;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: any;
  state_reason?: any;
}

interface IssueListType {
  IssueListData: IssueList[];
  setIssueListData: Dispatch<SetStateAction<never[]>>; // 맞는지? [질문]-context에서 type 지정하는법 질문
}

const AppContext = React.createContext<IssueListType>({
  IssueListData: [],
  // [질문]type
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIssueListData: () => {},
});

export default AppContext;
