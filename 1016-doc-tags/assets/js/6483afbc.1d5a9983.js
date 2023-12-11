"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7416],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"React Native",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with React Native",s={unversionedId:"how-to/connect/set-up-sdk/javascript/react-native",id:"how-to/connect/set-up-sdk/javascript/react-native",title:"Use MetaMask SDK with React Native",description:"Set up the SDK in your React Native dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/react-native.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/react-native",permalink:"/1016-doc-tags/wallet/how-to/connect/set-up-sdk/javascript/react-native",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/react-native.md",tags:[{label:"JavaScript SDK",permalink:"/1016-doc-tags/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"React Native",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Other web frameworks",permalink:"/1016-doc-tags/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks"},next:{title:"Node.js",permalink:"/1016-doc-tags/wallet/how-to/connect/set-up-sdk/javascript/nodejs"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Use the SDK",id:"2-use-the-sdk",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react-native"},"Use MetaMask SDK with React Native"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/concepts/sdk/"},"MetaMask SDK")," into your React Native dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,r.kt)("admonition",{title:"Example",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/reactNativeDemo"},"example React Native dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/0.71/getting-started"},"React Native")," project set up with React Native version 0.71 or above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," version 5.8.1 or above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," or\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("admonition",{title:"Coming soon",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask-react-native-sdk")," package that simplifies the installation of the SDK for React Native\ndapps is coming soon.")),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tradle/rn-nodeify"},(0,r.kt)("inlineCode",{parentName:"a"},"rn-nodeify"))," to install the SDK.\nIn your project directory, install ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev rn-nodeify\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --dev rn-nodeify\n")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-crypto\nyarn add react-native-randombytes\nyarn add crypto\nyarn add process\nyarn add stream\nyarn add events\n")),(0,r.kt)("p",null,"In your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, insert the ",(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," command into the postinstall script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n  ...,\n  "postinstall": "rn-nodeify --install \'crypto,process,stream,events\' --hack"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rn-nodeify")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"shim.js")," file in your project root directory.\nImport it in the root file of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import './shim'\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-background-timer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-background-timer\n\ncd ios && pod install && cd ..\n")),(0,r.kt)("p",null,"Install MetaMask SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,r.kt)("p",null,"Run the postinstall script after everything is installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn postinstall\n")),(0,r.kt)("p",null,"Finally, install the necessary pods that come with the libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios && pod install && cd ..\n")),(0,r.kt)("h3",{id:"2-use-the-sdk"},"2. Use the SDK"),(0,r.kt)("p",null,"Import, instantiate, and use the SDK by adding something similar to the following to your project script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import MetaMaskSDK from '@metamask/sdk';\nimport { Linking } from 'react-native';\nimport BackgroundTimer from 'react-native-background-timer';\n\nconst MMSDK = new MetaMaskSDK({\n  openDeeplink: (link) => {\n    Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.\n  },\n  timer: BackgroundTimer, // To keep the dapp alive once it goes to background.\n  dappMetadata: {\n    name: 'My dapp', // The name of your dapp.\n    url: 'https://mydapp.com', // The URL of your website.\n  },\n});\n\nconst ethereum = MMSDK.getProvider();\n\nconst accounts = await ethereum.request({ method: 'eth_requestAccounts' });\n")),(0,r.kt)("p",null,"You can configure the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,r.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/reference/provider-api#windowethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."),(0,r.kt)("admonition",{title:"Important SDK options",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/wallet/reference/sdk-js-options#modals"},(0,r.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"make read-only RPC requests")," from your dapp."))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/getting-started/"},"EthersJS")," with your React Native app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const provider = new ethers.providers.Web3Provider(ethereum);\n\n// Get the balance of an account (by address or ENS name, if supported by network).\nconst balance = await provider.getBalance(ethereum.selectedAddress);\n\n// Often you need to format the output to something more user-friendly,\n// such as in ether (instead of wei).\nconst balanceInETH = ethers.utils.formatEther(balance);\n// '0.182826475815887608'\n")))}m.isMDXComponent=!0}}]);