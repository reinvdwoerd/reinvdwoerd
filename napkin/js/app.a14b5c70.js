(function(e){function t(t){for(var _,a,i=t[0],s=t[1],c=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(_ in s)Object.prototype.hasOwnProperty.call(s,_)&&(e[_]=s[_]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],_=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(_=!1)}_&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var _={},r={app:0},o=[];function a(t){if(_[t])return _[t].exports;var n=_[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=_,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)a.d(n,_,function(t){return e[t]}.bind(null,_));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/reinvdwoerd/napkin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var _=n("64a9"),r=n.n(_);r.a},"199c":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__),lodash_throttle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("84a2"),lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__),lodash_sumby__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("c10c"),lodash_sumby__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_sumby__WEBPACK_IMPORTED_MODULE_4__),_components_Editor__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("ceb0"),throttledUpdateLines=lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()((function(e){localStorage.setItem("lines",JSON.stringify(e))}),100),throttledUpdateName=lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()((function(e){localStorage.setItem("name",e)}),100);__webpack_exports__["a"]={name:"app",data:function(){return{napkin:{name:"",lines:[]}}},mounted:function(){this.napkin.lines=JSON.parse(localStorage.getItem("lines"))||[],this.napkin.name=localStorage.getItem("name")},methods:{updateLines:function(e){this.napkin.lines=e.split("\n"),throttledUpdateLines(this.napkin.lines)},updateName:function(e){this.napkin.name=e,throttledUpdateName(this.napkin.name)},eval:function _eval(l){try{var prepped=l.replace(/([a-z]|[A-Z])+/g,"");console.log(prepped);var answ=eval(prepped);return null!=answ&&void 0!=answ?answ:"<span class='no-result'>-</span>"}catch(e){return"<span class='no-result'>-</span>"}},evalSum:function evalSum(l){try{var prepped=l.replace(/([a-z]|[A-Z])+/g,""),answ=eval(prepped);return null!=answ&&void 0!=answ?answ:0}catch(e){return 0}}},computed:{sum:function(){var e=this;return lodash_sumby__WEBPACK_IMPORTED_MODULE_4___default()(this.napkin.lines,(function(t){return e.evalSum(t)}))}},components:{Editor:_components_Editor__WEBPACK_IMPORTED_MODULE_5__["a"]}}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var _=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.napkin&&e.napkin.lines?n("div",{class:{loaded:e.napkin},attrs:{id:"napkin"}},[n("h1",[n("input",{attrs:{tabindex:"-1",placeholder:"Title..."},domProps:{value:e.napkin.name},on:{keyup:function(t){return e.updateName(t.target.value)}}}),n("div",{attrs:{id:"actions"}},[n("button",{attrs:{id:"clear"},on:{click:function(t){e.napkin.lines=[]}}},[e._v("clear")]),n("button",{attrs:{id:"share"}},[e._v("share")])])]),n("div",{staticClass:"editor-container"},[n("editor",{attrs:{"editor-id":"editorA",content:e.napkin.lines.join("\n"),lang:"js"},on:{"change-content":e.updateLines}})],1),n("div",{attrs:{id:"answers"}},[e._l(e.napkin.lines,(function(t){return n("div",{staticClass:"answer",domProps:{innerHTML:e._s(e.eval(t))}})})),n("div",{attrs:{id:"sum"}},[e._v("\n\t\t\t"+e._s(e.sum)+"\n\t\t")])],2)]):e._e()},o=[],a=n("199c"),i=a["a"],s=(n("034f"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/reinvdwoerd/napkin/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),_["a"].config.productionTip=!1,new _["a"]({render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){},ceb0:function(e,t,n){"use strict";var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor",staticStyle:{width:"100%",height:"100%"},attrs:{id:e.editorId}})},r=[],o={name:"Editor",props:["editorId","content","lang","theme"],data:function(){return{editor:Object,beforeContent:""}},watch:{content:function(e){this.beforeContent!==e&&this.editor.setValue(e,1)}},mounted:function(){var e=this,t=(this.lang,this.theme||"textmate");this.editor=window.ace.edit(this.editorId),this.editor.setValue(this.content,1),this.editor.getSession().setMode("ace/mode/javascript"),this.editor.setTheme("ace/theme/".concat(t)),this.editor.on("change",(function(){e.beforeContent=e.editor.getValue(),e.$emit("change-content",e.editor.getValue())}))}},a=o,i=n("2877"),s=Object(i["a"])(a,_,r,!1,null,"6cebe3a7",null);t["a"]=s.exports}});
//# sourceMappingURL=app.a14b5c70.js.map