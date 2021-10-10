# gtag와 ga 비교

구글이 글로벌 사이트 태그(Global Site Tag, 이하 gtag.js)라는 새로운 유형의 태그를 도입하면서 페이지뷰 전송, 맞춤 이벤트 설정 등 데이터 전송 방법이 기존 유니버설 애널리틱스 태그(Univiersal Analytics, 이하 analytics.js) 방식과 달라졌습니다.

## 1. 글로벌 사이트 태그(Global Site Tag)

- ### 정의

글로벌 사이트 태그란, **구글의 사이트 측정, 전환 추적 및 리마케팅 제품을 위한 웹 태깅 라이브러리**를 말합니다. 간소화된 웹페이지 태깅 체계(framework)를 제공함으로써 더 쉽고, 더 효과적으로 구현을 할 수 있도록 합니다. 또한, 향후 출시될 최신 추적 기능과 통합의 이점을 누릴 수 있습니다.

**구글의 여러 솔루션에 통합적으로 적용**될 예정이며, 계정 아이디만 다른 **동일한 태그가 애널리틱스 계정에서는 측정(measurement)에, 애드워즈 계정에서는 전환 추적 및 리마케팅에 사용**됩니다.

- ### 코드

  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
  <script>
      window.dataLayer = window.dataLayer || [];function gtag()
      {dataLayer.push(arguments)};gtag(‘js’, new Date());
      gtag(‘config’, ‘GA_TRACKING_ID’);
  </script>

- ### 사용 방법

  - [https://www.google-analytics.com/analytics.js](https://www.google-analytics.com/analytics.js) 스크립트와[https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID](https://www.googletagmanager.com/gtag/js?id=UA-92421532-1) 스크립트를 삽입합니다.
  - `gtag(‘config’, ‘GA_TRACKING_ID’)` 에서 https://www.google-analytics.com/analytics.js 스크립트를 삽입해주고, creat를 하면서 ga함수를 시작하게 됩니다.

## 2. 차이점

- **analytics.js에서는 카테고리, 액션 두 항목이 필수 항목**입니다.

  반면에 **gtag.js에서는 액션만이 필수 항목에 해당**합니다.

  <!-- analytics.js에서의 설정 -->

  <script>
      ga(‘send’, ‘event’, [eventCategory], [eventAction], [eventLabel], [eventValue]);
  </script>

  <!-- gtag.js에서의 설정 -->

  <script>
      gtag(‘event’, ‘login’);
  </script>

  gtag.js 방식에서는 액션 값이 필수인 한편 아래와 같이 이벤트 카테고리 및 라벨 값을 직접 지정할 수 있습니다.

  <script>
      gtag(‘event’, ‘event_name’, {
      ‘event_category’: categoryName,
      ‘event_label’: labelName
  	});
  </script>

​ 위에서 **event_name이 액션 값에 해당**합니다.

- **analytics.js 태그**는 카테고리, 액션, 라벨 값을 모두 정확히 지정해야 합니다.

  반면에 **gtag.js 방식에서는 (제한된 범위 내에서) 액션 값만 지정해도 카테고리 값이 기본 값(default values)으로 지정**됩니다.

- **analytics.js 태그**는 구글 애널리틱스에만 적용됩니다.

  반면에 **gtag.js 태그**는 구글 애드워즈의 리마케팅이나 전환 추적을 지원합니다.

- **analytics.js 태그**는 구글 애널리틱스로 데이터를 전송하는 데 ‘트래커’를 사용하고, 데이터 유형을 명시하는 데 ‘히트 유형’를 사용합니다.

  반면에 **gtag.js 태그**는 데이터 전송에 트래커를 사용하지 않습니다. 대신, ‘config’ command로 설정한 추적 ID(tracking ID)로 확인할 수 있는 구글 애널리틱스 속성으로 데이터를 전송합니다.

- **analytics.js**와 **gtag.js**는 서로 다른 추적 파라미터를 사용합니다. 페이지뷰나 이벤트 설정 데이터를 전송하는 문법이 다릅니다.

## 3. 참고

[구글 애널리틱스 고객센터](https://support.google.com/analytics#topic=9143232)
[ga와 gtag의 차이점](https://y-chyachya.tistory.com/47)
Do it! 사용자의 행동을 분석해 성과를 높이는 구글 애널리틱스
