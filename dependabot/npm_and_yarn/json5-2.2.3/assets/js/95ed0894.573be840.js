"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Introduction"},s="Integrate with the MetaMask wallet",i={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Get started",permalink:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/category/get-started"}},l={},p=[{value:"What is the MetaMask Ethereum provider API?",id:"what-is-the-metamask-ethereum-provider-api",level:2},{value:"What is MetaMask SDK?",id:"what-is-metamask-sdk",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-with-the-metamask-wallet"},"Integrate with the MetaMask wallet"),(0,r.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),", which enables your dapp to interact\nwith its users' Ethereum accounts.\nWe recommend using ",(0,r.kt)("a",{parentName:"p",href:"how-to/use-sdk"},"MetaMask SDK")," to easily enable your users to connect to their\nMetaMask wallet client from any platform."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/get-started/set-up-dev-environment"},"setting up your development environment"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS."),(0,r.kt)("li",{parentName:"ul"},"To learn how to extend the functionality of MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../snaps"},"MetaMask Snaps developer documentation"),"."))),(0,r.kt)("h2",{id:"what-is-the-metamask-ethereum-provider-api"},"What is the MetaMask Ethereum provider API?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is a JavaScript API that MetaMask\ninjects into websites visited by MetaMask users.\nYour dapp can use this API to request users' Ethereum accounts, read data from blockchains the user\nis connected to, and suggest that the user sign messages and transactions."),(0,r.kt)("h2",{id:"what-is-metamask-sdk"},"What is MetaMask SDK?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/how-to/use-sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/wallet/concepts/sdk-connections"},"connection")," from your dapp to the MetaMask browser extension and\nMetaMask Mobile.\nYou can install the SDK into your dapp to enable your users to easily connect to a MetaMask wallet\nclient from multiple platforms (web, desktop, and mobile)."),(0,r.kt)("p",null,"For example, for dapps running on a desktop browser, MetaMask SDK checks if the MetaMask extension\nis installed.\nIf MetaMask isn't installed, the SDK prompts the user to install it or connect to their MetaMask\nMobile wallet using a QR code.\nFor dapps running on a mobile browser, MetaMask SDK automatically deeplinks to the user's MetaMask\nMobile wallet to make the connection."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}c.isMDXComponent=!0}}]);