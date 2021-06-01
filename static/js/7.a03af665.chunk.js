(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[7],{364:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(10),o=n.n(a),r=n(22),c=n(2),l=n(9),i=n(1),s=n.n(i),u=n(179),m=n(32),p=n(82),d=n(169),b=n(14),h=n(5),f=Object(i.memo)((function(e){var t=e.onPress,n=e.icon,a=e.title,o=Object(b.c)();return s.a.createElement(p.v,{onPress:t,style:{alignItems:"center",justifyContent:"center",flexDirection:"row",borderColor:o.text,borderWidth:2,padding:h.c.padding(2),marginBottom:h.c.padding(2),borderRadius:h.c.padding(10)}},s.a.createElement(p.g,{name:n}),s.a.createElement(p.t,{style:{paddingLeft:h.c.padding(2)},title:a,type:"button"}))})),g=Object(i.memo)((function(e){var t=e.onBackgroundPress,n=Object(i.useState)({email:"",password:"",phone:"",phoneCode:"",phoneConfirmation:null,state:"loading"}),a=Object(l.a)(n,2),b=a[0],h=a[1],g=Object(i.useCallback)((function(){return h((function(e){return Object(c.a)(Object(c.a)({},e),{},{password:"",state:"email"})}))}),[]),O=Object(i.useCallback)((function(){return h((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:"forgot password"})}))}),[]),j=Object(i.useCallback)((function(){return h((function(e){return Object(c.a)(Object(c.a)({},e),{},{email:"",password:"",state:"landing"})}))}),[]),E=Object(i.useCallback)((function(){return h((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:"phone"})}))}),[]),y=Object(i.useCallback)((function(e){return h((function(t){return Object(c.a)(Object(c.a)({},t),{},{email:e})}))}),[]),C=Object(i.useCallback)((function(e){return h((function(t){return Object(c.a)(Object(c.a)({},t),{},{phone:e})}))}),[]),k=Object(i.useCallback)((function(e){return h((function(t){return Object(c.a)(Object(c.a)({},t),{},{phoneCode:e})}))}),[]),w=Object(i.useCallback)((function(e){return h((function(t){return Object(c.a)(Object(c.a)({},t),{},{password:e})}))}),[]),P=Object(i.useCallback)(Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)().signInWithPhoneNumber(b.phone);case 2:t=e.sent,h((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:"phone confirm",phoneConfirmation:t})}));case 4:case"end":return e.stop()}}),e)}))),[h,b.phone]),v=Object(i.useCallback)(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.phoneConfirmation){e.next=3;break}return console.log("missing confirmation"),e.abrupt("return");case 3:return e.prev=3,e.next=6,b.phoneConfirmation.confirm(b.phoneCode);case 6:h((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:"landing"})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("invalid code");case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),[b.phoneCode,b.phoneConfirmation]),x=Object(i.useCallback)((function(){Object(d.a)().createUserWithEmailAndPassword(b.email,b.password).then((function(){console.log("User account created & signed in!")})).catch((function(e){"auth/email-already-in-use"===e.code&&console.log("That email address is already in use!"),"auth/invalid-email"===e.code&&console.log("That email address is invalid!"),console.error(e)}))}),[b.email,b.password]),T=Object(i.useCallback)((function(){}),[]),B=Object(i.useCallback)((function(){Object(d.a)().signInAnonymously().then((function(){console.log("User signed in anonymously")})).catch((function(e){"auth/operation-not-allowed"===e.code&&console.log("Enable anonymous in your firebase console."),console.error(e)}))}),[]),F=Object(i.useCallback)((function(){Object(d.a)().signOut().then((function(){return console.log("User signed out!")})).catch((function(){return console.log("no user to sign out")})).finally((function(){return h((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:"landing"})}))}))}),[]);return Object(i.useEffect)((function(){F()}),[F]),s.a.createElement(p.l,{onBackgroundPress:t,showOverlay:!0},"loading"===b.state?s.a.createElement(u.a,{size:"large"}):"phone confirm"===b.state?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.i,{keyboardType:"number-pad",onChangeText:k,placeholder:"phone confirmation code",value:b.phoneCode}),s.a.createElement(p.c,{color:"primary",emphasis:"high",onPress:v,title:"verify phone confirmation code"}),s.a.createElement(p.c,{onPress:E,title:"go back"})):"phone"===b.state?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.i,{keyboardType:"number-pad",onChangeText:C,placeholder:"phone",value:b.phone}),s.a.createElement(p.c,{color:"primary",emphasis:"high",onPress:P,title:"send confirmation code"}),s.a.createElement(p.c,{onPress:j,title:"go back"})):"forgot password"===b.state?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.i,{keyboardType:"email-address",onChangeText:y,placeholder:"email",textContentType:"username",value:b.email}),s.a.createElement(p.c,{color:"primary",emphasis:"high",onPress:x,title:"send password reset"}),s.a.createElement(p.c,{onPress:g,title:"go back"})):"email"===b.state?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.i,{keyboardType:"email-address",onChangeText:y,placeholder:"email",textContentType:"username",value:b.email}),s.a.createElement(p.i,{onChangeText:w,placeholder:"password",secureTextEntry:!0,textContentType:"password",value:b.password}),s.a.createElement(p.c,{color:"primary",emphasis:"high",title:"submit"}),s.a.createElement(p.c,{onPress:O,title:"forgot password"}),s.a.createElement(p.c,{onPress:j,title:"go back"})):s.a.createElement(s.a.Fragment,null,"ios"===m.a.OS&&s.a.createElement(f,{icon:"apple",onPress:T,title:"Continue with Apple"}),s.a.createElement(f,{icon:"google",onPress:T,title:"Continue with Google"}),s.a.createElement(f,{icon:"facebook",onPress:T,title:"Continue with Facebook"}),s.a.createElement(f,{icon:"email",onPress:g,title:"Continue with Email"}),s.a.createElement(f,{icon:"phone",onPress:E,title:"Continue with Phone"}),s.a.createElement(f,{icon:"close",onPress:B,title:"Continue trial"})))}))},424:function(e,t,n){"use strict";n.r(t);var a=n(362),o=n(1),r=n.n(o),c=n(9),l=n(8),i=n(82),s=n(20),u=n(364),m=n(14),p=n(5),d=Object(o.memo)((function(){var e=Object(m.c)(),t=Object(m.a)().onLeftPress,n=l.a.create({bottom:{paddingBottom:p.c.padding(4)}}),a=Object(o.useState)(!1),d=Object(c.a)(a,2),b=d[0],h=d[1],f=Object(o.useCallback)((function(){return h((function(e){return!e}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.p,{onLeftPress:t,title:"Checklists"},r.a.createElement(s.g,{contentContainerStyle:{paddingHorizontal:p.c.padding(4),paddingVertical:p.c.padding(2)},style:{backgroundColor:e.surface}},r.a.createElement(i.e,null,r.a.createElement(i.t,{emphasis:"medium",style:n.bottom,title:"Weekly Goals",type:"h4"}),r.a.createElement(i.t,{title:"1. complete learn plan profit",type:"caption"}),r.a.createElement(i.t,{title:"2. ship checklist",type:"caption"}),r.a.createElement(i.t,{title:"3. complete 30 leetcode",type:"caption"})),r.a.createElement(i.e,null,r.a.createElement(i.t,{emphasis:"medium",style:n.bottom,title:"Daily Habits and Routines",type:"h4"}),r.a.createElement(i.t,{title:"After I wake up",type:"caption"}),r.a.createElement(i.t,{title:"After I shower",type:"caption"}),r.a.createElement(i.t,{title:"Before I one on one",type:"caption"}),r.a.createElement(i.t,{title:"Before I get on the train",type:"caption"}))),r.a.createElement(i.g,{color:e.background,fab:!0,name:"plus",style:{position:"absolute",bottom:0,right:0,margin:p.c.padding(4)}}),r.a.createElement(i.c,{onPress:f,title:"showLogin"})),b&&r.a.createElement(u.a,{onBackgroundPress:f}))})),b={headerShown:!1},h=Object(a.a)();t.default=Object(o.memo)((function(){return r.a.createElement(h.Navigator,{screenOptions:b},r.a.createElement(h.Screen,{component:d,name:"home"}))}))}}]);
//# sourceMappingURL=7.a03af665.chunk.js.map