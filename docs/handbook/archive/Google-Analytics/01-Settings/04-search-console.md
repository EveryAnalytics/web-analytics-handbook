---
slug: google-search-console
title: 구글 서치 콘솔
author: chanheeis
author_url: https://github.com/chanheeis
author_image_url: https://avatars.githubusercontent.com/u/53820773
tags: [GoogleAnalytics, GA, Search Console]
---

# Google Search Console (구글 서치 콘솔)

## 1. Google Search Console (이하 서치 콘솔)의 정의

서치 콘솔은 구글의 웹마스터 도구로, 구글 검색 엔진이 사이트를 색인할 수 있도록 사이트맵을 등록하고, SEO를 위한 관리 기능을 제공하는 서비스입니다.

## 2. GA와 서치 콘솔을 연동해야 하는 이유

구글 검색 엔진은 referer정보를 암호화하기 때문에, GA만으로는 구글 검색 키워드를 수집할 수 없습니다. 따라서, 구글 검색 엔진으로부터 유입되는 키워드 정보를 수집하려면 서치 콘솔을 연동하여야 합니다.

> **referer**
>
> referer는 현재 사이트에 진입하기 직전의 사이트 정보를 의미합니다.

## 3. GA와 서치 콘솔 연동

현재 GA4 속성은 서치 콘솔과의 연동이 불가능합니다. 서치 콘솔과 연동하려면 Universal Analytics 속성을 새로 추가하는 과정이 필요합니다.

1. 현재 버전 (21.10 기준)의 GA는 속성 생성 시 GA4가 default로 되어 있습니다.
2. UA 속성을 새로 생성하기 위해, 먼저 관리자 화면으로 이동하세요.
   ![UA_step_1](https://user-images.githubusercontent.com/53820773/135612776-cc9a6265-cf49-4ae7-ae21-06e4ec1092be.PNG)
3. 상단의 `속성만들기`를 클릭하세요.
4. 속성의 세부 설정을 입력하세요.
   ![UA_step_2](https://user-images.githubusercontent.com/53820773/135612781-0401f88d-b384-476d-9d02-7c0159d66559.PNG)
5. 하단의 `고급 옵션 보기`를 클릭하세요.
6. 고급 옵션 설정을 입력한 후 `다음`을 클릭하면 UA 속성이 새로 생성됩니다.
   ![UA_step_3](https://user-images.githubusercontent.com/53820773/135612783-b10dcc54-033d-4971-ac48-771e0d7f792d.PNG)

이제 서치 콘솔와 연결한 후 구글 검색 키워드 수집이 가능합니다. 서치 콘솔과 GA 연동 방법은 두 가지가 있습니다.

- _서치 콘솔 페이지 > 설정 > 연결 > 연결된 서비스_ 에서 설정
- _GA 페이지 > 관리 > 제품 연결하기 > 모든 제품 > Search Console_ 연결
