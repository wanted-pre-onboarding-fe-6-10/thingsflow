import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import '../../../node_modules/github-markdown-css/github-markdown.css';

type Markdown = {
  markdown: string | undefined;
};

const MarkdownRender = ({ markdown }: Markdown) => {
  return (
    <Container>
      {markdown && <ReactMarkdown className="markdown-body">{markdown}</ReactMarkdown>}
    </Container>
  );
};

export default MarkdownRender;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;
