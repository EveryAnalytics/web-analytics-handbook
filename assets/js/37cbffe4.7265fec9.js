"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5190:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="\ucc28\ud2b8\uc758 \uc885\ub958",u={unversionedId:"handbook/Amplitude/Basics/amplitude-chart",id:"handbook/Amplitude/Basics/amplitude-chart",isDocsHomePage:!1,title:"\ucc28\ud2b8\uc758 \uc885\ub958",description:"1. \uc774\ubca4\ud2b8 \ubd84\ud560 \ubd84\uc11d (Event Segmentation) (\uae30\ubcf8)",source:"@site/docs/handbook/Amplitude/02-Basics/amplitude-chart.md",sourceDirName:"handbook/Amplitude/02-Basics",slug:"/handbook/Amplitude/Basics/amplitude-chart",permalink:"/web-analytics-handbook/docs/handbook/Amplitude/Basics/amplitude-chart",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/Amplitude/02-Basics/amplitude-chart.md",version:"current",lastUpdatedBy:"Seongcheol Jo",lastUpdatedAt:1636275524,formattedLastUpdatedAt:"11/7/2021",frontMatter:{},sidebar:"handbookSidebar",previous:{title:"Congratulations!",permalink:"/web-analytics-handbook/docs/handbook/Amplitude/Basics/congratulations"},next:{title:"Amplitude Advanced",permalink:"/web-analytics-handbook/docs/handbook/Amplitude/Advanced/amplitude-advanced"}},c=[{value:"1. \uc774\ubca4\ud2b8 \ubd84\ud560 \ubd84\uc11d (Event Segmentation) <em>(\uae30\ubcf8)</em>",id:"1-\uc774\ubca4\ud2b8-\ubd84\ud560-\ubd84\uc11d-event-segmentation-\uae30\ubcf8",children:[]},{value:"2. \uc794\uc874\uc728 \ubd84\uc11d (Retention Analysis) <em>(\uae30\ubcf8)</em>",id:"2-\uc794\uc874\uc728-\ubd84\uc11d-retention-analysis-\uae30\ubcf8",children:[]},{value:"3. \ud37c\ub110 \ubd84\uc11d (Funnel Analysis) <em>(\uae30\ubcf8)</em>",id:"3-\ud37c\ub110-\ubd84\uc11d-funnel-analysis-\uae30\ubcf8",children:[]},{value:"4. \uc0ac\uc6a9\uc790 \uad6c\uc131 \ubd84\uc11d (User Composition) <em>(\uae30\ubcf8)</em>",id:"4-\uc0ac\uc6a9\uc790-\uad6c\uc131-\ubd84\uc11d-user-composition-\uae30\ubcf8",children:[]},{value:"5. \uc0ac\uc6a9\uc790 \uacbd\ub85c \ubd84\uc11d (Pathfinder)",id:"5-\uc0ac\uc6a9\uc790-\uacbd\ub85c-\ubd84\uc11d-pathfinder",children:[]},{value:"6. \uae30\ub2a5 \ud65c\uc6a9\ub3c4 \ubd84\uc11d (Engagement Matrix)",id:"6-\uae30\ub2a5-\ud65c\uc6a9\ub3c4-\ubd84\uc11d-engagement-matrix",children:[]},{value:"7. \ub77c\uc774\ud504\uc0ac\uc774\ud074 \ubd84\uc11d (Lifecycle)",id:"7-\ub77c\uc774\ud504\uc0ac\uc774\ud074-\ubd84\uc11d-lifecycle",children:[]},{value:"8. \ud074\ub7ec\uc2a4\ud130 \ubd84\uc11d (Personas)",id:"8-\ud074\ub7ec\uc2a4\ud130-\ubd84\uc11d-personas",children:[]},{value:"9. \uc0ac\uc6a9\uc790 \uc138\uc158 (User Sessions)",id:"9-\uc0ac\uc6a9\uc790-\uc138\uc158-user-sessions",children:[]},{value:"10. Stickiness",id:"10-stickiness",children:[]},{value:"11. Revenue LTV",id:"11-revenue-ltv",children:[]},{value:"12. Compass",id:"12-compass",children:[]},{value:"13. Pathfinder Users",id:"13-pathfinder-users",children:[]},{value:"14. Impact analysis",id:"14-impact-analysis",children:[]},{value:"\ucc38\uace0",id:"\ucc38\uace0",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ucc28\ud2b8\uc758-\uc885\ub958"},"\ucc28\ud2b8\uc758 \uc885\ub958"),(0,i.kt)("h3",{id:"1-\uc774\ubca4\ud2b8-\ubd84\ud560-\ubd84\uc11d-event-segmentation-\uae30\ubcf8"},"1. \uc774\ubca4\ud2b8 \ubd84\ud560 \ubd84\uc11d (Event Segmentation) ",(0,i.kt)("em",{parentName:"h3"},"(\uae30\ubcf8)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \ub2e4\uac01\uc801\uc778 \ubd84\uc11d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"SQL\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ubaa8\ub4e0 \uc885\ub958\uc758 \ub370\uc774\ud130 \ubd84\uc11d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"2-\uc794\uc874\uc728-\ubd84\uc11d-retention-analysis-\uae30\ubcf8"},"2. \uc794\uc874\uc728 \ubd84\uc11d (Retention Analysis) ",(0,i.kt)("em",{parentName:"h3"},"(\uae30\ubcf8)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\ud638\ud2b8\ubcc4 \uc794\uc874\uc728, \uc81c\ud488 \uc0ac\uc6a9 \uc8fc\uae30 \ub4f1\uc744 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc6f9\uc0ac\uc774\ud2b8 \ubc29\ubb38 \ub610\ub294 \uc571 \uc624\ud508 \ubfd0 \uc544\ub2c8\ub77c, \ubaa8\ub4e0 \uc885\ub958\uc758 \uc774\ubca4\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \uc794\uc874\uc728 \ubd84\uc11d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"3-\ud37c\ub110-\ubd84\uc11d-funnel-analysis-\uae30\ubcf8"},"3. \ud37c\ub110 \ubd84\uc11d (Funnel Analysis) ",(0,i.kt)("em",{parentName:"h3"},"(\uae30\ubcf8)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uc774\ubca4\ud2b8\ub97c \ud37c\ub110\ub85c \uc124\uc815\ud558\uace0, \uac01 \ud37c\ub110\ubcc4 \uc804\ud658\uc728\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud37c\ub110 \uae30\ubc18\uc758 A/B \ud14c\uc2a4\ud2b8 \uacb0\uacfc \ubd84\uc11d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud37c\ub110\uc5d0\uc11c\uc758 Group By \uc801\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"4-\uc0ac\uc6a9\uc790-\uad6c\uc131-\ubd84\uc11d-user-composition-\uae30\ubcf8"},"4. \uc0ac\uc6a9\uc790 \uad6c\uc131 \ubd84\uc11d (User Composition) ",(0,i.kt)("em",{parentName:"h3"},"(\uae30\ubcf8)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc804\uccb4 \uc720\uc800 \ud639\uc740 \ud2b9\uc815 \ucf54\ud638\ud2b8 \ub0b4\uc5d0\uc11c \ud2b9\uc815 \uc0ac\uc6a9\uc790 \uc18d\uc131\uac12\uc758 \ubd84\ud3ec \uc591\uc0c1\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uc0ac\uc6a9\uc790 \uc18d\uc131\uac12\uc744 \uae30\uc900\uc73c\ub85c \uc720\uc800\ub97c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"5-\uc0ac\uc6a9\uc790-\uacbd\ub85c-\ubd84\uc11d-pathfinder"},"5. \uc0ac\uc6a9\uc790 \uacbd\ub85c \ubd84\uc11d (Pathfinder)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \uc81c\ud488 \ub0b4\uc5d0\uc11c \uc5b4\ub5a4 \uacbd\ub85c\ub85c \uc774\ub3d9\ud558\ub294\uc9c0 \uad6c\uccb4\uc801\uc73c\ub85c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc124\uc815\ud55c \uc774\ubca4\ud2b8 \ub178\ub4dc(node)\ub97c \uae30\uc900\uc73c\ub85c \uc0ac\uc6a9\uc790\uc758 \uc774\ub3d9 \uacbd\ub85c\ub97c \uc2dc\uac01\ud654\ub41c \uadf8\ub798\ud504\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"6-\uae30\ub2a5-\ud65c\uc6a9\ub3c4-\ubd84\uc11d-engagement-matrix"},"6. \uae30\ub2a5 \ud65c\uc6a9\ub3c4 \ubd84\uc11d (Engagement Matrix)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub4e4\uc774 \uc81c\ud488 \ub0b4 \uae30\ub2a5\ub4e4\uc744 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\uc9c0 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uae30\ub2a5\ubcc4 \uc0ac\uc6a9 \ube48\ub3c4 \uc218 \ubc0f \uc0ac\uc6a9\uc790 \uc218\ub97c \uc0ac\ubd84\uba74 \uadf8\ub798\ud504\uc0c1\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac1c\uc120\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"7-\ub77c\uc774\ud504\uc0ac\uc774\ud074-\ubd84\uc11d-lifecycle"},"7. \ub77c\uc774\ud504\uc0ac\uc774\ud074 \ubd84\uc11d (Lifecycle)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc81c\ud488 \ub0b4 \uc0ac\uc6a9\uc790\ub4e4\uc744 \uc0c1\ud0dc\ubcc4\ub85c \uad6c\ubd84\ud558\uc5ec \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc124\uc815\ud55c \uae30\uac04\ubcc4 \uc81c\ud488 \ub0b4 \ud65c\uc131 \uc0ac\uc6a9\uc790\uc758 \uc218\ub97c \uc2e0\uaddc, \ud604\uc7ac, \ubcf5\uadc0 \uc138 \uac00\uc9c0 \uadf8\ub8f9\uc73c\ub85c \uad6c\ubd84\ud558\uc5ec \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud734\uba74 \uc0ac\uc6a9\uc790 \uc218\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"8-\ud074\ub7ec\uc2a4\ud130-\ubd84\uc11d-personas"},"8. \ud074\ub7ec\uc2a4\ud130 \ubd84\uc11d (Personas)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc81c\ud488 \ub0b4 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uadf8\ub8f9\ubcc4\ub85c \uc5b4\ub5a4 \ud589\ub3d9 \ud2b9\uc131\uc744 \ubcf4\uc774\ub294\uc9c0 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc720\uc0ac\ud55c \uc0ac\uc6a9\uc790\ub4e4\uc744 \ubb36\uc5b4 \uc790\ub3d9\uc73c\ub85c \uc11c\ub85c \ub2e4\ub978 \ud074\ub7ec\uc2a4\ud130\ub85c \uadf8\ub8f9\ud654\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"9-\uc0ac\uc6a9\uc790-\uc138\uc158-user-sessions"},"9. \uc0ac\uc6a9\uc790 \uc138\uc158 (User Sessions)"),(0,i.kt)("h3",{id:"10-stickiness"},"10. Stickiness"),(0,i.kt)("h3",{id:"11-revenue-ltv"},"11. Revenue LTV"),(0,i.kt)("h3",{id:"12-compass"},"12. Compass"),(0,i.kt)("h3",{id:"13-pathfinder-users"},"13. Pathfinder Users"),(0,i.kt)("h3",{id:"14-impact-analysis"},"14. Impact analysis"),(0,i.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.amplitude.com/hc/en-us/sections/206569568-Working-with-charts"},"Working with charts")))}p.isMDXComponent=!0}}]);