"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[53],{10939:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=s(74848),r=s(28453);const o={description:"Schedule periodic actions for your users.",sidebar_position:1},a="Cron jobs",i={id:"features/cron-jobs",title:"Cron jobs",description:"Schedule periodic actions for your users.",source:"@site/snaps/features/cron-jobs.md",sourceDirName:"features",slug:"/features/cron-jobs",permalink:"/feat-reference-pages/snaps/features/cron-jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/cron-jobs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Schedule periodic actions for your users.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Features",permalink:"/feat-reference-pages/snaps/features"},next:{title:"Custom EVM accounts",permalink:"/feat-reference-pages/snaps/features/custom-evm-accounts/"}},c={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Configure a cron job",id:"1-configure-a-cron-job",level:3},{value:"2. Implement a cron job handler",id:"2-implement-a-cron-job-handler",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cron-jobs",children:"Cron jobs"}),"\n",(0,t.jsx)(n.p,{children:'You can schedule actions to run periodically at fixed times or intervals, also known as "cron jobs."\nFor example, you can display a dialog or notification in MetaMask at a specific time each day.'}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-configure-a-cron-job",children:"1. Configure a cron job"}),"\n",(0,t.jsxs)(n.p,{children:["To configure a cron job, request the ",(0,t.jsx)(n.a,{href:"/feat-reference-pages/snaps/reference/permissions#endowmentcronjob",children:(0,t.jsx)(n.code,{children:"endowment:cronjob"})}),"\npermission, specifying one or more cron jobs in the ",(0,t.jsx)(n.code,{children:"jobs"})," array.\nDefine each job with a ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm",children:"cron expression"}),"\nand a request object, which MetaMask sends to the Snap's cron job handler when the job is executed."]}),"\n",(0,t.jsx)(n.p,{children:"For example, to configure a job that executes every minute, add the following to your Snap's manifest file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "execute"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-implement-a-cron-job-handler",children:"2. Implement a cron job handler"}),"\n",(0,t.jsxs)(n.p,{children:["Expose an ",(0,t.jsx)(n.a,{href:"/feat-reference-pages/snaps/reference/entry-points#oncronjob",children:(0,t.jsx)(n.code,{children:"onCronjob"})})," entry point, which is triggered at\nthe specified schedule with the requests defined in the ",(0,t.jsx)(n.code,{children:"endowment:cronjob"})," permission.\nThe following example handles the ",(0,t.jsx)(n.code,{children:"execute"})," method specified in the previous example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "execute":\n      // Cron jobs can execute any method that is available to the Snap.\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "alert",\n          content: panel([\n            heading("Cron job"),\n            text("This dialog was triggered by a cron job."),\n          ]),\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"Access data from cron jobs",type:"tip",children:[(0,t.jsxs)(n.p,{children:["When accessing ",(0,t.jsx)(n.a,{href:"/feat-reference-pages/snaps/features/data-storage#2-use-encrypted-storage",children:"encrypted data"})," from cron jobs, MetaMask\nrequires the user to enter their password if the wallet is locked.\nThis interaction can be confusing to the user, since the Snap accesses the data in the background\nwithout the user being aware."]}),(0,t.jsxs)(n.p,{children:["If the cron job requires access to encrypted state, use\n",(0,t.jsx)(n.a,{href:"/feat-reference-pages/snaps/reference/snaps-api#snap_getclientstatus",children:(0,t.jsx)(n.code,{children:"snap_getClientStatus"})})," to ensure that MetaMask is\nunlocked before accessing state.\nThis will prevent an unexpected password request, improving the user's experience."]}),(0,t.jsxs)(n.p,{children:["If the cron job does not require access to sensitive data, store that data in\n",(0,t.jsx)(n.a,{href:"/feat-reference-pages/snaps/features/data-storage#3-use-unencrypted-storage",children:"unencrypted state"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/cronjobs",children:(0,t.jsx)(n.code,{children:"@metamask/cronjob-example-snap"})}),"\npackage for a full example of implementing cron jobs."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);