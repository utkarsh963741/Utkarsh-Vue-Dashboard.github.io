(function(t){function a(a){for(var i,n,o=a[0],l=a[1],c=a[2],d=0,v=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,n=1;n<e.length;n++){var l=e[n];0!==s[l]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},s={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6ffb4e29"}[t]+".js"}function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise((function(a,i){e=s[t]=[a,i]}));a.push(e[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t);var c=new Error;r=function(a){l.onerror=l.onload=null,clearTimeout(d);var e=s[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,e[1](c)}s[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var i=e("8a23"),s=e.n(i);s.a},"0a38":function(t,a,e){},"131e":function(t,a,e){},"1a83":function(t,a,e){"use strict";var i=e("d483"),s=e.n(i);s.a},"4d28":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n=(e("034f"),e("2877")),o={},l=Object(n["a"])(o,s,r,!1,null,null,null),c=l.exports,d=(e("d3b7"),e("8c4f")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("div",{staticClass:"container"},[e("div",{staticClass:"mainBody columns "},[e("div",{staticClass:"side column is-one-fifths "},[e("Sidebar"),e("Options",{attrs:{options:t.options}})],1),e("div",{staticClass:"contents  column is-four-fifths is-multiline"},[e("Header"),e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("div",{staticClass:"stuffContainer columns is-multiline"},[e("div",{staticClass:"column is-full columns",staticStyle:{height:"350px",margin:"0px",padding:"0px"}},[e("UserCounts",{staticClass:" flex column is-half",attrs:{userCounts:t.userCounts}}),e("EarningGraph",{staticClass:" flex column is-one-thirds",staticStyle:{height:"310px"}})],1),e("div",{staticClass:" flex column is-full columns",staticStyle:{"margin-left":"10px",height:"460px"}},[e("Foodmenu",{staticClass:"flex column is-one-thirds",staticStyle:{height:"470px"}}),e("CoustomerFeed",{staticClass:"flex column is-one-thirds",staticStyle:{height:"465px"}}),e("RecentActivities",{staticClass:"flex column is-one-thirds",staticStyle:{height:"465px"}})],1),e("SocialMedia",{staticClass:"flex column is-full ",staticStyle:{"margin-left":"10px",height:"150px",padding:"0px","margin-top":"5px","margin-bottom":"10px"},attrs:{social:t.social}}),e("div",{staticClass:" flex column is-full columns",staticStyle:{"margin-left":"10px"}},[e("TodoList",{staticClass:"flex column is-one-thirds"}),e("RecievedOrder",{staticClass:"flex column is-one-thirds"})],1),e("div",{staticClass:" flex column is-full columns",staticStyle:{margin:"10px 10px",height:"400px"}},[e("Weather",{staticClass:"flex column is-one-thirds"}),e("Calender",{staticClass:"flex column is-one-thirds",staticStyle:{padding:"0px"}}),e("CurrentProgress",{staticClass:"flex column is-one-thirds",staticStyle:{"margin-bottom":"0px",height:"100%"}})],1),e("div",{staticClass:"column is-full"},[e("Footer")],1)],1)],1)])])])},v=[],m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"topbar"},[t._m(0),t._m(1),e("div",{staticClass:"notificationIcons"},[e("nav",{staticClass:"navbarRight"},[e("ul",[e("li",[e("a",{attrs:{href:""}},[e("v-badge",{attrs:{content:t.shop,value:t.shop,color:"blue",overlap:""}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-basket")])],1)],1)]),e("li",[e("a",{attrs:{href:""}},[e("v-badge",{attrs:{content:t.messages,value:t.messages,color:"green",overlap:""}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-email")])],1)],1)]),e("li",[e("a",{attrs:{href:""}},[e("v-badge",{attrs:{content:t.notific,value:t.notific,color:"red",overlap:""}},[e("v-icon",{attrs:{medium:""}},[t._v("mdi-bell")])],1)],1)])])])]),e("div",{staticClass:"userIcon"},[e("v-avatar",[e("v-img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Brown"}})],1),e("div",{staticStyle:{height:"20",margin:"5px","padding-top":"5px"}},[e("p",{staticStyle:{"font-size":"20px","margin-left":"5px","margin-right":"5px","margin-bottom":"0px"}},[t._v(t._s(t.name))])]),t._m(2)],1)])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control has-icons-left is-expanded"},[e("input",{staticClass:"input is-small is-rounded",attrs:{type:"text",placeholder:"SearchProducts"}}),e("p",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-search "})])]),e("div",{staticClass:"control "},[e("a",{staticClass:"button is-info is-small is-rounded"},[t._v("Search")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"field",staticStyle:{"margin-top":"9px"}},[e("div",{staticClass:"control has-icons-left"},[e("div",{staticClass:"select is-small is-rounded"},[e("select",[e("option",{attrs:{selected:""}},[t._v("English")]),e("option",[t._v("Hindi")]),e("option",[t._v("Spanish")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticStyle:{"list-style":"none"},attrs:{href:""}},[e("i",{staticClass:"fa fa-chevron-down user",staticStyle:{"font-size":"10px"}})])}],f={name:"Header",data:function(){return{name:"Utkarsh",messages:5,shop:10,notific:16,show:!1}}},h=f,g=(e("bb2fc"),e("6544")),b=e.n(g),y=e("8212"),x=e("4ca6"),C=e("132d"),_=e("adda"),k=Object(n["a"])(h,m,p,!1,null,"5e9a0468",null),S=k.exports;b()(k,{VAvatar:y["a"],VBadge:x["a"],VIcon:C["a"],VImg:_["a"]});var w=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"100%"}},[e("div",{staticClass:"container"},[e("div",{attrs:{id:"logoName"}},[e("i",{staticClass:"fa fa-bullseye",staticStyle:{"margin-right":"10px","margin-left":"10px"}}),t._v(" "),e("p",{staticStyle:{"margin-right":"10px","margin-top":"13px"}},[t._v(" FoodPanda")])])])])}],T={},I=T,j=(e("97ac"),Object(n["a"])(I,w,V,!1,null,"4466251c",null)),O=j.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"optionContainer"},[e("div",t._l(t.options,(function(a){return e("ul",{key:a.id,staticClass:"list"},[e("li",{staticClass:"options"},[e("i",{class:a.icon}),e("a",{attrs:{href:""}},[t._v(t._s(a.name))])])])})),0)])])},E=[],L={name:"options",props:{options:Array}},P=L,z=(e("e34e"),Object(n["a"])(P,D,E,!1,null,"8767a3b4",null)),R=z.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"columns is-multiline",staticStyle:{height:"100%"}},t._l(t.userCounts,(function(a){return e("div",{key:a.id,staticClass:"column is-half "},[e("div",{staticClass:"countBox  ",staticStyle:{"border-radius":"10px"},style:a.color},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"10px 10px 0px 10px"}},[e("div",[e("i",{class:a.icon,staticStyle:{color:"white","font-size":"32px"}})]),t._m(0,!0)]),e("div",{staticClass:"flex",staticStyle:{"font-size":"20px",color:"white"}},[t._v(t._s(a.value))]),e("div",{staticClass:"flex",staticStyle:{"font-size":"15px","font-fanmily":"sans",color:"white","margin-top":"10px"}},[t._v(t._s(a.name))])])])})),0)])},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("i",{staticClass:"fa fa-spinner fa-pulse",staticStyle:{color:"white"}})])}],F={name:"userCounts",props:{userCounts:Array}},H=F,M=(e("a0e1"),Object(n["a"])(H,A,B,!1,null,"cd6932a2",null)),$=M.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[[e("v-card",{staticClass:"mt-4 mx-auto",attrs:{"max-width":"600",height:"300px"}},[e("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",height:"220px"}},[e("v-sparkline",{attrs:{labels:t.labels,value:t.value,color:"white","line-width":"2",padding:"16",height:"120px"}})],1),e("v-card-text",{staticClass:"pt-0"},[e("div",{staticClass:"title font-weight-light mb-2"},[t._v("Earning Graph")]),e("v-divider",{staticClass:"my-2"}),e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-clock ")]),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("last registration 26 minutes ago")])],1)],1)]],2)},G=[],U={data:function(){return{labels:["Q4 2017","Q1 2018","Q2 2018","Q3 2018","Q4 2018","Q1 2019","Q2 2019","Q3 2019"],value:[200,175,420,390,290,410,500,415]}}},N=U,Q=(e("bb24"),e("b0af")),J=e("99d9"),q=e("ce7e"),K=e("8dd9"),X=e("7f2e"),Y=Object(n["a"])(N,W,G,!1,null,"af318440",null),Z=Y.exports;b()(Y,{VCard:Q["a"],VCardText:J["b"],VDivider:q["a"],VIcon:C["a"],VSheet:K["a"],VSparkline:X["a"]});var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450"}},[e("v-toolbar",{attrs:{color:"white",dark:""}},[e("v-toolbar-title",{staticStyle:{color:"black"}},[t._v("Hot Food Menu")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)],1),e("v-list",t._l(t.items,(function(a){return e("v-list-group",{key:a.title,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("p",{staticStyle:{"font-size":"20px"}},[t._v(" | ")]),e("v-list-item-content",{staticStyle:{margin:"0px","padding-top":"14px","padding-bottom":"16.5px"}},[e("v-list-item-title",{staticStyle:{"font-size":"20px"},domProps:{textContent:t._s(a.title)}})],1),e("p",{staticStyle:{color:"red","font-size":"15px","margin-top":"10px"}},[t._v(t._s(a.price))])]},proxy:!0}],null,!0)},t._l(a.items,(function(a){return e("v-list-item",{key:a.title},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.title)}})],1)],1)})),1)})),1)],1)],1)},at=[],et={data:function(){return{items:[{price:"Rs. 100",title:"Burger",avatar:"fa fa-cheeseburger",items:[{title:"List Item"}]},{price:"Rs. 300",title:"Pizza",active:!0,avatar:"fa fa-pizza",items:[{title:"Panner    Rs.350"},{title:"Mushroom     Rs.400"},{title:"Chicken Sausage     Rs.500"}]},{price:"Rs. 150",title:"Pasta",avatar:"../assets/pasta.jpg",items:[{title:"List Item"}]},{price:"Rs. 50",title:"Cold-Drinks",avatar:"../assets/colddrink.jpg",items:[{title:"Pepsi     Rs.40"},{title:"Coca-Cola    Rs.40"},{title:"Mountain Dew     rs.40"}]},{price:"Rs. 250",title:"Dessert",avatar:"../assets/desert.jpg",items:[{title:"List Item"}]},{price:"Rs. 20",title:"Samosa",avatar:"../assets/pasta.jpg",items:[{title:"List Item"}]},{price:"Rs. 199",title:"Biryani",avatar:"../assets/pasta.jpg",items:[{title:"List Item"}]}]}}},it=et,st=(e("d822"),e("8336")),rt=e("8860"),nt=e("56b0"),ot=e("da13"),lt=e("5d23"),ct=e("2fa4"),dt=e("71d9"),ut=e("2a7f"),vt=Object(n["a"])(it,tt,at,!1,null,"33ec1ef6",null),mt=vt.exports;b()(vt,{VBtn:st["a"],VCard:Q["a"],VIcon:C["a"],VList:rt["a"],VListGroup:nt["a"],VListItem:ot["a"],VListItemContent:lt["a"],VListItemTitle:lt["c"],VSpacer:ct["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"455"}},[e("v-toolbar",{staticStyle:{height:"60px"},attrs:{color:"white",dark:""}},[e("v-toolbar-title",{staticStyle:{color:"black"}},[t._v("Coustomer Feed")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)],1),e("v-list",{attrs:{"three-line":""}},t._l(t.items,(function(a){return e("v-list-item",{key:a.title,staticStyle:{height:"60px"}},[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.avatar}})],1),e("v-list-item-content",{staticStyle:{padding:"0px",height:"60px"}},[e("v-list-item-title",{staticStyle:{"font-size":"15px",margin:"0px"},domProps:{innerHTML:t._s(a.title)}}),e("v-list-item-subtitle",{staticStyle:{"font-size":"10px"},domProps:{innerHTML:t._s(a.subtitle)}})],1)],1)})),1)],1)],1)},ft=[],ht={data:function(){return{items:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"<span class='text--primary'>Ali Connors</span>",subtitle:" &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'<span class="text--primary">to Alex, Scott, Jennifer</span> <span class="grey--text text--lighten-1">4</span>',subtitle:" &mdash; Wish I could come, but I'm out of town this weekend."},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Oui oui",subtitle:"&mdash; Do you have Paris recommendations? Have you ever been?"},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:'<span class="text--primary">Trevor Hansen</span>',subtitle:" &mdash; Have any ideas about what we should get Heidi for her birthday?"},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}}},gt=ht,bt=(e("c62a"),e("8270")),yt=Object(n["a"])(gt,pt,ft,!1,null,"363607e2",null),xt=yt.exports;b()(yt,{VBtn:st["a"],VCard:Q["a"],VIcon:C["a"],VImg:_["a"],VList:rt["a"],VListItem:ot["a"],VListItemAvatar:bt["a"],VListItemContent:lt["a"],VListItemSubtitle:lt["b"],VListItemTitle:lt["c"],VSpacer:ct["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var Ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450"}},[e("v-card",{attrs:{dark:"",flat:""}},[e("v-toolbar",{staticStyle:{height:"60px"},attrs:{color:"white",dark:""}},[e("v-toolbar-title",{staticStyle:{color:"black"}},[t._v("Recent Activities")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)],1)],1),e("v-card-text",{staticClass:"py-0"},[e("v-timeline",{attrs:{"align-top":"",dense:""}},[e("v-timeline-item",{staticClass:"item",attrs:{color:"pink",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("5pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("New Icon")]),e("div",{staticClass:"caption"},[t._v("Mobile App")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"teal lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("3-4pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Design Stand Up")]),e("div",{staticClass:"caption mb-2"},[t._v("Hangouts")]),e("v-avatar",[e("v-img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"}})],1),e("v-avatar",[e("v-img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"}})],1),e("v-avatar",[e("v-img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"}})],1)],1)],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"pink",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("12pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Lunch break")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"teal lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("9-11am")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Finish Home Screen")]),e("div",{staticClass:"caption"},[t._v("Web App")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"green lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("11am")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Work on IOT project")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"yellow lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("2pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Work on Deshik Assignment")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"purple lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("5pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("Study for Exams")])])],1)],1),e("v-timeline-item",{staticClass:"item",attrs:{color:"black lighten-3",small:""}},[e("v-row",{staticClass:"pt-1"},[e("v-col",{staticClass:"item",attrs:{cols:"3"}},[e("strong",[t._v("11pm")])]),e("v-col",{staticClass:"item"},[e("strong",[t._v("sleep")])])],1)],1)],1)],1)],1)],1)},_t=[],kt={name:"RecentActivities"},St=kt,wt=(e("a4e2"),e("62ad")),Vt=e("0fd9"),Tt=e("8414"),It=e("1e06"),jt=Object(n["a"])(St,Ct,_t,!1,null,"9d7c6b32",null),Ot=jt.exports;b()(jt,{VAvatar:y["a"],VBtn:st["a"],VCard:Q["a"],VCardText:J["b"],VCol:wt["a"],VIcon:C["a"],VImg:_["a"],VRow:Vt["a"],VSpacer:ct["a"],VTimeline:Tt["a"],VTimelineItem:It["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var Dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"columns"},t._l(t.social,(function(a){return e("div",{key:a.id,staticClass:"column ",staticStyle:{height:"160px"}},[e("div",{staticStyle:{"border-radius":"5px"},style:a.color},[e("i",{class:a.icon,staticStyle:{padding:"10px",transform:"translateX(-100px)","font-size":"30px"}}),e("div",{staticClass:"flex  columns",staticStyle:{"align-items":"center","justify-content":"flex-top",height:"75px","padding-left":"9px",margin:"0px"}},[e("div",{staticClass:"column rows ",staticStyle:{"font-size":"13px"}},[e("div",{staticClass:"row"},[t._v(t._s(a.name))]),e("div",{staticClass:"row"},[t._v(t._s(a.site))])]),e("div",{staticStyle:{"font-size":"30px"}},[t._v("|")]),e("div",{staticClass:"column",staticStyle:{"font-size":"30px"}},[t._v(t._s(a.value)+" ")])])])])})),0)},Et=[],Lt={name:"social",props:{social:Array}},Pt=Lt,zt=(e("7fc3"),Object(n["a"])(Pt,Dt,Et,!1,null,"2962325c",null)),Rt=zt.exports,At=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"calories","show-select":"","single-select":t.singleSelect},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("TODO List")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Dessert name"},model:{value:t.editedItem.name,callback:function(a){t.$set(t.editedItem,"name",a)},expression:"editedItem.name"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.editItem(i)}}},[t._v(" fa fa-edit ")]),e("v-icon",{attrs:{small:""},on:{click:function(a){return t.deleteItem(i)}}},[t._v(" fa fa-trash ")])]}},{key:"no-data",fn:function(){return[e("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})],1)},Bt=[],Ft=(e("c975"),e("a434"),{data:function(){return{dialog:!1,headers:[{text:"Tasks",value:"name"},{text:"Actions",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{name:"Any random task to be completed"},{name:"Any random task to be completed"},{name:"Any random task to be completed"},{name:"Any random task to be completed"}]},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var a=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(a,1)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}}),Ht=Ft,Mt=(e("1a83"),e("a523")),$t=e("8fea"),Wt=e("169a"),Gt=e("8654"),Ut=Object(n["a"])(Ht,At,Bt,!1,null,"562674ea",null),Nt=Ut.exports;b()(Ut,{VBtn:st["a"],VCard:Q["a"],VCardActions:J["a"],VCardText:J["b"],VCol:wt["a"],VContainer:Mt["a"],VDataTable:$t["a"],VDialog:Wt["a"],VDivider:q["a"],VIcon:C["a"],VRow:Vt["a"],VSpacer:ct["a"],VTextField:Gt["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var Qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("Recieved Orders")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)]},proxy:!0},{key:"item.calories",fn:function(a){var i=a.item;return[e("v-chip",{staticStyle:{margin:"7px"},attrs:{color:t.getColor(i.calories),dark:""}},[t._v(t._s(i.calories))])]}}])})],1)},Jt=[],qt={data:function(){return{headers:[{text:"Coustomer",align:"left",sortable:!1,value:"name"},{text:"Order ID",value:"fat"},{text:"Products",value:"carbs"},{text:"Quantity",value:"protein"},{text:"Status",value:"calories"}],desserts:[{name:"Steve Jobs",calories:"Paid",fat:"#72683",carbs:"Pizza",protein:10,iron:"1%"},{name:"Elon Musk",calories:"Pending",fat:"#674764",carbs:"Burger",protein:12,iron:"1%"},{name:"Varun Dhavan",calories:"Pending",fat:"#312332",carbs:"Cold Drinks",protein:8,iron:"2%"},{name:"Leonardo De Caprio",calories:"Failed",fat:"#092301",carbs:"Pasta",protein:7,iron:"45%"}]}},methods:{getColor:function(t){return"Failed"==t?"red":"Pending"==t?"orange":"green"}}},Kt=qt,Xt=(e("f804"),e("cc20")),Yt=Object(n["a"])(Kt,Qt,Jt,!1,null,"3285bc77",null),Zt=Yt.exports;b()(Yt,{VBtn:st["a"],VChip:Xt["a"],VDataTable:$t["a"],VDialog:Wt["a"],VDivider:q["a"],VSpacer:ct["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var ta=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{staticStyle:{margin:"0px 10px"},attrs:{justify:"center"}},[e("v-date-picker",{model:{value:t.picker,callback:function(a){t.picker=a},expression:"picker"}})],1)],1)},aa=[],ea={data:function(){return{picker:(new Date).toISOString().substr(0,10),landscape:!0}}},ia=ea,sa=e("2e4b"),ra=Object(n["a"])(ia,ta,aa,!1,null,null,null),na=ra.exports;b()(ra,{VDatePicker:sa["a"],VRow:Vt["a"]});var oa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e("div",{staticStyle:{background:"#2867B2",padding:"10px"}},[e("v-list-item",{attrs:{"two-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline",staticStyle:{color:"white"}},[t._v("San Francisco")]),e("v-list-item-subtitle",{staticStyle:{color:"white"}},[t._v("Mon, 12:30 PM, Mostly sunny")])],1)],1),e("v-card-text",[e("v-row",{staticStyle:{height:"30px"},attrs:{align:"center"}},[e("v-col",{staticClass:"display-1",staticStyle:{color:"white"},attrs:{cols:"6"}},[t._v(" 23°C ")]),e("v-col",{attrs:{cols:"6"}},[e("v-icon",{staticStyle:{color:"white"},attrs:{large:""}},[t._v(" mdi-white-balance-sunny ")])],1)],1)],1)],1),e("v-slider",{staticClass:"mx-4",attrs:{max:6,"tick-labels":t.labels,ticks:""},model:{value:t.time,callback:function(a){t.time=a},expression:"time"}}),t._l(t.forecast,(function(a){return e("v-row",{key:a.day,attrs:{align:"center"}},[e("v-col",[t._v(" "+t._s(a.day))]),e("v-col",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-col",[e("v-list-item-subtitle",{staticClass:"text-right"},[t._v(" "+t._s(a.temp)+" ")])],1)],1)})),e("v-divider")],2)],1)},la=[],ca={data:function(){return{labels:["SU","MO","TU","WED","TH","FR","SA"],time:0,forecast:[{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24°/12°"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22°/14°"},{day:"Thursday",icon:"mdi-cloud",temp:"25°/15°"}]}}},da=ca,ua=(e("a88a"),e("ba0d")),va=Object(n["a"])(da,oa,la,!1,null,"f969ce7c",null),ma=va.exports;b()(va,{VCard:Q["a"],VCardText:J["b"],VCol:wt["a"],VDivider:q["a"],VIcon:C["a"],VListItem:ot["a"],VListItemContent:lt["a"],VListItemSubtitle:lt["b"],VListItemTitle:lt["c"],VRow:Vt["a"],VSlider:ua["a"]});var pa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"455"}},[e("v-toolbar",{staticStyle:{height:"60px"},attrs:{color:"white",dark:""}},[e("v-toolbar-title",{staticStyle:{color:"black"}},[t._v("Current Progress")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)],1),t._l(t.ex,(function(a){return e("div",{key:a.id,staticStyle:{margin:"10px"}},[e("v-slider",{attrs:{color:a.color,label:a.label},model:{value:a.val,callback:function(e){t.$set(a,"val",e)},expression:"ex.val"}})],1)}))],2)],1)},fa=[],ha={data:function(){return{ex:[{id:1,val:30,color:"orange darken-3",label:"Bootstrap"},{id:2,val:82,color:"green darken-3",label:"Vue"},{id:3,val:40,color:"black darken-3",label:"Unity"},{id:4,val:20,color:"blue darken-3",label:"Flutter"},{id:5,val:55,color:"red darken-3",label:"NMap"}]}}},ga=ha,ba=(e("d662"),Object(n["a"])(ga,pa,fa,!1,null,"4e0dcdc6",null)),ya=ba.exports;b()(ba,{VBtn:st["a"],VCard:Q["a"],VIcon:C["a"],VSlider:ua["a"],VSpacer:ct["a"],VToolbar:dt["a"],VToolbarTitle:ut["a"]});var xa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{height:"100",width:"2700px"}},[e("v-footer",{staticClass:"font-weight-medium",staticStyle:{background:"#e3e3e3"},attrs:{absolute:""}},[e("v-col",{staticClass:"text-center",staticStyle:{background:"#e3e3e3"},attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear()+"-"+(new Date).getMonth()+"-"+(new Date).getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds())+" @ "),e("strong",[t._v("Utkarsh Singh")])])],1)],1)},Ca=[],_a=e("553a"),ka={},Sa=Object(n["a"])(ka,xa,Ca,!1,null,null,null),wa=Sa.exports;b()(Sa,{VCard:Q["a"],VCol:wt["a"],VFooter:_a["a"]});var Va={name:"Home",components:{Header:S,Sidebar:O,Options:R,UserCounts:$,EarningGraph:Z,Foodmenu:mt,CoustomerFeed:xt,RecentActivities:Ot,SocialMedia:Rt,TodoList:Nt,RecievedOrder:Zt,Calender:na,Weather:ma,CurrentProgress:ya,Footer:wa},data:function(){return{options:[{id:1,name:"Dashboard",icon:"fa fa-adjust"},{id:2,name:"Products",icon:"fa fa-th"},{id:3,name:"Favourite",icon:"fa fa-star"},{id:4,name:"Order List",icon:"fa fa-list"},{id:5,name:"Booking System",icon:"fa fa-bookmark"},{id:6,name:"Upload Menu",icon:"fa fa-upload"},{id:7,name:"Charts",icon:" fa fa-signal"},{id:8,name:"Calender",icon:"fa fa-table"},{id:9,name:"UI Elements",icon:"fa fa-desktop"},{id:10,name:"Forms",icon:"fa fa-align-justify"},{id:11,name:"Data",icon:"fa fa-database"},{id:12,name:"E-mail",icon:"fa fa-at"},{id:13,name:"Profile",icon:"fa fa-cogs"},{id:14,name:"Map",icon:"fa fa-map-marker"},{id:15,name:"Login",icon:"fa fa-lock"}],userCounts:[{id:1,name:"Weekly New Menu's",value:"1,100",icon:"fa fa-gear",color:"background:#656A85"},{id:2,name:"Last Week's Users",value:"2,900",icon:"fa fa-user",color:"background:#8E24AA"},{id:3,name:"Today's Total Earning",value:"1,999",icon:"fa fa-dollar",color:"background:#FDCD08"},{id:4,name:"Total Orders Recieved",value:"789",icon:"fa fa-shopping-cart",color:"background:#EE0D0D"}],social:[{id:1,name:"Like us",site:"on Facebook",value:"30,000",icon:"fa fa-facebook",color:"background:#4267B2"},{id:2,name:"Follow us",site:"on Twitter",value:"15,000",icon:"fa fa-twitter",color:"background:#1DA1F2"},{id:3,name:"Follow us",site:"on Google Plus",value:"8,000",icon:"fa fa-google-plus",color:"background:#d34836"},{id:4,name:"Follow us",site:"on Linkedin",value:"3,500",icon:"fa fa-linkedin",color:"background:#2867B2"}]}}},Ta=Va,Ia=(e("ab70"),e("7496")),ja=Object(n["a"])(Ta,u,v,!1,null,"5f50380e",null),Oa=ja.exports;b()(ja,{VApp:Ia["a"]}),i["a"].use(d["a"]);var Da=[{path:"/",name:"Home",component:Oa},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],Ea=new d["a"]({mode:"history",base:"/",routes:Da}),La=Ea,Pa=e("f309");i["a"].use(Pa["a"]);var za=new Pa["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:La,vuetify:za,render:function(t){return t(c)}}).$mount("#app")},"59bf":function(t,a,e){},"676b":function(t,a,e){},"68f8":function(t,a,e){},7414:function(t,a,e){},"7b8f":function(t,a,e){},"7fc3":function(t,a,e){"use strict";var i=e("59bf"),s=e.n(i);s.a},"8a23":function(t,a,e){},"8c6f":function(t,a,e){},"97ac":function(t,a,e){"use strict";var i=e("d512"),s=e.n(i);s.a},a0e1:function(t,a,e){"use strict";var i=e("4d28"),s=e.n(i);s.a},a311:function(t,a,e){},a4e2:function(t,a,e){"use strict";var i=e("676b"),s=e.n(i);s.a},a4f5:function(t,a,e){},a88a:function(t,a,e){"use strict";var i=e("0a38"),s=e.n(i);s.a},ab70:function(t,a,e){"use strict";var i=e("cf4e"),s=e.n(i);s.a},bb24:function(t,a,e){"use strict";var i=e("7414"),s=e.n(i);s.a},bb2fc:function(t,a,e){"use strict";var i=e("131e"),s=e.n(i);s.a},c62a:function(t,a,e){"use strict";var i=e("7b8f"),s=e.n(i);s.a},cf4e:function(t,a,e){},d483:function(t,a,e){},d512:function(t,a,e){},d662:function(t,a,e){"use strict";var i=e("a4f5"),s=e.n(i);s.a},d822:function(t,a,e){"use strict";var i=e("8c6f"),s=e.n(i);s.a},e34e:function(t,a,e){"use strict";var i=e("a311"),s=e.n(i);s.a},f804:function(t,a,e){"use strict";var i=e("68f8"),s=e.n(i);s.a}});
//# sourceMappingURL=app.fadcc7bd.js.map