import{e as h,q as m,s as i,o as n,c as p,a as o,i as b,v,F as x,u as O,b as k,x as s,y as E,z as w,A as _,O as g,C as D,m as I,B as L,D as A}from"./index.52fd6dce.js";import{_ as N}from"./add.02454cb8.js";import{_ as C}from"./search.5317d5fa.js";import{g as R}from"./api.d6238c19.js";const T={class:"fixed top-0 bottom-0 right-0 w-full overflow-y-scroll bg-white-primary"},M={class:"flex items-center gap-16 mb-30"},P=o("img",{class:"w-21 h-21",src:N,alt:""},null,-1),B=o("p",{class:"text-sm text-black-primary font-semibold leading-21 uppercase hidden md:block"},"Yangi kategoriya qo\u2018shish",-1),V=[P,B],q={class:"bg-white-secondary flex items-center gap-8 py-6 px-32 rounded border border-gray-secondary",role:"button"},z=o("img",{src:C,class:"w-18 h-18",alt:""},null,-1),F={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-30"},j=h({__name:"index",setup(S){E(),w();const y=m(()=>_(()=>import("./CategoryItem.5356e701.js"),["assets/CategoryItem.5356e701.js","assets/edit.56b57349.js","assets/index.52fd6dce.js","assets/index.aa2d9d16.css"])),f=m(()=>_(()=>import("./TheModal.3427a443.js"),["assets/TheModal.3427a443.js","assets/TheModal.e2a457c9.css","assets/index.52fd6dce.js","assets/index.aa2d9d16.css","assets/data.6c2e8f39.js","assets/index.fc25d719.js","assets/api.d6238c19.js"])),l=i({isLoading:!1,list:[]}),c=i(),d=i("");async function a(){g();const[r,t]=await R();D(),l.value.list=t}function u(r){c.value.open(r)}return a(),(r,t)=>(n(),p("div",T,[o("div",M,[o("button",{class:"bg-yellow-primary flex items-center px-32 py-16 gap-5 rounded",role:"button",onClick:u},V),o("div",q,[z,b(o("input",{type:"search",name:"search","onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),onInput:a,placeholder:"Qidiruv",class:"w-100 placeholder:text-gray-primary text-black-primary font-semibold focus:outline-none py-10 text-sm bg-white-secondary"},null,544),[[v,d.value]])])]),o("div",F,[(n(!0),p(x,null,O(l.value.list,e=>(n(),I(s(y),{key:e.id,id:e.id,name:e.name,priority:e.priority,count:e.foods.length,onEdit:u,onRemove:G=>s(L)({id:e.id,text:"Diqqat, kategoriyani o\u2018chirishga aminmisiz?",title:`${e.name.uz}`,url:"category",callback:a})},null,8,["id","name","priority","count","onRemove"]))),128))]),k(s(f),{ref_key:"modalRef",ref:c,onSubmit:s(g),onToast:t[1]||(t[1]=e=>s(A)({text:e,callback:a}))},null,8,["onSubmit"])]))}});export{j as default};