import{e as y,r as w,o as l,m as x,w as I,p as O,j as k,a as e,n as E,_ as D,q as u,s as p,c as f,i as L,v as N,F as A,u as S,b as T,x as n,y as q,z as C,A as g,O as h,C as F,B as M,D as P}from"./index.52fd6dce.js";import{_ as R}from"./add.02454cb8.js";import{_ as j}from"./search.5317d5fa.js";import{_ as $,a as B,g as V}from"./tag.050f9c1b.js";const b=s=>(O("data-v-254c657d"),s=s(),k(),s),z=b(()=>e("p",{class:"top font-bold text-xs leading-15 uppercase text-white-primary px-8 py-4 rounded-t-4 bg-green-primary"},"Eng mashhur",-1)),G=b(()=>e("div",{class:"flex items-center gap-16"},[e("div",{class:"w-97 h-89 flex items-center justify-center overflow-hidden"},[e("img",{class:"max-w-full max-h-full object-cover",src:$,alt:""})]),e("div",null,[e("p",{class:"text-lg font-bold leading-24 text-black-primary mb-8"},"Mol go\u2018shtli donar"),e("div",{class:"flex items-center justify-between"},[e("div",{class:"flex items-center gap-4"},[e("img",{class:"w-17 h-17",src:B,alt:""}),e("p",{class:"text-sm leading-17 text-black-primary"},"22,000 so\u2018m")]),e("img",{class:"w-17 h-17",src:E,alt:""})])])],-1)),J=y({__name:"FoodItem",props:{id:{type:Number,required:!0},name:{type:Object,required:!0}},setup(s){const i=s;return(c,d)=>{const a=w("router-link");return l(),x(a,{to:{path:"/food",query:{id:JSON.stringify(i.id)}},role:"button",class:"bg-white-secondary rounded-16 p-16 flex relative border border-gray-secondary"},{default:I(()=>[z,G]),_:1},8,["to"])}}});const v=D(J,[["__scopeId","data-v-254c657d"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),U={class:"fixed top-0 bottom-0 right-0 w-full overflow-y-scroll bg-white-primary"},Y={class:"flex items-center gap-16 mb-85"},H=e("img",{class:"w-21 h-21",src:R,alt:""},null,-1),K=e("p",{class:"text-sm text-black-primary font-semibold leading-21 uppercase hidden md:block"},"Yangi ovqat qo\u2018shish",-1),W=[H,K],X={class:"bg-white-secondary flex items-center gap-8 py-6 px-32 rounded border border-gray-secondary",role:"button"},Z=e("img",{src:j,class:"w-18 h-18",alt:""},null,-1),ee={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-40"},ne=y({__name:"index",setup(s){q(),C(),u(()=>g(()=>Promise.resolve().then(()=>Q),void 0));const i=u(()=>g(()=>import("./TheModal.f7b22c4a.js"),["assets/TheModal.f7b22c4a.js","assets/TheModal.f3b2a573.css","assets/index.52fd6dce.js","assets/index.aa2d9d16.css","assets/data.6c2e8f39.js","assets/tag.050f9c1b.js"])),c=p({isLoading:!1,list:[]}),d=p(),a=p("");async function r(){h();const[_,o]=await V();console.log(o),F(),c.value.list=o}function m(_){d.value.open(_)}return r(),(_,o)=>(l(),f("div",U,[e("div",Y,[e("button",{class:"bg-yellow-primary flex items-center px-32 py-16 gap-5 rounded",role:"button",onClick:m},W),e("div",X,[Z,L(e("input",{type:"search",name:"search","onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),onInput:r,placeholder:"Qidiruv",class:"w-100 placeholder:text-gray-primary text-black-primary font-semibold focus:outline-none py-10 text-sm bg-white-secondary"},null,544),[[N,a.value]])])]),e("div",ee,[(l(!0),f(A,null,S(c.value.list,t=>(l(),x(v,{key:t.id,id:t.id,name:t.name,onEdit:m,onRemove:te=>n(M)({id:t.id,text:"Diqqat, kategoriyani o\u2018chirishga aminmisiz?",title:`${t.name.uz}`,url:"food",callback:r})},null,8,["id","name","onRemove"]))),128))]),T(n(i),{ref_key:"modalRef",ref:d,onSubmit:n(h),onToast:o[1]||(o[1]=t=>n(P)({text:t,callback:r}))},null,8,["onSubmit"])]))}});export{ne as default};