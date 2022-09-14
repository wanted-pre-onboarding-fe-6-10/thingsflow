import { issueAxios } from 'api/getIssue';
import { useIssueDispatch, useIssueState } from 'pages/IssuesContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  const state = useIssueState();
  const dispatch = useIssueDispatch();

  const getDetail = async () => {
    try {
      dispatch({ type: 'GET_ISSUE' });
      const res = await issueAxios.get(`/${params.number}`);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: [res.data] });
    } catch {
      dispatch({ type: 'GET_ISSUE_ERROR' });
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {state.isLoading ? (
        <>이슈를 받아오는 중입니다.</>
      ) : (
        <>
          <div>{state.data![0].number}</div>
          <div>{state.data![0].title}</div>
          <div>{state.data![0].user.id}</div>
          <div>{state.data![0].created_at}</div>
          <div>{state.data![0].comments}</div>
          <img src={state.data![0].user.avatar_url} alt="" />
          <div>{state.data![0].body}</div>
        </>
      )}
    </>
  );
};

export default Detail;
