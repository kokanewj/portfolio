(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{388:function(t,e,n){},412:function(t,e,n){"use strict";var s=n(388);n.n(s).a},433:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login__content"},[n("a",{staticClass:"close-button",attrs:{href:"/"}}),n("form",{staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"login__form-title"},[t._v("Авторизация")]),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Логин",icon:"user"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),n("div",{staticClass:"login__row"},[n("app-input",{attrs:{title:"Пароль",icon:"key",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._m(0)])])])};s._withStripped=!0;var a=n(351);function r(t,e,n,s,a,r,o){try{var i=t[r](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(s,a)}var o,i,u={components:{appInput:function(){return n.e(10).then(n.bind(null,451))}},data:function(){return{user:{name:"kokanewj",password:"koka"}}},methods:{login:(o=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("/login",this.user);case 3:e=t.sent,n=e.data.token,localStorage.setItem("token",n),a.a.defaults.headers.Authorization="Bearer ".concat(n),this.$router.replace("/"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,this,[[0,10]])})),i=function(){var t=this,e=arguments;return new Promise((function(n,s){var a=o.apply(t,e);function i(t){r(a,n,s,i,u,"next",t)}function u(t){r(a,n,s,i,u,"throw",t)}i(void 0)}))},function(){return i.apply(this,arguments)})}},c=(n(412),n(96)),l=Object(c.a)(u,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login__button"},[e("button",{staticClass:"login__send-data",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);l.options.__file="src/admin/components/pages/login.vue";e.default=l.exports}}]);