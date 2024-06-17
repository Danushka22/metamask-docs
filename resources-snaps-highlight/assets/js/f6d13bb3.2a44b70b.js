"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8228],{94967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=s(74848),a=s(28453),r=s(11470),o=s(19365);const i={description:"Solve common issues.",sidebar_position:1},l="Troubleshoot common issues",c={id:"how-to/debug-a-snap/common-issues",title:"Troubleshoot common issues",description:"Solve common issues.",source:"@site/snaps/how-to/debug-a-snap/common-issues.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/common-issues",permalink:"/resources-snaps-highlight/snaps/how-to/debug-a-snap/common-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/common-issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Solve common issues.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Debug a Snap",permalink:"/resources-snaps-highlight/snaps/how-to/debug-a-snap/"},next:{title:"Publish a Snap",permalink:"/resources-snaps-highlight/snaps/how-to/publish-a-snap"}},h={},u=[{value:"Fix build and evaluation issues",id:"fix-build-and-evaluation-issues",level:2},{value:"Use other build tools",id:"use-other-build-tools",level:3},{value:"Patch dependencies",id:"patch-dependencies",level:2},{value:"Patch the use of <code>XMLHttpRequest</code>",id:"patch-the-use-of-xmlhttprequest",level:3},{value:"cross-fetch",id:"cross-fetch",level:4},{value:"axios",id:"axios",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"troubleshoot-common-issues",children:"Troubleshoot common issues"}),"\n",(0,t.jsx)(n.p,{children:"This page describes common issues you may encounter when developing a Snap, and how to resolve them."}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter any issues that you can't solve on your own, please\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps-monorepo/issues",children:"open a GitHub issue"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fix-build-and-evaluation-issues",children:"Fix build and evaluation issues"}),"\n",(0,t.jsxs)(n.p,{children:["Because ",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/learn/about-snaps/execution-environment",children:"Secure ECMAScript (SES)"})," adds additional restrictions\non the JavaScript runtime on top of strict mode, code that executes normally under strict mode might\nnot under SES.\n",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/reference/cli/subcommands#b-build",children:(0,t.jsx)(n.code,{children:"yarn mm-snap build"})})," by default attempts to execute a\nSnap in a stubbed SES environment.\nYou can also disable this behavior and run the evaluation step separately using\n",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/reference/cli/subcommands#e-eval",children:(0,t.jsx)(n.code,{children:"yarn mm-snap eval"})}),".\nIf an error is thrown during this step, it's likely due to a SES incompatibility, and you must fix\nthe issues manually.\nThese incompatibilities tend to occur in dependencies."]}),"\n",(0,t.jsxs)(n.p,{children:["The errors you get from SES are usually easy to fix.\nThe actual file, function, and variable names in the ",(0,t.jsx)(n.code,{children:"eval"})," error stack trace might not make sense\nto you, but the line numbers should correspond to your Snap ",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/learn/about-snaps/files#bundle-file",children:"bundle file"}),".\nThus, you can identify if the error is due to your code or one of your dependencies.\nIf the problem is in a dependency, you can try a different version or to fix the issue locally by\nusing tools such as ",(0,t.jsx)(n.a,{href:"https://npmjs.com/package/patch-package",children:(0,t.jsx)(n.code,{children:"patch-package"})})," (see how to\n",(0,t.jsx)(n.a,{href:"#patch-dependencies",children:"patch dependencies"}),") or by modifying the bundle file directly."]}),"\n",(0,t.jsxs)(n.p,{children:['To give you an idea of a common error and how to fix it, "sloppily" declared variables (i.e.\nassigning to a new variable without an explicit variable declaration) are forbidden in strict mode,\nand therefore in SES as well.\nIf you get an error during the ',(0,t.jsx)(n.code,{children:"eval"})," step that says something like ",(0,t.jsx)(n.code,{children:"variableName is not defined"}),",\nsimply prepending ",(0,t.jsx)(n.code,{children:"var variableName;"})," to your Snap bundle may solve the problem.\n(This actually happened so frequently with ",(0,t.jsx)(n.a,{href:"https://babeljs.io/",children:"Babel's"})," ",(0,t.jsx)(n.code,{children:"regeneratorRuntime"})," that\n",(0,t.jsx)(n.code,{children:"yarn mm-snap build"})," automatically handles that one.)"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/reference/cli/subcommands#m-manifest",children:(0,t.jsx)(n.code,{children:"yarn mm-snap manifest --fix"})})," if you modified\nyour Snap bundle after building.\nOtherwise your manifest ",(0,t.jsx)(n.code,{children:"shasum"})," value won't be correct, and attempting to install your Snap fails."]})}),"\n",(0,t.jsx)(n.h3,{id:"use-other-build-tools",children:"Use other build tools"}),"\n",(0,t.jsx)(n.p,{children:"If you prefer building your Snap with a build system you're more comfortable with, Snaps implements\nplugins for several other build systems:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@metamask/snaps-webpack-plugin",children:"Webpack"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@metamask/rollup-plugin-snaps",children:"Rollup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@metamask/snaps-browserify-plugin",children:"Browserify"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For examples on how to set up these build systems yourself, please see the\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps-monorepo/tree/main/packages/examples/examples",children:"examples"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend running ",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/reference/cli/subcommands#m-manifest",children:(0,t.jsx)(n.code,{children:"yarn mm-snap manifest --fix"})}),"\nafter creating your bundle to make sure your manifest ",(0,t.jsx)(n.code,{children:"shasum"})," value is correct.\nYou might also benefit from running ",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/reference/cli/subcommands#e-eval",children:(0,t.jsx)(n.code,{children:"yarn mm-snap eval"})}),"\nto detect any SES issues up front."]}),"\n",(0,t.jsx)(n.h2,{id:"patch-dependencies",children:"Patch dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Some dependencies might use APIs that aren't available in the\n",(0,t.jsx)(n.a,{href:"/resources-snaps-highlight/snaps/learn/about-snaps/execution-environment",children:"Snaps execution environment"}),".\nTo work around this, we recommend checking if another library is available that makes use of those APIs."]}),"\n",(0,t.jsxs)(n.p,{children:["If you can't find another library (or version) that works with the Snaps execution environment, you\ncan patch the dependency yourself using ",(0,t.jsx)(n.a,{href:"https://npmjs.com/package/patch-package",children:(0,t.jsx)(n.code,{children:"patch-package"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"patch-package"})," allows you to make changes to your dependencies, saving the changes as a patch and\nreplaying it when installing dependencies."]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"patch-package"})," using Yarn:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add -D patch-package postinstall-postinstall\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then add a postinstall script to your ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",metastring:'title="package.json"',children:' "scripts": {\n+  "postinstall": "patch-package"\n }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now you can make changes to your dependencies inside ",(0,t.jsx)(n.code,{children:"node_modules"})," and run\n",(0,t.jsx)(n.code,{children:"yarn patch-package package-name"})," to save the changes as a patch.\nThis creates a ",(0,t.jsx)(n.code,{children:".patch"})," file containing your dependency patch.\nThese patches can be committed to your Git repository and are replayed when you re-install your dependencies."]}),"\n",(0,t.jsxs)(n.h3,{id:"patch-the-use-of-xmlhttprequest",children:["Patch the use of ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"})," API is not exposed in the Snaps execution environment and won't be in the future.\nBecause of this, you may run into issues with dependencies in your dependency tree attempting to\nuse this API for their network requests."]}),"\n",(0,t.jsxs)(n.p,{children:["The following are examples of popular libraries that use ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"})," and are thus ",(0,t.jsx)(n.strong,{children:"not"}),"\ncompatible with the Snaps execution environment.\nThis section also describes patching strategies for fixing dependencies that try to use these libraries."]}),"\n",(0,t.jsx)(n.h4,{id:"cross-fetch",children:"cross-fetch"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cross-fetch"})," is a popular library used for cross-platform access to the ",(0,t.jsx)(n.code,{children:"fetch"})," API across multiple\nenvironments.\nUnder the hood, however, the library uses ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"})," and thus causes issues when used in a Snap."]}),"\n",(0,t.jsxs)(n.p,{children:["You can easily patch this issue using ",(0,t.jsx)(n.code,{children:"patch-package"}),".\nOpen ",(0,t.jsx)(n.code,{children:"node_modules/cross-fetch/browser-ponyfill.js"})," and find the following lines near the bottom of\nthe file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="browser-ponyfill.js"',children:"// Choose between native implementation (global) or custom implementation (__self__)\n// var ctx = global.fetch ? global : __self__;\nvar ctx = __self__; // this line disable service worker support temporarily\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can replace that with the following snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="browser-ponyfill.js"',children:"// Choose between native implementation (global) or custom implementation (__self__)\nvar ctx = global.fetch\n  ? { ...global, fetch: global.fetch.bind(global) }\n  : __self__;\n// var ctx = __self__; // this line disable service worker support temporarily\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After replacing it, run ",(0,t.jsx)(n.code,{children:"yarn patch-package cross-fetch"}),", which saves the patch for future use."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can use the following patch, copy and paste it to\n",(0,t.jsx)(n.code,{children:"patches/cross-fetch+3.1.5.patch"}),", and re-install your dependencies:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"diff --git a/node_modules/cross-fetch/dist/browser-ponyfill.js b/node_modules/cross-fetch/dist/browser-ponyfill.js\nindex f216aa3..6b3263b 100644\n--- a/node_modules/cross-fetch/dist/browser-ponyfill.js\n+++ b/node_modules/cross-fetch/dist/browser-ponyfill.js\n@@ -543,8 +543,8 @@ __self__.fetch.ponyfill = true;\n // Remove \"polyfill\" property added by whatwg-fetch\n delete __self__.fetch.polyfill;\n // Choose between native implementation (global) or custom implementation (__self__)\n-// var ctx = global.fetch ? global : __self__;\n-var ctx = __self__; // this line disable service worker support temporarily\n+var ctx = global.fetch ? { ...global, fetch: global.fetch.bind(global) } : __self__;\n+// var ctx = __self__; // this line disable service worker support temporarily\n exports = ctx.fetch // To enable: import fetch from 'cross-fetch'\n exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.\n exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Using either of these methods allows your dependencies to access the ",(0,t.jsx)(n.code,{children:"fetch"})," API correctly and\n",(0,t.jsx)(n.code,{children:"cross-fetch"})," compatible with the Snaps execution environment."]}),"\n",(0,t.jsx)(n.h4,{id:"axios",children:"axios"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"axios"})," is a popular networking library that uses ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"})," under the hood."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, there's no known way of patching ",(0,t.jsx)(n.code,{children:"axios"})," to work with the Snaps execution environment.\nInstead, you must replace ",(0,t.jsx)(n.code,{children:"axios"})," with another library such as ",(0,t.jsx)(n.code,{children:"isomorphic-fetch"})," or\n",(0,t.jsx)(n.code,{children:"isomorphic-unfetch"}),", or simply use the Snaps execution environment global ",(0,t.jsx)(n.code,{children:"fetch"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of how you can rewrite your dependency to use ",(0,t.jsx)(n.code,{children:"fetch"})," instead of ",(0,t.jsx)(n.code,{children:"axios"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In a production environment this may be a large task depending on the usage of ",(0,t.jsx)(n.code,{children:"axios"}),"."]})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"axios",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const instance = axios.create({\n  baseURL: "https://api.github.com/",\n});\n\ninstance\n  .get("users/MetaMask")\n  .then((res) => {\n    if (res.status >= 400) {\n      throw new Error("Bad response from server");\n    }\n    return res.data;\n  })\n  .then((user) => {\n    console.log(user);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n'})})}),(0,t.jsx)(o.A,{value:"fetch",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'fetch("https://api.github.com/users/MetaMask")\n  .then((res) => {\n    if (!res.ok) {\n        throw new Error("Bad response from server");\n    }\n    return res.json();\n  })\n  .then((json) => console.log(json))\n  .catch((err) => console.error(err));\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see how to\n",(0,t.jsx)(n.a,{href:"https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper",children:"replace axios with a simple custom fetch wrapper"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),a=s(18215),r=s(23104),o=s(56347),i=s(205),l=s(57485),c=s(31682),h=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=d(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:s,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,h.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function j(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),h=e=>{const n=e.currentTarget,s=l.indexOf(n),a=i[s].value;a!==t&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:a}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);