webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},FunY:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=(a("Jmt5"),a("K3J8"),a("9M+g"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}),o=a("VU/8")({name:"App"},i,!1,null,null,null).exports,n=a("/ocq"),c=a("7t+N"),r=a.n(c),l=a("e6fC"),d=a("U0v6"),m=a("C/JF"),v=a("fhbW"),f=a("DfMW"),p={name:"Index",mounted:function(){r()(window).resize(this.resize),this.resize(),this.restartVideo()},methods:{resize:function(){var t=r()("#video-bg video, #video-bg img"),e=r()(window);t.css("width",e.width()+30+"px"),t.css("height",e.height()+100+"px")},restartVideo:function(){r()("#video-bg video")[0].currentTime=0,setTimeout(this.restartVideo,24e4)}},data:function(){return{}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"video-bg"}},[a("img",{attrs:{src:"static/img/background.png"}}),t._v(" "),a("video",{attrs:{muted:"",defaultMuted:"",autoplay:"",playsinline:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://cdn.novusphere.io/static/timelapse.mp4",type:"video/mp4"}})])]),t._v(" "),a("div",{staticClass:"overlay-bg"}),t._v(" "),a("div",{attrs:{id:"homepage"}},[a("div",{staticClass:"container content"},[a("div",{staticClass:"row header mt-2"},[a("div",{staticClass:"offset-md-4 col-md-4 col-xs-12 text-center"},[a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://discord.gg/PtXzUVr","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"Discord"}},[a("font-awesome-icon",{attrs:{icon:["fab","discord"]}})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://twitter.com/thenovusphere","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"Twitter"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://medium.com/@thenovusphere/","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"Medium"}},[a("font-awesome-icon",{attrs:{icon:["fab","medium"]}})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://github.com/Novusphere","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"GitHub"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://github.com/Novusphere/temporary-blockchain/blob/master/PRECOMPILED.MD","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"Wallet"}},[a("font-awesome-icon",{attrs:{icon:["fas","wallet"]}})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://www.cryptopia.co.nz/Exchange/?market=ATMOS_BTC","data-toggle":"tooltip","data-animation":"false","data-placement":"top",title:"Trade"}},[a("font-awesome-icon",{attrs:{icon:["fab","btc"]}})],1)])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-xs-12"},[a("h1",[a("font-awesome-icon",{attrs:{icon:["fas","balance-scale"]}})],1),t._v(" "),a("h5",[t._v("Free Usage")]),t._v(" "),a("p",[t._v("Novusphere is entirely free to use, no mandatory paywalls to access content you can otherwise find elsewhere for free.")])]),t._v(" "),a("div",{staticClass:"col-md-3 col-xs-12"},[a("h1",[a("font-awesome-icon",{attrs:{icon:["fas","globe"]}})],1),t._v(" "),a("h5",[t._v("Decentralized Governance")]),t._v(" "),a("p",[t._v("Important decisions are made final by ATMOS holders. The community governs the the direction of development.")])]),t._v(" "),a("div",{staticClass:"col-md-3 col-xs-12"},[a("h1",[a("font-awesome-icon",{attrs:{icon:["fas","code"]}})],1),t._v(" "),a("h5",[t._v("Open Source")]),t._v(" "),a("p",[t._v("We strive to produce open source software that is free to use and anyone can audit.")])]),t._v(" "),a("div",{staticClass:"col-md-3 col-xs-12"},[a("h1",[a("font-awesome-icon",{attrs:{icon:["fas","unlock"]}})],1),t._v(" "),a("h5",[t._v("Uncensorable")]),t._v(" "),a("p",[t._v("Anyone can add content and entries into the database. Anyone can self-host a Novusphere decentralized application.")])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"offset-md-4 col-md-4 col-xs-12 text-center"},[e("object",{attrs:{data:"static/img/logo.svg",type:"image/svg+xml"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"offset-md-4 col-md-4 col-xs-12 text-center mb-1"},[e("span",{staticClass:"title"},[this._v("NOVUSPHERE")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"offset-md-4 col-md-4 col-xs-12 text-center mb-2"},[e("span",{staticClass:"sub-title"},[this._v("INSTANT UNLIMITED ACCESS TO ANYTHING")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"offset-md-4 col-md-4 col-xs-12 text-center mb-4"},[e("a",{staticClass:"btn btn-outline-light",attrs:{href:"#"}},[this._v("WHITEPAPER")])])])}]};var h=a("VU/8")(p,u,!1,function(t){a("FunY")},null,null).exports;window.jQuery=r.a,m.library.add(v.a),m.library.add(f.a),s.a.component("font-awesome-icon",d.FontAwesomeIcon),s.a.use(n.a),s.a.use(l.a);var _=new n.a({routes:[{path:"/",name:"Index",component:h}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e8554fd791c695902a74.js.map