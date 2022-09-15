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
        <td align="center">팀장, 이슈 조건 검색과 이슈 리스트 페이지 및 상세 페이지 구현</td>
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
- 과제의 범위가 협업을 위한 스케일은 아니어서 개인 프로젝트로 각자 ContextAPI 활용과 Typescript 활용 방법에 대한 학습과 실습을 병행하고자 진행한 프로젝트
- Github Rest API를 활용해 특정 Repository에서 발행된 Issue 리스트를 받아오고 리스트 클릭 시 상세페이지까지 확인할 수 있는 페이지 개발 프로젝트
- 특정 조건에 맞는 API를 요청하고 그 결과를 모바일과 데스크탑에서 확인할 수 있도록 하는 UI 개발 프로젝트

> ## 기술 Stack

- React
- Typescript
- Styled-components
- Material UI
- craco
- react-spinner
- react-markdown
- github-markdown-css

  <br>

> ## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜getIssue.tsx
 ┣ 📂components
 ┃ ┣ 📜IssueCard.tsx
 ┃ ┣ 📜SelectMenu.tsx
 ┃ ┗ 📜spinner.tsx
 ┣ 📂pages
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📂Detailitem
 ┃ ┃ ┃ ┣ 📜DetailItem.tsx
 ┃ ┃ ┃ ┗ 📜MarkDown.tsx
 ┃ ┃ ┗ 📜Detail.tsx
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜Error.tsx
 ┃ ┣ 📂Issue
 ┃ ┃ ┣ 📂IssueList
 ┃ ┃ ┃ ┗ 📜IssueList.tsx
 ┃ ┃ ┗ 📜Issue.tsx
 ┃ ┗ 📜IssuesContext.tsx
 ┣ 📂store
 ┃ ┗ 📜.gitkeep
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜getDate.ts
 ┃ ┣ 📜sort.ts
 ┃ ┗ 📜Type.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜Router.tsx
```

> ## 기능별 설명 / Best Practice

### 필수 기능

  <details>
    <summary>1. Issue List </summary>
    

    1. 이슈 목록 API 활용
      - Github Rest API를 활용해서 API 요청
      - 요청한 API는 ContextAPI를 활용해 state관리 및 reducer를 활용한 dispatch로 값 변환. 최초 state 값에 isLoading과 isError이라는 값을 추가해 로딩 중과 에러 발생 여부를 하나의 state로 관리하도록 지정
      - 각 API 요청은 api/getIssue.tsx에 모듈화

    2. open 상태의 이슈 중 코멘트가 많은 순으로 정렬
      - Github Rest API에서 Issue를 받아오는 API 요청 query parameter 중 sort, state, perPage, page를 활용해 코멘트 많은 순으로 open 상태인 Issue를 원하는 페이지별 개수와 원하는 페이지로 받아올 수 있게 API 요청 함수 구현(api/getIssue.tsx)
      - 추가적으로 각 상태별 API 요청을 할 수 있도록 구현(추가 기능 Issue Search 참고)

    3. 각 행에는 이슈번호, 이슈제목, 작성자, 코멘트수 표시
      - 각 행에 이슈번호, 이슈제목, 작성자, 코멘트 수를 표시하고 추가적으로 프로필 이미지와 언제 작성했는지에 대한 SNS 형식의 시간(O분 전, O시간 전 등)으로 표시 추가

    4. 다섯번째 셀 광고 이미지 출력
      - map함수를 실행하면서 넘겨주는 인덱스 값을 활용해 5번째 칸에는 광고 이미지가 들어갈 수 있도록 구현
      - thingflow 홈페이지로 새창이 뜨게 구현(window.open())

    5. 화면 아래로 스크롤 할 시 목록 추가 로딩(인피니티 스크롤)
      - IntersectionObserver을 활용해서 특정 태그에 도달하게 되면 그 부분을 인식해 page 값을 이전 값 보다 +1 해주고 그에 맞는 페이지를 API 요청하여 받아온 다음 지금까지 랜더링된 값들의 뒤에 스프레드 연산자로 추가해주어서 인피니티 스크롤 구현.
      - 데이터 API 요청간 로딩 표시를 spinner로 표현(components/spinner.tsx)
    

  </details>
  
  ![띵스플로우 이슈 리스트 및 광고](https://user-images.githubusercontent.com/79856086/190292543-4b70a35b-e7bf-4064-b257-b5ea4485b8da.PNG)

  <details>
    <summary>2. Issue Detail </summary>

    1. 이슈의 상세 내용 표시
      - 이슈의 상세 내용 API 요청을 ContextAPI로 저장하여 state를 통한 관리(Issue List와 같은 메커니즘)

    2. ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
      - Issue List에서 보여주던 카드 형식을 같이 활용하여 윗부분에 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수를 표시하고 아래에 따로 분리해서 본문 내용이 보이도록 구현
      - 본문 내용의 경우 Markdown 형태라 react-Markdown 라이브러리와 gitgub-markdown-css 라이브러리를 활용해서 UI 개선
    


  </details>
  
  ![띵스플로우 디테일](https://user-images.githubusercontent.com/79856086/190292592-39c184cf-9824-4140-af52-c8eac9ec22b5.PNG)

<br/>

### 추가 기능

<details>
    <summary>1. Issue search </summary>

    1. 이슈 검색 기능 추가
      - state, sort, perPage, page 각 값을 query parameter로 API 요청을 보낼 수 있도록 API 요청 함수를 구현했고, 각 값들의 default 값을 주어 Github Rest API DefaultValue와 일치 시키도록 구현
      - Select로 state, sort를 선택하고 page 값들은 입력할 수 있도록 구현
      - 검색 시 랜더링을 새로하여 원하는 데이터들이 나올 수 있도록 하고 Infinite scroll도 정상 작동하도록 구현
      


  </details>
  
  ![이슈검색기능](https://user-images.githubusercontent.com/79856086/190292639-b9f9697e-e7a5-4be1-867a-a43a8c9424e0.PNG)

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

- Github Rest API를 활용해보면서 정말 다양한 기능들이 있고 API를 통해서 깃을 활용할 수 있다는 점을 알 수 있었다.
- Issue List와 Detail 페이지를 구성하면서 검색기능이 있으면 좋지 않을까 해서 상태별 검색 기능을 추가했는데 추가적으로 Rest API Docs를 보면서 특정 사람의 repository를 검색해서 그 해당 repository의 이슈를 받아올 수 있는 기능이 있으면 이 서비스의 기능이 훨씬 더 사용자 친화적으로 개선될 것 같다는 생각을 했다. 여유가 된다면 이 기능은 추가해보고 싶다.

### 김한얼

-

### 박진성

-

### 신이재

-

### 전지현

-

### 정재욱

-

### 추승연

-
