import React, { useContext, useEffect, useRef, useState } from 'react';
import { IssueContext } from './IssueProvider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getIssueList } from 'api/api';
import dateConvert from 'utils/convertStringTodate';
import IssueBox from './IssueBox';

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
    setIssues(p => (page === 1 ? [...response] : [...p, ...response]));
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
      <IssueBox />
      <div ref={observerRef}>Loding...</div>
    </IssueContainer>
  );
};

export default Issue;

const IssueContainer = styled.div``;
