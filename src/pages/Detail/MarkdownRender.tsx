import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';

type Markdown = {
  markdown: string | undefined;
};

const MarkdownRender = ({ markdown }: Markdown) => {
  return (
    <Container>
      {markdown && <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>}
    </Container>
  );
};

export default MarkdownRender;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;
