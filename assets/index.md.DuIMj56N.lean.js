import{_ as c,c as t,o as s,r as m,e as o,d as h,n as f,j as r,t as _,h as g,F as P,B as b,G as i,w as l,a as p}from"./chunks/framework.AELpvxz7.js";const v={},$={class:"ProductPage"};function k(a,e){return s(),t("div",$,[m(a.$slots,"default")])}const y=c(v,[["render",k],["__scopeId","data-v-6792a28a"]]),I={},S={class:"ProductPageTitle"},z={key:0,class:"title"},T={key:1,class:"lead"};function B(a,e){return s(),t("div",S,[a.$slots.title?(s(),t("h1",z,[m(a.$slots,"title",{},void 0,!0)])):o("",!0),a.$slots.lead?(s(),t("p",T,[m(a.$slots,"lead",{},void 0,!0)])):o("",!0)])}const C=c(I,[["render",B],["__scopeId","data-v-8a8d2d5c"]]),N=["href"],A={class:"profile"},M={class:"avatar"},V=["src","alt"],E={class:"data"},L={class:"name"},O={key:0,class:"affiliation"},j={key:0,class:"title"},w={key:1,class:"at"},D=["innerHTML"],F=h({__name:"ProductsItem",props:{size:{default:"medium"},member:{}},setup(a){return(e,d)=>(s(),t("article",{class:f(["ProductsItem",[e.size]])},[r("a",{href:e.member.link,target:"_blank"},[r("div",A,[r("figure",M,[r("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,V)]),r("div",E,[r("h1",L,_(e.member.name),1),e.member.title||e.member.org?(s(),t("p",O,[e.member.title?(s(),t("span",j,_(e.member.title),1)):o("",!0),e.member.title&&e.member.org?(s(),t("span",w," @ ")):o("",!0)])):o("",!0),e.member.desc?(s(),t("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,D)):o("",!0)])])],8,N)],2))}}),G=c(F,[["__scopeId","data-v-d5e8b970"]]),H={class:"container"},J=h({__name:"Products",props:{size:{default:"medium"},members:{}},setup(a){const e=a,d=g(()=>[e.size,`count-${e.members.length}`]);return(n,Q)=>(s(),t("div",{class:f(["Products",d.value])},[r("div",H,[(s(!0),t(P,null,b(n.members,u=>(s(),t("div",{key:u.name,class:"item"},[i(G,{size:n.size,member:u},null,8,["size","member"])]))),128))])],2))}}),q=c(J,[["__scopeId","data-v-31460c22"]]),U=JSON.parse('{"title":"Succeedium","titleTemplate":"Products","description":"","frontmatter":{"layout":"page","title":"Succeedium","titleTemplate":"Products"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),K={name:"index.md"},W=Object.assign(K,{setup(a){const e=[{avatar:"/img/teamone_avatar.png",name:"TeamOne",title:"Google Sheets add-on for IBM Planning Analytics",link:"https://succeedium.com/teamone/"},{avatar:"/img/space_avatar.png",name:"SPACE",title:"Succeedium Planning Analytics Cloud Extension",link:"https://succeedium.com/space/"}];return(d,n)=>(s(),t("div",null,[i(y,null,{default:l(()=>[i(C,null,{title:l(()=>n[0]||(n[0]=[p(" Succeedium ")])),lead:l(()=>n[1]||(n[1]=[p(" Push the boundaries of IBM Planning Analytics ")])),_:1}),i(q,{members:e})]),_:1})]))}});export{U as __pageData,W as default};
