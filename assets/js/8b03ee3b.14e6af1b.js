"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[549],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(f,s(s({ref:a},p),{},{components:t})):n.createElement(f,s({ref:a},p))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8906:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},s="What is a Namespace",l={unversionedId:"tutorial-basics/step_3_namespace",id:"tutorial-basics/step_3_namespace",title:"What is a Namespace",description:"A namespace is a map of the module's name to it's IP address that its served on. The purpose of this is for navigation over modules across the internet. Namespaces can be local to you, between you and a few buds, or global across the network.",source:"@site/docs/tutorial-basics/step_3_namespace.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/step_3_namespace",permalink:"/docs/next/tutorial-basics/step_3_namespace",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/step_3_namespace.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy a Module",permalink:"/docs/next/tutorial-basics/step_2_deploy_a_module"},next:{title:"Connect a Module",permalink:"/docs/next/tutorial-basics/step_4_connect_a_module"}},c={},i=[{value:"Local Namespace",id:"local-namespace",level:2},{value:"Remote Namespace",id:"remote-namespace",level:2},{value:"Adding a Remote Namespace",id:"adding-a-remote-namespace",level:3},{value:"Adding a Single Module",id:"adding-a-single-module",level:3},{value:"Global Namespace",id:"global-namespace",level:2}],p={toc:i},d="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-namespace"},"What is a Namespace"),(0,o.kt)("p",null,"A namespace is a map of the module's name to it's IP address that its served on. The purpose of this is for navigation over modules across the internet. Namespaces can be local to you, between you and a few buds, or global across the network. "),(0,o.kt)("h2",{id:"local-namespace"},"Local Namespace"),(0,o.kt)("p",null,"A local namespace is a namespace that solely exissts on your computer. These consist of your modules that are running locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"c.namespace('local')\n")),(0,o.kt)("h2",{id:"remote-namespace"},"Remote Namespace"),(0,o.kt)("p",null,"A remote namespace is any namespace that is not local. This refers to any modules that exist outside of your module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"c.namespace('remote')\n")),(0,o.kt)("h3",{id:"adding-a-remote-namespace"},"Adding a Remote Namespace"),(0,o.kt)("p",null,"To add a remote namespace, you will need to know the address of a module from another local namepsace. Every module by default has access to the namespace. To add a remote namespace, you need to add a peer's address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"c.add_peer('123.456.789:8888')\n\n# this merges the namespace on the remote peer to yours\n\n")),(0,o.kt)("h3",{id:"adding-a-single-module"},"Adding a Single Module"),(0,o.kt)("p",null,"To add a single module instead of an entire namespace, just add the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# this will add a single module to the remote namespace, not the entire remote namespace that that module consists of\nc.add_module('123.456.789:8888')\n")),(0,o.kt)("h1",{id:"security-considerations"},"Security Considerations"),(0,o.kt)("p",null,"You need to be careful for who you add or who can add you. To disable people from adding you, blacklist any functions that give away such information, as seen in step 2 (deploy module)."),(0,o.kt)("h2",{id:"global-namespace"},"Global Namespace"),(0,o.kt)("p",null,"A global namespace combines both of your local and remote namespaces"))}u.isMDXComponent=!0}}]);