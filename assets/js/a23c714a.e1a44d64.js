"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[7877],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6155:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"UA\uc640 GA4\uc758 \ucc28\uc774\uc810",slug:"what-is-the-difference-between-ua-and-ga4"},p="UA\uc640 GA4\uc758 \ucc28\uc774\uc810",c={unversionedId:"handbook/Google-Analytics/Basics/ua-ga4-difference",id:"handbook/Google-Analytics/Basics/ua-ga4-difference",isDocsHomePage:!1,title:"UA\uc640 GA4\uc758 \ucc28\uc774\uc810",description:"UA(Universal Analytics)\ub294 Google Analytics(\uc774\ud558 GA)\uc758 \uae30\uc874 \ubc84\uc804\uc785\ub2c8\ub2e4. \ud55c\ud3b8 GA4\ub294 2020\ub144\uc5d0 \ucd9c\uc2dc\ub41c \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc785\ub2c8\ub2e4.",source:"@site/docs/handbook/Google-Analytics/02-Basics/ua-ga4-difference.md",sourceDirName:"handbook/Google-Analytics/02-Basics",slug:"/handbook/Google-Analytics/Basics/what-is-the-difference-between-ua-and-ga4",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/what-is-the-difference-between-ua-and-ga4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/Google-Analytics/02-Basics/ua-ga4-difference.md",version:"current",lastUpdatedBy:"chanheeis",lastUpdatedAt:1633230621,formattedLastUpdatedAt:"10/3/2021",frontMatter:{title:"UA\uc640 GA4\uc758 \ucc28\uc774\uc810",slug:"what-is-the-difference-between-ua-and-ga4"},sidebar:"handbookSidebar",previous:{title:"Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/google-analytics-introduce"},next:{title:"\ubcf4\uace0\uc11c \ubd84\uc11d\uc744 \uc704\ud55c \uac1c\ub150",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Advanced/terms"}},s=[{value:"1. \uacc4\uc815 \uad6c\uc870\uc758 \ucc28\uc774",id:"1-\uacc4\uc815-\uad6c\uc870\uc758-\ucc28\uc774",children:[{value:"1.1. UA \uacc4\uc815 \uad6c\uc870\uc758 \ub2e8\uc810",id:"11-ua-\uacc4\uc815-\uad6c\uc870\uc758-\ub2e8\uc810",children:[]},{value:"1.2. \uac1c\uc120\ub41c GA4\uc758 \uacc4\uc815 \uad6c\uc870",id:"12-\uac1c\uc120\ub41c-ga4\uc758-\uacc4\uc815-\uad6c\uc870",children:[]}]},{value:"2. \uadf8 \uc678\uc758 \ucc28\uc774\uc810",id:"2-\uadf8-\uc678\uc758-\ucc28\uc774\uc810",children:[]},{value:"3. \ub9c8\ubb34\ub9ac",id:"3-\ub9c8\ubb34\ub9ac",children:[]},{value:"4. \ucc38\uace0 \uc790\ub8cc",id:"4-\ucc38\uace0-\uc790\ub8cc",children:[]}],u={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ua\uc640-ga4\uc758-\ucc28\uc774\uc810"},"UA\uc640 GA4\uc758 \ucc28\uc774\uc810"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"UA(Universal Analytics)\ub294 Google Analytics(\uc774\ud558 GA)\uc758 \uae30\uc874 \ubc84\uc804\uc785\ub2c8\ub2e4. \ud55c\ud3b8 GA4\ub294 2020\ub144\uc5d0 \ucd9c\uc2dc\ub41c \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc785\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"1-\uacc4\uc815-\uad6c\uc870\uc758-\ucc28\uc774"},"1. \uacc4\uc815 \uad6c\uc870\uc758 \ucc28\uc774"),(0,i.kt)("p",null,"UA\uc640 GA4\uc758 \uacc4\uc815 \uad6c\uc870 \ucc28\uc774\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uba3c\uc800 UA\uc758 \uae30\ubcf8\uc801\uc778 \uacc4\uc815 \uad6c\uc870\uc5d0 \ub300\ud55c \ubd80\ubd84\uc744 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \uc774 \ud578\ub4dc\ubd81\uc758 GA \uae30\ubcf8\ud3b8\uc744 \ubcf4\uace0 \uc624\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c \uac04\ub2e8\ud788\ub9cc \uc124\uba85\ud558\uc790\uba74 UA\ub294 \uacc4\uc815(Account) \ubc11\uc5d0 \uc18d\uc131(Property)\uc774 \uc788\uace0, \uc18d\uc131 \ubc11\uc5d0 \ubdf0(View)\uac00 \uc788\ub294 \uad6c\uc870\uc785\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uaed8\uc11c\ub294 \uacc4\uc815\uc744 \ub9cc\ub4e0 \ub2e4\uc74c, \ub370\uc774\ud130\ub97c \ucd94\uc801\ud558\uace0 \uc2f6\uc740 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc571\uc744 \uc18d\uc131\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc18d\uc131 \ud558\ub098\uc5d0 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc571 \ud558\ub098\uac00 \ub300\uc751\ub41c\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud558\ub098\uc758 \uacc4\uc815\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uc18d\uc131\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \uc5ec\ub7ec \uac1c\uc758 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc571\uc744 \ud2b8\ub798\ud0b9\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\ub098\uc758 \uc18d\uc131\uc5d0\ub294 \uadf8 \uc18d\uc131\uc758 \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uc5ec\ub7ec \uac1c\uc758 \ubdf0(View)\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubdf0\ub97c \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9d0\ud558\uc790\uba74 ",(0,i.kt)("strong",{parentName:"p"},"\ub9ac\ud3ec\ud2b8")," \ub77c\uace0 \ud560 \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uadf8 \uc18d\uc131\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294 \ub370\uc774\ud130\uc5d0 ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/topic/1032939"},"\ud544\ud130")," \ub97c \uac78\uc5b4\uc11c \ubcf4\uace0 \uc2f6\uc740 \ubdf0(\ub9ac\ud3ec\ud2b8)\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://www.example.com"},"www.example.com"))," \uc774\ub77c\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ucd94\uc801\ud558\uae30 \uc704\ud574 \uc774\uc5d0 \ub300\uc751\ub418\ub294 \uc18d\uc131\uc744 \ud558\ub098 \ub9cc\ub4e4\uace0, \uadf8 \uc0ac\uc774\ud2b8\uc5d0 \ub4e4\uc5b4\uc624\ub294 \uc0ac\ub78c\ub4e4 \uc911 \uad11\uace0 \ud074\ub9ad\uc744 \ud1b5\ud574 \uc720\uc785\ub41c \uc0ac\ub78c\ub9cc \ubcf4\uace0 \uc2f6\uc744 \ub54c\ub294 \ud544\ud130\ub97c \uac78\uc5b4\uc11c \ubdf0(\ub9ac\ud3ec\ud2b8)\ub97c \ub9cc\ub4e4\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{parentName:"th",src:"https://user-images.githubusercontent.com/46309894/131212192-c486ee48-f2b0-411b-9180-728d7d6b8b5f.png",alt:"image"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"UA\uc758 \uacc4\uc815 \uad6c\uc870")))),(0,i.kt)("h3",{id:"11-ua-\uacc4\uc815-\uad6c\uc870\uc758-\ub2e8\uc810"},"1.1. UA \uacc4\uc815 \uad6c\uc870\uc758 \ub2e8\uc810"),(0,i.kt)("p",null,"\uc774\uc81c UA \uacc4\uc815 \uad6c\uc870\uc5d0 \ub300\ud574 \uac04\ub2e8\ud788 \uc0b4\ud3b4\ubd24\uc73c\ub2c8 \uc5b4\ub5a4 \ub2e8\uc810\uc774 \uc788\ub294\uc9c0 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\ubdf0 \ud544\ud130\ub294 \uc18c\uae09 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4")),(0,i.kt)("p",{parentName:"li"},"\uc5ec\ub7ec\ubd84\uc774 \ubcf4\uace0 \uc2f6\uc740 \ud2b9\uc815\ud55c \ub370\uc774\ud130\uac00 \uc788\uc5b4\uc11c \uc5b4\ub5a4 \ud544\ud130\ub97c \uac78\uc5b4 \ubdf0\ub97c \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ub0a0\uc9dc\uac00 1\uc6d4 1\uc77c\uc774\ub77c\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \uadf8 \ub54c\ubd80\ud130 \uc774 \ubdf0\ub294 \ud544\ud130\uc5d0 \ub530\ub77c\uc11c \ucc98\ub9ac\ub41c \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4.\uadf8\ub7f0\ub370 2\uc6d4 1\uc77c\uc5d0 \uc5ec\ub7ec\ubd84\uc740 \ubdf0 \ub370\uc774\ud130\uac00 \uc774\uc0c1\ud558\ub2e4\ub294 \uac83\uc744 \ub208\uce58\ucc58\uc2b5\ub2c8\ub2e4. \uc560\ucd08\uc5d0 \ud544\ud130\ub97c \ub9cc\ub4e4 \ub54c \uc2e4\uc218\ub85c \uc798\ubabb \ub9cc\ub4e4\uc5b4\ubc84\ub9b0 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc774 \ub54c \ud544\ud130\ub97c \uc81c\ub300\ub85c \uc124\uc815\ud574\uc11c \ub2e4\uc2dc \uc124\uc815\ud569\ub2c8\ub2e4. \uadf8\ub807\uac8c \ub418\uba74 2\uc6d4 1\uc77c\ubd80\ud130\ub294 \uc81c\ub300\ub85c \ud544\ud130\ub9c1\ub41c \ub370\uc774\ud130\ub97c \ubcfc \uc218 \uc788\uc9c0\ub9cc \uc774 \uc804\uc5d0 \uc798\ubabb\ub41c \ud544\ud130\ub97c \uc124\uc815\ud55c 1\uc6d4 1\uc77c\ubd80\ud130 1\uc6d4 31\uc77c\uae4c\uc9c0\uc758 \ub370\uc774\ud130\ub294 \ub2e4\uc2dc \uc0c8\ub85c\uc6b4 \ud544\ud130\ub97c \uc801\uc6a9\ud574\uc11c \ubcfc \uc218\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989 \uadf8 \uae30\uac04\uc758 \ub370\uc774\ud130\ub294 \uc774\ubbf8 \uc798\ubabb\ub41c \ub370\uc774\ud130\uc774\uace0 \uc0c8\ub85c\uc6b4 \ud544\ud130\ub97c \uc124\uc815\ud588\ub2e4\uace0 \ud574\uc11c \uc774\uc804 \uae30\uac04\uc5d0 \uc18c\uae09\ud574\uc11c \uc801\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc18d\uc131\uc5d0\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ubaa8\uc544\ub450\ub294 \ubdf0(Unfiltered View)\ub97c \ud56d\uc0c1 \uc720\uc9c0\ud558\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc6d0\ubcf8 \ub370\uc774\ud130\uac00 \ubaa8\uc544\uc838\uc788\ub294 \ubdf0\uac00 \uc5c6\ub2e4\uba74, \uc6b0\ub9ac\ub294 \uc55e\uc120 \uc608\uc2dc\uc5d0\uc11c\ucc98\ub7fc \ud544\ud130\ub97c \uc798\ubabb \uac78\uc5c8\uc744 \ub54c \uadf8 \uae30\uac04\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \uc601\uc601 \uc783\uc5b4\ubc84\ub9ac\uac8c \ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"\ud544\ud130\uc758 \ub2e8\uc810\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1033162?hl=en#zippy=%2Cin-this-article"},"\uc5ec\uae30")," \uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"Limitations of filters")," \ub97c \ucc38\uace0\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\uc6f9\uc0ac\uc774\ud2b8\uc640 \uc571\uc740 \uac01\uac01\uc758 \uc18d\uc131\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4")),(0,i.kt)("p",{parentName:"li"},"UA\uc5d0\uc11c\ub294 \uc6f9\uacfc \uc571\uc744 \ud558\ub098\uc758 \uc18d\uc131\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \uc11c\ube44\uc2a4\ub97c \uc6f9\uacfc \uc571\uc73c\ub85c \ub3d9\uc2dc\uc5d0 \uc11c\ube44\uc2a4\ud558\uace0 \uc788\ub2e4\uace0 \ud574\ub3c4, \uac01\uac01\uc758 \uc18d\uc131\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \uac01\uac01\uc758 \ubdf0\ub97c \uc0dd\uc131\ud574\uc57c \ud558\ubbc0\ub85c \ub370\uc774\ud130\ub97c \ubaa8\uc544\uc11c \ubcf4\uae30\uc5d0 \ubd88\ud3b8\ud55c \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46309894/131214423-0c523610-fd0d-416e-9058-e9c1337648d7.png",alt:"image"})))),(0,i.kt)("h3",{id:"12-\uac1c\uc120\ub41c-ga4\uc758-\uacc4\uc815-\uad6c\uc870"},"1.2. \uac1c\uc120\ub41c GA4\uc758 \uacc4\uc815 \uad6c\uc870"),(0,i.kt)("p",null,"GA4\ub294 \uc704\uc5d0\uc11c \uc11c\uc220\ud55c UA\uc758 \ub2e8\uc810\ub4e4\uc744 \uc5b4\ub5bb\uac8c \ubcf4\uc644\ud588\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{parentName:"th",src:"https://user-images.githubusercontent.com/46309894/131215475-e024a396-1b60-4227-b7d9-c36b7d321660.png",alt:"image"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"GA4\uc758 \uacc4\uc815 \uad6c\uc870")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GA4\uc5d0\ub294 \ubdf0\uac00 \uc5c6\ub2e4")),(0,i.kt)("p",{parentName:"li"},"UA\uc640 \ub2ec\ub9ac GA4\ub294 \ub530\ub85c \ubdf0\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8 \ub300\uc2e0 \ud544\ud130\ub9c1\ub41c \ub370\uc774\ud130\ub97c \ubcfc \uc218 \uc788\ub294 \ub2e4\ub978 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"\uccab \ubc88\uc9f8\ub294 \ub370\uc774\ud130 \ud544\ud130\uc785\ub2c8\ub2e4. GA4\uc758 \uc67c\ucabd \uc0ac\uc774\ub4dc\ubc14 \ub9e8 \ubc11\uc5d0 \uc788\ub294 \uad00\ub9ac\uc790(Admin) - \uc18d\uc131(Property) - \ub370\uc774\ud130 \uc124\uc815(Data settings) - \ub370\uc774\ud130 \ud544\ud130(Data filters)\ub85c \ub4e4\uc5b4\uac00\uba74 \ud2b8\ub798\ud53d\uc5d0 \ub300\ud55c \ud544\ud130\ub97c \uac78 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud2b9\uc815 \uc11c\ube0c\ub3c4\uba54\uc778\uc73c\ub85c\ubd80\ud130 \uc628 \ud2b8\ub798\ud53d\ub9cc \ud544\ud130\ub9c1\ud574\uc11c \ubcf4\uace0 \uc2f6\ub2e4\uba74 \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"\ub450 \ubc88\uc9f8\ub294 \ud0d0\uc0c9(Explorations)\uc785\ub2c8\ub2e4. \uc67c\ucabd \uc0ac\uc774\ub4dc\ubc14\uc5d0 \ud0d0\uc0c9(Explore)\uc744 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uad49\uc7a5\ud788 \ub2e4\uc591\ud55c \ubcf4\uace0\uc11c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1033861?hl=en#zippy=%2Cin-this-article"},"Dimenstion\uacfc Metric")," \uc744 \uc124\uc815\ud558\uc5ec \ubcf4\uace0\uc11c\ub97c \ub9cc\ub4e4\ub418 \uc6d0\ud558\ub294 Dimension\uacfc Metric \ubaa8\ub450 \ud544\ud130\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc870\uae08 \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/7579450?hl=en#zippy=%2Cin-this-article"},"\uc5ec\uae30")," \ub97c \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GA4\ub294 \uc6f9\uacfc \uc571\uc744 \ud558\ub098\uc758 \uc18d\uc131\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4")),(0,i.kt)("p",{parentName:"li"},"GA4\uc5d0\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130 \uc2a4\ud2b8\ub9bc")," \uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc0c8\ub85c \ub4f1\uc7a5\ud569\ub2c8\ub2e4. \ub370\uc774\ud130 \uc2a4\ud2b8\ub9bc\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130 \ucd9c\ucc98")," \ub85c \uc774\ud574\ud558\uba74 \uc26c\uc6b8 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ud558\ub098\uc758 \uc18d\uc131\uc5d0 \ucd5c\ub300 3\uac1c\uc758 \ub370\uc774\ud130 \ucd9c\ucc98\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 3\uac1c\ub294 \uac01\uac01 iOS, Android, \uc6f9\uc785\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"UA\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c \uc11c\ube44\uc2a4\ub77c\ub3c4 \uc6f9\uacfc \uc571\uc744 \ub3d9\uc77c\ud55c \uc18d\uc131\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubaa8\uc544\ubcfc \uc218 \uc5c6\uc5c8\ub294\ub370 GA4\uc5d0\uc11c\ub294 \ud1b5\ud569\ud574\uc11c \ubcfc \uc218 \uc788\uac8c \ub41c \uac83\uc785\ub2c8\ub2e4."))),(0,i.kt)("h2",{id:"2-\uadf8-\uc678\uc758-\ucc28\uc774\uc810"},"2. \uadf8 \uc678\uc758 \ucc28\uc774\uc810"),(0,i.kt)("p",null,"\uacc4\uc815 \uad6c\uc870 \uc678\uc5d0\ub3c4 \uba87\uac00\uc9c0 \uac1c\uc120\ub41c \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GA4\uc5d0\uc11c\ub294 \ud398\uc774\uc9c0\ubdf0, \uc2a4\ud06c\ub864, \ub9c1\ud06c \ud074\ub9ad, \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc\uc640 \uac19\uc740 \uc911\uc694\ud55c \ud589\ub3d9\ub4e4\uc740 \ub530\ub85c \uc124\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \uc790\ub3d9\uc73c\ub85c \ucd94\uc801\ud569\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud37c\ub110 \ubd84\uc11d, \uacbd\ub85c \ubd84\uc11d\uacfc \uac19\uc740 \uc0c8\ub85c\uc6b4 \ubcf4\uace0 \uc635\uc158\uc774 \ucd94\uac00\ub410\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UA \ub370\uc774\ud130 \ubaa8\ub378\uc5d0\uc11c\ub294 \uc774\ubca4\ud2b8\uc758 \uad6c\uc870\uac00 'Category', 'Action', 'Label' \uc774\ub77c\ub294 3\uac00\uc9c0 \uad6c\uc870\ub85c \ub098\ub204\uc5b4\uc838 \uc788\uc73c\uba70 \uc774\uc5d0 \ub9de\ucd94\uc5b4 \uc774\ubca4\ud2b8 \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\uc57c \ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"\uadf8\ub9ac\uace0 \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 ",(0,i.kt)("strong",{parentName:"p"},"Hit")," \uc774\ub77c\uace0 \ud558\ub294\ub370, 'page tracking hit', 'event tracking hit', 'ecommerce tracking hit' \ub4f1\uc73c\ub85c \ubd84\ub958\ub3fc \uc788\uace0 \ub370\uc774\ud130\ub97c \ubcf4\ub0bc \ub54c \ubb34\uc2a8 hit\uc5d0 \uc18d\ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 hit type\uc744 \ud568\uaed8 \uc804\uc1a1\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"li"},"\ubc18\uba74 GA4\uc5d0\uc11c\ub294 \uc774\ub7f0 hit type\uacfc \uac19\uc740 \uad6c\ubd84 \uc5c6\uc774 \ubaa8\ub4e0 \uc815\ubcf4\ub97c \uc774\ubca4\ud2b8 \ud558\ub098\ub85c \ucc98\ub9ac\ud558\uba70, UA\uc758 'Category', 'Action', 'Label' \uacfc \ub2ec\ub9ac \uc815\ud574\uc9c4 \ub370\uc774\ud130 \uad6c\uc870\uc758 \uc81c\ud55c\uc774 \uc5c6\uc774 \uc6d0\ud558\ub294 \ub370\uc774\ud130\uc758 \uc804\uc1a1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9964640?hl=en&ref_topic=10737980#zippy=%2Cin-this-article"},"\uc5ec\uae30")," \ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."))),(0,i.kt)("h2",{id:"3-\ub9c8\ubb34\ub9ac"},"3. \ub9c8\ubb34\ub9ac"),(0,i.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uc0c8\ub85c\uc6b4 UA\uc640 GA4\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \uc54c\uc544\ubd24\uc2b5\ub2c8\ub2e4. \uc804\ubc18\uc801\uc73c\ub85c GA4\ub294 UA\ubcf4\ub2e4 \uc720\uc5f0\ud558\uac8c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \ud1b5\ud569\uc801\uc73c\ub85c \ubcfc \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc9c0\uae08 UA\ub97c \uc4f0\uace0 \uc788\ub2e4\uba74 GA4\ub85c \uc62e\uaca8\uc57c \ud560\uae4c\uc694? \ub9cc\uc57d \uc6f9\uacfc \uc571\uc758 \ub370\uc774\ud130\ub97c \ud558\ub098\uc758 \uc18d\uc131\uc5d0\uc11c \ubcf4\uace0 \uc2f6\ub2e4\uba74 \uc62e\uae30\ub294 \uac8c \uc88b\uaca0\uace0, \ub354 \ub9ce\uc740 \ubcf4\uace0\uc11c\uc640 \ud5a5\uc0c1\ub41c \uce21\uc815 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc73c\uba74 \uace0\ub824\ud574\ubcfc \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c UA\uc5d0\uc11c GA4\ub85c \uc62e\uae30\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/10312255?hl=en"},"\uc5ec\uae30")," \ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694. UA \uc560\ub110\ub9ac\ud2f1\uc2a4 \ud398\uc774\uc9c0\uc758 \uc67c\ucabd \uc0ac\uc774\ub4dc\ubc14 - \uad00\ub9ac\uc790 - \uc18d\uc131\uc5d0\uc11c \ub9e8 \uc704\uc5d0 \uc788\ub294 GA4 \uc5b4\uc2dc\uc2a4\ud134\ud2b8 \uc124\uc815\uc744 \ub204\ub974\uba74 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"4-\ucc38\uace0-\uc790\ub8cc"},"4. \ucc38\uace0 \uc790\ub8cc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.inflearn.com/course/%EA%B5%AC%EA%B8%80-%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A44/"},"https://www.inflearn.com/course/\uad6c\uae00-\uc560\ub110\ub9ac\ud2f1\uc2a44"))))}m.isMDXComponent=!0}}]);