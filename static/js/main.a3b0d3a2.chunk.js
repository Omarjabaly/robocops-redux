(this["webpackJsonprobocops-redux"]=this["webpackJsonprobocops-redux"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),i=n(3),s=n.n(i),a=n(6),l=(n(26),n(2)),d="SET_SEARCH_FIELD",h="REQUEST_ROBOTS_PENDING",u="REQUEST_ROBOTS_SUCCESS",b="REQUEST_ROBOTS_FAILED",j={searchField:""},f={isPending:!1,robots:[],error:""},p=(n(27),n(15)),g=n(4),O=n(5),v=n(8),m=n(7),x=function(e){var t=e.id,n=e.name,r=e.email;return Object(o.jsxs)("div",{className:"tc w5 h10 ma2 ba bw1 b--purple br3 shadow-3 grow",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(t,".jp2?size=200x200"),alt:"Robocop",style:{width:"200 px",height:"200 px"}}),Object(o.jsx)("h1",{className:"f3",children:n}),Object(o.jsx)("h2",{className:"f6 normal",children:r})]})},w=function(e){var t=e.robots;return Object(o.jsx)("div",{className:"flex flex-wrap justify-center",children:t.map((function(e){return Object(o.jsx)(x,{id:e.id,name:e.name,email:e.email},e.id)}))})},y=(n(28),function(e){var t=e.searchChange;return Object(o.jsx)("div",{className:"ma4",children:Object(o.jsxs)("label",{children:["insert robot name",Object(o.jsx)("input",{onChange:t,type:"text",placeholder:"Search Robocops"})]})})}),S=(n(29),function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",height:"500px",border:"3px solid midnightblue"},children:e.children})}),R=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{className:"tc",children:"OOOOOOPPPPPPSSSSSS.....Something Went Wrong.."}):this.props.children}}]),n}(r.Component),E=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,c=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h3",{className:"f1 ma3",children:"Robocops"}),Object(o.jsx)(y,{searchChange:n}),c?Object(o.jsx)("div",{className:"flex justify-center f4",children:Object(o.jsx)("h1",{children:"Loading...."})}):Object(o.jsx)("div",{className:"tc",children:Object(o.jsx)(R,{children:Object(o.jsx)(S,{children:Object(o.jsx)(w,{robots:i})})})})]})}}]),n}(r.Component),C=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.getRobots.isPending,robots:e.getRobots.robots,error:e.getRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onGetRobots:function(){return e((function(e){e({type:h}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:u,payload:t})})).catch((function(t){return e({type:b,payload:t})}))}))}}}))(E),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object.assign({},e,{searchField:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object.assign({},e,{isPending:!0});case u:return Object.assign({},e,{isPending:!1,robots:t.payload});case b:return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),W=Object(l.d)(N,Object(l.a)(p.a));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(a.a,{store:W,children:Object(o.jsx)(C,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robocops-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robocops-redux","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.a3b0d3a2.chunk.js.map