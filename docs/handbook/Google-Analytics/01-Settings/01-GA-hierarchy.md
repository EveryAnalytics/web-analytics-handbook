---
slug: ga4-hierarchy
title: GA4 계층구조
author: Jiyoon Hur
author_url: https://github.com/jiyoon1156
author_image_url: https://avatars.githubusercontent.com/u/60052127?v=4
tags: [GoogleAnalytics, GA]
---
# GA4 계층구조

## 1. 계층구조란?

GA4의 계층구조는 조직(organization), 계정(account), 속성(property), 데이터 스트림(data stream)으로 이루어져있습니다. 기존 UA에서의 보기(view)가 데이터 스트림으로 변경되었습니다. 이 계층구조의 관계는 다음과 같습니다.

- 구글계정 1개 → 구글 애널리틱스 계정 100개 생성 가능
- 구글 애널리틱스 계정 1개 → 속성 100개 생성 가능
- 속성 1개 → 데이터 스트림 50개 생성 가능

조직은 소속되어 있는 회사나 단체 혹은 개인이 될 수 있습니다. 이러한 조직은 구글 애널리틱스 계정을 생성할 수 있습니다. 그리고 이렇게 생성된 계정에는 속성을 추가할 수 있는데 속성이란 데이터를 수집하고 추적하려는 대상입니다. GA4에선 기본적으로 모바일 어플리케이션과 웹을 합친 속성을 제공합니다. 데이터 스트림은 하나의 속성 내에서 웹과 앱을 연결시켜 같은 데이터 흐름을 가질 수 있도록 도와주는 계층입니다.

## 2. 참고자료

- [https://support.google.com/analytics/answer/9303323?hl=ko#zippy=%2C이-도움말에서는-다음-내용을-다룹니다](https://support.google.com/analytics/answer/9303323?hl=ko#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90%EC%84%9C%EB%8A%94-%EB%8B%A4%EC%9D%8C-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%8B%A4%EB%A3%B9%EB%8B%88%EB%8B%A4)
- [https://brunch.co.kr/@seongminyoo/82](https://brunch.co.kr/@seongminyoo/82)
