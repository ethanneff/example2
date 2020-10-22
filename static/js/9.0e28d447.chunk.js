(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[9],{357:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(315),c=n(10),i=n(6),l=n(61),s=n(25),u=n(98),m=n(13),p=n(4),d=n(18),b=n.n(d),h=n(31),f=n(2),g=n(166),E=n(59),O={},j=Object(a.memo)((function(e){var t=e.onPress,n=e.icon,a=e.title,r=Object(m.a)();return o.a.createElement(u.s,{onPress:t,style:{alignItems:"center",justifyContent:"center",flexDirection:"row",borderColor:r.text,borderWidth:2,padding:p.a.padding.p02,marginBottom:p.a.padding.p02,borderRadius:p.a.padding.p10}},o.a.createElement(u.h,{name:n}),o.a.createElement(u.q,{style:{paddingLeft:p.a.padding.p02},title:a,type:"button"}))})),y=Object(a.memo)((function(e){var t=e.onBackgroundPress,n=Object(a.useState)({email:"",password:"",phone:"",phoneCode:"",phoneConfirmation:null,state:"loading"}),r=Object(c.a)(n,2),i=r[0],l=r[1],s=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)(Object(f.a)({},e),{},{password:"",state:"email"})}))}),[]),m=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)(Object(f.a)({},e),{},{state:"forgot password"})}))}),[]),p=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)(Object(f.a)({},e),{},{email:"",password:"",state:"landing"})}))}),[]),d=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)(Object(f.a)({},e),{},{state:"phone"})}))}),[]),y=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)(Object(f.a)({},t),{},{email:e})}))}),[]),C=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)(Object(f.a)({},t),{},{phone:e})}))}),[]),k=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)(Object(f.a)({},t),{},{phoneCode:e})}))}),[]),w=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)(Object(f.a)({},t),{},{password:e})}))}),[]),P=Object(a.useCallback)(Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().signInWithPhoneNumber(i.phone);case 2:t=e.sent,l((function(e){return Object(f.a)(Object(f.a)({},e),{},{state:"phone confirm",phoneConfirmation:t})}));case 4:case"end":return e.stop()}}),e)}))),[l,i.phone]),v=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.phoneConfirmation){e.next=3;break}return console.log("missing confirmation"),e.abrupt("return");case 3:return e.prev=3,e.next=6,i.phoneConfirmation.confirm(i.phoneCode);case 6:l((function(e){return Object(f.a)(Object(f.a)({},e),{},{state:"landing"})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("invalid code");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){},T=Object(a.useCallback)((function(){O().signOut().then((function(){return console.log("User signed out!")})).catch((function(){return console.log("no user to sign out")})).finally((function(){return l((function(e){return Object(f.a)(Object(f.a)({},e),{},{state:"landing"})}))}))}),[]);return Object(a.useEffect)((function(){T()}),[T]),o.a.createElement(u.j,{onBackgroundPress:t},"loading"===i.state?o.a.createElement(g.a,{size:"large"}):"phone confirm"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.r,{keyboardType:"number-pad",onChangeText:k,placeholder:"phone confirmation code",value:i.phoneCode}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:v,title:"verify phone confirmation code"}),o.a.createElement(u.d,{onPress:d,title:"go back"})):"phone"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.r,{keyboardType:"number-pad",onChangeText:C,placeholder:"phone",value:i.phone}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:P,title:"send confirmation code"}),o.a.createElement(u.d,{onPress:p,title:"go back"})):"forgot password"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.r,{keyboardType:"email-address",onChangeText:y,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:function(){O().createUserWithEmailAndPassword(i.email,i.password).then((function(){console.log("User account created & signed in!")})).catch((function(e){"auth/email-already-in-use"===e.code&&console.log("That email address is already in use!"),"auth/invalid-email"===e.code&&console.log("That email address is invalid!"),console.error(e)}))},title:"send password reset"}),o.a.createElement(u.d,{onPress:s,title:"go back"})):"email"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.r,{keyboardType:"email-address",onChangeText:y,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.r,{onChangeText:w,placeholder:"password",secureTextEntry:!0,textContentType:"password",value:i.password}),o.a.createElement(u.d,{color:"primary",emphasis:"high",title:"submit"}),o.a.createElement(u.d,{onPress:m,title:"forgot password"}),o.a.createElement(u.d,{onPress:p,title:"go back"})):o.a.createElement(o.a.Fragment,null,"ios"===E.a.OS&&o.a.createElement(j,{icon:"apple",onPress:x,title:"Continue with Apple"}),o.a.createElement(j,{icon:"google",onPress:x,title:"Continue with Google"}),o.a.createElement(j,{icon:"facebook",onPress:x,title:"Continue with Facebook"}),o.a.createElement(j,{icon:"email",onPress:s,title:"Continue with Email"}),o.a.createElement(j,{icon:"phone",onPress:d,title:"Continue with Phone"}),o.a.createElement(j,{icon:"close",onPress:function(){O().signInAnonymously().then((function(){console.log("User signed in anonymously")})).catch((function(e){"auth/operation-not-allowed"===e.code&&console.log("Enable anonymous in your firebase console."),console.error(e)}))},title:"Continue trial"})))})),C=Object(a.memo)((function(){var e=Object(m.a)(),t=Object(s.useNavigation)().goBack,n=i.a.create({bottom:{paddingBottom:p.a.padding.p04}}),r=Object(a.useState)(!1),d=Object(c.a)(r,2),b=d[0],h=d[1],f=Object(a.useCallback)((function(){return h((function(e){return!e}))}),[]),g=Object(a.useCallback)((function(){return t()}),[t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.m,{onLeftPress:g,title:"Checklists"},o.a.createElement(l.a,{contentContainerStyle:{paddingHorizontal:p.a.padding.p04,paddingVertical:p.a.padding.p02},style:{backgroundColor:e.surface}},o.a.createElement(u.f,null,o.a.createElement(u.q,{emphasis:"medium",style:n.bottom,title:"Weekly Goals",type:"h4"}),o.a.createElement(u.q,{title:"1. complete learn plan profit",type:"caption"}),o.a.createElement(u.q,{title:"2. ship checklist",type:"caption"}),o.a.createElement(u.q,{title:"3. complete 30 leetcode",type:"caption"})),o.a.createElement(u.f,null,o.a.createElement(u.q,{emphasis:"medium",style:n.bottom,title:"Daily Habits and Routines",type:"h4"}),o.a.createElement(u.q,{title:"After I wake up",type:"caption"}),o.a.createElement(u.q,{title:"After I shower",type:"caption"}),o.a.createElement(u.q,{title:"Before I one on one",type:"caption"}),o.a.createElement(u.q,{title:"Before I get on the train",type:"caption"}))),o.a.createElement(u.h,{color:e.background,fab:!0,name:"plus",style:{position:"absolute",bottom:0,right:0,margin:p.a.padding.p04}}),o.a.createElement(u.d,{onPress:f,title:"showLogin"})),b&&o.a.createElement(y,{onBackgroundPress:f}))})),k={headerShown:!1},w=Object(r.a)();t.default=Object(a.memo)((function(){return o.a.createElement(w.Navigator,{screenOptions:k},o.a.createElement(w.Screen,{component:C,name:"home"}))}))}}]);
//# sourceMappingURL=9.0e28d447.chunk.js.map