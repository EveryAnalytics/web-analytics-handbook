# **사용자 및 세션으로 데이터 분류하기**

## **1. Google Analytics 데이터 처리 과정**

**1.0 처리 과정 단계 설명**

첫번째, 애널리틱스에서 신규 사용자와 재사용자를 구분합니다.

두번째, 조회를 세션(사용자가 사이트에 참여한 시간)으로 분류합니다.

세번째, 추적 코드의 데이터를 다른 데이터 소스와 결합합니다.

**1.1 애널리틱스에서 신규 사용자와 재사용자를 구분합니다.**

재사용자의 신규 방문을 별도로 식별합니다. 추적 코드가 있는 페이지를 사용자가 방문하면, Google Analytics에서 사용자의 브라우저 쿠키와 연결되는 임의의 고유 ID가 생성됩니다. Analytics에서는 각각의 고유 ID를 고유 사용자로 간주합니다. 신규 사용자가 감지될 때마다 애널리틱스에서 '신규 사용자'로 집계하고 이를 조회와 함께 전송합니다. Analytics에서 기존의 ID를 감지하면 조회와 함께 '재사용자' 값으로 전송합니다.

**_*사용자를 구분할 때 주의사항*_**

1. Analytics가 세션에서 브라우저 쿠키를 통해 고유한 사용자를 인식하므로, 사용자 정보는 웹브라우저에서 쿠키가 삭제 또는 차단되면 **\*\*사라집니다\*\***.

   사용자가 브라우저의 쿠키를 삭제하면 다음에 브라우저에서 추적된 웹페이지를 로드할 때 Google Analytics에서 **\*\*새로운 고유 ID\*\***를 설정합니다. 그런 다음 Analytics에서 이 사용자를 '재사용자'가 아닌 **\*\*'신규 사용자'\*\***로 집계합니다.

2. 여러 세션에 걸쳐 사용자를 인식할 수 있습니다.

   (단, 동일한 기기의 동일한 브라우저에서 발생한 세션이어야 합니다.)

   Analytics의 기본 설정에서는 다른 기기에서 웹사이트를 방문한 사용자를 인식하지 않지만, 각 기기를 **\*\*고유 사용자\*\***로 집계합니다.

   즉, 여러 기기에서 사용자를 추적하려면 **\*\*User ID\*\*** 기능을 사용해야 합니다.

**1.2 조회를 세션(사용자가 사이트에 참여한 시간)으로 분류합니다.**

웹사이트에서의 사용자 참여 수준을 파악하기 위해 조회의 생성 시간에 기초해 사용자 조회를 분류합니다.

이러한 시간을 측정할 때 사용하는 측정항목은 *세션수*입니다.

웹사이트에서 사용자가 Google Analytics 추적 코드가 있는 페이지로 이동할 때 세션이 시작되고 **_페이지뷰_** 조회가 생성됩니다. 이 조회는 다른 조회가 기록되지 않으면 30분 후에 종료됩니다. 세션이 종료한 후에 사용자가 페이지로 돌아가면 새 세션이 시작됩니다.

기본 설정에서는 비활동 시간이 30분을 넘으면 세션의 제한시간이 초과되지만, 사이트에서의 사용자 행동을 반영하여 구성에서 **이 설정을 변경할 수 있습니다.**

EX) 사용자에게 동영상을 보여주는 것이 목표인 사이트에서는 세션의 제한시간을 30분으로 설정하지 않을 것입니다.

**_이 경우_** 세션 제한시간을 사이트에서의 평균 동영상 시청 시간으로 연장할 수 있습니다.

Google Analytics에서 세션을 기준으로 데이터를 구성하면 보고서에 표시되는 다양한 측정항목을 계산할 수 있습니다.

**1.3 추적 코드의 데이터를 다른 데이터 소스와 결합합니다.**

추적 코드를 통해 수집한 데이터를 지정된 다른 소스와 연결합니다.

**측정 프로토콜을 이용하고 다른 Google 계정에 연결하여 외부 시스템의 데이터를 추가하는 방법**

1. 맞춤 추적 ID를 이용해 조회를 구성하는 방법

2. 1번의 조회를 지정된 Google 애널리틱스 계정으로 전송하는 방법

측정 프로토콜을 이용하면 POS(판매 지점), 웹 연결 키오스크와 같은 웹 연결 기기의 데이터를 Google Analytics로 전송할 수 있습니다. 자동으로 조회를 전송하는 추적 코드와는 달리 Google 이외의 시스템으로부터 데이터를 수집하려면 URL 문자열을 통해 데이터 수집 조회를 직접 전송해야 합니다.

_*Google Analytics에서는 Google Ads, 애드센스, Google Search Console 등 다른 마케팅 도구의 데이터도 연결할 수 있습니다.*_