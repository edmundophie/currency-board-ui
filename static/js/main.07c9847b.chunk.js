(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=(n(24),n(25),n(12)),u=n(13),c=n(16),s=n(14),m=n(17),d=(n(26),n(15)),h=n.n(d);var p={getRate:function(){return h.a.get("https://ss6cx1v57i.execute-api.ap-southeast-1.amazonaws.com/release/rate").then(function(e){return e.data})}},f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={rateAmount:null,lastUpdateDateTime:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getRate().then(function(t){e.setState({rateAmount:t.rate,lastUpdateDateTime:t.lastUpdatedDate})})}},{key:"getFormattedDateTime",value:function(){if(null==this.state.lastUpdateDateTime)return"unknown";var e=new Date(1e3*this.state.lastUpdateDateTime),t=e.getDate(),n=e.getMonth(),a=e.getFullYear(),r=e.getHours(),o=e.getMinutes();return t+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]+" "+a+" "+r+":"+o+" "+function(){function e(e){return(e<10?"0":"")+e}var t=(new Date).getTimezoneOffset();return"GMT"+(t<0?"+":"-")+e((t=Math.abs(t))/60|0)+e(t%60)}()}},{key:"render",value:function(){return r.a.createElement("div",{id:"board"},r.a.createElement("div",{id:"inner"},r.a.createElement("h3",null,"Currency Rate"),r.a.createElement("div",{id:"rateBox"},"USD 1 = ",r.a.createElement("strong",{id:"rateAmount"},"IDR ",this.state.rateAmount)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"Last updated on ",this.getFormattedDateTime())))),r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("em",null,"Maintained by ",r.a.createElement("a",{href:"http://ophie.io"},"ophie.io")))))}}]),t}(r.a.Component),v=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.07c9847b.chunk.js.map