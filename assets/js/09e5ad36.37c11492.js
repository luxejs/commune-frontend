"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},l="Create a Module",i={unversionedId:"tutorial-basics/step_1_create_a_module",id:"tutorial-basics/step_1_create_a_module",title:"Create a Module",description:"Before creating a module, we will need to go over the following:",source:"@site/docs/tutorial-basics/step_1_create_a_module.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/step_1_create_a_module",permalink:"/commune-ai.github.io/docs/next/tutorial-basics/step_1_create_a_module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/step_1_create_a_module.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/commune-ai.github.io/docs/next/category/basics"},next:{title:"Deploy a Module",permalink:"/commune-ai.github.io/docs/next/tutorial-basics/step_2_deploy_a_module"}},s={},c=[{value:"Way 1: Config and Python Class",id:"way-1-config-and-python-class",level:3},{value:"Way 2: Python only, no config",id:"way-2-python-only-no-config",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-module"},"Create a Module"),(0,a.kt)("p",null,"Before creating a module, we will need to go over the following: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Module Path")," is the path from the root directory in commune to a specific module. These module paths are used to reference modules easily using a string. For instance, if a module is place in commune/model/llm, then its module path is model.llm"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Module Tree")," is a collection of all of the module paths in your local folder. This forms a tree that is defined by the user")),(0,a.kt)("p",null,"If a module is defined outside of the commune directory, then it will not be recorded in the module tree, but can still be used with most of the commune.Modules functions that are not related to the module tree."),(0,a.kt)("h3",{id:"way-1-config-and-python-class"},"Way 1: Config and Python Class"),(0,a.kt)("p",null,"A module can be instantiated as a config paired with a python file. These are both contained within a folder as follows. In this example, we are following the buzz train and creating the Nth LLM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Module path of model.llm\ncommune\\\n  model\\\n    llm\\\n      llm_model.py\n      llm_model.yaml\n")),(0,a.kt)("p",null,"This creates a module path that represents the module path from commune, so in this case it would be ",(0,a.kt)("strong",{parentName:"p"},"model.llm")),(0,a.kt)("p",null,"The config and python class are as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"model": "text-davinci-003"\n"tokenizer": "gpt2"\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import commune as c\nclass LLM(c.Module):\n  def __init__(self,config=None):\n    # set the config , if None, use the default yaml\n    self.set_config(config)\n\n    # do whatever the fuck else you want \n    self.set_tokenizer(self.config.tokenizer)\n    self.set_model(self.config.model)\n  def set_model(model:str):\n    ...\n  def set_tokenizer(tokenizer: str): \n    ...\n\n\n")),(0,a.kt)("h3",{id:"way-2-python-only-no-config"},"Way 2: Python only, no config"),(0,a.kt)("p",null,"Now lets define the same module without a config for those that hate configs. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Module path of model.llm\ncommune\\\n  model\\\n    llm.py\n")),(0,a.kt)("p",null,"With the python file being"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import commune as c\nclass LLM(c.Module):\n  def __init__(self, model='text-davinci-003', tokenizer='gpt2'):\n    # note how we dont need to set the config\n    self.set_tokenizer(tokenizer)\n    self.set_model(model)\n  def set_model(model:str):\n    ...\n  def set_tokenizer(tokenizer: str): \n    ...\n\n\n")),(0,a.kt)("p",null,"If you want your module to be contianed within a directory without affecting the module path"))}m.isMDXComponent=!0}}]);