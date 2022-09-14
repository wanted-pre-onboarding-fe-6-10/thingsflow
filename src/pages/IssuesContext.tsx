import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { ActionType, StateType } from 'utils/Type';

const IssuesListContext = createContext<StateType | null>(null);
const IssuesListDispatchContext = createContext<Dispatch<ActionType> | null>(null);

const IssueContext = createContext<StateType | null>(null);
const IssueDispatchContext = createContext<Dispatch<ActionType> | null>(null);

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

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: [],
  });

  return (
    <IssuesListContext.Provider value={state}>
      <IssuesListDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesListDispatchContext.Provider>
    </IssuesListContext.Provider>
  );
};

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: [],
  });
  return (
    <IssueContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>{children}</IssueDispatchContext.Provider>
    </IssueContext.Provider>
  );
};

export const useIssuesListState = () => {
  const state = useContext(IssuesListContext);
  if (!state) throw new Error('IssuesProvider를 못찾겠습니다.');
  return state;
};

export const useIssuesListDispatch = () => {
  const dispatch = useContext(IssuesListDispatchContext);
  if (!dispatch) throw new Error('IssuesProvider를 못찾겠습니다.');
  return dispatch;
};

export const useIssueState = () => {
  const state = useContext(IssueContext);
  if (!state) throw new Error('IssueProvider를 못찾겠습니다.');
  return state;
};

export const useIssueDispatch = () => {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) throw new Error('IssueProvider를 못찾겠습니다.');
  return dispatch;
};
