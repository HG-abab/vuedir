import{_ as r,ai as d,c as h,o as k,ag as g,a as n,ah as t,G as p,j as i}from"./chunks/framework.DBggldPO.js";import{A as y}from"./chunks/ApiTable.DyZt1MyM.js";/* empty css                                                                        */const F={class:"container"},o={__name:"LongPressDemo",setup(e){const a=()=>{alert("长按事件触发了！")};return(E,s)=>{const l=d("longpress");return k(),h("div",F,[g((k(),h("button",null,s[0]||(s[0]=[n("按住我2秒")]))),[[l,{event:a}]])])}}},c=r(o,[["__scopeId","data-v-a8ca327e"]]),C={class:"container"},B={__name:"LongPressWithDelayDemo",setup(e){const a=()=>{alert("长按事件触发了！")};return(E,s)=>{const l=d("longpress");return k(),h("div",C,[g((k(),h("button",null,s[0]||(s[0]=[n(" 按住我1秒 ")]))),[[l,{event:a,delay:1e3}]])])}}},u=r(B,[["__scopeId","data-v-59f9a14d"]]),D=JSON.parse('{"title":"v-longpress 指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/longpress.md","filePath":"directives/longpress.md","lastUpdated":1739895970000}'),v={name:"directives/longpress.md"},m=Object.assign(v,{setup(e){const a=[{name:"event",type:"Function",required:!0,description:"长按触发的回调函数"},{name:"delay",type:"number",required:!1,description:"长按触发时间（毫秒）",default:"2000"}];return(E,s)=>(k(),h("div",null,[s[0]||(s[0]=t("",6)),p(c),s[1]||(s[1]=t("",4)),p(u),s[2]||(s[2]=t("",2)),p(y,{data:a}),s[3]||(s[3]=i("h2",{id:"注意事项",tabindex:"-1"},[n("注意事项 "),i("a",{class:"header-anchor",href:"#注意事项","aria-label":'Permalink to "注意事项"'},"​")],-1)),s[4]||(s[4]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"关于两个参数"),i("ul",null,[i("li",null,[i("code",null,"event"),n(" 参数为必填项，必须是一个有效的函数")]),i("li",null,[i("code",null,"delay"),n(" 参数可选，必须是一个有效的数字（毫秒）")])])],-1))]))}});export{D as __pageData,m as default};
