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
    <summary>1. 이슈 목록 화면</summary>

    1. API 호출
    - git hub 이슈 목록 가져오기 API 활용
    - api 호출 시 parameter 값으로 sort=comments & state=open 전달하여 open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    - src/api 폴더 내 api.tsx -> axios instance 생성하여 모듈화 후 각 컴포넌트에서 api 호출 시 활용

    2. Infinite scroll 구현
    - IntersectionObserver API 활용하여 이슈 목록 화면 내의 무한 스크롤 동작 구현 : scroll event를 활용 대비 렌더링 최소화
    - observer 생성 후 미리 지정한 observerRef element가 viwpoint에 들어오면 다음 페이지의 api data 호출
    - 호출된 데이터들은 useState를 사용하여 저장

    3. context api 활용한 api 연동
    - Issue page 내 IssueProvider.tsx 컴포넌트에 context api 생성
    - 생성된 context api를 통해 useState의 state와 setState를 전달
    - useContext를 통해 Issue.tsx에서는 setState만 IssueBox.tsx에서는 state만 호출하여 기능 구현

    4. 광고 이미지 출력
    - useContext를 통해 불러온 배열을 map method를 활용하여 구현
    - map method의 두번째 parameter로 index값을 지정하고 index값이 4일 때 issueBox 위에 이미지 추가
    - 이미지 클릭시 띵스플로우 홈페이지로 이동

  </details>

<br>

  <details>
    <summary>2. 이슈 상세 화면</summary>

    1. 이슈 상세 화면 이동
    - 이슈 목록 화면에서 이슈 클릭 시 해당 이슈의 number 값을 Param으로 전달
    - 해당 number 값을 useParam으로 전달받아 상세 이슈 api 재호출

    2. 본문 표시 위해
    - markdown 라이브러리 사용하여 본문 내용 표시
    - github-markdown-css 사용하여 스타일링

  </details>

<br>

  <details>
    <summary>3. 기타</summary>

    1. 반응형 UI 적용
    - styled component에서 스크린 값에 따른 UI 변경 구현

    2. converDate 함수 모듈화 통해 이슈 작성일 변환

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

-

### 추승연

- 타입스크립트를 학습하고 처음 진행하는 프로젝트라 타입 관련하여 이슈가 많았다. 동일한 프로젝트를 자바스크립트로 진행했다면 작업 시간은 더 빨랐겠지만 학습이라는 의미에서 이번 프로젝트를 통해 습득한게 많은 것 같다.
- context API의 경우 활용에 익숙해지면 다음 프로젝트 진행에 많은 도움이 될 것 같다.
