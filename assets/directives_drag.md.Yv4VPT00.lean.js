import{i as D}from"./chunks/theme.CxVr4bmX.js";import{d as f,C as _,c as E,o as t,ab as r,k as v,b as m,w as b,a as C,_ as c,p as x,F as o,j as s,t as p,aB as A,aD as q,e as w,B,ad as y,n as u,G as F}from"./chunks/framework.BY7ne7pH.js";import{A as T}from"./chunks/ApiTable.EqIoiNcT.js";/* empty css                                                                        */const S={class:"drag_box"},I=f({__name:"BasicDemo",setup(k){return(i,l)=>{const n=_("a-button");return t(),E("div",S,[r((t(),m(n,{type:"primary",shape:"round"},{default:b(()=>l[0]||(l[0]=[C("Drag me")])),_:1})),[[v(D)]]),r((t(),m(n,{type:"primary",shape:"round",style:{transform:"translate(120%, 120%)"}},{default:b(()=>l[1]||(l[1]=[C(" Drag me ")])),_:1})),[[v(D)]])])}}}),V=c(I,[["__scopeId","data-v-ea8136bf"]]),z={class:"info_box"},P=f({__name:"WithEvents",setup(k){const i=x(null),l=x({startNum:0,endNum:0,dragNum:0});function n(){l.value.startNum+=1}function h(){l.value.dragNum+=1}function e(){l.value.endNum+=1}return(d,a)=>{const g=_("a-button");return t(),E(o,null,[s("div",{class:"drag_box",ref_key:"containerRef",ref:i},[r((t(),m(g,{type:"primary",shape:"round"},{default:b(()=>a[0]||(a[0]=[C(" Drag me ")])),_:1})),[[v(D),{startDrag:n,onDrag:{event:h},endDrag:e}]])],512),s("div",z,[s("p",null,"startNum: "+p(l.value.startNum),1),s("p",null,"dragNum: "+p(l.value.dragNum),1),s("p",null,"endNum: "+p(l.value.endNum),1)])],64)}}}),N=c(P,[["__scopeId","data-v-8af26f17"]]),$={name:"BasicDrag",data(){return{axisOption:"both",boundsOption:"parent"}},methods:{resetPosition(){const k=this.$refs.dragElement,i=this.$refs.playgroundRef;if(k&&i){k.style.position="absolute";const l=i.getBoundingClientRect(),n=k.getBoundingClientRect(),h=(l.width-n.width)/2,e=(l.height-n.height)/2;k.style.left=`${h}px`,k.style.top=`${e}px`,k.style.transform="",k.style.margin="0"}},onStartDrag(){const k=this.$refs.dragElement;k&&(k.style.position="absolute")}},mounted(){this.$nextTick(()=>{setTimeout(()=>{this.resetPosition()},100)})},watch:{boundsOption(){this.$nextTick(()=>{setTimeout(()=>{this.resetPosition()},50)})}}},H={class:"basic-drag-container"},M={class:"drag-options"},L={class:"option-group"},O={class:"option-group"},R={class:"drag-playground",ref:"playgroundRef"},j={class:"drag-element",ref:"dragElement"},J={class:"drag-content"},U={class:"drag-info"},W={class:"controls"};function G(k,i,l,n,h,e){const d=A("drag");return t(),E("div",H,[i[9]||(i[9]=s("h3",null,"基础拖拽增强演示",-1)),s("div",M,[s("div",L,[i[4]||(i[4]=s("label",null,"拖拽方向限制:",-1)),r(s("select",{"onUpdate:modelValue":i[0]||(i[0]=a=>h.axisOption=a)},i[3]||(i[3]=[s("option",{value:"both"},"两个方向 (x和y)",-1),s("option",{value:"x"},"仅水平方向 (x)",-1),s("option",{value:"y"},"仅垂直方向 (y)",-1)]),512),[[q,h.axisOption]])]),s("div",O,[i[6]||(i[6]=s("label",null,"边界限制:",-1)),r(s("select",{"onUpdate:modelValue":i[1]||(i[1]=a=>h.boundsOption=a)},i[5]||(i[5]=[s("option",{value:"none"},"无限制",-1),s("option",{value:"parent"},"父容器内",-1)]),512),[[q,h.boundsOption]])])]),s("div",R,[r((t(),E("div",j,[s("div",J,[i[8]||(i[8]=s("div",{class:"drag-title"},"拖动我",-1)),s("div",U,[C(p(h.axisOption==="both"?"可任意方向拖动":h.axisOption==="x"?"只能水平拖动":"只能垂直拖动")+" ",1),i[7]||(i[7]=s("br",null,null,-1)),C(" "+p(h.boundsOption==="parent"?"限制在父容器内":"无边界限制"),1)])])])),[[d,{axis:h.axisOption,bounds:h.boundsOption==="parent"?"parent":null,startDrag:e.onStartDrag}]])],512),s("div",W,[s("button",{onClick:i[2]||(i[2]=(...a)=>e.resetPosition&&e.resetPosition(...a))},"重置位置")])])}const K=c($,[["render",G],["__scopeId","data-v-fee752a2"]]),Q={name:"ListSort",data(){return{originalItems:[{id:1,text:"项目 1"},{id:2,text:"项目 2"},{id:3,text:"项目 3"},{id:4,text:"项目 4"},{id:5,text:"项目 5"}],items:[],lastSortInfo:"无",showDebug:!1}},created(){this.resetItems()},methods:{handleSort({oldIndex:k,newIndex:i}){if(console.log(`排序: 从 ${k} 到 ${i}`),this.lastSortInfo=`从位置 ${k+1} 到位置 ${i+1}`,k>=0&&i>=0&&k<this.items.length&&i<=this.items.length){const l=this.items.splice(k,1)[0];this.items.splice(i,0,l),console.log("排序后的数据:",this.items.map(n=>n.text))}else console.warn("排序索引超出范围:",k,i,this.items.length)},resetItems(){this.items=JSON.parse(JSON.stringify(this.originalItems)),this.lastSortInfo="无"},toggleDebug(){this.showDebug=!this.showDebug}}},X={class:"list-container"},Y={key:0,class:"debug-info"},Z={class:"sort-list"},ss={class:"item-content"},is={class:"item-number"},as={class:"item-text"},ns={class:"result"},hs={class:"order-info"},ks={class:"controls"};function ls(k,i,l,n,h,e){const d=A("drag");return t(),E("div",X,[i[3]||(i[3]=s("h3",null,"可排序列表",-1)),i[4]||(i[4]=s("div",{class:"instruction"},"拖动列表项可以重新排序",-1)),h.showDebug?(t(),E("div",Y,[s("p",null,"最后一次排序: "+p(h.lastSortInfo),1),s("p",null,"当前数据顺序: "+p(h.items.map(a=>a.text).join(", ")),1)])):w("",!0),s("ul",Z,[(t(!0),E(o,null,B(h.items,(a,g)=>r((t(),E("li",{key:a.id,class:"list-item"},[s("div",ss,[s("span",is,p(g+1),1),s("span",as,p(a.text),1)])])),[[d,{isList:!0,onSort:e.handleSort}]])),128))]),s("div",ns,[i[2]||(i[2]=s("h4",null,"当前排序:",-1)),s("div",hs,p(h.items.map(a=>a.text).join(" → ")),1),s("div",ks,[s("button",{class:"reset-btn",onClick:i[0]||(i[0]=(...a)=>e.resetItems&&e.resetItems(...a))},"重置顺序"),s("button",{class:"debug-btn",onClick:i[1]||(i[1]=(...a)=>e.toggleDebug&&e.toggleDebug(...a))},p(h.showDebug?"隐藏调试":"显示调试"),1)])])])}const ps=c(Q,[["render",ls],["__scopeId","data-v-d0c21e57"]]),ts={name:"DragHandle"},Es={class:"handle-demo-container"},es={class:"cards-container"},rs={class:"card"},ds={class:"card"},gs={class:"card"};function ys(k,i,l,n,h,e){const d=A("drag");return t(),E("div",Es,[i[3]||(i[3]=s("h3",null,"拖拽把手示例",-1)),s("div",es,[r((t(),E("div",rs,i[0]||(i[0]=[s("div",{class:"card-handle"},[s("svg",{class:"handle-icon",viewBox:"0 0 24 24"},[s("path",{d:"M8,18h8v-2H8V18z M8,14h8v-2H8V14z M8,10h8V8H8V10z M4,22V2h16v20H4z"})])],-1),s("div",{class:"card-content"},[s("h4",null,"拖拽把手示例"),s("p",null,"点击左侧图标拖动整张卡片。点击此文本区域不会触发拖动。")],-1)]))),[[d,{handle:".card-handle"}]]),r((t(),E("div",ds,i[1]||(i[1]=[y("",2)]))),[[d,{handle:".card-header"}]]),r((t(),E("div",gs,i[2]||(i[2]=[s("div",{class:"card-content full-width"},[s("h4",null,"标准拖拽（无把手）"),s("p",null,"对照组：点击卡片的任何位置均可拖动整个卡片。")],-1)]))),[[d]])]),i[4]||(i[4]=s("div",{class:"info-panel"},[s("p",null,[C("使用 "),s("code",null,"handle"),C(" 选项可以指定拖拽把手元素，只有当用户与该元素交互时才能触发拖拽。")]),s("pre",null,[s("code",null,`v-drag="{ handle: '.card-handle' }"`)])],-1))])}const Fs=c(ts,[["render",ys],["__scopeId","data-v-e4ac5f7a"]]),Cs={name:"TaskBoard",data(){return{priorityLabels:{high:"高",medium:"中",low:"低"},todoTasks:[{id:101,title:"设计登录页面",description:"为新应用设计登录界面和注册表单",priority:"high"},{id:102,title:"实现数据验证",description:"对所有用户输入添加表单验证功能",priority:"medium"},{id:103,title:"编写单元测试",description:"为认证模块编写单元测试",priority:"low"}],inProgressTasks:[{id:201,title:"重构API模块",description:"使用新的请求库重构API请求模块",priority:"medium"},{id:202,title:"优化图片加载",description:"添加图片懒加载和渐进式加载功能",priority:"high"}],doneTasks:[{id:301,title:"修复导航栏bug",description:"解决移动端导航栏折叠问题",priority:"high"},{id:302,title:"更新依赖包",description:"更新所有npm包到最新版本",priority:"low"},{id:303,title:"添加深色模式",description:"实现应用的深色模式切换功能",priority:"medium"}]}},methods:{handleSort({oldIndex:k,newIndex:i},l){const n=this[`${l}Tasks`];if(k!==i&&k>=0&&i>=0&&k<n.length&&i<=n.length){const[h]=n.splice(k,1);n.splice(i,0,h),this.$forceUpdate()}}}},cs={class:"task-board-container"},os={class:"board-columns"},Bs={class:"board-column"},As={class:"task-list"},us={class:"task-content"},Ds={class:"task-title"},vs={class:"task-description"},ms={class:"task-meta"},bs={class:"task-id"},xs={class:"board-column"},qs={class:"task-list"},fs={class:"task-content"},_s={class:"task-title"},ws={class:"task-description"},Ts={class:"task-meta"},Ss={class:"task-id"},Is={class:"board-column"},Vs={class:"task-list"},zs={class:"task-content"},Ps={class:"task-title"},Ns={class:"task-description"},$s={class:"task-meta"},Hs={class:"task-id"};function Ms(k,i,l,n,h,e){const d=A("drag");return t(),E("div",cs,[i[6]||(i[6]=s("h3",null,"任务看板（综合示例）",-1)),s("div",os,[s("div",Bs,[i[1]||(i[1]=s("div",{class:"column-header"},"待办任务",-1)),s("ul",As,[(t(!0),E(o,null,B(h.todoTasks,a=>r((t(),E("li",{key:a.id,class:"task-card"},[i[0]||(i[0]=s("div",{class:"task-handle"},[s("svg",{class:"handle-icon",viewBox:"0 0 24 24"},[s("path",{d:"M3,15h18v-2H3V15z M3,19h18v-2H3V19z M3,11h18V9H3V11z M3,5v2h18V5H3z"})])],-1)),s("div",us,[s("div",Ds,p(a.title),1),s("div",vs,p(a.description),1),s("div",ms,[s("span",{class:u(["priority","priority-"+a.priority])},p(h.priorityLabels[a.priority]),3),s("span",bs,"#"+p(a.id),1)])])])),[[d,{isList:!0,handle:".task-handle",onSort:g=>e.handleSort("todo",g)}]])),128))])]),s("div",xs,[i[3]||(i[3]=s("div",{class:"column-header"},"进行中",-1)),s("ul",qs,[(t(!0),E(o,null,B(h.inProgressTasks,a=>r((t(),E("li",{key:a.id,class:"task-card"},[i[2]||(i[2]=s("div",{class:"task-handle"},[s("svg",{class:"handle-icon",viewBox:"0 0 24 24"},[s("path",{d:"M3,15h18v-2H3V15z M3,19h18v-2H3V19z M3,11h18V9H3V11z M3,5v2h18V5H3z"})])],-1)),s("div",fs,[s("div",_s,p(a.title),1),s("div",ws,p(a.description),1),s("div",Ts,[s("span",{class:u(["priority","priority-"+a.priority])},p(h.priorityLabels[a.priority]),3),s("span",Ss,"#"+p(a.id),1)])])])),[[d,{isList:!0,handle:".task-handle",onSort:g=>e.handleSort("inProgress",g)}]])),128))])]),s("div",Is,[i[5]||(i[5]=s("div",{class:"column-header"},"已完成",-1)),s("ul",Vs,[(t(!0),E(o,null,B(h.doneTasks,a=>r((t(),E("li",{key:a.id,class:"task-card"},[i[4]||(i[4]=s("div",{class:"task-handle"},[s("svg",{class:"handle-icon",viewBox:"0 0 24 24"},[s("path",{d:"M3,15h18v-2H3V15z M3,19h18v-2H3V19z M3,11h18V9H3V11z M3,5v2h18V5H3z"})])],-1)),s("div",zs,[s("div",Ps,p(a.title),1),s("div",Ns,p(a.description),1),s("div",$s,[s("span",{class:u(["priority","priority-"+a.priority])},p(h.priorityLabels[a.priority]),3),s("span",Hs,"#"+p(a.id),1)])])])),[[d,{isList:!0,handle:".task-handle",onSort:g=>e.handleSort("done",g)}]])),128))])])]),i[7]||(i[7]=s("div",{class:"feature-description"},[s("h4",null,"功能说明"),s("ul",null,[s("li",null,"通过左侧拖拽把手可以重新排序每一列中的任务卡片"),s("li",null,"仅点击卡片左侧带有线条图标的区域才能拖动卡片"),s("li",null,"每列内的任务可以独立排序"),s("li",null,"实现了重排时的视觉反馈和平滑动画")]),s("p",null,"此示例展示了 v-drag 指令的列表排序和拖拽把手功能的结合使用。")],-1))])}const Ls=c(Cs,[["render",Ms],["__scopeId","data-v-f6b544c3"]]),Ws=JSON.parse('{"title":"v-drag","description":"","frontmatter":{},"headers":[],"relativePath":"directives/drag.md","filePath":"directives/drag.md","lastUpdated":1741283015000}'),Os={name:"directives/drag.md"},Gs=Object.assign(Os,{setup(k){const i=[{name:"startDrag",type:"Function",default:"null",description:"拖拽开始时触发的回掉函数",required:!1},{name:"onDrag",type:"Function",default:"null",description:"拖拽中触发的回掉函数",required:!1},{name:"endDrag",type:"Function",default:"null",description:"拖拽结束时触发的回掉函数",required:!1},{name:"isList",type:"Boolean",default:"false",description:"是否启用列表拖拽排序功能",required:!1},{name:"onSort",type:"Function",default:"null",description:"列表排序完成时的回调函数，接收 oldIndex 和 newIndex 参数",required:!1},{name:"handle",type:"String",default:"null",description:"拖拽把手的CSS选择器，指定后只有点击该元素才能触发拖拽",required:!1},{name:"axis",type:"String",default:"both",description:"限制拖拽方向，可选值为 'x'、'y'、'both'",required:!1},{name:"bounds",type:"String|HTMLElement",default:"null",description:"限制拖拽边界，可设置为 'parent' 或一个HTML元素",required:!1}];return(l,n)=>(t(),E("div",null,[n[0]||(n[0]=y("",5)),F(V),n[1]||(n[1]=y("",3)),F(N),n[2]||(n[2]=y("",5)),F(K),n[3]||(n[3]=y("",3)),F(ps),n[4]||(n[4]=y("",3)),F(Fs),n[5]||(n[5]=y("",3)),F(Ls),n[6]||(n[6]=y("",7)),F(T,{data:i}),n[7]||(n[7]=y("",2))]))}});export{Ws as __pageData,Gs as default};
