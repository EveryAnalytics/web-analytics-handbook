---
slug: Google Analytics Basic
title: Google Analytics Basic
author: Seongcheol Jo
author_url: https://github.com/josworks27
author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [GoogleAnalytics, GA]
---

# 구글 애널리틱스 기본

## 0. 들어가기에 앞서

본 자료는 구글 애널리틱스 도움말의 초보자용 Google 애널리틱스의 주요 내용을 처음 시작하는 초보자들이 이해하기 쉽게 요약하였습니다.

자세한 내용이 궁금하다면 아래 링크를 참고해 주세요.

[👉 원문 링크](https://support.google.com/analytics/answer/6383002?hl=ko)

## 1. 디지털 애널리틱스 정의

디지털 애널리틱스에 대해 구글의 Avinash Kaushik은 아래와 같은 정의를 내렸습니다.
> '고객과 잠개고객의 온라인 사용 경험을 지소적으로 개선하여, 온라인과 오프라인에서 원하는 비즈니스 결과를 얻기 위해 자사 및 경쟁사에 대한 정성적, 정량적 데이터를 분석하는 것'

마케팅에서는 구매 유입경로의 개념을 활용하고 있는데, 기본적인 구매 유입경로를 보면 일반적으로 사용자들은 상품을 아래와 같은 단계로 구매합니다.

* 획득 단계: 인지도 제고와 사용자 관심분야를 확보하는 시점
* 행동 단계: 사용자가 귀사에 참여하는 시점
* 전환 단계: 사용자가 귀사의 고객이 되어 거래하는 시점

이러한 과정을 디지털 애널리틱스를 활용하여 유입경로의 다양한 측면을 측정할 수 있고, 구매를 유도한 동작이 무엇인지 추적하고 해당 데이터를 이용하여 신규 및 기존 고객에게 도달하는 방법에 대한 정확한 판단을 내릴 수 있습니다.

## 2. 구글 애널리틱스의 작동 방식

### 웹 사이트 추적

웹 사이트를 추적하기 위해선 구글 애널리틱스 계정을 만들고, 웹 사이트의 각 페이지에 자바스크립트 추적 코드를 추가해야 합니다. 이를 통해, 사용자가 페이지를 방문할 때마다 추적 코드는 사용자가 해당 페이지와 상호작용한 방법에 대한 익명 정보를 수집합니다.

페이지가 로드될 때 마다 추적 코드는 사용자 활동에 대한 정보를 수집하고 전송합니다. 구글 애널리틱스는 이 활동을 '세션'이라고 하는 기간별로 그룹화합니다.

세션은 사용자가 추적 코드가 포함된 페이지로 이동할 때 시작되며, 30분 동안 활동이 없으면 종료됩니다. 세션이 종료된 후 사용자가 다시 페이지로 돌아오면 새로운 세션이 시작됩니다.

### 처리 및 보고

추적 코드는 데이터를 수집할 때 해당 정보를 패키지로 묶어 구글 애널리틱스에 전송하여 보고서로 처리되도록 합니다. 구글 애널리틱스에서는 데이터를 처리할 때 사용자 기기가 모바일인지 데스크톱인지 또는 사용자가 사용한 브라우저의 유형과 같은 특정 기준에 따라 데이터를 집계하고 구성합니다.

![GA-Image-1](https://lh3.googleusercontent.com/AIFpRSMWBNNjsxvUKT9_9RVfV90tdE1YnfhltUWS1BYwn1G16ESdYzn3bMLJCwBS_A=w1790-h500)

## 3. 구글 애널리틱스 설정

### 3.1. 애널리틱스 구현의 기본 요소

모든 구글 애널리틱스 계정은 '조직(Organization)' 아래에 그룹화 할 수 있습니다. 이를 통해, 여러 구글 애널리틱스 계정을 한 그룹으로 관리할 수 있습니다.

![GA-Image-2](https://lh3.googleusercontent.com/_FW7BZSOnetJdZw_FShlv1rINVBM1_OSKISLi9BIAZKe5C2GxTGdLbXGLq6o2IHV1fyh=w1020-h570)

각 계정에는 여러 개의 '속성(Property)'이, 각 속성에는 여러 개의 '보기(View)'가 포함될 수 있어, 비즈니스에 가장 잘 맞는 방식으로 애널리틱스 데이터의 수집을 구성할 수 있습니다.

각 계정에는 1개 이상의 '속성'이 있고, 각 '속성'은 추적 코드에 표시되는 고유한 추적 ID(TrackingID)를 사용하여 서로 독립적으로 데이터를 수집할 수 있습니다.

#### 보기(View) 설정

각 계정에 여러 개의 '속성'이 있는 것과 마찬가지로 각 '속성'에는 여러 개의 '보기(View)'가 있을 수 있습니다. 구성 설정에서 필터 기능을 사용하여 각 '보기'의 보고서에 포함될 데이터를 결정할 수 있습니다.

![GA-Image-3](https://lh3.googleusercontent.com/SZuK8_PHrOYJbp5HIlSLd0_Rr6KgsqUTKpMcxOtxmJvFGMbskTu7-NBTwG9k38Z0nb7N=w1020-h570)

예를 들어 전 세계 구글 스토어의 데이터를 모두 포함하는 하나의 '보기'를 만들 수 있고, 지역별 데이터를 보려는 경우에는 북미, 유럽, 아시아 등 별도의 '보기'를 만들 수도 있습니다.

'보기'에서 '목표'를 설정할 수도 있습니다. '목표'는 웹사이트에서 전환 또는 비즈니스 목표를 추적하는 데 매우 유용한 방법입니다.

**_예시_**

* 이메일 뉴스레터에 가입한 사용자 수
* 제품을 구매한 사용자 수

구글 애널리틱스에 데이터가 수집되고 처리된 후에는 데이터를 변경할 수 없으므로, '계정', '속성', '보기'를 신중하게 결정하세요. 또한 새로 만들어진 '보기'는 만들어진 날짜부터 수집된 데이터만 포함되며, '보기'를 삭제하면 제한된 시간 내에 관리자만 복구할 수 있습니다.

![GA-Image-4](https://lh3.googleusercontent.com/cG0LPlrrIXuZFMqH37qgcpHDb3S4ZwpbE3KBMYpzylp9hg8DZj3Z2yiCU-k_ckXG0IxO=w1020-h570)

#### 사용자 권한

'계정', '속성', '보기' 레벨에서 다른 사용자에게 권한을 지정할 수 있습니다. 각 레벨에서는 그 레벨의 상위 권한을 상속받습니다.

**_예시_**

* '계정'에 대해 엑세스 권한이 있는 경우, 해당 '계정' 바로 아래에 있는 '속성'과 '보기'에서도 동일한 엑세스 권한을 가집니다.
* '보기'에 대해서만 엑세스 권한이 있는 경우에는 해당 '보기'와 연결된 '속성' 또는 '계정'을 수정할 수 있는 권한은 부여되지 않습니다.

구글 애널리틱스에서 '관리'를 클릭하면 '사용자 관리', '수정', '공동작업' 또는 '읽기 및 분석'에 대해 사용자 권한을 설정할 수 있습니다.

* 사용자 관리: 사용자가 '계정', '속성', '보기'에 대한 사용자 엑세스를 추가/삭제할 수 있습니다.
* 수정: 사용자가 구성 설정을 변경할 수 있습니다.
* 공동작업: 사용자가 대시보드 또는 특정 측정 설정과 같은 사항을 공유할 수 있습니다.
* 읽기 및 분석: 사용자가 데이터 열람, 보고서 분석, 대시보드 생성을 할 수 있지만 설정을 변경하거나 신규 사용자를 추가할 수는 없습니다.

### 3.2. 단계별 설정 방법

#### 시작하기

구글 계정을 사용하여 애널리틱스에 엑세스할 수 있습니다. 계정이 없는 경우 구글 애널리틱스 웹사이트(analytics.google.com)에서 계정을 만들 수 있습니다.

![GA-Image-5](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d4b2652be65813803ed171c/large.png)

#### 계정 설정

원하는 계정 이름을 입력하고, 조직(Organization)을 연결하거나 계정 데이터의 공유 설정 등의 옵션을 선택할 수 있습니다.

![GA-Image-6](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f58a7ff2d605b24d235e/large.png)

#### 측정 대상 설정

측정 대상으로 웹사이트, 모바일 또는 둘 다 측정할지 설정할 수 있습니다.

![GA-Image-7](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f2477ff2d605b24d235a/large.png)

#### 속성 설정

트랙킹하려는 웹사이트의 이름을 지정하여 속성을 설정할 수 있고, 업종 카테고리를 선택하여 구글 애널리틱스에서 업종에 맞는 더 나은 보고서와 정보를 제공받을 수 있습니다.

![GA-Image-8](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f46b7ff2d605b24d235d/large.png)

#### 추적 코드 설정

속성 설정을 마치면 자바스크립트 추적 코드가 표시됩니다. 이 코드를 웹사이트의 head 태그 가장 위에 추적 코드를 넣습니다.

![GA-Image-9](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d4b27febe65813803ed171f/large.png)

#### 실시간 개요 확인

추적 코드를 설정한 다음에는 구글 애널리틱스에서 트랙킹이 잘 되고 있는지 확인할 수 있는 실시간 개요 보고서를 볼 수 있습니다.

![GA-Image-10](https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d56f3f5be65813803ed1982/large.png)

## 4. 계정 보기 필터를 설정하는 방법

'보기'에 필터를 설정하는 기본적인 방법은 아래 원문과 참고자료에서 확인하실 수 있습니다.

[👉 원문 링크](https://support.google.com/analytics/answer/6382981?hl=ko)

[👉 보기 필터 작성 및 관리 참고자료](https://support.google.com/analytics/answer/1034823?hl=ko#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90-%EB%82%98%EC%99%80-%EC%9E%88%EB%8A%94-%EB%82%B4%EC%9A%A9%EC%9D%80-%EB%8B%A4%EC%9D%8C%EA%B3%BC-%EA%B0%99%EC%8A%B5%EB%8B%88%EB%8B%A4)

## 참고자료

* [https://analytics.google.com/analytics/academy](https://analytics.google.com/analytics/academy/)
