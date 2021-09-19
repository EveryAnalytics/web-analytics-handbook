"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[3631],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2984:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},c="Browse Charts",l={unversionedId:"handbook/amplitude-basics/browse-charts",id:"handbook/amplitude-basics/browse-charts",isDocsHomePage:!1,title:"Browse Charts",description:"_\ub2e4\uc591\ud55c \ubd84\uc11d\uc744 \uc704\ud55c \ucc28\ud2b8\ub97c \uc0dd\uc131\ud558\uace0 \uac80\uc0c9\ud569\ub2c8\ub2e4._",source:"@site/docs/handbook/amplitude-basics/browse-charts.md",sourceDirName:"handbook/amplitude-basics",slug:"/handbook/amplitude-basics/browse-charts",permalink:"/web-analytics-handbook/docs/handbook/amplitude-basics/browse-charts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/amplitude-basics/browse-charts.md",version:"current",lastUpdatedBy:"JunHee Lee",lastUpdatedAt:1632034331,formattedLastUpdatedAt:"9/19/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"handbookSidebar",previous:{title:"Dashboard",permalink:"/web-analytics-handbook/docs/handbook/amplitude-basics/dashboard"},next:{title:"User Activity",permalink:"/web-analytics-handbook/docs/handbook/amplitude-basics/user-activity"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browse-charts"},"Browse Charts"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\ub2e4\uc591\ud55c \ubd84\uc11d\uc744 \uc704\ud55c \ucc28\ud2b8\ub97c \uc0dd\uc131\ud558\uace0 \uac80\uc0c9\ud569\ub2c8\ub2e4."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[Event Segmentation Chart]")),(0,a.kt)("p",null,"\uc774\ubca4\ud2b8 \ubc0f \uc774\ubca4\ud2b8\ub97c \uc218\ud589\ud55c \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc138\ubd84\ud654\ub41c \ucc28\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc120\ud0dd\ud55c \uae30\uac04 \ub3d9\uc548 \uc0ac\uc6a9\uc790\uc758 \uc18d\uc131 \ud639\uc740 \uc774\ubca4\ud2b8\uc758 \uc18d\uc131\ubcc4\ub85c \uc774\ubca4\ud2b8\ub97c \ube44\uad50\ud558\uac70\ub098 \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[User Composition Chart]")),(0,a.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc18d\uc131\uc744 \uae30\ubc18\uc73c\ub85c \ud65c\uc131\ub418\uba70, \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[User Session Chart]")),(0,a.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc138\uc158 \uc815\ubcf4\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub97c \ubd84\uc11d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc138\uc158")),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\uc11c\ubc84 : \uc138\uc158 \uac12\uc744 session_id \uc18d\uc131\uc5d0 \ub2f4\uc544 HTTP API\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 (\ubaa8\ubc14\uc77c) : \ubaa8\ubc14\uc77c SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ub85c 5\ubd84 \uc774\ub0b4\uc5d0 \ud2b8\ub9ac\uac70\uac00 \ub41c \uc774\ubca4\ud2b8\ub97c \uc138\uc158(\ub3d9\uc77c\ud55c session_id)\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 (\uc6f9) : \uc790\ubc14 \uc2a4\ud06c\ub9bd\ud2b8 SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ub85c 30\ubd84 \uc774\ub0b4\uc5d0 \ud2b8\ub9ac\uac70\uac00 \ub41c \uc774\ubca4\ud2b8\ub97c \ud604\uc7ac \uc138\uc158(\ub3d9\uc77c\ud55c session_id)\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4."))))}d.isMDXComponent=!0}}]);