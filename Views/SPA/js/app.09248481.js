(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},i={app:0},n={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"532ba747","chunk-4ba4c3d8":"88549736","chunk-69f22882":"8a23af76","chunk-6c7f4040":"3f175b9b","chunk-2d0d6f41":"4d994244","chunk-c55ea336":"2738d482"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-4ba4c3d8":1,"chunk-6c7f4040":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"a998c8a6","chunk-4ba4c3d8":"ad2ba9a7","chunk-69f22882":"31d6cfe0","chunk-6c7f4040":"4c6868dc","chunk-2d0d6f41":"31d6cfe0","chunk-c55ea336":"31d6cfe0"}[t]+".css",n=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){l=m[o],u=l.getAttribute("data-href");if(u===r||u===n)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[t],v.parentNode.removeChild(v),a(s)},v.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){i[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",m.name="ChunkLoadError",m.type=r,m.request=i,a[1](m)}n[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"09e0":function(t,e,a){},1182:function(t,e,a){},"2b56":function(t,e,a){"use strict";a("09e0")},"34ba":function(t,e,a){"use strict";a("1182")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("NavBar"),a("v-main",[a("router-view")],1),a("Footer")],1)},n=[],s=a("5530"),o=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-app-bar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("HNF")]),a("span",[t._v("Project")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1),a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),r),[a("v-icon",[t._v("mdi-help-circle")])],1)]}}])},[a("v-list",{staticClass:"pa-2"},t._l(t.faqs,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-icon",[a("v-icon",{staticClass:"dark--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"dark--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),a("v-badge",{attrs:{bordered:"",top:"",color:"green",dot:"","offset-x":"37","offset-y":"17"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bell-outline")])],1)],1),a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),r),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",{staticClass:"pa-2"},t._l(t.links,(function(e){return a("v-list-item",{key:e.title,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"dark--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"dark--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),r),[a("v-avatar",{attrs:{size:"45"}},[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/11.jpg"}})],1)],1)]}}])},[a("v-list",{staticClass:"pa-2"},t._l(t.account,(function(e){return a("v-list-item",{key:e.title,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"dark--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"dark--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",id:"hnf-drawer"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"120"}},[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/11.jpg"}})],1),a("p",{staticClass:"subheading grey--text mt-3 mb-2"},[t._v("@shaynenguyen")])],1)],1),a("v-list",{attrs:{dense:""}},t._l(t.links,(function(e){return a("v-list-item",{key:e.title,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1),a("v-subheader",[t._v("Stock")]),a("v-list",{attrs:{dense:""}},t._l(t.supliers,(function(e){return a("v-list-item",{key:e.title,attrs:{route:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1),a("v-subheader",[t._v("Account Settings")]),a("v-list",{attrs:{dense:""}},t._l(t.account,(function(e){return a("v-list-item",{key:e.title,attrs:{route:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1),a("v-subheader",[t._v("User's Help")]),a("v-list",{attrs:{dense:""}},t._l(t.faqs,(function(e){return a("v-list-item",{key:e.title,attrs:{route:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},l=[],u={name:"NavBar",data:function(){return{drawer:!1,links:[{title:"Dashboard",icon:"mdi-home",route:"/"},{title:"Photo",icon:"mdi-image",route:"/photo"},{title:"Projects",icon:"mdi-widgets",route:"/project"},{title:"Staff",icon:"mdi-account-group",route:"/staff"},{title:"Roster",icon:"mdi-calendar-month",route:"/roster"},{title:"Invoice",icon:"mdi-receipt",route:"/invoice"},{title:"Chat",icon:"mdi-forum",route:"/chat"}],account:[{title:"Profile",icon:"mdi-account",route:"/"},{title:"Account",icon:"mdi-wallet",route:"/"},{title:"Settings",icon:"mdi-wrench",route:"/"},{title:"Inbox",icon:"mdi-inbox",route:"/"},{title:"Logout",icon:"mdi-power",route:"/logout"}],faqs:[{title:"Help",icon:"mdi-message-question-outline"},{title:"Guide",icon:"mdi-school-outline"},{title:"Document",icon:"mdi-file-document-outline"}],supliers:[{title:"Bitcoin",icon:"mdi-bitcoin"},{title:"Delivery",icon:"mdi-truck-delivery-outline"},{title:"Bird",icon:"mdi-bird"}]}}},m=u,v=(a("34ba"),a("2877")),d=a("6544"),p=a.n(d),f=a("40dc"),h=a("5bc1"),b=a("bb78"),g=a("8212"),_=a("4ca6"),y=a("8336"),x=a("0e8f"),C=a("132d"),k=a("adda"),w=a("a722"),V=a("8860"),j=a("da13"),S=a("5d23"),T=a("34c3"),A=a("e449"),O=a("f774"),B=a("2fa4"),E=a("e0c7"),L=Object(v["a"])(m,c,l,!1,null,null,null),P=L.exports;p()(L,{VAppBar:f["a"],VAppBarNavIcon:h["a"],VAppBarTitle:b["a"],VAvatar:g["a"],VBadge:_["a"],VBtn:y["a"],VFlex:x["a"],VIcon:C["a"],VImg:k["a"],VLayout:w["a"],VList:V["a"],VListItem:j["a"],VListItemContent:S["a"],VListItemIcon:T["a"],VListItemTitle:S["c"],VMenu:A["a"],VNavigationDrawer:O["a"],VSpacer:B["a"],VSubheader:E["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{},[a("h6",{staticClass:"grey--text text-center subheader"},[a("i",[t._v("HNF Project")]),t._v(" - "+t._s((new Date).getFullYear())+" ")]),a("v-spacer"),t._l(t.icons,(function(e){return a("v-btn",{key:e.text,staticClass:"grey--text",attrs:{to:e.route,icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.text)+" ")])],1)}))],2)],1)],1)},I=[],D={data:function(){return{icons:[{text:"mdi-facebook",route:"http://www.facebook.com"},{text:"mdi-twitter",route:"http://www.twitter.com"},{text:"mdi-linkedin",route:"http://www.linkedin.com"},{text:"mdi-instagram",route:"http://www.instagram.com"}]}}},N=D,q=a("b0af"),R=a("99d9"),$=a("553a"),M=Object(v["a"])(N,F,I,!1,null,null,null),G=M.exports;p()(M,{VBtn:y["a"],VCard:q["a"],VCardTitle:R["d"],VFooter:$["a"],VIcon:C["a"],VSpacer:B["a"]});var W={name:"App",components:{NavBar:P,Footer:G},data:function(){return{}},computed:Object(s["a"])({},Object(o["b"])(["invoiceModal"]))},H=W,J=(a("034f"),a("7496")),z=a("f6c4"),K=Object(v["a"])(H,i,n,!1,null,null,null),U=K.exports;p()(K,{VApp:J["a"],VMain:z["a"]});a("d3b7"),a("3ca3"),a("ddb0");var Y=a("8c4f"),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4",attrs:{id:"dashboard"}},[a("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),a("v-container",{staticClass:"container"},[a("v-layout",{staticClass:"mb-5",attrs:{row:""}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{plain:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},"v-btn",i,!1),r),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By Project name")])],1)]}}])},[a("span",[t._v("Sort Project by name")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:"",color:"grey"},on:{click:function(e){return t.sortBy("person")}}},"v-btn",i,!1),r),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-account")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By Person")])],1)]}}])},[a("span",[t._v("Sorting with person name")])])],1),t._l(t.projects,(function(e){return a("v-card",{key:e.title,staticClass:"my-5",attrs:{flat:""}},[a("v-layout",{class:"mt-2 pt-3 pl-4 project "+e.status,staticStyle:{"margin-left":"0px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Website Project")]),a("p",{staticClass:"subheader"},[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Training Project")]),a("p",{staticClass:"subheader"},[t._v(t._s(e.person)+".")])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Due by:")]),a("p",{staticClass:"subheader"},[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"right"},[a("v-chip",{class:e.status+" white--text caption my-2",attrs:{small:""}},[t._v(t._s(e.status))])],1)])],1)],1)}))],2),a("v-container",{staticClass:"container"},[a("div",{staticClass:"todo"},t._l(t.airports,(function(e,r){return a("div",{key:r,on:{click:function(a){return t.$store.dispatch("addToFavorites",e)}}},[a("AirportCard",{attrs:{airport:e}})],1)})),0),t.$store.state.airports.favorites.length?a("h2",{staticClass:"subheading"},[t._v("Favorites ("+t._s(t.$store.state.airports.favorites.length)+")")]):t._e(),a("div",{staticClass:"todo"},t._l(t.$store.state.airports.favorites,(function(e,r){return a("div",{key:r,on:{click:function(a){return t.$store.dispatch("removeFromFavorites",e)}}},[a("AirportCard",{attrs:{airport:e}})],1)})),0)])],1)},Q=[],X=(a("4e827"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"airport"},[a("p",[t._v(t._s(t.airport.abbreviation))]),a("p",[t._v(t._s(t.airport.name))]),a("p",[t._v(t._s(t.airport.city)+", "+t._s(t.airport.state)+" ")])])}),tt=[],et={props:["airport"]},at=et,rt=(a("6c8e"),Object(v["a"])(at,X,tt,!1,null,"093251c8",null)),it=rt.exports,nt={name:"Dashboard",components:{AirportCard:it},mounted:function(){var t=this;fetch("https://my.api.mockaroo.com/airports.json?key=3082bdc0").then((function(t){return t.json()})).then((function(e){return t.airports=e})).catch((function(t){return console.log(t.message)}))},data:function(){return{projects:[{title:"Design a new website",person:"Shayne Nguyen",due:"1st Jan 2021",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Code up the homepage",person:"Chun Li",due:"10th Jan 2022",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design video thumbnails",person:"Ryu",due:"20th Dec 2021",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Create a community forum",person:"Gouken",due:"20th Oct 2021",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}],airports:[]}},methods:{sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))}}},st=nt,ot=(a("2b56"),a("cc20")),ct=a("a523"),lt=a("3a2f"),ut=Object(v["a"])(st,Z,Q,!1,null,null,null),mt=ut.exports;p()(ut,{VBtn:y["a"],VCard:q["a"],VChip:ot["a"],VContainer:ct["a"],VFlex:x["a"],VIcon:C["a"],VLayout:w["a"],VTooltip:lt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.desserts,search:t.search}})],1)},dt=[],pt={data:function(){return{search:"",headers:[{text:"Dessert (100g serving)",align:"start",filterable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}}},ft=pt,ht=a("8fea"),bt=a("8654"),gt=Object(v["a"])(ft,vt,dt,!1,null,null,null),_t=gt.exports;p()(gt,{VCard:q["a"],VCardTitle:R["d"],VDataTable:ht["a"],VTextField:bt["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4",attrs:{id:"team"}},[a("v-container",{staticClass:"container"},[a("v-layout",{staticClass:"mb-5",attrs:{row:""}},[a("h1",{staticClass:"subheading grey--text ml-4"},[t._v("Staff")]),a("v-spacer"),a("v-btn",{staticClass:"ma-2 white--text lighten-2",attrs:{color:"indigo"}},[a("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[t._v("mdi-plus")]),t._v(" Add Team ")],1)],1),a("v-layout",{staticClass:"mb-5",attrs:{row:""}},t._l(t.team,(function(e){return a("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"text-xs-center ma-3 text-center",attrs:{text:""}},[a("v-responsive",{staticClass:"pt-4"},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:e.avatar}})])],1),a("v-card-text",[a("div",{staticClass:"subheading"},[t._v(t._s(e.name))]),a("div",{staticClass:"grey--text"},[t._v(t._s(e.role))])]),a("v-card-actions",[a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-btn",{attrs:{text:"",color:"grey",center:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-message")]),a("span",[t._v("message")])],1)],1)],1)],1)],1)})),1)],1)],1)},xt=[],Ct={data:function(){return{team:[{name:"Shayne Ng",role:"Web developer",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},{name:"Ryu",role:"Graphic designer",avatar:"https://randomuser.me/api/portraits/men/2.jpg"},{name:"Chun Li",role:"Web developer",avatar:"https://randomuser.me/api/portraits/women/20.jpg"},{name:"Gouken",role:"Social media maverick",avatar:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Yoshi",role:"Sales guru",avatar:"https://randomuser.me/api/portraits/men/22.jpg"}]}}},kt=Ct,wt=a("6b53"),Vt=a("0fd9"),jt=Object(v["a"])(kt,yt,xt,!1,null,null,null),St=jt.exports;p()(jt,{VAvatar:g["a"],VBtn:y["a"],VCard:q["a"],VCardActions:R["a"],VCardText:R["c"],VContainer:ct["a"],VFlex:x["a"],VIcon:C["a"],VLayout:w["a"],VResponsive:wt["a"],VRow:Vt["a"],VSpacer:B["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4",attrs:{id:"roster"}},[a("v-container",{staticClass:"container mt-4"},[a("v-layout",{staticClass:"mt-2 mb-3",attrs:{row:""}},[a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{text:"",color:"grey--text"},on:{click:function(e){t.loader="loading1"}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{staticClass:"mx-3",attrs:{outlined:"",color:"grey--text grey"},on:{click:function(e){t.loader="loading2"}}},[t._v(" Current Week ")]),a("v-btn",{attrs:{text:"",color:"grey--text"},on:{click:function(e){t.loader="loading3"}}},[a("v-icon",{attrs:{white:""}},[t._v("mdi-arrow-right")])],1)],1),a("v-spacer"),a("div",{staticClass:"text-center"},[a("h2",{staticClass:"grey--text text-h5"},[t._v("Week 23 - Commercing 12th Oct 2021")])]),a("v-spacer"),a("v-btn",{staticClass:"mx-2 white--text lighten-2",attrs:{color:"indigo"}},[a("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[t._v("mdi-plus")]),t._v(" Add Roster ")],1)],1),a("v-layout",{staticClass:"my-1",attrs:{row:""}},t._l(t.weekdays,(function(e){return a("v-col",{key:e,staticClass:"px-0",attrs:{xs12:"",md6:"",xl2:""}},[a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-title",{staticClass:"text-h5"},[t._v(t._s(e))]),a("v-card-subtitle",{staticClass:"subheaders grey--text"},[a("i",[t._v("25th Octorber, 2021")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("v-subheader",[t._v("Team A")]),a("v-list",{attrs:{dense:""}},t._l(t.teamA,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-subtitle",[t._v(t._s(e.role))])],1)],1)})),1),a("v-subheader",[t._v("Team B")]),a("v-list",{attrs:{dense:""}},t._l(t.teamB,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-subtitle",[t._v(t._s(e.role))])],1)],1)})),1)],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",{staticClass:"text-center"},[a("v-btn",{attrs:{color:"green",icon:""}},[a("v-icon",[t._v("mdi-check-decagram")])],1),a("v-btn",{staticClass:"grey--text lighten-5",attrs:{icon:"",disabled:""}},[a("v-icon",[t._v("mdi-pencil-outline")])],1)],1)],1)],1)})),1),a("v-layout",{staticClass:"my-1",attrs:{row:""}},t._l(3,(function(e){return a("v-col",{key:e,staticClass:"px-3",attrs:{xs12:"",md4:""}},[a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-text",[a("v-subheader",[t._v("Team SB")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{dense:""}},t._l(t.teamSB,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-subtitle",[t._v(t._s(e.role))])],1)],1)})),1)],1)],1)],1)})),1)],1)],1)},At=[],Ot={data:function(){return{weekdays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],teamA:[{name:"Shayne Ng",role:"Web developer",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},{name:"Yoshi",role:"Sales guru",avatar:"https://randomuser.me/api/portraits/men/22.jpg"}],teamB:[{name:"Ryu",role:"Graphic designer",avatar:"https://randomuser.me/api/portraits/men/2.jpg"},{name:"Chun Li",role:"Web developer",avatar:"https://randomuser.me/api/portraits/women/20.jpg"},{name:"Gouken",role:"Social media",avatar:"https://randomuser.me/api/portraits/men/12.jpg"}],teamSB:[{name:"Raxin T",role:"Logo Designer",avatar:"https://randomuser.me/api/portraits/men/60.jpg"},{name:"Benjamin",role:"Home developer",avatar:"https://randomuser.me/api/portraits/women/60.jpg"},{name:"Ronaldo",role:"Marketing M",avatar:"https://randomuser.me/api/portraits/men/52.jpg"},{name:"Beberto",role:"Graphic TK",avatar:"https://randomuser.me/api/portraits/men/12.jpg"},{name:"Jackie C",role:"DevOps",avatar:"https://randomuser.me/api/portraits/women/34.jpg"},{name:"CA Zhang",role:"Retailer M",avatar:"https://randomuser.me/api/portraits/men/47.jpg"}]}}},Bt=Ot,Et=a("62ad"),Lt=a("ce7e"),Pt=a("8270"),Ft=Object(v["a"])(Bt,Tt,At,!1,null,null,null),It=Ft.exports;p()(Ft,{VBtn:y["a"],VCard:q["a"],VCardActions:R["a"],VCardSubtitle:R["b"],VCardText:R["c"],VCardTitle:R["d"],VCol:Et["a"],VContainer:ct["a"],VDivider:Lt["a"],VIcon:C["a"],VLayout:w["a"],VList:V["a"],VListItem:j["a"],VListItemAvatar:Pt["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VSpacer:B["a"],VSubheader:E["a"]});var Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"subheading text-h3"},[t._v("Page Not Found.")]),a("p",{staticClass:"grey--text"},[t._v("Please go back home !!!")])])}],qt={},Rt=Object(v["a"])(qt,Dt,Nt,!1,null,null,null),$t=Rt.exports;r["a"].use(Y["a"]);var Mt=[{path:"/",name:"Dashboard",component:mt},{path:"/project",name:"Project",component:function(){return a.e("about").then(a.bind(null,"28f8"))}},{path:"/project/create",name:"projectCreate",component:function(){return Promise.all([a.e("chunk-6c7f4040"),a.e("chunk-2d0d6f41")]).then(a.bind(null,"756c"))}},{path:"/project/:id",name:"projectDetails",component:function(){return Promise.all([a.e("chunk-6c7f4040"),a.e("chunk-c55ea336")]).then(a.bind(null,"c27d"))},props:!0},{path:"/photo",name:"Photo",component:_t},{path:"/staff",name:"Staff",component:St},{path:"/roster",name:"Roster",component:It},{path:"/invoice",name:"Invoice",component:function(){return a.e("chunk-69f22882").then(a.bind(null,"35cb"))}},{path:"/invoice/create",name:"invoiceCreate",component:function(){return a.e("chunk-4ba4c3d8").then(a.bind(null,"34e1"))}},{path:"/:catchAll(.*)",component:$t,name:"NotFound"}],Gt=new Y["a"]({mode:"history",base:"/",routes:Mt}),Wt=Gt,Ht=(a("99af"),{namespaced:!0,state:{firstName:"Shayne",lastName:"Doe"},getters:{fullName:function(t){return"".concat(t.firstName," ").concat(t.lastName)}}}),Jt=(a("a434"),{state:{favorites:[]},mutations:{UPDATE_FAVORITES:function(t,e){t.favorites=e},REMOVE_FAVORITES:function(t,e){t.favorites=e}},actions:{addToFavorites:function(t,e){var a=t.state.favorites;a.push(e),t.commit("UPDATE_FAVORITES",a)},removeFromFavorites:function(t,e){var a=t.state.favorites,r=a.indexOf(e);r>-1&&a.splice(r,1),t.commit("REMOVE_FAVORITES",a)}}}),zt={state:{},mutations:{},actions:{}};r["a"].use(o["a"]);var Kt=new o["a"].Store({modules:{user:Ht,airports:Jt,invoices:zt}}),Ut=a("f309");r["a"].use(Ut["a"],{iconfont:"mdi",theme:{primary:"#9652ff",success:"#36d1c2",info:"#ffaa2c",error:"#ff6347",warning:"#ffa500"}});var Yt=new Ut["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Wt,store:Kt,vuetify:Yt,render:function(t){return t(U)}}).$mount("#app")},"6c8e":function(t,e,a){"use strict";a("7a2f")},"7a2f":function(t,e,a){},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.09248481.js.map