"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5246],{82109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const o={description:"Create a single component React dapp with local state using EIP-6963.",sidebar_position:1},i="Create a React dapp with local state",a={id:"tutorials/react-dapp-local-state",title:"Create a React dapp with local state",description:"Create a single component React dapp with local state using EIP-6963.",source:"@site/wallet/tutorials/react-dapp-local-state.md",sourceDirName:"tutorials",slug:"/tutorials/react-dapp-local-state",permalink:"/feat-reference-pages/wallet/tutorials/react-dapp-local-state",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/tutorials/react-dapp-local-state.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a single component React dapp with local state using EIP-6963.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Tutorials",permalink:"/feat-reference-pages/wallet/tutorials"},next:{title:"Create a simple dapp",permalink:"/feat-reference-pages/wallet/tutorials/javascript-dapp-simple"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Import EIP-6963 interfaces",id:"2-import-eip-6963-interfaces",level:3},{value:"3. Create store file",id:"3-create-store-file",level:3},{value:"4. Sync provider state with React component",id:"4-sync-provider-state-with-react-component",level:3},{value:"5. Create connect buttons",id:"5-create-connect-buttons",level:3},{value:"6. Show connected wallet address",id:"6-show-connected-wallet-address",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Doesn&#39;t look right?",id:"doesnt-look-right",level:4},{value:"Doesn&#39;t function properly?",id:"doesnt-function-properly",level:4},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-react-dapp-with-local-state",children:"Create a React dapp with local state"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial walks you through integrating a simple React dapp with MetaMask.\nThe dapp has a single JSX component, which is used for managing local state.\nYou'll use the ",(0,r.jsx)(n.a,{href:"https://v3.vitejs.dev/guide",children:"Vite"})," build tool with React and TypeScript to create\nthe dapp."]}),"\n",(0,r.jsx)(n.admonition,{title:"Why React?",type:"tip",children:(0,r.jsx)(n.p,{children:"React is familiar to most web developers and is standard in web3.\nIt makes it easy to work with state management, build components that use a one-way data flow, and\nre-render those components upon state changes."})}),"\n",(0,r.jsx)(n.admonition,{title:"Project source code",type:"info",children:(0,r.jsxs)(n.p,{children:["You can view the ",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/vite-react-local-tutorial",children:"dapp source code on GitHub"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," version 18+"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," version 9+"]}),"\n",(0,r.jsxs)(n.li,{children:["A text editor (for example, ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://metamask.io/download",children:"MetaMask extension"})," installed"]}),"\n",(0,r.jsx)(n.li,{children:"Basic knowledge of JavaScript and React"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-set-up-the-project",children:"1. Set up the project"}),"\n",(0,r.jsx)(n.p,{children:"Set up a new project using Vite, React, and TypeScript by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm create vite@latest mm-dapp-react -- --template react-ts\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install the node module dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd mm-dapp-react && npm install\n"})}),"\n",(0,r.jsx)(n.p,{children:"Launch the development server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This displays a ",(0,r.jsx)(n.code,{children:"localhost"})," URL in your terminal, where you can view the dapp in your browser."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If the development server has been stopped, you can re-run your project using the ",(0,r.jsx)(n.code,{children:"npx vite"})," or\n",(0,r.jsx)(n.code,{children:"npm run dev"})," command."]})}),"\n",(0,r.jsxs)(n.p,{children:["Open the project in your editor.\nTo start with a blank slate, replace the code in ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," with the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import "./App.css"\n\nconst App = () => {\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n    </div>\n  )\n}\n\nexport default App\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-import-eip-6963-interfaces",children:"2. Import EIP-6963 interfaces"}),"\n",(0,r.jsxs)(n.p,{children:["Your dapp will connect to MetaMask using the mechanism introduced by\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Why EIP-6963?",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"})," introduces an alternative wallet detection\nmechanism to the ",(0,r.jsx)(n.code,{children:"window.ethereum"})," injected provider.\nThis alternative mechanism enables dapps to support\n",(0,r.jsx)(n.a,{href:"/feat-reference-pages/wallet/concepts/wallet-interoperability",children:"wallet interoperability"})," by discovering multiple injected\nwallet providers in a user's browser."]})}),"\n",(0,r.jsxs)(n.p,{children:["Update the Vite environment variable file, ",(0,r.jsx)(n.code,{children:"src/vite-env.d.ts"}),", with the types and interfaces\nneeded for ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"})," and\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="vite-env.d.ts"',children:'/// <reference types="vite/client" />\n\n// Describes metadata related to a provider according to EIP-6963.\ninterface EIP6963ProviderInfo {\n  walletId: string\n  uuid: string\n  name: string\n  icon: string\n}\n\n// Represents the structure of an Ethereum provider based on the EIP-1193 standard.\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n\n// Combines the provider\'s metadata with an actual provider object, creating a complete picture of a\n// wallet provider at a glance.\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\n// Represents the structure of an event dispatched by a wallet to announce its presence based on EIP-6963.\ntype EIP6963AnnounceProviderEvent = {\n  detail:{\n    info: EIP6963ProviderInfo\n    provider: EIP1193Provider\n  }\n}\n\n// An error object with optional properties, commonly encountered when handling eth_requestAccounts errors.\ninterface MMError {\n  code?: string\n  message?: string\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-create-store-file",children:"3. Create store file"}),"\n",(0,r.jsx)(n.p,{children:"Create a store file to manage the state of the detected wallet providers.\nThis file provides a centralized place to store and synchronize the detected wallet providers,\nensuring that your dapp always has access to the latest provider information."}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"src/hooks"})," directory, and create a file ",(0,r.jsx)(n.code,{children:"store.ts"})," in that directory with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="store.ts"',children:'// Extends WindowEventMap interface, including a custom event eip6963:announceProvider.\ndeclare global{\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// Array that stores detected wallet providers and their details.\nlet providers: EIP6963ProviderDetail[] = []\n\n// Object containing two methods. The store holds the state of detected Ethereum wallet providers.\n// It\'s implemented as an external store, making it available for subscription and synchronization\n// across the dapp.\nexport const store = {\n  // Returns the current state of providers.\n  value: ()=> providers,\n  // Subscribes to provider announcements and updates the store accordingly.\n  // Takes a callback function to be invoked on each store update, returning a function to\n  // unsubscribe from the event.\n  subscribe: (callback: ()=> void) => {\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n    window.addEventListener("eip6963:announceProvider", onAnnouncement);\n    window.dispatchEvent(new Event("eip6963:requestProvider"));\n\n    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4-sync-provider-state-with-react-component",children:"4. Sync provider state with React component"}),"\n",(0,r.jsxs)(n.p,{children:["With the store in place, create a custom hook that synchronizes the provider state with the React component.\nUse the ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:(0,r.jsx)(n.code,{children:"useSyncExternalStore"})})," React hook\nto subscribe to changes in the provider store, and to ensure the component re-renders whenever\nthe store updates."]}),"\n",(0,r.jsxs)(n.p,{children:["Create a file ",(0,r.jsx)(n.code,{children:"useSyncProviders.ts"})," in the ",(0,r.jsx)(n.code,{children:"hooks"})," directory with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="useSyncProviders.ts"',children:'import { useSyncExternalStore } from "react";\nimport { store } from "./store";\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useSyncExternalStore"})," takes three arguments:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A subscription function to listen for changes in the external store (",(0,r.jsx)(n.code,{children:"store.subscribe"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["A function to get the current value of the store (",(0,r.jsx)(n.code,{children:"store.value"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["An initial value for the store (",(0,r.jsx)(n.code,{children:"store.value"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["As an alternative to ",(0,r.jsx)(n.code,{children:"useSyncExternalStore"}),", you can use the ",(0,r.jsx)(n.code,{children:"useState"})," React hook to manage the\nprovider state, and the ",(0,r.jsx)(n.code,{children:"useEffect"})," React hook to subscribe to changes in the store.\nWhen the React component mounts, you can subscribe to changes in the store, set the initial state\nusing the current value from the store, and return a cleanup function to unsubscribe from the store\nwhen the component unmounts."]})}),"\n",(0,r.jsx)(n.h3,{id:"5-create-connect-buttons",children:"5. Create connect buttons"}),"\n",(0,r.jsx)(n.p,{children:"Create an array of buttons that the user can select to connect to the EIP-6963 wallet providers that\nyou detect."}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," to the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { useSyncProviders } from "./hooks/useSyncProviders"\nimport "./App.css"\n\nconst App = () => {\n  const providers = useSyncProviders()\n\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({\n        method: "eth_requestAccounts"\n      }) as string[]\n\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n      <div className="providers">\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n    </div>\n  )\n}\n\nexport default App\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To style the buttons, update ",(0,r.jsx)(n.code,{children:"src/App.css"})," to the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:'title="App.css"',children:".App {\n  min-width: 100vw;\n  min-height: 100vh;\n  text-align: center;\n}\n\n.providers {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n  gap: 1em;\n\n  padding: 0.6em 1.2em;\n}\n\n.providers button {\n  width: 12em;\n}\n\n.providers button img {\n  width: 2em;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"npm run dev"})," to test the dapp.\nMake sure you're signed in to MetaMask and that it's not currently connected to your dapp.\nIf you have multiple EIP-6963 wallets installed in your browser, something like the following should display:"]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"View of Dapp - Wallets Detected",src:t(70787).A+"",width:"1920",height:"1124"})})}),"\n",(0,r.jsx)(n.h3,{id:"6-show-connected-wallet-address",children:"6. Show connected wallet address"}),"\n",(0,r.jsx)(n.p,{children:"Indicate when a wallet has been connected to by displaying the user's address on the page."}),"\n",(0,r.jsxs)(n.p,{children:["Update everything above the ",(0,r.jsx)(n.code,{children:"return"})," statement in ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," to the following, which\nadds code to format and display user addresses, and handle errors:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import { useState } from "react"\nimport { useSyncProviders } from "./hooks/useSyncProviders"\nimport "./App.css"\n\nconst App = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>("")\n  const providers = useSyncProviders()\n\n  const [errorMessage, setErrorMessage] = useState("")\n  const clearError = () => setErrorMessage("")\n  const setError = (error: string) => setErrorMessage(error)\n  const isError = !!errorMessage\n\n  // Display a readable user address.\n  const formatAddress = (addr: string) => {\n    const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2)\n    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n  }\n\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({\n        method: "eth_requestAccounts"\n      }) as string[]\n\n      setSelectedWallet(providerWithInfo)\n      setUserAccount(accounts?.[0])\n    } catch (error) {\n      console.error(error)\n      const mmError: MMError = error as MMError\n      setError(`Code: ${mmError.code} \\nError Message: ${mmError.message}`)\n    }\n  }\n  ...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Below the ",(0,r.jsx)(n.code,{children:"return"})," statement in ",(0,r.jsx)(n.code,{children:"src/App.tsx"}),", update the ",(0,r.jsx)(n.code,{children:"div"})," with the class of ",(0,r.jsx)(n.code,{children:".App"})," to the\nfollowing:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'  ...\n  return (\n    <div className="App">\n      <h2>Wallets Detected:</h2>\n      <div className="providers">\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n      <hr />\n      <h2>{userAccount ? "" : "No"} Wallet Selected</h2>\n      {userAccount &&\n        <div className="selectedWallet">\n          <img src={selectedWallet?.info.icon} alt={selectedWallet?.info.name} />\n          <div>{selectedWallet?.info.name}</div>\n          <div>({formatAddress(userAccount)})</div>\n        </div>\n      }\n      <div className="mmError" style={isError ? { backgroundColor: "brown" } : {}}>\n        {isError &&\n          <div onClick={clearError}>\n            <strong>Error:</strong> {errorMessage}\n          </div>\n        }\n      </div>\n    </div>\n  )\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Add the following CSS to ",(0,r.jsx)(n.code,{children:"src/App.css"})," to style the error message:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:'title="App.css"',children:".mmError {\n  height: 36px;\n  padding: 16px;\n  color: #EFEFEF;\n  background-color: transparent;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Your dapp should look similar to the following:"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Final View of Dapp",src:t(83743).A+"",width:"1920",height:"1400"})})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,r.jsx)(n.h4,{id:"doesnt-look-right",children:"Doesn't look right?"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial creates ",(0,r.jsx)(n.code,{children:"className"}),"s for each section's parent ",(0,r.jsx)(n.code,{children:"div"})," in the JSX (HTML).\nIf your dapp does not look the same but functions properly, check the naming of your classes and\ntheir corresponding CSS."]}),"\n",(0,r.jsx)(n.h4,{id:"doesnt-function-properly",children:"Doesn't function properly?"}),"\n",(0,r.jsx)(n.p,{children:"Try the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check the code examples against your own."}),"\n",(0,r.jsxs)(n.li,{children:["Place ",(0,r.jsx)(n.code,{children:"console"})," statements in key areas such as ",(0,r.jsx)(n.code,{children:"handleConnect"})," and ",(0,r.jsx)(n.code,{children:"store"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Clone the\n",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/vite-react-local-tutorial",children:"GitHub repository containing the project source code"}),"\nand run it."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you find inconsistencies or erroneous code, feel free to create an issue on the repository."}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial walked you through creating a single component dapp using Vite, detecting wallet\nproviders using EIP-6963, and managing the state in React locally.\nYou can view the ",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/vite-react-local-tutorial",children:"project source code on GitHub"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["As a next step, you can ",(0,r.jsx)(n.a,{href:"/feat-reference-pages/wallet/tutorials/react-dapp-global-state",children:"create a React dapp with global state"}),".\nThis follow-up tutorial walks you through adding more than one component and working with global state.\nYou'll use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useContext",children:"React's Context API"})," to manage the state\nglobally and ensure that any component in your dapp can be aware and conditionally render or display\ninformation about your MetaMask wallet."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},83743:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/react-tutorial-01-final-08ab8d59bd1da18aa309c64abe48fcba.png"},70787:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/react-tutorial-01-start-cb3519b0104b9333e171e40d73bed0ef.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);