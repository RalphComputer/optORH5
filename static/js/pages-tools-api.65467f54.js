(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tools-api"],{"1b31":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{"webview-styles":this.webviewStyles,src:this.jump_page,titleWidth:500}})],1)},a=[]},"696a":function(t,e,n){"use strict";n.r(e);var i=n("1b31"),a=n("ac5c");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6e44b818",null,!1,i["a"],void 0);e["default"]=o.exports},9096:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var i=getApp(),a={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},jump_page:"http://47.99.59.220:8000/apidocs/"}},mounted:function(){this.is_weixin()&&i.pageHead()},onLoad:function(t){"data"in t&&(this.jump_page=t.data)},methods:{is_weixin:function(){var t=navigator.userAgent;return!!/MicroMessenger/i.test(t)}}};e.default=a},ac5c:function(t,e,n){"use strict";n.r(e);var i=n("9096"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a}}]);