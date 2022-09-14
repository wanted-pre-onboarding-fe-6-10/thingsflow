import Detail from 'pages/Detail/Detail';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueItem from './IssueItem';
import { useIssue } from 'context/IssueContext';
import Spinner from 'components/Spinner';
import { IssueType } from 'src/types/IssueType';

const IssueList = () => {
  // const [pageNumber, setPageNumber] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  //TODO useContext()로 대체
  const { issues, isLoading, error, setTargetRepository, lastIssueElementRef } = useIssue();

  const [focusedIssue, setFocusedIssue] = useState(-1);

  useEffect(() => {
    setTargetRepository('angular/angular-cli');
  }, []);

  // const { issues, hasMore, loading, error } = useIssueSearch({ query: '', pageNumber });

  // const observer = useRef<any>();

  // const lastIssueElementRef = useCallback(
  //   (node: any) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver(entries => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber(prev => prev + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  // useEffect(() => {
  //   // TODO Delete: 시연용
  //   setInterval(() => console.log(''), 10000);

  //   setIsLoading(loading);
  // }, [loading]);

  return (
    <Box>
      <ListWrapper>
        {issues.map((item: IssueType, idx: number) => (
          <IssueItemWrapper key={idx}>
            <IssueItem issue={item} focusedIssue={focusedIssue} setFocusedIssue={setFocusedIssue} />
            {issues.length === idx + 1 ? <div ref={lastIssueElementRef} /> : null}
            {idx === 4 ? (
              <Banner href="https://thingsflow.com/ko/home">
                <BannerImg src="/띵스플로우.png" />
              </Banner>
            ) : null}
          </IssueItemWrapper>
        ))}
        {isLoading && <Spinner />}
      </ListWrapper>

      {/* {focusedIssue !== -1 && (
        <DetailWrapper>
          <Detail issueNumber={focusedIssue} />
        </DetailWrapper>
      )} */}
    </Box>
  );
};

const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  overflow-y: scroll;
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IssueItemWrapper = styled.div`
  width: 100%;
  & + & {
    margin-top: 0.5rem;
  }
`;

const DetailWrapper = styled.div`
  background-color: white;
  padding: 2rem;
`;

const Banner = styled.a``;

const BannerImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  opacity: 0.5;
  background-color: ${props => props.theme.subBgColor};
  margin-top: 1rem;
`;

export default IssueList;
