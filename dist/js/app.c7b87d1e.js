(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],d=0,v=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("9085")},1396:function(t,e,a){"use strict";a("2c2f")},"2c2f":function(t,e,a){},"456b":function(t,e,a){"use strict";a("8741")},"4d41":function(t,e,a){t.exports=a.p+"img/avatar.d500b7f3.png"},5434:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"mx-auto overflow-hidden",attrs:{id:"app",height:"100%",width:"100%"}},[a("v-navbar"),a("router-view",{attrs:{isLoading:t.isLoading}})],1)},i=[],o=a("5530"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{color:"#c0c0c0",dark:"",width:"100%"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}})],1),n("v-navigation-drawer",{attrs:{height:"100vh",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-orange accent-2"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item-avatar",{attrs:{"min-width":"140px","min-height":"140px"}},[n("v-img",{attrs:{src:a("4d41"),alt:"avatar",width:"100%",height:"100%"}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.contactData.fullName)+" ")]),n("v-list-item-subtitle",[n("a",{staticClass:"text-decoration-none  text--primary",attrs:{href:"mailto:"+t.contactData.email}},[t._v(" "+t._s(t.contactData.email)+" ")])])],1),n("v-list-item",{on:{click:function(e){return t.toPage("gallery")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v(" Галерея ")])],1),n("v-list-item",{on:{click:function(e){return t.toPage("about")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v(" Обо мне ")])],1)],1)],1)],1)],1)},s=[],l=(a("b0c0"),{data:function(){return{drawer:!1,group:null,contactData:{fullName:"Konstantin Trofimov",email:"const.trofimov@gmail.com"}}},methods:{toPage:function(t){this.$router.push({name:t}).catch((function(t){if("NavigationDuplicated"!=t.name)throw t}))}}}),u=l,d=a("2877"),v=a("6544"),f=a.n(v),m=a("40dc"),p=a("5bc1"),h=a("132d"),b=a("adda"),g=a("8860"),_=a("da13"),w=a("8270"),y=a("5d23"),x=a("1baa"),A=a("34c3"),T=a("f774"),O=Object(d["a"])(u,c,s,!1,null,null,null),C=O.exports;f()(O,{VAppBar:m["a"],VAppBarNavIcon:p["a"],VIcon:h["a"],VImg:b["a"],VList:g["a"],VListItem:_["a"],VListItemAvatar:w["a"],VListItemContent:y["a"],VListItemGroup:x["a"],VListItemIcon:A["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:T["a"]});var j=a("2f62"),I={name:"App",components:{vNavbar:C},data:function(){return{isLoading:!0,loadingDelay:500}},methods:Object(o["a"])({},Object(j["b"])(["FEATCH_DATA_TO_API"])),mounted:function(){var t=this;this.FEATCH_DATA_TO_API().then((function(e){e&&setTimeout((function(){t.isLoading=!1}),t.loadingDelay)}))}},V=I,E=(a("034f"),a("7496")),D=Object(d["a"])(V,r,i,!1,null,null,null),k=D.exports;f()(D,{VApp:E["a"]});var L=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[t.isLoading?a("v-loader",{staticClass:"loader"}):a("v-categories",{staticClass:"mt-3"})],1)},P=[],$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-spinner"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])}],H=(a("613b"),{}),R=Object(d["a"])(H,$,G,!1,null,null,null),B=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.categories,(function(t,e){return a("v-category-list",{key:e,attrs:{category:t}})})),1)},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-item-group",[a("v-row",{staticClass:"my-1"},t._l(t.category,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",xs:"6",sm:"4",md:"2",lg:"2"}},[a("v-item",[a("v-card",{staticClass:"d-flex align-center"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[a("v-img",{staticClass:"align-end pb-3",attrs:{src:e.thumbnailUrl,width:"150px",height:"150px"}},[a("v-btn",{staticClass:"category-item__btn font-weight-bold pa-3",class:{"show-btn":r},attrs:{elevation:"2","x-small":""},on:{click:function(a){return t.toItemInfo(+e.id)}}},[t._v(" Подробнее ")])],1)]}}],null,!0)})],1)],1)],1)})),1)],1)],1)},z=[],q={name:"vCatigory",props:{category:{type:Array,default:function(){return[]}}},methods:{toItemInfo:function(t){this.$router.push({name:"card",query:{id:t}})}}},J=q,K=(a("456b"),a("8336")),W=a("b0af"),U=a("62ad"),Q=a("a523"),X=a("ce87"),Y=a("d903"),Z=a("604c"),tt=a("0fd9"),et=Object(d["a"])(J,N,z,!1,null,null,null),at=et.exports;f()(et,{VBtn:K["a"],VCard:W["a"],VCol:U["a"],VContainer:Q["a"],VHover:X["a"],VImg:b["a"],VItem:Y["a"],VItemGroup:Z["b"],VRow:tt["a"]});var nt={name:"vCatigories",components:{vCategoryList:at},computed:Object(o["a"])({},Object(j["d"])(["categories"])),methods:Object(o["a"])({},Object(j["b"])(["SORT_DATA"])),mounted:function(){this.SORT_DATA()}},rt=nt,it=Object(d["a"])(rt,F,M,!1,null,null,null),ot=it.exports,ct={name:"vGalleryWrapper",components:{vLoader:B,vCategories:ot},props:{isLoading:{type:Boolean}}},st=ct,lt=(a("1396"),Object(d["a"])(st,S,P,!1,null,null,null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-10 mx-5",attrs:{height:"80%"}},[a("v-card-text",[a("div",[t._v("ID")]),a("p",{staticClass:"text-h3 ml-1 font-weight-bold deep-orange--text"},[t._v(" "+t._s(t.itemData.id)+" ")]),a("div",[t._v("Title")]),a("p",{staticClass:"display-1 ml-1 text--primary"},[t._v(" "+t._s(t.itemData.title)+" ")]),a("div",[t._v("Link")]),a("a",{staticClass:"headline ml-1 blue-grey--text font-weight-medium",attrs:{href:t.itemData.url}},[t._v(" "+t._s(t.itemData.url)+" ")])])],1)},vt=[],ft=(a("d81d"),{name:"vItemCardInfo",methods:Object(o["a"])({},Object(j["b"])(["FEATCH_DATA_TO_API"])),computed:Object(o["a"])(Object(o["a"])({},Object(j["c"])(["GET_DATA"])),{},{itemData:function(){var t={},e=this;return this.GET_DATA.map((function(a){a.id==e.$route.query.id&&(t=a)})),t}}),mounted:function(){this.FEATCH_DATA_TO_API()}}),mt=ft,pt=a("99d9"),ht=Object(d["a"])(mt,dt,vt,!1,null,null,null),bt=ht.exports;f()(ht,{VCard:W["a"],VCardText:pt["b"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-6 pa-3",attrs:{color:"#c0c0c0",dark:""}},[a("v-card-text",{staticClass:"headline font-weight-bold white--text"},[t._l(t.text,(function(e,n){return a("div",{key:n},[a("p",{class:[0===n?"deep-orange--text":""]},[t._v(t._s(e))])])})),a("div",[t._v(" Bы сможете узнать обо мне больше, посетив "),a("a",{staticClass:"about__link deep-orange--text text-decoration-none",attrs:{href:t.links.portfolio}},[t._v(" мой сайт ")])])],2),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-row",{attrs:{align:"center",justify:"end"}},[a("a",{attrs:{href:t.links.github},on:{mouseover:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}}},[a("v-github-icon",{attrs:{hover:t.isHover}})],1)])],1)],1)],1)},_t=[],wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",transition:".7s",fill:t.color,width:"50",height:"50",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])},yt=[],xt={name:"vGithubIcon",data:function(){return{color:""}},props:{hover:{type:Boolean}},watch:{hover:function(){this.hover?this.color="#FF5722":this.color="#212121"}}},At=xt,Tt=(a("6ef1"),Object(d["a"])(At,wt,yt,!1,null,null,null)),Ot=Tt.exports,Ct={name:"vAbout",components:{vGithubIcon:Ot},data:function(){return{links:{portfolio:"https://consttro.ru",github:"https://github.com/Konstantin-Trofimov"},text:["Hello World!","Я начинающий web-разработчик. Несколько лет назад я поставил для себя цель освоить новую профессию. Сейчас, изучив технологии, необходимые в разработке, и приобретя нужные знания, я готов открыть себя миру web-индустрии","Возможно, мой опыт еще не велик, но я уверенно компенсирую это постоянным стремлением к новым знаниям и усердием в своей работе. За время моего обучения, я доказал себе, что я могу оставаться максимально настойчивым в достижении поставленных перед собою целей, эффективно решать задачи, которые находятся в моей компетенции","Я мечтаю присоединиться к опытной и профессиональной команде, что бы продолжить свой путь, постоянно развиваясь и совершенствуя свои навыки"],isHover:!1,hoverDelay:30}}},jt=Ct,It=(a("d489"),Object(d["a"])(jt,gt,_t,!1,null,null,null)),Vt=It.exports;f()(It,{VCard:W["a"],VCardActions:pt["a"],VCardText:pt["b"],VListItem:_["a"],VRow:tt["a"]}),n["default"].use(L["a"]);var Et=[{path:"/",name:"gallery",component:ut},{path:"/about",name:"about",component:Vt},{path:"/card",name:"card",component:bt}],Dt=new L["a"]({mode:"history",base:"/",routes:Et}),kt=Dt,Lt=a("1da1");a("96cf"),a("fb6a"),a("d3b7");n["default"].use(j["a"]);var St=new j["a"].Store({state:{dataLimit:24,categorySize:6,data:[],categories:[]},mutations:{SET_DATA:function(t,e){t.data=e},SET_CATEGORIES:function(t){for(var e=this.state.categorySize,a=[],n=0;n<Math.ceil(t.data.length/e);n++)a[n]=t.data.slice(n*e,n*e+e);t.categories=a}},actions:{FEATCH_DATA_TO_API:function(t){var e=this;return Object(Lt["a"])(regeneratorRuntime.mark((function a(){var n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.state.dataLimit,a.next=3,fetch("https://jsonplaceholder.typicode.com/photos?_limit=".concat(n));case 3:return r=a.sent,a.next=6,r.json();case 6:return i=a.sent,t.commit("SET_DATA",i),a.abrupt("return",i);case 9:case"end":return a.stop()}}),a)})))()},SORT_DATA:function(t){var e=t.commit;e("SET_CATEGORIES")}},getters:{GET_DATA:function(t){return t.data},GET_CATEGORIES:function(t){return t.categories}}}),Pt=a("ce5b"),$t=a.n(Pt);n["default"].use($t.a);var Gt={},Ht=new $t.a(Gt);n["default"].config.productionTip=!1,new n["default"]({router:kt,store:St,vuetify:Ht,render:function(t){return t(k)}}).$mount("#app")},"613b":function(t,e,a){"use strict";a("5434")},"6ef1":function(t,e,a){"use strict";a("7370")},7370:function(t,e,a){},8741:function(t,e,a){},9085:function(t,e,a){},a96a:function(t,e,a){},d489:function(t,e,a){"use strict";a("a96a")}});
//# sourceMappingURL=app.c7b87d1e.js.map