(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),o=n(3),c=n.n(o),i=(n(12),n(4)),d=n(5),a=n(7),l=n(6),r=(n(13),n(14),n(0)),u=function(e){return Object(r.jsx)("div",{className:"AppHeader",children:Object(r.jsx)("p",{children:"Todo List"})})},p=(n(16),n(17),n(18),function(e){return Object(r.jsxs)("div",{className:e.AppTodoItemClasses,id:e.indexOfItem,children:[Object(r.jsx)("div",{children:e.name}),Object(r.jsx)("button",{className:"ItemDelete",onClick:e.deleteItem,children:"\u2612"})]})}),j=function(e){var t=e.todoList.map((function(t,n){return Object(r.jsx)(p,{indexOfItem:n,name:t.name,AppTodoItemClasses:e.AppTodoItemClasses,deleteItem:e.deleteItem.bind(undefined)},n)}));return Object(r.jsx)("div",{className:"AppTodoList",children:t})},m=function(e){return Object(r.jsx)("div",{className:"AppBody",children:Object(r.jsx)(j,{todoList:e.todoList,AppTodoItemClasses:e.AppTodoItemClasses,deleteItem:e.deleteItem})})},b=(n(19),function(e){return Object(r.jsxs)("div",{className:"AppAddItem",children:[Object(r.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c: "}),Object(r.jsx)("input",{}),Object(r.jsx)("button",{className:"AddItemButton",onClick:e.addItem,children:"\u2611"})]})}),f=(n(20),function(e){return Object(r.jsxs)("div",{className:"AppFooter",children:[Object(r.jsx)("p",{children:"Created by yachebunin"}),Object(r.jsx)("button",{onClick:e.clearAll,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435"})]})}),h=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todoList:[],AppTodoItemClasses:["AppTodoItem"]},e.addItem=function(){if(""!==document.querySelector("input").value){var t=e.state.todoList;t.push({name:document.querySelector("input").value}),e.setState({todoList:t}),document.querySelector("input").value=""}},e.deleteItem=function(t){var n=e.state.todoList;n.splice(t.target.parentElement.id,1),e.setState({todoList:n})},e.clearAll=function(){e.setState({todoList:[]})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)(m,{todoList:this.state.todoList,AppTodoItemClasses:this.state.AppTodoItemClasses,deleteItem:this.deleteItem}),Object(r.jsx)(b,{addItem:this.addItem}),Object(r.jsx)(f,{clearAll:this.clearAll})]})}}]),n}(s.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),o(e),c(e),i(e)}))};c.a.render(Object(r.jsx)(h,{}),document.getElementById("root")),I()}],[[21,1,2]]]);
//# sourceMappingURL=main.9326cf88.chunk.js.map