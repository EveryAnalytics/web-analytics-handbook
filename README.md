<p align="center">
  <a href="https://everyanalytics.github.io/web-analytics-handbook/" target="blank">
    <img src="https://user-images.githubusercontent.com/3839771/128202563-2f5b9fc6-6b7d-4baf-9861-0cff67993be1.png" height="128">
    <h1 align="center">Web Analytics Handbook</h1>
  </a>
</p>

<p align="center">
  <a aria-label="react analytics provider" href="https://www.npmjs.com/package/@every-analytics/react-analytics-provider">
    <img alt="" src="https://img.shields.io/badge/React%20Analytics%20Provider-skyblue.svg?style=for-the-badge&label=library&labelColor=000000&logoWidth=20">
  </a>
  <a aria-label="License" href="https://github.com/EveryAnalytics/web-analytics-handbook/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/EveryAnalytics/web-analytics-handbook?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="GitHub Stars" href="https://github.com/EveryAnalytics/web-analytics-handbook">
    <img alt="" src="https://img.shields.io/github/stars/EveryAnalytics/web-analytics-handbook?style=for-the-badge&labelColor=000000">
  </a>
</p>

> 개발자를 위한 웹 사용자 데이터 분석 핸드북

- 🤔 DAU, GA... 먹는건가요?
- 📚 개발자에게 필요한 웹 분석 지식
- 👏🏻 GA와 Amplitude를 한번에

## 1. 실행방법
1. root 폴더에 `.env` 파일을 추가합니다

```shell
REACT_APP_GA_TRACKING_ID=트래킹아이디를적으세요.
```
2. 
```shell
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

## 2. 구성

```
1. 📚 핸드북
2. 💡 react-anlytics-provider
3. 👾 블로그
4. 🙋🏻 용어사전
```

## 3. 컨트리뷰터

This project exists thanks to all the people who contribute. [[Contributing](https://github.com/EveryAnalytics/react-analytics-provider/blob/main/CONTRIBUTING.md)]

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://hiphapis.net"><img src="https://avatars.githubusercontent.com/u/18629?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Johan Kim</b></sub></a><br /><a href="https://github.com/EveryAnalytics/web-analytics-handbook/pulls?q=is%3Apr+reviewed-by%3Ahiphapis" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/EveryAnalytics/web-analytics-handbook/commits?author=hiphapis" title="Code">💻</a></td>
    <td align="center"><a href="https://velog.io/@gwsyl22"><img src="https://avatars.githubusercontent.com/u/60775453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hyojin Kim</b></sub></a><br /><a href="https://github.com/EveryAnalytics/web-analytics-handbook/commits?author=hy57in" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/josworks27"><img src="https://avatars.githubusercontent.com/u/48130830?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seongcheol Jo</b></sub></a><br /><a href="https://github.com/EveryAnalytics/web-analytics-handbook/commits?author=josworks27" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/uoon-dev"><img src="https://avatars.githubusercontent.com/u/38661266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>uoon (philos)</b></sub></a><br /><a href="https://github.com/EveryAnalytics/web-analytics-handbook/commits?author=uoon-dev" title="Documentation">📖</a> <a href="https://github.com/EveryAnalytics/web-analytics-handbook/commits?author=uoon-dev" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 4. 라이센스

Licensed under the MIT License, Copyright (c) 2021 EveryAnalytics.

See [LICENSE](https://github.com/EveryAnalytics/web-analytics-handbook/blob/main/LICENSE) for more information.


## 5. [용어사전](https://everyanalytics.github.io/web-analytics-handbook/wiki) 네이밍 규칙
```
1. ${한글이름} (${영어이름}) 으로 표기
2. 복수인 경우 , 로 구분 ex. 측정기준 (Dimension), 측정항목 (Metrics)
```