import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

type Markdown = {
  markdown: string | undefined;
};

const MarkdownRender = ({ markdown }: Markdown) => {
  return <Container>{markdown && <ReactMarkdown>{markdown}</ReactMarkdown>}</Container>;
};

export default MarkdownRender;

const Container = styled.div`
  width: 100%;
  font-size: 1rem;
`;
