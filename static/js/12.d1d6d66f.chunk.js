(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[12],{412:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(1),a=n(6),r=n(415),o=n(360),s=n(79),l=n(13),b=n(159),j=n(31),u=n(10),d=n(7),O={borderRadius:a.b.padding(2),padding:a.b.padding(4),alert:{width:.8,height:.6}},m=function(){var e=Object(j.useIsFocused)(),t=Object(a.g)((function(e){return e.device.keyboardHeight}));return e&&t?t:0},p=n(20),g=n(2),h=n(361),f=function(e){var t=Date.now();return{id:Object(h.a)(),title:"",userId:e,description:"",active:!0,createdAt:t,updatedAt:t,tags:[],editable:!0,children:[],type:"note"}},x=function(e){return[Object(g.a)(Object(g.a)({},f(e)),{},{title:"Backlog",type:"list"}),Object(g.a)(Object(g.a)({},f(e)),{},{title:"Todo",type:"list"}),Object(g.a)(Object(g.a)({},f(e)),{},{title:"In Progress",type:"list"}),Object(g.a)(Object(g.a)({},f(e)),{},{title:"Done",type:"list"})]},y=function(){var e=Date.now(),t=Object(h.a)(),n=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"do dishes"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"schedule meeting with Jim"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"run 4 miles"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"change oil"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"what is the best mediation"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"record Kelly birthday on Sep 22"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"drink water"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"intensity + focus = deep work"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"put $20 in phone"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"clear emails"})],c=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"clean desk"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"clean room"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"walk dog"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"brush teeth"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"do laundry"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"fix sink"})],i=x(t);i[0].children=c.map((function(e){return e.id}));var a=x(t),r=x(t),o=x(t),s=x(t),l=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"one one one"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"q1 planning"})],b=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"eat that frog"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"deep work"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"the one thing"})],j=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"girlfriend"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"sister"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"parents"})],u=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"after bathroom"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"before car"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"before sleep"})],d=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"php"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"javascript"}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"swift"})],O=[Object(g.a)(Object(g.a)({},f(t)),{},{type:"board",title:"at home",children:i.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"board",title:"at town",children:a.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"board",title:"at work",children:r.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"board",title:"at gym",children:o.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"board",title:"app release",children:s.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"list",title:"meeting notes",children:l.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"list",title:"book notes",children:b.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"list",title:"gift ideas",children:j.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"list",title:"checklists",children:u.map((function(e){return e.id}))}),Object(g.a)(Object(g.a)({},f(t)),{},{type:"list",title:"coding",children:d.map((function(e){return e.id}))})],m=[Object(g.a)(Object(g.a)({},f(t)),{},{title:"Inbox",type:"list",children:n.map((function(e){return e.id})),editable:!1}),Object(g.a)(Object(g.a)({},f(t)),{},{title:"Projects",type:"list",children:O.map((function(e){return e.id})),editable:!1})];return{user:{id:t,active:!0,email:"bob@smith.com",createdAt:e,updatedAt:e,name:"Bob Smith",items:m.map((function(e){return e.id}))},items:[].concat(n,c,Object(p.a)(i),Object(p.a)(a),Object(p.a)(r),Object(p.a)(o),Object(p.a)(s),l,b,j,u,d,O,m)}},v=n(55),k=function(){var e=Object(j.useNavigation)().addListener;Object(i.useEffect)((function(){return e("tabPress",(function(){v.a.play("tap")}))}),[e])},I=n(41),C=Object(i.memo)((function(e){var t=e.value,n=e.multiline,r=e.iconHeight,o=void 0===r?a.b.padding(6):r,b=e.placeholder,j=e.backgroundColor,O=e.editable,m=e.pointerEvents,p=e.icons,g=e.type,h=e.onSubmit,f=e.blurOnSubmit,x=e.onFocus,y=e.numberOfLines,v=e.onBlur,k=e.onRef,C=Object(l.a)(),w=j||C.background,P=Object(i.useState)(t),S=Object(u.a)(P,2),B=S[0],R=S[1],T=Object(i.useState)(!1),E=Object(u.a)(T,2),D=E[0],L=E[1],A=Object(i.useCallback)((function(e){R(e)}),[]),F=Object(i.useCallback)((function(){L(!0),x&&x()}),[x]),z=Object(i.useCallback)((function(){var e=B.trim();h(e),""===t&&R("")}),[h,B,t]),N=Object(i.useCallback)((function(){R(t),L(!1),v&&v()}),[v,t]),H=Object(i.useCallback)((function(e){return function(){e(B),""===t&&R("")}}),[B,t]),M=Object(i.useCallback)((function(e){return e.preventDefault()}),[]);return Object(i.useEffect)((function(){R(t)}),[t]),Object(c.jsxs)(d.a,{style:{flex:1,flexDirection:"row",alignItems:"center"},children:[Object(c.jsx)(s.t,{backgroundColor:w,blurOnSubmit:f,editable:O,flex:!0,multiline:n,numberOfLines:y,onBlur:N,onChangeText:A,onFocus:F,onRef:k,onSubmitEditing:z,placeholder:b,pointerEvents:m,returnKeyType:"done",type:g,value:B}),Object(c.jsx)(I.i,{onPress:M,style:{flexDirection:"row"},children:p.map((function(e){return e.hidden||D&&!e.focus||!D&&e.focus?null:Object(c.jsx)(s.g,{color:e.color,disabled:e.required&&0===B.trim().length,name:e.name,onPress:H(e.onPress),padded:!0,size:o},"".concat(e.name,"-focus"))}))})]})})),w=Object(i.memo)((function(e){var t=e.width,n=e.placeholder,r=e.title,o=e.noSubmitFocus,b=e.onSubmit,j=Object(l.a)(),m=Object(i.useRef)(null),p=Object(i.useState)(!1),g=Object(u.a)(p,2),h=g[0],f=g[1],x=Object(i.useCallback)((function(){f((function(e){return!e}))}),[]),y=Object(i.useCallback)((function(){f(!1)}),[]),v=Object(i.useCallback)((function(e){var t;b(e),o&&(null===(t=m.current)||void 0===t||t.blur())}),[o,b]),k=Object(i.useCallback)((function(){f(!1)}),[]),I=[{name:"close",onPress:y,focus:!0},{name:"send",onPress:v,color:j.primary,focus:!0,required:!0}];return Object(i.useEffect)((function(){var e;h&&(null===(e=m.current)||void 0===e||e.focus())}),[h]),Object(c.jsx)(d.a,{style:{width:t,height:a.b.padding(12),borderRadius:O.borderRadius,backgroundColor:j.background,justifyContent:"center"},children:h?Object(c.jsx)(C,{blurOnSubmit:!1,icons:I,onBlur:k,onRef:m,onSubmit:v,placeholder:n,value:""}):Object(c.jsx)(s.c,{center:!0,color:"primary",onPress:x,title:r})})})),P=n(183),S=n(96),B=Object(i.memo)((function(e){var t=e.placeholder,n=e.title,r=e.parentItemId,o=e.width,s=Object(a.f)(),l=Object(a.g)((function(e){var t;return null===(t=e.completeUser)||void 0===t?void 0:t.id}));if(!l)throw new Error("missing userId on add item");if(!r)throw new Error("missing parentItemId on add item");var b=Object(i.useCallback)((function(e){if(!e)return P.a.dismiss();var t=Object(h.a)(),n=Date.now(),c={id:t,userId:l,active:!0,title:e,createdAt:n,updatedAt:n,children:[],tags:[],description:"",editable:!0,type:"note"};s(Object(S.f)(c)),s(Object(S.a)({parentItemId:r,itemId:t}))}),[s,r,l]);return Object(c.jsx)(w,{onSubmit:b,placeholder:t,title:n,width:o})})),R=Object(i.memo)((function(e){var t=e.children,n=e.onLayout,i=e.margin,a=void 0===i?"none":i,r=e.width,o=e.flex,s=Object(l.a)();return Object(c.jsx)(d.a,{onLayout:n,style:{flex:o?1:0,width:r,borderRadius:O.borderRadius,backgroundColor:s.background,padding:O.padding/2,marginRight:"right"===a?O.padding:0,marginBottom:"bottom"===a?O.padding:0},children:t})})),T=Object(i.memo)((function(e){var t=e.itemId,n=e.parentItemId,r=Object(a.f)(),o=Object(j.useNavigation)().navigate,s=Object(l.a)(),b=Object(a.g)((function(e){return e.completeItem.items[t]})),u=Object(i.useCallback)((function(e){r(Object(S.p)(Object(g.a)(Object(g.a)({},b),{},{title:e}))),P.a.dismiss()}),[r,b]),O=Object(i.useCallback)((function(){r(Object(S.j)({parentItemId:n,itemId:t})),o("item-detail")}),[r,t,o,n]),m=[{name:"close",onPress:Object(i.useCallback)((function(){return P.a.dismiss()}),[]),focus:!0},{name:"send",onPress:u,color:s.primary,focus:!0,required:!0},{name:"dots-horizontal",onPress:O}];return Object(c.jsx)(d.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:Object(c.jsx)(C,{editable:b.editable,icons:m,onSubmit:u,placeholder:"List title...",type:"h4",value:b.title})})})),E=n(121),D=Object(i.memo)((function(e){var t=e.index,n=e.itemId,r=e.parentItemId,o=Object(a.g)((function(e){return e.completeItem.items[n]})),s=Object(a.g)((function(e){return e.completeItem.items[r].children.length})),b=Object(i.useRef)(null),u=Object(a.f)(),d=Object(j.useNavigation)().navigate,m=Object(l.a)(),p=Object(i.useCallback)((function(){P.a.dismiss()}),[]),h=Object(i.useCallback)((function(e){u(Object(S.p)(Object(g.a)(Object(g.a)({},o),{},{title:e}))),P.a.dismiss()}),[u,o]),f=Object(i.useCallback)((function(){u(Object(S.k)({projectItemId:n})),d("project")}),[u,n,d]),x=Object(i.useCallback)((function(){u(Object(S.j)({parentItemId:r,itemId:n})),d("item-detail")}),[u,n,d,r]),y=Object(i.useCallback)((function(){}),[]),v=Object(i.useCallback)((function(){var e;null===(e=b.current)||void 0===e||e.focus()}),[]),k=Object(i.useCallback)((function(){console.log("up",t),0!==t&&u(Object(S.o)({parentItemId:r,i:t,j:t-1}))}),[u,t,r]),w=Object(i.useCallback)((function(){console.log("down",t,s),t>=s-1||u(Object(S.o)({parentItemId:r,i:t,j:t+1}))}),[u,t,s,r]),B=[{name:"close",onPress:p,focus:!0},{name:"send",onPress:h,color:m.primary,focus:!0,required:!0},{name:"chevron-up",onPress:k,hidden:!0},{name:"chevron-down",onPress:w,hidden:!0},{name:"dots-horizontal",onPress:x},{name:"chevron-right",onPress:f,hidden:!o.children.length}];return Object(c.jsx)(I.i,{onLongPress:y,onPress:v,style:{flex:1,borderRadius:O.borderRadius,margin:O.padding/2,backgroundColor:m.surface,flexDirection:"row"},children:Object(c.jsx)(C,{backgroundColor:m.surface,icons:B,onRef:b,onSubmit:h,placeholder:"Item name...",pointerEvents:"none",value:o.title})},o.id)})),L=Object(i.memo)((function(e){var t=e.parentItemId,n=Object(a.g)((function(e){return e.completeItem.items[t].children})),r=Object(i.useRef)(null),o=Object(i.useRef)(n.length),s=Object(i.useCallback)((function(e){return e}),[]),l=Object(i.useCallback)((function(){var e;n.length>o.current&&(null===(e=r.current)||void 0===e||e.scrollToEnd(),o.current=n.length)}),[n.length]),b=Object(i.useCallback)((function(e){var n=e.item,i=e.index;return Object(c.jsx)(D,{index:i,itemId:n,parentItemId:t},n)}),[t]);return Object(c.jsx)(E.a,{data:n,keyExtractor:s,keyboardShouldPersistTaps:"handled",onContentSizeChange:l,ref:r,renderItem:b,showsVerticalScrollIndicator:!1})})),A=Object(i.memo)((function(e){var t=e.itemId,n=e.parentItemId,i=e.orientation,a=void 0===i?"vertical":i,r=e.listWidth,o=e.maxHeight,s=e.footer,l="horizontal"===a,b=l?0:O.padding,j=l?"right":"bottom";return Object(c.jsxs)(d.a,{style:{padding:b,maxHeight:o},children:[Object(c.jsxs)(R,{margin:j,width:r,children:[Object(c.jsx)(T,{itemId:t,parentItemId:n}),Object(c.jsx)(L,{parentItemId:t}),Object(c.jsx)(B,{parentItemId:t,placeholder:"Item title...",title:"Add item"})]}),s||null]})})),F=Object(i.memo)((function(e){var t=e.projectItemId,n=e.listMaxHeight,r=e.listWidth,o=r+O.padding,s=Object(a.g)((function(e){return e.completeItem.items[t]})),l=Object(i.useCallback)((function(e){return e}),[]),b=Object(i.useCallback)((function(e,t){return{length:o,offset:o*t,index:t}}),[o]),j=Object(i.useCallback)((function(){return Object(c.jsx)(B,{parentItemId:s.id,placeholder:"List title...",title:"Add list",width:r})}),[s.id,r]),u=Object(i.useCallback)((function(e){var t=e.item;return Object(c.jsx)(A,{itemId:t,listWidth:r,maxHeight:n,orientation:"horizontal",parentItemId:s.id},t)}),[s.id,n,r]);return Object(c.jsx)(d.a,{children:"list"===s.type?Object(c.jsx)(A,{itemId:s.id,maxHeight:n,parentItemId:s.id}):Object(c.jsx)(I.a,{ListFooterComponent:j,contentContainerStyle:{padding:O.padding},data:s.children,decelerationRate:"fast",getItemLayout:b,horizontal:!0,keyExtractor:l,keyboardShouldPersistTaps:"handled",renderItem:u,showsHorizontalScrollIndicator:!1,snapToAlignment:"center",snapToInterval:o,style:{height:"100%"}})})})),z=Object(i.memo)((function(e){var t=e.onCancel,n=e.onDelete;return Object(c.jsx)(s.k,{onBackgroundPress:t,showOverlay:!0,widthPercent:.5,children:Object(c.jsxs)(d.a,{style:{alignItems:"center"},children:[Object(c.jsx)(s.s,{style:{paddingBottom:a.b.padding(2)},title:"Are you sure?",type:"h5"}),Object(c.jsxs)(d.a,{style:{flexDirection:"row",justifyContent:"center"},children:[Object(c.jsx)(s.c,{onPress:t,title:"close"}),Object(c.jsx)(s.c,{color:"danger",onPress:n,title:"delete"})]})]})})})),N=Object(i.memo)((function(e){var t=e.title;return Object(c.jsx)(s.s,{emphasis:"medium",style:{padding:a.b.padding(2)},title:t,type:"overline"})})),H=Object(i.memo)((function(e){var t=e.type,n=e.userId,i=e.createdAt,r=e.updatedAt;return Object(c.jsx)(d.a,{children:Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(N,{title:"Type"}),Object(c.jsx)(s.s,{style:{padding:a.b.padding(2)},title:t}),Object(c.jsx)(N,{title:"Creator"}),Object(c.jsx)(s.s,{style:{padding:a.b.padding(2)},title:n}),Object(c.jsx)(N,{title:"Created"}),Object(c.jsx)(s.n,{date:i,style:{padding:a.b.padding(2)}}),Object(c.jsx)(N,{title:"Updated"}),Object(c.jsx)(s.n,{date:r,style:{padding:a.b.padding(2)}})]})})})),M=Object(i.memo)((function(e){var t=e.title,n=e.description,a=void 0===n?"":n,r=e.placeholder,o=e.onSubmit,s=Object(l.a)(),b=Object(i.useCallback)((function(){return P.a.dismiss()}),[]),j=Object(i.useCallback)((function(e){return[{name:"close",onPress:b,focus:!0},{name:"send",onPress:o(e),color:s.primary,focus:!0,required:!0}]}),[s.primary,b,o]);return Object(c.jsx)(d.a,{children:Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(N,{title:"Title"}),Object(c.jsx)(C,{icons:j("title"),onSubmit:o("title"),placeholder:"".concat(r," title..."),value:t}),Object(c.jsx)(N,{title:"Details"}),Object(c.jsx)(C,{icons:j("description"),multiline:!0,onSubmit:o("description"),placeholder:"".concat(r," details..."),value:a||""})]})})})),q=Object(i.memo)((function(e){var t=e.title,n=e.onLeftPress,i=e.size,r=void 0===i?a.b.padding(8):i,o=e.onRightPress;return Object(c.jsxs)(d.a,{style:{flexDirection:"row",alignItems:"center",marginBottom:a.b.padding(4)},children:[Object(c.jsx)(s.g,{invisible:!n,name:"chevron-left",onPress:n,padded:!0,size:r}),Object(c.jsx)(s.s,{center:!0,flex:!0,title:t,type:"h4"}),Object(c.jsx)(s.g,{invisible:!o,name:"close",onPress:o,padded:!0,size:r})]})})),W=Object(i.memo)((function(){var e=Object(l.a)(),t=Object(a.f)(),n=Object(j.useNavigation)(),r=n.goBack,o=n.navigate,b=Object(i.useCallback)((function(){return r()}),[r]),u=Object(i.useCallback)((function(){t(Object(S.n)())}),[t]),d=Object(i.useCallback)((function(){return o("admin")}),[o]);return Object(c.jsxs)(s.k,{backgroundColor:e.surface,onBackgroundPress:b,children:[Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(s.s,{emphasis:"low",style:{paddingBottom:a.b.padding(4)},title:"Profile",type:"h5"}),Object(c.jsx)(s.s,{center:!0,emphasis:"medium",title:"...",type:"h4"})]}),Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(s.s,{emphasis:"low",style:{paddingBottom:a.b.padding(4)},title:"Reminders",type:"h5"}),Object(c.jsx)(s.s,{center:!0,emphasis:"medium",title:"...",type:"h4"})]}),Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(s.s,{emphasis:"low",style:{paddingBottom:a.b.padding(4)},title:"Payment",type:"h5"}),Object(c.jsx)(s.s,{center:!0,emphasis:"medium",title:"...",type:"h4"})]}),Object(c.jsxs)(R,{margin:"bottom",children:[Object(c.jsx)(s.s,{emphasis:"low",style:{paddingBottom:a.b.padding(4)},title:"Feedback",type:"h5"}),Object(c.jsx)(s.s,{center:!0,emphasis:"medium",title:"...",type:"h4"})]}),Object(c.jsx)(s.c,{onPress:u,title:"logout"}),Object(c.jsx)(s.c,{onPress:d,title:"go to admin"})]})})),J={container:0,button:0,size:0},U=Object(i.memo)((function(){k();var e=Object(j.useNavigation)().navigate,t=Object(l.a)(),n=Object(i.useRef)(J),r=m(),o=Object(i.useState)(0),b=Object(u.a)(o,2),d=b[0],O=b[1],p=d-r-a.b.padding(r?11:48),g=Object(a.g)(S.h);if(!g)throw new Error("missing item id");var h=Object(a.g)((function(e){return 0===e.completeItem.items[g].children.length})),f=Object(i.useCallback)((function(){}),[]),x=Object(i.useCallback)((function(e){return function(t){var c=t.nativeEvent.layout.height;n.current[e]||(n.current[e]=c);var i=n.current,a=i.container,r=i.button,o=i.size;if(a>0&&r>0&&!o){var s=a-r;O(s),n.current.size=s}}}),[]),y=Object(i.useCallback)((function(){return e("account")}),[e]);return Object(c.jsx)(s.o,{onRightPress:y,rightIcon:"account",title:"Plan",children:Object(c.jsx)(s.i,{backgroundColor:t.surface,onLayout:x("container"),children:Object(c.jsx)(A,{footer:Object(c.jsx)(R,{onLayout:x("button"),children:Object(c.jsx)(s.c,{center:!0,color:"primary",disable:h,onPress:f,title:"Organize"})}),itemId:g,maxHeight:p,parentItemId:null})})})})),V=n(18),G=Object(i.memo)((function(){var e=Object(a.f)(),t=Object(j.useNavigation)().goBack,n=Object(l.a)(),r=Object(i.useCallback)((function(){return t()}),[t]),o=Object(a.g)((function(e){return e.completeItem.nav})),b=o.itemId,O=o.parentItemId,m=Object(a.g)((function(e){return e.completeItem.items[b||""]})),p=Object(i.useState)(!1),h=Object(u.a)(p,2),f=h[0],x=h[1],y=Object(i.useCallback)((function(){if(!b||!O)throw new Error("missing listId or itemId on item detail screen");e(Object(S.l)(b)),e(Object(S.m)({parentItemId:O,itemId:b})),x(!1),t()}),[e,t,b,O]),v=Object(i.useCallback)((function(t){return function(n){e(Object(S.p)(Object(g.a)(Object(g.a)({},m),{},Object(V.a)({},t,n)))),P.a.dismiss()}}),[e,m]),k=Object(i.useCallback)((function(){return x(!0)}),[]),I=Object(i.useCallback)((function(){return x(!1)}),[]);return m?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.k,{backgroundColor:n.surface,onBackgroundPress:r,children:m?Object(c.jsxs)(d.a,{children:[Object(c.jsx)(M,{description:m.description,onSubmit:v,placeholder:"Item",title:m.title}),Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsx)(s.s,{title:"Reminders"})}),Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsx)(s.s,{title:"Tags"})}),Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsx)(s.s,{title:"Comments"})}),Object(c.jsx)(H,{createdAt:m.createdAt,type:m.type,updatedAt:m.updatedAt,userId:m.userId}),m.editable?Object(c.jsxs)(d.a,{style:{flexDirection:"row",flex:1,justifyContent:"space-between"},children:[Object(c.jsx)(R,{flex:!0,children:Object(c.jsx)(s.c,{center:!0,onPress:r,title:"close"})}),Object(c.jsx)(d.a,{style:{padding:a.b.padding(2)}}),Object(c.jsx)(R,{flex:!0,children:Object(c.jsx)(s.c,{center:!0,color:"danger",onPress:k,title:"delete"})})]}):Object(c.jsx)(R,{flex:!0,children:Object(c.jsx)(s.c,{center:!0,onPress:r,title:"close"})})]}):Object(c.jsx)(s.s,{title:"missing item"})}),f?Object(c.jsx)(z,{onCancel:I,onDelete:y}):null]}):null})),K={email:"",password:""},$=Object(i.memo)((function(){var e=Object(l.a)(),t=Object(a.f)(),n=Object(j.useIsFocused)(),r=Object(i.useState)(K),o=Object(u.a)(r,2),b=o[0],d=o[1],O=Object(j.useNavigation)(),m=O.goBack,p=O.navigate,h=Object(i.useCallback)((function(){return m()}),[m]),f=Object(i.useCallback)((function(){return p("welcome")}),[p]),x=Object(i.useCallback)((function(){return p("reset-password")}),[p]),v=b.email.length>0&&b.password.length>0,k=Object(i.useCallback)((function(){var e=y(),n=e.user;e.items.map((function(e){return t(Object(S.f)(e))})),t(Object(S.g)(Object(g.a)(Object(g.a)({},n),{},{email:b.email})))}),[t,b.email]),I=Object(i.useCallback)((function(e){return function(t){return d((function(n){return Object(g.a)(Object(g.a)({},n),{},Object(V.a)({},e,t))}))}}),[]);return n?Object(c.jsxs)(s.k,{backgroundColor:e.surface,onBackgroundPress:f,children:[Object(c.jsx)(q,{onRightPress:h,title:"Log in"}),Object(c.jsx)(s.t,{onChangeText:I("email"),placeholder:"Email address",style:{marginBottom:a.b.padding(4)},value:b.email}),Object(c.jsx)(s.t,{onChangeText:I("password"),placeholder:"Password",style:{marginBottom:a.b.padding(4)},value:b.password}),Object(c.jsx)(s.c,{buttonStyle:{marginBottom:a.b.padding(4)},center:!0,color:"primary",lowercase:!0,onPress:x,title:"Forgot password?"}),Object(c.jsx)(s.c,{center:!0,color:"primary",disable:!v,emphasis:"high",onPress:k,title:"Log In"})]}):null})),Q=n(42),X=Object(i.memo)((function(){var e=Object(j.useNavigation)().goBack,t=Object(l.a)(),n=Object(a.g)(Q.k),r=Object(a.g)((function(e){return e.completeItem.nav})).projectItemId;if(!r)throw new Error("missing projectItemId on board screen");var o=Object(a.g)((function(e){return e.completeItem.items[r].type})),b=Object(a.g)((function(e){return e.completeItem.items[r].title}));if(!o)throw new Error("missing projectItemType on board screen");var d=.7*n,O=Object(i.useState)(0),p=Object(u.a)(O,2),g=p[0],h=p[1],f=m(),x=a.b.padding("list"===o?12:0),y=a.b.padding(f?28:48),v=g-f-y+x,k=Object(i.useCallback)((function(e){g>0||h(e.nativeEvent.layout.height)}),[g]),I=Object(i.useCallback)((function(){e()}),[e]);return Object(c.jsx)(s.o,{onLeftPress:I,title:b,children:Object(c.jsx)(s.i,{backgroundColor:t.surface,onLayout:k,children:Object(c.jsx)(F,{listMaxHeight:v,listWidth:d,projectItemId:r})})})})),Y=Object(i.memo)((function(){var e=Object(l.a)(),t=Object(j.useNavigation)().navigate,n=Object(i.useState)(0),r=Object(u.a)(n,2),o=r[0],b=r[1],d=m(),O=Object(a.g)(S.i);if(!O)throw new Error("missing item id");var p=a.b.padding(d?16:35),g=o-d-p,h=Object(i.useCallback)((function(e){o>0||b(e.nativeEvent.layout.height)}),[o]),f=Object(i.useCallback)((function(){return t("account")}),[t]);return Object(c.jsx)(s.o,{onRightPress:f,onSecondRightPress:f,rightIcon:"account",secondRightIcon:"magnify",title:"Implement",children:Object(c.jsx)(s.i,{backgroundColor:e.surface,onLayout:h,children:Object(c.jsx)(A,{itemId:O,maxHeight:g,parentItemId:null},O)})})})),Z=n(39),_=n(413),ee=n(414),te=n(421),ne=n(410),ce=n(8),ie=n(368),ae=n.n(ie),re=function(e){return[Math.min.apply(Math,Object(p.a)(e)),Math.max.apply(Math,Object(p.a)(e))]},oe=function(e){var t=e.data,n=e.width,i=e.height,a=Object(_.a)().domain(re(t.map((function(e){return e.date})))).range([0,n]),r=Object(ee.a)().domain(re(t.map((function(e){return e.value})))).range([i-2,2]),o=te.a().x((function(e){return a(e.date)})).y((function(e){return r(e.value)})).curve(ne.a)(t);return Object(c.jsx)(d.a,{style:{width:n,height:i},children:Object(c.jsxs)(ae.a,{style:ce.a.absoluteFill,children:[Object(c.jsx)(ie.Defs,{children:Object(c.jsxs)(ie.LinearGradient,{id:"gradient",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[Object(c.jsx)(ie.Stop,{offset:"0%",stopColor:"#cee3f9"}),Object(c.jsx)(ie.Stop,{offset:"80%",stopColor:"#ddedfa"}),Object(c.jsx)(ie.Stop,{offset:"100%",stopColor:"#feffff"})]})}),Object(c.jsx)(ie.Path,{d:"".concat(o,"L ").concat(n," ").concat(i," L 0 ").concat(i),fill:"url(#gradient)"}),Object(c.jsx)(ie.Path,Object(g.a)({fill:"transparent",stroke:"#3977e3"},{d:o,strokeWidth:4}))]})})},se=function(e){var t=e.name;return Object(c.jsx)(s.s,{emphasis:"high",style:{paddingBottom:O.padding},title:t,type:"h4"})},le=[{date:new Date(2018,9,1).getTime(),value:0},{date:new Date(2018,9,16).getTime(),value:0},{date:new Date(2018,9,17).getTime(),value:200},{date:new Date(2018,10,1).getTime(),value:200},{date:new Date(2018,10,2).getTime(),value:300},{date:new Date(2018,10,5).getTime(),value:300}],be=Object(i.memo)((function(){k();var e=Object(l.a)(),t=Object(j.useNavigation)().navigate,n=Object(i.useCallback)((function(){return t("account")}),[t]);return Object(c.jsx)(s.o,{onRightPress:n,rightIcon:"account",title:"Reflect",children:Object(c.jsxs)(I.e,{contentContainerStyle:{padding:a.b.padding(4),backgroundColor:e.surface},style:{backgroundColor:e.surface},children:[Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(se,{name:"Purpose"}),Object(c.jsx)(s.s,{title:"Make a significant positive difference in global productivity"})]})}),Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(se,{name:"Goals"}),Object(c.jsx)(s.s,{title:"Top 3"}),Object(c.jsx)(s.s,{title:"Deep Focus"}),Object(c.jsx)(s.s,{title:"Smile"}),Object(c.jsx)(s.s,{title:"1 More Rep"})]})}),Object(c.jsx)(R,{margin:"bottom",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(se,{name:"Review (Progress)"}),Object(c.jsx)(d.a,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(oe,{data:le,height:200,width:Z.a.get("window").width-4*O.padding})})]})}),Object(c.jsx)(R,{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(se,{name:"Reflect (Journal)"}),Object(c.jsx)(s.d,{})]})})]})})})),je={email:""},ue=Object(i.memo)((function(){var e=Object(l.a)(),t=Object(i.useState)(je),n=Object(u.a)(t,2),r=n[0],o=n[1],b=Object(j.useNavigation)(),d=b.goBack,O=b.navigate,m=Object(j.useIsFocused)(),p=Object(i.useCallback)((function(){return d()}),[d]),h=Object(i.useCallback)((function(){return O("welcome")}),[O]),f=Object(i.useCallback)((function(e){return function(t){return o((function(n){return Object(g.a)(Object(g.a)({},n),{},Object(V.a)({},e,t))}))}}),[]),x=Object(i.useCallback)((function(){return d()}),[d]);return m?Object(c.jsxs)(s.k,{backgroundColor:e.surface,onBackgroundPress:h,children:[Object(c.jsx)(q,{onRightPress:x,title:"Reset password"}),Object(c.jsx)(s.t,{onChangeText:f("email"),placeholder:"Email address",style:{marginBottom:a.b.padding(4)},value:r.email}),Object(c.jsx)(s.c,{center:!0,color:"primary",disable:!r.email.length,emphasis:"high",onPress:p,title:"Reset password"})]}):null})),de={email:"",password:"",passwordError:!1},Oe=Object(i.memo)((function(){var e=Object(l.a)(),t=Object(a.f)(),n=Object(j.useIsFocused)(),r=Object(i.useState)(de),o=Object(u.a)(r,2),b=o[0],d=o[1],O=Object(j.useNavigation)(),m=O.goBack,p=O.navigate,h=Object(i.useCallback)((function(){return m()}),[m]),f=Object(i.useCallback)((function(){return p("welcome")}),[p]),x=Object(i.useCallback)((function(){return p("log-in")}),[p]),v=b.email.length&&b.password.length&&!b.passwordError,k=Object(i.useCallback)((function(){var e=y(),n=e.user;e.items.map((function(e){return t(Object(S.f)(e))})),t(Object(S.g)(Object(g.a)(Object(g.a)({},n),{},{email:b.email})))}),[t,b.email]),I=Object(i.useCallback)((function(e){return function(t){d((function(n){var c;return Object(g.a)(Object(g.a)({},n),{},(c={},Object(V.a)(c,e,t),Object(V.a)(c,"passwordError","password"===e&&t.length>0&&t.length<10),c))}))}}),[]);return n?Object(c.jsxs)(s.k,{backgroundColor:e.surface,onBackgroundPress:f,children:[Object(c.jsx)(q,{onRightPress:h,title:"Sign up"}),Object(c.jsx)(s.t,{onChangeText:I("email"),placeholder:"Email address",style:{marginBottom:a.b.padding(4)},value:b.email}),Object(c.jsx)(s.t,{onChangeText:I("password"),placeholder:"Create password",value:b.password}),Object(c.jsx)(s.s,{color:"danger",invisible:!b.passwordError,title:"Password is too short"}),Object(c.jsx)(s.c,{buttonStyle:{marginBottom:a.b.padding(4)},center:!0,color:"primary",lowercase:!0,onPress:x,title:"Already have an account?"}),Object(c.jsx)(s.c,{center:!0,color:"primary",disable:!v,emphasis:"high",onPress:k,title:"Sign up"})]}):null})),me=[{id:"1",icon:"trophy-outline",sections:[{title:"Welcome to accomplish",titleType:"h4",titleStyle:{paddingBottom:a.b.padding(10)},paragraphs:[[{title:"Start investing commission-free"}],[{title:"Other fees may apply. View our"},{title:"fee schedule",onPress:function(){}},{title:"to learn more. All investments have risks."}]]}]},{id:"2",icon:"trophy-outline",sections:[{title:"Enjoy commission-free stock trading",titleType:"h4",titleStyle:{paddingBottom:a.b.padding(10)},paragraphs:[[{title:"Invest in thousands of US an global stocks without paying commission or foreign exchange fees."}],[{title:"View fee disclosures",onPress:function(){}}]]}]},{id:"3",icon:"trophy-outline",sections:[{title:"No account minimum",titleType:"h4",titleStyle:{paddingBottom:a.b.padding(10)},paragraphs:[[{title:"Top up your account with as little or as much as you like."}]]}]},{id:"4",icon:"trophy-outline",sections:[{title:"Everything at your fingertips",titleType:"h4",titleStyle:{paddingBottom:a.b.padding(10)},paragraphs:[[{title:"Stay on top of your portfolio with real-time market data, business news, and customized notifications."}]]}]},{id:"5",icon:"trophy-outline",sections:[{title:"Account protection",titleType:"h4",titleStyle:{paddingBottom:a.b.padding(10)},paragraphs:[[{title:"Robinhood Financial is a member of SIPC. Securities in your account are protected up to $500,000. For details, please see"},{title:"www.sipc.org",onPress:function(){}},{title:"."}]]}]}],pe=Object(i.memo)((function(){var e=Object(j.useNavigation)().navigate,t=Object(i.useCallback)((function(){return e("sign-up")}),[e]),n=Object(i.useCallback)((function(){return e("log-in")}),[e]);return Object(c.jsx)(s.o,{children:Object(c.jsxs)(d.a,{style:{flex:1},children:[Object(c.jsx)(s.f,{duration:6e3,slides:me}),Object(c.jsxs)(d.a,{style:{padding:O.padding},children:[Object(c.jsx)(s.c,{center:!0,color:"primary",emphasis:"high",onPress:t,title:"Sign up"}),Object(c.jsx)(s.c,{center:!0,color:"primary",onPress:n,title:"Log in"})]})]})})})),ge={headerShown:!1},he={plan:{focused:"pencil-plus-outline",unFocused:"pencil-plus-outline"},implement:{focused:"checkbox-multiple-marked-outline",unFocused:"checkbox-multiple-marked-outline"},reflect:{focused:"finance",unFocused:"finance"}},fe=Object(r.a)(),xe=function(){var e=function(){var e=Object(l.a)();return{tabBarOptions:{keyboardHidesTabBar:!0,activeTintColor:e.text,inactiveTintColor:e.secondary,showLabel:!1},screenOptions:Object(i.useCallback)((function(t){var n=t.route;return{tabBarIcon:function(t){var i=t.focused,a=t.size,r=i?"focused":"unFocused",o=i?e.text:e.secondary,l=he[n.name][r];return Object(c.jsx)(s.g,{color:o,name:l,size:a})}}}),[e])}}(),t=e.tabBarOptions,n=e.screenOptions;return Object(c.jsxs)(fe.Navigator,{screenOptions:n,tabBarOptions:t,children:[Object(c.jsx)(fe.Screen,{component:U,name:"plan"}),Object(c.jsx)(fe.Screen,{component:ve,name:"implement"}),Object(c.jsx)(fe.Screen,{component:be,name:"reflect"})]})},ye=Object(o.a)(),ve=function(){return k(),Object(c.jsxs)(ye.Navigator,{screenOptions:ge,children:[Object(c.jsx)(ye.Screen,{component:Y,name:"projects"}),Object(c.jsx)(ye.Screen,{component:X,name:"project"})]})},ke=Object(o.a)(),Ie=function(){return Object(c.jsxs)(ke.Navigator,{mode:b.a,screenOptions:b.b,children:[Object(c.jsx)(ke.Screen,{component:pe,name:"welcome"}),Object(c.jsx)(ke.Screen,{component:Oe,name:"sign-up"}),Object(c.jsx)(ke.Screen,{component:$,name:"log-in"}),Object(c.jsx)(ke.Screen,{component:ue,name:"reset-password"})]})},Ce=Object(o.a)(),we=function(){return Object(c.jsxs)(Ce.Navigator,{mode:b.a,screenOptions:b.b,children:[Object(c.jsx)(Ce.Screen,{component:xe,name:"home"}),Object(c.jsx)(Ce.Screen,{component:W,name:"account"}),Object(c.jsx)(Ce.Screen,{component:G,name:"item-detail"})]})};t.default=Object(i.memo)((function(){var e=Object(a.g)((function(e){return e.completeUser}))?we:Ie;return Object(c.jsx)(e,{})}))}}]);
//# sourceMappingURL=12.d1d6d66f.chunk.js.map