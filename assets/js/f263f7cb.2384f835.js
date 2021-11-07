"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[6954],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1112:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},s="gtag\uc640 ga \ube44\uad50",c={unversionedId:"handbook/archive/Google-Analytics/Basics/ga-and-gtag",id:"handbook/archive/Google-Analytics/Basics/ga-and-gtag",isDocsHomePage:!1,title:"gtag\uc640 ga \ube44\uad50",description:"\uad6c\uae00\uc774 \uae00\ub85c\ubc8c \uc0ac\uc774\ud2b8 \ud0dc\uadf8(Global Site Tag, \uc774\ud558 gtag.js)\ub77c\ub294 \uc0c8\ub85c\uc6b4 \uc720\ud615\uc758 \ud0dc\uadf8\ub97c \ub3c4\uc785\ud558\uba74\uc11c \ud398\uc774\uc9c0\ubdf0 \uc804\uc1a1, \ub9de\ucda4 \uc774\ubca4\ud2b8 \uc124\uc815 \ub4f1 \ub370\uc774\ud130 \uc804\uc1a1 \ubc29\ubc95\uc774 \uae30\uc874 \uc720\ub2c8\ubc84\uc124 \uc560\ub110\ub9ac\ud2f1\uc2a4 \ud0dc\uadf8(Univiersal Analytics, \uc774\ud558 analytics.js) \ubc29\uc2dd\uacfc \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4.",source:"@site/docs/handbook/archive/Google-Analytics/02-Basics/07-ga-and-gtag.md",sourceDirName:"handbook/archive/Google-Analytics/02-Basics",slug:"/handbook/archive/Google-Analytics/Basics/ga-and-gtag",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/ga-and-gtag",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/archive/Google-Analytics/02-Basics/07-ga-and-gtag.md",version:"current",lastUpdatedBy:"Yurim Jin",lastUpdatedAt:1636283004,formattedLastUpdatedAt:"11/7/2021",sidebarPosition:7,frontMatter:{},sidebar:"handbookSidebar",previous:{title:"\uc804\uc790\uc0c1\uac70\ub798",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/online-transaction"},next:{title:"\ud68d\ub4dd \ubcf4\uace0\uc11c",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/acquisition-reports"}},p=[{value:"1. \uae00\ub85c\ubc8c \uc0ac\uc774\ud2b8 \ud0dc\uadf8(Global Site Tag)",id:"1-\uae00\ub85c\ubc8c-\uc0ac\uc774\ud2b8-\ud0dc\uadf8global-site-tag",children:[]},{value:"2. \ucc28\uc774\uc810",id:"2-\ucc28\uc774\uc810",children:[]},{value:"3. \ucc38\uace0",id:"3-\ucc38\uace0",children:[]}],g={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gtag\uc640-ga-\ube44\uad50"},"gtag\uc640 ga \ube44\uad50"),(0,o.kt)("p",null,"\uad6c\uae00\uc774 \uae00\ub85c\ubc8c \uc0ac\uc774\ud2b8 \ud0dc\uadf8(Global Site Tag, \uc774\ud558 gtag.js)\ub77c\ub294 \uc0c8\ub85c\uc6b4 \uc720\ud615\uc758 \ud0dc\uadf8\ub97c \ub3c4\uc785\ud558\uba74\uc11c \ud398\uc774\uc9c0\ubdf0 \uc804\uc1a1, \ub9de\ucda4 \uc774\ubca4\ud2b8 \uc124\uc815 \ub4f1 \ub370\uc774\ud130 \uc804\uc1a1 \ubc29\ubc95\uc774 \uae30\uc874 \uc720\ub2c8\ubc84\uc124 \uc560\ub110\ub9ac\ud2f1\uc2a4 \ud0dc\uadf8(Univiersal Analytics, \uc774\ud558 analytics.js) \ubc29\uc2dd\uacfc \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"1-\uae00\ub85c\ubc8c-\uc0ac\uc774\ud2b8-\ud0dc\uadf8global-site-tag"},"1. \uae00\ub85c\ubc8c \uc0ac\uc774\ud2b8 \ud0dc\uadf8(Global Site Tag)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"\uc815\uc758"},"\uc815\uc758"))),(0,o.kt)("p",null,"\uae00\ub85c\ubc8c \uc0ac\uc774\ud2b8 \ud0dc\uadf8\ub780, ",(0,o.kt)("strong",{parentName:"p"},"\uad6c\uae00\uc758 \uc0ac\uc774\ud2b8 \uce21\uc815, \uc804\ud658 \ucd94\uc801 \ubc0f \ub9ac\ub9c8\ucf00\ud305 \uc81c\ud488\uc744 \uc704\ud55c \uc6f9 \ud0dc\uae45 \ub77c\uc774\ube0c\ub7ec\ub9ac"),"\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uac04\uc18c\ud654\ub41c \uc6f9\ud398\uc774\uc9c0 \ud0dc\uae45 \uccb4\uacc4(framework)\ub97c \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \ub354 \uc27d\uace0, \ub354 \ud6a8\uacfc\uc801\uc73c\ub85c \uad6c\ud604\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub610\ud55c, \ud5a5\ud6c4 \ucd9c\uc2dc\ub420 \ucd5c\uc2e0 \ucd94\uc801 \uae30\ub2a5\uacfc \ud1b5\ud569\uc758 \uc774\uc810\uc744 \ub204\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uad6c\uae00\uc758 \uc5ec\ub7ec \uc194\ub8e8\uc158\uc5d0 \ud1b5\ud569\uc801\uc73c\ub85c \uc801\uc6a9"),"\ub420 \uc608\uc815\uc774\uba70, \uacc4\uc815 \uc544\uc774\ub514\ub9cc \ub2e4\ub978 ",(0,o.kt)("strong",{parentName:"p"},"\ub3d9\uc77c\ud55c \ud0dc\uadf8\uac00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uacc4\uc815\uc5d0\uc11c\ub294 \uce21\uc815(measurement)\uc5d0, \uc560\ub4dc\uc6cc\uc988 \uacc4\uc815\uc5d0\uc11c\ub294 \uc804\ud658 \ucd94\uc801 \ubc0f \ub9ac\ub9c8\ucf00\ud305\uc5d0 \uc0ac\uc6a9"),"\ub429\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"\ucf54\ub4dc"},"\ucf54\ub4dc"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"><\/script>\n  <script>\n      window.dataLayer = window.dataLayer || [];function gtag()\n      {dataLayer.push(arguments)};gtag(\u2018js\u2019, new Date());\n      gtag(\u2018config\u2019, \u2018GA_TRACKING_ID\u2019);\n  <\/script>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"\uc0ac\uc6a9-\ubc29\ubc95"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.google-analytics.com/analytics.js"},"https://www.google-analytics.com/analytics.js")," \uc2a4\ud06c\ub9bd\ud2b8\uc640",(0,o.kt)("a",{parentName:"li",href:"https://www.googletagmanager.com/gtag/js?id=UA-92421532-1"},"https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID")," \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0bd\uc785\ud569\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gtag(\u2018config\u2019, \u2018GA_TRACKING_ID\u2019)")," \uc5d0\uc11c ",(0,o.kt)("a",{parentName:"li",href:"https://www.google-analytics.com/analytics.js"},"https://www.google-analytics.com/analytics.js")," \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0bd\uc785\ud574\uc8fc\uace0, creat\ub97c \ud558\uba74\uc11c ga\ud568\uc218\ub97c \uc2dc\uc791\ud558\uac8c \ub429\ub2c8\ub2e4.")))),(0,o.kt)("h2",{id:"2-\ucc28\uc774\uc810"},"2. \ucc28\uc774\uc810"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"analytics.js\uc5d0\uc11c\ub294 \uce74\ud14c\uace0\ub9ac, \uc561\uc158 \ub450 \ud56d\ubaa9\uc774 \ud544\uc218 \ud56d\ubaa9"),"\uc785\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\ubc18\uba74\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"gtag.js\uc5d0\uc11c\ub294 \uc561\uc158\ub9cc\uc774 \ud544\uc218 \ud56d\ubaa9\uc5d0 \ud574\ub2f9"),"\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\x3c!-- analytics.js\uc5d0\uc11c\uc758 \uc124\uc815 --\x3e\n\n<script>\n    ga(\u2018send\u2019, \u2018event\u2019, [eventCategory], [eventAction], [eventLabel], [eventValue]);\n<\/script>\n\n\x3c!-- gtag.js\uc5d0\uc11c\uc758 \uc124\uc815 --\x3e\n\n<script>\n    gtag(\u2018event\u2019, \u2018login\u2019);\n<\/script>\n")),(0,o.kt)("p",{parentName:"li"},"gtag.js \ubc29\uc2dd\uc5d0\uc11c\ub294 \uc561\uc158 \uac12\uc774 \ud544\uc218\uc778 \ud55c\ud3b8 \uc544\ub798\uc640 \uac19\uc774 \uc774\ubca4\ud2b8 \uce74\ud14c\uace0\ub9ac \ubc0f \ub77c\ubca8 \uac12\uc744 \uc9c1\uc811 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>\n   gtag(\u2018event\u2019, \u2018event_name\u2019, {\n   \u2018event_category\u2019: categoryName,\n   \u2018event_label\u2019: labelName\n    });\n<\/script>\n")))),(0,o.kt)("p",null,"\u200b \uc704\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"p"},"event_name\uc774 \uc561\uc158 \uac12\uc5d0 \ud574\ub2f9"),"\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"analytics.js \ud0dc\uadf8"),"\ub294 \uce74\ud14c\uace0\ub9ac, \uc561\uc158, \ub77c\ubca8 \uac12\uc744 \ubaa8\ub450 \uc815\ud655\ud788 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\ubc18\uba74\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"gtag.js \ubc29\uc2dd\uc5d0\uc11c\ub294 (\uc81c\ud55c\ub41c \ubc94\uc704 \ub0b4\uc5d0\uc11c) \uc561\uc158 \uac12\ub9cc \uc9c0\uc815\ud574\ub3c4 \uce74\ud14c\uace0\ub9ac \uac12\uc774 \uae30\ubcf8 \uac12(default values)\uc73c\ub85c \uc9c0\uc815"),"\ub429\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"analytics.js \ud0dc\uadf8"),"\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\ubc18\uba74\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"gtag.js \ud0dc\uadf8"),"\ub294 \uad6c\uae00 \uc560\ub4dc\uc6cc\uc988\uc758 \ub9ac\ub9c8\ucf00\ud305\uc774\ub098 \uc804\ud658 \ucd94\uc801\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"analytics.js \ud0dc\uadf8"),"\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\ub85c \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud558\ub294 \ub370 \u2018\ud2b8\ub798\ucee4\u2019\ub97c \uc0ac\uc6a9\ud558\uace0, \ub370\uc774\ud130 \uc720\ud615\uc744 \uba85\uc2dc\ud558\ub294 \ub370 \u2018\ud788\ud2b8 \uc720\ud615\u2019\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\ubc18\uba74\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"gtag.js \ud0dc\uadf8"),"\ub294 \ub370\uc774\ud130 \uc804\uc1a1\uc5d0 \ud2b8\ub798\ucee4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, \u2018config\u2019 command\ub85c \uc124\uc815\ud55c \ucd94\uc801 ID(tracking ID)\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18d\uc131\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"analytics.js"),"\uc640 ",(0,o.kt)("strong",{parentName:"p"},"gtag.js"),"\ub294 \uc11c\ub85c \ub2e4\ub978 \ucd94\uc801 \ud30c\ub77c\ubbf8\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud398\uc774\uc9c0\ubdf0\ub098 \uc774\ubca4\ud2b8 \uc124\uc815 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud558\ub294 \ubb38\ubc95\uc774 \ub2e4\ub985\ub2c8\ub2e4."))),(0,o.kt)("h2",{id:"3-\ucc38\uace0"},"3. \ucc38\uace0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/analytics#topic=9143232"},"\uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uace0\uac1d\uc13c\ud130"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://y-chyachya.tistory.com/47"},"ga\uc640 gtag\uc758 \ucc28\uc774\uc810"),"\nDo it! \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 \ubd84\uc11d\ud574 \uc131\uacfc\ub97c \ub192\uc774\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4"))}u.isMDXComponent=!0}}]);