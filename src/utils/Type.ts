export interface IssueType {
  url: string;
  html_url: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
  };
  state: string;
  locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  body: string;
  reactions: {
    url: string;
    total_count: number;
  };
  timeline_url: string;
}
export interface StateType {
  isLoading: boolean;
  isError: boolean;
  data: IssueType[] | undefined;
}

export interface ActionType {
  type: 'GET_ISSUE' | 'GET_ISSUE_SUCCESS' | 'GET_ISSUE_ERROR';
  data?: IssueType[];
}
