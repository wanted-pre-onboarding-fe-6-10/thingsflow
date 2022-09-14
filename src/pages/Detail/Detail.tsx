import { issueAxios } from 'api/getIssue';
import Spinner from 'components/spinner';
import { Container, SpinnerBox } from 'pages/Issue/Issue';
import { useIssueDispatch, useIssueState } from 'pages/IssuesContext';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DetailItem from './Detailitem/DetailItem';

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const getDetail = async () => {
    try {
      dispatch({ type: 'GET_ISSUE' });
      const res = await issueAxios.get(`issues/${params.number}`);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: [res.data] });
    } catch {
      alert('잘못된 경로입니다. 메인화면으로 돌아갑니다.');
      navigate('/');
      dispatch({ type: 'GET_ISSUE_ERROR' });
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <DetailContainer>
      {state.isLoading ? (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
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
