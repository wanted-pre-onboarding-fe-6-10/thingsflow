import { useIssue } from 'context/IssueContext';
import styled from 'styled-components';

const IssueRepo = () => {
  const { targetRepository } = useIssue();

  return <Box>{targetRepository}</Box>;
};

const Box = styled.div`
  text-align: center;
  font-size: xx-large;
  font-weight: 600;
`;

export default IssueRepo;
