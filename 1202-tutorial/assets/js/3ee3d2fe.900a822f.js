"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2782],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),o=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},m=function(e){var n=o(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?t.createElement(g,p(p({ref:n},m),{},{components:a})):t.createElement(g,p({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<s;o++)p[o]=a[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31824:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=a(58168),r=(a(96540),a(15680));const s={description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},p="About the Snaps APIs",i={unversionedId:"learn/about-snaps/apis",id:"learn/about-snaps/apis",title:"About the Snaps APIs",description:"Learn about the Snaps APIs.",source:"@site/snaps/learn/about-snaps/apis.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/apis",permalink:"/1202-tutorial/snaps/learn/about-snaps/apis",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},sidebar:"snapsSidebar",previous:{title:"About Snaps",permalink:"/1202-tutorial/snaps/learn/about-snaps/"},next:{title:"Snaps files",permalink:"/1202-tutorial/snaps/learn/about-snaps/files"}},l={},o=[{value:"Snaps API",id:"snaps-api",level:2},{value:"Wallet API",id:"wallet-api",level:2},{value:"Dapp requests",id:"dapp-requests",level:3},{value:"Snap requests",id:"snap-requests",level:3},{value:"Custom JSON-RPC APIs",id:"custom-json-rpc-apis",level:2}],m={toc:o},u="wrapper";function c(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"about-the-snaps-apis"},"About the Snaps APIs"),(0,r.yg)("p",null,"Snaps, dapps, and MetaMask can communicate with each other using the ",(0,r.yg)("a",{parentName:"p",href:"#snaps-api"},"Snaps API"),",\n",(0,r.yg)("a",{parentName:"p",href:"#metamask-json-rpc-api"},"MetaMask JSON-RPC API"),", and ",(0,r.yg)("a",{parentName:"p",href:"#custom-json-rpc-apis"},"custom JSON-RPC APIs"),"."),(0,r.yg)("h2",{id:"snaps-api"},"Snaps API"),(0,r.yg)("p",null,"Snaps can access the global object ",(0,r.yg)("inlineCode",{parentName:"p"},"snap"),", which has one method: ",(0,r.yg)("inlineCode",{parentName:"p"},"request"),".\nYou can use this object to make ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api"},"Snaps API")," requests.\nThese API methods allow Snaps to extend or modify the functionality of MetaMask."),(0,r.yg)("p",null,"To call each method (except the ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api#interactive-ui-methods"},"interactive UI methods"),"),\nyou must first ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/how-to/request-permissions"},"request permission")," in the Snap manifest file.\nFor example, to call ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/snaps-api#snap_notify"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_notify")),", first request the\n",(0,r.yg)("inlineCode",{parentName:"p"},"snap_notify")," permission:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_notify": {}\n}\n')),(0,r.yg)("p",null,"Your Snap can then call ",(0,r.yg)("inlineCode",{parentName:"p"},"snap_notify")," in its source code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'await snap.request({\n  method: "snap_notify",\n  params: {\n    type: "inApp",\n    message: "Hello, world!",\n  },\n});\n')),(0,r.yg)("h2",{id:"wallet-api"},"Wallet API"),(0,r.yg)("h3",{id:"dapp-requests"},"Dapp requests"),(0,r.yg)("p",null,"Dapps can install and communicate with Snaps using the following\n",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps"},"Wallet API methods for Snaps"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps#wallet_getsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," - Gets the dapp's\npermitted Snaps."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))," - Requests\npermission to communicate with the specified Snaps."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps#wallet_snap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_snap"))," - (Restricted) Calls the\nspecified custom JSON-RPC API method of the specified Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps#wallet_invokesnap"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," - (Restricted)\nSynonymous with ",(0,r.yg)("inlineCode",{parentName:"li"},"wallet_snap"),".")),(0,r.yg)("p",null,"A dapp must first ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/how-to/request-permissions#request-permissions-from-a-dapp"},"request permission"),"\nto communicate with a Snap using ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),".\nThe dapp can then call ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_snap")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_invokeSnap")," on the permitted Snap.\nFor example, to call ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_snap"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'// Request permission to connect to the Snap.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    "npm:hello-snap": {},\n  },\n});\n\n// Call the "hello" method of the Snap using wallet_snap.\nconst response = await window.ethereum.request({\n  method: "wallet_snap",\n  params: {\n    snapId: "npm:hello-snap",\n    request: { \n      method: "hello",\n    },\n  },\n});\n\nconsole.log(response); // "world!"\n')),(0,r.yg)("h3",{id:"snap-requests"},"Snap requests"),(0,r.yg)("p",null,"Snaps can also call some Wallet JSON-RPC API methods using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global, which is an\n",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," provider."),(0,r.yg)("p",null,"To expose ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," to the Snap execution environment, a Snap must first request the\n",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/permissions#endowmentethereum-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission.\nFor example, to call ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),", first request\nthe required permission:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n')),(0,r.yg)("p",null,"Your Snap can then call ",(0,r.yg)("inlineCode",{parentName:"p"},"eth_requestAccounts")," in its source code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'await ethereum.request({ "method": "eth_requestAccounts" });\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,r.yg)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSnaps can only use it to make read requests, not to write to the blockchain or initiate transactions.\nSnaps can call all Wallet JSON-RPC API methods ",(0,r.yg)("strong",{parentName:"p"},"except")," the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_requestPermissions"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_revokePermissions"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_revokePermissions"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_addEthereumChain"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_switchEthereumChain"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_watchAsset"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_watchAsset"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_registerOnboarding"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_registerOnboarding"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/wallet_scanQRCode"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_scanQRCode"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/eth_sendRawTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/eth_sendTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/eth_decrypt"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_decrypt"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/wallet/reference/eth_getEncryptionPublicKey"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_getEncryptionPublicKey")))),(0,r.yg)("h2",{id:"custom-json-rpc-apis"},"Custom JSON-RPC APIs"),(0,r.yg)("p",null,"Snaps can implement their own custom JSON-RPC APIs to communicate with dapps and other Snaps.\nTo do so, a Snap must expose the ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/entry-points#onrpcrequest"},(0,r.yg)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry\npoint and request the ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/permissions#endowmentrpc"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission."),(0,r.yg)("p",null,"The Snap's custom API is entirely up to you, as long as it's a valid\n",(0,r.yg)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,r.yg)("admonition",{title:"Does my Snap need a custom API?",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,r.yg)("a",{parentName:"p",href:"/1202-tutorial/snaps/reference/entry-points#ontransaction"},"transaction insights"),", you do not need to\nimplement a custom API.\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your Snap, you must implement a custom API.")),(0,r.yg)("p",null,"For example, to create a simple Snap with a custom API, first request the ",(0,r.yg)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nSet ",(0,r.yg)("inlineCode",{parentName:"p"},"dapps")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," to enable dapps to make JSON-RPC requests."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true\n  }\n}\n')),(0,r.yg)("p",null,"Your Snap can then implement and expose a custom API using the ",(0,r.yg)("inlineCode",{parentName:"p"},"onRpcRequest")," function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a "hello" JSON-RPC method to dapps.\n    case "hello":\n      return "world!";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')),(0,r.yg)("p",null,"A dapp can then install the Snap and call the exposed method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Request permission to connect to the Snap.\n// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    // Assuming the Snap is published to npm using the package name "hello-snap".\n    "npm:hello-snap": {},\n  },\n});\n\n// Invoke the "hello" JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: "wallet_invokeSnap",\n  params: {\n    snapId: "npm:hello-snap",\n    request: {\n      method: "hello",\n    },\n  },\n});\n\nconsole.log(response); // "world!"\n')))}c.isMDXComponent=!0}}]);