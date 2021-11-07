---
sidebar_position: 3
---

# Browse Charts

**_다양한 분석을 위한 차트를 생성하고 검색합니다._**

**[Event Segmentation Chart]**

이벤트 및 이벤트를 수행한 사용자에 대한 세분화된 차트를 제공합니다.

선택한 기간 동안 사용자의 속성 혹은 이벤트의 속성별로 이벤트를 비교하거나 구분할 수 있습니다.

**[User Composition Chart]**

사용자의 속성을 기반으로 활성되며, 사용자의 정보를 보여줍니다.

**[User Session Chart]**

사용자의 세션 정보를 통해 사용자를 분석할 수 있습니다.

- 세션

> 1. 서버 : 세션 값을 session_id 속성에 담아 HTTP API를 사용합니다.
> 2. 클라이언트 측 (모바일) : 모바일 SDK를 사용하여 서로 5분 이내에 트리거가 된 이벤트를 세션(동일한 session_id)로 계산합니다.
> 3. 클라이언트 측 (웹) : 자바 스크립트 SDK를 사용하여 서로 30분 이내에 트리거가 된 이벤트를 현재 세션(동일한 session_id)로 계산합니다.