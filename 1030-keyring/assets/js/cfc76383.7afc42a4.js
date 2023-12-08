"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(t),u=i,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={description:"Snaps permissions reference",sidebar_position:4},s="Snaps permissions",o={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"Snaps permissions reference",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/1030-keyring/snaps/reference/permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Snaps permissions reference",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/1030-keyring/snaps/reference/exports"},next:{title:"Snaps command line interface",permalink:"/1030-keyring/snaps/reference/cli/"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"endowment:cronjob",id:"endowmentcronjob",level:3},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:3},{value:"endowment:keyring",id:"endowmentkeyring",level:3},{value:"endowment:network-access",id:"endowmentnetwork-access",level:3},{value:"Same-origin policy and CORS",id:"same-origin-policy-and-cors",level:4},{value:"endowment:rpc",id:"endowmentrpc",level:3},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:3},{value:"endowment:webassembly",id:"endowmentwebassembly",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:2},{value:"eth_accounts",id:"eth_accounts",level:3}],m={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,i.kt)("p",null,"Your Snap can ",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/how-to/request-permissions"},"request the following permissions"),"."),(0,i.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,i.kt)("p",null,"You must request permission to use any\n",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,i.kt)("p",null,"For example, to request to use ",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/rpc-api#snap_dialog"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the following to the\nmanifest file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,i.kt)("h2",{id:"endowments"},"Endowments"),(0,i.kt)("h3",{id:"endowmentcronjob"},"endowment:cronjob"),(0,i.kt)("p",null,"To run periodic actions for the user (cron jobs), a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the Snap to specify cron jobs that trigger the exported\n",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/exports#oncronjob"},(0,i.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,i.kt)("p",null,"To communicate with a node using MetaMask, a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the global API ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum")," to the Snap execution environment.\nThis global is an EIP-1193 provider."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n},\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The global ",(0,i.kt)("inlineCode",{parentName:"p"},"ethereum")," API in Snaps has fewer capabilities than ",(0,i.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nYou can only use it to make read requests from the RPC provider, not to write to the blockchain or initiate transactions.\nYou can also use it to connect to Ethereum accounts with ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," and then use ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign")," with\nthose connected accounts.")),(0,i.kt)("h3",{id:"endowmentkeyring"},"endowment:keyring"),(0,i.kt)("admonition",{type:"flaskOnly"}),(0,i.kt)("p",null,"For a dapp to call ",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/concepts/keyring-api"},"Keyring API")," methods on an account management Snap,\nthe Snap must configure a list of allowed dapp URLs using the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:keyring")," permission.\nIf a dapp hosted on a domain not listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedOrigins")," attempts to call a Keyring API method,\nMetaMask rejects the request."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": ["https://<dapp domain>"]\n  }\n}\n')),(0,i.kt)("h3",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,i.kt)("p",null,"To access the internet, a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,i.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,i.kt)("h4",{id:"same-origin-policy-and-cors"},"Same-origin policy and CORS"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," requests in a Snap are bound by the browser's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access"},"same-origin policy"),".\nSince Snap code is executed in an iframe with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox")," property, the browser sends an ",(0,i.kt)("inlineCode",{parentName:"p"},"Origin"),"\nheader with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," with outgoing requests.\nFor the Snap to be able to read the response, the server must send an\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},(0,i.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))," CORS header\nwith the value ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," in the response."),(0,i.kt)("h3",{id:"endowmentrpc"},"endowment:rpc"),(0,i.kt)("p",null,"To handle arbitrary JSON-RPC requests, a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a Snap access to JSON-RPC requests sent to the Snap, using the exported\n",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/exports#onrpcrequest"},(0,i.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,i.kt)("p",null,"This permission requires an object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nsnap can receive JSON-RPC requests from other Snaps, or dapps, respectively.\nThe default for both properties is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": {\n      "dapps": true,\n      "snaps": false\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Alternatively, you can specify the caveat ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedOrigins")," to restrict requests to specific domains or Snap IDs.\nCalls from any other origins will be rejected. "),(0,i.kt)("p",null,"Specify this caveat in the manifest file as follows: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": { \n      "allowedOrigins": [\n        "metamask.io", \n        "consensys.io",\n        "npm:@metamask/example-snap"\n      ] \n    }\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedOrigins"),", you should not specify ",(0,i.kt)("inlineCode",{parentName:"p"},"dapps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"snaps"),". ")),(0,i.kt)("h3",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,i.kt)("p",null,"To provide transaction insights, a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a Snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,i.kt)("a",{parentName:"p",href:"/1030-keyring/snaps/reference/exports#ontransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,i.kt)("p",null,"This permission requires an object with an ",(0,i.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the Snap\nshould pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n},\n')),(0,i.kt)("h3",{id:"endowmentwebassembly"},"endowment:webassembly"),(0,i.kt)("p",null,"To use WebAssembly, a Snap must request the ",(0,i.kt)("inlineCode",{parentName:"p"},"endowment:webassembly")," permission.\nThis permission exposes the global ",(0,i.kt)("inlineCode",{parentName:"p"},"WebAssembly")," API to the Snap execution environment."),(0,i.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:webassembly": {}\n},\n')),(0,i.kt)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,i.kt)("p",null,"Dynamic permissions are not requested in the manifest file.\nInstead, your Snap can acquire dynamic permissions during its lifecycle."),(0,i.kt)("h3",{id:"eth_accounts"},"eth_accounts"),(0,i.kt)("p",null,"A Snap can request permission to call the Ethereum provider's ",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"\nRPC method by calling the provider's ",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method.\nCalling ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," requires the ",(0,i.kt)("a",{parentName:"p",href:"#endowmentethereum-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"ethereum-provider"))," endowment."),(0,i.kt)("p",null,"You can check the presence of the permission by calling ",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getpermissions"},(0,i.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions")),".\nIf the permission is present, the result contains a permission with a ",(0,i.kt)("inlineCode",{parentName:"p"},"parentCapability")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_accounts"),".\nIt comes with a caveat of ",(0,i.kt)("inlineCode",{parentName:"p"},"restrictReturnedAccounts"),", an array of all the accounts the user allows for this Snap.\nThe following is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_accounts")," permission:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "47vm2UUi1pccNAeYKGmwF", // example\n  "parentCapability": "eth_accounts",\n  "invoker": "npm:SNAP_ID",\n  "caveats": [\n    {\n      "type": "restrictReturnedAccounts",\n      "value": [\n        "0xc403b37bf1e700cb214ea1be9de066824b420de6" // example connected account #1\n      ]\n    }\n  ],\n  "date": 1692616452846\n}\n')),(0,i.kt)("p",null,"The user can revoke this permission by going to the Snap's settings under ",(0,i.kt)("strong",{parentName:"p"},"Snap permissions"),"."))}d.isMDXComponent=!0}}]);