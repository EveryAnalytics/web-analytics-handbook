"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[8620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},c="\uc774\ubca4\ud2b8",p={unversionedId:"handbook/archive/Google-Analytics/Basics/event-tagging",id:"handbook/archive/Google-Analytics/Basics/event-tagging",isDocsHomePage:!1,title:"\uc774\ubca4\ud2b8",description:"1. \uc774\ubca4\ud2b8\uc758 \uc815\uc758",source:"@site/docs/handbook/archive/Google-Analytics/02-Basics/05-event-tagging.md",sourceDirName:"handbook/archive/Google-Analytics/02-Basics",slug:"/handbook/archive/Google-Analytics/Basics/event-tagging",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/event-tagging",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/archive/Google-Analytics/02-Basics/05-event-tagging.md",version:"current",lastUpdatedBy:"chanheeis",lastUpdatedAt:1636739232,formattedLastUpdatedAt:"11/12/2021",sidebarPosition:5,frontMatter:{},sidebar:"handbookSidebar",previous:{title:"\ubaa9\ud45c \uc124\uc815",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/setting-goals"},next:{title:"\uc804\uc790\uc0c1\uac70\ub798",permalink:"/web-analytics-handbook/docs/handbook/archive/Google-Analytics/Basics/online-transaction"}},u=[{value:"1. \uc774\ubca4\ud2b8\uc758 \uc815\uc758",id:"1-\uc774\ubca4\ud2b8\uc758-\uc815\uc758",children:[]},{value:"2. \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud558\ub294 \uc774\uc720",id:"2-\uc774\ubca4\ud2b8\ub97c-\uc218\uc9d1\ud558\ub294-\uc774\uc720",children:[]},{value:"3. \uc774\ubca4\ud2b8 \uc124\uc815 \ubc29\ubc95",id:"3-\uc774\ubca4\ud2b8-\uc124\uc815-\ubc29\ubc95",children:[]},{value:"4. \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ub418\ub294 \uc774\ubca4\ud2b8",id:"4-\uc790\ub3d9\uc73c\ub85c-\uc218\uc9d1\ub418\ub294-\uc774\ubca4\ud2b8",children:[]},{value:"4. \uc774\ubca4\ud2b8 \ud65c\uc6a9\ubc95",id:"4-\uc774\ubca4\ud2b8-\ud65c\uc6a9\ubc95",children:[{value:"\ub77c\ubca8\uc744 \uc774\ub984\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30",id:"\ub77c\ubca8\uc744-\uc774\ub984\uc73c\ub85c-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"\ub4dc\ub9b4 \ub2e4\uc6b4 \uad6c\uc870\ub97c \uc644\uc804\ud788 \uc0c8\ub86d\uac8c \uc124\uacc4\ud558\uae30",id:"\ub4dc\ub9b4-\ub2e4\uc6b4-\uad6c\uc870\ub97c-\uc644\uc804\ud788-\uc0c8\ub86d\uac8c-\uc124\uacc4\ud558\uae30",children:[]}]},{value:"5. \uc774\ubca4\ud2b8 \uae30\ud68d\uc548 \uc791\uc131\ud558\uae30",id:"5-\uc774\ubca4\ud2b8-\uae30\ud68d\uc548-\uc791\uc131\ud558\uae30",children:[]},{value:"6. \uad6c\uae00 \ud0dc\uadf8 \uad00\ub9ac\uc790",id:"6-\uad6c\uae00-\ud0dc\uadf8-\uad00\ub9ac\uc790",children:[]},{value:"7. \uc774\ubca4\ud2b8 \uc0dd\uc131\ud560 \ub54c \uc8fc\uc758\ud560 \uc810",id:"7-\uc774\ubca4\ud2b8-\uc0dd\uc131\ud560-\ub54c-\uc8fc\uc758\ud560-\uc810",children:[]},{value:"8. \ucc38\uace0",id:"8-\ucc38\uace0",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc774\ubca4\ud2b8"},"\uc774\ubca4\ud2b8"),(0,l.kt)("h2",{id:"1-\uc774\ubca4\ud2b8\uc758-\uc815\uc758"},"1. \uc774\ubca4\ud2b8\uc758 \uc815\uc758"),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8\ub780, \uc0ac\uc6a9\uc790\uc640 \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ud68c\uc6d0 \uac00\uc785 \ubc84\ud2bc\uc774\ub098 \uad6c\ub9e4 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c"),(0,l.kt)("li",{parentName:"ul"},"\ub313\uae00 \uc785\ub825\ub780\uc744 \ud074\ub9ad\ud560 \ub54c"),(0,l.kt)("li",{parentName:"ul"},"\uad11\uace0 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud560 \ub54c \ud639\uc740 \uc5b4\ub5a4 \ud2b9\uc815 \uc601\uc5ed\uc774 \ud654\uba74\uc5d0 \ub178\ucd9c\ub410\uc744 \ub54c")),(0,l.kt)("h2",{id:"2-\uc774\ubca4\ud2b8\ub97c-\uc218\uc9d1\ud558\ub294-\uc774\uc720"},"2. \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud558\ub294 \uc774\uc720"),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud558\ub294 \uc774\uc720\ub294, \uc804\ud658\uc774 \uc798 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub3c4\ub85d \uc0ac\uc774\ud2b8\ub97c \uad00\ub9ac\ud558\ub294\ub370 \uc911\uc694\ud55c \ub370\uc774\ud130\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub610\ud55c, GA\ucd94\uc801\ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub294 \ud398\uc774\uc9c0\ubdf0 \uc774\uc678\uc758 \uc5b4\ub5a0\ud55c \ud788\ud2b8\ub3c4 \uae30\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\ub9cc, \uc774\ubca4\ud2b8 \uae30\ub2a5\uc774 \uc544\ubb34\ub9ac \uc720\uc6a9\ud558\ub2e4\uace0 \ud574\uc11c \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\uc640 \ubc84\ud2bc\uc744 \ucd94\uc801\ud558\ub294 \uac83\uc740 \uc544\ub2c8\uba70, \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud574\uc57c \ud558\ub294\uc9c0 \ubd84\ubcc4\ud558\ub294 \uc5ed\ub7c9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8 \ucd94\uc801\uc740 \ucd94\ud6c4\uc5d0 \uc804\ud658\ubcf4\uace0\uc11c \ubaa9\ud45c\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"3-\uc774\ubca4\ud2b8-\uc124\uc815-\ubc29\ubc95"},"3. \uc774\ubca4\ud2b8 \uc124\uc815 \ubc29\ubc95"),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub824\uba74 HEAD \uc601\uc5ed\uc5d0 \ucd94\uc801 \ucf54\ub4dc\ub97c \uc2ec\uc5b4 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294 \uac83\ucc98\ub7fc, ",(0,l.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \ub300\uc0c1\uc774 \ub418\ub294 \ubc84\ud2bc\uc774\ub098 \uc774\ubbf8\uc9c0\uc5d0 \ud0dc\uadf8\ub97c \ub2ec\uc544\uc57c \ud569\ub2c8\ub2e4."),"\n\ucf54\ub4dc \ub0b4\uc5d0\uc11c\ub294 \ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc81c\ub300\ub85c \ud558\uae30 \uc704\ud574 \uae30\ud68d\ud574\uc57c \ud558\ub294 \ubcc0\uc218\uac00 \uc544\ub798\uc640 \uac19\uc774 4\uac00\uc9c0 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"action(",(0,l.kt)("strong",{parentName:"p"},"\ud544\uc218"),") "),(0,l.kt)("p",{parentName:"li"},"\ucd94\uc801 \ub300\uc0c1\uacfc \uc0ac\uc6a9\uc790\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.\n\uc77c\ubc18\uc801\uc73c\ub85c \ud2b9\uc815 \uc6f9 \uac1c\uccb4\uc5d0 \ub300\ud574 \uce21\uc815\ud560 \uc774\ubca4\ud2b8 \ub610\ub294 \uc0c1\ud638\uc791\uc6a9 \uc720\ud615\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\ub824\uba74 \uc561\uc158 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. "),(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 \uc561\uc158\uc774 \uc0c1\uc704 \uce74\ud14c\uace0\ub9ac\uc640\ub294 \ubcc4\uac1c\ub85c \ub098\uc5f4\ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ubcf4\uace0\uc11c\uc758 \uc774\ubca4\ud2b8 \ub370\uc774\ud130\ub97c \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc21c \uc774\ubca4\ud2b8\ub294 \uace0\uc720\ud55c \uc561\uc158 \uc774\ub984\uc5d0 \uc758\ud574 \uacb0\uc815\ub429\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0, \ubaa8\ub4e0 \uce74\ud14c\uace0\ub9ac\uc5d0\uc11c \uc911\ubcf5\ub41c \uc561\uc158 \uc774\ub984\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc21c \uc774\ubca4\ud2b8 \uc218\uc758 \uc9d1\uacc4 \ubc29\uc2dd\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"category(\uc120\ud0dd)"),(0,l.kt)("p",{parentName:"li"},"\ucd94\uc801 \ub300\uc0c1\uc758 \uadf8\ub8f9\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \ud2b9\uc815 \uce74\ud14c\uace0\ub9ac\uc5d0\uc11c \uadf8\ub8f9\ud654\ud560 \uad00\ub828 UI \uc694\uc18c\uc5d0 \ub3d9\uc77c\ud55c \uce74\ud14c\uace0\ub9ac \uc774\ub984\uc744 \uc5ec\ub7ec \ubc88 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"label(\uc120\ud0dd)"),(0,l.kt)("p",{parentName:"li"},"\uc774\ubca4\ud2b8\uc758 \ucd94\uac00 \uc815\ubcf4\ub098 \uc124\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"value(\uc120\ud0dd)"),(0,l.kt)("p",{parentName:"li"},"\uc774\ubca4\ud2b8\uc5d0 \ubd80\uc5ec\ud558\ub294 \uac00\uce58\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. (\ubcf4\ud1b5 \uc2e4\ubb34\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc77c\uc774 \ub4dc\ubb45\ub2c8\ub2e4.)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>    \n    gtag('event','click',{\n    'event_category':'button',\n    'event_label':'nav buttons',\n    'value':4});\n<\/script>\n")),(0,l.kt)("h2",{id:"4-\uc790\ub3d9\uc73c\ub85c-\uc218\uc9d1\ub418\ub294-\uc774\ubca4\ud2b8"},"4. \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ub418\ub294 \uc774\ubca4\ud2b8"),(0,l.kt)("p",null,"\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uc9c0 \uc54a\uc544\ub3c4 page_view\ub97c \ube44\ub86f\ud55c \ub9ce\uc740 \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9234069"},"\uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ub418\ub294 \uc774\ubca4\ud2b8 \ucf54\ub4dc"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9216061"},"\uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ub418\ub294 \uc774\ubca4\ud2b8 \ucf54\ub4dc2 - \uc880 \ub354 \ud5a5\uc0c1\ub41c \uac1c\ubcc4 \uce21\uc815")),(0,l.kt)("h2",{id:"4-\uc774\ubca4\ud2b8-\ud65c\uc6a9\ubc95"},"4. \uc774\ubca4\ud2b8 \ud65c\uc6a9\ubc95"),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8 \ub370\uc774\ud130\ub294 ",(0,l.kt)("em",{parentName:"p"},"\ubc29\ubb38 \ud615\ud0dc \ubcf4\uace0\uc11c > \uc774\ubca4\ud2b8")," \uc5d0\uc11c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ub77c\ubca8\uc744-\uc774\ub984\uc73c\ub85c-\uc0ac\uc6a9\ud558\uae30"},"\ub77c\ubca8\uc744 \uc774\ub984\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"\ucd94\uac00 \uc815\ubcf4\ub97c \uc785\ub825\ud560 \uc218 \uc788\ub294 '\ub77c\ubca8'\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \ub54c \ubd88\ud3b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ub4dc\ub9b4-\ub2e4\uc6b4-\uad6c\uc870\ub97c-\uc644\uc804\ud788-\uc0c8\ub86d\uac8c-\uc124\uacc4\ud558\uae30"},"\ub4dc\ub9b4 \ub2e4\uc6b4 \uad6c\uc870\ub97c \uc644\uc804\ud788 \uc0c8\ub86d\uac8c \uc124\uacc4\ud558\uae30"),(0,l.kt)("p",null,"\uce74\ud14c\uace0\ub9ac, \uc561\uc158, \ub77c\ubca8\uc774 \uac16\ub294 \uc0ac\uc804\uc801 \uc758\ubbf8\ub294 \ubc84\ub9ac\uace0 \ub4dc\ub9b4 \ub2e4\uc6b4\ub418\ub294 \uc21c\uc11c\uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"ex) \uce74\ud14c\uace0\ub9ac\ub294 \uc0ac\uc804\uc801\uc73c\ub85c \ubd84\ub958\uc9c0\ub9cc, \uadf8 \uc758\ubbf8\uac00 \uc544\ub2c8\ub77c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud55c '\uc704\uce58'\ub97c \ub098\ud0c0\ub0b4\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"5-\uc774\ubca4\ud2b8-\uae30\ud68d\uc548-\uc791\uc131\ud558\uae30"},"5. \uc774\ubca4\ud2b8 \uae30\ud68d\uc548 \uc791\uc131\ud558\uae30"),(0,l.kt)("p",null,"\ud654\uba74\uc5d0 \uc774\ubca4\ud2b8\ub97c \uc7a1\uc544\uc57c \ud558\ub294 \ubc84\ud2bc\uc774\ub098 \uc601\uc5ed\uc744 \ud45c\uc2dc\ud558\uace0 \uce74\ud14c\uace0\ub9ac, \uc561\uc158, \ub77c\ubca8\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\uc138 \uc694\uc18c\ub294 \uc5ed\ud560\uc774 \uace0\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uace0 \uc5bc\ub9c8\ub4e0\uc9c0 \uc720\uc5f0\ud558\uac8c \uad6c\uc131\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"6-\uad6c\uae00-\ud0dc\uadf8-\uad00\ub9ac\uc790"},"6. \uad6c\uae00 \ud0dc\uadf8 \uad00\ub9ac\uc790"),(0,l.kt)("p",null,"\uc774\ubca4\ud2b8 \ud0dc\uae45\uc744 \ud1b5\ud574 \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc9c0\ub9cc, \uac1c\ubc1c\uc790\uc5d0\uac8c \ub9e4\ubc88 \uc774\ubca4\ud2b8 \ub0b4\uc6a9\uc744 \uc18c\uc2a4 \ucf54\ub4dc\uc5d0 \ub123\uc5b4 \ub2ec\ub77c\uace0 \uc694\uccad\ud574\uc57c \ud558\ub294 \ub4f1\uc758 \ubd88\ud3b8\ud568\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n'\uad6c\uae00 \ud0dc\uadf8 \uad00\ub9ac\uc790'\ub294 \uc774\ub7ec\ud55c \uacfc\uc815\uc744 \uac04\uc18c\ud654\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"7-\uc774\ubca4\ud2b8-\uc0dd\uc131\ud560-\ub54c-\uc8fc\uc758\ud560-\uc810"},"7. \uc774\ubca4\ud2b8 \uc0dd\uc131\ud560 \ub54c \uc8fc\uc758\ud560 \uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud589\ub3d9\ubcf4\uace0\uc11c \uc774\ubca4\ud2b8\ub3c4 \ubaa8\ub450 \uc0ac\uc774\ud2b8 \ubaa9\uc801\uacfc \uaddc\uce59 \ub4f1\uc744 \uc0dd\uac01\ud574\uc11c \uc77c\uad00\uc131\uc788\ub294 \uae30\uc900\uc73c\ub85c \uc6b4\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74, \ucd94\ud6c4\uc5d0 \ubcc0\uacbd\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub3d9\uc77c\ud55c \uc774\ubca4\ud2b8\ub97c \uc9c0\uce6d\ud560 \ub54c 2\uac1c\uc758 \ub2e4\ub978 \uac12\uc73c\ub85c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uac8c \ub418\uba74, \ub370\uc774\ud130 \uac12\uc774 \ub098\ub204\uc5b4\uc838 \ud558\ub098\uc758 \ub370\uc774\ud130 \uac12\uc73c\ub85c \ubcf4\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub300\uc18c\ubb38\uc790\ub97c \uc11e\uc5b4\uc4f0\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uac8c \ub418\uba74, \ub370\uc774\ud130 \uac12\uc774 \ub098\ub204\uc5b4\uc838 \ud558\ub098\uc758 \ub370\uc774\ud130 \uac12\uc73c\ub85c \ubcf4\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uce21\uc815\uae30\uc900 \ud56d\ubaa9\uc744 \ubc14\uafd4\uc4f0\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uac8c \ub418\uba74, \ub370\uc774\ud130 \uac12\uc774 \ub098\ub204\uc5b4\uc838 \ud558\ub098\uc758 \ub370\uc774\ud130 \uac12\uc73c\ub85c \ubcf4\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("h2",{id:"8-\ucc38\uace0"},"8. \ucc38\uace0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/analytics#topic=9143232"},"\uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4 \uace0\uac1d\uc13c\ud130"),"\nDo it! \uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 \ubd84\uc11d\ud574 \uc131\uacfc\ub97c \ub192\uc774\ub294 \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4"))}d.isMDXComponent=!0}}]);