import { SelectChangeEvent } from '@mui/material';

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
  type: 'GET_ISSUE' | 'GET_FIRST_ISSUE' | 'GET_ISSUE_SUCCESS' | 'GET_ISSUE_ERROR';
  data?: IssueType[];
}

export interface IssueProps {
  index: number;
  issue: IssueType;
}

export interface ContentProps {
  props: IssueType;
}

export interface MarkdownProps {
  markdown: string;
}

export interface Parameter {
  sort?: string;
  state?: string;
  perPage?: number;
  page?: number;
}

export interface SelectProps {
  title: string;
  onSelect: (e: SelectChangeEvent<string | any>) => void;
  content: string[];
}
