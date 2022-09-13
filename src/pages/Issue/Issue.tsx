import axios from 'axios';
import { stat } from 'fs';
import { useIssueState } from 'pages/IssuesContext';
import { useEffect } from 'react';
import { IssueType } from 'utils/Type';
import { useIssueDispatch } from './../IssuesContext';
import { sortBy } from './../../utils/sort';
import { useNavigate } from 'react-router-dom';

const Issue = () => {
  const navigate = useNavigate();
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const issueAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });

  const getIssueList = async () => {
    dispatch({ type: 'GET_ISSUE' });
    try {
      const res = await issueAxios.get('');
      sortBy(res.data);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: res.data });
    } catch (error) {
      dispatch({ type: 'GET_ISSUE_ERROR' });
    }
  };

  const getIssue = (id: number) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    getIssueList();
  }, []);

  return (
    <>
      <ul>
        {state.data?.map((v, i) => (
          <div key={i}>
            <li>{v.title}</li>
            <li>{v.comments}</li>
            <button onClick={() => getIssue(v.number)}>click</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Issue;
