import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
interface Props {
  markdown: string;
}

const MarkDown = ({ markdown }: Props) => {
  return (
    <MarkDownStyle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkDownStyle>
  );
};

const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`;

export default MarkDown;
