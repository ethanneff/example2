(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[10],{355:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(308),c=n(8),i=n(11),l=n(62),s=n(24),u=n(90),m=n(13),p=n(2),d=n(17),b=n.n(d),h=n(28),f=n(5),g=n(301),E=n(91),y={},O=Object(a.memo)((function(e){var t=e.onPress,n=e.icon,a=e.title,r=Object(m.a)();return o.a.createElement(u.r,{onPress:t,style:{alignItems:"center",justifyContent:"center",flexDirection:"row",borderColor:r.text,borderWidth:2,padding:p.b.padding.p02,marginBottom:p.b.padding.p02,borderRadius:p.b.padding.p10}},o.a.createElement(u.h,{name:n}),o.a.createElement(u.p,{style:{paddingLeft:p.b.padding.p02},title:a,type:"button"}))})),j=Object(a.memo)((function(e){var t=e.onBackgroundPress,n=Object(a.useState)({email:"",password:"",phone:"",phoneCode:"",phoneConfirmation:null,state:"loading"}),r=Object(c.a)(n,2),i=r[0],l=r[1],s=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{password:"",state:"email"})}))}),[]),m=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{state:"forgot password"})}))}),[]),d=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{email:"",password:"",state:"landing"})}))}),[]),j=Object(a.useCallback)((function(){return l((function(e){return Object(f.a)({},e,{state:"phone"})}))}),[]),C=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{email:e})}))}),[]),k=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{phone:e})}))}),[]),w=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{phoneCode:e})}))}),[]),P=Object(a.useCallback)((function(e){return l((function(t){return Object(f.a)({},t,{password:e})}))}),[]),v=Object(a.useCallback)(Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().signInWithPhoneNumber(i.phone);case 2:t=e.sent,l((function(e){return Object(f.a)({},e,{state:"phone confirm",phoneConfirmation:t})}));case 4:case"end":return e.stop()}}),e)}))),[l,i.phone]),x=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.phoneConfirmation){e.next=3;break}return console.log("missing confirmation"),e.abrupt("return");case 3:return e.prev=3,e.next=6,i.phoneConfirmation.confirm(i.phoneCode);case 6:l((function(e){return Object(f.a)({},e,{state:"landing"})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("invalid code");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(){},B=Object(a.useCallback)((function(){y().signOut().then((function(){return console.log("User signed out!")})).catch((function(){return console.log("no user to sign out")})).finally((function(){return l((function(e){return Object(f.a)({},e,{state:"landing"})}))}))}),[]);return Object(a.useEffect)((function(){B()}),[B]),o.a.createElement(u.j,{onBackgroundPress:t},"loading"===i.state?o.a.createElement(g.a,{size:"large"}):"phone confirm"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"number-pad",onChangeText:w,placeholder:"phone confirmation code",value:i.phoneCode}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:x,title:"verify phone confirmation code"}),o.a.createElement(u.d,{onPress:j,title:"go back"})):"phone"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"number-pad",onChangeText:k,placeholder:"phone",value:i.phone}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:v,title:"send confirmation code"}),o.a.createElement(u.d,{onPress:d,title:"go back"})):"forgot password"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"email-address",onChangeText:C,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.d,{color:"primary",emphasis:"high",onPress:function(){y().createUserWithEmailAndPassword(i.email,i.password).then((function(){console.log("User account created & signed in!")})).catch((function(e){"auth/email-already-in-use"===e.code&&console.log("That email address is already in use!"),"auth/invalid-email"===e.code&&console.log("That email address is invalid!"),console.error(e)}))},title:"send password reset"}),o.a.createElement(u.d,{onPress:s,title:"go back"})):"email"===i.state?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.q,{keyboardType:"email-address",onChangeText:C,placeholder:"email",textContentType:"username",value:i.email}),o.a.createElement(u.q,{onChangeText:P,placeholder:"password",secureTextEntry:!0,textContentType:"password",value:i.password}),o.a.createElement(u.d,{color:"primary",emphasis:"high",title:"submit"}),o.a.createElement(u.d,{onPress:m,title:"forgot password"}),o.a.createElement(u.d,{onPress:d,title:"go back"})):o.a.createElement(o.a.Fragment,null,E.a.OS===p.a.os.ios&&o.a.createElement(O,{icon:"apple",onPress:T,title:"Continue with Apple"}),o.a.createElement(O,{icon:"google",onPress:T,title:"Continue with Google"}),o.a.createElement(O,{icon:"facebook",onPress:T,title:"Continue with Facebook"}),o.a.createElement(O,{icon:"email",onPress:s,title:"Continue with Email"}),o.a.createElement(O,{icon:"phone",onPress:j,title:"Continue with Phone"}),o.a.createElement(O,{icon:"close",onPress:function(){y().signInAnonymously().then((function(){console.log("User signed in anonymously")})).catch((function(e){"auth/operation-not-allowed"===e.code&&console.log("Enable anonymous in your firebase console."),console.error(e)}))},title:"Continue trial"})))})),C=Object(a.memo)((function(){var e=Object(m.a)(),t=Object(s.useNavigation)().goBack,n=i.a.create({bottom:{paddingBottom:p.b.padding.p04}}),r=Object(a.useState)(!1),d=Object(c.a)(r,2),b=d[0],h=d[1],f=Object(a.useCallback)((function(){return h((function(e){return!e}))}),[]),g=Object(a.useCallback)((function(){return t()}),[t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.m,{onLeftPress:g,title:"Checklists"},o.a.createElement(l.a,{contentContainerStyle:{paddingHorizontal:p.b.padding.p04,paddingVertical:p.b.padding.p02},style:{backgroundColor:e.surface}},o.a.createElement(u.f,null,o.a.createElement(u.p,{emphasis:"medium",style:n.bottom,title:"Weekly Goals",type:"h4"}),o.a.createElement(u.p,{title:"1. complete learn plan profit",type:"caption"}),o.a.createElement(u.p,{title:"2. ship checklist",type:"caption"}),o.a.createElement(u.p,{title:"3. complete 30 leetcode",type:"caption"})),o.a.createElement(u.f,null,o.a.createElement(u.p,{emphasis:"medium",style:n.bottom,title:"Daily Habits and Routines",type:"h4"}),o.a.createElement(u.p,{title:"After I wake up",type:"caption"}),o.a.createElement(u.p,{title:"After I shower",type:"caption"}),o.a.createElement(u.p,{title:"Before I one on one",type:"caption"}),o.a.createElement(u.p,{title:"Before I get on the train",type:"caption"}))),o.a.createElement(u.h,{color:e.background,fab:!0,name:"plus",style:{position:"absolute",bottom:0,right:0,margin:p.b.padding.p04}}),o.a.createElement(u.d,{onPress:f,title:"showLogin"})),b&&o.a.createElement(j,{onBackgroundPress:f}))})),k={headerShown:!1},w=Object(r.a)();t.default=Object(a.memo)((function(){return o.a.createElement(w.Navigator,{screenOptions:k},o.a.createElement(w.Screen,{component:C,name:"home"}))}))}}]);
//# sourceMappingURL=10.356657d5.chunk.js.map