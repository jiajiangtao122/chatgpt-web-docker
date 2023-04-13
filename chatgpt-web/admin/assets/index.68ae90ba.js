import{L as T,M,N as P,w as U,H as j}from"./element-plus.5631ba54.js";import{u as z,_ as H}from"./usePaging.e23a102e.js";import{f as b,_ as I}from"./index.a3f35e3a.js";import{d as K,e as Q}from"./role.d7206584.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang.b553c570.js";import{_ as G}from"./auth.vue_vue_type_script_setup_true_lang.b4892229.js";import{d as D,s as E,r as g,ao as J,o as a,c as O,U as t,L as i,a as h,M as c,K as m,R as k,u as s,i as W,Q as B,n as C}from"./@vue.50ba5cf8.js";import"./@vueuse.4a91a4c7.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.44f0a9c4.js";import"./axios.71644922.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.71183d84.js";import"./vue-router.8e70c72f.js";import"./pinia.5dae7c2f.js";import"./css-color-function.7ed33bcb.js";import"./color.c3c12e91.js";import"./clone.49b575c3.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.edaeeca4.js";import"./vue-clipboard3.49f35762.js";import"./clipboard.a03844cd.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";import"./index.244e0c5f.js";import"./index.vue_vue_type_style_index_0_scoped_a5e5144a_lang.cef6e99e.js";import"./menu.30bdba03.js";const X={class:"role-lists"},Y={class:"mt-4"},Z={class:"flex justify-end mt-4"},ee=D({name:"role"}),He=D({...ee,setup(te){const d=E(),y=E(),_=g(!1),w=g(!1),{pager:u,getLists:p}=z({fetchFun:Q}),$=async()=>{var o;_.value=!0,await C(),(o=d.value)==null||o.open("add")},x=async o=>{var e,n;_.value=!0,await C(),(e=d.value)==null||e.open("edit"),(n=d.value)==null||n.setFormData(o)},A=async o=>{var e,n;w.value=!0,await C(),(e=y.value)==null||e.open(),(n=y.value)==null||n.setFormData(o)},R=async o=>{await b.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await K({id:o}),b.msgSuccess("\u5220\u9664\u6210\u529F"),p()};return p(),(o,e)=>{const n=I,f=U,l=T,V=M,L=H,N=j,v=J("perms"),S=P;return a(),O("div",X,[t(N,{class:"!border-none",shadow:"never"},{default:i(()=>[h("div",null,[c((a(),m(f,{type:"primary",onClick:$},{icon:i(()=>[t(n,{name:"el-icon-Plus"})]),default:i(()=>[k(" \u65B0\u589E ")]),_:1})),[[v,["system:role:add"]]])]),h("div",Y,[h("div",null,[c((a(),m(V,{data:s(u).lists,size:"large"},{default:i(()=>[t(l,{prop:"id",label:"ID","min-width":"100"}),t(l,{prop:"name",label:"\u540D\u79F0","min-width":"150"}),t(l,{prop:"remark",label:"\u5907\u6CE8","min-width":"150","show-overflow-tooltip":""}),t(l,{prop:"sort",label:"\u6392\u5E8F","min-width":"100"}),t(l,{prop:"member",label:"\u7BA1\u7406\u5458\u4EBA\u6570","min-width":"120"}),t(l,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"180"}),t(l,{label:"\u64CD\u4F5C",width:"190",fixed:"right"},{default:i(({row:r})=>[c((a(),m(f,{link:"",type:"primary",onClick:F=>x(r)},{default:i(()=>[k(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["system:role:edit"]]]),c((a(),m(f,{link:"",type:"primary",onClick:F=>A(r)},{default:i(()=>[k(" \u6743\u9650\u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[v,["system:role:edit"]]]),c((a(),m(f,{link:"",type:"danger",onClick:F=>R(r.id)},{default:i(()=>[k(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["system:role:del"]]])]),_:1})]),_:1},8,["data"])),[[S,s(u).loading]])]),h("div",Z,[t(L,{modelValue:s(u),"onUpdate:modelValue":e[0]||(e[0]=r=>W(u)?u.value=r:null),onChange:s(p)},null,8,["modelValue","onChange"])])])]),_:1}),s(_)?(a(),m(q,{key:0,ref_key:"editRef",ref:d,onSuccess:s(p),onClose:e[1]||(e[1]=r=>_.value=!1)},null,8,["onSuccess"])):B("",!0),s(w)?(a(),m(G,{key:1,ref_key:"authRef",ref:y,onSuccess:s(p),onClose:e[2]||(e[2]=r=>w.value=!1)},null,8,["onSuccess"])):B("",!0)])}}});export{He as default};
