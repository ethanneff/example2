(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[2],{125:function(e,t,i){e.exports=i(165)},16:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return y}));var a=i(4),n=(i(42),i(57),i(2)),l=(i(5),Object(n.createAction)("AUTH/LOGIN_REQUEST")()),r=Object(n.createAction)("AUTH/REGISTER_SUCCESS")(),d=Object(n.createAction)("AUTH/REGISTER_FAILURE")(),u=Object(n.createAction)("AUTH/REGISTER_REQUEST")(),c=Object(n.createAction)("AUTH/REGISTER_SUCCESS")(),s=Object(n.createAction)("AUTH/REGISTER_FAILURE")(),o=Object(n.createAction)("Auth/LOGOUT")(),p={loading:!1};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(n.getType)(l):case Object(n.getType)(u):return Object(a.a)({},e,{loading:!0});case Object(n.getType)(d):case Object(n.getType)(s):return Object(a.a)({},e,{error:t.payload.message,loading:!1});case Object(n.getType)(r):case Object(n.getType)(c):return Object(a.a)({},e,{loading:!1,token:t.payload});case Object(n.getType)(o):return p;default:return e}}},165:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),l=i(173),r=i(175),d=i(105),u=i(104),c=i(5),s=i(23),o=Object(a.memo)((function(e){var t=e.children;return function(){var e=Object(c.e)(),t=Object(a.useCallback)((function(t){return e(Object(s.n)(t))}),[e]);Object(a.useEffect)((function(){return u.a.addEventListener("change",t),function(){u.a.removeEventListener("change",t)}}),[t,e])}(),n.a.createElement(n.a.Fragment,null,t)})),p=i(77),y=i(78),b=i(80),v=i(79),h=i(81),f=i(76),m=function(e){function t(){var e,i;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(i=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={hasError:!1},i}return Object(h.a)(t,e),Object(y.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?n.a.createElement(f.b,{title:"something went wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(n.a.PureComponent),g=i(8),O=i(14),j=i(172),E=i(39),w=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(40)]).then(i.bind(null,198))})),S=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(42)]).then(i.bind(null,204))})),A=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(38)]).then(i.bind(null,238))})),k=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(41)]).then(i.bind(null,205))})),T=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(37)]).then(i.bind(null,206))})),z=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(39)]).then(i.bind(null,207))})),I=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(19)]).then(i.bind(null,208))})),P=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(16)]).then(i.bind(null,209))})),C=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(17)]).then(i.bind(null,210))})),D=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(18)]).then(i.bind(null,211))})),U=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(14)]).then(i.bind(null,212))})),R=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(15)]).then(i.bind(null,213))})),B=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(33)]).then(i.bind(null,233))})),L=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(6)]).then(i.bind(null,232))})),N=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(36)]).then(i.bind(null,214))})),M=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(13)]).then(i.bind(null,215))})),x=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(28)]).then(i.bind(null,216))})),_=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(20)]).then(i.bind(null,237))})),W=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(21)]).then(i.bind(null,217))})),V=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(22)]).then(i.bind(null,218))})),q=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(23)]).then(i.bind(null,219))})),F=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(5)]).then(i.bind(null,234))})),H=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(24)]).then(i.bind(null,220))})),G=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(7)]).then(i.bind(null,221))})),K=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(8)]).then(i.bind(null,222))})),J=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(25)]).then(i.bind(null,223))})),Q=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(26)]).then(i.bind(null,241))})),X=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(27)]).then(i.bind(null,224))})),Y=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(29)]).then(i.bind(null,225))})),Z=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(9)]).then(i.bind(null,236))})),$=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(30)]).then(i.bind(null,239))})),ee=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(10)]).then(i.bind(null,226))})),te=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(31)]).then(i.bind(null,235))})),ie=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(32)]).then(i.bind(null,240))})),ae=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(34)]).then(i.bind(null,227))})),ne=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(12)]).then(i.bind(null,231))})),le=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(35)]).then(i.bind(null,228))})),re=Object(a.lazy)((function(){return Promise.all([i.e(0),i.e(1),i.e(11)]).then(i.bind(null,229))})),de={focus:n.a.createElement(B,null),portfolio:n.a.createElement(w,null),portfolioSettings:n.a.createElement(S,null),portfolioLanding:n.a.createElement(A,null),portfolioNotFound:n.a.createElement(k,null),portfolioForgotPassword:n.a.createElement(T,null),portfolioLogin:n.a.createElement(z,null),cantHurtMe:n.a.createElement(L,null),journal:n.a.createElement(N,null),activity:n.a.createElement(M,null),debug:n.a.createElement(x,null),debugArticle:n.a.createElement(_,null),debugBall:n.a.createElement(W,null),debugButtons:n.a.createElement(V,null),debugCards:n.a.createElement(q,null),debugChat:n.a.createElement(F,null),debugDarkMode:n.a.createElement(G,null),debugDrag:n.a.createElement(K,null),debugFonts:n.a.createElement(J,null),debugImageCollection:n.a.createElement(Q,null),debugInput:n.a.createElement(X,null),debugOKRs:n.a.createElement(Y,null),debugPinchSpread:n.a.createElement(Z,null),debugQuestionnaire:n.a.createElement($,null),debugSearchBar:n.a.createElement(ee,null),debugStartup:n.a.createElement(te,null),debugStopwatch:n.a.createElement(ie,null),debugColors:n.a.createElement(H,null),checklists:n.a.createElement(I,null),checklistsList:n.a.createElement(P,null),checklistsListCreate:n.a.createElement(C,null),checklistsListUpdate:n.a.createElement(D,null),checklistsItemCreate:n.a.createElement(U,null),checklistsItemUpdate:n.a.createElement(R,null),gamesFlappyBird:n.a.createElement(ae,null),gamesSnake:n.a.createElement(ne,null),gamesPapiJump:n.a.createElement(le,null),gamesArchero:n.a.createElement(re,null)},ue=Object(a.memo)((function(){var e=Object(E.a)(),t=g.a.create({container:{flex:1,backgroundColor:e.background,justifyContent:"center"}});return n.a.createElement(O.a,{style:t.container},n.a.createElement(j.a,{size:"large",color:e.dark}))})),ce=Object(a.memo)((function(){var e=Object(c.f)((function(e){return e.navigation.screen}));return n.a.createElement(m,null,n.a.createElement(a.Suspense,{fallback:n.a.createElement(ue,null)},de[e]))})),se=i(75),oe=i(22),pe=i(122),ye=i(62),be=i(49),ve=i(61),he=i(40),fe=i(123),me=i(85),ge=Object(oe.c)({auth:s.b,choices:be.a,dimension:s.e,device:s.d,checklistItems:ye.a,checklists:ye.b,chatMessage:me.a,navigation:s.k,network:s.l,questionnaires:be.d,questions:be.e,responses:be.g,theme:s.m}),Oe={key:"root",storage:ve.b},je=[pe.a],Ee=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d)(oe.a.apply(void 0,je)),we=Object(se.a)(Oe,ge),Se=Object(oe.e)(we,Ee),Ae=Object(se.b)(Se),ke=Object(a.memo)((function(e){var t=e.children;return n.a.createElement(he.a,{store:Se},n.a.createElement(fe.a,{loading:null,persistor:Ae},t))}));i.d(t,"Main",(function(){return Te})),l.a.ignoreWarnings(["Battery state"]);var Te=Object(a.memo)((function(){return n.a.createElement(ke,null,n.a.createElement(o,null,n.a.createElement(ce,null)))}));r.a.registerComponent(c.a.app.name,(function(){return Te})),d.a.OS===c.a.os.web&&r.a.runApplication(c.a.app.name,{rootTag:document.getElementById("root")})},23:function(e,t,i){"use strict";var a=i(4),n=i(171),l=i(2),r=i(16),d=Object(l.createAction)("device/LOAD")(),u=Object(l.createAction)("device/UPDATE_STATUS")(),c=Object(l.createAction)("device/UPDATE_KEYBOARD_VISIBILITY")(),s=Object(a.a)({},{androidId:"",apiLevel:0,applicationName:"",availableLocationProviders:{},baseOs:"",buildId:"",batteryLevel:0,bootloader:"",brand:"",buildNumber:"",bundleId:"",carrier:"",codename:"",device:"",deviceId:"",deviceType:"",display:"",deviceName:"",firstInstallTime:0,fingerprint:"",fontScale:0,freeDiskStorage:0,hardware:"",host:"",ipAddress:"",incremental:"",installReferrer:"",instanceId:"",lastUpdateTime:0,macAddress:"",manufacturer:"",maxMemory:"",model:"",phoneNumber:"",powerState:{},product:"",previewSdkInt:0,readableVersion:"",serialNumber:"",securityPatch:"",systemAvailableFeatures:[],systemName:"",systemVersion:"",tags:"",type:"",totalDiskCapacity:0,totalMemory:"",uniqueId:"",usedMemory:0,userAgent:"",version:"",hasNotch:!1,hasSystemFeature:!1,isAirplaneMode:!1,isBatteryCharging:!1,isCameraPresence:!1,isEmulator:!1,isLandscape:!1,isLocationEnabled:!1,isPinOrFingerprintSet:!1,isTablet:!1,supported32BitAbis:[],supported64BitAbis:[],supportedAbis:[]},{keyboardVisible:!1,appStatus:n.a.currentState}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(l.getType)(u):return Object(a.a)({},e,{appStatus:t.payload});case Object(l.getType)(c):return Object(a.a)({},e,{keyboardVisible:t.payload});case Object(l.getType)(d):return Object(a.a)({},e,{},t.payload);case Object(l.getType)(r.b):return s;default:return e}},p=i(53),y=i(54),b=i(61),v=Object(l.createAction)("network/UPDATE_NETWORK")(),h={connected:!1,details:null,reachable:!1,type:b.a.unknown},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(l.getType)(v):return Object(a.a)({},e,{reachable:t.payload.isInternetReachable||!1,connected:t.payload.isConnected,details:t.payload.details,type:t.payload.type});case Object(l.getType)(r.b):return h;default:return e}},m=i(104),g=Object(l.createAction)("dimension/UPDATE_DIMENSION")(),O=function(e){return e.dimension.window.height<e.dimension.window.width},j=function(e){return e.dimension.window.height>e.dimension.window.width?e.dimension.window.width:e.dimension.window.height},E=function(e){return e.dimension.window.width},w=function(e){return e.dimension.window.height},S={screen:m.a.get("screen"),window:m.a.get("window")},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(l.getType)(g):return Object(a.a)({},e,{screen:t.payload.screen,window:t.payload.window});case Object(l.getType)(r.b):return S;default:return e}};i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r.a})),i.d(t,"j",(function(){return p.a})),i.d(t,"k",(function(){return p.b})),i.d(t,"a",(function(){return y.a})),i.d(t,"c",(function(){return y.b})),i.d(t,"m",(function(){return y.d})),i.d(t,"l",(function(){return f})),i.d(t,"n",(function(){return g})),i.d(t,"g",(function(){return O})),i.d(t,"h",(function(){return j})),i.d(t,"i",(function(){return E})),i.d(t,"f",(function(){return w})),i.d(t,"e",(function(){return A}))},39:function(e,t,i){"use strict";var a=i(53),n=i(5),l=i(1),r=function(){var e=Object(n.e)();return{to:Object(l.useCallback)((function(t){return function(){return e(Object(a.a)(t))}}),[e])}},d=i(54),u=function(){return Object(n.f)((function(e){return Object(d.c)(e)}))},c=i(105),s=function(){var e=Object(n.f)((function(e){return e.device.isEmulator}));return!(Object({NODE_ENV:"production",PUBLIC_URL:"/example"}).JEST_WORKER_ID||e||c.a.OS===n.a.os.web)},o=function(e){var t=.036*e+.12,i=.36*e+1.2;return{elevation:e,shadowColor:u().dark,shadowOffset:{height:2,width:0},shadowOpacity:t,shadowRadius:i,zIndex:e}};i.d(t,"d",(function(){return r})),i.d(t,"a",(function(){return u})),i.d(t,"c",(function(){return s})),i.d(t,"b",(function(){return o}))},49:function(e,t,i){"use strict";var a,n=i(2);Object(n.createAction)("questions/CREATE")(),Object(n.createAction)("questions/UPDATE")(),Object(n.createAction)("questions/REMOVE")();!function(e){e.Input="Input",e.Checkbox="Checkbox",e.Slider="Slider",e.Button="Button"}(a||(a={}));var l={1:{choices:["4","5","6"],id:"1",title:"what type of counseling are you looking for?",type:a.Checkbox},10:{choices:["241","242","238","243","244"],id:"10",title:"I think that I would need the support of a technical person to be able to use this system.",type:a.Button},2:{choices:["1","2","3"],id:"2",title:"what is your gender?",type:a.Button},3:{choices:["32","33","34"],id:"3",title:"how old are you?",type:a.Slider},4:{choices:["10","11","12"],id:"4",title:"where do you live?",type:a.Button},5:{choices:["234"],id:"5",title:"How's life",type:a.Input},6:{choices:["236","237","238","239","240"],id:"5",title:"How satisfied are you with our service?",type:a.Button},7:{choices:["241","242","238","243","244"],id:"7",title:"I think that I would like to use this system frequently.",type:a.Button},8:{choices:["241","242","238","243","244"],id:"8",title:"I found the system unnecessarily complex.",type:a.Button},9:{choices:["241","242","238","243","244"],id:"9",title:"I thought the system was easy to use.",type:a.Button},11:{choices:["241","242","238","243","244"],id:"11",title:"I found the various functions in this system were well integrated.",type:a.Button},12:{choices:["241","242","238","243","244"],id:"12",title:"I thought there was too much inconsistency in this system.",type:a.Button},13:{choices:["241","242","238","243","244"],id:"13",title:"I would imagine that most people would learn to use this system very quickly.",type:a.Button},14:{choices:["241","242","238","243","244"],id:"14",title:"I found the system very cumbersome to use.",type:a.Button},15:{choices:["241","242","238","243","244"],id:"15",title:"I felt very confident using the system.",type:a.Button},16:{choices:["241","242","238","243","244"],id:"16",title:"I needed to learn a lot of things before I could get going with this system.",type:a.Button},17:{choices:["235","032","033","034","035","036","037","038","039","040","041"],id:"17",title:"How likely are you to recommend us to a friend or colleague?",type:a.Button},18:{choices:[],id:"18",title:"What is the primary reason fro your score?",type:a.Input}};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(arguments.length>1?arguments[1]:void 0).type,e}var d=i(11),u=i(4),c=i(28),s=i(82),o=i.n(s),p=i(16),y=Object(n.createCustomAction)("questionnaires/CREATE",(function(e){return{payload:{id:o.a.v4(),questions:[],title:e}}})),b=Object(n.createAction)("questionnaires/UPDATE")(),v=Object(n.createAction)("questionnaires/REMOVE")(),h=Object(n.createAction)("questionnaires/SELECT")(),f=Object(c.a)([function(e){return e.questionnaires.items}],(function(e){return Object.values(e).filter((function(e){return e}))})),m={items:{1:{id:"1",questions:["1","2","3","4","5"],title:"example"},2:{acronym:"CSAT",formula:"(Number of satisfied and very satisfied customers) / (Number of respondents) x 100",id:"2",questions:["6"],title:"Customer Satisfaction"},3:{acronym:"NPS",formula:"(Number of promoters (9-10) \u2013 number of detractors(0-6)) \xf7 (number of respondents) x 100",id:"3",questions:["17","18"],title:"Net Promoter Score"},4:{acronym:"SUS",formula:"For odd items: subtract one from the user response. For even-numbered items: subtract the user responses from 5 This scales all values from 0 to 4 (with four being the most positive response). Add up the converted responses for each user and multiply that total by 2.5. This converts the range of possible values from 0 to 100 instead of from 0 to 40. Good is above 68.",id:"4",questions:["7","8","9","10","11","12","13","14","15","16"],title:"System Usability Scale"}},selected:void 0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(n.getType)(y):case Object(n.getType)(b):return Object(u.a)({},e,{items:Object(u.a)({},e.items,Object(d.a)({},t.payload.id,t.payload))});case Object(n.getType)(v):return Object(u.a)({},e,{items:Object.keys(e.items).reduce((function(i,a){return a!==t.payload?Object(u.a)({},i,Object(d.a)({},a,e.items[a])):i}),{}),selected:e.selected!==t.payload?e.selected:void 0});case Object(n.getType)(h):return Object(u.a)({},e,{selected:e.selected!==t.payload?t.payload:void 0});case Object(n.getType)(p.b):return m;default:return e}},O=(Object(n.createAction)("choices/CREATE")(),Object(n.createAction)("choices/UPDATE")(),Object(n.createAction)("choices/REMOVE")(),{"001":{display:"Male",id:"001"},"002":{display:"Female",id:"002"},"003":{display:"Non-binary",id:"003"},"004":{display:"Individual counseling",id:"004"},"005":{display:"Couple counseling",id:"005"},"006":{display:"Teen counseling",id:"006"},"007":{display:"Belgium",id:"007"},"008":{display:"Canada",id:"008"},"009":{display:"Denmark",id:"009"},"010":{display:"France",id:"010"},"011":{display:"Germany",id:"011"},"012":{display:"Greece",id:"012"},"013":{display:"Iceland",id:"013"},"014":{display:"Italy",id:"014"},"015":{display:"Luxembourg",id:"015"},"016":{display:"Netherlands",id:"016"},"017":{display:"Norway",id:"017"},"018":{display:"Portugal",id:"018"},"019":{display:"Spain",id:"019"},"020":{display:"Turkey",id:"020"},"021":{display:"United Kingdom",id:"021"},"022":{display:"USA",id:"022"},"023":{display:"Israel",id:"023"},"024":{display:"Japan",id:"024"},"025":{display:"South Korea",id:"025"},"026":{display:"Australia",id:"026"},"027":{display:"New Zealand",id:"027"},"028":{display:"Austria",id:"028"},"029":{display:"Ireland",id:"029"},"030":{display:"Sweden",id:"030"},"031":{display:"Switzerland",id:"031"},"032":{display:"1",id:"032",value:1},"033":{display:"2",id:"033",value:2},"034":{display:"3",id:"034",value:3},"035":{display:"4",id:"035",value:4},"036":{display:"5",id:"036",value:5},"037":{display:"6",id:"037",value:6},"038":{display:"7",id:"038",value:7},"039":{display:"8",id:"039",value:8},"040":{display:"9",id:"040",value:9},"041":{display:"10",id:"041",value:10},"042":{display:"11",id:"042",value:11},"043":{display:"12",id:"043",value:12},"044":{display:"13",id:"044",value:13},"045":{display:"14",id:"045",value:14},"046":{display:"15",id:"046",value:15},"047":{display:"16",id:"047",value:16},"048":{display:"17",id:"048",value:17},"049":{display:"18",id:"049",value:18},"050":{display:"19",id:"050",value:19},"051":{display:"20",id:"051",value:20},"052":{display:"21",id:"052",value:21},"053":{display:"22",id:"053",value:22},"054":{display:"23",id:"054",value:23},"055":{display:"24",id:"055",value:24},"056":{display:"25",id:"056",value:25},"057":{display:"26",id:"057",value:26},"058":{display:"27",id:"058",value:27},"059":{display:"28",id:"059",value:28},"060":{display:"29",id:"060",value:29},"061":{display:"30",id:"061",value:30},"062":{display:"31",id:"062",value:31},"063":{display:"32",id:"063",value:32},"064":{display:"33",id:"064",value:33},"065":{display:"34",id:"065",value:34},"066":{display:"35",id:"066",value:35},"067":{display:"36",id:"067",value:36},"068":{display:"37",id:"068",value:37},"069":{display:"38",id:"069",value:38},"070":{display:"39",id:"070",value:39},"071":{display:"40",id:"071",value:40},"072":{display:"41",id:"072",value:41},"073":{display:"42",id:"073",value:42},"074":{display:"43",id:"074",value:43},"075":{display:"44",id:"075",value:44},"076":{display:"45",id:"076",value:45},"077":{display:"46",id:"077",value:46},"078":{display:"47",id:"078",value:47},"079":{display:"48",id:"079",value:48},"080":{display:"49",id:"080",value:49},"081":{display:"50",id:"081",value:50},"082":{display:"51",id:"082",value:51},"083":{display:"52",id:"083",value:52},"084":{display:"53",id:"084",value:53},"085":{display:"54",id:"085",value:54},"086":{display:"55",id:"086",value:55},"087":{display:"56",id:"087",value:56},"088":{display:"57",id:"088",value:57},"089":{display:"58",id:"089",value:58},"090":{display:"59",id:"090",value:59},"091":{display:"60",id:"091",value:60},"092":{display:"61",id:"092",value:61},"093":{display:"62",id:"093",value:62},"094":{display:"63",id:"094",value:63},"095":{display:"64",id:"095",value:64},"096":{display:"65",id:"096",value:65},"097":{display:"66",id:"097",value:66},"098":{display:"67",id:"098",value:67},"099":{display:"68",id:"099",value:68},100:{display:"69",id:"100",value:69},101:{display:"70",id:"101",value:70},102:{display:"71",id:"102",value:71},103:{display:"72",id:"103",value:72},104:{display:"73",id:"104",value:73},105:{display:"74",id:"105",value:74},106:{display:"75",id:"106",value:75},107:{display:"76",id:"107",value:76},108:{display:"77",id:"108",value:77},109:{display:"78",id:"109",value:78},110:{display:"79",id:"110",value:79},111:{display:"80",id:"111",value:80},112:{display:"81",id:"112",value:81},113:{display:"82",id:"113",value:82},114:{display:"83",id:"114",value:83},115:{display:"84",id:"115",value:84},116:{display:"85",id:"116",value:85},117:{display:"86",id:"117",value:86},118:{display:"87",id:"118",value:87},119:{display:"88",id:"119",value:88},120:{display:"89",id:"120",value:89},121:{display:"90",id:"121",value:90},122:{display:"91",id:"122",value:91},123:{display:"92",id:"123",value:92},124:{display:"93",id:"124",value:93},125:{display:"94",id:"125",value:94},126:{display:"95",id:"126",value:95},127:{display:"96",id:"127",value:96},128:{display:"97",id:"128",value:97},129:{display:"98",id:"129",value:98},130:{display:"99",id:"130",value:99},131:{display:"100",id:"131",value:100},132:{display:"101",id:"132",value:101},133:{display:"102",id:"133",value:102},134:{display:"103",id:"134",value:103},135:{display:"104",id:"135",value:104},136:{display:"105",id:"136",value:105},137:{display:"106",id:"137",value:106},138:{display:"107",id:"138",value:107},139:{display:"108",id:"139",value:108},140:{display:"109",id:"140",value:109},141:{display:"110",id:"141",value:110},142:{display:"111",id:"142",value:111},143:{display:"112",id:"143",value:112},144:{display:"113",id:"144",value:113},145:{display:"114",id:"145",value:114},146:{display:"115",id:"146",value:115},147:{display:"116",id:"147",value:116},148:{display:"117",id:"148",value:117},149:{display:"118",id:"149",value:118},150:{display:"119",id:"150",value:119},151:{display:"120",id:"151",value:120},152:{display:"121",id:"152",value:121},153:{display:"122",id:"153",value:122},154:{display:"123",id:"154",value:123},155:{display:"124",id:"155",value:124},156:{display:"125",id:"156",value:125},157:{display:"126",id:"157",value:126},158:{display:"127",id:"158",value:127},159:{display:"128",id:"159",value:128},160:{display:"129",id:"160",value:129},161:{display:"130",id:"161",value:130},162:{display:"131",id:"162",value:131},163:{display:"132",id:"163",value:132},164:{display:"133",id:"164",value:133},165:{display:"134",id:"165",value:134},166:{display:"135",id:"166",value:135},167:{display:"136",id:"167",value:136},168:{display:"137",id:"168",value:137},169:{display:"138",id:"169",value:138},170:{display:"139",id:"170",value:139},171:{display:"140",id:"171",value:140},172:{display:"141",id:"172",value:141},173:{display:"142",id:"173",value:142},174:{display:"143",id:"174",value:143},175:{display:"144",id:"175",value:144},176:{display:"145",id:"176",value:145},177:{display:"146",id:"177",value:146},178:{display:"147",id:"178",value:147},179:{display:"148",id:"179",value:148},180:{display:"149",id:"180",value:149},181:{display:"150",id:"181",value:150},182:{display:"151",id:"182",value:151},183:{display:"152",id:"183",value:152},184:{display:"153",id:"184",value:153},185:{display:"154",id:"185",value:154},186:{display:"155",id:"186",value:155},187:{display:"156",id:"187",value:156},188:{display:"157",id:"188",value:157},189:{display:"158",id:"189",value:158},190:{display:"159",id:"190",value:159},191:{display:"160",id:"191",value:160},192:{display:"161",id:"192",value:161},193:{display:"162",id:"193",value:162},194:{display:"163",id:"194",value:163},195:{display:"164",id:"195",value:164},196:{display:"165",id:"196",value:165},197:{display:"166",id:"197",value:166},198:{display:"167",id:"198",value:167},199:{display:"168",id:"199",value:168},200:{display:"169",id:"200",value:169},201:{display:"170",id:"201",value:170},202:{display:"171",id:"202",value:171},203:{display:"172",id:"203",value:172},204:{display:"173",id:"204",value:173},205:{display:"174",id:"205",value:174},206:{display:"175",id:"206",value:175},207:{display:"176",id:"207",value:176},208:{display:"177",id:"208",value:177},209:{display:"178",id:"209",value:178},210:{display:"179",id:"210",value:179},211:{display:"180",id:"211",value:180},212:{display:"181",id:"212",value:181},213:{display:"182",id:"213",value:182},214:{display:"183",id:"214",value:183},215:{display:"184",id:"215",value:184},216:{display:"185",id:"216",value:185},217:{display:"186",id:"217",value:186},218:{display:"187",id:"218",value:187},219:{display:"188",id:"219",value:188},220:{display:"189",id:"220",value:189},221:{display:"190",id:"221",value:190},222:{display:"191",id:"222",value:191},223:{display:"192",id:"223",value:192},224:{display:"193",id:"224",value:193},225:{display:"194",id:"225",value:194},226:{display:"195",id:"226",value:195},227:{display:"196",id:"227",value:196},228:{display:"197",id:"228",value:197},229:{display:"198",id:"229",value:198},230:{display:"199",id:"230",value:199},231:{display:"200",id:"231",value:200},232:{display:"yes",id:"232",value:1},233:{display:"no",id:"233",value:0},234:{display:"placeholder",id:"234"},235:{display:"0",id:"235",value:0},236:{display:"Very Unsatisfied",id:"236",value:1},237:{display:"Unsatisfied",id:"237",value:2},238:{display:"Neutral",id:"238",value:3},239:{display:"Satisfied",id:"239",value:4},240:{display:"Very Satisfied",id:"240",value:5},241:{display:"Strongly Disagree",id:"241",value:1},242:{display:"Disagree",id:"242",value:2},243:{display:"Agree",id:"243",value:4},244:{display:"Strongly Agree",id:"244",value:5}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,e},E=(Object(n.createAction)("responses/CREATE")(),Object(n.createAction)("responses/UPDATE")(),Object(n.createAction)("responses/REMOVE")(),{}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e};i.d(t,"e",(function(){return r})),i.d(t,"b",(function(){return y})),i.d(t,"i",(function(){return b})),i.d(t,"f",(function(){return v})),i.d(t,"h",(function(){return h})),i.d(t,"c",(function(){return f})),i.d(t,"d",(function(){return g})),i.d(t,"a",(function(){return j})),i.d(t,"g",(function(){return w}))},5:function(e,t,i){"use strict";var a={app:{name:"core",timeout:5e3},os:{android:"android",ios:"ios",web:"web"},web:{root:"root"}},n={p00:0,p01:4,p02:8,p03:12,p04:16,p05:20,p06:24,p07:28,p08:32,p09:36,p10:40,p11:44,p12:48,p13:52,p14:56,p15:60,p16:64,p17:68,p18:72,p19:76,p20:80,p21:84,p22:88,p23:92,p24:96,p25:100,p26:104,p27:108,p28:112,p29:116,p30:120},l={light:"100",medium:"600",regular:"300"},r={color:{overlay:"hsla(0,0%,0%, 0.38)"},fontSize:{body1:{fontSize:16,fontWeight:l.regular,letterSpacing:.5},body2:{fontSize:14,fontWeight:l.regular,letterSpacing:.25},button:{fontSize:14,fontWeight:l.medium,letterSpacing:.75},caption:{fontSize:12,fontWeight:l.regular,letterSpacing:.4},h1:{fontSize:64,fontWeight:l.light,letterSpacing:-1.5},h2:{fontSize:40,fontWeight:l.light,letterSpacing:-.5},h3:{fontSize:32,fontWeight:l.regular,letterSpacing:0},h4:{fontSize:34/1.5,fontWeight:l.regular,letterSpacing:.25},h5:{fontSize:16,fontWeight:l.regular,letterSpacing:0},h6:{fontSize:20/1.5,fontWeight:l.medium,letterSpacing:.15},overline:{fontSize:10,fontWeight:l.regular,letterSpacing:1.5},subtitle1:{fontSize:16,fontWeight:l.regular,letterSpacing:.15},subtitle2:{fontSize:14,fontWeight:l.medium,letterSpacing:.1}},fontWeight:l,padding:n,sizing:{borderRadius:n.p02}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,i=t<0?0:t>1?1:t,a=4;if(!e.startsWith("hsl"))return e;var n=e.substring(a,e.length-1);return"hsla(".concat(n,", ").concat(i,")")},u=i(40),c=u.d,s=u.c,o={MissingCurrentChecklist:"Missing current checklist",MissingCurrentChecklistCreatingItem:"Missing current checklist when creating checklist item",MissingCurrentChecklistItem:"Missing current checklist item",MissingCurrentChecklistUpdatingChecklist:"Missing current checklist when updating the checklist"};i.d(t,"a",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return d})),i.d(t,"f",(function(){return c})),i.d(t,"e",(function(){return s})),i.d(t,"b",(function(){return o}))},53:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return u}));var a=i(4),n=i(2),l=i(16),r=Object(n.createAction)("navigation/changeNavigation")(),d={screen:"portfolioLanding"};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(n.getType)(r):return Object(a.a)({},e,{screen:t.payload});case Object(n.getType)(l.b):return d;default:return e}}},54:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return y}));var a,n,l=i(4),r=i(11),d=i(2),u=i(16);!function(e){e.Light="light",e.Dark="dark"}(n||(n={}));var c,s=Object(d.createAction)("theme/CHANGE")(),o=function(e){return e.theme.colors[e.theme.currentColor]};!function(e){e.Default="default",e.Light="light-content",e.Dark="dark-content"}(c||(c={}));var p={colors:(a={},Object(r.a)(a,n.Dark,{background:"hsl(0, 0%, 7%)",surface:"hsl(0, 0%, 7%)",text:"hsl(0, 0%, 100%)",brand:"hsl(264, 34%, 36%)",danger:"hsl(354, 70%, 54%)",dark:"hsl(210, 10%, 23%)",info:"hsl(188, 78%, 41%)",light:"hsl(240, 14%, 97%)",primary:"hsl(263, 84%, 75%)",secondary:"hsl(171, 59%, 61%)",statusBar:c.Light,success:"hsl(134, 61%, 41%)",warning:"hsl(45, 100%, 51%)"}),Object(r.a)(a,n.Light,{background:"hsl(0, 0%, 100%)",surface:"hsl(0, 0%, 96%)",text:"hsl(0, 0%, 0%)",brand:"hsl(264, 34%, 36%)",danger:"hsl(354, 70%, 54%)",dark:"hsl(210, 10%, 23%)",info:"hsl(188, 78%, 41%)",light:"hsl(210, 17%, 98%)",primary:"hsl(211, 100%, 50%)",secondary:"hsl(208, 7%, 46%)",statusBar:c.Default,success:"hsl(134, 61%, 41%)",warning:"hsl(45, 100%, 51%)"}),a),currentColor:n.Light};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(d.getType)(s):return Object(l.a)({},e,{currentColor:t.payload});case Object(d.getType)(u.b):return p;default:return e}}},61:function(e,t,i){"use strict";var a,n,l=i(103),r=i.n(l).a;!function(e){e.unknown="unknown",e.none="none",e.cellular="cellular",e.wifi="wifi",e.bluetooth="bluetooth",e.ethernet="ethernet",e.wimax="wimax",e.vpn="vpn",e.other="other"}(a||(a={})),function(e){e["2g"]="2g",e["3g"]="3g",e["4g"]="4g"}(n||(n={})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return a}))},62:function(e,t,i){"use strict";var a=i(11),n=i(4),l=i(28),r=i(2),d=i(5),u=Object(r.createAction)("checklist/create")(),c=Object(r.createAction)("checklist/update")(),s=Object(r.createAction)("checklist/remove")(),o=Object(r.createAction)("checklist/setActive")(),p=function(e){var t=e.checklists.active;if(!t)throw new Error(d.b.MissingCurrentChecklist);return e.checklists.items[t]},y=Object(l.a)([function(e){return e.checklists.items}],(function(e){return Object.values(e).filter((function(e){return e.active})).sort((function(e,t){return e.createdAt-t.createdAt}))})),b={active:void 0,items:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(r.getType)(o):return Object(n.a)({},e,{active:t.payload});case Object(r.getType)(u):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,t.payload))});case Object(r.getType)(c):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,Object(n.a)({},e.items[t.payload.id],{},t.payload,{updatedAt:Date.now()})))});case Object(r.getType)(s):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload,Object(n.a)({},e.items[t.payload],{active:!1,updatedAt:Date.now()})))});default:return e}},h=Object(r.createAction)("checklistItem/create")(),f=Object(r.createAction)("checklistItem/update")(),m=Object(r.createAction)("checklistItem/remove")(),g=Object(r.createAction)("checklistItem/toggleComplete")(),O=Object(r.createAction)("checklistItem/setActive")(),j=function(e){var t=e.checklistItems.active;if(!t)throw new Error(d.b.MissingCurrentChecklistItem);return e.checklistItems.items[t]},E=Object(l.a)([p,function(e){return e.checklistItems.items}],(function(e,t){return Object.values(t).filter((function(t){return t.checklistId===e.id&&t.active})).sort((function(e,t){return e.createdAt-t.createdAt}))})),w={active:void 0,items:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(r.getType)(O):return Object(n.a)({},e,{active:t.payload});case Object(r.getType)(h):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,t.payload))});case Object(r.getType)(f):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,Object(n.a)({},e.items[t.payload.id],{},t.payload,{updatedAt:Date.now()})))});case Object(r.getType)(m):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload,Object(n.a)({},e.items[t.payload],{active:!1,updatedAt:Date.now()})))});case Object(r.getType)(g):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload,Object(n.a)({},e.items[t.payload],{completed:!e.items[t.payload].completed,updatedAt:Date.now()})))});default:return e}};i.d(t,"c",(function(){return h})),i.d(t,"n",(function(){return f})),i.d(t,"i",(function(){return m})),i.d(t,"m",(function(){return g})),i.d(t,"k",(function(){return O})),i.d(t,"h",(function(){return j})),i.d(t,"f",(function(){return E})),i.d(t,"a",(function(){return S})),i.d(t,"d",(function(){return u})),i.d(t,"o",(function(){return c})),i.d(t,"j",(function(){return s})),i.d(t,"l",(function(){return o})),i.d(t,"g",(function(){return p})),i.d(t,"e",(function(){return y})),i.d(t,"b",(function(){return v}))},76:function(e,t,i){"use strict";var a,n=i(1),l=i.n(n),r=i(174),d=i(8),u=i(5),c=i(39);i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s})),function(e){e.Head="head",e.Middle="middle",e.Tail="tail",e.Clip="clip"}(a||(a={}));var s=Object(n.memo)((function(e){var t=e.button,i=e.overline,a=e.title,n=e.onPress,s=e.hidden,o=e.center,p=e.bold,y=e.ellipsizeMode,b=e.centerVertically,v=e.invisible,h=e.style,f=e.numberOfLines,m=new r.a.Value(1),g=Object(c.a)(),O=Object(c.c)(),j=function(e){return e.high?.87:e.medium?.6:e.low?.38:1}(e),E=function(e){return e.h1?u.c.fontSize.h1:e.h2?u.c.fontSize.h2:e.h3?u.c.fontSize.h3:e.h4?u.c.fontSize.h4:e.h5?u.c.fontSize.h5:e.h6?u.c.fontSize.h6:e.subtitle1?u.c.fontSize.subtitle1:e.subtitle2?u.c.fontSize.subtitle2:e.body1?u.c.fontSize.body1:e.body2?u.c.fontSize.body2:e.button?u.c.fontSize.button:e.caption?u.c.fontSize.caption:e.overline?u.c.fontSize.overline:u.c.fontSize.body2}(e),w=e.inverse?g.background:g.text,S=Object(u.d)(w,j),A=t||i?(a||"").toUpperCase():a,k=d.a.create({bold:{fontWeight:u.c.fontWeight.medium},center:{textAlign:"center"},centerVertically:{flex:1,textAlignVertical:"center"},invisible:{opacity:0},color:{color:S}}),T=[k.color,E,o&&k.center,b&&k.centerVertically,p&&k.bold,{opacity:m},v&&k.invisible,h];return void 0===a||s?null:l.a.createElement(r.a.Text,{ellipsizeMode:y,numberOfLines:f,style:T,onPress:n?function(){n&&n(),r.a.sequence([r.a.timing(m,{duration:50,toValue:.2,useNativeDriver:O}),r.a.timing(m,{duration:350,toValue:1,useNativeDriver:O})]).start()}:void 0},A)}))},85:function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"d",(function(){return s})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return y}));var a=i(11),n=i(4),l=i(28),r=i(2),d=Object(r.createAction)("chat/create")(),u=Object(r.createAction)("chat/update")(),c=Object(r.createAction)("chat/delete")(),s=Object(r.createAction)("chat/type")(),o=Object(l.a)([function(e){return e.chatMessage.items}],(function(e){return Object.values(e).filter((function(e){return e.active})).sort((function(e,t){return t.createdAt-e.createdAt}))})),p={textField:"",items:{}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(r.getType)(s):return Object(n.a)({},e,{textField:t.payload});case Object(r.getType)(d):return Object(n.a)({},e,{textField:"",items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,t.payload))});case Object(r.getType)(u):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload.id,Object(n.a)({},e.items[t.payload.id],{},t.payload,{updatedAt:Date.now()})))});case Object(r.getType)(c):return Object(n.a)({},e,{items:Object(n.a)({},e.items,Object(a.a)({},t.payload,Object(n.a)({},e.items[t.payload],{active:!1,updatedAt:Date.now()})))});default:return e}}}},[[125,3,4]]]);
//# sourceMappingURL=main.cf5b9929.chunk.js.map