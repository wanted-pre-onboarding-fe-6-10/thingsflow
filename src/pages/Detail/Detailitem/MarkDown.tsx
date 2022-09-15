import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { MarkdownProps } from 'utils/Type';
import '../../../../node_modules/github-markdown-css/github-markdown-light.css';

const MarkDown = ({ markdown }: MarkdownProps) => {
  return (
    <MarkDownStyle className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkDownStyle>
  );
};

const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export default MarkDown;
