(function(e){function t(t){for(var a,s,i=t[0],l=t[1],u=t[2],f=0,d=[];f<i.length;f++)s=i[f],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64");a["default"].use(n["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Login")]),e._v(" |\n      "),r("router-link",{attrs:{to:"/registration"}},[e._v("Registration")])],1)]),r("v-content",[r("router-view")],1)],1)},s=[],i=r("2877"),l=r("6544"),u=r.n(l),c=r("7496"),f=r("549c"),d=r("71d9"),p={},v=Object(i["a"])(p,o,s,!1,null,null,null),m=v.exports;u()(v,{VApp:c["a"],VContent:f["a"],VToolbar:d["a"]});var b=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("auth-form",{ref:"authForm"},[r("template",{slot:"btn-actions"},[r("v-btn",{attrs:{dark:"",color:"indigo"},on:{click:function(t){return e.admin(t)}}},[e._v("\n                        Registration\n                    ")]),r("v-spacer"),r("v-btn",{attrs:{dark:"",color:"primary",type:"submit"},on:{click:function(t){return e.login(t)}}},[e._v("\n                        Login\n                        "),r("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],2)],1)],1)],1)},g=[],w=r("d225"),y=r("308d"),x=r("6bb5"),_=r("4e2b"),O=r("9ab4"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"authForm"},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"blue",dark:""}},[r("v-toolbar-title",[e._t("form-title",[e._v("Login form")])],2)],1),r("v-card-text",[e._t("fields",[r("v-alert",{attrs:{value:!1,color:"error",icon:"warning"}},[e._v("\n                   Eororo\n                ")]),r("v-text-field",{attrs:{"prepend-icon":"email",name:"email",label:"Email",type:"email",rules:[e.rules.required,e.rules.email]},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})])],2),r("v-divider",{attrs:{light:""}}),r("v-card-actions",[e._t("btn-actions")],2)],1)],1)},k=[],V=(r("3b2b"),r("b0b4")),P=r("60a3"),F=function(e){function t(){var e;return Object(w["a"])(this,t),e=Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments)),e.rules={required:function(e){return!!e||"Required"},email:function(e){var t=new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$");return t.test(e)||"Invalid Email"}},e.userName="",e.password="",e.confirmPassword="",e.alert=!1,e}return Object(_["a"])(t,e),Object(V["a"])(t,[{key:"getFormData",value:function(){return{username:this.$refs.authForm.userName,password:this.$refs.authForm.password}}},{key:"login",value:function(e){var t=this;e.preventDefault(),this.$store.dispatch("LOGIN",this.getFormData()).then(function(e){console.log("success")}).catch(function(e){t.alert=!0,console.log(e)})}},{key:"admin",value:function(e){var t=this;e.preventDefault(),this.$store.dispatch("ADMIN",this.getFormData()).then(function(e){console.log("success")}).catch(function(e){t.alert=!0,console.log(e)})}},{key:"valid",get:function(){return this.password===this.confirmPassword}}]),t}(P["b"]);F=O["a"]([Object(P["a"])({})],F);var N=F,$=N,R=r("0798"),S=r("b0af"),T=r("99d9"),E=r("ce7e6"),C=r("4bd4"),D=r("2677"),I=r("2a7f"),L=Object(i["a"])($,j,k,!1,null,null,null),q=L.exports;u()(L,{VAlert:R["a"],VCard:S["a"],VCardActions:T["a"],VCardText:T["b"],VDivider:E["a"],VForm:C["a"],VTextField:D["a"],VToolbar:d["a"],VToolbarTitle:I["a"]});var z=function(e){function t(){var e;return Object(w["a"])(this,t),e=Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments)),e.tests2=3,e}return Object(_["a"])(t,e),t}(q);z=O["a"]([Object(P["a"])({})],z);var M=z,A=M,B=r("8336"),G=r("a523"),J=r("0e8f"),U=r("132d"),H=r("a722"),K=r("9910"),Q=Object(i["a"])(A,h,g,!1,null,null,null),W=Q.exports;u()(Q,{VBtn:B["a"],VContainer:G["a"],VFlex:J["a"],VIcon:U["a"],VLayout:H["a"],VSpacer:K["a"]});var X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("auth-form",[r("template",{slot:"form-title"},[e._v(" Singup form")]),r("template",{slot:"fields"},[r("v-text-field",{attrs:{"prepend-icon":"email",name:"email",label:"Email",type:"email",rules:[e.rules.required,e.rules.email]},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"conf-password",label:"Confirm Password",type:"password",rules:[e.rules.required],error:!e.valid},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),r("template",{slot:"btn-actions"},[r("v-btn",{attrs:{color:"black",dark:"",to:"/"}},[e._v("Sing In")]),r("v-spacer"),r("v-btn",{attrs:{color:"success"}},[e._v("Register "),r("v-icon",[e._v("keyboard_arrow_up")])],1)],1)],2)],1)],1)],1)},Y=[],Z=function(e){function t(){var e;return Object(w["a"])(this,t),e=Object(y["a"])(this,Object(x["a"])(t).apply(this,arguments)),e.test=1,e}return Object(_["a"])(t,e),t}(q);Z=O["a"]([Object(P["a"])({})],Z);var ee=Z,te=ee,re=Object(i["a"])(te,X,Y,!1,null,null,null),ae=re.exports;u()(re,{VBtn:B["a"],VContainer:G["a"],VFlex:J["a"],VIcon:U["a"],VLayout:H["a"],VSpacer:K["a"],VTextField:D["a"]}),a["default"].use(b["a"]);var ne=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:W},{path:"/registration",name:"registration",component:ae}]}),oe=(r("96cf"),r("3b8d")),se=r("2f62"),ie=r("bc3a"),le=r.n(ie);a["default"].use(se["a"]),le.a.defaults.baseURL="http://test-api";var ue=new se["a"].Store({state:{token:""},mutations:{},actions:{LOGIN:function(e,t){e.commit;return new Promise(function(){var e=Object(oe["a"])(regeneratorRuntime.mark(function e(r,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le.a.post("/api/login_check",t).then(function(e){var t=e.data,a=e.status;200===a&&(console.log(t),r(!0))}).catch(function(e){a(e)});case 2:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}())},ADMIN:function(e,t){e.commit;return new Promise(function(){var e=Object(oe["a"])(regeneratorRuntime.mark(function e(r,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le.a.get("/admin",t).then(function(e){var t=e.data,r=e.status;console.log(t,r)});case 2:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}())}}}),ce=r("ce5b"),fe=r.n(ce);a["default"].use(fe.a),a["default"].config.productionTip=!1,new a["default"]({router:ne,store:ue,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map