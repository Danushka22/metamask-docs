"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3476],{65739:(e,r,n)=>{n.d(r,{Ay:()=>i,RM:()=>s});var t=n(74848),a=n(28453);const s=[];function o(e){const r={p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(r.p,{children:"Returns an estimate of how much priority fee, in wei, you need to be included in a block."})}function i(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},5339:(e,r,n)=>{n.d(r,{Ay:()=>i,RM:()=>s});var t=n(74848),a=n(28453);const s=[];function o(e){const r={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(r.p,{children:["Replace ",(0,t.jsx)(r.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(r.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},10353:(e,r,n)=>{n.d(r,{Ay:()=>i,RM:()=>s});var t=n(74848),a=n(28453);const s=[];function o(e){const r={p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(r.p,{children:"None."})}function i(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},15772:(e,r,n)=>{n.d(r,{Ay:()=>u,RM:()=>i});var t=n(74848),a=n(28453),s=n(11470),o=n(19365);const i=[];function c(e){const r={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(s.A,{children:(0,t.jsx)(o.A,{value:"JSON",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x55d4a80"\n}\n'})})})})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},82732:(e,r,n)=>{n.d(r,{Ay:()=>i,RM:()=>s});var t=n(74848),a=n(28453);const s=[];function o(e){const r={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"result"}),": A hexadecimal value of the priority fee, in wei, needed to be included in a block."]})}function i(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},80594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>y,frontMatter:()=>m,metadata:()=>x,toc:()=>b});var t=n(74848),a=n(28453),s=n(11470),o=n(19365),i=n(65739),c=n(10353),u=n(82732),l=n(5339);function d(e){const r={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"cURL",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})}),(0,t.jsx)(o.A,{value:"WSS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/d23391e03c6d40738530a1b4b679e66e -x \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var h=n(15772);const m={title:"eth_maxPriorityFeePerGas"},f=void 0,x={id:"reference/ethereum/json-rpc-methods/eth_maxpriorityfeepergas",title:"eth_maxPriorityFeePerGas",description:"Parameters",source:"@site/services/reference/ethereum/json-rpc-methods/eth_maxpriorityfeepergas.mdx",sourceDirName:"reference/ethereum/json-rpc-methods",slug:"/reference/ethereum/json-rpc-methods/eth_maxpriorityfeepergas",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_maxpriorityfeepergas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/ethereum/json-rpc-methods/eth_maxpriorityfeepergas.mdx",tags:[],version:"current",frontMatter:{title:"eth_maxPriorityFeePerGas"},sidebar:"servicesSidebar",previous:{title:"eth_hashrate",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_hashrate"},next:{title:"eth_mining",permalink:"/test-integrate-infura/services/reference/ethereum/json-rpc-methods/eth_mining"}},v={},b=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...u.RM,{value:"Example",id:"example",level:2},...l.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const r={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(r.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(r.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(h.Ay,{})]})}function y(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>R});var t=n(96540),a=n(18215),s=n(23104),o=n(56347),i=n(205),c=n(57485),u=n(31682),l=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=p(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,l.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),l=e=>{const r=e.currentTarget,n=c.indexOf(r),a=i[n].value;a!==t&&(u(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:d,onClick:l,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function R(e){const r=(0,x.A)();return(0,b.jsx)(g,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);