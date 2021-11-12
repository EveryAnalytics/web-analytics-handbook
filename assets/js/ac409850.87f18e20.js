"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[3143],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,b=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={slug:"conversion-reports",title:"\uc804\ud658 \ubcf4\uace0\uc11c",author:"chanheeis",author_url:"https://github.com/chanheeis",author_image_url:"https://avatars.githubusercontent.com/u/53820773",tags:["GoogleAnalytics","GA","Conversion","Reports"]},s="\uc804\ud658 \ubcf4\uace0\uc11c",l={unversionedId:"handbook/archive/Google-Analytics/Basics/conversion-reports",id:"handbook/archive/Google-Analytics/Basics/conversion-reports",isDocsHomePage:!1,title:"\uc804\ud658 \ubcf4\uace0\uc11c",description:"1. \uc804\ud658 \ubcf4\uace0\uc11c\uac00 \ud544\uc694\ud55c \uc774\uc720",source:"@site/docs/handbook/archive/Google-Analytics/02-Basics/conversion-reports.md",sourceDirName:"handbook/archive/Google-Analytics/02-Basics",slug:"/handbook/archive/Google-Analytics/Basics/conversion-reports",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/conversion-reports",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/archive/Google-Analytics/02-Basics/conversion-reports.md",version:"current",lastUpdatedBy:"chanheeis",lastUpdatedAt:1636739232,formattedLastUpdatedAt:"11/12/2021",frontMatter:{slug:"conversion-reports",title:"\uc804\ud658 \ubcf4\uace0\uc11c",author:"chanheeis",author_url:"https://github.com/chanheeis",author_image_url:"https://avatars.githubusercontent.com/u/53820773",tags:["GoogleAnalytics","GA","Conversion","Reports"]},sidebar:"handbookSidebar",previous:{title:"\ucc38\uc5ec \ubcf4\uace0\uc11c",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/behavior-reports"},next:{title:"\ubaa9\ud45c",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/goals"}},u=[{value:"1. \uc804\ud658 \ubcf4\uace0\uc11c\uac00 \ud544\uc694\ud55c \uc774\uc720",id:"1-\uc804\ud658-\ubcf4\uace0\uc11c\uac00-\ud544\uc694\ud55c-\uc774\uc720",children:[]},{value:"2. \uc804\ud658 \ubcf4\uace0\uc11c\uc758 \uc885\ub958",id:"2-\uc804\ud658-\ubcf4\uace0\uc11c\uc758-\uc885\ub958",children:[{value:"\ubaa9\ud45c (Goal)",id:"\ubaa9\ud45c-goal",children:[]},{value:"\uc804\uc790\uc0c1\uac70\ub798 (Ecommerce)",id:"\uc804\uc790\uc0c1\uac70\ub798-ecommerce",children:[]},{value:"\ub2e4\ucc44\ub110 \uc720\uc785\uacbd\ub85c (Multi-Channel Funnels)",id:"\ub2e4\ucc44\ub110-\uc720\uc785\uacbd\ub85c-multi-channel-funnels",children:[]}]},{value:"3. \ucc38\uace0\uc790\ub8cc",id:"3-\ucc38\uace0\uc790\ub8cc",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc804\ud658-\ubcf4\uace0\uc11c"},"\uc804\ud658 \ubcf4\uace0\uc11c"),(0,a.kt)("h2",{id:"1-\uc804\ud658-\ubcf4\uace0\uc11c\uac00-\ud544\uc694\ud55c-\uc774\uc720"},"1. \uc804\ud658 \ubcf4\uace0\uc11c\uac00 \ud544\uc694\ud55c \uc774\uc720"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\uc804\ud658 \ubcf4\uace0\uc11c"),"\ub294 UA\uc5d0\uc11c\ub9cc \uc9c0\uc6d0\ud558\ub294 \ubcf4\uace0\uc11c\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc804\ud658 \ubcf4\uace0\uc11c\ub97c \ubd84\uc11d\ud558\uba74 \uace0\uac1d\uc774 \uc6f9\uc0ac\uc774\ud2b8 \ub0b4\uc5d0\uc11c \uc6b0\ub9ac\uac00 \uc815\ud55c ",(0,a.kt)("strong",{parentName:"p"},"\ubaa9\ud45c"),"\ub97c \ub2ec\uc131\ud558\ub294\uc9c0 \ub4f1 ",(0,a.kt)("strong",{parentName:"p"},"\uc804\ud658"),"\uc744 \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\ubaa9\ud45c")),(0,a.kt)("p",{parentName:"blockquote"},"\ubaa9\ud45c\ub294 \ube44\uc988\ub2c8\uc2a4\uc758 \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\ub294 \uc561\uc158\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774\ucee4\uba38\uc2a4\uc758 \uacbd\uc6b0\ub294 \ub9e4\ucd9c\uc5d0 \uad00\ud55c \ub370\uc774\ud130, \ud50c\ub7ab\ud3fc\uc758 \uacbd\uc6b0\ub294 \ud68c\uc6d0\uac00\uc785 \ubc0f MAU \ub4f1, \ube44\uc988\ub2c8\uc2a4 \uc720\ud615 \ubcc4\ub85c \ud2b9\uc815\ud55c \ubaa9\ud45c\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\uc804\ud658")),(0,a.kt)("p",{parentName:"blockquote"},"\uc0ac\uc6a9\uc790\uac00 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \ubaa9\ud45c \ud589\uc704\ub97c \uc644\ub8cc\ud588\uc744 \ub54c, \uc804\ud658\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"2-\uc804\ud658-\ubcf4\uace0\uc11c\uc758-\uc885\ub958"},"2. \uc804\ud658 \ubcf4\uace0\uc11c\uc758 \uc885\ub958"),(0,a.kt)("h3",{id:"\ubaa9\ud45c-goal"},"\ubaa9\ud45c (Goal)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53820773/136690582-57885cf4-13e8-4270-bc2f-226c14ae0ae2.PNG",alt:"\ubaa9\ud45c\ubcf4\uace0\uc11c"}),"\n\uc804\ud658 \ubaa9\ud45c(\uc0c1\ub2f4\uc2e0\uccad, \ud68c\uc6d0\uac00\uc785, \uad6c\ub9e4\uc644\ub8cc \ub4f1)\uc758 \ub2ec\uc131 \ud69f\uc218\uc640 \uc704\uce58, \uc804\ud658\uc728 \ub4f1 \uc804\ud658 \ubaa9\ud45c\uc640 \uad00\ub828\ub41c \uc9c0\ud45c\ub4e4\uc744 \ud55c \ub208\uc5d0 \ud655\uc778 \ud560 \uc218 \uc788\ub294 \ubcf4\uace0\uc11c\uc785\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"\uc720\uc785\uacbd\ub85c-\uc2dc\uac01\ud654"},"\uc720\uc785\uacbd\ub85c \uc2dc\uac01\ud654"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53820773/136690339-627ba67a-888f-4071-a91b-7e0a4d55c079.PNG",alt:"\uac1c\uc694\ubcf4\uace0\uc11c"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uc804\ud658 \ubcf4\uace0\uc11c")," > ",(0,a.kt)("em",{parentName:"p"},"\ubaa9\ud45c")," > ",(0,a.kt)("em",{parentName:"p"},"\uc720\uc785\uacbd\ub85c \uc2dc\uac01\ud654"),"\uc5d0\uc11c \ub3c4\ucc29\uc5d0 \uc774\ub974\ub294 \uc720\uc785 \uacbd\ub85c\ub97c \uc2dc\uac01\ud654\ud558\uc5ec \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubcf4\uace0\uc11c\ub97c \ud65c\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uac00 \ub9ce\uc774 \uc774\ud0c8\ud55c \uacbd\ub85c\ub97c \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc804\uc790\uc0c1\uac70\ub798-ecommerce"},"\uc804\uc790\uc0c1\uac70\ub798 (Ecommerce)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53820773/136690577-75ef0d7c-6557-43ba-9306-53bf1afb1b03.PNG",alt:"\uc804\uc790\uc0c1\uac70\ub798\ubcf4\uace0\uc11c"}),"\n\uc6f9 \uc0ac\uc774\ud2b8\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uad6c\ub9e4 \ud65c\ub3d9\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub294 \ubcf4\uace0\uc11c\ub85c, \uacb0\uc81c \uc2dc \ub9e4\ucd9c\uc774 \uc5bc\ub9c8\ub098 \ubc1c\uc0dd\ud588\uace0, \uc5b4\ub5a4 \uc0c1\ud488\uc744 \uc5bc\ub9c8\uc758 \uac00\uaca9\uc5d0 \uba87\uac1c\ub098 \uad6c\ub9e4\ud588\ub294\uc9c0 \uc5ec\ubd80, \uac70\ub798\uc640 \uc81c\ud488 \uc815\ubcf4\uc758 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ub2e4\ucc44\ub110-\uc720\uc785\uacbd\ub85c-multi-channel-funnels"},"\ub2e4\ucc44\ub110 \uc720\uc785\uacbd\ub85c (Multi-Channel Funnels)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53820773/136690574-eeb622b5-614c-4d0e-aa25-db4d1fbeb6c1.PNG",alt:"\ub2e4\ucc44\ub110 \uc720\uc785\uacbd\ub85c \ubcf4\uace0\uc11c"}),"\n\uc720\uc785 \ub9e4\uccb4\ub4e4\uc774 \uc804\ud658\uc5d0 \uae30\uc5ec\ud558\ub294 \ubc29\uc2dd\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294 \ubcf4\uace0\uc11c\ub85c, \uc9c0\uc6d0\uc804\ud658\uc218, \uc778\uae30\uc804\ud658\uacbd\ub85c, \uad6c\ub9e4\uae4c\uc9c0 \uc774\ub974\ub294 \uc2dc\uac04, \uacbd\ub85c \uae38\uc774 \ub4f1\uc758 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"3-\ucc38\uace0\uc790\ub8cc"},"3. \ucc38\uace0\uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ingeniouslab.co.kr/ga-basic-report-2/"},"https://ingeniouslab.co.kr/ga-basic-report-2/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn-test.tistory.com/25"},"https://learn-test.tistory.com/25"))))}h.isMDXComponent=!0}}]);