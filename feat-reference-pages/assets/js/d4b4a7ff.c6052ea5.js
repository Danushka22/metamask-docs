"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5569],{19622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(74848),s=a(28453),r=a(11470),l=a(19365);const o={sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},i="Use MetaMask SDK with iOS",c={id:"how-to/use-sdk/mobile/ios",title:"Use MetaMask SDK with iOS",description:"Set up the SDK in your iOS dapp.",source:"@site/wallet/how-to/use-sdk/mobile/ios.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/ios",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/mobile/ios",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/ios.md",tags:[{label:"iOS SDK",permalink:"/feat-reference-pages/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Mobile",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/mobile/"},next:{title:"Android",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/mobile/android"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-metamask-sdk-with-ios",children:"Use MetaMask SDK with iOS"}),"\n",(0,n.jsxs)(t.p,{children:["Import ",(0,n.jsx)(t.a,{href:"/feat-reference-pages/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your native iOS dapp to enable your\nusers to easily connect with their MetaMask Mobile wallet."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical device\nor emulator).\nYou can install MetaMask Mobile from the ",(0,n.jsx)(t.a,{href:"https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202",children:"App Store"}),"\nor clone and compile MetaMask Mobile from ",(0,n.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-mobile",children:"source"}),"\nand build to your target device."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["iOS version 14 or later.\nThe SDK supports ",(0,n.jsx)(t.code,{children:"ios-arm64"})," (iOS devices) and ",(0,n.jsx)(t.code,{children:"ios-arm64-simulator"})," (M1 chip simulators).\nIt currently doesn't support ",(0,n.jsx)(t.code,{children:"ios-ax86_64-simulator"})," (Intel chip simulators)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsxs)(l.A,{value:"CocoaPods",children:[(0,n.jsx)(t.p,{children:"To add the SDK as a CocoaPods dependency to your project, add the following entry to our Podfile:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:'pod "metamask-ios-sdk"\n'})}),(0,n.jsx)(t.p,{children:"Run the following command:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pod install\n"})})]}),(0,n.jsxs)(l.A,{value:"Swift Package Manager",children:[(0,n.jsxs)(t.p,{children:["To add the SDK as a Swift Package Manager (SPM) package to your project, in Xcode, select\n",(0,n.jsx)(t.strong,{children:"File > Swift Packages > Add Package Dependency"}),".\nEnter the URL of the MetaMask iOS SDK repository: ",(0,n.jsx)(t.code,{children:"https://github.com/MetaMask/metamask-ios-sdk"}),"."]}),(0,n.jsx)(t.p,{children:"Alternatively, you can add the URL directly in your project's package file:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'dependencies: [\n  .package(\n    url: "https://github.com/MetaMask/metamask-ios-sdk",\n    from: "0.3.0"\n  )\n]\n'})})]})]}),"\n",(0,n.jsx)(t.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,n.jsx)(t.p,{children:"Import the SDK by adding the following line to the top of your project file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"import metamask_ios_sdk\n"})}),"\n",(0,n.jsx)(t.h3,{id:"3-connect-your-dapp",children:"3. Connect your dapp"}),"\n",(0,n.jsx)(t.p,{children:"Connect your dapp to MetaMask by adding the following code to your project file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let appMetadata = AppMetadata(name: "Dub Dapp", url: "https://dubdapp.com")\n\n@ObservedObject var metamaskSDK = MetaMaskSDK.shared(appMetadata)\n\nmetamaskSDK.connect()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["By default, MetaMask logs three SDK events: ",(0,n.jsx)(t.code,{children:"connectionRequest"}),", ",(0,n.jsx)(t.code,{children:"connected"}),", and ",(0,n.jsx)(t.code,{children:"disconnected"}),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,n.jsx)(t.code,{children:"MetaMaskSDK.shared.enableDebug = false"})," or ",(0,n.jsx)(t.code,{children:"ethereum.enableDebug = false"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"4-call-methods",children:"4. Call methods"}),"\n",(0,n.jsxs)(t.p,{children:["You can now call any ",(0,n.jsx)(t.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API method"})," using ",(0,n.jsx)(t.code,{children:"metamaskSDK.request()"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"example-get-chain-id",children:"Example: Get chain ID"}),"\n",(0,n.jsxs)(t.p,{children:["The following example gets the user's chain ID by calling\n",(0,n.jsx)(t.a,{href:"/wallet/reference/eth_chainId",children:(0,n.jsx)(t.code,{children:"eth_chainId"})}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let chainIdRequest = EthereumRequest(method: .ethChainId)\nlet chainId = await metamaskSDK.request(chainIdRequest)\n"})}),"\n",(0,n.jsx)(t.h4,{id:"example-get-account-balance",children:"Example: Get account balance"}),"\n",(0,n.jsxs)(t.p,{children:["The following example gets the user's account balance by calling\n",(0,n.jsx)(t.a,{href:"/wallet/reference/eth_getBalance",children:(0,n.jsx)(t.code,{children:"eth_getBalance"})}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String] = [\n  // Account to check for balance.\n  account,\n  // "latest", "earliest", or "pending" (optional)\n  "latest"\n]\n\n// Create request.\nlet getBalanceRequest = EthereumRequest(\n  method: .ethGetBalance,\n  params: parameters\n)\n\n// Make request.\nlet accountBalance = await metamaskSDK.request(getBalanceRequest)\n'})}),"\n",(0,n.jsx)(t.h4,{id:"example-send-transaction",children:"Example: Send transaction"}),"\n",(0,n.jsxs)(t.p,{children:["The following example sends a transaction by calling\n",(0,n.jsx)(t.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,n.jsx)(t.code,{children:"eth_sendTransaction"})}),"."]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsxs)(l.A,{value:"Use a dictionary",children:[(0,n.jsxs)(t.p,{children:["If your request parameters make up a simple dictionary of string key-value pairs, you can use the\ndictionary directly.\nNote that ",(0,n.jsx)(t.code,{children:"Any"})," or even ",(0,n.jsx)(t.code,{children:"AnyHashable"})," types aren't supported, since the type must be explicitly known."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String: String] = [\n  // Receiver address.\n  "to": "0x...",\n  // Sender address.\n  "from": account,\n  // Amount to send.\n  "value": "0x..."\n]\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [parameters]\n)\n\n// Make a transaction request.\nlet transactionResult = await metamaskSDK.request(transactionRequest)\n'})})]}),(0,n.jsxs)(l.A,{value:"Use a struct",children:[(0,n.jsxs)(t.p,{children:["For more complex parameter representations, define and use a struct that conforms to ",(0,n.jsx)(t.code,{children:"CodableData"}),",\nthat is, a struct that implements the following requirement:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"func socketRepresentation() -> NetworkData\n"})}),(0,n.jsx)(t.p,{children:"The type can then be represented as a socket packet."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'struct Transaction: CodableData {\n  let to: String\n  let from: String\n  let value: String\n  let data: String?\n\n  init(to: String, from: String, value: String, data: String? = nil) {\n    self.to = to\n    self.from = from\n    self.value = value\n    self.data = data\n  }\n\n  func socketRepresentation() -> NetworkData {\n    [\n      "to": to,\n      "from": from,\n      "value": value,\n      "data": data\n    ]\n  }\n}\n\n// Create parameters.\nlet account = metamaskSDK.account\n\nlet transaction = Transaction(\n  // Receiver address.\n  to: "0x...",\n  // Sender address.\n  from: account,\n  // Amount.\n  value: "0x..."\n)\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [transaction]\n)\n\n// Make a transaction request.\nlet result = await metamaskSDK.request(transactionRequest)\n'})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-ios-sdk/tree/main/Example",children:"example iOS dapp"})," in the\niOS SDK GitHub repository for more information."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>S});var n=a(96540),s=a(18215),r=a(23104),l=a(56347),o=a(205),i=a(57485),c=a(31682),d=a(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:a,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function j(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),s=o[a].value;s!==n&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function S(e){const t=(0,x.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var n=a(96540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);