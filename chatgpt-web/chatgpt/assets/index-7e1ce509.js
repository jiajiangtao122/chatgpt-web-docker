import{c as H,u as K,a as W,_ as N,n as Y,t as j,f as q,m as X,o as Z,p as ee}from"./index-21c5a4bc.js";import"./crypto-js@4.1.1-5d2574b3.js";import{f as O,h as E,k as x,i as te,J as se,K as ae,L as ne,y as oe,M as le,q as ie,r as G,m as ce}from"./naive-ui@2.34.3_vue@3.2.47-b44668a5.js";import{d as M,j as F,f as S,E as h,K as I,H as e,k as o,b as s,L as a,F as J,N as A,G as D}from"./@vue_runtime-core@3.2.47-d9a89b1b.js";import{r as v,u as t,a as re}from"./@vue_reactivity@3.2.47-41cada1d.js";import{J as l,n as P}from"./@vue_shared@3.2.47-1870027e.js";import"./@vue_runtime-dom@3.2.47-1f3621cd.js";import"./@iconify_vue@4.1.0_vue@3.2.47-cce582b6.js";import"./pinia@2.0.33_typescript@4.9.5_vue@3.2.47-5b8e256c.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./vue-router@4.1.6_vue@3.2.47-becc39a8.js";import"./axios@1.3.4-aba6f0e0.js";import"./@vueuse_core@9.13.0_vue@3.2.47-ded97bfc.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-31ba0d1d.js";import"./vue-i18n@9.2.2_vue@3.2.47-f2ff64de.js";import"./@intlify_shared@9.2.2-6f62a0ce.js";import"./@intlify_core-base@9.2.2-e46b7bcb.js";import"./@intlify_message-compiler@9.2.2-e451351e.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./vooks@0.2.12_vue@3.2.47-6d2a1cf4.js";import"./evtd@0.2.4-b614532e.js";import"./katex@0.16.4-d49885c5.js";import"./@traptitech_markdown-it-katex@3.6.0-183244bb.js";import"./seemly@0.3.6-5600174a.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./treemate@0.3.11-25c27bff.js";import"./vueuc@0.4.51_vue@3.2.47-56f5039e.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-9765db09.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./lodash-es@4.17.21-cabc0acd.js";import"./date-fns@2.29.3-975a2d8f.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";function ue(){const g=new Date,c=g.getDate(),r=g.getMonth()+1;return`${g.getFullYear()}-${r}-${c}`}const de={class:"p-4 space-y-5 min-h-[200px]"},pe={class:"space-y-6"},me={class:"flex items-center"},fe={class:"text-red-600"},_e={class:"text-red-600"},ve={class:"text-green-600"},he={class:"text-green-600"},ge={class:"text-green-600"},ye=e("div",{class:"flex items-center hidden"},[e("span",null,[o("🧑‍🤝‍🧑 邀请您的朋友注册您和他都可以获得 "),e("span",{class:"text-green-600"},"10"),o(" 次免费次数。您的邀请链接为（可直接点击复制）："),e("a",{href:"",class:"text-green-600"},"https://xxx.com/auth?type=register&invite=NjI2MA"),o(" （⚠ 若系统检测到您自己邀请自己，则不会发送奖励 ）")])],-1),xe={class:"flex items-center space-x-4"},ke=e("span",{class:"flex-shrink-0 w-[100px]"},"用户昵称",-1),be={class:"w-[200px]"},we={class:"flex-shrink-0 w-[100px]"},Ce={class:"flex flex-wrap items-center gap-4"},Ne={class:"flex items-center space-x-4"},$e=e("span",{class:"flex-shrink-0 w-[100px]"},"设置主题",-1),Se={class:"flex flex-wrap items-center gap-4"},Ie={class:"flex items-center space-x-4"},Ue=e("span",{class:"flex-shrink-0 w-[100px]"},"设置语言",-1),Le={class:"flex flex-wrap items-center gap-4"},Te=M({__name:"General",setup(g){const c=H(),r=K(),{isMobile:k}=W(),f=O(),u=v({}),m=v(!1);async function d(){try{m.value=!0;const{data:n}=await Y();u.value=n}finally{m.value=!1}}F(()=>{d()});const z=S(()=>c.theme),U=S(()=>r.userInfo),b=v(U.value.name??""),L=S({get(){return c.language},set(n){c.setLanguage(n)}}),B=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],Q=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"}];function _(n){r.updateUserInfo(n),f.success(j("common.success"))}function y(){const n=ue(),p=localStorage.getItem("chatStorage")||"{}",i=JSON.stringify(JSON.parse(p),null,2),C=new Blob([i],{type:"application/json"}),T=URL.createObjectURL(C),$=document.createElement("a");$.href=T,$.download=`chat-store_${n}.json`,document.body.appendChild($),$.click(),document.body.removeChild($)}function w(n){const p=n.target;if(!p||!p.files)return;const i=p.files[0];if(!i)return;const C=new FileReader;C.onload=()=>{try{const T=JSON.parse(C.result);localStorage.setItem("chatStorage",JSON.stringify(T)),f.success(j("common.success")),location.reload()}catch{f.error(j("common.invalidFileFormat"))}},C.readAsText(i)}function R(){localStorage.removeItem("chatStorage"),location.reload()}function V(){const n=document.getElementById("fileInput");n&&n.click()}return(n,p)=>(h(),I("div",de,[e("div",pe,[e("div",me,[e("span",null,[o("🌼 尊敬的 "),e("span",fe,l(t(U).email),1),o(" 您好，您当前为 "),e("span",_e,l(u.value.level),1),o("，今日剩余可用对话次数为："),e("span",ve,l(u.value.freeRemainingTimes+u.value.cardRemainingTimes),1),o(" 次，其中包括免费次数 "),e("span",he,l(u.value.freeRemainingTimes),1),o(" 次，次卡套餐 "),e("span",ge,l(u.value.cardRemainingTimes),1),o(" 次（💡 若在过程中出现无结果或异常，将不会扣除您的次数）")])]),ye,e("div",xe,[ke,e("div",be,[s(t(E),{value:b.value,"onUpdate:value":p[0]||(p[0]=i=>b.value=i),placeholder:""},null,8,["value"])]),s(t(x),{size:"tiny",text:"",type:"primary",onClick:p[1]||(p[1]=i=>_({name:b.value}))},{default:a(()=>[o(l(n.$t("common.save")),1)]),_:1})]),e("div",{class:P(["flex items-center space-x-4",t(k)&&"items-start"])},[e("span",we,l(n.$t("setting.chatHistory")),1),e("div",Ce,[s(t(x),{size:"small",onClick:y},{icon:a(()=>[s(t(N),{icon:"ri:download-2-fill"})]),default:a(()=>[o(" "+l(n.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:w},null,32),s(t(x),{size:"small",onClick:V},{icon:a(()=>[s(t(N),{icon:"ri:upload-2-fill"})]),default:a(()=>[o(" "+l(n.$t("common.import")),1)]),_:1}),s(t(te),{placement:"bottom",onPositiveClick:R},{trigger:a(()=>[s(t(x),{size:"small"},{icon:a(()=>[s(t(N),{icon:"ri:close-circle-line"})]),default:a(()=>[o(" "+l(n.$t("common.clear")),1)]),_:1})]),default:a(()=>[o(" "+l(n.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Ne,[$e,e("div",Se,[(h(),I(J,null,A(B,i=>s(t(x),{key:i.key,size:"small",type:i.key===t(z)?"primary":void 0,onClick:C=>t(c).setTheme(i.key)},{icon:a(()=>[s(t(N),{icon:i.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Ie,[Ue,e("div",Le,[s(t(se),{style:{width:"140px"},value:t(L),options:Q,onUpdateValue:p[2]||(p[2]=i=>t(c).setLanguage(i))},null,8,["value"])])])])]))}}),ze={class:"p-4 space-y-4"},Be={key:0,class:"flex justify-between items-center"},Qe={class:"items-center"},Re={key:1,class:"items-center clear"},je={class:"flex items-center space-x-4"},De={class:"flex-1"},Me=M({__name:"About",setup(g){const c=O(),r=v(""),f=q("MjQ1NjI5NTYw"),u=S(()=>d.value||!r.value||r.value.trim()===""),m=v({website:"",register:""}),d=v(!1);async function z(){try{d.value=!0;const{data:_}=await X();m.value=_}finally{d.value=!1}}function U(){window.open(m.value.website.purchaseLink)}const b=v(null),L=v();async function B(){try{d.value=!0;const{data:_}=await Z();L.value=_}finally{d.value=!1}}const Q=async()=>{await ee(r.value).then(_=>{var y;_.status==="Success"?(c.success(_.message),location.reload()):((y=b.value)==null||y.focus(),c.error(_.message))})};return F(()=>{B(),z()}),(_,y)=>(h(),D(t(le),{show:d.value},{default:a(()=>[e("div",ze,[s(t(ae),{"x-gap":"12",cols:2},{default:a(()=>[(h(!0),I(J,null,A(L.value,(w,R)=>(h(),D(t(ne),null,{default:a(()=>[s(t(oe),{class:P({"mt-2":R>1}),title:w.name,hoverable:"",size:"medium"},{default:a(()=>[e("div",null,l(w.price)+"元",1)]),_:2},1032,["class","title"])]),_:2},1024))),256))]),_:1}),m.value.website.purchaseLinkEnable?(h(),I("div",Be,[e("div",Qe,[e("span",null,"🌼 购买卡密后请在下面进行核销，如遇问题请联系客服QQ："+l(t(f))+"~",1)]),s(t(x),{type:"success",onClick:U},{default:a(()=>[o(" 前往购买 ")]),_:1})])):(h(),I("div",Re,[e("span",null,"🌼 请联系客服QQ ："+l(t(f))+" 购买卡密并在下面进行核销",1)])),e("div",je,[e("div",De,[s(t(E),{ref_key:"cardNoRef",ref:b,value:r.value,"onUpdate:value":y[0]||(y[0]=w=>r.value=w),placeholder:"卡密"},null,8,["value"])]),s(t(x),{type:"success",disabled:t(u),onClick:Q},{default:a(()=>[o(" 核销 ")]),_:1},8,["disabled"])])])]),_:1},8,["show"]))}}),Ge={class:"ml-2"},Oe={class:"min-h-[100px]"},Ee=e("span",{class:"ml-2"},"套餐",-1),bt=M({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(g,{emit:c}){const r=g,k=v("General"),f=S({get(){return r.visible},set(u){c("update:visible",u)}});return(u,m)=>(h(),D(t(ce),{show:t(f),"onUpdate:show":m[1]||(m[1]=d=>re(f)?f.value=d:null),title:"个人中心","auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:a(()=>[e("div",null,[s(t(ie),{value:k.value,"onUpdate:value":m[0]||(m[0]=d=>k.value=d),type:"line",animated:""},{default:a(()=>[s(t(G),{name:"General",tab:"General"},{tab:a(()=>[s(t(N),{class:"text-lg",icon:"ri:file-user-line"}),e("span",Ge,l(u.$t("setting.general")),1)]),default:a(()=>[e("div",Oe,[s(Te)])]),_:1}),s(t(G),{name:"Config",tab:"Config"},{tab:a(()=>[s(t(N),{class:"text-lg",icon:"ri:list-settings-line"}),Ee]),default:a(()=>[s(Me)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{bt as default};
