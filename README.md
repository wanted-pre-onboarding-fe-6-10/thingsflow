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

- Angular-cli 레포지토리의 issue를 보여주는 App

> ## 프로젝트 진행방법

1. 각 팀원은 필수 기능을 구현한 뒤, 중간 회의를 통해 코드 리뷰를 진행했다.
2. 추가 기능 구현 뒤, Best Practice를 논의한 뒤 선정하여 메인 브랜치에 병합했다.

  <details>
    <summary>Best Practice 선정 이유</summary>

    - Context API를 사용하는 Custom Hook을 사용해서 분리를 한 점이 좋았다.
    - 전역으로 사용하는 types을 따로 분리해서 사용성이 좋았다.
    - 추가 기능(레포지토리 검색을 통한 issue 리스트 확인)이 있다.
    - UI 완성도가 높고 반응형에 따라 두 가지 컨셉으로 보여준다는 부분이 좋았다.
    - Custom Hook을 적절하게 활용해서 Infinite scroll도 간단하면서 효율적으로 작업하셨고 Context API를 적재적소에 같이 활용한 부분이 좋았다.
    - types 분리와 추가 기능에 대한 부분으로 확장성까지 고려한 부분이 좋았다.

  </details>

  <br/>

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br>

> ### 해당 기술 선택이유<br>

- React

  - 생태계가 넓고, 다양한 라이브러리 사용 가능
  - virtual DOM을 활용하여 빠른 렌더링 가능
  - 단방향 데이터 바인딩을 통한 디버깅 용이

- typescript : 명시적인 정적 타입 지정을 통해 컴파일 단계에서 오류를 미리 감지할 수 있다.

- Styled-component : css를 컴포넌트화 하여 사용할 수 있다.

<br/>

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

<details>
    <summary>3. 추가 기능</summary>
    
- Github API 호출 제한 초과 시 403 에러에 대한 alert 처리
- 찾을 수 없는 레포지토리에 대한 404 에러에 대한 alert 처리
- 레포지토리 경로 변경 기능 추가
<img width="1357" alt="Screen Shot 2022-09-15 at 11 44 52 AM" src="https://user-images.githubusercontent.com/96093461/190301426-370d0865-cdbe-4121-b457-6081ea329e3c.png">

  </details>
<br>

> ## 미구현 내용

- 에러 처리 페이지 UI
- 모바일 화면에서의 디테일 화면 연결

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/thingsflow/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/thingsflow/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

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

- Github Rest API를 활용해보면서 정말 다양한 기능들이 있고 API를 통해서 깃을 활용할 수 있다는 점을 알 수 있었다.
- Issue List와 Detail 페이지를 구성하면서 검색기능이 있으면 좋지 않을까 해서 상태별 검색 기능을 추가했는데 추가적으로 Rest API Docs를 보면서 특정 사람의 repository를 검색해서 그 해당 repository의 이슈를 받아올 수 있는 기능이 있으면 이 서비스의 기능이 훨씬 더 사용자 친화적으로 개선될 것 같다는 생각을 했다. 여유가 된다면 이 기능은 추가해보고 싶다.

### 김한얼

- Typescript와 ContextAPI를 연계해서 활용하는데 많은 에러와 시행착오를 겪었는데, 이를 통해 한층 더 Typescript에 대한 이해도를 많이 높일 수 있었다.
- reducer를 통한 dispatch로 state 관리를 하려고 했는데 그 부분이 많이 어려워서 추가적인 학습을 진행할 예정이다.

### 박진성

- Typescript를 처음 사용해봤는데 정말 러닝 커브가 높은 언어인 것 같다. 하지만, 타입지정을 통해 미리미리 디버깅을 할 수 있고 규모가 커질수록 활용도가 높을거란 기대가 된다.

### 신이재

- Context API를 활용하여 context 관리를 시도해볼 수 있어서 좋았습니다. API로 받아온 데이터를 전역 context에서 관리하도록 설계하여 컴포넌트 간의 prop 전달 부분이 정리가 되었습니다.
- 무한 스크롤과 페이징 처리하는 부분을 별도의 custom hook으로 분리한 뒤, context에서 관리하도록 설계하였습니다.
- http client와 service 모듈을 분리한 뒤 service 모듈에서 http client 인스턴스를 주입하는 방식으로 구현하여 의존성 주입을 시도해보았는데, API 호출 및 응답 데이터를 관리하는 context 클래스와 관심사 분리가 완벽하게 되지 않아 설계가 조금 꼬여서 아쉬웠습니다.

    <img width="1892" alt="Screen Shot 2022-09-15 at 10 03 03 AM" src="https://user-images.githubusercontent.com/96093461/190289113-75aad059-d7cf-4bf9-9355-0b21ca9fa10f.png">

### 전지현

1.  api 명세서 충분한 숙지 부족<br/>
    api 명세서를 잘 파악하지 못한 채 진행을 해서 나중에 코드를 많이 수정해야 했다.<br/>
    앞으로는 사용하기 전에 어떤 api 요청을 할 수 있는지 등을 먼저 파악한 후 진행해야 할 것이다.

    <br/>

2.  동료학습을 통한 사고 확장<br/>
    무한스크롤 구현 방법이 내가 알고 있던 방법뿐 아니라 여러 방법이 있었다. <br/>
    나의 사고에만 갇혀있지 않기 위해 코드를 공유하는 것에 대한 중요성을 느꼈다.

### 정재욱

- 타입스크립트를 사용하면서 기존의 자바스크립트로 진행했던 것보다 고려해야 할 사항이 많아서 시간이 오래 걸렸음
- 직접 프로젝트에 적용해 보니 타입스크립트에 대해서 더 자세히 알게 되었다.

### 추승연

- 타입스크립트를 학습하고 처음 진행하는 프로젝트라 타입 관련하여 이슈가 많았다. 동일한 프로젝트를 자바스크립트로 진행했다면 작업 시간은 더 빨랐겠지만 학습이라는 의미에서 이번 프로젝트를 통해 습득한게 많은 것 같다.
- context API의 경우 활용에 익숙해지면 다음 프로젝트 진행에 많은 도움이 될 것 같다.
