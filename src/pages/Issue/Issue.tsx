import { useIssuesListDispatch, useIssuesListState } from 'pages/IssuesContext';
import { useCallback, useEffect, useRef, useState } from 'react';

import { issueAxios } from 'api/getIssue';
import styled from 'styled-components';
import IssueList from './IssueList/IssueList';

const Issue = () => {
  const state = useIssuesListState();
  const dispatch = useIssuesListDispatch();
  const loader = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const getIssueList = async () => {
    dispatch({ type: 'GET_ISSUE' });
    try {
      const res = await issueAxios.get(
        `${process.env.REACT_APP_BASE_URL}?sort=comments&per_page=10&page=${page}`
      );
      setIsLoading(false);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: [...state.data!, ...res.data] });
    } catch (error) {
      dispatch({ type: 'GET_ISSUE_ERROR' });
    }
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage(prev => prev + 1);
      }
    },
    [state.data]
  );

  useEffect(() => {
    getIssueList();
    // page 디펜던시 넣기
  }, [page]);

  useEffect(() => {
    const option = { root: null, rootMargin: '20px', threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  console.log(state.data);
  return (
    <Container>
      {isLoading ? (
        <>이슈를 받아오는 중입니다.</>
      ) : (
        <>
          <Title>Angular Issue List</Title>
          <IssueBox>
            {state.data?.map((v, i) => (
              <IssueList key={i} index={i} list={v} />
            ))}
          </IssueBox>
        </>
      )}
      {!state.isLoading && <LoaderBox ref={loader}></LoaderBox>}
      {!isLoading && state.isLoading && <>다음 이슈를 받아오는 중입니다.</>}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IssueBox = styled.div`
  border-radius: 1rem;
  background-color: ${props => props.theme.subBoxColor};
`;
const LoaderBox = styled.div``;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem;
`;
export default Issue;
