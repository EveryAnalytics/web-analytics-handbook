"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[2069],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),p=o,g=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(g,r(r({ref:e},u),{},{components:n})):a.createElement(g,r({ref:e},u))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3078:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={slug:"how-to-collect-data",title:"Google Analytics\ub294 \uc5b4\ub5bb\uac8c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294\uac00?",author:"Junhee Lee",author_url:"https://github.com/jhlee910609",tags:["GoogleAnalytics","GA"]},c=void 0,s={unversionedId:"handbook/Google-Analytics/Basics/how-to-collect-data",id:"handbook/Google-Analytics/Basics/how-to-collect-data",isDocsHomePage:!1,title:"Google Analytics\ub294 \uc5b4\ub5bb\uac8c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294\uac00?",description:"1. GA\uc758 \uae30\ubcf8\uc801\uc778 \ub370\uc774\ud130 \uc218\uc9d1 \ubc29\uc2dd",source:"@site/docs/handbook/Google-Analytics/02-Basics/how-to-collect-data.md",sourceDirName:"handbook/Google-Analytics/02-Basics",slug:"/handbook/Google-Analytics/Basics/how-to-collect-data",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/how-to-collect-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/Google-Analytics/02-Basics/how-to-collect-data.md",version:"current",lastUpdatedBy:"Jiyoon Hur",lastUpdatedAt:1636275514,formattedLastUpdatedAt:"11/7/2021",frontMatter:{slug:"how-to-collect-data",title:"Google Analytics\ub294 \uc5b4\ub5bb\uac8c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294\uac00?",author:"Junhee Lee",author_url:"https://github.com/jhlee910609",tags:["GoogleAnalytics","GA"]},sidebar:"handbookSidebar",previous:{title:"\ubaa9\ud45c",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/goals"},next:{title:"\ub9de\ucda4 \ucea0\ud398\uc778\uc744 \uce21\uc815\ud558\ub294 \ubc29\ubc95",permalink:"/web-analytics-handbook/docs/handbook/Google-Analytics/Basics/how-to-track-a-marketing-campaign"}},u=[{value:"1. GA\uc758 \uae30\ubcf8\uc801\uc778 \ub370\uc774\ud130 \uc218\uc9d1 \ubc29\uc2dd",id:"1-ga\uc758-\uae30\ubcf8\uc801\uc778-\ub370\uc774\ud130-\uc218\uc9d1-\ubc29\uc2dd",children:[]},{value:"2. hit\ub780?",id:"2-hit\ub780",children:[{value:"2.1. Pageview hit",id:"21-pageview-hit",children:[]},{value:"2.2. Event hit",id:"22-event-hit",children:[]},{value:"2.3. Transaction hit(Ecommerce hit)",id:"23-transaction-hitecommerce-hit",children:[]},{value:"2.4. etc",id:"24-etc",children:[]}]}],h={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-ga\uc758-\uae30\ubcf8\uc801\uc778-\ub370\uc774\ud130-\uc218\uc9d1-\ubc29\uc2dd"},"1. GA\uc758 \uae30\ubcf8\uc801\uc778 \ub370\uc774\ud130 \uc218\uc9d1 \ubc29\uc2dd"),(0,i.kt)("p",null,"\ud55c \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \ub300\ud55c \ub370\uc774\ud130 \uc218\uc9d1\uc740 \uc6f9 \uc0ac\uc774\ud2b8 \ud398\uc774\uc9c0\uc5d0 \uc0bd\uc785\ub418\ub294 GA\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 javascript tracking \ucf54\ub4dc\ub85c\ubd80\ud130 \uc2dc\uc791\ub429\ub2c8\ub2e4. \uc774\ub294 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc758 interaction\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ub9d0\ud558\ub294 \uc0ac\uc6a9\uc790\uc758 interaction\uc740 \ud398\uc774\uc9c0 \ub85c\ub4dc\ucc98\ub7fc \uac04\ub2e8\ud560 \uc218\ub3c4 \uc788\uace0, \ubc84\ud2bc \ud074\ub9ad, \ub9c1\ud06c \ub4f1 \uc870\uae08 \ub354 \uad6c\uccb4\uc801\uc778 \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"GA tracking \ucf54\ub4dc\uc5d0\uc11c\ub294 \uc6f9 \uc0ac\uc774\ud2b8\uc758 \ub3c4\uba54\uc778\uc744 \ubcf4\uace0\uc11c\uc758 'site'\ub85c \uc9c0\uc815\ud558\uba70, tracking code\uac00 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \uc124\uce58\ub418\uc5b4 \uc788\uc73c\uba74 GA\uac00 \uc6f9 \uc0ac\uc774\ud2b8\uc640 \uad00\ub828 \ud558\uc704 \ub3c4\uba54\uc778\uc744 \uc704\ud55c \ucfe0\ud0a4\ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub0b4\ub824\uc90d\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"2-hit\ub780"},"2. hit\ub780?"),(0,i.kt)("p",null,"'hit'\ub294 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc720\uc6a9\ud55c \uc815\ubcf4\ub97c \ub2f4\uc740 \ud30c\ub77c\ubbf8\ud130\ub85c \uad6c\uc131\ub41c URL \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4. \ub610\ud55c, \ubb34\uc791\uc704\ub85c \uc0dd\uc131\ub41c \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uac12\ub3c4 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ud30c\ub9ac\ubbf8\ud130\uc5d0 \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4. ex) ul, sr.. etc"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gu5vfwl0hbj60n903gt9902.jpg",alt:"hit url"})),(0,i.kt)("p",null,"'hit'\ub294 \uc8fc\ub85c \uc0ac\uc6a9\ub418\ub294 \uc138 \uc885\ub958\uc758 Pageview hit, Event hit, Transaction hit\uacfc \uadf8 \ubc16\uc758 Social hit, Page timing view hit\ub85c \uad6c\ubd84\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"21-pageview-hit"},"2.1. Pageview hit"),(0,i.kt)("p",null,"Pageview hit\ub294 \uc0ac\uc6a9\uc790\uac00 page\ub97c \ub85c\ub4dc\ud560 \ub54c, \ubc1c\uc0dd\ub418\ub294 hit\uc758 \ud55c \uc885\ub958\uc785\ub2c8\ub2e4. page\ub97c \ub85c\ub4dc\ud560 \ub54c\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 pageview hit\uac00 \ubc1c\uc0dd\ud558\uba70, \uc774 \uc815\ubcf4\ub294 GA\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"22-event-hit"},"2.2. Event hit"),(0,i.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 element\uc640 \uc0c1\ud638\uc791\uc6a9\ud560 \ub54c, \ubc1c\uc0dd\ub418\ub294 hit\uc758 \ud55c \uc885\ub958\uc785\ub2c8\ub2e4. ex) \ubc84\ud2bc \ud074\ub9ad, a \ud0dc\uadf8 \ud074\ub9ad \ub4f1..."),(0,i.kt)("p",null,"Event hit\uc5d0\ub294 4\uac00\uc9c0 URL \ud30c\ub77c\ubbf8\ud130\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. 4\uac00\uc9c0 \ud30c\ub77c\ubbf8\ud130\ub97c \ud65c\uc6a9\ud574 GA \ub9ac\ud3ec\ud2b8 \uc0c1\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Event hit\uc758 4\uac00\uc9c0 \ud30c\ub77c\ubbf8\ud130\uc758 \uc885\ub958\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"action: interaction \ud0c0\uc785"),(0,i.kt)("li",{parentName:"ol"},"category: interaction\uc758 \ubaa9\uc801"),(0,i.kt)("li",{parentName:"ol"},"label: \uc774\ubca4\ud2b8 \ubd84\ub958\ub97c \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uac12"),(0,i.kt)("li",{parentName:"ol"},"value: \ud574\ub2f9 Event\uc5d0 \ub300\ud55c \uc218\uce58")),(0,i.kt)("h3",{id:"23-transaction-hitecommerce-hit"},"2.3. Transaction hit(Ecommerce hit)"),(0,i.kt)("p",null,"Ecommerce\uc5d0 \uc0c1\ud488 \uad6c\ub9e4, \uad00\ub828\ub41c data\ub97c GA\uc5d0 \uc804\uc1a1\ud569\ub2c8\ub2e4.\nTransaction hit\uc5d0\ub294 \uc544\ub798\uc640 \uac19\uc740 3\uac00\uc9c0 URL \ud30c\ub77c\ubbf8\ud130\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Product category: \uc0c1\ud488\uc758 \uc885\ub958"),(0,i.kt)("li",{parentName:"ol"},"Product added/removed: \uc0c1\ud488\uc774 \ucd94\uac00\ub418\uc5c8\ub294\uc9c0, \uc0ad\uc81c\ub418\uc5c8\ub294\uc9c0 (\uc8fc\ub85c \uc7a5\ubc14\uad6c\ub2c8\uc5d0\uc11c)"),(0,i.kt)("li",{parentName:"ol"},"Product views: \uc0c1\ud488 \uc870\ud68c\uc218")),(0,i.kt)("h3",{id:"24-etc"},"2.4. etc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Social hit: \uc88b\uc544\uc694, \uacf5\uc720\ud558\uae30, tweet \ub4f1 social media\uc640 \uad00\ub828\ub41c interaction\uc744 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Page Timing view hit: \uae30\uac04\uc744 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ex) page load \uc2dc\uac04, \uc774\ubbf8\uc790\uac00 load \ub41c \uc2dc\uac04 \ub4f1...")))}d.isMDXComponent=!0}}]);