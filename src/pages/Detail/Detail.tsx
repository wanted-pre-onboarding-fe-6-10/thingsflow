import { issueAxios } from 'api/getIssue';
import { Container } from 'pages/Issue/Issue';
import { useIssueDispatch, useIssueState } from 'pages/IssuesContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailItem from './Detailitem/DetailItem';

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
    <DetailContainer>
      {state.isLoading ? (
        <>이슈를 받아오는 중입니다.</>
      ) : (
        <>
          <DetailItem props={state.data![0]} />
        </>
      )}
    </DetailContainer>
  );
};
const DetailContainer = styled(Container)`
  height: 100%;
  background-color: ${props => props.theme.subBoxColor};
`;

export default Detail;
