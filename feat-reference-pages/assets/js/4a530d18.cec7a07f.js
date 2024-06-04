"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1697],{37352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(74848),r=t(28453);const s={sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},i="Use MetaMask SDK with Android",l={id:"how-to/use-sdk/mobile/android",title:"Use MetaMask SDK with Android",description:"Set up the SDK in your Android dapp.",source:"@site/wallet/how-to/use-sdk/mobile/android.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/android",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/mobile/android",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/android.md",tags:[{label:"Android SDK",permalink:"/feat-reference-pages/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"iOS",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/mobile/ios"},next:{title:"Third-party libraries",permalink:"/feat-reference-pages/wallet/how-to/use-sdk/3rd-party-libraries/"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"3.1. Use the provider object directly",id:"31-use-the-provider-object-directly",level:4},{value:"3.2. Use a ViewModel",id:"32-use-a-viewmodel",level:4},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Sign message",id:"example-sign-message",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example: Switch chain",id:"example-switch-chain",level:4},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"use-metamask-sdk-with-android",children:"Use MetaMask SDK with Android"}),"\n",(0,a.jsxs)(n.p,{children:["Import ",(0,a.jsx)(n.a,{href:"/feat-reference-pages/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your native Android dapp to enable\nyour users to easily connect with their MetaMask Mobile wallet."]}),"\n",(0,a.jsx)(n.admonition,{title:"See also",type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/feat-reference-pages/wallet/concepts/sdk/android",children:"Android SDK architecture"})}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical\ndevice or emulator).\nYou can install MetaMask Mobile from ",(0,a.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=io.metamask",children:"Google Play"}),",\nor clone and compile MetaMask Mobile from ",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-mobile",children:"source"}),"\nand build to your target device."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Android SDK version 23 or later."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(n.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsxs)(n.p,{children:["To add the SDK from Maven Central as a dependency to your project, in your ",(0,a.jsx)(n.code,{children:"app/build.gradle"})," file,\nadd the following entry to the ",(0,a.jsx)(n.code,{children:"dependencies"})," block:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gradle",metastring:'title="build.gradle"',children:'dependencies {\n  implementation "io.metamask.androidsdk:metamask-android-sdk:0.2.1"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then, sync your project with the Gradle settings.\nOnce the syncing completes, you can set up the rest of your project."}),"\n",(0,a.jsx)(n.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(n.p,{children:"Import the SDK by adding the following line to the top of your project file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"import io.metamask.androidsdk.Ethereum\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-connect-your-dapp",children:"3. Connect your dapp"}),"\n",(0,a.jsx)(n.p,{children:"You can connect your dapp to MetaMask in one of two ways:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.a,{href:"#31-use-the-provider-object-directly",children:["Use the ",(0,a.jsx)(n.code,{children:"ethereum"})," provider object directly"]}),".\nWe recommend using this method in a pure model layer."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#32-use-a-viewmodel",children:"Use a ViewModel"})," that injects the ",(0,a.jsx)(n.code,{children:"ethereum"})," provider object.\nWe recommend using this method at the app level, because it provides a single instance that\nsurvives configuration changes and can be shared across all views."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Logging",type:"note",children:(0,a.jsxs)(n.p,{children:["By default, MetaMask logs three SDK events: ",(0,a.jsx)(n.code,{children:"connection_request"}),", ",(0,a.jsx)(n.code,{children:"connected"}),", and ",(0,a.jsx)(n.code,{children:"disconnected"}),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,a.jsx)(n.code,{children:"ethereum.enableDebug = false"}),"."]})}),"\n",(0,a.jsx)(n.h4,{id:"31-use-the-provider-object-directly",children:"3.1. Use the provider object directly"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"ethereum"})," provider object directly to connect your dapp to MetaMask by adding the following\ncode to your project file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@AndroidEntryPoint\nclass SomeModel(private val repository: ApplicationRepository) {\n  val ethereum = Ethereum(context)\n\n  val dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n  // This is the same as calling eth_requestAccounts.\n  ethereum.connect(dapp) { result ->\n    if (result is RequestError) {\n      Log.e(TAG, "Ethereum connection error: ${result.message}")\n    } else {\n      Log.d(TAG, "Ethereum connection result: $result")\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"32-use-a-viewmodel",children:"3.2. Use a ViewModel"}),"\n",(0,a.jsxs)(n.p,{children:["To connect your dapp to MetaMask using a ViewModel, create a ViewModel that injects the\n",(0,a.jsx)(n.code,{children:"ethereum"})," provider object, then add wrapper functions for each Ethereum method you wish to call."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use a dependency manager such as ",(0,a.jsx)(n.a,{href:"https://developer.android.com/training/dependency-injection/hilt-android",children:"Hilt"}),"\nto initialize the ViewModel and maintain its state across configuration changes.\nIf you use Hilt, your setup might look like the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="EthereumViewModel.kt"',children:"@HiltViewModel\nclass EthereumViewModel @Inject constructor(\n  private val ethereum: Ethereum\n): ViewModel() {\n\n  val ethereumState = MediatorLiveData<EthereumState>().apply {\n    addSource(ethereum.ethereumState) { newEthereumState ->\n      value = newEthereumState\n    }\n  }\n\n  // Wrapper function to connect the dapp.\n  fun connect(dapp: Dapp, callback: ((Any?) -> Unit)?) {\n    ethereum.connect(dapp, callback)\n  }\n\n  // Wrapper function call all RPC methods.\n  fun sendRequest(request: EthereumRequest, callback: ((Any?) -> Unit)?) {\n    ethereum.sendRequest(request, callback)\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"To use the ViewModel, add the following code to your project file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val ethereumViewModel: EthereumViewModel by viewModels()\n\nval dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n// This is the same as calling eth_requestAccounts.\nethereum.connect(dapp) { result ->\n  if (result is RequestError) {\n    Log.e(TAG, "Ethereum connection error: ${result.message}")\n  } else {\n    Log.d(TAG, "Ethereum connection result: $result")\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See the example dapp's\n",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-android-sdk/blob/main/app/src/main/java/com/metamask/dapp/EthereumViewModel.kt",children:(0,a.jsx)(n.code,{children:"EthereumViewModel.kt"})}),"\nfile for more information."]}),"\n",(0,a.jsx)(n.h3,{id:"4-call-methods",children:"4. Call methods"}),"\n",(0,a.jsxs)(n.p,{children:["You can now call any ",(0,a.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API method"})," using\n",(0,a.jsx)(n.code,{children:"ethereum.sendRequest()"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"example-get-account-balance",children:"Example: Get account balance"}),"\n",(0,a.jsxs)(n.p,{children:["The following example gets the user's account balance by calling\n",(0,a.jsx)(n.a,{href:"/wallet/reference/eth_getBalance",children:(0,a.jsx)(n.code,{children:"eth_getBalance"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'var balance: String? = null\n\n// Create parameters.\nval params: List<String> = listOf(\n  ethereum.selectedAddress,\n  // "latest", "earliest", or "pending" (optional)\n  "latest"\n)\n\n// Create request.\nval getBalanceRequest = EthereumRequest(\n  method = EthereumMethod.ETHGETBALANCE.value,\n  params = params\n)\n\n// Make request.\nethereum.sendRequest(getBalanceRequest) { result ->\n  if (result is RequestError) {\n    // Handle error.\n  } else {\n    balance = result\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-sign-message",children:"Example: Sign message"}),"\n",(0,a.jsxs)(n.p,{children:["The following example requests the user sign a message by calling\n",(0,a.jsx)(n.a,{href:"/wallet/reference/eth_signTypedData_v4",children:(0,a.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val message = "{\\"domain\\":{\\"chainId\\":\\"${ethereum.chainId}\\",\\"name\\":\\"Ether Mail\\",\\"verifyingContract\\":\\"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC\\",\\"version\\":\\"1\\"},\\"message\\":{\\"contents\\":\\"Hello, Busa!\\",\\"from\\":{\\"name\\":\\"Kinno\\",\\"wallets\\":[\\"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826\\",\\"0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF\\"]},\\"to\\":[{\\"name\\":\\"Busa\\",\\"wallets\\":[\\"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB\\",\\"0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57\\",\\"0xB0B0b0b0b0b0B000000000000000000000000000\\"]}]},\\"primaryType\\":\\"Mail\\",\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"version\\",\\"type\\":\\"string\\"},{\\"name\\":\\"chainId\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"verifyingContract\\",\\"type\\":\\"address\\"}],\\"Group\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"members\\",\\"type\\":\\"Person[]\\"}],\\"Mail\\":[{\\"name\\":\\"from\\",\\"type\\":\\"Person\\"},{\\"name\\":\\"to\\",\\"type\\":\\"Person[]\\"},{\\"name\\":\\"contents\\",\\"type\\":\\"string\\"}],\\"Person\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"wallets\\",\\"type\\":\\"address[]\\"}]}}"\n\nval from = ethereum.selectedAddress\nval params: List<String> = listOf(from, message)\n\nval signRequest = EthereumRequest(\n  method = EthereumMethod.ETH_SIGN_TYPED_DATA_V4.value,\n  params = params\n)\n\nethereum.sendRequest(signRequest) { result ->\n  if (result is RequestError) {\n    Log.e(TAG, "Ethereum sign error: ${result.message}")\n  } else {\n    Log.d(TAG, "Ethereum sign result: $result")\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-send-transaction",children:"Example: Send transaction"}),"\n",(0,a.jsxs)(n.p,{children:["The following example sends a transaction by calling\n",(0,a.jsx)(n.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,a.jsx)(n.code,{children:"eth_sendTransaction"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// Create parameters.\nval from = ethereum.selectedAddress\nval to = "0x0000000000000000000000000000000000000000"\nval amount = "0x01"\nval params: Map<String, Any> = mapOf(\n  "from" to from,\n  "to" to to,\n  "amount" to amount\n)\n\n// Create request.\nval transactionRequest = EthereumRequest(\n  method = EthereumMethod.ETH_SEND_TRANSACTION.value,\n  params = listOf(params)\n)\n\n// Make a transaction request.\nethereum.sendRequest(transactionRequest) { result ->\n  if (result is RequestError) {\n    // Handle error.\n  } else {\n    Log.d(TAG, "Ethereum transaction result: $result")\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-switch-chain",children:"Example: Switch chain"}),"\n",(0,a.jsxs)(n.p,{children:["The following example switches to a new Ethereum chain by calling\n",(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_switchethereumchain",children:(0,a.jsx)(n.code,{children:"wallet_switchEthereumChain"})})," and\n",(0,a.jsx)(n.a,{href:"/wallet/reference/wallet_addethereumchain",children:(0,a.jsx)(n.code,{children:"wallet_addEthereumChain"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun switchChain(\n  chainId: String,\n  onSuccess: (message: String) -> Unit,\n  onError: (message: String, action: (() -> Unit)?) -> Unit\n) {\n  val switchChainParams: Map<String, String> = mapOf("chainId" to chainId)\n  val switchChainRequest = EthereumRequest(\n    method = EthereumMethod.SWITCH_ETHEREUM_CHAIN.value,\n    params = listOf(switchChainParams)\n  )\n\n  ethereum.sendRequest(switchChainRequest) { result ->\n    if (result is RequestError) {\n      if (result.code == ErrorType.UNRECOGNIZED_CHAIN_ID.code || result.code == ErrorType.SERVER_ERROR.code) {\n        val message = "${Network.chainNameFor(chainId)} ($chainId) has not been added to your MetaMask wallet. Add chain?"\n\n        val action: () -> Unit = {\n          addEthereumChain(\n            chainId,\n            onSuccess = { result -> onSuccess(result) },\n            onError = { error -> onError(error, null) }\n          )\n        }\n        onError(message, action)\n      } else {\n        onError("Switch chain error: ${result.message}", null)\n      }\n    } else {\n      onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n    }\n  }\n}\n\nprivate fun addEthereumChain(\n  chainId: String,\n  onSuccess: (message: String) -> Unit,\n  onError: (message: String) -> Unit\n) {\n  Logger.log("Adding chainId: $chainId")\n\n  val addChainParams: Map<String, Any> = mapOf(\n    "chainId" to chainId,\n    "chainName" to Network.chainNameFor(chainId),\n    "rpcUrls" to Network.rpcUrls(Network.fromChainId(chainId))\n  )\n  val addChainRequest = EthereumRequest(\n    method = EthereumMethod.ADD_ETHEREUM_CHAIN.value,\n    params = listOf(addChainParams)\n  )\n\n  ethereum.sendRequest(addChainRequest) { result ->\n    if (result is RequestError) {\n      onError("Add chain error: ${result.message}")\n    } else {\n      if (chainId == ethereum.chainId) {\n        onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n      } else {\n        onSuccess("Successfully added ${Network.chainNameFor(chainId)} ($chainId)")\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app",children:"example Android dapp"})," in\nthe Android SDK GitHub repository for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);