parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eHX7":[function(require,module,exports) {
var e,n,t,r,a=new Date("2023-01-15T00:00:00.000").getTime();setInterval(function(){var m=(new Date).getTime(),d=(a-m)/1e3;e=parseInt(d/86400),d%=86400,n=parseInt(d/3600),d%=3600,t=parseInt(d/60),r=parseInt(d%60),document.getElementById("dias").innerHTML=e,document.getElementById("horas").innerHTML=n,document.getElementById("minutos").innerHTML=t,document.getElementById("segundos").innerHTML=r},1e3);
},{}]},{},["eHX7"], null)
//# sourceMappingURL=/contagem.3e340928.js.map