"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[61462],{43107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),c=n(28453);const o={description:"Create and deploy a smart contract."},s="Deploy a contract using web3.js",a={id:"tutorials/ethereum/deploy-a-contract-using-web3.js",title:"Deploy a contract using web3.js",description:"Create and deploy a smart contract.",source:"@site/services/tutorials/ethereum/deploy-a-contract-using-web3.js.md",sourceDirName:"tutorials/ethereum",slug:"/tutorials/ethereum/deploy-a-contract-using-web3.js",permalink:"/test-integrate-infura/services/tutorials/ethereum/deploy-a-contract-using-web3.js",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/ethereum/deploy-a-contract-using-web3.js.md",tags:[],version:"current",frontMatter:{description:"Create and deploy a smart contract."}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Fund your Ethereum account",id:"1-fund-your-ethereum-account",level:3},{value:"2. Create a project directory",id:"2-create-a-project-directory",level:3},{value:"3. Install required packages",id:"3-install-required-packages",level:3},{value:"4. Create the <code>.env</code> file",id:"4-create-the-env-file",level:3},{value:"5. Create a smart contract",id:"5-create-a-smart-contract",level:3},{value:"6. Create the compile script",id:"6-create-the-compile-script",level:3},{value:"7. Run the compile script",id:"7-run-the-compile-script",level:3},{value:"8. Create the deployment script",id:"8-create-the-deployment-script",level:3},{value:"9. Deploy the contract",id:"9-deploy-the-contract",level:3},{value:"10. Update the .env file",id:"10-update-the-env-file",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"deploy-a-contract-using-web3js",children:"Deploy a contract using web3.js"}),"\n",(0,r.jsx)(t.p,{children:"In this tutorial, you'll create a simple smart contract and use the Web3 JavaScript library to compile and then deploy the smart contract."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["An ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/get-started/infura",children:"Ethereum project"})," on Infura"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js installed"})}),"\n",(0,r.jsx)(t.li,{children:"An Ethereum account for testing purposes"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"https://metamask.io",children:"MetaMask"})," or similar to create an Ethereum account for testing purposes."]})}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(t.h3,{id:"1-fund-your-ethereum-account",children:"1. Fund your Ethereum account"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.infura.io/faucet",children:"Use the Infura faucet to load testnet ETH"})," on your Ethereum account for the Sepolia network."]}),"\n",(0,r.jsxs)(t.p,{children:["If using a network other than Sepolia, ensure you ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/tutorials/ethereum/deploy-a-contract-using-web3.js#10-update-the-env-file",children:"update your environment file"})," with the network name."]}),"\n",(0,r.jsx)(t.h3,{id:"2-create-a-project-directory",children:"2. Create a project directory"}),"\n",(0,r.jsx)(t.p,{children:"Create a new directory for your project. You can do this from the command line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir deployContract\n"})}),"\n",(0,r.jsx)(t.p,{children:"Change into the new directory:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd deployContract\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-install-required-packages",children:"3. Install required packages"}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"web3"}),", ",(0,r.jsx)(t.code,{children:"solc"}),", and ",(0,r.jsx)(t.code,{children:"dotenv"})," packages in the project directory."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"../../tutorials/developer-tools/javascript-dotenv.md",children:(0,r.jsx)(t.code,{children:"dotenv"})})," package allows you to use a ",(0,r.jsx)(t.code,{children:".env"})," file to securely store private environment variables on your local machine."]})}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"web3"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install web3\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This example has been written for web3js v4.x. It may not work for earlier versions."})}),"\n",(0,r.jsxs)(t.p,{children:["Install the solidity compiler (",(0,r.jsx)(t.code,{children:"solc"})," package):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install solc\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.code,{children:"dotenv"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install dotenv\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"4-create-the-env-file",children:["4. Create the ",(0,r.jsx)(t.code,{children:".env"})," file"]}),"\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:".env"})," file in your project directory to store the project and Ethereum account details."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'ETHEREUM_NETWORK = "sepolia"\nINFURA_API_KEY = "<Your-API-Key>"\nSIGNER_PRIVATE_KEY = "<Your-Private-Key>"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Ensure you replace the following values in the ",(0,r.jsx)(t.code,{children:".env"})," file:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Your-API-Key>"})," with the API key of the Ethereum project."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<Private-Key>"})," with the ",(0,r.jsx)(t.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key",children:"private key of your Ethereum account"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If using a network other than Sepolia, ensure you update ",(0,r.jsx)(t.code,{children:"ETHEREUM_NETWORK"})," with the network name."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"Never disclose your private key. Anyone with your private keys can steal any assets held in your account."})}),"\n",(0,r.jsx)(t.h3,{id:"5-create-a-smart-contract",children:"5. Create a smart contract"}),"\n",(0,r.jsxs)(t.p,{children:["Using an editor, create a smart contract. In this example, we'll create a basic contract called ",(0,r.jsx)(t.code,{children:"Demo.sol"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"pragma solidity >=0.5.8;\n\ncontract Demo {\n    event Echo(string message);\n\n    function echo(string calldata message) external {\n        emit Echo(message);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"6-create-the-compile-script",children:"6. Create the compile script"}),"\n",(0,r.jsx)(t.p,{children:"We need to compile the contract to ensure the code is correct."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You can compile the smart contract using the ",(0,r.jsxs)(t.a,{href:"https://docs.soliditylang.org/en/develop/using-the-compiler.html",children:[(0,r.jsx)(t.code,{children:"solc"})," command line options"]}),". In this example, we'll create a compile script using JavaScript."]})}),"\n",(0,r.jsxs)(t.p,{children:["Create a file called ",(0,r.jsx)(t.code,{children:"compile.js"})," with the following content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const fs = require("fs").promises;\nconst solc = require("solc");\n\nasync function main() {\n  // Load the contract source code\n  const sourceCode = await fs.readFile("Demo.sol", "utf8");\n  // Compile the source code and retrieve the ABI and Bytecode\n  const { abi, bytecode } = compile(sourceCode, "Demo");\n  // Store the ABI and Bytecode into a JSON file\n  const artifact = JSON.stringify({ abi, bytecode }, null, 2);\n  await fs.writeFile("Demo.json", artifact);\n}\n\nfunction compile(sourceCode, contractName) {\n  // Create the Solidity Compiler Standard Input and Output JSON\n  const input = {\n    language: "Solidity",\n    sources: { main: { content: sourceCode } },\n    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },\n  };\n  // Parse the compiler output to retrieve the ABI and Bytecode\n  const output = solc.compile(JSON.stringify(input));\n  const artifact = JSON.parse(output).contracts.main[contractName];\n  return {\n    abi: artifact.abi,\n    bytecode: artifact.evm.bytecode.object,\n  };\n}\n\nmain()\n'})}),"\n",(0,r.jsx)(t.h3,{id:"7-run-the-compile-script",children:"7. Run the compile script"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/tutorials/ethereum/deploy-a-contract-using-web3.js#6-create-the-compile-script",children:"compile script"})," we'll also copy the generated ",(0,r.jsx)(t.a,{href:"https://docs.soliditylang.org/en/develop/abi-spec.html",children:"Application Binary Interface (ABI)"})," and binary to a file called ",(0,r.jsx)(t.code,{children:"Demo.json"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To compile the contract run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"node compile.js\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A file called ",(0,r.jsx)(t.code,{children:"Demo.json"})," should be created in the directory."]}),"\n",(0,r.jsx)(t.h3,{id:"8-create-the-deployment-script",children:"8. Create the deployment script"}),"\n",(0,r.jsxs)(t.p,{children:["Next, we'll create a deployment script called ",(0,r.jsx)(t.code,{children:"deploy.js"}),". The script uses the Web3 methods to sign the transaction and deploy the smart contract to the network."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const { Web3 } = require("web3");\n\n// Loading the contract ABI and Bytecode\n// (the results of a previous compilation step)\nconst fs = require("fs");\nconst { abi, bytecode } = JSON.parse(fs.readFileSync("Demo.json"));\n\nasync function main() {\n  // Configuring the connection to an Ethereum node\n  const network = process.env.ETHEREUM_NETWORK;\n  const web3 = new Web3(\n    new Web3.providers.HttpProvider(\n      `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,\n    ),\n  );\n  // Creating a signing account from a private key\n  const signer = web3.eth.accounts.privateKeyToAccount(\n    \'0x\' + process.env.SIGNER_PRIVATE_KEY,\n  );\n  web3.eth.accounts.wallet.add(signer);\n\n  // Using the signing account to deploy the contract\n  const contract = new web3.eth.Contract(abi);\n  contract.options.data = bytecode;\n  const deployTx = contract.deploy();\n  const deployedContract = await deployTx\n    .send({\n      from: signer.address,\n      gas: await deployTx.estimateGas(),\n    })\n    .once("transactionHash", (txhash) => {\n      console.log(`Mining deployment transaction ...`);\n      console.log(`https://${network}.etherscan.io/tx/${txhash}`);\n    });\n  // The contract is now deployed on chain!\n  console.log(`Contract deployed at ${deployedContract.options.address}`);\n  console.log(\n    `Add DEMO_CONTRACT to the.env file to store the contract address: ${deployedContract.options.address}`,\n  );\n}\n\nrequire("dotenv").config();\nmain();\n'})}),"\n",(0,r.jsx)(t.h3,{id:"9-deploy-the-contract",children:"9. Deploy the contract"}),"\n",(0,r.jsx)(t.p,{children:"Run the deployment script to deploy the contract to the blockchain:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"node deploy.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"The contract deploys to the blockchain and the script displays the contract address."}),"\n",(0,r.jsxs)(t.p,{children:["To make calls to the contract in the future we'll need the contract address. Next we'll update the ",(0,r.jsx)(t.code,{children:".env"})," file to store the contract address."]}),"\n",(0,r.jsx)(t.h3,{id:"10-update-the-env-file",children:"10. Update the .env file"}),"\n",(0,r.jsxs)(t.p,{children:["Update the .",(0,r.jsx)(t.code,{children:"env"})," file in the working directory to include the contract address. In this example, we'll add the ",(0,r.jsx)(t.code,{children:"DEMO_CONTRACT"})," variable:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'ETHEREUM_NETWORK = "sepolia"\nINFURA_API_KEY = "<Your-API-Key>"\nSIGNER_PRIVATE_KEY = "<Your-Private-Key>"\nDEMO_CONTRACT = "<Contract_Address>"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["You can now make ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/tutorials/ethereum/call-a-contract",children:"calls to the deployed contract"}),". A contract call is a transaction that will consume gas on the public Ethereum network."]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const c={},o=r.createContext(c);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);