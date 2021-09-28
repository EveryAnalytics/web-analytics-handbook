"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[6803],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),g=p(n),m=o,k=g["".concat(i,".").concat(m)]||g[m]||u[m]||r;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=g;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4029:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],s={},i="**\uc0ac\uc6a9\uc790 \ubc0f \uc138\uc158\uc73c\ub85c \ub370\uc774\ud130 \ubd84\ub958\ud558\uae30**",p={unversionedId:"handbook/google-analytics-basics/categorizing-data-into-users-and-sessions",id:"handbook/google-analytics-basics/categorizing-data-into-users-and-sessions",isDocsHomePage:!1,title:"**\uc0ac\uc6a9\uc790 \ubc0f \uc138\uc158\uc73c\ub85c \ub370\uc774\ud130 \ubd84\ub958\ud558\uae30**",description:"1. Google Analytics \ub370\uc774\ud130 \ucc98\ub9ac \uacfc\uc815",source:"@site/docs/handbook/google-analytics-basics/categorizing-data-into-users-and-sessions.md",sourceDirName:"handbook/google-analytics-basics",slug:"/handbook/google-analytics-basics/categorizing-data-into-users-and-sessions",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/categorizing-data-into-users-and-sessions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/google-analytics-basics/categorizing-data-into-users-and-sessions.md",version:"current",lastUpdatedBy:"Namju",lastUpdatedAt:1632815777,formattedLastUpdatedAt:"9/28/2021",frontMatter:{},sidebar:"handbookSidebar",previous:{title:"\ud589\ub3d9 \ubcf4\uace0\uc11c",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/behavior-reports"},next:{title:"\ubaa9\ud45c",permalink:"/web-analytics-handbook/docs/handbook/google-analytics-basics/goals"}},c=[{value:"<strong>1. Google Analytics \ub370\uc774\ud130 \ucc98\ub9ac \uacfc\uc815</strong>",id:"1-google-analytics-\ub370\uc774\ud130-\ucc98\ub9ac-\uacfc\uc815",children:[]}],u={toc:c};function g(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc0ac\uc6a9\uc790-\ubc0f-\uc138\uc158\uc73c\ub85c-\ub370\uc774\ud130-\ubd84\ub958\ud558\uae30"},(0,r.kt)("strong",{parentName:"h1"},"\uc0ac\uc6a9\uc790 \ubc0f \uc138\uc158\uc73c\ub85c \ub370\uc774\ud130 \ubd84\ub958\ud558\uae30")),(0,r.kt)("h2",{id:"1-google-analytics-\ub370\uc774\ud130-\ucc98\ub9ac-\uacfc\uc815"},(0,r.kt)("strong",{parentName:"h2"},"1. Google Analytics \ub370\uc774\ud130 \ucc98\ub9ac \uacfc\uc815")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.0 \ucc98\ub9ac \uacfc\uc815 \ub2e8\uacc4 \uc124\uba85")),(0,r.kt)("p",null,"\uccab\ubc88\uc9f8, \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c \uc2e0\uaddc \uc0ac\uc6a9\uc790\uc640 \uc7ac\uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub450\ubc88\uc9f8, \uc870\ud68c\ub97c \uc138\uc158(\uc0ac\uc6a9\uc790\uac00 \uc0ac\uc774\ud2b8\uc5d0 \ucc38\uc5ec\ud55c \uc2dc\uac04)\uc73c\ub85c \ubd84\ub958\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc138\ubc88\uc9f8, \ucd94\uc801 \ucf54\ub4dc\uc758 \ub370\uc774\ud130\ub97c \ub2e4\ub978 \ub370\uc774\ud130 \uc18c\uc2a4\uc640 \uacb0\ud569\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.1 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c \uc2e0\uaddc \uc0ac\uc6a9\uc790\uc640 \uc7ac\uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc7ac\uc0ac\uc6a9\uc790\uc758 \uc2e0\uaddc \ubc29\ubb38\uc744 \ubcc4\ub3c4\ub85c \uc2dd\ubcc4\ud569\ub2c8\ub2e4. \ucd94\uc801 \ucf54\ub4dc\uac00 \uc788\ub294 \ud398\uc774\uc9c0\ub97c \uc0ac\uc6a9\uc790\uac00 \ubc29\ubb38\ud558\uba74, Google Analytics\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc758 \ube0c\ub77c\uc6b0\uc800 \ucfe0\ud0a4\uc640 \uc5f0\uacb0\ub418\ub294 \uc784\uc758\uc758 \uace0\uc720 ID\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. Analytics\uc5d0\uc11c\ub294 \uac01\uac01\uc758 \uace0\uc720 ID\ub97c \uace0\uc720 \uc0ac\uc6a9\uc790\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4. \uc2e0\uaddc \uc0ac\uc6a9\uc790\uac00 \uac10\uc9c0\ub420 \ub54c\ub9c8\ub2e4 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc5d0\uc11c '\uc2e0\uaddc \uc0ac\uc6a9\uc790'\ub85c \uc9d1\uacc4\ud558\uace0 \uc774\ub97c \uc870\ud68c\uc640 \ud568\uaed8 \uc804\uc1a1\ud569\ub2c8\ub2e4. Analytics\uc5d0\uc11c \uae30\uc874\uc758 ID\ub97c \uac10\uc9c0\ud558\uba74 \uc870\ud68c\uc640 \ud568\uaed8 '\uc7ac\uc0ac\uc6a9\uc790' \uac12\uc73c\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("em",{parentName:"em"},"\uc0ac\uc6a9\uc790\ub97c \uad6c\ubd84\ud560 \ub54c \uc8fc\uc758\uc0ac\ud56d")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Analytics\uac00 \uc138\uc158\uc5d0\uc11c \ube0c\ub77c\uc6b0\uc800 \ucfe0\ud0a4\ub97c \ud1b5\ud574 \uace0\uc720\ud55c \uc0ac\uc6a9\uc790\ub97c \uc778\uc2dd\ud558\ubbc0\ub85c, \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub294 \uc6f9\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ucfe0\ud0a4\uac00 \uc0ad\uc81c \ub610\ub294 \ucc28\ub2e8\ub418\uba74 ",(0,r.kt)("strong",{parentName:"p"},"*","*","\uc0ac\ub77c\uc9d1\ub2c8\ub2e4","*","*"),"."),(0,r.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\uc790\uac00 \ube0c\ub77c\uc6b0\uc800\uc758 \ucfe0\ud0a4\ub97c \uc0ad\uc81c\ud558\uba74 \ub2e4\uc74c\uc5d0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ucd94\uc801\ub41c \uc6f9\ud398\uc774\uc9c0\ub97c \ub85c\ub4dc\ud560 \ub54c Google Analytics\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"*","*","\uc0c8\ub85c\uc6b4 \uace0\uc720 ID","*","*"),"\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c Analytics\uc5d0\uc11c \uc774 \uc0ac\uc6a9\uc790\ub97c '\uc7ac\uc0ac\uc6a9\uc790'\uac00 \uc544\ub2cc ",(0,r.kt)("strong",{parentName:"p"},"*","*","'\uc2e0\uaddc \uc0ac\uc6a9\uc790'","*","*"),"\ub85c \uc9d1\uacc4\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc5ec\ub7ec \uc138\uc158\uc5d0 \uac78\uccd0 \uc0ac\uc6a9\uc790\ub97c \uc778\uc2dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},"(\ub2e8, \ub3d9\uc77c\ud55c \uae30\uae30\uc758 \ub3d9\uc77c\ud55c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc138\uc158\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.)"),(0,r.kt)("p",{parentName:"li"},"Analytics\uc758 \uae30\ubcf8 \uc124\uc815\uc5d0\uc11c\ub294 \ub2e4\ub978 \uae30\uae30\uc5d0\uc11c \uc6f9\uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud55c \uc0ac\uc6a9\uc790\ub97c \uc778\uc2dd\ud558\uc9c0 \uc54a\uc9c0\ub9cc, \uac01 \uae30\uae30\ub97c ",(0,r.kt)("strong",{parentName:"p"},"*","*","\uace0\uc720 \uc0ac\uc6a9\uc790","*","*"),"\ub85c \uc9d1\uacc4\ud569\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},"\uc989, \uc5ec\ub7ec \uae30\uae30\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub97c \ucd94\uc801\ud558\ub824\uba74 ",(0,r.kt)("strong",{parentName:"p"},"*","*","User ID","*","*")," \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.2 \uc870\ud68c\ub97c \uc138\uc158(\uc0ac\uc6a9\uc790\uac00 \uc0ac\uc774\ud2b8\uc5d0 \ucc38\uc5ec\ud55c \uc2dc\uac04)\uc73c\ub85c \ubd84\ub958\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\uc758 \uc0ac\uc6a9\uc790 \ucc38\uc5ec \uc218\uc900\uc744 \ud30c\uc545\ud558\uae30 \uc704\ud574 \uc870\ud68c\uc758 \uc0dd\uc131 \uc2dc\uac04\uc5d0 \uae30\ucd08\ud574 \uc0ac\uc6a9\uc790 \uc870\ud68c\ub97c \ubd84\ub958\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc2dc\uac04\uc744 \uce21\uc815\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uce21\uc815\ud56d\ubaa9\uc740 ",(0,r.kt)("em",{parentName:"p"},"\uc138\uc158\uc218"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 Google Analytics \ucd94\uc801 \ucf54\ub4dc\uac00 \uc788\ub294 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud560 \ub54c \uc138\uc158\uc774 \uc2dc\uc791\ub418\uace0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\ud398\uc774\uc9c0\ubdf0"))," \uc870\ud68c\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774 \uc870\ud68c\ub294 \ub2e4\ub978 \uc870\ud68c\uac00 \uae30\ub85d\ub418\uc9c0 \uc54a\uc73c\uba74 30\ubd84 \ud6c4\uc5d0 \uc885\ub8cc\ub429\ub2c8\ub2e4. \uc138\uc158\uc774 \uc885\ub8cc\ud55c \ud6c4\uc5d0 \uc0ac\uc6a9\uc790\uac00 \ud398\uc774\uc9c0\ub85c \ub3cc\uc544\uac00\uba74 \uc0c8 \uc138\uc158\uc774 \uc2dc\uc791\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uae30\ubcf8 \uc124\uc815\uc5d0\uc11c\ub294 \ube44\ud65c\ub3d9 \uc2dc\uac04\uc774 30\ubd84\uc744 \ub118\uc73c\uba74 \uc138\uc158\uc758 \uc81c\ud55c\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc9c0\ub9cc, \uc0ac\uc774\ud2b8\uc5d0\uc11c\uc758 \uc0ac\uc6a9\uc790 \ud589\ub3d9\uc744 \ubc18\uc601\ud558\uc5ec \uad6c\uc131\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc774 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"EX) \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub3d9\uc601\uc0c1\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uac83\uc774 \ubaa9\ud45c\uc778 \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \uc138\uc158\uc758 \uc81c\ud55c\uc2dc\uac04\uc744 30\ubd84\uc73c\ub85c \uc124\uc815\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\uc774 \uacbd\uc6b0"))," \uc138\uc158 \uc81c\ud55c\uc2dc\uac04\uc744 \uc0ac\uc774\ud2b8\uc5d0\uc11c\uc758 \ud3c9\uade0 \ub3d9\uc601\uc0c1 \uc2dc\uccad \uc2dc\uac04\uc73c\ub85c \uc5f0\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Google Analytics\uc5d0\uc11c \uc138\uc158\uc744 \uae30\uc900\uc73c\ub85c \ub370\uc774\ud130\ub97c \uad6c\uc131\ud558\uba74 \ubcf4\uace0\uc11c\uc5d0 \ud45c\uc2dc\ub418\ub294 \ub2e4\uc591\ud55c \uce21\uc815\ud56d\ubaa9\uc744 \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.3 \ucd94\uc801 \ucf54\ub4dc\uc758 \ub370\uc774\ud130\ub97c \ub2e4\ub978 \ub370\uc774\ud130 \uc18c\uc2a4\uc640 \uacb0\ud569\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\ucd94\uc801 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc218\uc9d1\ud55c \ub370\uc774\ud130\ub97c \uc9c0\uc815\ub41c \ub2e4\ub978 \uc18c\uc2a4\uc640 \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uce21\uc815 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc774\uc6a9\ud558\uace0 \ub2e4\ub978 Google \uacc4\uc815\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uc678\ubd80 \uc2dc\uc2a4\ud15c\uc758 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub294 \ubc29\ubc95")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub9de\ucda4 \ucd94\uc801 ID\ub97c \uc774\uc6a9\ud574 \uc870\ud68c\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"1\ubc88\uc758 \uc870\ud68c\ub97c \uc9c0\uc815\ub41c Google \uc560\ub110\ub9ac\ud2f1\uc2a4 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95"))),(0,r.kt)("p",null,"\uce21\uc815 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc774\uc6a9\ud558\uba74 POS(\ud310\ub9e4 \uc9c0\uc810), \uc6f9 \uc5f0\uacb0 \ud0a4\uc624\uc2a4\ud06c\uc640 \uac19\uc740 \uc6f9 \uc5f0\uacb0 \uae30\uae30\uc758 \ub370\uc774\ud130\ub97c Google Analytics\ub85c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc870\ud68c\ub97c \uc804\uc1a1\ud558\ub294 \ucd94\uc801 \ucf54\ub4dc\uc640\ub294 \ub2ec\ub9ac Google \uc774\uc678\uc758 \uc2dc\uc2a4\ud15c\uc73c\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub824\uba74 URL \ubb38\uc790\uc5f4\uc744 \ud1b5\ud574 \ub370\uc774\ud130 \uc218\uc9d1 \uc870\ud68c\ub97c \uc9c1\uc811 \uc804\uc1a1\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("em",{parentName:"em"},"Google Analytics\uc5d0\uc11c\ub294 Google Ads, \uc560\ub4dc\uc13c\uc2a4, Google Search Console \ub4f1 \ub2e4\ub978 \ub9c8\ucf00\ud305 \ub3c4\uad6c\uc758 \ub370\uc774\ud130\ub3c4 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}g.isMDXComponent=!0}}]);