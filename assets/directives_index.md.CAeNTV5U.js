import{p as g,h,c as r,o as s,j as t,a as m,F as o,B as d,t as n,N as _}from"./chunks/framework.DBggldPO.js";const y={class:"directive-grid"},f=["href"],k={class:"directive-name"},x={class:"directive-description"},D=JSON.parse('{"title":"指令集预览","description":"","frontmatter":{},"headers":[],"relativePath":"directives/index.md","filePath":"directives/index.md","lastUpdated":1739758529000}'),b={name:"directives/index.md"},P=Object.assign(b,{setup(B){const l=g([{name:"v-copy",description:"一键复制文本内容，支持动态文本和复制状态反馈",link:"/vuedir/directives/copy",category:"交互类"},{name:"v-focus",description:"自动聚焦表单元素，提升表单交互体验",link:"/vuedir/directives/focus",category:"表单类"},{name:"v-highlight",description:"灵活的文本高亮效果，支持多种颜色格式和自动对比度",link:"/vuedir/directives/highlight",category:"视觉类"},{name:"v-longpress",description:"长按事件功能，支持自定义长按时间",link:"/vuedir/directives/longpress",category:"交互类"},{name:"v-spare",description:"处理图片加载失败场景，自动切换到备用图片",link:"/vuedir/directives/spare",category:"视觉类"},{name:"v-doubleclick",description:"双击事件处理，提供更丰富的交互方式",link:"/vuedir/directives/doubleclick",category:"交互类"}]),v={交互类:"var(--vp-c-brand)",视觉类:"var(--vp-c-green)",表单类:"var(--vp-c-yellow)"},p=h(()=>{const i={};return l.value.forEach(e=>{i[e.category]||(i[e.category]=[]),i[e.category].push(e)}),i});return(i,e)=>(s(),r("div",null,[e[0]||(e[0]=t("h1",{id:"指令集预览",tabindex:"-1"},[m("指令集预览 "),t("a",{class:"header-anchor",href:"#指令集预览","aria-label":'Permalink to "指令集预览"'},"​")],-1)),(s(!0),r(o,null,d(p.value,(u,c)=>(s(),r("div",{key:c,class:"category-section"},[t("h2",{class:"category-title",style:_({color:v[c]})},n(c),5),t("div",y,[(s(!0),r(o,null,d(u,a=>(s(),r("a",{key:a.name,href:a.link,class:"directive-card"},[t("div",k,n(a.name),1),t("div",x,n(a.description),1)],8,f))),128))])]))),128))]))}});export{D as __pageData,P as default};
