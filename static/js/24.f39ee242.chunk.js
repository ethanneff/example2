(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[24],{221:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(172),r=n(0),i=n.n(r),s=n(171),o=n(69),u=n(42),l=n(4),b=n(24);t.default=Object(r.memo)((function(){var e=Object(u.d)(),t=Object(l.f)(),n=Object(l.g)(o.f),m=Object(r.useState)(!1),j=Object(a.a)(m,2),d=j[0],O=j[1],p=Object(r.useState)({name:n.name,description:n.description||""}),f=Object(a.a)(p,2),h=f[0],k=f[1],g=0===h.name.trim().length,C=Object(r.useCallback)((function(){O(!1),t(Object(o.i)(n.id)),t(Object(b.j)("checklists"))}),[t,n.id]),E=Object(r.useCallback)((function(){return O(!0)}),[]),P=Object(r.useCallback)((function(){return O(!1)}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.j,{gutter:!0,onLeftPress:e.to("checklists"),title:"Update Checklist"},i.a.createElement(s.n,{onChangeText:function(e){return k((function(t){return Object(c.a)({},t,{name:e})}))},title:"name",value:h.name}),i.a.createElement(s.n,{onChangeText:function(e){return k((function(t){return Object(c.a)({},t,{description:e})}))},title:"description",value:h.description}),i.a.createElement(s.b,{onPress:function(){var e=h.name,a=h.description,r=Date.now();g||(t(Object(o.m)(Object(c.a)({},n,{name:e,description:a,updatedAt:r}))),t(Object(b.j)("checklists")))},title:"update"}),i.a.createElement(s.b,{color:"danger",onPress:E,title:"delete"})),d&&i.a.createElement(s.e,{onBackgroundPress:P,onCancelButtonPress:P,onConfirmButtonPress:C,title:"are you sure?"}))}))}}]);
//# sourceMappingURL=24.f39ee242.chunk.js.map