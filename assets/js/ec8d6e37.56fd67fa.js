"use strict";(self.webpackChunkcomplan_docs=self.webpackChunkcomplan_docs||[]).push([[2274],{569:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=r(4848),o=r(8453);const n={id:"reset-password-sequence",title:"Reset Password Sequence",sidebar_position:3},a=void 0,c={id:"winpcs3/auth/reset-password-sequence",title:"Reset Password Sequence",description:"",source:"@site/docs/winpcs3/auth/password-reset-sequence.md",sourceDirName:"winpcs3/auth",slug:"/winpcs3/auth/reset-password-sequence",permalink:"/docs/winpcs3/auth/reset-password-sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/complanusa/winpcs/tree/main/docs/docs/docs/winpcs3/auth/password-reset-sequence.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"reset-password-sequence",title:"Reset Password Sequence",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"(Sync) Authentication & Authorization Sequence",permalink:"/docs/winpcs3/auth/authentication-and-authorization-sequence"},next:{title:"CouchDb-PouchDb Data Sync",permalink:"/docs/category/couchdb-pouchdb-data-sync"}},i={},d=[];function u(e){const s={mermaid:"mermaid",...(0,o.R)(),...e.components};return(0,t.jsx)(s.mermaid,{value:"sequenceDiagram\n    actor User\n    User->>W3RB:ResetPassword()\n    W3RB--\x3e>User:ResetPasswordForm()\n    User->>ResetPasswordForm:SubmitUserEmail()\n    ResetPasswordForm->>CoreAppServer:resetPasswordEmailValidation(email)\n    CoreAppServer->>CoreAppServer:validateUser(email)\n    CoreAppServer->>CoreAppServer:generateResetPasswordPasscode()\n    CoreAppServer->>User:sendResetPasswordPasscodeEmail(passcode)\n    User->>ResetPasswordForm:SubmitSecretPasscode()\n    ResetPasswordForm->>CoreAppServer:validatePasscode(email,passcode)\n    User->>ResetPasswordForm:submitNewPassword()\n    ResetPasswordForm->>CoreAppServer:resetPassword(email,passcode,newPassword)"})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>c});var t=r(6540);const o={},n=t.createContext(o);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);