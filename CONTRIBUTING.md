# Contributing to Web-Analytics-Handbook

## Develop Environment
- [yarn](https://classic.yarnpkg.com/en/docs/getting-started) -v.1.22.10
- [vscode](https://code.visualstudio.com/)
- [vscode plugin - eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Installation

1. 이 저장소를 [Fork](https://help.github.com/articles/fork-a-repo/) 한 후
   로컬 기기에 [clone](https://help.github.com/articles/cloning-a-repository/) 합니다.
2. 브랜치 생성:
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. 의존성 설치:
   ```
   yarn install
   ```
4. 라이브러리 개발 서버 띄우기:
   ```
   yarn start
   ```
5. 그 외 여러가지 명령어들을 사용해볼 수 있습니다.
   ```
   # 빌드
   yarn build
   ```

## Commit message

커밋 메세지는 제목과 본문을 포함해야합니다.

제목은 해당 커밋에 대한 주요 내용을 간략하게 기록합니다. 

본문은 커밋에서 수정된 상세내역을 작성합니다. 생략 가능하며, `어떻게`보단 `무엇을`, `왜` 해결했는지 적어주시는 것이 좋습니다.

상황에 따라 연관된 이슈 트래킹 번호를 포함합니다.

## Issue

- 각 이슈는 1개의 주제만 포함해야합니다.
- 문제상황이나 제안을 포함해주세요.
- 최대한 구체적이고 명확하게 작성해주세요. *필요에 따라 스크린샷도 첨부해주세요.
- 직관적인 이해를 돕기 위해 자신의 이슈에 해당되는 라벨을 적용해주세요.

## Pull request(PR)

`main` 브랜치에 PR을 열어주세요.

각 PR은 1개의 주제만 포함해야합니다. 1개의 주제는 여러 부분의 코드를 수정할 수도 있습니다. 
- 예1) ```용어집```: `용어사전 검색 및 필터 기능 구현`은 기능 구현, 디자인 및 UI 수정, 타입스크립트 적용 등을 포함합니다.
- 예2) ```핸드북```: `퍼널 분석`은 문서 내용 추가, 해당 문서 position 코드 수정 등을 포함합니다.

## Coding Guidelines
`vscode`의 `eslint` 플러그인을 통해 미리 설정된 코드 컨벤션을 적용하고 검사해볼 수 있습니다.

## Add yourself as a contributor

기여자 목록에 자신을 추가하려면 [All Contributors 봇 설명서](https://allcontributors.org/docs/en/bot/usage)를 참고하세요 :)