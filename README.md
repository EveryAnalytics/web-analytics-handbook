# Web Analytics Handbook

개발자를 위한 웹 사용자 데이터 분석 핸드북
https://everyanalytics.github.io/web-analytics-handbook/

## 환경 설정

1. `.env`파일 추가

```
REACT_APP_GA_TRACKING_ID=트래킹아이디를적으세요.
```


## Installation

```bash
# 의존성 설치
yarn install

# 로컬 서버 띄우기
yarn start

# 빌드
yarn build

# 배포
GIT_USER=<Your GitHub Username>
USE_SSH=true
yarn deploy
```
## 구성

1. 📚 핸드북
2. 💡 react-anlytics-provider
3. 👾 블로그
4. 🙋🏻 용어사전

### ❗️[용어사전](https://everyanalytics.github.io/web-analytics-handbook/wiki) 네이밍 규칙
- `${한글이름} (${영어이름})` 으로 표기
- 복수인 경우 `,` 로 구분  `ex. 측정기준 (Dimension), 측정항목 (Metrics)`
