"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9594],{51604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),s=n(11470),i=n(19365);const l={sidebar_label:"React Native and Expo",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},o="Use MetaMask SDK with React Native and Expo",c={id:"how-to/use-sdk/javascript/react-native",title:"Use MetaMask SDK with React Native and Expo",description:"Set up the SDK in your React Native dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react-native.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/react-native",permalink:"/resources-snaps-highlight/wallet/how-to/use-sdk/javascript/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react-native.md",tags:[{inline:!0,label:"JavaScript SDK",permalink:"/resources-snaps-highlight/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"React Native and Expo",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Other web frameworks",permalink:"/resources-snaps-highlight/wallet/how-to/use-sdk/javascript/other-web-frameworks"},next:{title:"Node.js",permalink:"/resources-snaps-highlight/wallet/how-to/use-sdk/javascript/nodejs"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a new project",id:"1-create-a-new-project",level:3},{value:"2. Install the SDK",id:"2-install-the-sdk",level:3},{value:"3. Update the configuration file",id:"3-update-the-configuration-file",level:3},{value:"4. Add import statements",id:"4-add-import-statements",level:3},{value:"5. Prebuild the project",id:"5-prebuild-the-project",level:3},{value:"6. Run the project",id:"6-run-the-project",level:3},{value:"7. Use the SDK",id:"7-use-the-sdk",level:3},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-metamask-sdk-with-react-native-and-expo",children:"Use MetaMask SDK with React Native and Expo"}),"\n",(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.a,{href:"/resources-snaps-highlight/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your React Native or Expo dapp to\nenable your users to easily connect to the MetaMask browser extension and MetaMask Mobile."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-mobile",children:"MetaMask Mobile"})," version 5.8.1 or later"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.h3,{id:"1-create-a-new-project",children:"1. Create a new project"}),"\n",(0,a.jsx)(t.p,{children:"Create a new React Native or Expo project using the following commands:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"React Native",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx react-native@latest init MyProject\n"})})}),(0,a.jsx)(i.A,{value:"Expo",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx create-expo-app devexpo --template\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"2-install-the-sdk",children:"2. Install the SDK"}),"\n",(0,a.jsx)(t.p,{children:"Install the SDK and its dependencies using the following commands:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"React Native",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install eciesjs @metamask/sdk-react ethers@5.7.2 @react-native-async-storage/async-storage node-libs-react-native react-native-background-timer react-native-randombytes react-native-url-polyfill react-native-get-random-values\n"})})}),(0,a.jsx)(i.A,{value:"Expo",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx expo install expo-crypto @metamask/sdk-react ethers@5.7.2 @react-native-async-storage/async-storage node-libs-expo react-native-background-timer react-native-randombytes react-native-url-polyfill react-native-get-random-values@1.8.0\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"3-update-the-configuration-file",children:"3. Update the configuration file"}),"\n",(0,a.jsx)(t.p,{children:"If you're using Expo, run the following command to create a default Metro configuration file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx expo customize metro.config.js\n"})}),"\n",(0,a.jsx)(t.p,{children:"In React Native or Expo, update the default Metro configuration file to the following:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"React Native",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="metro.config.js"',children:'const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");\n\nconst defaultConfig = getDefaultConfig(__dirname);\n\nconst config = {\n  transformer: {\n    getTransformOptions: async () => ({\n      transform: {\n        experimentalImportSupport: false,\n        inlineRequires: true,\n      },\n    }),\n  },\n  resolver: {\n    extraNodeModules: {\n      ...require("node-libs-react-native"),\n    },\n  },\n};\n\nmodule.exports = mergeConfig(defaultConfig, config);\n'})})}),(0,a.jsx)(i.A,{value:"Expo",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="metro.config.js"',children:'const config = getDefaultConfig(__dirname);\n\nconfig.resolver.extraNodeModules = {\n  ...require("node-libs-expo"),\n};\n\nconfig.transformer.getTransformOptions = async () => ({\n  transform: {\n    experimentalImportSupport: false,\n    inlineRequires: true,\n  },\n});\n\nmodule.exports = config;\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"4-add-import-statements",children:"4. Add import statements"}),"\n",(0,a.jsx)(t.p,{children:"Add the following import statements to the React Native or Expo entry file:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"React Native",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js or App.tsx"',children:'import "node-libs-react-native/globals";\nimport "react-native-url-polyfill/auto";\nimport "react-native-get-random-values";\n'})})}),(0,a.jsx)(i.A,{value:"Expo",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="App.tsx"',children:'import "node-libs-expo/globals";\nimport "react-native-url-polyfill/auto";\nimport "react-native-get-random-values";\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"5-prebuild-the-project",children:"5. Prebuild the project"}),"\n",(0,a.jsx)(t.p,{children:"If you're using Expo, prebuild the project using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx expo prebuild\n"})}),"\n",(0,a.jsx)(t.p,{children:"React Native doesn't require prebuilding."}),"\n",(0,a.jsx)(t.h3,{id:"6-run-the-project",children:"6. Run the project"}),"\n",(0,a.jsx)(t.p,{children:"Run the React Native or Expo project on Android or iOS using the following commands:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"React Native",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx react-native run-android\nnpx react-native run-ios\n"})})}),(0,a.jsx)(i.A,{value:"Expo",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx expo run:android\nnpx expo run:ios\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"7-use-the-sdk",children:"7. Use the SDK"}),"\n",(0,a.jsxs)(t.p,{children:["Initialize and use the SDK in your React Native or Expo project using the ",(0,a.jsx)(t.code,{children:"useSDK"})," hook.\nThe following code snippets demonstrate how to use the hook."]}),"\n",(0,a.jsx)(t.p,{children:"Import the hook:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'import { useSDK } from "@metamask/sdk-react";\n'})}),"\n",(0,a.jsx)(t.p,{children:"Initialize the SDK in your main component:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { connect, disconnect, account, chainId, ethereum } = useSDK();\n"})}),"\n",(0,a.jsx)(t.p,{children:"Connect to MetaMask:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'const connectWallet = async () => {\n  try {\n    await connect();\n  } catch (error) {\n    console.error("Failed to connect wallet:", error);\n  }\n};\n'})}),"\n",(0,a.jsx)(t.p,{children:"Handle your dapp's state:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"useEffect(() => {\n  // Use the account and chainId returned by useSDK.\n  if (account && chainId) {\n    // Handle account and network changes.\n  }\n}, [account, chainId]);\n"})}),"\n",(0,a.jsx)(t.p,{children:"Disconnect from MetaMask:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const disconnectWallet = async () => {\n  await disconnect();\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/reactNativeDemo",children:"example React Native dapp"}),"\nand the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/expo-demo",children:"example Expo dapp"}),"\nin the JavaScript SDK GitHub repository for more detailed implementations."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),s=n(23104),i=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[x,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=c??x;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);