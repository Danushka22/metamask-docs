"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8760],{85805:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=a(74848),r=a(28453),i=a(11470),t=a(19365);const c={sidebar_position:2,tags:["Keyring API"]},d="Chain Methods API",l={id:"reference/keyring-api/chain-methods",title:"Chain Methods API",description:"Account management Snaps can choose to implement the",source:"@site/snaps/reference/keyring-api/chain-methods.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/chain-methods",permalink:"/feat-reference-pages/snaps/reference/keyring-api/chain-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/chain-methods.md",tags:[{label:"Keyring API",permalink:"/feat-reference-pages/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Events",permalink:"/feat-reference-pages/snaps/reference/keyring-api/account-management/events"},next:{title:"Jest API and options",permalink:"/feat-reference-pages/snaps/reference/jest"}},o={},h=[{value:"EOA methods",id:"eoa-methods",level:2},{value:"<code>personal_sign</code>",id:"personal_sign",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>eth_signTransaction</code>",id:"eth_signtransaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>eth_signTypedData_v4</code>",id:"eth_signtypeddata_v4",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Deprecated methods",id:"deprecated-methods",level:3},{value:"ERC-4337 methods",id:"erc-4337-methods",level:2},{value:"<code>eth_prepareUserOperation</code>",id:"eth_prepareuseroperation",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>eth_patchUserOperation</code>",id:"eth_patchuseroperation",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>eth_signUserOperation</code>",id:"eth_signuseroperation",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"chain-methods-api",children:"Chain Methods API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/feat-reference-pages/snaps/features/custom-evm-accounts/",children:"Account management Snaps"})," can choose to implement the\nfollowing EVM methods to support dapp requests from custom accounts."]}),"\n",(0,s.jsx)(n.h2,{id:"eoa-methods",children:"EOA methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods are used by externally owned accounts (EOAs)."}),"\n",(0,s.jsx)(n.h3,{id:"personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})}),"\n",(0,s.jsxs)(n.p,{children:["Presents a plain text signature challenge to the user and returns the signed response.\nEquivalent to ",(0,s.jsx)(n.code,{children:"eth_sign"})," on some other wallets, and prepends a safe prefix to the signed message to\nprevent the challenge tricking users into signing a financial transaction."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Message to sign: ",(0,s.jsx)(n.code,{children:"string"})," - Hex-encoded UTF-8 string to present to the user."]}),"\n",(0,s.jsxs)(n.li,{children:["Address: ",(0,s.jsx)(n.code,{children:"string"})," - Address of the requested signing account."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Signature: ",(0,s.jsx)(n.code,{children:"string"})," - Hex-encoded signature."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "personal_sign",\n  "params": [\n    "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n    "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"0x262d12322b75228d09bbe3c104b91c1df32794126ce6a851e5c2721deb42d60e20b6eff3a1e2b5d29c2680edfb42e8497dbd7e75d0591a390a9385861b40f73d1c"\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"eth_signtransaction",children:(0,s.jsx)(n.code,{children:"eth_signTransaction"})}),"\n",(0,s.jsxs)(n.p,{children:["Signs a transaction that can be submitted to the network later using\n",(0,s.jsx)(n.a,{href:"https://ethereum.org/developers/docs/apis/json-rpc#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Transaction object to sign, which contains:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ",(0,s.jsx)(n.a,{href:"https://docs.infura.io/api/networks/ethereum/concepts/transaction-types",children:"Transaction type."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Anti-replay parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Recipient address, or ",(0,s.jsx)(n.code,{children:"null"})," if this is a contract creation transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Sender address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Value to be transferred, in wei."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Compiled code of a contract OR hash of the invoked method signature and\nencoded parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Gas provided by the sender."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasPrice"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Gas price, in wei, provided by the sender."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Maximum fee, in wei, the sender is willing to\npay per gas above the base fee."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxFeePerGas"}),":",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Maximum total fee (base fee + priority fee), in wei, the\nsender is willing to pay per gas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"accessList"}),": ",(0,s.jsx)(n.code,{children:"object[]"})," - (Optional) List of addresses and storage keys the transaction plans to access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Chain ID."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"A signature object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ECDSA Recovery ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ECDSA signature r."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ECDSA signature s."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"EIP-1559 request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_signTransaction",\n  "params": [\n    {\n      "type": "0x2",\n      "nonce": "0x1",\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "from": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x",\n      "gasLimit": "0x5208",\n      "maxPriorityFeePerGas": "0x3b9aca00",\n      "maxFeePerGas": "0x2540be400",\n      "accessList": [],\n      "chainId": "0xaa36a7"\n    }\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Legacy request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_signTransaction",\n  "params": [\n    {\n      "type": "0x0",\n      "nonce": "0x0",\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "from": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x",\n      "gasLimit": "0x5208",\n      "gasPrice": "0x2540be400",\n      "chainId": "0xaa36a7"\n    }\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "v": "0x1",\n  "r": "0x51991c5099327d3c7eaa745de60c52a93555e5cbc418eb9b405fe92d986dee08",\n  "s": "0x65b1d20a39360c31de69f872244e23a3549b702e11bc7d8eb3586812ac62be8d"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"eth_signtypeddata_v4",children:(0,s.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"\n",(0,s.jsxs)(n.p,{children:["Presents a data message for the user to sign in a structured and readable format, and returns the\nsigned response.\nIntroduced by ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Address: ",(0,s.jsx)(n.code,{children:"string"})," - Address of the requested signing account."]}),"\n",(0,s.jsxs)(n.li,{children:["Typed data: ",(0,s.jsx)(n.code,{children:"object"})," - Typed data object containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"types"}),": ",(0,s.jsx)(n.code,{children:"object"})," - Types object containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EIP712Domain"}),": ",(0,s.jsx)(n.code,{children:"array"})," - Array specifying one or more of the following domain separator values:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," - User-readable name of the signing domain, i.e., name of the dapp or the protocol."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"})," - Current major version of the signing domain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"})," - Chain ID of the network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verifyingContract"})," - Address of the contract that will verify the signature."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"salt"})," - Disambiguating salt for the protocol."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primaryType"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Primary type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"domain"}),": ",(0,s.jsx)(n.code,{children:"object"})," - Domain separator values specified in the ",(0,s.jsx)(n.code,{children:"EIP712Domain"})," type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"}),": ",(0,s.jsx)(n.code,{children:"object"})," - Message to present to the user."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Signature: ",(0,s.jsx)(n.code,{children:"string"})," - Hex-encoded signature."]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_signTypedData_v4",\n  "params": [\n    "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",\n    {\n      "types": {\n        "EIP712Domain": [\n          { "name": "name", "type": "string" },\n          { "name": "version", "type": "string" },\n          { "name": "chainId", "type": "uint256" },\n          { "name": "verifyingContract", "type": "address" }\n        ],\n        "Person": [\n          { "name": "name", "type": "string" },\n          { "name": "wallet", "type": "address" }\n        ],\n        "Mail": [\n          { "name": "from", "type": "Person" },\n          { "name": "to", "type": "Person" },\n          { "name": "contents", "type": "string" }\n        ]\n      },\n      "primaryType": "Mail",\n      "domain": {\n        "name": "Ether Mail",\n        "version": "1",\n        "chainId": 1,\n        "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"\n      },\n      "message": {\n        "from": {\n          "name": "Cow",\n          "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"\n        },\n        "to": {\n          "name": "Bob",\n          "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"\n        },\n        "contents": "Hello, Bob!"\n      }\n    }\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b6f72307f996231605b915621c"\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"deprecated-methods",children:"Deprecated methods"}),"\n",(0,s.jsxs)(n.p,{children:["Snaps can also implement ",(0,s.jsx)(n.a,{href:"/wallet/concepts/signing-methods/#deprecated-signing-methods",children:"deprecated signing\nmethods"})," that some dapps might use."]}),"\n",(0,s.jsx)(n.h2,{id:"erc-4337-methods",children:"ERC-4337 methods"}),"\n",(0,s.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,s.jsxs)(n.p,{children:["The following methods are used by ",(0,s.jsx)(n.a,{href:"/feat-reference-pages/snaps/features/custom-evm-accounts/#account-abstraction-erc-4337",children:"ERC-4337 accounts"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"eth_prepareuseroperation",children:(0,s.jsx)(n.code,{children:"eth_prepareUserOperation"})}),"\n",(0,s.jsx)(n.p,{children:"Prepares a new user operation from transaction data."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Transaction intents object, which contains:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Recipient address, or ",(0,s.jsx)(n.code,{children:"null"})," if this is a contract creation transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Value to be transferred, in wei."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Compiled code of a contract OR hash of the invoked method signature and\nencoded parameters."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"A user operation details object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Data to pass to the sender during the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initCode"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account bytecode (needed if and only if the account is not yet on-chain and\nneeds to be created)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Anti-replay parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasLimits"})," - (Optional) Gas limits object containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verificationGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the verification step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preVerificationGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for ",(0,s.jsx)(n.code,{children:"callData"}),", and to account for overhead that can't be tracked on-chain."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dummySignature"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Dummy ",(0,s.jsx)(n.code,{children:"signature"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dummyPaymasterAndData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Dummy ",(0,s.jsx)(n.code,{children:"paymasterAndData"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bundlerUrl"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Bundler URL."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_prepareUserOperation",\n  "params": [\n    {\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "value": "0x0",\n      "data": "0x"\n    },\n    {\n      "to": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x619a309f"\n    }\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n  "initCode": "0x22ff1dc5998258faa1ea45a776b57484f8ab80a2296601cd0000000000000000000000005147ce3947a407c95687131be01a2b8d55fd0a400000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000007d91ea6a0bc4a4238cd72386d935e35e3d8c318400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x1",\n  "gasLimits": {\n    "callGasLimit": "0x58a83",\n    "verificationGasLimit": "0xe8c4",\n    "preVerificationGas": "0xc57c"\n  },\n  "dummySignature": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "dummyPaymasterAndData": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "bundlerUrl": "https://bundler.example.com/rpc"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"eth_patchuseroperation",children:(0,s.jsx)(n.code,{children:"eth_patchUserOperation"})}),"\n",(0,s.jsx)(n.p,{children:"Patches some allowed properties of a user operation."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["User operation object, which contains:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sender"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account making the operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Data to pass to the sender during the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initCode"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account bytecode (needed if and only if the account is not yet on-chain\nand needs to be created)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Anti-replay parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verificationGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the verification step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preVerificationGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for callData, and to account for overhead that can't be tracked on-chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxFeePerGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Maximum total fee the sender is willing to pay per gas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Maximum fee the sender is willing to pay per gas above the\nbase fee."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"paymasterAndData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Data passed into the account along with the nonce during the\nverification step."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"A partial user operation object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"paymasterAndData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Amount of gas to allocate to the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verificationGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Amount of gas to allocate to the verification step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preVerificationGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Amount of gas to compensate the bundler for\npre-verification execution, to pay for callData, and to account for overhead that can't be tracked on-chain."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_patchUserOperation",\n  "params": [\n    {\n      "sender": "0x4584d2B4905087A100420AFfCe1b2d73fC69B8E4",\n      "nonce": "0x1",\n      "initCode": "0x",\n      "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n      "callGasLimit": "0x58a83",\n      "verificationGasLimit": "0xe8c4",\n      "preVerificationGas": "0xc57c",\n      "maxFeePerGas": "0x87f0878c0",\n      "maxPriorityFeePerGas": "0x1dcd6500",\n      "paymasterAndData": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "signature": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n    }\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "paymasterAndData": "0x952514d7cBCB495EACeB86e02154921401dB0Cd9dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000779b3fbb00000000000000006565b267000000000000000000000000000000000000000029195b31a9b1c6ccdeff53e359ebbcd5f075a93c1aaed93302e5fde5faf8047028b296b8a3fa4e22b063af5069ae9f656736ffda0ee090c0311155722b905f781b",\n  "callGasLimit": "0x58a83",\n  "verificationGasLimit": "0xe8c4",\n  "preVerificationGas": "0xc57c"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"eth_signuseroperation",children:(0,s.jsx)(n.code,{children:"eth_signUserOperation"})}),"\n",(0,s.jsx)(n.p,{children:"Signs a user operation."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An array containing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["User operation object, which contains:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sender"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account making the operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Data to pass to the sender during the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initCode"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account bytecode (needed if and only if the account is not yet on-chain\nand needs to be created)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Anti-replay parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the main execution call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verificationGasLimit"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to allocate to the verification step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preVerificationGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for callData, and to account for overhead that can't be tracked on-chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxFeePerGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Maximum total fee the sender is willing to pay per gas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxPriorityFeePerGas"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Maximum fee the sender is willing to pay per gas above the\nbase fee."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"paymasterAndData"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Data passed into the account along with the nonce during the\nverification step."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Entry point: ",(0,s.jsx)(n.code,{children:"string"})," - Hash of the entry point contract."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Signature: ",(0,s.jsx)(n.code,{children:"string"})," - Hex-encoded signature."]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "eth_signUserOperation",\n  "params": [\n    {\n      "sender": "0x4584d2B4905087A100420AFfCe1b2d73fC69B8E4",\n      "nonce": "0x1",\n      "initCode": "0x",\n      "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n      "callGasLimit": "0x58a83",\n      "verificationGasLimit": "0xe8c4",\n      "preVerificationGas": "0xc57c",\n      "maxFeePerGas": "0x87f0878c0",\n      "maxPriorityFeePerGas": "0x1dcd6500",\n      "paymasterAndData": "0x952514d7cBCB495EACeB86e02154921401dB0Cd9dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000779b3fbb00000000000000006565b267000000000000000000000000000000000000000029195b31a9b1c6ccdeff53e359ebbcd5f075a93c1aaed93302e5fde5faf8047028b296b8a3fa4e22b063af5069ae9f656736ffda0ee090c0311155722b905f781b",\n      "signature": "0x"\n    },\n    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"\n  ]\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"0x6565acc7efd3c85e4c0c221c2958ff6c3ae68401b23b33fdcd1a2d49034c30d97b1cfa17487b90253a5dfd54ef5188688592c2fd56ba44ee4d948ea259d636cd550f6dd21b"\n'})})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>t});a(96540);var s=a(18215);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function t(e){let{children:n,hidden:a,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,t),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>A});var s=a(96540),r=a(18215),i=a(23104),t=a(56347),c=a(205),d=a(57485),l=a(31682),o=a(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,t.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,d.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=x(e),[t,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,h]=p({queryString:a,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),m=(()=>{const e=l??j;return u({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{m&&d(m)}),[m]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function b(e){let{className:n,block:a,selectedValue:s,selectValue:t,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),o=e=>{const n=e.currentTarget,a=d.indexOf(n),r=c[a].value;r!==s&&(l(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var s=a(96540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);