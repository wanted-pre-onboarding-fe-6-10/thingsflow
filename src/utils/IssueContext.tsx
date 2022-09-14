import React, { createContext, Dispatch, useReducer, useContext } from 'react';

type Issue = {
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
};

type State = {
  issue: Issue[];
};

type Action = { type: 'SET_ISSUE'; issue: Issue[] };

type IssueDispatch = Dispatch<Action>;

const IssueStateContext = createContext<State | null>(null);
const IssueDispatchContext = createContext<IssueDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_ISSUE':
      return {
        ...state,
        issue: action.issue,
      };

    default:
      throw new Error('Unhandled action');
  }
}

export function IssueProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    issue: [],
  });
  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
}

export function useIssueState() {
  const state = useContext(IssueStateContext);
  if (!state) throw new Error('IssueProvider를 찾을 수 없음');
  return state;
}

export function useIssueDispatch() {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) throw new Error('IssueProvider를 찾을 수 없음');
  return dispatch;
}
