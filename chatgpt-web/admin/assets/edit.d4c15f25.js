import{_ as D}from"./index.b51fdba3.js";import{C as V,D as C,H as A,F as h,w as x}from"./element-plus.5631ba54.js";import{_ as q}from"./picker.1a54dcc9.js";import{g as k,s as N}from"./website.6be53c3f.js";import{u as y,f as U}from"./index.a3f35e3a.js";import{d as _,r as j,Z as L,ao as Q,o as d,c as I,U as t,L as r,a as i,u as a,M as R,K as S,R as W}from"./@vue.50ba5cf8.js";import"./@vueuse.4a91a4c7.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.44f0a9c4.js";import"./axios.71644922.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.244e0c5f.js";import"./index.vue_vue_type_style_index_0_scoped_a5e5144a_lang.cef6e99e.js";import"./index.cccb6606.js";import"./usePaging.e23a102e.js";import"./index.6e69558e.js";import"./index.vue_vue_type_script_setup_true_lang.9d89abe1.js";import"./vue3-video-play.4f8ed995.js";import"./vuedraggable.97cc70dc.js";import"./vue.9228db78.js";import"./sortablejs.a52f6d66.js";import"./lodash.71183d84.js";import"./vue-router.8e70c72f.js";import"./pinia.5dae7c2f.js";import"./css-color-function.7ed33bcb.js";import"./color.c3c12e91.js";import"./clone.49b575c3.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.edaeeca4.js";import"./vue-clipboard3.49f35762.js";import"./clipboard.a03844cd.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";const H={class:"website-information"},K=i("div",{class:"text-xl font-medium mb-[20px]"},"\u57FA\u7840\u8BBE\u7F6E",-1),M={class:"w-80"},T={class:"w-80"},Z={class:"w-80"},z=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),G={class:"flex-1"},J=_({name:"webInformation"}),Ke=_({...J,setup(O){const n=j(),{getConfig:c}=y(),e=L({name:"",favicon:"",logo:"",backdrop:"",aiName:"",aiLogo:"",tongji:"",qq:""}),f={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E73\u53F0\u540D\u79F0",trigger:["blur"]}],aiName:[{required:!0,message:"\u8BF7\u8F93\u5165\u673A\u5668\u4EBA\u540D\u79F0",trigger:["blur"]}],qq:[{required:!0,message:"\u8BF7\u8F93\u5165QQ\u5BA2\u670D",trigger:["change"]}]},p=async()=>{const l=await k();for(const o in e)e[o]=l[o]},F=async()=>{var l;await((l=n.value)==null?void 0:l.validate()),await N(e),U.msgSuccess("\u64CD\u4F5C\u6210\u529F"),c(),p()};return p(),(l,o)=>{const s=V,m=C,g=q,B=A,b=h,w=x,v=D,E=Q("perms");return d(),I("div",H,[t(b,{ref_key:"formRef",ref:n,rules:f,model:a(e),"label-width":"120px"},{default:r(()=>[t(B,{shadow:"never",class:"!border-none"},{default:r(()=>[K,t(m,{label:"\u7CFB\u7EDF\u540D\u79F0",prop:"name"},{default:r(()=>[i("div",M,[t(s,{modelValue:a(e).name,"onUpdate:modelValue":o[0]||(o[0]=u=>a(e).name=u),placeholder:"\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(m,{label:"QQ\u5BA2\u670D",prop:"qq"},{default:r(()=>[i("div",T,[t(s,{modelValue:a(e).qq,"onUpdate:modelValue":o[1]||(o[1]=u=>a(e).qq=u),placeholder:"",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(m,{label:"\u673A\u5668\u4EBA\u540D\u79F0",prop:"aiName"},{default:r(()=>[i("div",Z,[t(s,{modelValue:a(e).aiName,"onUpdate:modelValue":o[2]||(o[2]=u=>a(e).aiName=u),placeholder:"",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(m,{label:"\u673A\u5668\u4EBA\u5934\u50CF",prop:"aiLogo"},{default:r(()=>[i("div",null,[t(g,{modelValue:a(e).aiLogo,"onUpdate:modelValue":o[3]||(o[3]=u=>a(e).aiLogo=u),limit:1},null,8,["modelValue"]),z])]),_:1}),t(m,{label:"\u7EDF\u8BA1\u4EE3\u7801",prop:"value"},{default:r(()=>[i("div",G,[i("div",null,[t(s,{modelValue:a(e).tongji,"onUpdate:modelValue":o[4]||(o[4]=u=>a(e).tongji=u),rows:6,clearable:"",placeholder:"",type:"textarea"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),R((d(),S(v,null,{default:r(()=>[t(w,{type:"primary",onClick:F},{default:r(()=>[W("\u4FDD\u5B58")]),_:1})]),_:1})),[[E,["setting:website:save"]]])])}}});export{Ke as default};
