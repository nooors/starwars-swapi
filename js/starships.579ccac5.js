(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["starships"],{"107c":function(t,e,i){var s=i("d039"),n=i("da84"),a=n.RegExp;t.exports=s((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,i){"use strict";var s=i("2ba4"),n=i("c65b"),a=i("e330"),r=i("d784"),o=i("44e7"),l=i("825a"),c=i("1d80"),u=i("4840"),f=i("8aa5"),d=i("50c4"),p=i("577e"),m=i("dc4a"),v=i("f36a"),h=i("14c3"),g=i("9263"),_=i("9f7f"),x=i("d039"),b=_.UNSUPPORTED_Y,C=4294967295,I=Math.min,y=[].push,P=a(/./.exec),E=a(y),w=a("".slice),S=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));r("split",(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=p(c(this)),r=void 0===i?C:i>>>0;if(0===r)return[];if(void 0===t)return[a];if(!o(t))return n(e,a,t,r);var l,u,f,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,_=new RegExp(t.source,m+"g");while(l=n(g,_,a)){if(u=_.lastIndex,u>h&&(E(d,w(a,h,l.index)),l.length>1&&l.index<a.length&&s(y,d,v(l,1)),f=l[0].length,h=u,d.length>=r))break;_.lastIndex===l.index&&_.lastIndex++}return h===a.length?!f&&P(_,"")||E(d,""):E(d,w(a,h)),d.length>r?v(d,0,r):d}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:n(e,this,t,i)}:e,[function(e,i){var s=c(this),r=void 0==e?void 0:m(e,t);return r?n(r,e,s,i):n(a,p(s),e,i)},function(t,s){var n=l(this),r=p(t),o=i(a,n,r,s,a!==e);if(o.done)return o.value;var c=u(n,RegExp),m=n.unicode,v=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(b?"g":"y"),g=new c(b?"^(?:"+n.source+")":n,v),_=void 0===s?C:s>>>0;if(0===_)return[];if(0===r.length)return null===h(g,r)?[r]:[];var x=0,y=0,P=[];while(y<r.length){g.lastIndex=b?0:y;var S,R=h(g,b?w(r,y):r);if(null===R||(S=I(d(g.lastIndex+(b?y:0)),r.length))===x)y=f(r,y,m);else{if(E(P,w(r,x,y)),P.length===_)return P;for(var k=1;k<=R.length-1;k++)if(E(P,R[k]),P.length===_)return P;y=x=S}}return E(P,w(r,x)),P}]}),!S,b)},"14c3":function(t,e,i){var s=i("da84"),n=i("c65b"),a=i("825a"),r=i("1626"),o=i("c6b6"),l=i("9263"),c=s.TypeError;t.exports=function(t,e){var i=t.exec;if(r(i)){var s=n(i,t,e);return null!==s&&a(s),s}if("RegExp"===o(t))return n(l,t,e);throw c("RegExp#exec called on incompatible receiver")}},4346:function(t,e,i){"use strict";i("6d80")},"44e7":function(t,e,i){var s=i("861d"),n=i("c6b6"),a=i("b622"),r=a("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},4723:function(t,e,i){"use strict";i("e978")},"4e18":function(t,e,i){"use strict";i("f8e7")},"6d80":function(t,e,i){},"7ddb":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img-ship-container"},[s("div",{staticClass:"img-ship-container__card"},[s("object",{attrs:{data:t.urlImage,type:"image/jpg",title:t.info[0].name}},[s("img",{attrs:{src:i("cbfb"),alt:t.info[0].name}})]),s("div",{staticClass:"ship-content"},[s("div",{staticClass:"ship-content__name"},[t._v(" "+t._s(t.info[0].name)+" ")]),s("div",{staticClass:"ship-content__description"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat exercitationem a possimus tempore, repudiandae accusantium numquam? Aut, sunt, sapiente, rem ipsum saepe nihil dicta dolore ab repellendus perferendis ratione doloremque! ")]),s("div",{staticClass:"ship-content__features"},[s("div",{staticClass:"ship-content__features__left"},[s("div",{staticClass:"feature"},[t._v("Model: "+t._s(t.info[0].model))]),s("div",{staticClass:"feature"},[t._v(" Cost in credits: "+t._s(t.info[0].cost_in_credits)+" ")]),s("div",{staticClass:"feature"},[t._v(" Atmospheric speed: "+t._s(t.info[0].max_atmosphering_speed)+" ")])]),s("div",{staticClass:"ship-content__features__right"},[s("div",{staticClass:"feature"},[t._v("Manufacturer: "+t._s(t.info[0].manufacturer))]),s("div",{staticClass:"feature"},[t._v("Length: "+t._s(t.info[0].length))]),s("div",{staticClass:"feature"},[t._v("Crew: "+t._s(t.info[0].crew))])])])])]),s("div",{staticClass:"related-content"},[s("the-pilots",{attrs:{pilotsProp:t.pilotsFather}}),s("the-films",{attrs:{filmsProp:t.filmsFather}})],1),s("the-button",{on:{buttonClick:t.goBack}},[t._v("Go Back")])],1)},n=[],a=(i("b0c0"),i("4de4"),i("d3b7"),i("ac1f"),i("1276"),i("4360")),r=i("8ccc"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pilots-container"},[i("div",{staticClass:"pilots"},[i("div",{staticClass:"title"},[t._v(" Related Pilots ")]),t.pilotsInfo.length>0?i("div",{staticClass:"pilots-list"},t._l(t.pilotsInfo,(function(e,s){return i("div",{key:e.name,staticClass:"pilots-list__item"},[i("div",{staticClass:"pilots__pilot__img"},[i("img",{attrs:{src:t.imgPilots[s],alt:""}})]),i("div",{staticClass:"pilots__pilot__name"},[t._v(t._s(e.name))])])})),0):i("div",{staticClass:"pilots__failed"},[t._v(" There are no related items for this category ")])])])},l=[],c=(i("d81d"),"https://starwars-visualguide.com/assets/img/characters/"),u={name:"ThePilots",props:["pilotsProp"],data:function(){return{pilotsInfo:[]}},created:function(){a["a"].dispatch("loadPilots",{pilots:this.pilotsProp})},computed:{pilotsStore:function(){return a["a"].state.pilots},imgPilots:function(){if(this.pilotsInfo){var t,e,i=this.pilotsInfo.map((function(i){return t=i.url.split("/"),e=t[t.length-2],c+e+".jpg"}));return i}}},watch:{pilotsStore:function(){this.pilotsInfo=a["a"].getters.getPilotsInfo}}},f=u,d=(i("acc0"),i("2877")),p=Object(d["a"])(f,o,l,!1,null,"9611e0dc",null),m=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"films-container"},[i("div",{staticClass:"films"},[i("div",{staticClass:"title"},[t._v(" Related films ")]),t.filmsInfo?i("div",{staticClass:"films-list"},t._l(t.filmsInfo,(function(e,s){return i("div",{key:e.name,staticClass:"films-list__item"},[i("div",{staticClass:"films__film__img"},[i("img",{attrs:{src:t.imgFilms[s],alt:""}})]),i("div",{staticClass:"films__film__name"},[t._v(t._s(e.title))])])})),0):i("div",{staticClass:"films__failed"},[t._v(" There are no related items for this category ")])])])},h=[],g="https://starwars-visualguide.com/assets/img/films/",_={name:"TheFilms",props:["filmsProp"],data:function(){return{filmsInfo:[]}},created:function(){a["a"].dispatch("loadFilms",{films:this.filmsProp})},computed:{filmsStore:function(){return a["a"].state.films},imgFilms:function(){if(this.filmsInfo){var t,e,i=this.filmsInfo.map((function(i){return t=i.url.split("/"),e=t[t.length-2],g+e+".jpg"}));return i}}},watch:{filmsStore:function(){console.log("watcher Store"),this.filmsInfo=a["a"].getters.getFilmsInfo}}},x=_,b=(i("9a74"),Object(d["a"])(x,v,h,!1,null,"54cd0766",null)),C=b.exports,I={components:{TheButton:r["a"],ThePilots:m,TheFilms:C},data:function(){return{baseUrl:"https://starwars-visualguide.com/assets/img/starships/",urlImage:null,alternateImage:"../assets/default_StarWars.jpg",info:null,pilotsFather:[],filmsFather:[]}},created:function(){var t=this;if(this.$route.query.name){var e=a["a"].getters.getShipsInfo.filter((function(e){return e.name==t.$route.query.name}));this.info=e,this.pilotsFather=this.info[0].pilots,this.filmsFather=this.info[0].films;var i=this.info[0].url.split("/"),s=i[i.length-2];this.urlImage="".concat(this.baseUrl+s,".jpg")}},methods:{imgError:function(){return this.urlImage="../assets/default_StarWars.jpg"},goBack:function(){this.$router.go(-1)}}},y=I,P=(i("4e18"),Object(d["a"])(y,s,n,!1,null,"917a5420",null));e["default"]=P.exports},"86ee":function(t,e,i){"use strict";i("d3f7")},"8aa5":function(t,e,i){"use strict";var s=i("6547").charAt;t.exports=function(t,e,i){return e+(i?s(t,e).length:1)}},"8ccc":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button",on:{click:t.sendInfo}},[i("button",[t._t("default")],2)])},n=[],a={name:"TheButton",methods:{sendInfo:function(){return this.$emit("buttonClick")}}},r=a,o=(i("4346"),i("2877")),l=Object(o["a"])(r,s,n,!1,null,"50ffe23f",null);e["a"]=l.exports},9263:function(t,e,i){"use strict";var s=i("c65b"),n=i("e330"),a=i("577e"),r=i("ad6d"),o=i("9f7f"),l=i("5692"),c=i("7c73"),u=i("69f3").get,f=i("fce3"),d=i("107c"),p=l("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,v=m,h=n("".charAt),g=n("".indexOf),_=n("".replace),x=n("".slice),b=function(){var t=/a/,e=/b*/g;return s(m,t,"a"),s(m,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),C=o.UNSUPPORTED_Y||o.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],y=b||I||C||f||d;y&&(v=function(t){var e,i,n,o,l,f,d,y=this,P=u(y),E=a(t),w=P.raw;if(w)return w.lastIndex=y.lastIndex,e=s(v,w,E),y.lastIndex=w.lastIndex,e;var S=P.groups,R=C&&y.sticky,k=s(r,y),T=y.source,$=0,j=E;if(R&&(k=_(k,"y",""),-1===g(k,"g")&&(k+="g"),j=x(E,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==h(E,y.lastIndex-1))&&(T="(?: "+T+")",j=" "+j,$++),i=new RegExp("^(?:"+T+")",k)),I&&(i=new RegExp("^"+T+"$(?!\\s)",k)),b&&(n=y.lastIndex),o=s(m,R?i:y,j),R?o?(o.input=x(o.input,$),o[0]=x(o[0],$),o.index=y.lastIndex,y.lastIndex+=o[0].length):y.lastIndex=0:b&&o&&(y.lastIndex=y.global?o.index+o[0].length:n),I&&o&&o.length>1&&s(p,o[0],i,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&S)for(o.groups=f=c(null),l=0;l<S.length;l++)d=S[l],f[d[0]]=o[d[1]];return o}),t.exports=v},"9a62":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.listInfo?i("div",{staticClass:"list"},[i("div",{staticClass:"overflow"}),t._l(t.listInfo,(function(t){return i("div",{key:t.name,staticClass:"list__items"},[i("router-link",{staticClass:"ship",attrs:{to:{name:"Starship",query:{name:t.name},params:{name:t.name}}}},[i("the-summary-card",{attrs:{name:t.name,model:t.model}})],1)],1)})),i("div",{staticClass:"pagination-buttons"},[t.$store.state.allPageInfo.previous?i("div",{staticClass:"previous-if"},[i("the-button",{staticClass:"previous-view",on:{buttonClick:t.previousPage}},[t._v("Previous")])],1):t._e(),i("the-button",{staticClass:"toHome",on:{buttonClick:t.toHome}},[t._v("Home")]),t.$store.state.allPageInfo.next?i("div",{staticClass:"next-if"},[i("the-button",{staticClass:"next-view",on:{buttonClick:t.nextPage}},[t._v("View more")])],1):t._e()],1)],2):t._e()},n=[],a=i("4360"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"summary-card"},[i("div",{staticClass:"list__items__name"},[t._v(" "+t._s(t.name)+" ")]),i("div",{staticClass:"list__items__model"},[t._v(" "+t._s(t.model)+" ")])])},o=[],l={name:"TheSummaryCard",props:["name","model"]},c=l,u=(i("86ee"),i("2877")),f=Object(u["a"])(c,r,o,!1,null,"67fc4716",null),d=f.exports,p=i("8ccc"),m={components:{TheSummaryCard:d,TheButton:p["a"]},created:function(){this.listInfo||a["a"].dispatch("getShips")},computed:{listInfo:function(){return a["a"].getters.getShipsInfo}},methods:{nextPage:function(){a["a"].state.allPageInfo.next&&a["a"].dispatch("loadNextShips")},previousPage:function(){a["a"].state.allPageInfo.previous&&a["a"].dispatch("loadPreviousShips")},toHome:function(){return this.$router.push({name:"Home"})}}},v=m,h=(i("4723"),Object(u["a"])(v,s,n,!1,null,"cc615130",null));e["default"]=h.exports},"9a74":function(t,e,i){"use strict";i("d042")},"9f7f":function(t,e,i){var s=i("d039"),n=i("da84"),a=n.RegExp;e.UNSUPPORTED_Y=s((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,i){"use strict";var s=i("23e7"),n=i("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},acc0:function(t,e,i){"use strict";i("c015")},ad6d:function(t,e,i){"use strict";var s=i("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,i){var s=i("83ab"),n=i("5e77").EXISTS,a=i("e330"),r=i("9bf2").f,o=Function.prototype,l=a(o.toString),c=/^\s*function ([^ (]*)/,u=a(c.exec),f="name";s&&!n&&r(o,f,{configurable:!0,get:function(){try{return u(c,l(this))[1]}catch(t){return""}}})},c015:function(t,e,i){},cbfb:function(t,e,i){t.exports=i.p+"img/default_StarWars.a1c4f771.jpg"},d042:function(t,e,i){},d3f7:function(t,e,i){},d784:function(t,e,i){"use strict";i("ac1f");var s=i("e330"),n=i("6eeb"),a=i("9263"),r=i("d039"),o=i("b622"),l=i("9112"),c=o("species"),u=RegExp.prototype;t.exports=function(t,e,i,f){var d=o(t),p=!r((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),m=p&&!r((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[c]=function(){return i},i.flags="",i[d]=/./[d]),i.exec=function(){return e=!0,null},i[d](""),!e}));if(!p||!m||i){var v=s(/./[d]),h=e(d,""[t],(function(t,e,i,n,r){var o=s(t),l=e.exec;return l===a||l===u.exec?p&&!r?{done:!0,value:v(e,i,n)}:{done:!0,value:o(i,e,n)}:{done:!1}}));n(String.prototype,t,h[0]),n(u,d,h[1])}f&&l(u[d],"sham",!0)}},d81d:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").map,a=i("1dde"),r=a("map");s({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e978:function(t,e,i){},f8e7:function(t,e,i){},fce3:function(t,e,i){var s=i("d039"),n=i("da84"),a=n.RegExp;t.exports=s((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=starships.579ccac5.js.map