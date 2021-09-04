"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[8793],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={slug:"audience reports",title:"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c",author:"Yebin Seo",author_url:"https://github.com/yeppin",author_image_url:"https://avatars.githubusercontent.com/u/81066071?s=400&u=55ee1f97f34d9497ad540b225cfd2448aeefd8b0&v=4",tags:["GoogleAnalytics","GA"]},s="\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c \ubd84\uc11d\ud558\uae30",l={unversionedId:"handbook/google-analytics-basics/audience-reports",id:"handbook/google-analytics-basics/audience-reports",isDocsHomePage:!1,title:"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c",description:"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ubc29\ubb38\ud55c \uc0ac\uc6a9\uc790\uc758 \ud2b9\uc9d5\uc744 \ubcf4\ub2e4 \uc790\uc138\ud558\uac8c \ud30c\uc545\ud560 \uc218 \uc788\ub294 \uc720\uc6a9\ud55c \ud234\uc774\ub2e4. \uc774 \ubcf4\uace0\uc11c\ub97c \ud1b5\ud574 \uc6b0\ub9ac\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud55c \uc0ac\uc6a9\uc790\uc758 \uc131\ubcc4\uacfc \uc5f0\ub839\ub300\ubfd0\ub9cc \uc544\ub2c8\ub77c \uac70\uc8fc \ub3c4\uc2dc, \uc0ac\uc6a9 \uc5b8\uc5b4, \uc0ac\uc774\ud2b8 \uc811\uc18d \uc2dc \uc0ac\uc6a9\ud55c \uae30\uae30 \ub4f1\uae4c\uc9c0\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\ub97c \ub300\uc0c1\uc73c\ub85c \uc7a0\uc7ac\uace0\uac1d\uc774 \uc815\uc758\ub418\uc9c0\ub9cc, \uc5ec\ub7ec \uc138\uadf8\uba3c\ud2b8\ub97c \uc870\ud569\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc7a0\uc7ac\uace0\uac1d\uc744 \uc815\uc758\ud560 \uc218\ub3c4 \uc788\ub2e4.",source:"@site/docs/handbook/google-analytics-basics/audience-reports.md",sourceDirName:"handbook/google-analytics-basics",slug:"/handbook/google-analytics-basics/audience reports",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/audience reports",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/google-analytics-basics/audience-reports.md",version:"current",frontMatter:{slug:"audience reports",title:"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c",author:"Yebin Seo",author_url:"https://github.com/yeppin",author_image_url:"https://avatars.githubusercontent.com/u/81066071?s=400&u=55ee1f97f34d9497ad540b225cfd2448aeefd8b0&v=4",tags:["GoogleAnalytics","GA"]},sidebar:"handbookSidebar",previous:{title:"\ud68d\ub4dd \ubcf4\uace0\uc11c",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/acquisition reports"},next:{title:"\ubaa9\ud45c",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/goals"}},u=[{value:"1. \ubcf4\uace0\uc11c \ub458\ub7ec\ubcf4\uae30",id:"1-\ubcf4\uace0\uc11c-\ub458\ub7ec\ubcf4\uae30",children:[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\ud65c\uc131 \uc0ac\uc6a9\uc790 \ubcf4\uace0\uc11c(Active Users Report)",id:"\ud65c\uc131-\uc0ac\uc6a9\uc790-\ubcf4\uace0\uc11cactive-users-report",children:[]},{value:"\uc778\uad6c\ud1b5\uacc4 \ubcf4\uace0\uc11c &amp; \uad00\uc2ec\ubd84\uc57c \ubcf4\uace0\uc11c",id:"\uc778\uad6c\ud1b5\uacc4-\ubcf4\uace0\uc11c--\uad00\uc2ec\ubd84\uc57c-\ubcf4\uace0\uc11c",children:[]},{value:"\uc9c0\uc5ed \ubcf4\uace0\uc11c",id:"\uc9c0\uc5ed-\ubcf4\uace0\uc11c",children:[]},{value:"\ud589\ub3d9 \ubcf4\uace0\uc11c",id:"\ud589\ub3d9-\ubcf4\uace0\uc11c",children:[]},{value:"\uae30\uc220 \ubcf4\uace0\uc11c &amp; \ubaa8\ubc14\uc77c \ubcf4\uace0\uc11c",id:"\uae30\uc220-\ubcf4\uace0\uc11c--\ubaa8\ubc14\uc77c-\ubcf4\uace0\uc11c",children:[]}]},{value:"2. \ubcf4\uace0\uc11c \ubd84\uc11d \uc2dc \uc8fc\uc758\ud560 \uc810",id:"2-\ubcf4\uace0\uc11c-\ubd84\uc11d-\uc2dc-\uc8fc\uc758\ud560-\uc810",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uc7a0\uc7ac\uace0\uac1d-\ubcf4\uace0\uc11c-\ubd84\uc11d\ud558\uae30"},"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c \ubd84\uc11d\ud558\uae30"),(0,o.kt)("p",null,"\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ubc29\ubb38\ud55c \uc0ac\uc6a9\uc790\uc758 \ud2b9\uc9d5\uc744 \ubcf4\ub2e4 \uc790\uc138\ud558\uac8c \ud30c\uc545\ud560 \uc218 \uc788\ub294 \uc720\uc6a9\ud55c \ud234\uc774\ub2e4. \uc774 \ubcf4\uace0\uc11c\ub97c \ud1b5\ud574 \uc6b0\ub9ac\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud55c \uc0ac\uc6a9\uc790\uc758 \uc131\ubcc4\uacfc \uc5f0\ub839\ub300\ubfd0\ub9cc \uc544\ub2c8\ub77c \uac70\uc8fc \ub3c4\uc2dc, \uc0ac\uc6a9 \uc5b8\uc5b4, \uc0ac\uc774\ud2b8 \uc811\uc18d \uc2dc \uc0ac\uc6a9\ud55c \uae30\uae30 \ub4f1\uae4c\uc9c0\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\ub97c \ub300\uc0c1\uc73c\ub85c \uc7a0\uc7ac\uace0\uac1d\uc774 \uc815\uc758\ub418\uc9c0\ub9cc, \uc5ec\ub7ec \uc138\uadf8\uba3c\ud2b8\ub97c \uc870\ud569\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc7a0\uc7ac\uace0\uac1d\uc744 \uc815\uc758\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,o.kt)("h2",{id:"1-\ubcf4\uace0\uc11c-\ub458\ub7ec\ubcf4\uae30"},"1. \ubcf4\uace0\uc11c \ub458\ub7ec\ubcf4\uae30"),(0,o.kt)("h3",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/81066071/131258942-57ddffa8-ada8-4c35-a4c9-1d350c92f908.PNG",alt:"handbook_audience_outline"}),"\n\uc7a0\uc7ac\uace0\uac1d \ubcf4\uace0\uc11c\ub294 \uc0ac\uc6a9\uc790 \uad00\ub828 \uae30\ubcf8\uc801\uc778 \uc815\ubcf4\uac00 \ud3ec\ud568\ub41c ",(0,o.kt)("strong",{parentName:"p"},"\uac1c\uc694"),"\ub97c \uc81c\uacf5\ud55c\ub2e4. \uadf8\ub798\ud504 \uc67c\ucabd \uc0c1\ub2e8\uc758 \uc815\ub82c\uae30\uc900\uc744 \uc124\uc815\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc218, \uc0ac\uc6a9\uc790\ub2f9 \uc138\uc158 \uc218, \uc2e0\uaddc \ubc29\ubb38\uc790 \uc218 \ub4f1\uc744 \uac80\ud1a0\ud55c\ub2e4\uba74, \uc0dd\uc131\ub41c \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ub300\ud55c \uc804\uccb4\uc801\uc778 \ub0b4\uc6a9 \ud30c\uc545\uc5d0 \ud070 \ub3c4\uc6c0\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4. "),(0,o.kt)("h3",{id:"\ud65c\uc131-\uc0ac\uc6a9\uc790-\ubcf4\uace0\uc11cactive-users-report"},"\ud65c\uc131 \uc0ac\uc6a9\uc790 \ubcf4\uace0\uc11c(Active Users Report)"),(0,o.kt)("p",null,"\ud65c\uc131 \uc0ac\uc6a9\uc790 \ubcf4\uace0\uc11c\uc758 \uacbd\uc6b0, \uc124\uc815\ud55c \uae30\uac04(1\uc77c, 7\uc77c, 14\uc77c, 28\uc77c)\ubcc4\ub85c ",(0,o.kt)("strong",{parentName:"p"},"\ubc00\ucc29\ub3c4"),"\ub97c \uc81c\uacf5\ud55c\ub2e4. \uc774\ub294 \uc0ac\uc6a9\uc790\uac00 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ub300\ud574 \uac00\uc9c0\ub294 \uad00\uc2ec \ucd94\uc774\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud560 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub41c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"\ubc00\ucc29\ub3c4"),": \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c ",(0,o.kt)("strong",{parentName:"p"},"1\ud68c \uc774\uc0c1\uc758 \uc138\uc158"),"\uc744 \ubc1c\uc0dd\uc2dc\ud0a8 \uc720\uc800\uc758 \uc218",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"\uc138\uc158"),": \uc0ac\uc6a9\uc790\uac00 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc801\uadf9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud55c \uc2dc\uac04. \ud3c9\uade0\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc811\uc18d \ud6c4 30\ubd84 \ub0b4\uc678\ub97c 1 \uc138\uc158\uc73c\ub85c \uac04\uc8fc\ud558\uc5ec \ub3d9\uc77c \uc0ac\uc6a9\uc790\uac00 \ud574\ub2f9 \uc2dc\uac04 \ub0b4 \uc0ac\uc774\ud2b8\ub97c \uc5ec\ub7ec \ubc88 \ubc29\ubb38\ud558\ub354\ub77c\ub3c4 \uc911\ubcf5 \uc9d1\uacc4\ub418\uc9c0 \uc54a\uc74c.  "),(0,o.kt)("p",null,"\uc6f9\uc0ac\uc774\ud2b8 \uad00\ub9ac\uc790\ub294 \ud65c\uc131 \uc0ac\uc6a9\uc790 \ubcf4\uace0\uc11c\ub97c \uc9c0\ud45c \uc0bc\uc544, \uc0ac\uc6a9\uc790\uc758 \uad00\uc2ec\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uc774\ub04c\uc5b4\ub0bc \uc218 \uc788\ub294 \ub9c8\ucf00\ud305 \uc804\ub7b5\uc744 \uad6c\uc0c1\ud574\ubcfc \uc218 \uc788\ub2e4. "),(0,o.kt)("h3",{id:"\uc778\uad6c\ud1b5\uacc4-\ubcf4\uace0\uc11c--\uad00\uc2ec\ubd84\uc57c-\ubcf4\uace0\uc11c"},"\uc778\uad6c\ud1b5\uacc4 \ubcf4\uace0\uc11c & \uad00\uc2ec\ubd84\uc57c \ubcf4\uace0\uc11c"),(0,o.kt)("p",null,"\ub450 \ubcf4\uace0\uc11c\ub294 \uc0ac\uc804\uc5d0 \uac01 \uc18d\uc131\ubcc4\ub85c '\uc778\uad6c\ud1b5\uacc4 \ubc0f \uad00\uc2ec\ubd84\uc57c \ubcf4\uace0\uc11c \uc0ac\uc6a9'\uc744 \uc124\uc815\ud574\ub454 \ub4a4, 1~2\uc77c\uc774 \uc9c0\ub098 \uc2dc\uc810\ubd80\ud130 \ub370\uc774\ud130\ub97c \ubc1b\uc544\ubcfc \uc218 \uc788\ub2e4.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc778\uad6c\ud1b5\uacc4 \ubcf4\uace0\uc11c"),"\ub294 \uc0ac\uc6a9\uc790\uc758 \uc5f0\ub839 \ubc0f \uc131\ubcc4 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0, ",(0,o.kt)("strong",{parentName:"p"},"\uad00\uc2ec\ubd84\uc57c \ubcf4\uace0\uc11c"),"\ub294 \uc0ac\uc6a9\uc790\uc758 \uc120\ud638\ub97c \ubd84\uc11d\ud558\uc5ec \ud1b5\uacc4 \uacb0\uacfc\ub97c \ub3c4\ucd9c\ud574\ub0b8\ub2e4. \ub450 \ubcf4\uace0\uc11c\ub294 \ud2b9\ud788 \ud0c0\uac9f \ub9c8\ucf00\ud305\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc99d\ud560 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub418\ub294\ub370, \ud574\ub2f9 \uc6f9\uc0ac\uc774\ud2b8\uac00 \ubcf8\ub798 \uc758\ub3c4\ud55c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uad00\uc2ec\uc744 \uc5bb\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud574\ubcfc \uc218 \uc788\ub2e4.  "),(0,o.kt)("h3",{id:"\uc9c0\uc5ed-\ubcf4\uace0\uc11c"},"\uc9c0\uc5ed \ubcf4\uace0\uc11c"),(0,o.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc704\uce58\ud55c \uc9c0\uc5ed(\ub300\ub959, \uad6d\uac00, \ub3c4\uc2dc)\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 \uc9c0\uc5ed \ubcf4\uace0\uc11c\ub97c \ud1b5\ud574 \ud655\uc778\ud574\ubcfc \uc218 \uc788\ub2e4. \uc9c0\uc5ed\ubcf4\uace0\uc11c\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ud788\ud2b8\ub9f5"),"\uacfc ",(0,o.kt)("strong",{parentName:"p"},"\ud14c\uc774\ube14"),"\uc758 \ud615\uc2dd\uc73c\ub85c \uc704\uce58\ubcc4\ub85c \uc2e0\uaddc \uc0ac\uc6a9\uc790 \ud2b8\ub798\ud53d, \uc7ac\ubc29\ubb38\uc728 \ub4f1\uc744 \ubd84\uc11d\ud55c \uacb0\uacfc\ub97c \uc81c\uacf5\ud55c\ub2e4. \uc9c0\uc5ed \ubcf4\uace0\uc11c\ub294 \ud2b9\ud788 \ud574\uc678 \uc2dc\uc7a5\uc744 \uacf5\ub7b5\ud558\ub294 \ub370 \uc720\uc6a9\ud558\uac8c \uc4f0\uc77c \uc218 \uc788\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc2e0\uaddc \ubc29\ubb38\uc790 \uc218\uac00 \ub192\uc73c\ub098 \uc774\ud0c8\ub960\uc774 \ud3c9\uade0 \uc774\uc0c1\uc778 \uad6d\uac00 \ud639\uc740 \ub3c4\uc2dc\uac00 \uc788\ub2e4\uba74 1) \ud604\uc9c0\uc5b4 \ubc88\uc5ed \uae30\ub2a5 \ucd94\uac00 2) UI \uac1c\uc120 \ub4f1\uc758 \ubc29\ubc95\uc73c\ub85c \ubbf8\uac1c\ucc99\uc2dc\uc7a5\uc744 \uacf5\ub7b5\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"\ud589\ub3d9-\ubcf4\uace0\uc11c"},"\ud589\ub3d9 \ubcf4\uace0\uc11c"),(0,o.kt)("p",null,"\ud589\ub3d9 \ubcf4\uace0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc0ac\uc774\ud2b8 \ubc29\ubb38 \uc774\ud6c4 \ucde8\ud55c \ud589\ub3d9\uc744 \ubd84\uc11d\ud574\uc900\ub2e4. \uc138\uc158 \uc218 \ubcc4 \uc0ac\uc6a9\uc790 \uc218, \uc138\uc158 \uc2dc\uac04, \uc804\ud658\uc728 \ub4f1\uc758 \uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\uc740 GA \ubd84\uc11d\uc790\ub294 \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 \ubcf4\ub2e4 \uc801\uadf9\uc801\uc73c\ub85c \uc720\ub3c4\ud558\uae30 \uc704\ud55c \ubc29\uc548\uc744 \uad6c\uc0c1\ud574\ubcfc \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"\uae30\uc220-\ubcf4\uace0\uc11c--\ubaa8\ubc14\uc77c-\ubcf4\uace0\uc11c"},"\uae30\uc220 \ubcf4\uace0\uc11c & \ubaa8\ubc14\uc77c \ubcf4\uace0\uc11c"),(0,o.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud588\uc744 \ub2f9\uc2dc\uc758 \uae30\uc220 \uc815\ubcf4\ub294 \uc6f9\uc0ac\uc774\ud2b8\uac00 \uae30\uae30 \ud658\uacbd\ubcc4\ub85c \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc788\uc5b4 \ub9e4\uc6b0 \uc911\uc694\ud558\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\uae30\uc220 \ubcf4\uace0\uc11c"),"\ub294 \uc8fc\ub85c \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uba70, ",(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ubc14\uc77c \ubcf4\uace0\uc11c"),"\ub294 \ub370\uc2a4\ud06c\ud0d1, \ud734\ub300\ud3f0, \ud0dc\ube14\ub9bf\uacfc \uac19\uc740 \uc804\uc790\uae30\uae30 \uc885\ub958\ubcc4 \uc815\ubcf4\ub97c \uc81c\uacf5\ud55c\ub2e4. \ub354\uc6b1 \uc790\uc138\ud55c \ubd84\uc11d\uc744 \uc6d0\ud55c\ub2e4\uba74 \ucd94\uac00\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uc758 \ud734\ub300\uae30\uae30 \uae30\uc885, \ube0c\ub79c\ub4dc, \uc11c\ube44\uc2a4\uc81c\uacf5\uc5c5\uccb4, \ud574\uc0c1\ub3c4 \ub4f1\uc5d0 \ub300\ud55c \uc815\ubcf4 \ub610\ud55c \ubc1b\uc544\ubcfc \uc218 \uc788\ub2e4. "),(0,o.kt)("h2",{id:"2-\ubcf4\uace0\uc11c-\ubd84\uc11d-\uc2dc-\uc8fc\uc758\ud560-\uc810"},"2. \ubcf4\uace0\uc11c \ubd84\uc11d \uc2dc \uc8fc\uc758\ud560 \uc810"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/81066071/131259979-61d10061-ae8e-4a09-b479-86e3c6c4b2e3.png",width:"450"}),(0,o.kt)("br",null),"1. GA\uc758 \ubcf4\uace0\uc11c\ub294 \uc0ac\uc774\ud2b8 \ubc29\ubb38\uc790\uc758 \uc77c\ubd80\ubd84\uc744 \ubd84\uc11d\ud558\ubbc0\ub85c, \uc6b0\uce21 \uc0c1\ub2e8\uc5d0\uc11c \ubaa8\uc9d1\ub2e8 \ub300\ube44 \ud45c\ubcf8\uc758 \ube44\uc728\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. (ex. 62.76% of total users)",(0,o.kt)("br",null),"2. \uc0ac\uc774\ud2b8 \ud2b8\ub798\ud53d\uc774 \ub108\ubb34 \uc801\uac70\ub098, \uc138\uadf8\uba3c\ud2b8\uac00 \ub108\ubb34 \uc138\ubd84\ud654\ub418\uba74 \ub370\uc774\ud130\uac00 \uc218\uc9d1\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4.")}d.isMDXComponent=!0}}]);