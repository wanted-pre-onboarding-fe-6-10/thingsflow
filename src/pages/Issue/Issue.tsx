import React, { useContext, useEffect, useRef, useState } from 'react';
import { IssueContext } from './IssueProvider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getIssueList } from 'api/api';

const Issue = () => {
  const nav = useNavigate();
  const issueURL = `/issues?state=open&sort=comments&page=`;
  const handleIssueList = useContext(IssueContext);
  const { issues, setIssues } = handleIssueList;
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMore = () => setPageNum(prev => prev + 1);

  const getIssues = async (page: number) => {
    const response = await getIssueList(issueURL + page);
    setIssues(p => [...p, ...response]);
    setLoading(true);
  };

  useEffect(() => {
    getIssues(pageNum);
  }, [pageNum]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) loadMore();
        },
        { threshold: 1 }
      );
      observer.observe(observerRef.current as Element);
    }
  }, [loading]);

  return (
    <IssueContainer>
      {issues.map((issue, index: number) => {
        return (
          <div key={issue.id}>
            <div>{index === 4 && <h1>image</h1>}</div>
            <IssueBox onClick={() => nav(`/${issue.number}`)}>
              <Wrapper>
                <IssueTitle>
                  #{issue.number} {issue.title}
                </IssueTitle>
                <>
                  작성자: {issue.user.login}, 작성일: {issue.created_at}
                </>
              </Wrapper>
              <Comments>{issue.comments}</Comments>
            </IssueBox>
          </div>
        );
      })}
      <div ref={observerRef}>Loding...</div>
    </IssueContainer>
  );
};

export default Issue;

const IssueContainer = styled.div``;
const IssueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  border: 1px solid black;
  width: 50%;
`;

const Comments = styled.p`
  margin: 1rem 2rem;
`;
const IssueTitle = styled.h4``;
const Wrapper = styled.div`
  margin: 0 1rem;
`;
