import { getIssues } from 'api/IssueService2';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import IssueItem from './IssueItem';

const IssueList = () => {
  // const { issues } = useIssue();
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const response = await getIssues(1);
    setIssues(response.data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <Box>
      {issues.map((item, idx) => (
        <>
          <IssueItem key={idx} issue={item} />
          {idx === 4 ? <Banner src="/띵스플로우.png" /> : null}
        </>
      ))}
    </Box>
  );
};

const Box = styled.div`
  display: grid;
  width: 100%;
`;

const Banner = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  opacity: 0.5;
  background-color: ${props => props.theme.subBgColor};
`;

export default IssueList;
