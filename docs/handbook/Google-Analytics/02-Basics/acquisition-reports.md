---
slug: acquisition-reports
title: 획득 보고서
author: Jiyoon Hur
author_url: https://github.com/jiyoon1156
author_image_url: https://avatars.githubusercontent.com/u/60052127?v=4
tags: [GoogleAnalytics, GA]
---

# 획득 보고서
## 0. 들어가기에 앞서

획득 보고서를 분석하면 여러 마케팅 채널의 실적을 비교하고 트래픽을 통해 다양한 인사이트를 얻을 수 있습니다. 따라서 이 정보를 활용하면 어떤 영역에 마케팅 활동을 집중시킬지 참고할 수 있습니다.

## 1. 소스/매체란?

사용자가 사이트를 방문하면 구글 애널리틱스의 추적 코드가 사용자의 유입경로에 대한 여러 속성(또는 측정기준)을 자동으로 인식합니다. 여기에는 트래픽 매체(Traffic Medium), 소스(Source), 마케팅 캠페인 이름이 포함됩니다. 매체는 사용자를 사이트로 보내는 시스템이라고 생각하면 되는데, 가장 많은 매체는 Organic, CPC, Referrals, Email, None 입니다.

- ```오가닉 서치(Organic Search)```: 무료 구글 검색결과와 같은 무료 검색을 통해 사이트에 들어온 트래픽
- ```CPC```: 구글 애드(Google Ads)와 같은 유료 검색 캠페인(paid search compaign)을 통해 사이트에 들어온 트래픽
- ```리퍼러(Referrals)```: 검색엔진을 사용하지 않고 웹사이트를 클릭하여 사이트에 들어온 트래픽
- ```이메일(Email)```: 이메일 마케팅 캠페인을 통해 유입된 트래픽
- ```None```: 브라우저에 바로 입력하여 사이트를 바로 방문한 사용자 트래픽

소스에는 매체와 관한 상세 정보가 표시됩니다. 매체가 none 일 경우 source:direct/medium:none 로 트래픽이 표시되는 걸 많이 보셨을 텐데, 매체가 referrals 이면 소스는 사용자를 사이트로 추천한 웹사이트의 URL이고 매체가 organic 이면 소스는 [www.google.com](https://www.google.com) 과 같은 검색 엔진의 이름입니다.

## 2. 우수한 트래픽이란?

특정 트래픽에서 사용자가 가장 많다고 해당 트래픽이 가장 우수한 것은 아닙니다. 소스를 통해 들어온 사용자가 웹사이트를 이용하거나 전환(conversion)에 도달한 트래픽이어야 우수한 트래픽이라고 합니다. 이전 GA에서 트래픽의 품질을 가장 잘 보여주는 통계는 이탈률이었습니다. 하지만 GA4에선 더 이상 이탈률을 지원하지 않고 참여율이라는 새로운 측정기준을 지원합니다.

### 2.1. 채널 기준 트래픽 조회

- 기존 GA : 획득 → 전체 트래픽 → 채널 보고서
- GA4: 수명 주기 → 획득 → 트래픽 획득

해당 보고서를 이용하면 채널을 기준으로 트래픽을 조회할 수 있는데, 채널이란 각 매체에서 여러 소스를 포함하는 집합을 뜻합니다. 트래픽 소스는 Organic Search, Social, Direct, Referral, Generic Paid Search, Display 와 같은 기본 카테고리(또는 채널)로 자동 분류됩니다. 각 채널을 클릭하면 해당 채널의 개별 소스가 표시됩니다.

### 2.2. 연결된 다른 사이트를 기준으로 트래픽 조회

- 기존 GA : 획득 → 전체 트래픽 → 추천
- GA4: 수명 주기 → 획득 → 트래픽 획득 → 비교추가 클릭 → 측정기준 매체 선택/측정기준 값 referral 선택

개별 referral을 통해 내 사이트로 트래픽을 보낸 웹페이지를 찾을 수 있습니다. 이렇게 각 페이지로 트래픽을 보낸 외부 사이트를 확인한다면 이들 사이트와 새로운 광고 파트너 관계를 맺을 수 있는 기회를 발견할 수 있습니다.

## 3. 참고자료

- [https://analytics.google.com/analytics/academy](https://analytics.google.com/analytics/academy/)
