webpackJsonp([1],{"/wQ7":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shop-list"},[e("h4",[t._v("商品信息")]),t._v(" "),e("table",{staticClass:"table table-hover table-bordered table-shop"},[t._m(0),t._v(" "),e("tbody",t._l(t.shop_list,function(n,r){return e("tr",[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.price))]),t._v(" "),e("td",[t._v(t._s(n.num||""))]),t._v(" "),e("td",[e("div",{staticClass:"btn btn-info",on:{click:function(e){t.add_db(n)}}},[t._v(t._s(n.num>0?"+":"加入购物车"))]),t._v(" "),n.num&&n.num>0?e("div",{staticClass:"btn btn-warning",on:{click:function(e){t.reduce_db(n)}}},[t._v("-")]):t._e()])])}))])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("id")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("价格")]),t._v(" "),e("th",[t._v("数量")]),t._v(" "),e("th",[t._v("Actions")])])])}]};var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shop-list"},[e("h4",[t._v("购物车信息")]),t._v(" "),e("table",{staticClass:"table table-hover table-shop"},[t._m(0),t._v(" "),e("tbody",t._l(t.cartList,function(n,r){return e("tr",[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.price))]),t._v(" "),e("td",[t._v(t._s(n.num))]),t._v(" "),e("td",[t._v(t._s(n.price*n.num))]),t._v(" "),e("td",[e("div",{staticClass:"btn btn-info",on:{click:function(n){t.action_cart(r,"add_db")}}},[t._v("+")]),t._v(" "),e("div",{staticClass:"btn btn-warning",on:{click:function(n){t.action_cart(r,"reduce_db")}}},[t._v("-")]),t._v(" "),e("div",{staticClass:"btn btn-danger",attrs:{title:"删除"},on:{click:function(n){t.action_cart(r,"del_db")}}},[t._v("x")])])])}))])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",[t._v("id")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("价格")]),t._v(" "),e("th",[t._v("数量")]),t._v(" "),e("th",[t._v("总价")]),t._v(" "),e("th",[t._v("Actions")])])])}]};var c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cart-info"},[e("div",[e("div",{staticClass:"item"},[t._v("\n\t\t\t总数：\n\t\t\t"),e("strong",[t._v("\n\t\t\t\t"+t._s(t.cartInfos.total_nums)+"\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"item"},[t._v("\n\t\t\t总价格：\n\t\t\t"),e("strong",[t._v("\n\t\t\t\t"+t._s(t.cartInfos.total_price)+"\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"item pull-right btn btn-danger",on:{click:t.remove_db}},[t._v("清空购物车")])])])},staticRenderFns:[]};var a={components:{List:e("VU/8")({name:"list",data:function(){return{shop_list:[{id:1,name:"鱼香肉丝",price:17},{id:2,name:"水煮肉片",price:19},{id:3,name:"腌笃鲜",price:24},{id:4,name:"米饭",price:2}]}},mounted:function(){for(var t=this.$store.state.cart.cartList,n=0;n<this.shop_list.length;n++)for(var e=0;e<t.length;e++)if(t[e].id===this.shop_list[n].id){this.$set(this.shop_list,n,t[e]);break}},methods:{add_db:function(t){this.$store.dispatch("check_db",t.id),-1!==this.$store.state.cart.curIndex?this.$store.dispatch("add_db",t):(this.$set(t,"num",1),this.$store.dispatch("create_db",t))},reduce_db:function(t){this.$store.dispatch("check_db",t.id),this.$store.dispatch("reduce_db")}}},s,!1,function(t){e("gvgD")},"data-v-f3c6fd24",null).exports,Cart:e("VU/8")({name:"cart",computed:{cartList:function(){return this.$store.getters.getCartList}},methods:{action_cart:function(t,n){this.$store.dispatch("update_cur_status",{index:t}),this.$store.dispatch(n)}}},i,!1,function(t){e("/wQ7")},"data-v-bc59b7f0",null).exports,Info:e("VU/8")({computed:{cartInfos:function(){return this.$store.getters.getInfos}},methods:{remove_db:function(t){this.$store.dispatch("remove_db")}}},c,!1,function(t){e("UZss")},"data-v-c5ebf4c8",null).exports}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("h3",[this._v("Vuex购物车demo")]),this._v(" "),n("List"),this._v(" "),n("Cart"),this._v(" "),n("Info")],1)},staticRenderFns:[]};var _,d=e("VU/8")(a,o,!1,function(t){e("zZoP")},null,null).exports,u=e("9rMa"),v={cartList:localStorage.getItem("vuex_cart")?JSON.parse(localStorage.getItem("vuex_cart")):[],curIndex:-1,cartInfos:{total_price:0,total_nums:0}},l={getCartList:function(t){return t.cartList},getInfos:function(t){t.cartInfos.total_price=0,t.cartInfos.total_nums=0;for(var n=t.cartList,e=0;e<n.length;e++){var r=parseInt(n[e].price),s=parseInt(n[e].num);t.cartInfos.total_price+=r*s,t.cartInfos.total_nums+=s}return t.cartInfos}},f=e("bOdI"),h=e.n(f),m=e("mvHQ"),p=e.n(m),b={state:v,getters:l,actions:{check_db:function(t,n){return(0,t.commit)("CHECK_DB",n)},create_db:function(t,n){return(0,t.commit)("CREATE_DB",n)},add_db:function(t,n){return(0,t.commit)("ADD_DB",n)},remove_db:function(t){return(0,t.commit)("REMOVE_DB")},reduce_db:function(t){return(0,t.commit)("REDUCE_DB")},del_db:function(t){return(0,t.commit)("DEL_DB")},update_cur_status:function(t,n){return(0,t.commit)("UPDATE_CUR_STATUS",n)}},mutations:(_={},h()(_,"CHECK_DB",function(t,n){t.curIndex=-1;var e=t.cartList;if(e.length)for(var r=0;r<e.length;r++)if(e[r].id===n){t.curIndex=r;break}}),h()(_,"CREATE_DB",function(t,n){t.cartList.unshift(n)}),h()(_,"ADD_DB",function(t){t.cartList[t.curIndex].num=parseInt(t.cartList[t.curIndex].num),t.cartList[t.curIndex].num++,localStorage.setItem("vuex_cart",p()(t.cartList))}),h()(_,"REMOVE_DB",function(t){t.cartList.forEach(function(t){t.num=0}),t.cartList=[],localStorage.removeItem("vuex_cart")}),h()(_,"REDUCE_DB",function(t){t.cartList[t.curIndex].num=parseInt(t.cartList[t.curIndex].num),t.cartList[t.curIndex].num--,0===t.cartList[t.curIndex].num&&t.cartList.splice(t.curIndex,1)}),h()(_,"DEL_DB",function(t){t.cartList[t.curIndex].num=0,t.cartList.splice([t.curIndex],1)}),h()(_,"UPDATE_CUR_STATUS",function(t,n){var e=n.index,r=void 0===e?-1:e;t.curIndex=r}),_)};r.a.use(u.a);var I=new u.a.Store({modules:{cart:b}});new r.a({el:"#app",store:I,components:{App:d},template:"<App/>"})},UZss:function(t,n){},gvgD:function(t,n){},zZoP:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.1b937f9bf90980429d3d.js.map