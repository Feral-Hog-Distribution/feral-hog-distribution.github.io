(window["webpackJsonpferal-hog-distribution"]=window["webpackJsonpferal-hog-distribution"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/logo.654d467c.svg"},25:function(e,t,a){e.exports=a(52)},30:function(e,t,a){},39:function(e,t){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(30),a(1)),u=a(2),s=a(3),i=a(5),m=a(4),d=a(6),h=a(22),p=(a(51),"booster"),E="navigator",g="wrangler",b="lifeSupport",f=null,v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).boopIt=function(){a.props.onBoop(1);var e=document.getElementById("chonk");e&&(e.classList.add("booped"),clearTimeout(f),f=setTimeout(a.chonkSad,700))},a.chonkSad=function(){var e=document.getElementById("chonk");e&&e.classList.remove("booped")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"module_boop",className:"module",action:"#booped"},r.a.createElement("button",{onClick:function(){return e.boopIt()},type:"button",className:"text",name:"input"},"Snoot"),r.a.createElement("div",{id:"chonk"},"Chonk")),r.a.createElement("h3",{style:{textAlign:"center",marginTop:"16em"}},"Boop that snoot!!"))}}]),t}(r.a.Component);r.a.Component;function y(e){var t=e.roleId,a=e.children;return r.a.createElement("main",{id:"role_allocation"},function(){switch(t){case p:return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You are the ",r.a.createElement("strong",null,"Booster")));case g:return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You are the ",r.a.createElement("strong",null,"Wrangler")));case E:return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You are the ",r.a.createElement("strong",null,"Navigator")));case b:return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You are the ",r.a.createElement("strong",null,"Habitator")));default:return null}}(),a)}var S=a(24);function w(e){var t=e.currentStage;return r.a.createElement("svg",{"data-current-stage":t,viewBox:"-20 -20 807 300",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5,224.5 L122,78 L301.5,127 L262.5,203.5 L449.5,127 L301.5,47.5 L347,4 L427,78 L529.5,16.5 L598,179 L783,152",stroke:"#24B3E6",strokeWidth:"2",strokeDasharray:"8",fill:"none"}),r.a.createElement("circle",{"data-stage":"0",cx:"4",cy:"225",r:"4"}),r.a.createElement("circle",{"data-stage":"1",cx:"122",cy:"78",r:"4"}),r.a.createElement("circle",{"data-stage":"2",cx:"300",cy:"127",r:"4"}),r.a.createElement("circle",{"data-stage":"3",cx:"262",cy:"206",r:"4"}),r.a.createElement("circle",{"data-stage":"4",cx:"451",cy:"127",r:"4"}),r.a.createElement("circle",{"data-stage":"5",cx:"300",cy:"47",r:"4"}),r.a.createElement("circle",{"data-stage":"6",cx:"347",cy:"4",r:"4"}),r.a.createElement("circle",{"data-stage":"7",cx:"427",cy:"78",r:"4"}),r.a.createElement("circle",{"data-stage":"8",cx:"530",cy:"16",r:"4"}),r.a.createElement("circle",{"data-stage":"9",cx:"598",cy:"179",r:"4"}),r.a.createElement("circle",{"data-stage":"10",cx:"783",cy:"151",r:"4"}))}function x(e){var t=e.currentStage,a=e.children;return r.a.createElement("main",{id:"screen_progress"},r.a.createElement(w,{styles:{marginBottom:"1em"},currentStage:t}),a)}function R(e){var t=e.boosterScore,a=e.habitatorScore,o=e.navigatorScore,l=e.wranglerScore,c=e.secondsForRound,u=e.onNextRoundClick,s=e.currentStage,i=e.totalCash,m=e.cashFromRound,d=e.ready,h=Object(n.useState)(!1),p=Object(S.a)(h,2),E=p[0],g=p[1],b=(c/60).toFixed(0),f=(c%60).toFixed(0);return 1===f.length&&(f="0"+f),E?r.a.createElement(x,{currentStage:s},r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return g(!1)},type:"button",className:"text",name:"input"},"Show Scores"))):r.a.createElement("main",{id:"screen_score"},r.a.createElement("dl",{className:"list_score"},r.a.createElement("dt",null,"Time"),r.a.createElement("dd",null,b,":",f)),r.a.createElement("dl",{className:"list_score"},r.a.createElement("dt",null,"Navigator"),r.a.createElement("dd",{className:"percent"},o),r.a.createElement("dt",null,"Wrangler"),r.a.createElement("dd",{className:"percent"},l),r.a.createElement("dt",null,"Booster"),r.a.createElement("dd",{className:"percent"},t),r.a.createElement("dt",null,"Habitator"),r.a.createElement("dd",{className:"percent"},a)),r.a.createElement("dl",{className:"list_score"},r.a.createElement("dt",null,"Cash Earned"),r.a.createElement("dd",null,"+$",m),r.a.createElement("dt",null,"Total Cash"),r.a.createElement("dd",null,"$",i)),r.a.createElement("p",null,d&&r.a.createElement("button",{onClick:function(){},type:"button",className:"text",name:"input"},"Waiting on other players"),!d&&r.a.createElement("button",{onClick:u,type:"button",className:"text",name:"input"},"Next round")))}var k=a(23),j=a.n(k);function O(){return r.a.createElement("header",null,r.a.createElement("img",{src:j.a,alt:"Game logo"}))}var B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).defaultRoleShape=function(){return{id:null,name:null,boops:0,readyForNextRound:!1}},a.defaultState=function(){var e;return e={room:null},Object(c.a)(e,p,a.defaultRoleShape()),Object(c.a)(e,E,a.defaultRoleShape()),Object(c.a)(e,g,a.defaultRoleShape()),Object(c.a)(e,b,a.defaultRoleShape()),Object(c.a)(e,"stage",null),Object(c.a)(e,"roleId",null),Object(c.a)(e,"roleName",null),Object(c.a)(e,"betweenRounds",null),Object(c.a)(e,"totalBoopsRequired",null),Object(c.a)(e,"secondsForLastRound",null),Object(c.a)(e,"multiplier",100),Object(c.a)(e,"cashFromRound",0),Object(c.a)(e,"totalCash",0),Object(c.a)(e,"viewer",!0),Object(c.a)(e,"currentBoopsThisRound",0),e},a.state=a.defaultState(),a.resetGame=function(){a.state.room.send({command:"resetGame"})},a.nextRound=function(){a.state.room.send({command:"nextRound"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateBoops",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.state.room.send({command:this.state.roleId,value:e})}},{key:"componentDidMount",value:function(){var e=this,t=function(){return e.setState.apply(e,arguments)},a=new URL(document.location).searchParams.has("viewer");this.setState({viewer:a}),new h.Client("wss://feral-hog-distribution.herokuapp.com").joinOrCreate("feral-hog-distribution",{joinAsViewer:a}).then(function(e){t({room:e}),e.state.zones.onChange=function(e,a){e.clientId===a&&t({roleId:e.id,roleName:e.name})},e.state.onChange=function(e){var a={};e.forEach(function(e){a[e.field]=e.value}),t(a)}})}},{key:"yourRole",value:function(){return this.state[this.state.roleId]}},{key:"yourBoops",value:function(){var e=this.state[this.state.roleId];return e?e.boops:null}},{key:"totalBoops",value:function(){var e=this.state,t=e.booster,a=e.navigator,n=e.wrangler,r=e.lifeSupport;return t.boops+a.boops+n.boops+r.boops}},{key:"getRole",value:function(e){return this.state[e]}},{key:"yourScore",value:function(e){return 0===this.totalBoops()?"0":(this.getRole(e).boops/this.totalBoops()*100).toFixed(0)}},{key:"renderScreen",value:function(){var e=this,t=this.state,a=t.roleId,n=t.stage,o=t.betweenRounds,l=t.totalBoopsRequired,c=t.secondsForLastRound,u=t.totalCash,s=t.cashFromRound,i=t.viewer,m=t.currentBoopsThisRound;return i?r.a.createElement(x,{currentStage:n-1},r.a.createElement("p",null,"As a team, boot that snoot ",l," times"),r.a.createElement("h2",null,l-m," to go!!")):o?r.a.createElement(R,{secondsForRound:c,habitatorScore:this.yourScore(b),boosterScore:this.yourScore(p),wranglerScore:this.yourScore(g),navigatorScore:this.yourScore(E),cashFromRound:s,totalCash:u,currentStage:n-1,onNextRoundClick:this.nextRound,ready:this.yourRole().readyForNextRound}):r.a.createElement(y,{roleId:a},r.a.createElement("p",null,"As a team, boot that snoot ",l," times"),r.a.createElement("h2",null,l-m," to go!!"),r.a.createElement(v,{onBoop:function(t){return e.updateBoops(t)}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),this.renderScreen())}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.1a18a860.chunk.js.map