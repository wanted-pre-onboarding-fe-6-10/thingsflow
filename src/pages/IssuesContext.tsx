import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { ActionType, IssueType, StateType } from 'utils/Type';

const IssuesContext = createContext<StateType | null>(null);
const IssuesDispatchContext = createContext<Dispatch<ActionType> | null>(null);

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'GET_ISSUE':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        isError: true,
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: [
      {
        url: '',
        html_url: '',
        number: 0,
        title: '',
        user: {
          login: '',
          id: 0,
          node_id: '',
          avatar_url: '',
          html_url: '',
        },
        state: '',
        locked: false,
        comments: 0,
        created_at: '',
        updated_at: '',
        closed_at: '',
        body: '',
        reactions: {
          url: '',
          total_count: 0,
        },
        timeline_url: '',
      },
    ],
  });

  return (
    <IssuesContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}> {children} </IssuesDispatchContext.Provider>
    </IssuesContext.Provider>
  );
};

export const useIssueState = () => {
  const state = useContext(IssuesContext);
  if (!state) throw new Error('IssueProvider를 못찾겠습니다.');
  return state;
};

export const useIssueDispatch = () => {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) throw new Error('IssueProvider를 못찾겠습니다.');
  return dispatch;
};
