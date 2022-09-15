# Wanted Pre-Onboarding 6차 10팀 TenKeyLess, thingsflow 기업과제

## 🌏 배포링크

http://wanted610.s3-website.ap-northeast-2.amazonaws.com/

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
<tr>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

- 예시
  <br>

> ## 폴더 구조

```
폴더구조 자리
```

> ## 기능별 설명 / Best Practice

  <details>
    <summary>1.Context API</summary>
      <br>
    useContext를 사용하는 Custom Hook을 만들어서 컴포넌트에서 useContext을 직접 사용하는 대신  커스텀 훅을 사용해서 state와 dispatch 사용 
  </details>
      <br>
    <details>
    <summary>2. Infinite Scroll</summary>
          <br>
      - 현재의 높이값과 화면의 전체 높이값을 비교하여 page의 값을 +1 <br>
      - page값이 변함에 따라서 api 호출 시 파라미터로 넘겨 다른 페이지의 값을 받아와서 렌더링
  </details>
        <br>
    <details>
    <summary>3. 다섯번째 셀에 광고 이미지 출력</summary>
          <br>
     - map의 index을 활용하여 5번째 리스트에 광고 이미지 삽입 <br>
      - _blank 속성을 활용하여 새 창으로 링크 이동
  </details>
        <br>
    <details>
    <summary>4. 이슈 상세 화면 본문 마크다운 변환</summary>
          <br>
      - react-markdown 라이브러리를 사용해서 1차로 마크다운을 변환 <br>
      - github-markdown-css 라이브러리를 사용해서 코드블럭, 인라인, 이모지 등 추가 된 마크다운 언어 변환
  </details>

<br>

> ## 미구현 내용

- 예시

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser", // eslint를 typescript에서 쓸 수 있도록 변환해줌
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

### 윤관

-

### 김한얼

-

### 박진성

-

### 신이재

-

### 전지현

-

### 정재욱

- 타입스크립트를 사용하면서 기존의 자바스크립트로 진행했던 것보다 고려해야 할 사항이 많아서 시간이 오래 걸렸음
- 직접 프로젝트에 적용해 보니 타입스크립트에 대해서 더 자세히 알게 되었다.

### 추승연

-
