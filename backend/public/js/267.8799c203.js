"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[267],{267:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h3",[t._v(t._s(t.memo.title))]),n("p",[t._v(t._s(t.memo.memo))]),n("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("뒤로가기")])])},r=[],o={async created(){const t=await this.$http.get(`/api/memo/${this.$route.params.id}`),e=await t.data;this.memo=e},data(){return{memo:{}}}},s=o,u=n(1),i=(0,u.Z)(s,a,r,!1,null,null,null),c=i.exports}}]);
//# sourceMappingURL=267.8799c203.js.map