import ReactMarkdown from 'react-markdown';
import '../../node_modules/github-markdown-css/github-markdown.css';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
