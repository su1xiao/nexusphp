var h=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(o,e,a)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,y=(o,e)=>{for(var a in e||(e={}))k.call(e,a)&&_(o,a,e[a]);if(c)for(var a of c(e))T.call(e,a)&&_(o,a,e[a]);return o},g=(o,e)=>v(o,w(e));import{G as C,B as R,d as B,u as U,r as $,o as q,H as N,t as j,e as u,f as A,g as G,k as t,w as r,l as x}from"./vendor.51c5b88d.js";import{_ as E,b as F,a as p}from"./index.82f228b9.js";const H={name:"TagForm",setup(){const{proxy:o}=C();console.log("proxy",o);const e=R(null),a=B(),f=U(),{id:n}=a.query,s=$({token:F("token")||"",id:n,list:[],formData:{color:"",name:"",priority:""},rules:{color:[{required:"true"}],name:[{required:"true"}]}});q(async()=>{n&&p.getTag(n).then(l=>{s.formData.name=l.data.name,s.formData.color=l.data.color,s.formData.priority=l.data.priority})}),N(()=>{});const d=()=>{e.value.validate(async l=>{if(l){let i=s.formData;console.log(i),n?await p.updateTag(n,i):await p.storeTag(i),await f.push({name:"tag"})}})};return g(y({},j(s)),{formRef:e,submitAdd:d})}},I=x("Submit");function M(o,e,a,f,n,s){const d=u("el-input"),l=u("el-form-item"),i=u("el-button"),D=u("el-form"),b=u("el-col"),V=u("el-row");return A(),G("div",null,[t(V,null,{default:r(()=>[t(b,{span:12},{default:r(()=>[t(D,{model:o.formData,rules:o.rules,ref:"formRef","label-width":"200px",class:"formData"},{default:r(()=>[t(l,{label:"Name",prop:"name"},{default:r(()=>[t(d,{modelValue:o.formData.name,"onUpdate:modelValue":e[0]||(e[0]=m=>o.formData.name=m),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,{label:"Color",prop:"color"},{default:r(()=>[t(d,{modelValue:o.formData.color,"onUpdate:modelValue":e[1]||(e[1]=m=>o.formData.color=m),placeholder:""},null,8,["modelValue"])]),_:1}),t(l,{label:"Priority",prop:"priority"},{default:r(()=>[t(d,{modelValue:o.formData.priority,"onUpdate:modelValue":e[2]||(e[2]=m=>o.formData.priority=m),placeholder:"The higher the value, the higher the ranking"},null,8,["modelValue"])]),_:1}),t(l,null,{default:r(()=>[t(i,{type:"primary",onClick:e[3]||(e[3]=m=>f.submitAdd())},{default:r(()=>[I]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})])}var J=E(H,[["render",M]]);export{J as default};
