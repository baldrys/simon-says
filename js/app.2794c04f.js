(function(e){function i(i){for(var n,r,a=i[0],c=i[1],u=i[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(i);while(p.length)p.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,i=0;i<s.length;i++){for(var t=s[i],n=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(n=!1)}n&&(s.splice(i--,1),e=r(r.s=t[0]))}return e}var n={},o={app:0},s=[];function r(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)r.d(t,n,function(i){return e[i]}.bind(null,n));return t},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/simon-says/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var l=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"034f":function(e,i,t){"use strict";var n=t("85ec"),o=t.n(n);o.a},"20af":function(e,i,t){e.exports=t.p+"media/1.99e50f7d.mp3"},3651:function(e,i,t){e.exports=t.p+"media/2.d2c4a2c4.mp3"},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("SimonGame")],1)},s=[],r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"wrapper"},[t("h1",[e._v("Семён говорит")]),t("div",{staticClass:"game-board"},[t("div",{staticClass:"simon"},[t("ul",e._l(e.simonTiles,(function(i){return t("SimonTile",{key:i.id,class:{active:i.active},attrs:{id:i.id,color:i.color,audio:i.audio,isFieldDisabled:e.isFieldDisabled},on:{tileClicked:e.tileClick}})})),1)])]),t("div",{staticClass:"game-info"},[t("h2",[e._v(" Раунд: "),t("span",[e._v(e._s(this.round))])]),t("button",{on:{click:e.startGame}},[e._v("Старт")]),e.isEnd?t("p",[e._v(" Вы проиграли после "),t("span",[e._v(e._s(this.round))]),e._v(" раундов! ")]):e._e()]),t("div",{staticClass:"game-options"},[t("h2",[e._v("Выберите уровень:")]),e._l(e.modes,(function(i,n){return t("div",{key:n},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentMode,expression:"currentMode"}],attrs:{type:"radio"},domProps:{value:i,checked:e._q(e.currentMode,i)},on:{change:function(t){e.currentMode=i}}}),e._v(" "+e._s(i.name)+" ")])})),t("br")],2)])},a=[],c=(t("7db0"),t("4160"),t("fb6a"),t("159b"),function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("li",{class:["tile",e.color,{active:e.isActive},{disable:!0}],on:{click:e.click,mousedown:e.clickDown,mouseup:e.clickUp}})}),u=[],l=(t("a9e3"),{name:"SimonTile",data:function(){return{isActive:!1}},props:{id:Number,color:String,audio:HTMLAudioElement,isFieldDisabled:Boolean},methods:{clickDown:function(){this.isFieldDisabled||(this.isActive=!0,this.audio.pause(),this.audio.currentTime=0,this.audio.play())},clickUp:function(){this.isFieldDisabled||(this.isActive=!1)},click:function(){this.isFieldDisabled||this.$emit("tileClicked",this.id)}}}),d=l,p=t("2877"),f=Object(p["a"])(d,c,u,!1,null,null,null),h=f.exports,m={name:"SimonGame",components:{SimonTile:h},data:function(){return{sequence:[],copy:[],round:0,active:!0,isFieldDisabled:!0,isEnd:!1,simonTiles:[{id:1,color:"red",active:!1,audioFile:t("20af")},{id:2,color:"blue",active:!1,audioFile:t("3651")},{id:3,color:"yellow",active:!1,audioFile:t("d88f")},{id:4,color:"green",active:!1,audioFile:t("ea84")}],modes:{easy:{name:"Легкий",speed:1500},medium:{name:"Средний",speed:1e3},hard:{name:"Сложный",speed:400}},currentMode:null}},created:function(){this.currentMode=this.modes.easy,this.simonTiles.forEach((function(e){e.audio=new Audio(e.audioFile)}))},methods:{startGame:function(){this.isEnd=!1,this.sequence=[],this.copy=[],this.round=0,this.active=!0,this.newRound()},newRound:function(){this.round++,this.sequence.push(this.randomNumber()),this.copy=this.sequence.slice(0),this.animateSeq()},tileClick:function(e){var i=this.copy.shift();this.active=i===e,this.checkLose()},checkLose:function(){0===this.copy.length&&this.active?this.newRound():this.active||this.endGame()},endGame:function(){this.isEnd=!0,this.isFieldDisabled=!0},playSound:function(e){var i=this.simonTiles.find((function(i){return i.id===e}));i.audio.pause(),i.audio.currentTime=0,i.audio.play()},lightUp:function(e){var i=this.simonTiles.find((function(i){return i.id===e}));i.active=!0,window.setTimeout((function(){i.active=!1}),this.currentMode.speed/2)},animateSeq:function(){var e=this,i=0;this.isFieldDisabled=!0;var t=setInterval((function(){e.playSound(e.sequence[i]),e.lightUp(e.sequence[i]),i++,i>=e.sequence.length&&(clearInterval(t),e.isFieldDisabled=!1)}),this.currentMode.speed)},randomNumber:function(){return Math.floor(4*Math.random()+1)}}},v=m,b=Object(p["a"])(v,r,a,!1,null,null,null),y=b.exports,_={name:"App",components:{SimonGame:y}},w=_,g=(t("034f"),Object(p["a"])(w,o,s,!1,null,null,null)),k=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,i,t){},d88f:function(e,i,t){e.exports=t.p+"media/3.c1c96b44.mp3"},ea84:function(e,i,t){e.exports=t.p+"media/4.36d5a722.mp3"}});
//# sourceMappingURL=app.2794c04f.js.map