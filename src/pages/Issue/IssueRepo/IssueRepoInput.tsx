import { useIssue } from 'context/IssueContext';
import { useState } from 'react';
import styled from 'styled-components';

const IssueRepoInput = () => {
  const { setTargetRepository } = useIssue();
  const [repo, setRepo] = useState('');

  const handleSetRepository = () => {
    setTargetRepository(repo);
  };

  return (
    <Box>
      <Label>https://github.com/</Label>
      <Input
        type="text"
        placeholder="레포지토리 경로 입력"
        value={repo}
        onChange={e => setRepo(e.target.value)}
      />
      <ConfirmButton onClick={handleSetRepository}>조회</ConfirmButton>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-size: x-large;
  font-weight: 600;
  color: ${props => props.theme.lightTextColor};
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 2rem;
  padding: 1rem 0.5rem;
  background-color: transparent;
  font-size: x-large;
  font-weight: 600;
  ::placeholder {
    color: ${props => props.theme.ownColorHover};
    font-weight: 400;
  }

  :focus {
    outline: 0;
    caret-color: gray;
    ::placeholder {
      color: transparent;
    }
  }
`;

const ConfirmButton = styled.button`
  white-space: nowrap;
  height: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 0;
  font-weight: 600;
  background-color: ${props => props.theme.ownColor};

  :hover {
    background-color: ${props => props.theme.ownColorHover};
  }
`;

export default IssueRepoInput;
