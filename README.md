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
📦src
 ┣ 📂api
 ┃ ┣ 📜IssueService.tsx
 ┃ ┣ 📜axios.development.ts
 ┃ ┗ 📜axios.js
 ┣ 📂components
 ┃ ┗ 📜Spinner.tsx
 ┣ 📂context
 ┃ ┗ 📜IssueContext.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useIssueSearch.ts
 ┣ 📂pages
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┗ 📜Detail2.tsx
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜Error.tsx
 ┃ ┗ 📂Issue
 ┃ ┃ ┣ 📂IssueList
 ┃ ┃ ┃ ┣ 📜IssueItem.tsx
 ┃ ┃ ┃ ┗ 📜IssueList.tsx
 ┃ ┃ ┣ 📂IssueRepo
 ┃ ┃ ┃ ┣ 📜IssueRepo.tsx
 ┃ ┃ ┃ ┗ 📜IssueRepoInput.tsx
 ┃ ┃ ┗ 📜Issue.tsx
 ┣ 📂store
 ┃ ┗ 📜.gitkeep
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┗ 📜theme.js
 ┣ 📂types
 ┃ ┗ 📜IssueType.ts
 ┣ 📂utils
 ┃ ┣ 📜dateFormat.ts
 ┃ ┣ 📜markdownParser.ts
 ┃ ┗ 📜parsemd.js
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┗ 📜index.tsx
```

> ## 기능별 설명 / Best Practice

  <details>
    <summary>1. Issue 목록</summary>

- 이슈 목록 context API를 활용하여 불러오기
- 이슈 목록은 open 상태, comment 많은 순으로 query param에 넣어 요청
- 이슈 목록에 인피니트 스크롤 및 로딩 시 Spinner 적용
  - 인피니트 스크롤의 경우에는 custom hook으로 정의 + context와 연결
- 화면 너비에 따른 이슈 목록 반응형 UI 적용 (미완성)
- 이슈 목록에 광고 적용
- 이슈 목록 상에서 이슈를 클릭하면 선택한 아이템의 강조 표현 처리
- 추가 기능으로 repository를 변경할 수 있도록 하는 기능 작업 시도 (미완성)
- 반응형 UI 적용

<img width="25%" alt="Screen Shot 2022-09-15 at 10 06 45 AM" src="https://user-images.githubusercontent.com/96093461/190289505-dc398514-257e-41aa-b26c-c095fb6da75a.png">
 <img width="70%" alt="Screen Shot 2022-09-15 at 10 03 03 AM" src="https://user-images.githubusercontent.com/96093461/190289113-75aad059-d7cf-4bf9-9355-0b21ca9fa10f.png">

  </details>
<details>
    <summary>2. Issue 상세</summary>
    
- 이슈 본문 markdown 형태를 정규식으로 parsing하여 컴포넌트에 innerHTML으로 넣어줌
  - 추후 HoC로 분리할 예정

  </details>

<br>

> ## 미구현 내용

- 에러 처리 페이지
- 추가 기능으로 repository를 변경할 수 있도록 하는 기능 작업 시도 (미완성)

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

- Context API를 활용하여 context 관리를 시도해볼 수 있어서 좋았습니다. API로 받아온 데이터를 전역 context에서 관리하도록 설계하여 컴포넌트 간의 prop 전달 부분이 정리가 되었습니다.
- 무한 스크롤과 페이징 처리하는 부분을 별도의 custom hook으로 분리한 뒤, context에서 관리하도록 설계하였습니다.
- http client와 service 모듈을 분리한 뒤 service 모듈에서 http client 인스턴스를 주입하는 방식으로 구현하여 의존성 주입을 시도해보았는데, API 호출 및 응답 데이터를 관리하는 context 클래스와 관심사 분리가 완벽하게 되지 않아 설계가 조금 꼬여서 아쉬웠습니다.

    <img width="1892" alt="Screen Shot 2022-09-15 at 10 03 03 AM" src="https://user-images.githubusercontent.com/96093461/190289113-75aad059-d7cf-4bf9-9355-0b21ca9fa10f.png">

### 전지현

-

### 정재욱

-

### 추승연

-
