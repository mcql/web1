webpackJsonp([0],{"0cBS":function(t,e){},"1Us1":function(t,e){},"3NA8":function(t,e){},"3VTH":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xd7I"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("C7Lr")({name:"App"},s,!1,function(t){n("0cBS")},null,null).exports,r=n("KGCO"),o={methods:{loginout:function(){sessionStorage.removeItem("userinfo"),this.$router.push({path:"/login"})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"info"},[t._v("\n    您好："),n("span",[t._v("18796545337")]),n("span",{on:{click:t.loginout}},[t._v("退出")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n("iQH9"),alt:""}}),this._v(" "),e("div",[e("h1",[this._v("汉洱康医学检验所")]),this._v(" "),e("h1",[this._v("HEALCARE")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:""}},[t._v("首页")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("公司简介")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("新闻动态")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("产品中心")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("NAV2")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("NAV3")])])])}]};var c={components:{vHeader:n("C7Lr")(o,v,!1,function(t){n("1Us1")},"data-v-13220476",null).exports},data:function(){return{index:1}},methods:{change1:function(){this.index=1},change2:function(){this.index=2},change3:function(){this.index=3}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-header"),t._v(" "),t._m(0),t._v(" "),n("div",[n("ul",{staticClass:"choose"},[n("li",{on:{click:t.change1}},[n("router-link",{class:1==t.index?"active":"",attrs:{to:"/"}},[t._v("基础信息")])],1),t._v(" "),n("li",{on:{click:t.change2}},[n("router-link",{class:2==t.index?"active":"",attrs:{to:"/index_findpwd"}},[t._v("修改密码")])],1),t._v(" "),n("li",{on:{click:t.change3}},[n("router-link",{class:3==t.index?"active":"",attrs:{to:"/index_bangding"}},[t._v("绑定协议")])],1)])]),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:n("NxId"),alt:""}})])}]};var _=n("C7Lr")(c,l,!1,function(t){n("PYhl")},"data-v-1651ecd9",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("div",[n("span",[t._v("昵称")]),t._v(" "),n("input",{attrs:{type:"text"}})]),t._v(" "),n("div",[n("span",[t._v("性别")]),t._v(" "),n("select",{attrs:{name:"",id:""}},[n("option",{attrs:{value:"0"}},[t._v("男")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("女")])])]),t._v(" "),n("div",[n("span",[t._v("文化程度")]),t._v(" "),n("select",{attrs:{name:"",id:""}},[n("option",{attrs:{value:"0"}},[t._v("高中以下")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("本科")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("硕士")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("博士")])])]),t._v(" "),n("div",[n("span",[t._v("家庭年收入")]),t._v(" "),n("select",{attrs:{name:"",id:""}},[n("option",{attrs:{value:"0"}},[t._v("十万元及以下")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("十万元及以上")])])]),t._v(" "),n("div",[n("span",[t._v("子女情况")]),t._v(" "),n("select",{attrs:{name:"",id:""}},[n("option",{attrs:{value:"0"}},[t._v("1个")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("多个")])])]),t._v(" "),n("div",{staticClass:"btn"},[t._v("保存")])])}]};var u=n("C7Lr")({},p,!1,function(t){n("ggcH")},"data-v-eb4d02e0",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("div",[n("span",[t._v("旧密码")]),t._v(" "),n("input",{attrs:{type:"password",placeholder:"请输入原始密码"}})]),t._v(" "),n("div",[n("span",[t._v("新密码")]),t._v(" "),n("input",{attrs:{type:"password",placeholder:"长度8~16位，数字、字母、字符至少包含两种"}})]),t._v(" "),n("div",[n("span",[t._v("再次输入")]),t._v(" "),n("input",{attrs:{type:"password",placeholder:"请重新输入新密码"}})]),t._v(" "),n("div",{staticClass:"btn"},[t._v("保存")])])}]};var h=n("C7Lr")({},d,!1,function(t){n("3VTH")},"data-v-63580806",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("请输入储存协议中的有效证件号码")]),this._v(" "),e("input",{attrs:{type:"text"}}),this._v(" "),e("div",{staticClass:"btn"},[this._v("下一步")])])}]};var g=n("C7Lr")({},f,!1,function(t){n("3NA8")},"data-v-10bb9742",null).exports,m={methods:{login:function(){sessionStorage.setItem("userinfo","123123123"),this.$router.push("/")}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tit"},[t._v("登录您的账号")]),t._v(" "),n("div",{staticClass:"login_input"},[n("input",{attrs:{type:"text",placeholder:"手机号"}}),t._v(" "),n("input",{attrs:{type:"password",placeholder:"密码"}}),t._v(" "),n("div",{staticClass:"login_btn",on:{click:t.login}},[t._v("登录")]),t._v(" "),n("p",{staticClass:"login_to_other"},[n("span",[n("router-link",{attrs:{to:"/login_register"}},[t._v("注册用户")])],1),t._v(" "),n("span",[n("router-link",{attrs:{to:"/login_forget"}},[t._v("忘记密码")])],1)])])])},staticRenderFns:[]};var x=n("C7Lr")(m,C,!1,function(t){n("QiHg")},"data-v-7f590ede",null).exports,E={components:{vLogin:x}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"login_form"},[this._m(0),this._v(" "),e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login_form_tit"},[e("img",{attrs:{src:n("iQH9"),alt:""}}),this._v(" "),e("div",[e("p",[this._v("汉洱康医学检验所")]),this._v(" "),e("p",[this._v("HEALCARE")])])])}]};var $=n("C7Lr")(E,b,!1,function(t){n("xPI+")},"data-v-49a15d9c",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tit"},[t._v("注册您的账号")]),t._v(" "),n("div",{staticClass:"login_input"},[n("input",{attrs:{type:"text",placeholder:"手机号"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"login_btn"},[t._v("注册")]),t._v(" "),n("p",{staticClass:"login_to_other"},[n("span",[n("router-link",{attrs:{to:"/login"}},[t._v("用户登录")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("input",{attrs:{type:"text",placeholder:"验证码"}}),this._v(" "),e("div",{staticClass:"get_code"},[this._v("获取验证码")])])}]};var L=n("C7Lr")({},w,!1,function(t){n("z20v")},"data-v-82527b26",null).exports,R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tit"},[t._v("重置您的密码")]),t._v(" "),t.show?n("div",{staticClass:"login_input"},[n("input",{attrs:{type:"text",placeholder:"手机号"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"login_btn",on:{click:t.to_next}},[t._v("下一步")])]):n("div",{staticClass:"login_input"},[n("input",{attrs:{type:"text",placeholder:"手机号"}}),t._v(" "),n("input",{attrs:{type:"password",placeholder:"密码"}}),t._v(" "),n("div",{staticClass:"login_btn"},[t._v("修改密码")]),t._v(" "),n("p",{staticClass:"login_to_other"},[n("span",[n("router-link",{attrs:{to:"/login"}},[t._v("用户登录")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("input",{attrs:{type:"text",placeholder:"验证码"}}),this._v(" "),e("div",{staticClass:"get_code"},[this._v("获取验证码")])])}]};var k=n("C7Lr")({data:function(){return{show:!0}},methods:{to_next:function(){this.show=!1}}},R,!1,function(t){n("SQRE")},"data-v-5895e09f",null).exports;i.a.use(r.a);var y=new r.a({routes:[{path:"/",component:_,children:[{path:"/",name:"Info",component:u},{path:"/index_findpwd",name:"FindPwd",component:h},{path:"/index_bangding",name:"Bangding",component:g}]},{path:"/login",component:$,children:[{path:"/",name:"Loginx",component:x},{path:"/login_register",name:"Register",component:L},{path:"/login_forget",name:"ForgetPwd",component:k}]}]});n("erWL");i.a.config.productionTip=!1,y.beforeEach(function(t,e,n){sessionStorage.getItem("userinfo")?n():"/login_register"==t.path||"/login_forget"==t.path||"/login"==t.path?n():n({path:"/login"})}),new i.a({el:"#app",router:y,components:{App:a},template:"<App/>"})},NxId:function(t,e,n){t.exports=n.p+"static/img/banner_bg.9c82bbc.png"},PYhl:function(t,e){},QiHg:function(t,e){},SQRE:function(t,e){},erWL:function(t,e){},ggcH:function(t,e){},iQH9:function(t,e,n){t.exports=n.p+"static/img/logo.8e39a2d.png"},"xPI+":function(t,e){},z20v:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5b83b0f914d4dcb170be.js.map