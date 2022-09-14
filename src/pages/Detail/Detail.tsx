import { getIssueDetail } from 'api/IssueService2';
import { useEffect, useState } from 'react';
import { IssueType } from 'src/types/IssueType';
import styled from 'styled-components';
import { formatDate } from 'utils/dateFormat';
import { markdownParser } from 'utils/markdownParser';
import { parseMarkdown } from 'utils/parsemd';

type DetailType = {
  issueNumber: number;
};

const Detail = ({ issueNumber }: DetailType) => {
  const [issue, setIssue] = useState<IssueType>();

  const fetchDetail = async () => {
    const response = await getIssueDetail(issueNumber);
    if (response) setIssue(response.data);
  };

  useEffect(() => {
    fetchDetail();
  }, [issueNumber]);

  return (
    <Box>
      {issue && (
        <>
          <Wrapper>
            <Avatar src={issue.user.avatar_url} />
            <Column>
              <Row>
                #{issue.number} {issue.title}
              </Row>
              <Row>
                작성자: {issue.user.login}, 작성일: {formatDate(issue.created_at)}
              </Row>
            </Column>
            <Comment>코멘트: {issue.comments}</Comment>
          </Wrapper>
          <Body dangerouslySetInnerHTML={parseMarkdown(issue.body)} />
        </>
      )}
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  cursor: pointer;

  & + & {
    border-top: 0.1em ${props => props.theme.borderColor} solid;
  }

  :hover {
    background-color: ${props => props.theme.subBgColor};
  }
`;

const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div``;

const Description = styled.div``;

const Avatar = styled.img`
  width: 4em;
  border-radius: 100%;
`;

const Comment = styled.div``;

const Body = styled.div`
  .preview {
    display: flex;
    justify-content: space-evenly !important;
    align-items: center;
    flex-direction: row;
  }
  .info {
    background-color: black;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 5px;
    word-wrap: break-word;
    overflow: auto;
  }
  .heading {
    margin-left: 35%;
    font-size: 40px;
  }
  .inf {
    background-color: black;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: auto;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(97, 89, 89);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #524b4b;
  }
  .align {
    justify-content: center;
    align-items: center;
    margin-left: 35%;
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  a,
  a:visited {
    color: #01ff70;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2ecc40;
  }

  .retro-no-decoration {
    text-decoration: none;
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .retro-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .retro-h1,
  h2,
  .retro-h2,
  h3,
  .retro-h3,
  h4,
  .retro-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .retro-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .retro-h2 {
    font-size: 2.827rem;
  }

  h3,
  .retro-h3 {
    font-size: 1.999rem;
  }

  h4,
  .retro-h4 {
    font-size: 1.414rem;
  }

  h5,
  .retro-h5 {
    font-size: 1.121rem;
  }

  h6,
  .retro-h6 {
    font-size: 0.88rem;
  }

  small,
  .retro-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  html,
  body {
    background-color: #222;
    min-height: 100%;
  }

  html {
    font-size: 18px;
  }

  body {
    color: #fafafa;
    font-family: 'Courier New';
    line-height: 1.45;
    margin: 6rem auto 1rem;
    max-width: 48rem;
    padding: 0.25rem;
  }

  pre {
    background-color: #333;
  }

  blockquote {
    border-left: 3px solid #01ff70;
    padding-left: 1rem;
  }
`;

export default Detail;
