---
slug: url-fragmentation
title: GA URL fragmentation Issue
author: YoungChang Lee
author_url: https://github.com/p-iknow
author_image_url: https://avatars.githubusercontent.com/u/35516239?v=4
tags: [google-analytics, url-fragmentation]
---

## URL fragmentation 이슈란?
운영중인 사이트의 특정 페이지에서 Query String를 쓰고 있다면, 사용자는 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` URI로  모두 접근할 수 있다.  아마도 GA 분석시 2 URI 모두 하나의 페이지 값으로 기록될 것을 기대 하겠지만 GA 에서는 아래와 같이 기록된다.  이것이 바로 URL fragmentation 이슈이다.

![url-fragmentation-issue](https://user-images.githubusercontent.com/35516239/130347429-d05e9139-866d-4acf-8c08-41142cf16ae4.png)

 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` 두 URL 모두 같은 페이지를 의미하기  때문에 운영 중인 보기(View)에서는 두 페이지의 측정기준(Dimension)을 통합 하는 것이 유용하다. 여러 요청 URI 가 동일 사용자 경험을 나타낸다면 GA 에서 이들을 단일 페이지로 통합해야 한다.

Query String 이외에 trailing slash 로 인한 fragmentation 이슈도 있다. `www.yoursite.com/page-name/` 과  `www.yoursite.com/page-name` 로 같은 페이지 접속이 가능할 때 두 URL 이 각각 다른 페이지 값으로 기록된다.   참고로 `www.yoursite.com/page-name/` 에서 맨 마지막에 붙은 `/` 문자가 trailing slash 이다.

## 요청 URI 를 통합하는 방법
### 1) Query String을 제거하는 필터 설정하기
![image](https://user-images.githubusercontent.com/35516239/130347651-5bc8bc66-f4ab-41ab-ab89-c40f8d6ed764.png)

- 필드 A → 추출 A : `(.*?)\?`
- 출력 대상  → 생성자:  `$A1`  (여기서 `$A1` 위 필터에서 추출된 값을 변수로 표현한 문자)

위와 같이 필터를 설정 하면 Query String이 다른 두 페이지가 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` 가 동일하게  `/` 로 기록된다.

운영중인 사이트에 다양한 쿼리스트링이 사용되지 않고 있다면 아래와 같이 검색어 매게 변수 제외 사항에 사이트에 사용되는 Query String을 입력하는 것만으로 충분하다. 
![image](https://user-images.githubusercontent.com/35516239/130347850-ef76d816-8b71-43ec-a4ae-9e2b3520a3d0.png)


### 2) Trailing Slash 필터 설정
![image](https://user-images.githubusercontent.com/35516239/130347721-a11ef326-4434-493d-888d-4f5a1c47cc45.png)

- 필드 A → 추출 A : `^/(.*?)/+$`
- 출력 대상  → 생성자:  `/$A1`  (여기서 `$A1` 위 필터에서 추출된 값을 변수로 표현한 문자)

 위와 같이 필터를 설정하면 `www.yoursite.com/page-name/` 과  `www.yoursite.com/page-name` 두 페이지 모두 `/page-name` 로 기록된다.

## 마치며

전반적으로 URL fragmentation 이슈가 언제나 문제 되는 것은 아니지만, 문제가 되는 경우에는 큰 문제가 된다. 다른 모든 것이 제대로 구현된 많은 GA 계정에서도 URL Fragmentation 는 수만 개나 때로는 수십만 개로 분활된 요청 URI를 만들어 낸다. 이 글에서 제시된 해결책으로 해당 문제를 미연에 방지할 수 있다.
