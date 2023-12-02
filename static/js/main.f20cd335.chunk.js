(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),l=c(1),n=(c(9),c(10),c(11),c(2)),d=c.n(n),o=c(0);const i=e=>{let{todo:t,getUserAction:c,selectedTodo:s}=e;const{id:a,completed:l,title:n}=t;return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===a}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:a}),Object(o.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!l,"has-text-success":l}),children:n})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:()=>{c(t)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==a,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===a})})})})})]})},j=e=>{let{todos:t,getUserAction:c,selectedTodo:s}=e;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.length>0&&t.map((e=>Object(o.jsx)(i,{todo:e,getUserAction:c,selectedTodo:s},e.id)))})]})},r=e=>{let{onChangeStatus:t,inputValue:c,onChangeInput:s,onClickReset:a}=e;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:t,children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:c,onChange:s,placeholder:"Search..."}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.length>0&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})};function h(e){const t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(c=300,new Promise((e=>{setTimeout(e,c)}))).then((()=>fetch(t))).then((e=>e.json()));var c}c(13);const b=()=>Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})}),m=e=>{let{actionClose:t,selectedTodo:c,changeSelectedTodo:s}=e;const[a,n]=Object(l.useState)(null);return Object(l.useEffect)((()=>{var e;(e=c.userId,h("/users/".concat(e))).then(n)}),[c]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),a?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:()=>{t(),s(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]}):Object(o.jsx)(b,{})]})};var u=function(e){return e.all="all",e.active="active",e.completed="completed",e}(u||{});const x=()=>{const[e,t]=Object(l.useState)([]),[c,s]=Object(l.useState)(u.all),[a,n]=Object(l.useState)(!0),[d,i]=Object(l.useState)(""),[x,O]=Object(l.useState)(null),p=Object(l.useMemo)((()=>e.filter((e=>c===u.active?!e.completed:c!==u.completed||e.completed)).filter((e=>e.title.toLowerCase().trim().includes(d)))),[e,c,d]);Object(l.useEffect)((()=>{h("/todos").then((e=>t(e))).finally((()=>n(!1)))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(r,{onChangeStatus:e=>s(e.target.value),inputValue:d,onChangeInput:e=>(i(e.target.value.trimStart()),p.filter((t=>t.title.includes(e.target.value.toLowerCase().trim())))),onClickReset:()=>{i("")}})}),Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)(j,{todos:p,getUserAction:O,selectedTodo:x}),a&&Object(o.jsx)(b,{})]})]})})}),x&&Object(o.jsx)(m,{selectedTodo:x,actionClose:()=>{O(null)},changeSelectedTodo:O})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f20cd335.chunk.js.map