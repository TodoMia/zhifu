webpackJsonp([11],{SKRj:function(e,t){},xJsL:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Au9i"),s={name:"Login",data:function(){return{phone:"",popupVisible:!1}},created:function(){},methods:{gologin:function(){localStorage.setItem("userphone",this.phone)},regphone:function(){var e=this.phone;return""==e?(Object(n.Toast)({message:"手机号不能为空",duration:5e3}),!1):/^[0-9]+.?[0-9]*$/.test(e)?11!=e.length?(Object(n.Toast)({message:"请输入正确的手机号",duration:5e3}),!1):void 0:(Object(n.Toast)({message:"请输入正确的手机号",duration:5e3}),!1)}}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("div",{staticClass:"log_box"},[o("p",[o("label",{staticClass:"iconfont",attrs:{for:"phone"}},[e._v("")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",id:"phone",placeholder:"请输入手机号码"},domProps:{value:e.phone},on:{blur:e.regphone,input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),o("div",[o("span",{staticClass:"le"}),e._v(" "),o("span",{staticClass:"zhuce ri"},[e._v("还没有账号？点击"),o("router-link",{attrs:{to:{name:"Register"}}},[e._v("注册")])],1)]),e._v(" "),o("button",{on:{click:function(t){return t.preventDefault(),e.gologin(t)}}},[e._v("登录")])]),e._v(" "),o("mt-popup",{attrs:{position:"top",modal:"false"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[o("h1",{staticClass:"toptishi"},[e._v("meiyou")])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("label",{staticClass:"iconfont",attrs:{for:"password"}},[this._v("")]),this._v(" "),t("input",{attrs:{type:"text",name:"",id:"password",placeholder:"请输入密码"}})])}]};var i=o("VU/8")(s,a,!1,function(e){o("SKRj")},"data-v-0580833a",null);t.default=i.exports}});
//# sourceMappingURL=11.c033364a87614b719b9b.js.map