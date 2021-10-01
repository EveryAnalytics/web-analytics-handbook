---
title: Flutter 플러그인으로 ecommerce 이벤트 보낼 때 생긴 일
author: Dayoung Kang
author_url: https://github.com/alledy
author_image_url: https://avatars.githubusercontent.com/u/46309894?v=4
tags: [flutter, firebase, google-analytics]
---

:::note

이 글은 Flutter 플러그인으로 ecommerce 이벤트를 보내는 방법에 대한 내용이 아닙니다. 제가 겪은 이슈를 공유하는 차원의 글이며 세부적인 구현은 들어있지 않으므로 감안하고 봐주시면 감사하겠습니다🙋🏻‍♀️

:::

## What is Flutter?

[Flutter](https://flutter.dev/)(이하 플러터)는 구글에서 만든 크로스 플랫폼 어플리케이션을 만들 수 있는 SDK이며 하나의 코드베이스에서 안드로이드, iOS 앱, 웹까지 만들 수 있어 개발 생산성을 높여줍니다.

플러터 생태계에는 여러 패키지와 플러그인이 있습니다. 여기서 말하는 플러그인은 패키지 종류의 하나로 Android, iOS와 같은 특정 플랫폼에 기능을 구현하기 위한 목적을 갖고 있습니다. 그래서 플러그인은 타겟 플랫폼의 네이티브 언어와 [Dart](https://dart.dev/)(플러터의 프로그래밍 언어) 코드로 쓰여진 API로 구성돼 있습니다. 플러그인과 관련한 공식 문서는 [여기](https://flutter.dev/docs/development/packages-and-plugins/using-packages)를 참고해보세요. 그리고 플러터 패키지와 플러그인은 [pub.dev](https://pub.dev/) 사이트에서 검색해볼 수 있습니다.

## What's the matter with the plugin?

제가 다니는 회사에서는 플러터 웹뷰로 만들어진 앱이 있었고 그 앱의 사용자 데이터를 `Google Analytics`로 보내서 분석하고자 했습니다. 앱에 구글 애널리틱스를 연결하는 방법은 한 가지가 아니지만, 구글에서 권장하는 방법은 [Firebase SDK를 설치](https://firebase.google.com/docs/analytics)하는 것입니다. 그래서 Firebase SDK를 설치했습니다. 그리고 그 다음엔 어떻게 해야할까요? [안드로이드에 애널리틱스를 연결하는 방법](https://developers.google.com/analytics/devguides/collection/firebase/android/start)과 [iOS에 애널리틱스를 연결하는 방법](https://developers.google.com/analytics/devguides/collection/firebase/ios/start)에 관한 문서가 각각 있습니다. 하지만 플러터는 크로스 플랫폼을 지원하죠. 플러터 앱에는 어떻게 애널리틱스를 연결하면 좋을까요?

위에서 언급한 플러그인이 이 때 필요합니다. 물론 플러그인을 안 쓰고 직접 구현해도 되지만 생산성을 위해서 [firebase_analytics](https://pub.dev/packages/firebase_analytics) 플러그인을 사용했습니다. 만약 플러터 앱에서 커스텀 플랫폼 코드를 직접 쓰는 방법이 궁금하다면 [여기](https://flutter.dev/docs/development/platform-integration/platform-channels)를 참고해보세요.

![image](https://user-images.githubusercontent.com/46309894/132012289-4a26bb51-360e-438e-b67b-64779d16ba78.png)

플러터 앱에서 이 플러그인이 제공하는 Dart API를 사용한다면 우리가 직접 Android와 iOS, Web에 각각 애널리틱스를 적용하는 코드를 구현하지 않아도 되는 것이죠. 각각의 플랫폼 코드가 어떻게 구현되어 있는지 세부 구현은 알지 못하더라도 추상화된 메서드로 한 번에 처리할 수 있는 게 장점입니다.

[logEvent](https://pub.dev/documentation/firebase_analytics/latest/firebase_analytics/FirebaseAnalytics/logEvent.html)라는 플러그인 메서드를 플러터 앱에 구현하는 예시 코드를 보겠습니다. 일부만 있는 예시 코드이므로 세부적인 부분은 신경쓰지 않아도 됩니다.

```dart
Future<void> _sendAnalyticsEvent() async {
  // logEvent 메서드 호출
  await widget.analytics.logEvent(
    name: 'purchase',
    parameters: <String, dynamic>{
      'items': [
        {
          'item_id': 'SKU_123',
          'item_name': 'jeggings',
          'item_category': 'pants',
          'item_variant': 'black',
          'item_brand': 'Google',
          'price': 9.99
        },
        {
          'item_id': 'SKU_456',
          'item_name': 'boots',
          'item_category': 'shoes',
          'item_variant': 'brown',
          'item_brand': 'Google',
          'price': 24.99
        }
      ],
    },
  );
}
```

여기서 호출하고 있는 logEvent 플러그인 메서드는 파이어베이스의 logEvent([iOS - Swift](https://firebase.google.com/docs/reference/swift/firebaseanalytics/api/reference/Classes/Analytics#logevent_:parameters:), [Android - Java](<https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#logEvent(java.lang.String,%20android.os.Bundle)>)) 메서드를 Dart 코드로 래핑한 것입니다. 내부에서는 사용자가 어떤 플랫폼을 사용하는지에 따라 해당 플랫폼 언어로 구현된 logEvent 메서드를 호출하게 합니다.

회사 코드에서도 저는 위의 예시처럼 사용자의 구매 행동을 기록하기 위해 `purchase` 이벤트를 보냈습니다. 이 purchase 이벤트 명세는 [여기](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event#PURCHASE)에 나와 있습니다. (FYI. 편의를 위해서 더 읽기 쉬운 Android 문서를 링크했지만 [iOS](https://firebase.google.com/docs/reference/swift/firebaseanalytics/api/reference/Constants#analyticseventpurchase)도 패러미터 객체의 key로 쓰고 있는 constant value는 동일합니다.)

저는 이벤트 명세에서 정의된 대로 [items](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param#ITEMS) 리스트를 보내도록 했습니다. [파이어베이스 문서](https://firebase.google.com/docs/analytics/measure-ecommerce)를 보면 purchase뿐만 아니라 모든 이커머스 이벤트 파라미터에, 각 아이템들의 정보를 담은 리스트인 `items` 필드가 포함되는 것을 알 수 있습니다.

그런데 이상하게 안드로이드에서만 이벤트가 누락되는 이슈가 생겼습니다.

| ![image](https://user-images.githubusercontent.com/46309894/132041048-9329dc40-5e48-4773-ac33-b7b3dd036526.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                              _왜 안드로이드만...?_                                              |

| ![image](https://user-images.githubusercontent.com/46309894/132098237-92c57edb-4502-4299-82e6-c237090be73c.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                             _개발 환경에서 실행한 디버그 뷰에서는 잘 잡히는데...?_                              |

플러그인 메서드를 적용한 코드에는 문제가 없어보였습니다. 왜 안드로이드만 이벤트가 누락됐던 것일까요?

## The version problem

문제의 원인에 대한 힌트는 위의 이미지들이 알려주고 있습니다. 첫 번째는 안드로이드만 이벤트가 누락되고 있다는 점이고, 두 번째는 개발 환경에서 실행한 파이어베이스 실시간 디버그 뷰에서는 정상적으로 이벤트가 잡혔다는 것입니다. 즉 개발 환경과 실제 배포돼 있는 환경 간에 차이가 있는 부분에서 문제가 발생하고 있고, 안드로이드 쪽 코드를 살펴보면 그 원인이 밝혀질 것이라는 힌트입니다.

원인은 바로 플러그인 내부의 안드로이드 코드에 있었습니다. 스토어에 배포돼 있는 안드로이드 앱에서 사용하고 있는 firebase_analytics 플러그인은 버전이 `6.0.1`이었습니다. 반면에 저희가 개발 환경에서 사용하고 있는 플러그인 버전은 `8.0.1`이었습니다. `6.0.1` 버전의 firebase_analytics 플러그인 내부에 있는 안드로이드 Java 코드를 들여다보니 아래와 같았습니다. 비교하기 편하게 8.0.1 버전의 코드를 같이 보겠습니다. 참고로 플러터 프로젝트에 설치한 라이브러리 코드는 Flutter SDK가 설치되어 있는 디렉토리의 `.pub-cache` 폴더에서 확인할 수 있습니다.

아래의 `createBundleFromMap`은 `logEvent`로 전달된 파라미터를 그대로 전달받아서 [Bundle](https://developer.android.com/reference/android/os/Bundle.html)이라는 안드로이드 네이티브 클래스로 가공하는 메서드입니다. 요지는 logEvent로 전달된 파라미터를 value 타입에 따라 분기하여 핸들링을 하고 있다는 것입니다.

| ![image](https://user-images.githubusercontent.com/46309894/132042591-13dd1f5a-d603-4963-84dd-8c7375a8c0a4.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                                      6.0.1                                                      |

| ![image](https://user-images.githubusercontent.com/46309894/132042721-c5cf534a-add0-47aa-8d44-271c653e424d.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                                      8.0.1                                                      |

차이점이 눈에 보이시나요? 6.0.1 버전에서는 패러미터 value가 Iterable일 때 핸들링하는 코드가 없습니다. 반면 8.0.1 버전에서는 Iterable일 때 처리하는 조건이 추가되었죠. 즉 제가 넣어준 `items`는 리스트 형태이므로 6.0.1 버전에서는 Unsupported value type이어서 핸들링되지 않았고, 결과적으로 안드로이드에만 이벤트가 누락됐던 것입니다. 플러그인의 [체인지 로그](https://pub.dev/packages/firebase_analytics/changelog#800-dev2)에서도 확인할 수 있었습니다. 이 문제는 버전을 올린 firebase_analytics 플러그인이 적용된 안드로이드 앱을 스토어에 재배포함으로써 해결했습니다.

저 또한 플러터를 잘 모르는 상태에서 겪은 상황이라 시행착오가 많았었는데요, 크로스 플랫폼 앱에 애널리틱스를 연결할 때 문제가 있다면 이 글이 트러블 슈팅에 도움이 되길 바라며 글을 마치겠습니다🙌
