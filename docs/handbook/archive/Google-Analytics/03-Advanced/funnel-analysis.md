---
sidebar_position: 3
---
# 퍼널 분석 (Funnel Analysis)
내가 만든 쇼핑몰 사이트에 방문자가 있다고 해도, 그들 모두가 물품을 구매하는 것은 아닙니다. 누군가는 소개 페이지에서 창을 닫고, 누군가는 회원가입을 하는 도중에 그만들 수도 있죠. 이때 우리는 **퍼널 분석**을 통해 잠재고객들이 실제 **구매**의 단계까지 가는 경로와, **이탈**을 최소화하는 방법을 분석합니다.

## 퍼널이란?
![퍼널 이미지](https://static.thenounproject.com/png/2731497-200.png "출처: thenounproject.com monkik")  
퍼널은 흔히 **깔때기**라는 뜻을 가지고 있지만, 데이터 분석 상에서는 방문에서 구매로 이어지는 고객의 여정을 뜻합니다. 이는 목표 지향적 데이터 분석을 가장 잘 나타내는 상징이기도 합니다.

## 퍼널 분석
퍼널 분석법은 간단히 아래와 같은 단계를 거칩니다.
1. 최종목표 정의<br/>(ex. 구매 완료 페이지 도달)
2. 목표에 도달하게 되는 단계 설정<br/>(ex. 페이지 유입 - 스크롤 - 광고 페이지 클릭 - 결제 페이지 도달)
3. 단계별 이탈률 측정<br/> 
```평균 대비 이탈률```: 평균에 비해 얼마나 적게 또는 많이 이탈했는지 보여주는 지표
4. 이탈률이 높은 순서대로 단계 분석<br/>
*이 때, 이탈률이 왜 높은지에 대한 원인 분석은 다양한 방법을 사용하여 진행해야 할 것 입니다. 마케팅 담당자와 협의하여 유저 인터뷰, 디자인 검토 등을 통해 확인해봅시다.*
5. 각 단계별 KPI 설정 및 개선<BR/>
```KPI```: Key Performance Indicator의 약자. 핵심성과지표. 성취해야 할 목표

## 퍼널 분석을 위한 GA 설정
효과적인 퍼널 분석을 위해서는 각 단계별로 남아있는 사용자의 수를 측정하는 것이 필수적입니다. 그러나 기존의 GA 리포트 트래픽으로는 이를 바로 찾아내기 어렵습니다. 그러므로 우리는 **세그먼트 설정**을 통해 보다 구체적인 여과장치를 마련해야 합니다.  
세그먼트 설정을 **각 단계별로 순서를 적용하게 되면**, 단계별로 남아있는 사용자를 확인할 수 있습니다. 이를 바탕으로 우리는 이탈률을 계산하고, 우선적으로 개선해야 할 단계를 결정할 수 있습니다.

## 퍼널 분석 관련 TIP
- 목표 도달을 위한 단계 설정이 어렵다면, AARRR 프레임워크를 이용하자.<br/>
```AARRR프레임워크```: 방문(Acquisition)-회원가입(Activation)-구매(Revenue)-재구매(Retention)-타인에게 추천(Referral)
- 초기 단계에서 이탈률이 높을 경우, 후반 단계의 측정치 또한 저조하리라는 것을 명심하자.
- 이탈률 감소를 위한 개선안은 **A/B 테스트**등과 같은 기법을 통해 다양하게 실험해보자.