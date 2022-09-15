import { useIssuesListDispatch, useIssuesListState } from 'pages/IssuesContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getIssue } from 'api/getIssue';
import styled from 'styled-components';
import IssueList from './IssueList/IssueList';
import Spinner from 'components/spinner';
import SelectMenu from 'components/SelectMenu';
import { Button, SelectChangeEvent, TextField } from '@mui/material';

const Issue = () => {
  const state = useIssuesListState();
  const dispatch = useIssuesListDispatch();
  const loader = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState('comments');
  const [issueState, setIssueState] = useState('open');
  const [perPage, setPerPage] = useState(30);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const selectSort = (e: SelectChangeEvent) => {
    e.preventDefault();
    setSort(e.target.value);
  };
  const selectState = (e: SelectChangeEvent) => {
    e.preventDefault();
    setIssueState(e.target.value);
  };
  const onSearch = () => {
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: [] });
  };

  const getIssueList = async () => {
    dispatch({ type: 'GET_ISSUE' });
    try {
      const res = await getIssue({ sort, state: issueState, perPage, page });
      setIsLoading(false);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: [...state.data!, ...res.data] });
    } catch (error) {
      dispatch({ type: 'GET_ISSUE_ERROR' });
    }
  };
  useEffect(() => {
    getIssueList();
  }, [page]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage(prev => prev + 1);
      }
    },
    [state]
  );
  useEffect(() => {
    const option = { root: null, rootMargin: '20px', threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <Container>
      {isLoading ? (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
      ) : (
        <>
          <Title>Angular/Angular-cli</Title>
          <SelectBox>
            <SelectMenu
              title={'sort'}
              onSelect={selectSort}
              value={sort}
              content={['created', 'updated', 'comments']}
            />
            <SelectMenu
              title={'state'}
              value={issueState}
              onSelect={selectState}
              content={['open', 'closed', 'all']}
            />
            <TextField
              id="outlined-number"
              label="per_page"
              type="number"
              value={perPage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPerPage(Math.abs(parseInt(e.target.value)))
              }
              InputLabelProps={{
                shrink: true,
                inputMode: 'numeric',
              }}
            />
            <TextField
              id="outlined-number"
              label="page"
              type="number"
              value={page}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPage(Math.abs(parseInt(e.target.value)))
              }
              InputLabelProps={{
                shrink: true,
                inputMode: 'numeric',
              }}
            />
            <IssueBtn variant="contained" onClick={onSearch}>
              검색
            </IssueBtn>
          </SelectBox>
          <IssueBox>
            {state.data?.map((v, i) => (
              <IssueList key={i} index={i} issue={v} />
            ))}
          </IssueBox>
        </>
      )}
      {!state.isLoading && <LoaderBox ref={loader}></LoaderBox>}
      {state.isLoading && (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
      )}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpinnerBox = styled.div`
  position: sticky;
  display: inline-block;
  top: 50%;
  left: 50%;
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 1rem;
`;
const IssueBox = styled.div`
  border-radius: 1rem;
  background-color: ${props => props.theme.subBoxColor};
`;
const IssueBtn = styled(Button)`
  height: 3rem;
  width: 6rem;
`;
export const LoaderBox = styled.div``;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem;
`;
export default Issue;
