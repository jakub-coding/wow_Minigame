(function(e){function t(t){for(var a,s,o=t[0],i=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},c=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"66cc2584","chunk-2d0c155d":"18e8f303"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,r[1](l)}n[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"082c":function(e,t,r){"use strict";r("9e81")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={class:"body-wrapper w-full min-h-screen bg-gray-900"},c={class:"container mx-auto min-h-screen"};function s(e,t,r,s,o,i){var l=Object(a["s"])("router-view"),u=Object(a["s"])("main-footer");return Object(a["n"])(),Object(a["d"])("div",n,[Object(a["e"])("div",c,[Object(a["e"])(l)]),Object(a["e"])(u)])}var o={class:"container mx-auto"},i=Object(a["e"])("div",{class:"prefooter"},[Object(a["e"])("h1",null,"this is prefooter")],-1),l=Object(a["e"])("div",{class:"footer"},[Object(a["e"])("h1",null,"this is footer")],-1);function u(e,t,r,n,c,s){return Object(a["n"])(),Object(a["d"])("div",o,[i,l])}var d={name:"mainFooter"};d.render=u;var m=d,p={components:{MainFooter:m}};r("082c");p.render=s;var f=p,h=(r("d3b7"),r("6c02")),b={class:"game-wrapper"};function g(e,t,r,n,c,s){var o=Object(a["s"])("game-header"),i=Object(a["s"])("game-table"),l=Object(a["s"])("game-highscore");return Object(a["n"])(),Object(a["d"])("div",b,[Object(a["e"])(o),Object(a["e"])(i),Object(a["e"])(l)])}var v={class:"header-wrapper grid grid-cols-2 font-title text-gray-200 text-2xl p-16"},j={class:"player-info text-left"},O={class:"mb-2"},y={class:"text-red-500"},w=Object(a["e"])("span",{class:"text-gray-200 mr-4"},"Lives:",-1),x=Object(a["e"])("path",{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"},null,-1),z={class:"player-score text-right"};function C(e,t,r,n,c,s){return Object(a["n"])(),Object(a["d"])("div",v,[Object(a["e"])("div",j,[Object(a["e"])("h1",O,"Player: "+Object(a["u"])(this.$store.state.player.playerName),1),Object(a["e"])("h1",y,[w,(Object(a["n"])(!0),Object(a["d"])(a["a"],null,Object(a["r"])(this.$store.state.player.playerLives,(function(e){return Object(a["n"])(),Object(a["d"])("svg",{key:e.index,class:"w-6 h-6 text-red-500 inline-block mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[x])})),128))])]),Object(a["e"])("div",z,[Object(a["e"])("h1",null,"Score: "+Object(a["u"])(this.$store.state.player.playerScore),1)])])}var k={name:"gameHeader",mounted:function(){}};k.render=C;var F=k,M={class:"game-table-wrapper px-16"},S=Object(a["e"])("h1",{class:"font-title text-gray-200 text-center py-8 text-4xl"}," WoW: Mists of Tirna Scithe puzzle ",-1),P={class:"game-board grid grid-cols-4 gap-4"},L={class:"button text-center"};function G(e,t,r,n,c,s){var o=Object(a["s"])("game-card");return Object(a["n"])(),Object(a["d"])("div",M,[S,Object(a["e"])("div",P,[(Object(a["n"])(!0),Object(a["d"])(a["a"],null,Object(a["r"])(this.finalCards,(function(e){return Object(a["n"])(),Object(a["d"])(o,{key:e.id,cardImage:e.img},null,8,["cardImage"])})),128))]),Object(a["e"])("div",L,[Object(a["e"])("a",{onClick:t[1]||(t[1]=function(){return s.resetGame&&s.resetGame.apply(s,arguments)}),class:"px-8 py-4 bg-green-main font-title text-xl text-gray-200 inline-block rounded shadow-md mt-16 cursor-pointer"},"Reset")])])}r("4160"),r("a434"),r("b0c0"),r("159b");var E={class:"transition-all duration-200 ease-in-out card-wrapper rounded-xl p-8 h-96 shadow-md flex justify-center items-center border-2 border-green-main hover:bg-gray-800 cursor-pointer"};function A(e,t,r,n,c,s){return Object(a["n"])(),Object(a["d"])("div",E,[Object(a["e"])("img",{class:"w-4/6",src:r.cardImage,alt:"card-image"},null,8,["src"])])}var T={name:"gameCard",props:{cardImage:{type:String}},methods:{},mounted:function(){}};T.render=A;var H=T,I={name:"gameTable",components:{GameCard:H},data:function(){return{cardsData:[],masterCard:{},finalCards:[],workArray:[],puzzleFactors:{key:String,value:Boolean}}},methods:{randomNumberBetween:function(e,t){var r=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-r+1))+r},getMasterCard:function(){var e=this.randomNumberBetween(0,this.cardsData.length-1),t=this.cardsData[e];t.master=!0,this.masterCard=t,this.workArray.push(t),this.chosePuzzleFactor()},chosePuzzleFactor:function(){var e=this.randomNumberBetween(1,3);1===e&&(this.puzzleFactors.key="circled",this.puzzleFactors.value=this.masterCard.circled),2===e&&(this.puzzleFactors.key="fulled",this.puzzleFactors.value=this.masterCard.fulled),3===e&&(this.puzzleFactors.key="name",this.puzzleFactors.value=this.masterCard.name),this.getSlavesCards()},getSlavesCards:function(){var e=this,t=[];this.cardsData.forEach((function(r){r[e.puzzleFactors.key]!==e.puzzleFactors.value&&t.push(r)})),t.splice(1,3).forEach((function(t){e.workArray.push(t)})),this.gCoreShuffle(this.workArray)},gCoreShuffle:function(e){var t=e.length;while(0!==t){var r=Math.floor(Math.random()*t);t-=1;var a=e[t];e[t]=e[r],e[r]=a}this.finalCards=e},resetGame:function(){this.workArray=[],this.getMasterCard()}},mounted:function(){this.cardsData=this.$store.state.cards.cardItems,this.getMasterCard()}};I.render=G;var _=I;function B(e,t,r,n,c,s){return Object(a["n"])(),Object(a["d"])("h1",null,"Game Highscore")}var D={name:"gameHighscore"};D.render=B;var N=D,$={name:"Home",components:{GameHighscore:N,GameTable:_,GameHeader:F}};$.render=g;var J=$,W=[{path:"/",name:"Game",component:J},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/guide",name:"Guide",component:function(){return r.e("chunk-2d0c155d").then(r.bind(null,"4638"))}}],q=Object(h["a"])({history:Object(h["b"])("/"),routes:W}),R=q,K=r("5502"),Q={state:{playerScore:0,playerName:"kalimpivko",playerLives:3}},U={state:{cardItems:[{id:1,img:"../assets/images/LeafEmpty.png",name:"leaf",master:!1,fulled:!1,circled:!1},{id:2,img:"../assets/images/LeafFull.png",name:"leaf",master:!1,fulled:!0,circled:!1},{id:3,img:"../assets/images/CircledLeafFull.png",name:"leaf",master:!1,fulled:!0,circled:!0},{id:4,img:"../assets/images/CircledLeafEmpty.png",name:"leaf",master:!1,fulled:!1,circled:!0},{id:5,img:"../assets/images/FlowerEmpty.png",name:"flower",master:!1,fulled:!1,circled:!1},{id:6,img:"../assets/images/CircledFlowerEmpty.png",name:"flower",master:!1,fulled:!1,circled:!0},{id:7,img:"../assets/images/FlowerFull.png",name:"flower",master:!1,fulled:!0,circled:!1},{id:8,img:"../assets/images/CircledFlowerFull.png",name:"flower",master:!1,fulled:!0,circled:!0}]}},V=Object(K["a"])({modules:{player:Q,cards:U}});Object(a["c"])(f).use(V).use(R).mount("#app")},"9e81":function(e,t,r){}});
//# sourceMappingURL=app.3fd199a5.js.map