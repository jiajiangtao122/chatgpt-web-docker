import{g as J}from"./slide-verify-code@1.0.0-02750b17.js";import{a as _}from"./index-93d2c664.js";import{u as O,a as q,i as P,s as Q,j as W,k as X}from"./index-5efdbc00.js";import{f as Y,I as Z,h,k as T,m as ee}from"./naive-ui@2.34.3_vue@3.2.47-b44668a5.js";import{v as se}from"./uuid@9.0.0-a960c1f4.js";import{d as L,f as E,j as oe,E as k,K as V,b as d,L as g,k as S,H as u,G as M,O as U}from"./@vue_runtime-core@3.2.47-d9a89b1b.js";import{r as a,u as t,a as te}from"./@vue_reactivity@3.2.47-41cada1d.js";import{J as K}from"./@vue_shared@3.2.47-1870027e.js";import"./@vue_runtime-dom@3.2.47-1f3621cd.js";import"./@iconify_vue@4.1.0_vue@3.2.47-cce582b6.js";import"./pinia@2.0.33_hmuptsblhheur2tugfgucj7gc4-b06c6206.js";import"./vue-demi@0.13.11_vue@3.2.47-71ba0ef2.js";import"./crypto-js@4.1.1-5d2574b3.js";import"./@traptitech_markdown-it-katex@3.6.0-183244bb.js";import"./katex@0.16.4-d49885c5.js";import"./vue-router@4.1.6_vue@3.2.47-becc39a8.js";import"./axios@1.3.4-aba6f0e0.js";import"./@vueuse_core@9.13.0_vue@3.2.47-804c0f63.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-31ba0d1d.js";import"./vue-i18n@9.2.2_vue@3.2.47-f2ff64de.js";import"./@intlify_shared@9.2.2-6f62a0ce.js";import"./@intlify_core-base@9.2.2-e46b7bcb.js";import"./@intlify_message-compiler@9.2.2-e451351e.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./vooks@0.2.12_vue@3.2.47-6d2a1cf4.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-5600174a.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./treemate@0.3.11-25c27bff.js";import"./vueuc@0.4.51_vue@3.2.47-56f5039e.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-9765db09.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./lodash-es@4.17.21-cabc0acd.js";import"./date-fns@2.29.3-975a2d8f.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";const ae={class:"p-4 space-y-5 min-h-[200px]"},le={class:"space-y-6"},ie={class:"flex items-center space-x-4"},ue={class:"flex-1"},ne={class:"flex items-center space-x-4"},re={class:"flex-1"},ce={class:"flex items-center space-x-4"},de={class:"flex-1"},me={key:0,class:"flex items-center space-x-4"},ve={class:"flex-1"},fe={class:"flex items-center"},pe=L({__name:"Login",emits:["closeModel"],setup(N,{emit:b}){const x=O(),{isMobile:v}=q(),l=Y(),n=a(0),m=a(!1),e=a({email:"",token:"",code:""}),s=a({token:!0,code:!0,submit:!0}),f=a({token:"点击完成验证后发送验证码"}),B=a(null),p=a(null),I=E(()=>{if(e.value.email.length&&!_(e.value.email))return"error"}),j=()=>{s.value.token===!1?m.value=!0:(m.value=!1,s.value.submit=!0),e.value.token.length&&(s.value.code=!1)},y=()=>{m.value=!1},D=()=>{y(),G(),s.value.token=!0,s.value.code=!1,$(),e.value.token="",f.value.token="验证成功，点击重新发送验证码"},F=()=>{y(),s.value.token=!1,s.value.code=!0,s.value.submit=!0,f.value.token="验证失败，请重新验证"},$=()=>{n.value=10,setInterval(()=>{n.value>0?n.value--:s.value.token=!1},1e3)},w=()=>{s.value.token=!_(e.value.email),s.value.submit=!_(e.value.email)||!e.value.code.length},z=()=>{var i,o;_(e.value.email)||(i=B.value)==null||i.focus(),e.value.code.length||(o=p.value)==null||o.focus(),P(e.value.email.toLowerCase(),e.value.code).then(c=>{var r;c.status==="Success"?(b("closeModel"),Q(c.data.token),x.getUserInfo(),l.success(c.message)):((r=p.value)==null||r.focus(),l.error(c.message))})},A=()=>{e.value.token=se().replace(/-/g,"").toString()},G=async()=>{A(),await W(e.value.email,e.value.token).then(i=>{var o;i.status==="Success"?((o=p.value)==null||o.focus(),l.success(i.message)):l.error(i.message)})},C=a({website:"",register:""}),R=a(!1);async function H(){try{R.value=!0;const{data:i}=await X();C.value=i}finally{R.value=!1}}return oe(()=>{H()}),(i,o)=>{var c;return k(),V("div",ae,[d(t(Z),{"show-icon":!1},{default:g(()=>[S(" 首次认证赠送 "+K(C.value.register.freeTimes)+" 次免费提问次数 ",1)]),_:1}),u("div",le,[u("div",ie,[u("div",ue,[d(t(h),{ref_key:"emailRef",ref:B,value:e.value.email,"onUpdate:value":o[0]||(o[0]=r=>e.value.email=r),status:t(I),clearable:"",placeholder:"请输入登录邮箱",onKeyup:w},null,8,["value","status"])])]),u("div",ne,[u("div",re,[d(t(h),{disabled:s.value.token,placeholder:f.value.token,clearable:"",readonly:"",onClick:j},null,8,["disabled","placeholder"]),d(t(J),{show:m.value,onClose:y,onFail:F,onSuccess:D},null,8,["show"])]),n.value>0?(k(),M(t(T),{key:0,disabled:"",text:""},{default:g(()=>[S(K(n.value>0?`(${n.value}s)`:""),1)]),_:1})):U("",!0)]),u("div",ce,[u("div",de,[d(t(h),{ref_key:"codeRef",ref:p,value:e.value.code,"onUpdate:value":o[1]||(o[1]=r=>e.value.code=r),disabled:s.value.code,placeholder:(t(v),"请输入邮箱收到的6位验证码"),onKeyup:w},null,8,["value","disabled","placeholder"])])]),((c=C.value.value)==null?void 0:c.register.inviteCode.length)>0?(k(),V("div",me,[u("div",ve,[d(t(h),{ref_key:"codeRef",ref:p,value:e.value.code,"onUpdate:value":o[2]||(o[2]=r=>e.value.code=r),placeholder:"注册邀请码",onKeyup:w},null,8,["value"])])])):U("",!0),u("div",fe,[d(t(T),{disabled:s.value.submit,block:"",type:"success",onClick:z},{default:g(()=>[S(" 登录/注册 ")]),_:1},8,["disabled"])])])])}}}),Ze=L({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(N,{emit:b}){const x=N,v=a(!1),l=E({get(){return x.visible},set(e){b("update:visible",e)}});function n(){v.value=!0,setTimeout(()=>{v.value=!1},0)}function m(){setTimeout(()=>{l.value=!1},1e3)}return(e,s)=>(k(),M(t(ee),{show:t(l),"onUpdate:show":s[0]||(s[0]=f=>te(l)?l.value=f:null),"auto-focus":!1,closable:!1,"mask-closable":!1,"close-on-esc":!1,preset:"dialog",title:"用户认证",class:"min-w-[100px]:","z-index":100},{default:g(()=>[v.value?U("",!0):(k(),M(pe,{key:0,onUpdate:n,onCloseModel:m}))]),_:1},8,["show"]))}});export{Ze as default};
