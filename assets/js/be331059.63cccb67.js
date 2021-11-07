"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[5078],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,g=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={slug:"google-analytics-introduce",title:"Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c",author:"Seongcheol Jo",author_url:"https://github.com/josworks27",tags:["GoogleAnalytics","GA"]},c="Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c",s={unversionedId:"handbook/Google-Analytics/Basics/introduce",id:"handbook/Google-Analytics/Basics/introduce",isDocsHomePage:!1,title:"Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c",description:"0. \ub4e4\uc5b4\uac00\uae30\uc5d0 \uc55e\uc11c",source:"@site/docs/handbook/Google-Analytics/02-Basics/introduce.md",sourceDirName:"handbook/Google-Analytics/02-Basics",slug:"/handbook/Google-Analytics/Basics/google-analytics-introduce",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/google-analytics-introduce",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/Google-Analytics/02-Basics/introduce.md",version:"current",lastUpdatedBy:"Seongcheol Jo",lastUpdatedAt:1636275524,formattedLastUpdatedAt:"11/7/2021",frontMatter:{slug:"google-analytics-introduce",title:"Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c",author:"Seongcheol Jo",author_url:"https://github.com/josworks27",tags:["GoogleAnalytics","GA"]},sidebar:"handbookSidebar",previous:{title:"\ub9de\ucda4 \ucea0\ud398\uc778\uc744 \uce21\uc815\ud558\ub294 \ubc29\ubc95",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/how-to-track-a-marketing-campaign"},next:{title:"\uc2e4\uc2dc\uac04 \ubcf4\uace0\uc11c",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/realtime-reports"}},u=[{value:"0. \ub4e4\uc5b4\uac00\uae30\uc5d0 \uc55e\uc11c",id:"0-\ub4e4\uc5b4\uac00\uae30\uc5d0-\uc55e\uc11c",children:[]},{value:"1. \ub514\uc9c0\ud138 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc815\uc758",id:"1-\ub514\uc9c0\ud138-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uc815\uc758",children:[]},{value:"2. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc758 \uc791\ub3d9 \ubc29\uc2dd",id:"2-\uad6c\uae00-\uc560\ub110\ub9ac\ud2f1\uc2a4\uc758-\uc791\ub3d9-\ubc29\uc2dd",children:[{value:"2.1. \uc6f9 \uc0ac\uc774\ud2b8 \ucd94\uc801",id:"21-\uc6f9-\uc0ac\uc774\ud2b8-\ucd94\uc801",children:[]},{value:"2.2. \ucc98\ub9ac \ubc0f \ubcf4\uace0",id:"22-\ucc98\ub9ac-\ubc0f-\ubcf4\uace0",children:[]}]},{value:"3. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc124\uc815",id:"3-\uad6c\uae00-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uc124\uc815",children:[{value:"3.1. \uc560\ub110\ub9ac\ud2f1\uc2a4 \uad6c\ud604\uc758 \uae30\ubcf8 \uc694\uc18c",id:"31-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uad6c\ud604\uc758-\uae30\ubcf8-\uc694\uc18c",children:[]},{value:"3.2. \ub2e8\uacc4\ubcc4 \uc124\uc815 \ubc29\ubc95",id:"32-\ub2e8\uacc4\ubcc4-\uc124\uc815-\ubc29\ubc95",children:[]}]},{value:"4. \uacc4\uc815 \ubcf4\uae30 \ud544\ud130\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95",id:"4-\uacc4\uc815-\ubcf4\uae30-\ud544\ud130\ub97c-\uc124\uc815\ud558\ub294-\ubc29\ubc95",children:[]},{value:"5. \ucc38\uace0\uc790\ub8cc",id:"5-\ucc38\uace0\uc790\ub8cc",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"google-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uc18c\uac1c"},"Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc18c\uac1c"),(0,l.kt)("h2",{id:"0-\ub4e4\uc5b4\uac00\uae30\uc5d0-\uc55e\uc11c"},"0. \ub4e4\uc5b4\uac00\uae30\uc5d0 \uc55e\uc11c"),(0,l.kt)("p",null,"\ubcf8 \uc790\ub8cc\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \ub3c4\uc6c0\ub9d0\uc758 \ucd08\ubcf4\uc790\uc6a9 Google \uc560\ub110\ub9ac\ud2f1\uc2a4\uc758 \uc8fc\uc694 \ub0b4\uc6a9\uc744 \ucc98\uc74c \uc2dc\uc791\ud558\ub294 \ucd08\ubcf4\uc790\ub4e4\uc774 \uc774\ud574\ud558\uae30 \uc27d\uac8c \uc694\uc57d\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc774 \uad81\uae08\ud558\ub2e4\uba74 \uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/6383002?hl=ko"},"\ud83d\udc49 \uc6d0\ubb38 \ub9c1\ud06c")),(0,l.kt)("h2",{id:"1-\ub514\uc9c0\ud138-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uc815\uc758"},"1. \ub514\uc9c0\ud138 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc815\uc758"),(0,l.kt)("p",null,"\ub514\uc9c0\ud138 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0 \ub300\ud574 \uad6c\uae00\uc758 Avinash Kaushik\uc740 \uc544\ub798\uc640 \uac19\uc740 \uc815\uc758\ub97c \ub0b4\ub838\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"'\uace0\uac1d\uacfc \uc7a0\uac1c\uace0\uac1d\uc758 \uc628\ub77c\uc778 \uc0ac\uc6a9 \uacbd\ud5d8\uc744 \uc9c0\uc18c\uc801\uc73c\ub85c \uac1c\uc120\ud558\uc5ec, \uc628\ub77c\uc778\uacfc \uc624\ud504\ub77c\uc778\uc5d0\uc11c \uc6d0\ud558\ub294 \ube44\uc988\ub2c8\uc2a4 \uacb0\uacfc\ub97c \uc5bb\uae30 \uc704\ud574 \uc790\uc0ac \ubc0f \uacbd\uc7c1\uc0ac\uc5d0 \ub300\ud55c \uc815\uc131\uc801, \uc815\ub7c9\uc801 \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\ub294 \uac83'")),(0,l.kt)("p",null,"\ub9c8\ucf00\ud305\uc5d0\uc11c\ub294 \uad6c\ub9e4 \uc720\uc785\uacbd\ub85c\uc758 \uac1c\ub150\uc744 \ud65c\uc6a9\ud558\uace0 \uc788\ub294\ub370, \uae30\ubcf8\uc801\uc778 \uad6c\ub9e4 \uc720\uc785\uacbd\ub85c\ub97c \ubcf4\uba74 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\ub4e4\uc740 \uc0c1\ud488\uc744 \uc544\ub798\uc640 \uac19\uc740 \ub2e8\uacc4\ub85c \uad6c\ub9e4\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud68d\ub4dd \ub2e8\uacc4: \uc778\uc9c0\ub3c4 \uc81c\uace0\uc640 \uc0ac\uc6a9\uc790 \uad00\uc2ec\ubd84\uc57c\ub97c \ud655\ubcf4\ud558\ub294 \uc2dc\uc810"),(0,l.kt)("li",{parentName:"ul"},"\ud589\ub3d9 \ub2e8\uacc4: \uc0ac\uc6a9\uc790\uac00 \uadc0\uc0ac\uc5d0 \ucc38\uc5ec\ud558\ub294 \uc2dc\uc810"),(0,l.kt)("li",{parentName:"ul"},"\uc804\ud658 \ub2e8\uacc4: \uc0ac\uc6a9\uc790\uac00 \uadc0\uc0ac\uc758 \uace0\uac1d\uc774 \ub418\uc5b4 \uac70\ub798\ud558\ub294 \uc2dc\uc810")),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uacfc\uc815\uc744 \ub514\uc9c0\ud138 \uc560\ub110\ub9ac\ud2f1\uc2a4\ub97c \ud65c\uc6a9\ud558\uc5ec \uc720\uc785\uacbd\ub85c\uc758 \ub2e4\uc591\ud55c \uce21\uba74\uc744 \uce21\uc815\ud560 \uc218 \uc788\uace0, \uad6c\ub9e4\ub97c \uc720\ub3c4\ud55c \ub3d9\uc791\uc774 \ubb34\uc5c7\uc778\uc9c0 \ucd94\uc801\ud558\uace0 \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \uc2e0\uaddc \ubc0f \uae30\uc874 \uace0\uac1d\uc5d0\uac8c \ub3c4\ub2ec\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ud655\ud55c \ud310\ub2e8\uc744 \ub0b4\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"2-\uad6c\uae00-\uc560\ub110\ub9ac\ud2f1\uc2a4\uc758-\uc791\ub3d9-\ubc29\uc2dd"},"2. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc758 \uc791\ub3d9 \ubc29\uc2dd"),(0,l.kt)("h3",{id:"21-\uc6f9-\uc0ac\uc774\ud2b8-\ucd94\uc801"},"2.1. \uc6f9 \uc0ac\uc774\ud2b8 \ucd94\uc801"),(0,l.kt)("p",null,"\uc6f9 \uc0ac\uc774\ud2b8\ub97c \ucd94\uc801\ud558\uae30 \uc704\ud574\uc120 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uac01 \ud398\uc774\uc9c0\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucd94\uc801 \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574, \uc0ac\uc6a9\uc790\uac00 \ud398\uc774\uc9c0\ub97c \ubc29\ubb38\ud560 \ub54c\ub9c8\ub2e4 \ucd94\uc801 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\uc790\uac00 \ud574\ub2f9 \ud398\uc774\uc9c0\uc640 \uc0c1\ud638\uc791\uc6a9\ud55c \ubc29\ubc95\uc5d0 \ub300\ud55c \uc775\uba85 \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud398\uc774\uc9c0\uac00 \ub85c\ub4dc\ub420 \ub54c \ub9c8\ub2e4 \ucd94\uc801 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\uc790 \ud65c\ub3d9\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc804\uc1a1\ud569\ub2c8\ub2e4. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\ub294 \uc774 \ud65c\ub3d9\uc744 \uc138\uc158(Session) \uc774\ub77c\uace0 \ud558\ub294 \uae30\uac04\ubcc4\ub85c \uadf8\ub8f9\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc138\uc158\uc740 \uc0ac\uc6a9\uc790\uac00 \ucd94\uc801 \ucf54\ub4dc\uac00 \ud3ec\ud568\ub41c \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud560 \ub54c \uc2dc\uc791\ub418\uba70, 30\ubd84 \ub3d9\uc548 \ud65c\ub3d9\uc774 \uc5c6\uc73c\uba74 \uc885\ub8cc\ub429\ub2c8\ub2e4. \uc138\uc158\uc774 \uc885\ub8cc\ub41c \ud6c4 \uc0ac\uc6a9\uc790\uac00 \ub2e4\uc2dc \ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uc624\uba74 \uc0c8\ub85c\uc6b4 \uc138\uc158\uc774 \uc2dc\uc791\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"22-\ucc98\ub9ac-\ubc0f-\ubcf4\uace0"},"2.2. \ucc98\ub9ac \ubc0f \ubcf4\uace0"),(0,l.kt)("p",null,"\ucd94\uc801 \ucf54\ub4dc\ub294 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud560 \ub54c \ud574\ub2f9 \uc815\ubcf4\ub97c \ud328\ud0a4\uc9c0\ub85c \ubb36\uc5b4 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0 \uc804\uc1a1\ud558\uc5ec \ubcf4\uace0\uc11c\ub85c \ucc98\ub9ac\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud560 \ub54c \uc0ac\uc6a9\uc790 \uae30\uae30\uac00 \ubaa8\ubc14\uc77c\uc778\uc9c0 \ub370\uc2a4\ud06c\ud1b1\uc778\uc9c0 \ub610\ub294 \uc0ac\uc6a9\uc790\uac00 \uc0ac\uc6a9\ud55c \ube0c\ub77c\uc6b0\uc800\uc758 \uc720\ud615\uacfc \uac19\uc740 \ud2b9\uc815 \uae30\uc900\uc5d0 \ub530\ub77c \ub370\uc774\ud130\ub97c \uc9d1\uacc4\ud558\uace0 \uad6c\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/AIFpRSMWBNNjsxvUKT9_9RVfV90tdE1YnfhltUWS1BYwn1G16ESdYzn3bMLJCwBS_A=w1790-h500",alt:"GA-introduce-Image-1"})),(0,l.kt)("h2",{id:"3-\uad6c\uae00-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uc124\uc815"},"3. \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc124\uc815"),(0,l.kt)("h3",{id:"31-\uc560\ub110\ub9ac\ud2f1\uc2a4-\uad6c\ud604\uc758-\uae30\ubcf8-\uc694\uc18c"},"3.1. \uc560\ub110\ub9ac\ud2f1\uc2a4 \uad6c\ud604\uc758 \uae30\ubcf8 \uc694\uc18c"),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uacc4\uc815\uc740 \uc870\uc9c1(Organization) \uc544\ub798\uc5d0 \uadf8\ub8f9\ud654 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574, \uc5ec\ub7ec \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uacc4\uc815\uc744 \ud55c \uadf8\ub8f9\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/_FW7BZSOnetJdZw_FShlv1rINVBM1_OSKISLi9BIAZKe5C2GxTGdLbXGLq6o2IHV1fyh=w1020-h570",alt:"GA-introduce-Image-2"})),(0,l.kt)("p",null,"\uac01 \uacc4\uc815\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 \uc18d\uc131(Property) \uc774, \uac01 \uc18d\uc131\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 \ubcf4\uae30(View) \uac00 \ud3ec\ud568\ub420 \uc218 \uc788\uc5b4, \ube44\uc988\ub2c8\uc2a4\uc5d0 \uac00\uc7a5 \uc798 \ub9de\ub294 \ubc29\uc2dd\uc73c\ub85c \uc560\ub110\ub9ac\ud2f1\uc2a4 \ub370\uc774\ud130\uc758 \uc218\uc9d1\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac01 \uacc4\uc815\uc5d0\ub294 1\uac1c \uc774\uc0c1\uc758 \uc18d\uc131\uc774 \uc788\uace0, \uac01 \uc18d\uc131\uc740 \ucd94\uc801 \ucf54\ub4dc\uc5d0 \ud45c\uc2dc\ub418\ub294 \uace0\uc720\ud55c \ucd94\uc801 ID(TrackingID)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ub85c \ub3c5\ub9bd\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"\ubcf4\uae30view-\uc124\uc815"},"\ubcf4\uae30(View) \uc124\uc815"),(0,l.kt)("p",null,"\uac01 \uacc4\uc815\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uc18d\uc131\uc774 \uc788\ub294 \uac83\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uac01 \uc18d\uc131\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 \ubcf4\uae30\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\uc131 \uc124\uc815\uc5d0\uc11c \ud544\ud130 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac01 \ubcf4\uae30\uc758 \ubcf4\uace0\uc11c\uc5d0 \ud3ec\ud568\ub420 \ub370\uc774\ud130\ub97c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/SZuK8_PHrOYJbp5HIlSLd0_Rr6KgsqUTKpMcxOtxmJvFGMbskTu7-NBTwG9k38Z0nb7N=w1020-h570",alt:"GA-introduce-Image-3"})),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \uc804 \uc138\uacc4 \uad6c\uae00 \uc2a4\ud1a0\uc5b4\uc758 \ub370\uc774\ud130\ub97c \ubaa8\ub450 \ud3ec\ud568\ud558\ub294 \ud558\ub098\uc758 \ubcf4\uae30\ub97c \ub9cc\ub4e4 \uc218 \uc788\uace0, \uc9c0\uc5ed\ubcc4 \ub370\uc774\ud130\ub97c \ubcf4\ub824\ub294 \uacbd\uc6b0\uc5d0\ub294 \ubd81\ubbf8, \uc720\ub7fd, \uc544\uc2dc\uc544 \ub4f1 \ubcc4\ub3c4\uc758 \ubcf4\uae30\ub97c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubcf4\uae30\uc5d0\uc11c \ubaa9\ud45c(Goals)\ub97c \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ubaa9\ud45c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc804\ud658 \ub610\ub294 \ube44\uc988\ub2c8\uc2a4 \ubaa9\ud45c\ub97c \ucd94\uc801\ud558\ub294 \ub370 \ub9e4\uc6b0 \uc720\uc6a9\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\uc608\uc2dc"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uba54\uc77c \ub274\uc2a4\ub808\ud130\uc5d0 \uac00\uc785\ud55c \uc0ac\uc6a9\uc790 \uc218"),(0,l.kt)("li",{parentName:"ul"},"\uc81c\ud488\uc744 \uad6c\ub9e4\ud55c \uc0ac\uc6a9\uc790 \uc218")),(0,l.kt)("p",null,"\uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0 \ub370\uc774\ud130\uac00 \uc218\uc9d1\ub418\uace0 \ucc98\ub9ac\ub41c \ud6c4\uc5d0\ub294 \ub370\uc774\ud130\ub97c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc73c\ubbc0\ub85c, \uacc4\uc815, \uc18d\uc131, \ubcf4\uae30\ub97c \uc2e0\uc911\ud558\uac8c \uacb0\uc815\ud558\uc138\uc694. \ub610\ud55c \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \ubcf4\uae30\ub294 \ub9cc\ub4e4\uc5b4\uc9c4 \ub0a0\uc9dc\ubd80\ud130 \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub9cc \ud3ec\ud568\ub418\uba70, \ubcf4\uae30\ub97c \uc0ad\uc81c\ud558\uba74 \uc81c\ud55c\ub41c \uc2dc\uac04 \ub0b4\uc5d0 \uad00\ub9ac\uc790\ub9cc \ubcf5\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/cG0LPlrrIXuZFMqH37qgcpHDb3S4ZwpbE3KBMYpzylp9hg8DZj3Z2yiCU-k_ckXG0IxO=w1020-h570",alt:"GA-introduce-Image-4"})),(0,l.kt)("h4",{id:"\uc0ac\uc6a9\uc790-\uad8c\ud55c"},"\uc0ac\uc6a9\uc790 \uad8c\ud55c"),(0,l.kt)("p",null,"\uacc4\uc815, \uc18d\uc131, \ubcf4\uae30 \ub808\ubca8\uc5d0\uc11c \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uad8c\ud55c\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ub808\ubca8\uc5d0\uc11c\ub294 \uadf8 \ub808\ubca8\uc758 \uc0c1\uc704 \uad8c\ud55c\uc744 \uc0c1\uc18d\ubc1b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\uc608\uc2dc"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc815\uc5d0 \ub300\ud574 \uc5d1\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294 \uacbd\uc6b0, \ud574\ub2f9 \uacc4\uc815 \ubc14\ub85c \uc544\ub798\uc5d0 \uc788\ub294 \uc18d\uc131\uacfc \ubcf4\uae30\uc5d0\uc11c\ub3c4 \ub3d9\uc77c\ud55c \uc5d1\uc138\uc2a4 \uad8c\ud55c\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcf4\uae30\uc5d0 \ub300\ud574\uc11c\ub9cc \uc5d1\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \ubcf4\uae30\uc640 \uc5f0\uacb0\ub41c \uc18d\uc131 \ub610\ub294 \uacc4\uc815\uc744 \uc218\uc815\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc740 \ubd80\uc5ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c '\uad00\ub9ac'\ub97c \ud074\ub9ad\ud558\uba74 '\uc0ac\uc6a9\uc790 \uad00\ub9ac', '\uc218\uc815', '\uacf5\ub3d9\uc791\uc5c5' \ub610\ub294 '\uc77d\uae30 \ubc0f \ubd84\uc11d'\uc5d0 \ub300\ud574 \uc0ac\uc6a9\uc790 \uad8c\ud55c\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uad00\ub9ac: \uc0ac\uc6a9\uc790\uac00 \uacc4\uc815, \uc18d\uc131, \ubcf4\uae30\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc5d1\uc138\uc2a4\ub97c \ucd94\uac00/\uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc218\uc815: \uc0ac\uc6a9\uc790\uac00 \uad6c\uc131 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uacf5\ub3d9\uc791\uc5c5: \uc0ac\uc6a9\uc790\uac00 \ub300\uc2dc\ubcf4\ub4dc \ub610\ub294 \ud2b9\uc815 \uce21\uc815 \uc124\uc815\uacfc \uac19\uc740 \uc0ac\ud56d\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc77d\uae30 \ubc0f \ubd84\uc11d: \uc0ac\uc6a9\uc790\uac00 \ub370\uc774\ud130 \uc5f4\ub78c, \ubcf4\uace0\uc11c \ubd84\uc11d, \ub300\uc2dc\ubcf4\ub4dc \uc0dd\uc131\uc744 \ud560 \uc218 \uc788\uc9c0\ub9cc \uc124\uc815\uc744 \ubcc0\uacbd\ud558\uac70\ub098 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub97c \ucd94\uac00\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"32-\ub2e8\uacc4\ubcc4-\uc124\uc815-\ubc29\ubc95"},"3.2. \ub2e8\uacc4\ubcc4 \uc124\uc815 \ubc29\ubc95"),(0,l.kt)("h4",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,l.kt)("p",null,"\uad6c\uae00 \uacc4\uc815\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0 \uc5d1\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uc6f9\uc0ac\uc774\ud2b8(analytics.google.com)\uc5d0\uc11c \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d4b2652be65813803ed171c/large.png",alt:"GA-introduce-Image-5"})),(0,l.kt)("h4",{id:"\uacc4\uc815-\uc124\uc815"},"\uacc4\uc815 \uc124\uc815"),(0,l.kt)("p",null,"\uc6d0\ud558\ub294 \uacc4\uc815 \uc774\ub984\uc744 \uc785\ub825\ud558\uace0, \uc870\uc9c1(Organization)\uc744 \uc5f0\uacb0\ud558\uac70\ub098 \uacc4\uc815 \ub370\uc774\ud130\uc758 \uacf5\uc720 \uc124\uc815 \ub4f1\uc758 \uc635\uc158\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f58a7ff2d605b24d235e/large.png",alt:"GA-introduce-Image-6"})),(0,l.kt)("h4",{id:"\uce21\uc815-\ub300\uc0c1-\uc124\uc815"},"\uce21\uc815 \ub300\uc0c1 \uc124\uc815"),(0,l.kt)("p",null,"\uce21\uc815 \ub300\uc0c1\uc73c\ub85c \uc6f9\uc0ac\uc774\ud2b8, \ubaa8\ubc14\uc77c \ub610\ub294 \ub458 \ub2e4 \uce21\uc815\ud560\uc9c0 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f2477ff2d605b24d235a/large.png",alt:"GA-introduce-Image-7"})),(0,l.kt)("h4",{id:"\uc18d\uc131-\uc124\uc815"},"\uc18d\uc131 \uc124\uc815"),(0,l.kt)("p",null,"\ud2b8\ub799\ud0b9\ud558\ub824\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc5ec \uc18d\uc131\uc744 \uc124\uc815\ud560 \uc218 \uc788\uace0, \uc5c5\uc885 \uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud558\uc5ec \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c \uc5c5\uc885\uc5d0 \ub9de\ub294 \ub354 \ub098\uc740 \ubcf4\uace0\uc11c\uc640 \uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d39f46b7ff2d605b24d235d/large.png",alt:"GA-introduce-Image-8"})),(0,l.kt)("h4",{id:"\ucd94\uc801-\ucf54\ub4dc-\uc124\uc815"},"\ucd94\uc801 \ucf54\ub4dc \uc124\uc815"),(0,l.kt)("p",null,"\uc18d\uc131 \uc124\uc815\uc744 \ub9c8\uce58\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucd94\uc801 \ucf54\ub4dc\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc774 \ucf54\ub4dc\ub97c \uc6f9\uc0ac\uc774\ud2b8\uc758 head \ud0dc\uadf8 \uac00\uc7a5 \uc704\uc5d0 \ucd94\uc801 \ucf54\ub4dc\ub97c \ub123\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d4b27febe65813803ed171f/large.png",alt:"GA-introduce-Image-9"})),(0,l.kt)("h4",{id:"\uc2e4\uc2dc\uac04-\uac1c\uc694-\ud655\uc778"},"\uc2e4\uc2dc\uac04 \uac1c\uc694 \ud655\uc778"),(0,l.kt)("p",null,"\ucd94\uc801 \ucf54\ub4dc\ub97c \uc124\uc815\ud55c \ub2e4\uc74c\uc5d0\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c \ud2b8\ub799\ud0b9\uc774 \uc798 \ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub294 \uc2e4\uc2dc\uac04 \uac1c\uc694 \ubcf4\uace0\uc11c\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/academy-prod/evolve/academy/course06/ko/unit1/lesson3/course/en/assets/5d56f3f5be65813803ed1982/large.png",alt:"GA-introduce-Image-10"})),(0,l.kt)("h2",{id:"4-\uacc4\uc815-\ubcf4\uae30-\ud544\ud130\ub97c-\uc124\uc815\ud558\ub294-\ubc29\ubc95"},"4. \uacc4\uc815 \ubcf4\uae30 \ud544\ud130\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("p",null,"\ubcf4\uae30\uc5d0 \ud544\ud130\ub97c \uc124\uc815\ud558\ub294 \uae30\ubcf8\uc801\uc778 \ubc29\ubc95\uc740 \uc544\ub798 \uc6d0\ubb38\uacfc \ucc38\uace0\uc790\ub8cc\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/6382981?hl=ko"},"\ud83d\udc49 \uc6d0\ubb38 \ub9c1\ud06c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1034823?hl=ko#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90-%EB%82%98%EC%99%80-%EC%9E%88%EB%8A%94-%EB%82%B4%EC%9A%A9%EC%9D%80-%EB%8B%A4%EC%9D%8C%EA%B3%BC-%EA%B0%99%EC%8A%B5%EB%8B%88%EB%8B%A4"},"\ud83d\udc49 \ubcf4\uae30 \ud544\ud130 \uc791\uc131 \ubc0f \uad00\ub9ac \ucc38\uace0\uc790\ub8cc")),(0,l.kt)("h2",{id:"5-\ucc38\uace0\uc790\ub8cc"},"5. \ucc38\uace0\uc790\ub8cc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://analytics.google.com/analytics/academy/"},"https://analytics.google.com/analytics/academy"))))}d.isMDXComponent=!0}}]);