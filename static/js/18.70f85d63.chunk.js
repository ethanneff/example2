(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[18],{219:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(171),i=n(0),a=n.n(i),s=n(170),o=n(24),u=n(69),m=n(4),l=n(41),b=(n(121),n(169)),d={name:"",description:""};t.default=Object(i.memo)((function(){var e=Object(l.d)(),t=Object(m.e)(),n=Object(i.useState)(d),p=Object(r.a)(n,2),f=p[0],j=p[1],h=Object(m.f)((function(e){return e.checklists.active})),O=0===f.name.trim().length;return a.a.createElement(s.j,{onLeftPress:e.to("checklistsList"),title:"Create Item",gutter:!0},a.a.createElement(s.m,{title:"name",value:f.name,onChangeText:function(e){return j((function(t){return Object(c.a)({},t,{name:e})}))},blurOnSubmit:!0}),a.a.createElement(s.m,{title:"description",value:f.description,onChangeText:function(e){return j((function(t){return Object(c.a)({},t,{description:e})}))}}),a.a.createElement(s.b,{title:"create",onPress:function(){if(!O){var e=f.name,n=f.description,c=Date.now();if(!h)throw new Error(m.b.MissingCurrentChecklistCreatingItem);t(Object(u.c)({name:e,description:n,completed:!1,active:!0,createdAt:c,id:Object(b.a)(),checklistId:h,order:c,updatedAt:c,userId:"1"})),t(Object(o.j)("checklistsList"))}}}))}))}}]);
//# sourceMappingURL=18.70f85d63.chunk.js.map