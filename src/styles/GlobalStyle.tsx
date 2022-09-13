// Reset CSS
// 브라우저의 모든 기본 스타일 초기화

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// [질문] - type 지정 이렇게 맞는지?
interface Theme {
  ownColor: string;
  ownColorHover: string;
  bgColor: string;
  textColor: string;
  subTextColor: string;
  borderColor: string;
  boxColor: string;
  subBoxColor: string;
  subBoxColor2: string;
}

interface RootObject {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle`
${reset}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${(props: RootObject) => {
    return props.theme.bgColor;
  }};
  color: ${(props: RootObject) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
/* 부드러운 스크롤 */
html {
    scroll-behavior: smooth;
}
:root {
  --vh: 100%;
}
`;

export default GlobalStyle;
