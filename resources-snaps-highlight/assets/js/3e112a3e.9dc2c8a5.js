"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2894],{45991:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(74848),s=t(28453),a=t(11470),i=t(19365);const o={description:"Reference content for the Gas API."},l="API reference",c={id:"gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/gas-api/api-reference/index.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/",permalink:"/resources-snaps-highlight/services/gas-api/api-reference/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/index.md",tags:[],version:"current",frontMatter:{description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/resources-snaps-highlight/services/gas-api/supported-networks"},next:{title:"Get the base fee history",permalink:"/resources-snaps-highlight/services/gas-api/api-reference/basefeehistory"}},u={},d=[{value:"Supported API request formats",id:"supported-api-request-formats",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"api-reference",children:"API reference"}),"\n",(0,n.jsx)(r.p,{children:"This section provides reference information for the various Gas REST APIs.\nUse the APIs to:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/resources-snaps-highlight/services/gas-api/api-reference/gasprices-type2",children:"Get EIP-1559 gas prices."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/resources-snaps-highlight/services/gas-api/api-reference/basefeehistory",children:"Get the base fee history (in Gwei)."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/resources-snaps-highlight/services/gas-api/api-reference/basefeepercentile",children:"Get the base fee percentile (in Gwei)."})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/resources-snaps-highlight/services/gas-api/api-reference/busythreshold",children:"Get the busy threshold for a network."})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"supported-api-request-formats",children:"Supported API request formats"}),"\n",(0,n.jsx)(r.p,{children:"You can call the Gas APIs in two ways:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Using the API key only"})," - Add your ",(0,n.jsx)(r.a,{href:"https://docs.infura.io/dashboard/secure-an-api/api-key",children:"API key"}),"\nas a path option."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Using the API key and API key secret"})," - Use basic authentication and specify the API key\nand ",(0,n.jsx)(r.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(i.A,{value:"API key only",label:"Use an API key only",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' \"https://gas.api.infura.io/v3/<API_KEY>/networks/1/suggestedGasFees\"\n"})})}),(0,n.jsx)(i.A,{value:"API key and API key secret",label:"Use an API key and API key secret",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -X 'GET' -u <API_KEY>:<API_KEY_SECRET> \"https://gas.api.infura.io/networks/1/suggestedGasFees\"\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>A});var n=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,d]=f({queryString:t,groupId:s}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,u.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),g=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),s=o[t].value;s!==n&&(c(r),i(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function I(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function A(e){const r=(0,m.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);