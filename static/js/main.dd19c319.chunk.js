(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),a=n(6),u=n.n(a),i=n(5),o=n(3),d=n(26),p=n(7),l=n(8),j=n(10),f=n(9),h=n(4),b=n.n(h),O=n(11),v=n(27),m=n.n(v),x=n(28),y=n.n(x).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),g=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?Object(r.jsx)("div",{className:"header",children:e.name}):null}}]),n}(s.a.Component),E=Object(i.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(k),N=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("i",{className:"large middle aligned icon user"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.body})]}),Object(r.jsx)(E,{userId:e.userId})]})]},e.id)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"ui relaxed divided list",children:this.renderList()})}}]),n}(s.a.Component),S=Object(i.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(O.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("about to fetch posts"),e.next=3,t(g());case 3:m.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(w(e))})).value();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(N),C=function(){return Object(r.jsx)("div",{className:"ui container",children:Object(r.jsx)(S,{})})},T=n(29),U=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(T.a)(e),[t.payload]);default:return e}}}),F=Object(o.d)(U,Object(o.a)(d.a));u.a.render(Object(r.jsx)(i.a,{store:F,children:Object(r.jsx)(C,{})}),document.querySelector("#root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.dd19c319.chunk.js.map