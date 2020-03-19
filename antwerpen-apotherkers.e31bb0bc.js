// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/leaflet/dist/leaflet.js":[function(require,module,exports) {
var define;
/* @preserve
 * Leaflet 1.3.4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ei,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?ii(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ni,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-ri));return ri=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||ai!==m)return ai.call(window,e(t,i));t.call(i)}function g(t){t&&hi.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=oi(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:oi(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:oi(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function S(t,i,e,n){if(oi(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function Z(t,i,e,n){return new S(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Ji?"z":"x":""}return h||"M0 0"}function A(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function B(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function I(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(te,n,!1):"touchmove"===i?t.removeEventListener(ie,n,!1):"touchend"===i&&(t.removeEventListener(ee,n,!1),t.removeEventListener(ne,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(oe.indexOf(t.target.tagName)<0))return;Pt(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(te,o,!1),re||(document.documentElement.addEventListener(te,R,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,D,!0),document.documentElement.addEventListener(ne,D,!0),re=!0)}function R(t){se[t.pointerId]=t,ae++}function N(t){se[t.pointerId]&&(se[t.pointerId]=t)}function D(t){delete se[t.pointerId],ae--}function j(t,i){t.touches=[];for(var e in se)t.touches.push(se[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(ie,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ee,n,!1),t.addEventListener(ne,n,!1)}function F(t,i,e){function n(t){var i;if(Vi){if(!bi||"mouse"===t.pointerType)return;i=ae}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Vi){if(!bi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[le+he+e]=n,t[le+ue+e]=o,t[le+"dblclick"+e]=i,t.addEventListener(he,n,!1),t.addEventListener(ue,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[le+he+i],n=t[le+ue+i],o=t[le+"dblclick"+i];return t.removeEventListener(he,e,!1),t.removeEventListener(ue,n,!1),bi||t.removeEventListener("dblclick",o,!1),this}function V(t){return"string"==typeof t?document.getElementById(t):t}function q(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function G(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function K(t){var i=t.parentNode;i&&i.removeChild(t)}function Y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function X(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function J(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function $(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=et(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function Q(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!$(t,i)){var s=et(t);it(t,(s?s+" ":"")+i)}}function tt(t,i){void 0!==t.classList?t.classList.remove(i):it(t,h((" "+et(t)+" ").replace(" "+i+" "," ")))}function it(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function et(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function nt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&ot(t,i)}function ot(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function st(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function rt(t,i,e){var n=i||new x(0,0);t.style[ce]=(Ri?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function at(t,i){t._leaflet_pos=i,ji?rt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function ht(t){return t._leaflet_pos||new x(0,0)}function ut(){mt(window,"dragstart",Pt)}function lt(){ft(window,"dragstart",Pt)}function ct(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(_t(),me=t,fe=t.style.outline,t.style.outline="none",mt(window,"keydown",_t))}function _t(){me&&(me.style.outline=fe,me=void 0,fe=void 0,ft(window,"keydown",_t))}function dt(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function pt(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}function mt(t,i,e,n){if("object"==typeof i)for(var o in i)gt(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)gt(t,i[s],e,n);return this}function ft(t,i,e,n){if("object"==typeof i)for(var o in i)vt(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)vt(t,i[s],e,n);else{for(var a in t[ye])vt(t,a,t[ye][a]);delete t[ye]}return this}function gt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[ye]&&t[ye][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Vi&&0===i.indexOf("touch")?B(t,i,r,s):!qi||"dblclick"!==i||!F||Vi&&Ei?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,Ct(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&zi&&(r=function(t){St(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[ye]=t[ye]||{},t[ye][s]=r}function vt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[ye]&&t[ye][s];if(!r)return this;Vi&&0===i.indexOf("touch")?I(t,i,s):!qi||"dblclick"!==i||!U||Vi&&Ei?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[ye][s]=null}function yt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Mt(t),this}function xt(t){return gt(t,"mousewheel",yt),this}function wt(t){return mt(t,"mousedown touchstart dblclick",yt),gt(t,"click",zt),this}function Pt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Lt(t){return Pt(t),yt(t),this}function bt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=pt(i),n=e.boundingClientRect;return new x((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}function Tt(t){return bi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/xe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function zt(t){we[t.type]=!0}function Mt(t){var i=we[t.type];return we[t.type]=!1,i}function Ct(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function St(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=ge&&e-ge;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Lt(t):(ge=e,i(t))}function Zt(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=Bt(t,e),t=kt(t,e)}function Et(t,i,e){return Math.sqrt(Dt(t,i,e,!0))}function kt(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,At(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function At(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Dt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,At(t,i,e,n,s),At(t,i,e,s,o))}function Bt(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Nt(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?ke:Rt(t,e),u=Rt(i,e);for(ke=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Rt(r=Ot(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function Ot(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Rt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Nt(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Dt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function jt(t){return!oi(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Wt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),jt(t)}function Ht(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Rt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)):(h._code&l&&((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)),n.push(a));t=n}return t}function Ft(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ut;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new $e(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new $e(e));return new Ke(h);case"LineString":case"MultiLineString":return n=Vt(a,"LineString"===r.type?0:1,l),new nn(n,i);case"Polygon":case"MultiPolygon":return n=Vt(a,"Polygon"===r.type?1:2,l),new on(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Ft({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ut(t){return new M(t[1],t[0],t[2])}function Vt(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Vt(t[s],i-1,e):(e||Ut)(t[s]),o.push(n);return o}function qt(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Gt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Gt(t[s],i-1,e,n):qt(t[s],n));return!i&&e&&o.push(o[0]),o}function Kt(t,e){return t.feature?i({},t.feature,{geometry:e}):Yt(e)}function Yt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Xt(t,i){return new sn(t,i)}function Jt(t,i){return new mn(t,i)}function $t(t){return Xi?new vn(t):null}function Qt(t){return Ji||$i?new Pn(t):null}var ti=Object.freeze;Object.freeze=function(t){return t};var ii=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ei=0,ni=/\{ *([\w_-]+) *\}/g,oi=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},si="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",ri=0,ai=window.requestAnimationFrame||p("RequestAnimationFrame")||m,hi=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ui=(Object.freeze||Object)({freeze:ti,extend:i,create:ii,bind:e,lastId:ei,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:oi,indexOf:d,emptyImageUrl:si,requestFn:ai,cancelFn:hi,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=ii(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(ii(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var li={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};li.addEventListener=li.on,li.removeEventListener=li.clearAllEventListeners=li.off,li.addOneTimeEventListener=li.once,li.fireEvent=li.fire,li.hasEventListeners=li.listens;var ci=v.extend(li),_i=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_i(this.x),this.y=_i(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return pi.distance(this,C(t))},wrap:function(){return pi.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var di={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},pi=i({},di,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),mi={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};S.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var fi,gi,vi,yi=i({},pi,{code:"EPSG:3857",projection:mi,transformation:function(){var t=.5/(Math.PI*mi.R);return Z(t,.5,-t,.5)}()}),xi=i({},yi,{code:"EPSG:900913"}),wi=document.documentElement.style,Pi="ActiveXObject"in window,Li=Pi&&!document.addEventListener,bi="msLaunchUri"in navigator&&!("documentMode"in document),Ti=A("webkit"),zi=A("android"),Mi=A("android 2")||A("android 3"),Ci=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Si=zi&&A("Google")&&Ci<537&&!("AudioNode"in window),Zi=!!window.opera,Ei=A("chrome"),ki=A("gecko")&&!Ti&&!Zi&&!Pi,Ai=!Ei&&A("safari"),Bi=A("phantom"),Ii="OTransition"in wi,Oi=0===navigator.platform.indexOf("Win"),Ri=Pi&&"transition"in wi,Ni="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Mi,Di="MozPerspective"in wi,ji=!window.L_DISABLE_3D&&(Ri||Ni||Di)&&!Ii&&!Bi,Wi="undefined"!=typeof orientation||A("mobile"),Hi=Wi&&Ti,Fi=Wi&&Ni,Ui=!window.PointerEvent&&window.MSPointerEvent,Vi=!(!window.PointerEvent&&!Ui),qi=!window.L_NO_TOUCH&&(Vi||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Gi=Wi&&Zi,Ki=Wi&&ki,Yi=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=!!document.createElement("canvas").getContext,Ji=!(!document.createElementNS||!E("svg").createSVGRect),$i=!Ji&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),Qi=(Object.freeze||Object)({ie:Pi,ielt9:Li,edge:bi,webkit:Ti,android:zi,android23:Mi,androidStock:Si,opera:Zi,chrome:Ei,gecko:ki,safari:Ai,phantom:Bi,opera12:Ii,win:Oi,ie3d:Ri,webkit3d:Ni,gecko3d:Di,any3d:ji,mobile:Wi,mobileWebkit:Hi,mobileWebkit3d:Fi,msPointer:Ui,pointer:Vi,touch:qi,mobileOpera:Gi,mobileGecko:Ki,retina:Yi,canvas:Xi,svg:Ji,vml:$i}),te=Ui?"MSPointerDown":"pointerdown",ie=Ui?"MSPointerMove":"pointermove",ee=Ui?"MSPointerUp":"pointerup",ne=Ui?"MSPointerCancel":"pointercancel",oe=["INPUT","SELECT","OPTION"],se={},re=!1,ae=0,he=Ui?"MSPointerDown":Vi?"pointerdown":"touchstart",ue=Ui?"MSPointerUp":Vi?"pointerup":"touchend",le="_leaflet_",ce=st(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_e=st(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===_e||"OTransition"===_e?_e+"End":"transitionend";if("onselectstart"in document)fi=function(){mt(window,"selectstart",Pt)},gi=function(){ft(window,"selectstart",Pt)};else{var pe=st(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fi=function(){if(pe){var t=document.documentElement.style;vi=t[pe],t[pe]="none"}},gi=function(){pe&&(document.documentElement.style[pe]=vi,vi=void 0)}}var me,fe,ge,ve=(Object.freeze||Object)({TRANSFORM:ce,TRANSITION:_e,TRANSITION_END:de,get:V,getStyle:q,create:G,remove:K,empty:Y,toFront:X,toBack:J,hasClass:$,addClass:Q,removeClass:tt,setClass:it,getClass:et,setOpacity:nt,testProp:st,setTransform:rt,setPosition:at,getPosition:ht,disableTextSelection:fi,enableTextSelection:gi,disableImageDrag:ut,enableImageDrag:lt,preventOutline:ct,restoreOutline:_t,getSizedParentNode:dt,getScale:pt}),ye="_leaflet_events",xe=Oi&&Ei?2*window.devicePixelRatio:ki?window.devicePixelRatio:1,we={},Pe=(Object.freeze||Object)({on:mt,off:ft,stopPropagation:yt,disableScrollPropagation:xt,disableClickPropagation:wt,preventDefault:Pt,stop:Lt,getMousePosition:bt,getWheelDelta:Tt,fakeStop:zt,skipped:Mt,isExternalTarget:Ct,addListener:mt,removeListener:ft}),Le=ci.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ht(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),at(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),be=ci.extend({options:{crs:yi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=_e&&ji&&!Gi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),mt(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Le,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){Q(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-P)/b,n=u(e)*L;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!ji)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),P=Date.now(),L=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*L*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),K(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(g(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)K(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=G("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=ji?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return bt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=V(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");mt(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&ji,Q(t,"leaflet-container"+(qi?" leaflet-touch":"")+(Yi?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(Ai?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=q(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){at(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){at(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?ft:mt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),ji&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!Ct(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!Ct(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!Mt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||ct(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&Pt(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return ht(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=ji?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=G("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ce,e=this._proxy.style[i];rt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();rt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){K(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Te=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return Q(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(K(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ze=function(t){return new Te(t)};be.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=G("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=G("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)K(this._controlCorners[t]);K(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Me=Te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(Q(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):tt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=G("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),wt(i),xt(i);var n=this._form=G("form",t+"-list");e&&(this._map.on("click",this.collapse,this),zi||mt(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=G("a",t+"-toggle",i);o.href="#",o.title="Layers",qi?(mt(o,"click",Lt),mt(o,"click",this.expand,this)):mt(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=G("div",t+"-base",n),this._separator=G("div",t+"-separator",n),this._overlaysList=G("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Y(this._baseLayersList),Y(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),mt(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Ce=Te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=G("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=G("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),wt(s),mt(s,"click",Lt),mt(s,"click",o,this),mt(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";tt(this._zoomInButton,i),tt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&Q(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&Q(this._zoomInButton,i)}});be.mergeOptions({zoomControl:!0}),be.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ce,this.addControl(this.zoomControl))});var Se=Te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=G("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=G("div",i,e)),t.imperial&&(this._iScale=G("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ze=Te.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=G("div","leaflet-control-attribution"),wt(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});be.mergeOptions({attributionControl:!0}),be.addInitHook(function(){this.options.attributionControl&&(new Ze).addTo(this)});Te.Layers=Me,Te.Zoom=Ce,Te.Scale=Se,Te.Attribution=Ze,ze.layers=function(t,i,e){return new Me(t,i,e)},ze.zoom=function(t){return new Ce(t)},ze.scale=function(t){return new Se(t)},ze.attribution=function(t){return new Ze(t)};var Ee=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(t,i){return t.addHandler(i,this),this};var ke,Ae={Events:li},Be=qi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Oe={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Re=ci.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(mt(this._dragStartTarget,Be,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Re._dragging===this&&this.finishDrag(),ft(this._dragStartTarget,Be,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!$(this._element,"leaflet-zoom-anim")&&!(Re._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Re._dragging=this,this._preventOutline&&ct(this._element),ut(),fi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=dt(this._element);this._startPoint=new x(i.clientX,i.clientY),this._parentScale=pt(e),mt(document,Oe[t.type],this._onMove,this),mt(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Pt(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ht(this._element).subtract(e),Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),at(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Oe)ft(document,Oe[t],this._onMove,this),ft(document,Ie[t],this._onUp,this);lt(),gi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Re._dragging=!1}}),Ne=(Object.freeze||Object)({simplify:Zt,pointToSegmentDistance:Et,closestPointOnSegment:function(t,i,e){return Dt(t,i,e)},clipSegment:It,_getEdgeIntersection:Ot,_getBitCode:Rt,_sqClosestPointOnSegment:Dt,isFlat:jt,_flat:Wt}),De=(Object.freeze||Object)({clipPolygon:Ht}),je={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},We={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},He=(Object.freeze||Object)({LonLat:je,Mercator:We,SphericalMercator:mi}),Fe=i({},pi,{code:"EPSG:3395",projection:We,transformation:function(){var t=.5/(Math.PI*We.R);return Z(t,.5,-t,.5)}()}),Ue=i({},pi,{code:"EPSG:4326",projection:je,transformation:Z(1/180,1,-1/180,.5)}),Ve=i({},di,{projection:je,transformation:Z(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});di.Earth=pi,di.EPSG3395=Fe,di.EPSG3857=yi,di.EPSG900913=xi,di.EPSG4326=Ue,di.Simple=Ve;var qe=ci.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});be.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?oi(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ge=qe.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),Ke=Ge.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ge.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ge.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ye=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Yi&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Xe=Ye.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Xe.imagePath||(Xe.imagePath=this._detectIconPath()),(this.options.imagePath||Xe.imagePath)+Ye.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=G("div","leaflet-default-icon-path",document.body),i=q(t,"background-image")||q(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Je=Ee.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Re(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=ht(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),at(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=ht(i._icon),o=i._map.layerPointToLatLng(n);e&&at(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=qe.extend({options:{icon:new Xe,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),Q(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(Q(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),K(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&K(this._shadow),this._shadow=null},_setPos:function(t){at(this._icon,t),this._shadow&&at(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Je)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Je(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Qe=qe.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),tn=Qe.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Qe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),en=tn.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Qe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===pi.distance){var o=Math.PI/180,s=this._mRadius/pi.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),nn=Qe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Dt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=jt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Zt(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Et(t,a[o],a[n])<=h)return!0;return!1}});nn._flat=Wt;var on=nn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=nn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){nn.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=Ht(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||nn.prototype._containsPoint.call(this,t,!0)}}),sn=Ke.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=oi(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Ft(t,s);return r?(r.feature=Yt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),rn={toGeoJSON:function(t){return Kt(this,{type:"Point",coordinates:qt(this.getLatLng(),t)})}};$e.include(rn),en.include(rn),tn.include(rn),nn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=Gt(this._latlngs,i?1:0,!1,t);return Kt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),on.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=i&&!jt(this._latlngs[0]),n=Gt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Kt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ge.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),Kt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Yt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?Kt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var an=Xt,hn=qe.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){K(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&X(this._image),this},bringToBack:function(){return this._map&&J(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:G("img");Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;rt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();at(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),un=hn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:G("video");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{oi(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=G("source");h.src=this._url[a],i.appendChild(h)}}}}),ln=qe.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(e(K,void 0,this._container),200)):K(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&X(this._container),this},bringToBack:function(){return this._map&&J(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?at(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),cn=ln.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){ln.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Qe||this._source.on("preclick",yt))},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Qe||this._source.off("preclick",yt))},getEvents:function(){var t=ln.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=G("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=G("div",t+"-content-wrapper",i);if(this._contentNode=G("div",t+"-content",e),wt(e),xt(this._contentNode),mt(e,"contextmenu",yt),this._tipContainer=G("div",t+"-tip-container",i),this._tip=G("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=G("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",mt(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",Q(t,"leaflet-popup-scrolled")):tt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();at(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(q(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(ht(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Lt(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});be.mergeOptions({closePopupOnClick:!0}),be.include({openPopup:function(t,i,e){return t instanceof cn||(t=new cn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),qe.include({bindPopup:function(t,i){return t instanceof cn?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new cn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Lt(t),i instanceof Qe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var _n=ln.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){ln.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=ln.prototype.getEvents.call(this);return qi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=G("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),tt(e,"leaflet-tooltip-right"),tt(e,"leaflet-tooltip-left"),tt(e,"leaflet-tooltip-top"),tt(e,"leaflet-tooltip-bottom"),Q(e,"leaflet-tooltip-"+s),at(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});be.include({openTooltip:function(t,i,e){return t instanceof _n||(t=new _n(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),qe.include({bindTooltip:function(t,i){return t instanceof _n?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new _n(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),qi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(Q(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(tt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var dn=Ye.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ye.Default=Xe;var pn=qe.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Wi,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),K(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(X(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(J(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){nt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=G("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(K(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=G("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)K(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();ji?rt(t.el,o,n):at(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(K(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&nt(t,this.options.opacity),zi&&!Mi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),at(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(nt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(Q(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),mn=pn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Yi&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),zi||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return mt(n,"load",e(this._tileOnLoad,this,i,n)),mt(n,"error",e(this._tileOnError,this,i,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Yi?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=si,K(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return Si||i.el.setAttribute("src",si),pn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==si))return pn.prototype._tileReady.call(this,t,i,e)}}),fn=mn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Yi?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,mn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===Ue?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=mn.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});mn.WMS=fn,Jt.wms=function(t,i){return new fn(t,i)};var gn=qe.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=ht(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);ji?rt(this._container,a,e):at(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),vn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");mt(t,"mousemove",o(this._onMouseMove,32,this),this),mt(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),mt(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){g(this._redrawRequest),delete this._ctx,K(this._container),ft(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},gn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Yi?2:1;at(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Yi&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,o=i.prev;e?e.prev=o:this._drawLast=o,o?o.next=e:this._drawFirst=e,delete this._drawnLayers[t._leaflet_id],delete t._order,delete this._layers[n(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e=t.options.dashArray.split(/[, ]+/),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(zt(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(tt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(Q(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),yn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),xn={_initContainer:function(){this._container=G("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=yn("shape");Q(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=yn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;K(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=yn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=oi(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=yn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){X(t._container)},_bringToBack:function(t){J(t._container)}},wn=$i?yn:E,Pn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=wn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=wn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){K(this._container),ft(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){gn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),at(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=wn("path");t.options.className&&Q(i,t.options.className),t.options.interactive&&Q(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){K(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){X(t._path)},_bringToBack:function(t){J(t._path)}});$i&&Pn.include(xn),be.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&$t(t)||Qt(t)}});var Ln=on.extend({initialize:function(t,i){on.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Pn.create=wn,Pn.pointsToPath=k,sn.geometryToLayer=Ft,sn.coordsToLatLng=Ut,sn.coordsToLatLngs=Vt,sn.latLngToCoords=qt,sn.latLngsToCoords=Gt,sn.getFeature=Kt,sn.asFeature=Yt,be.mergeOptions({boxZoom:!0});var bn=Ee.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){mt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ft(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){K(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),fi(),ut(),this._startPoint=this._map.mouseEventToContainerPoint(t),mt(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=G("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();at(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(K(this._box),tt(this._container,"leaflet-crosshair")),gi(),lt(),ft(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});be.addInitHook("addHandler","boxZoom",bn),be.mergeOptions({doubleClickZoom:!0});var Tn=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});be.addInitHook("addHandler","doubleClickZoom",Tn),be.mergeOptions({dragging:!0,inertia:!Mi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zn=Ee.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Re(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});be.addInitHook("addHandler","dragging",zn),be.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mn=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),mt(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ft(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){mt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ft(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Lt(t)}}});be.addInitHook("addHandler","keyboard",Mn),be.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Cn=Ee.extend({addHooks:function(){mt(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ft(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Tt(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Lt(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});be.addInitHook("addHandler","scrollWheelZoom",Cn),be.mergeOptions({tap:!0,tapTolerance:15});var Sn=Ee.extend({addHooks:function(){mt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ft(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Pt(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&Q(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),mt(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),ft(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&tt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});qi&&!Vi&&be.addInitHook("addHandler","tap",Sn),be.mergeOptions({touchZoom:qi&&!Mi,bounceAtZoomLimits:!0});var Zn=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),mt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),ft(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),mt(document,"touchmove",this._onTouchMove,this),mt(document,"touchend",this._onTouchEnd,this),Pt(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),Pt(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),ft(document,"touchmove",this._onTouchMove),ft(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});be.addInitHook("addHandler","touchZoom",Zn),be.BoxZoom=bn,be.DoubleClickZoom=Tn,be.Drag=zn,be.Keyboard=Mn,be.ScrollWheelZoom=Cn,be.Tap=Sn,be.TouchZoom=Zn,Object.freeze=ti,t.version="1.3.4",t.Control=Te,t.control=ze,t.Browser=Qi,t.Evented=ci,t.Mixin=Ae,t.Util=ui,t.Class=v,t.Handler=Ee,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=Pe,t.DomUtil=ve,t.PosAnimation=Le,t.Draggable=Re,t.LineUtil=Ne,t.PolyUtil=De,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=S,t.transformation=Z,t.Projection=He,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=di,t.GeoJSON=sn,t.geoJSON=Xt,t.geoJson=an,t.Layer=qe,t.LayerGroup=Ge,t.layerGroup=function(t,i){return new Ge(t,i)},t.FeatureGroup=Ke,t.featureGroup=function(t){return new Ke(t)},t.ImageOverlay=hn,t.imageOverlay=function(t,i,e){return new hn(t,i,e)},t.VideoOverlay=un,t.videoOverlay=function(t,i,e){return new un(t,i,e)},t.DivOverlay=ln,t.Popup=cn,t.popup=function(t,i){return new cn(t,i)},t.Tooltip=_n,t.tooltip=function(t,i){return new _n(t,i)},t.Icon=Ye,t.icon=function(t){return new Ye(t)},t.DivIcon=dn,t.divIcon=function(t){return new dn(t)},t.Marker=$e,t.marker=function(t,i){return new $e(t,i)},t.TileLayer=mn,t.tileLayer=Jt,t.GridLayer=pn,t.gridLayer=function(t){return new pn(t)},t.SVG=Pn,t.svg=Qt,t.Renderer=gn,t.Canvas=vn,t.canvas=$t,t.Path=Qe,t.CircleMarker=tn,t.circleMarker=function(t,i){return new tn(t,i)},t.Circle=en,t.circle=function(t,i,e){return new en(t,i,e)},t.Polyline=nn,t.polyline=function(t,i){return new nn(t,i)},t.Polygon=on,t.polygon=function(t,i){return new on(t,i)},t.Rectangle=Ln,t.rectangle=function(t,i){return new Ln(t,i)},t.Map=be,t.map=function(t,i){return new be(t,i)};var En=window.L;t.noConflict=function(){return window.L=En,this},window.L=t});
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/leaflet/dist/leaflet.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./images/layers.png":[["layers.69e4b0dc.png","node_modules/leaflet/dist/images/layers.png"],"node_modules/leaflet/dist/images/layers.png"],"./images/layers-2x.png":[["layers-2x.c9958c4f.png","node_modules/leaflet/dist/images/layers-2x.png"],"node_modules/leaflet/dist/images/layers-2x.png"],"./images/marker-icon.png":[["marker-icon.3caa7cec.png","node_modules/leaflet/dist/images/marker-icon.png"],"node_modules/leaflet/dist/images/marker-icon.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/leaflet.markercluster/dist/MarkerCluster.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/marker-icon.png":[function(require,module,exports) {
module.exports = "/marker-icon.4f74e1bf.png";
},{}],"images/marker-shadow.png":[function(require,module,exports) {
module.exports = "/marker-shadow.acdfc34f.png";
},{}],"index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./node_modules/leaflet/dist/leaflet.css":"node_modules/leaflet/dist/leaflet.css","./fonts/Roboto-Bold.ttf":[["Roboto-Bold.a2c77014.ttf","fonts/Roboto-Bold.ttf"],"fonts/Roboto-Bold.ttf"],"./fonts/Roboto-Italic.ttf":[["Roboto-Italic.98b7a5a6.ttf","fonts/Roboto-Italic.ttf"],"fonts/Roboto-Italic.ttf"],"./fonts/Roboto-Regular.ttf":[["Roboto-Regular.652d6efc.ttf","fonts/Roboto-Regular.ttf"],"fonts/Roboto-Regular.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"apotheker.json":[function(require,module,exports) {
module.exports = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {
      "OBJECTID": 46888,
      "NAAM": "Multipharma 87",
      "ID": "ap00755",
      "STRAAT": "Abdijstraat",
      "HUISNR": "42",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.379791621212881, 51.18948459199231]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46889,
      "NAAM": "Apotheek Wolfs",
      "ID": "ap00756",
      "STRAAT": "Albert Bevernagelei",
      "HUISNR": "89",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.447942992436798, 51.233629945675055]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46890,
      "NAAM": "Apotheek Van Hoof",
      "ID": "ap00757",
      "STRAAT": "Alfons De Cockstraat",
      "HUISNR": "74",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.372800978415941, 51.190000360088035]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46891,
      "NAAM": "Apotheek Zuiderkruis",
      "ID": "ap00758",
      "STRAAT": "Amerikalei",
      "HUISNR": "168",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.392020063863349, 51.20592483466792]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46892,
      "NAAM": "Apotheek Zuid",
      "ID": "ap00759",
      "STRAAT": "Amerikalei",
      "HUISNR": "82",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.397623702791352, 51.207676672298305]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46893,
      "NAAM": "Apotheek Six",
      "ID": "ap00760",
      "STRAAT": "Ankerrui",
      "HUISNR": "24",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.411517092446749, 51.22667127417095]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46894,
      "NAAM": "Apotheek Coopmans",
      "ID": "ap00763",
      "STRAAT": "Antwerpsesteenweg",
      "HUISNR": "430",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.368364624041709, 51.18098032581826]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46895,
      "NAAM": "Apotheek Florens",
      "ID": "ap00764",
      "STRAAT": "Antwerpsesteenweg",
      "HUISNR": "90",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.355649004849993, 51.178135182277785]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46896,
      "NAAM": "Internationale Apotheek",
      "ID": "ap00765",
      "STRAAT": "Appelmansstraat",
      "HUISNR": "11",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4176999569197575, 51.21695967858082]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46897,
      "NAAM": "Multipharma 104",
      "ID": "ap00766",
      "STRAAT": "Baron Leroystraat",
      "HUISNR": "2",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.466411064059445, 51.225768898755376]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46898,
      "NAAM": "Apotheek Bek",
      "ID": "ap00768",
      "STRAAT": "Belgielei",
      "HUISNR": "66",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.419810449443436, 51.20741888190567]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46899,
      "NAAM": "Kruispunt Apotheek",
      "ID": "ap00769",
      "STRAAT": "Belgiëlei",
      "HUISNR": "108",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4175515889360915, 51.205752040059984]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46900,
      "NAAM": "Apotheek Godelaine",
      "ID": "ap00770",
      "STRAAT": "Berkenlaan",
      "HUISNR": "85",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.39379781058767, 51.18289125052474]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46901,
      "NAAM": "Apotheek Bisschoppenhof",
      "ID": "ap00771",
      "STRAAT": "Bisschoppenhoflaan",
      "HUISNR": "226",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.454052709194443, 51.23167976328214]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46902,
      "NAAM": "Apotheek De Groof Philip",
      "ID": "ap00772",
      "STRAAT": "Bist",
      "HUISNR": "43",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.393831382186942, 51.16941729526333]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46903,
      "NAAM": "Regatta Pharma",
      "ID": "ap00773",
      "STRAAT": "Blancefloerlaan",
      "HUISNR": "309",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.371247098708698, 51.21981925616171]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46904,
      "NAAM": "Apotheek Ramsdam",
      "ID": "ap00774",
      "STRAAT": "Blancefloerlaan",
      "HUISNR": "65",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.380482437748226, 51.22002669348451]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46905,
      "NAAM": "Apotheek Van Eynde",
      "ID": "ap00777",
      "STRAAT": "Boshovestraat",
      "HUISNR": "186",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.473034929287449, 51.22278237932152]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46906,
      "NAAM": "Apotheek Bellekens",
      "ID": "ap00779",
      "STRAAT": "Bredabaan",
      "HUISNR": "277",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4385551000719, 51.24025705732629]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46907,
      "NAAM": "Multipharma 103",
      "ID": "ap00780",
      "STRAAT": "Bredabaan",
      "HUISNR": "328",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.439704305823126, 51.24211366440797]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46908,
      "NAAM": "Districtapotheek",
      "ID": "ap00781",
      "STRAAT": "Bredabaan",
      "HUISNR": "372",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4411221066054605, 51.243119437066575]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46909,
      "NAAM": "Multipharma 97",
      "ID": "ap00782",
      "STRAAT": "Bredabaan",
      "HUISNR": "521",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.448403144107755, 51.24555071197357]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46910,
      "NAAM": "Apotheek Pirlot",
      "ID": "ap00783",
      "STRAAT": "Bredabaan",
      "HUISNR": "720",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.453149089644322, 51.248392236144625]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46911,
      "NAAM": "Apotheek De Kroon",
      "ID": "ap00784",
      "STRAAT": "Brederodestraat",
      "HUISNR": "127",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3934457517380965, 51.20273168958131]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46912,
      "NAAM": "Apotheek Muylaert",
      "ID": "ap00785",
      "STRAAT": "Brederodestraat",
      "HUISNR": "61",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.395827167835651, 51.20518331273796]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46913,
      "NAAM": "Pharma Thierie",
      "ID": "ap00786",
      "STRAAT": "Bresstraat",
      "HUISNR": "18",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.397847450585601, 51.206606048556395]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46914,
      "NAAM": "Apotheek Masui",
      "ID": "ap00787",
      "STRAAT": "Camille Huysmanslaan",
      "HUISNR": "95",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.390694621029964, 51.190502998172384]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46915,
      "NAAM": "Apotheek Thaey",
      "ID": "ap00790",
      "STRAAT": "Carnotstraat",
      "HUISNR": "26",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.423309304161602, 51.218558139335045]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46916,
      "NAAM": "Apotheek Rivierenhof",
      "ID": "ap00792",
      "STRAAT": "Collegelaan",
      "HUISNR": "106",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4575640042865095, 51.2133599067841]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46917,
      "NAAM": "Apotheek Albisa",
      "ID": "ap00795",
      "STRAAT": "Cruyslei",
      "HUISNR": "25",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.456487756797534, 51.19898567606953]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46918,
      "NAAM": "Apotheek Pharmalux",
      "ID": "ap00796",
      "STRAAT": "Dageraadplaats",
      "HUISNR": "25",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.429459347682476, 51.20726356442548]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46919,
      "NAAM": "Apotheek Hooft",
      "ID": "ap00797",
      "STRAAT": "Dambruggestraat",
      "HUISNR": "209",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.421811658499329, 51.22550334727636]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46920,
      "NAAM": "Apotheek 3 Torekens",
      "ID": "ap00799",
      "STRAAT": "De Berlaimontstraat",
      "HUISNR": "49",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.457350854308442, 51.228610837689374]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46921,
      "NAAM": "Apotheek Tarnaud",
      "ID": "ap00802",
      "STRAAT": "De Gryspeerstraat",
      "HUISNR": "19",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.453085114164592, 51.22669831408952]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46922,
      "NAAM": "Apotheek Grime",
      "ID": "ap00804",
      "STRAAT": "De Vlasschaardstraat",
      "HUISNR": "3",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.435605153146448, 51.25020120651237]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46923,
      "NAAM": "Apotheek Groenenhoek",
      "ID": "ap00805",
      "STRAAT": "Dianalaan",
      "HUISNR": "174",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.444616991371467, 51.19561590862731]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46924,
      "NAAM": "Apotheek Willemsplein",
      "ID": "ap00806",
      "STRAAT": "Dichtersstraat",
      "HUISNR": "1",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.375956861856137, 51.18054480724225]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46925,
      "NAAM": "Apotheek Amicus-C",
      "ID": "ap00809",
      "STRAAT": "Diksmuidelaan",
      "HUISNR": "80",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4417453297317655, 51.19810149680358]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46926,
      "NAAM": "Apotheek Van den Berghe",
      "ID": "ap00810",
      "STRAAT": "Dokter Van de Perrelei",
      "HUISNR": "114",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.449303088225557, 51.20679453244343]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46927,
      "NAAM": "Apotheek Leuridan",
      "ID": "ap00813",
      "STRAAT": "Draakstraat",
      "HUISNR": "18",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.431006132488222, 51.20629957938715]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46928,
      "NAAM": "Apotheek De Geest",
      "ID": "ap00817",
      "STRAAT": "Edenlaan",
      "HUISNR": "20",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.389255740961941, 51.153416189097214]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46929,
      "NAAM": "Apotheek Eksterlaar",
      "ID": "ap00818",
      "STRAAT": "Eksterlaar",
      "HUISNR": "75",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.468840900642443, 51.199604571281576]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46930,
      "NAAM": "Apotheek Warlop",
      "ID": "ap00820",
      "STRAAT": "Ferdinand Verbieststraat",
      "HUISNR": "6",
      "POSTCODE": "2030",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.411025057966436, 51.27451787172515]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46931,
      "NAAM": "Apotheek Holvoet",
      "ID": "ap00821",
      "STRAAT": "Floralienlaan",
      "HUISNR": "513",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.430186345639343, 51.177790139774814]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46932,
      "NAAM": "Antverpia Berchem",
      "ID": "ap00824",
      "STRAAT": "Fruithoflaan",
      "HUISNR": "10",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.434038601836729, 51.18088686324251]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46933,
      "NAAM": "Apotheek Baute",
      "ID": "ap00825",
      "STRAAT": "Gallaitlaan",
      "HUISNR": "4",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.390730337973668, 51.166242647069396]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46934,
      "NAAM": "Apotheek Wauben",
      "ID": "ap00826",
      "STRAAT": "Gallifortlei",
      "HUISNR": "147",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.463650045178458, 51.22330431530526]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46935,
      "NAAM": "APO+",
      "ID": "ap00827",
      "STRAAT": "Gallifortlei",
      "HUISNR": "67",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.462345578448492, 51.22201928984321]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46936,
      "NAAM": "Apotheek Tijskens",
      "ID": "ap00828",
      "STRAAT": "Gasstraat",
      "HUISNR": "105",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.426311296517877, 51.223954806733694]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46937,
      "NAAM": "Apotheek 't Roosevelt",
      "ID": "ap00829",
      "STRAAT": "Gemeentestraat",
      "HUISNR": "2",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.418603459848216, 51.21917431753267]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46938,
      "NAAM": "Apotheek Europark",
      "ID": "ap00831",
      "STRAAT": "Georges Eekhoudlaan",
      "HUISNR": "2",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.381125759064951, 51.22314254629961]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46939,
      "NAAM": "Apotheek Van de Voorde",
      "ID": "ap00833",
      "STRAAT": "Gitschotellei",
      "HUISNR": "127",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.442478565035453, 51.20018789235529]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46940,
      "NAAM": "Apotheek Gitschotel",
      "ID": "ap00834",
      "STRAAT": "Gitschotellei",
      "HUISNR": "186",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.444162914432093, 51.200702684679165]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46941,
      "NAAM": "Multipharma 461",
      "ID": "ap00835",
      "STRAAT": "Gitschotellei",
      "HUISNR": "247",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.448275945472324, 51.200003852181105]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46942,
      "NAAM": "Apotheek Polderstad",
      "ID": "ap00836",
      "STRAAT": "Graspolderlaan",
      "HUISNR": "24",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3423549885486805, 51.18550310197791]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46943,
      "NAAM": "Apotheek De Meester",
      "ID": "ap00837",
      "STRAAT": "Groenendaallaan",
      "HUISNR": "164",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4299929638816815, 51.24370856497536]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46944,
      "NAAM": "Europa apotheek",
      "ID": "ap00839",
      "STRAAT": "Groenplaats",
      "HUISNR": "42",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.401327165975164, 51.219876000403076]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46945,
      "NAAM": "Apotheek Van Reeth - Deprost",
      "ID": "ap00843",
      "STRAAT": "Grotesteenweg",
      "HUISNR": "241",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.425473829824452, 51.189015771557536]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46946,
      "NAAM": "Apotheek Degreef",
      "ID": "ap00844",
      "STRAAT": "Grotesteenweg",
      "HUISNR": "393",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.42963696638589, 51.18525937827644]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46947,
      "NAAM": "Apotheek Vandenabeele",
      "ID": "ap00845",
      "STRAAT": "Grotesteenweg",
      "HUISNR": "9",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.415462651945282, 51.1986102648696]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46948,
      "NAAM": "M de Porre",
      "ID": "ap00846",
      "STRAAT": "Guido Gezellestraat",
      "HUISNR": "7",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.435980537769533, 51.209384530369135]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46949,
      "NAAM": "Apotheek De Voogt",
      "ID": "ap00849",
      "STRAAT": "Heidestraat",
      "HUISNR": "217",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3624479169949515, 51.17443273040428]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46950,
      "NAAM": "Apotheek Bogaert",
      "ID": "ap00850",
      "STRAAT": "Heistraat",
      "HUISNR": "40",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.394394898606724, 51.17198822364791]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46951,
      "NAAM": "Multipharma 94",
      "ID": "ap00851",
      "STRAAT": "Heistraat",
      "HUISNR": "8",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.395177287531847, 51.171057554737466]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46952,
      "NAAM": "Apotheek Hostens",
      "ID": "ap00853",
      "STRAAT": "Hendriklei",
      "HUISNR": "11",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.374555577746535, 51.18672829386366]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46953,
      "NAAM": "De Lindeboom Apotheek Deurne",
      "ID": "ap00854",
      "STRAAT": "Herentalsebaan",
      "HUISNR": "106",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.456795091072031, 51.20905390565021]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46954,
      "NAAM": "Multipharma 91",
      "ID": "ap00856",
      "STRAAT": "Herentalsebaan",
      "HUISNR": "363",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.46767283925633, 51.206648682313975]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46955,
      "NAAM": "Apotheek Strobbe",
      "ID": "ap00858",
      "STRAAT": "Hoogstraat",
      "HUISNR": "46",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.397720710014527, 51.2193733531755]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46956,
      "NAAM": "Apotheek Van Herzele",
      "ID": "ap00859",
      "STRAAT": "Hugo Verrieststraat",
      "HUISNR": "11",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.424371165419406, 51.18809472017092]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46957,
      "NAAM": "Apotheek Mann",
      "ID": "ap00864",
      "STRAAT": "Jan Van Rijswijcklaan",
      "HUISNR": "82",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4059745268483965, 51.19709418209654]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46958,
      "NAAM": "Actipharma",
      "ID": "ap00866",
      "STRAAT": "Jules Moretuslei",
      "HUISNR": "239",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.392601431189013, 51.172630828669895]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46959,
      "NAAM": "Apotheek Isavo",
      "ID": "ap00867",
      "STRAAT": "Julius De Geyterstraat",
      "HUISNR": "19",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.376000077222068, 51.18621464641924]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46960,
      "NAAM": "Apotheek Justitia",
      "ID": "ap00869",
      "STRAAT": "Justitiestraat",
      "HUISNR": "81",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.403690687550757, 51.20799892340009]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46961,
      "NAAM": "City Pharma",
      "ID": "ap00870",
      "STRAAT": "Kammenstraat",
      "HUISNR": "61",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.401357537169942, 51.21670797136434]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46962,
      "NAAM": "Apotheek D. Verhaert",
      "ID": "ap00872",
      "STRAAT": "Kapelsesteenweg",
      "HUISNR": "81",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.457914571077928, 51.27193325328713]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46963,
      "NAAM": "Apotheek Sollie",
      "ID": "ap00874",
      "STRAAT": "Kasteelpleinstraat",
      "HUISNR": "24",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.401335607000719, 51.210482748476736]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46964,
      "NAAM": "Apotheek Van Briel",
      "ID": "ap00875",
      "STRAAT": "Keizerstraat",
      "HUISNR": "73",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.41028336489824, 51.22139803656095]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46965,
      "NAAM": "Multipharma 90",
      "ID": "ap00878",
      "STRAAT": "Kioskplaats",
      "HUISNR": "45",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.350163997971406, 51.17521461004062]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46966,
      "NAAM": "Apotheek Van Ghyseghem",
      "ID": "ap00880",
      "STRAAT": "Kloosterstraat",
      "HUISNR": "166",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.393695457056681, 51.21241872386529]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46967,
      "NAAM": "Apotheek Koxplein",
      "ID": "ap00885",
      "STRAAT": "Koxplein",
      "HUISNR": "1",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.433304467613232, 51.211560790136865]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46968,
      "NAAM": "Apotheek Kroonplein",
      "ID": "ap00886",
      "STRAAT": "Kroonplein",
      "HUISNR": "47",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.449354307549737, 51.251422442239566]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46969,
      "NAAM": "Apotheek Van den Dwey",
      "ID": "ap00887",
      "STRAAT": "Laaglandlaan",
      "HUISNR": "164",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.446658626232469, 51.256206280601916]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46970,
      "NAAM": "Apotheek Engels-Frencken",
      "ID": "ap00888",
      "STRAAT": "Laarstraat",
      "HUISNR": "23",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.394539212290869, 51.17477779001054]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46971,
      "NAAM": "Apotheek De Raeymaecker",
      "ID": "ap00889",
      "STRAAT": "Lageweg",
      "HUISNR": "116",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.358283911467244, 51.183298225817076]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46972,
      "NAAM": "Apotheek Bronkhorst",
      "ID": "ap00892",
      "STRAAT": "Lambrechtshoekenlaan",
      "HUISNR": "258",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.435137166320804, 51.25218084252542]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46973,
      "NAAM": "Apotheek Rotti",
      "ID": "ap00893",
      "STRAAT": "Lamorinierestraat",
      "HUISNR": "187",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.419818611726935, 51.20219831594531]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46974,
      "NAAM": "Apotheek Pieters",
      "ID": "ap00895",
      "STRAAT": "Lange Leemstraat",
      "HUISNR": "124",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.413832269712401, 51.20723187724476]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46975,
      "NAAM": "Apotheek Maus",
      "ID": "ap00896",
      "STRAAT": "Lange Leemstraat",
      "HUISNR": "74",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.411861637166227, 51.20841957624572]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46976,
      "NAAM": "Apotheek Bouakka",
      "ID": "ap00901",
      "STRAAT": "Lange Van Bloerstraat",
      "HUISNR": "88",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.43393963837068, 51.22054338594549]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46977,
      "NAAM": "C van Hoof",
      "ID": "ap00902",
      "STRAAT": "Langstraat",
      "HUISNR": "96",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.433591165184978, 51.212431388426765]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46978,
      "NAAM": "Apotheek Verdonck",
      "ID": "ap00903",
      "STRAAT": "Lappersbrug",
      "HUISNR": "21",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.431067515633767, 51.18607979019089]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46979,
      "NAAM": "Apotheek Samsom",
      "ID": "ap00904",
      "STRAAT": "Leon Stampelaan",
      "HUISNR": "1",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4652147467289405, 51.19472307728273]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46980,
      "NAAM": "Apotheek Smets",
      "ID": "ap00906",
      "STRAAT": "Letterkundestraat",
      "HUISNR": "2",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.382580265419637, 51.181520411638324]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46981,
      "NAAM": "Apotheek Riet Maes",
      "ID": "ap00907",
      "STRAAT": "Lode Zielenslaan",
      "HUISNR": "2",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.385553260352719, 51.221823849640224]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46982,
      "NAAM": "Apotheek Gyselen",
      "ID": "ap00908",
      "STRAAT": "Lodewijk Van Berckenlaan",
      "HUISNR": "184",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.447982918349944, 51.1977645963105]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46983,
      "NAAM": "Zwitserse Apotheek",
      "ID": "ap00909",
      "STRAAT": "Luitenant Lippenslaan",
      "HUISNR": "1",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.452274834081207, 51.21004664734742]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46984,
      "NAAM": "Apotheek Jasmijn",
      "ID": "ap00910",
      "STRAAT": "Luitenant Naeyaertplein",
      "HUISNR": "4",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.43975248040794, 51.210292662666774]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46985,
      "NAAM": "De Lindeboom Apotheek",
      "ID": "ap00913",
      "STRAAT": "Markt",
      "HUISNR": "16",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.417892241861589, 51.27748164306348]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46986,
      "NAAM": "Apotheek Joris",
      "ID": "ap00915",
      "STRAAT": "Mechelseplein",
      "HUISNR": "20",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.404862750652136, 51.21279275512729]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46987,
      "NAAM": "Bankapotheek",
      "ID": "ap00916",
      "STRAAT": "Mechelsesteenweg",
      "HUISNR": "12",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.407234169035738, 51.211627136343104]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46988,
      "NAAM": "Eeuwfeestapotheek",
      "ID": "ap00917",
      "STRAAT": "Mechelsesteenweg",
      "HUISNR": "181",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.411613230186793, 51.20401803566959]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46989,
      "NAAM": "Apotheek Marc Thoné",
      "ID": "ap00919",
      "STRAAT": "Menegemlei",
      "HUISNR": "2",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.464505212989758, 51.20079815136805]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46990,
      "NAAM": "Apotheek Ampe",
      "ID": "ap00921",
      "STRAAT": "Mercatorstraat",
      "HUISNR": "36",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.422999012456218, 51.20885607491837]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46991,
      "NAAM": "Apotheek Suykerbuyk",
      "ID": "ap00923",
      "STRAAT": "Monnikenhofstraat",
      "HUISNR": "105",
      "POSTCODE": "2040",
      "DISTRICT": "BERENDRECHT-ZANDVLIET-LILLO"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.320860933331926, 51.34572975831258]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46992,
      "NAAM": "Apotheek Buyck",
      "ID": "ap00925",
      "STRAAT": "Muizenstraat",
      "HUISNR": "14",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.421475769923089, 51.22226368088901]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46993,
      "NAAM": "De Lindeboom Apotheek",
      "ID": "ap00927",
      "STRAAT": "Nationalestraat",
      "HUISNR": "119",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.398260711863389, 51.21376413262939]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46994,
      "NAAM": "Antverpia Antwerpen",
      "ID": "ap00928",
      "STRAAT": "Nationalestraat",
      "HUISNR": "145",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.397880438693623, 51.21309899311368]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46995,
      "NAAM": "Apotheek Lescrinier",
      "ID": "ap00929",
      "STRAAT": "Nationalestraat",
      "HUISNR": "70",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.39860694934898, 51.215602532805725]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46996,
      "NAAM": "Apotheek Mast",
      "ID": "ap00932",
      "STRAAT": "Offerandestraat",
      "HUISNR": "112",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.427426101460349, 51.2211851777189]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46997,
      "NAAM": "Apotheek De Gendt",
      "ID": "ap00934",
      "STRAAT": "Oogststraat",
      "HUISNR": "9",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.438097791561045, 51.18177976848088]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46998,
      "NAAM": "Farmafleur",
      "ID": "ap00936",
      "STRAAT": "Oosterlinckhoflaan",
      "HUISNR": "48",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.424080297871974, 51.28158529249134]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 46999,
      "NAAM": "Apotheek Somers Kristel",
      "ID": "ap00937",
      "STRAAT": "Oudebaan",
      "HUISNR": "5",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.45283847293579, 51.278842714043606]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47000,
      "NAAM": "Apotheek P. Bauwens",
      "ID": "ap00940",
      "STRAAT": "Pastoor Bauwenslaan",
      "HUISNR": "59",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.378262270248557, 51.17865381344581]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47001,
      "NAAM": "De Apothekers Centraal Station",
      "ID": "ap00942",
      "STRAAT": "Pelikaanstraat",
      "HUISNR": "3",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.421156950734775, 51.215121824607515]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47002,
      "NAAM": "Apotheek Plantijn",
      "ID": "ap00944",
      "STRAAT": "Plantin en Moretuslei",
      "HUISNR": "92",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.426265931419389, 51.21022168915996]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47003,
      "NAAM": "Apotheek Oosterveld",
      "ID": "ap00948",
      "STRAAT": "Prins Boudewijnlaan",
      "HUISNR": "136",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.424584100295581, 51.17555058356986]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47004,
      "NAAM": "Apotheek Slaets",
      "ID": "ap00949",
      "STRAAT": "Prins Boudewijnlaan",
      "HUISNR": "340",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4258246223111675, 51.170748488440395]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47005,
      "NAAM": "Apotheek De Meyer",
      "ID": "ap00950",
      "STRAAT": "Prinshoeveweg",
      "HUISNR": "90",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.447618139459322, 51.27953190185649]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47006,
      "NAAM": "Apotheek Clessens",
      "ID": "ap00953",
      "STRAAT": "Ringlaan",
      "HUISNR": "21",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.457664801570318, 51.25447903881368]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47007,
      "NAAM": "Apotheek Holsbeek",
      "ID": "ap00955",
      "STRAAT": "Ruggeveldlaan",
      "HUISNR": "588",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.479689831300811, 51.22277896780857]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47008,
      "NAAM": "Apotheek Cortvrindt",
      "ID": "ap00956",
      "STRAAT": "Rupelstraat",
      "HUISNR": "2",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.42938452454732, 51.231161639876156]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47009,
      "NAAM": "Apotheek Heyvaerts",
      "ID": "ap00957",
      "STRAAT": "Schotensesteenweg",
      "HUISNR": "150",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.481420651678602, 51.22252218026373]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47010,
      "NAAM": "R & B Farma",
      "ID": "ap00958",
      "STRAAT": "Schotensesteenweg",
      "HUISNR": "8",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.475600038600478, 51.21947043850544]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47011,
      "NAAM": "Apotheek Spysschaert",
      "ID": "ap00961",
      "STRAAT": "Sint-Bernardsesteenweg",
      "HUISNR": "808",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.368762288260164, 51.17839127269057]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47012,
      "NAAM": "Apotheek Villé",
      "ID": "ap00963",
      "STRAAT": "Sint-Bernardsesteenweg",
      "HUISNR": "354",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.376832277095907, 51.189147284015704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47013,
      "NAAM": "Apotheek Zwaantje",
      "ID": "ap00964",
      "STRAAT": "Sint-Bernardsesteenweg",
      "HUISNR": "357",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.372734296478699, 51.18285823155967]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47014,
      "NAAM": "Apotheek Sint-Jacob",
      "ID": "ap00967",
      "STRAAT": "Sint-Jacobsmarkt",
      "HUISNR": "98",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.414863870791098, 51.21969888355823]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47015,
      "NAAM": "Apotheek De Kock",
      "ID": "ap00969",
      "STRAAT": "Sint-Lambertusstraat",
      "HUISNR": "39",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.419874447857559, 51.19864546246767]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47016,
      "NAAM": "Apotheek Sint-Paulus",
      "ID": "ap00970",
      "STRAAT": "Sint-Paulusstraat",
      "HUISNR": "35",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.402706062140323, 51.22425913812195]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47017,
      "NAAM": "Smeets Farma",
      "ID": "ap00971",
      "STRAAT": "Sint-Rochusstraat",
      "HUISNR": "31",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.465264769250469, 51.20644791685158]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47018,
      "NAAM": "Apotheek Coppens-Dercon",
      "ID": "ap00974",
      "STRAAT": "Statiestraat",
      "HUISNR": "165",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.429916445486121, 51.1994181146292]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47019,
      "NAAM": "Multipharma 93",
      "ID": "ap00975",
      "STRAAT": "Statiestraat",
      "HUISNR": "51",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.425459565183821, 51.19784564060252]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47020,
      "NAAM": "Apotheek Stenenbrug",
      "ID": "ap00976",
      "STRAAT": "Stenenbrug",
      "HUISNR": "150",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.451403464831149, 51.210816114420886]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47021,
      "NAAM": "Apotheek Jans",
      "ID": "ap00978",
      "STRAAT": "Te Couwelaarlei",
      "HUISNR": "134",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.458513996755223, 51.222550892876704]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47022,
      "NAAM": "Apotheek Nomes-Liekens",
      "ID": "ap00979",
      "STRAAT": "Ten Eekhovelei",
      "HUISNR": "329",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.44572218379438, 51.22894076493766]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47023,
      "NAAM": "Apotheek Broeckx",
      "ID": "ap00980",
      "STRAAT": "Teniersplaats",
      "HUISNR": "2",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4144067869732915, 51.21792392026527]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47024,
      "NAAM": "Apotheek Verzele",
      "ID": "ap00981",
      "STRAAT": "Ter Heydelaan",
      "HUISNR": "1",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.456744330568085, 51.22471297684877]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47025,
      "NAAM": "Pharma Danckaert",
      "ID": "ap00982",
      "STRAAT": "Ter Heydelaan",
      "HUISNR": "173",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.463642589944772, 51.227261663324]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47026,
      "NAAM": "Apotheek W.A. Farma",
      "ID": "ap00983",
      "STRAAT": "Ter Rivierenlaan",
      "HUISNR": "207",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.468895358048117, 51.22671729028435]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47027,
      "NAAM": "Apotheek Van Butsele",
      "ID": "ap00984",
      "STRAAT": "Thibautstraat",
      "HUISNR": "139",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.452638594623269, 51.2039517664415]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47028,
      "NAAM": "Apotheek Ann Janssens",
      "ID": "ap00985",
      "STRAAT": "Trompetvogelstraat",
      "HUISNR": "59",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.436526349215335, 51.25753000996537]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47029,
      "NAAM": "Apotheek Welzijn",
      "ID": "ap00986",
      "STRAAT": "Turckstraat",
      "HUISNR": "39",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.439684467771522, 51.22158413319182]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47030,
      "NAAM": "Apotheek Cools",
      "ID": "ap00987",
      "STRAAT": "Turnhoutsebaan",
      "HUISNR": "341",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.441861672365318, 51.2143072975889]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47031,
      "NAAM": "Apotheek Commuphar",
      "ID": "ap00989",
      "STRAAT": "Turnhoutsebaan",
      "HUISNR": "117",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.461340193628629, 51.22028957815935]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47032,
      "NAAM": "Apotheek De Roma",
      "ID": "ap00991",
      "STRAAT": "Turnhoutsebaan",
      "HUISNR": "282",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.43994176910441, 51.213676818805766]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47033,
      "NAAM": "Monbaliu-De Vel",
      "ID": "ap00992",
      "STRAAT": "Tweegezusterslaan",
      "HUISNR": "99",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4768300628988165, 51.22829018923514]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47034,
      "NAAM": "Apotheek Sportpaleis",
      "ID": "ap00993",
      "STRAAT": "Tweemontstraat",
      "HUISNR": "431",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.443226662243257, 51.231146873036465]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47035,
      "NAAM": "Valaarapotheek",
      "ID": "ap00994",
      "STRAAT": "Valaardreef",
      "HUISNR": "69",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.377480990727245, 51.17629532945811]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47036,
      "NAAM": "Apotheek Orfus",
      "ID": "ap00997",
      "STRAAT": "Van Kerckhovenstraat",
      "HUISNR": "74",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.425143833885449, 51.225995748786964]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47037,
      "NAAM": "Oosterapotheek",
      "ID": "ap00998",
      "STRAAT": "Vandenpeereboomstraat",
      "HUISNR": "100",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.436088520131328, 51.209358711028344]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47038,
      "NAAM": "Apotheek Deckers",
      "ID": "ap01002",
      "STRAAT": "VIIde Olympiadelaan",
      "HUISNR": "105",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.383985779452937, 51.182929783353266]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47039,
      "NAAM": "Apotheek Feryn-Garre",
      "ID": "ap01003",
      "STRAAT": "Vijverlaan",
      "HUISNR": "31",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.402808167371113, 51.175859169200116]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47040,
      "NAAM": "Apotheek Van Reeth",
      "ID": "ap01004",
      "STRAAT": "Vlaamse Kunstlaan",
      "HUISNR": "72",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.389612489083503, 51.19031610054789]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47041,
      "NAAM": "Apotheek Proost",
      "ID": "ap01005",
      "STRAAT": "Volhardingstraat",
      "HUISNR": "1",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.392025087465318, 51.18775667170597]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47042,
      "NAAM": "Apotheek De Witte",
      "ID": "ap01006",
      "STRAAT": "Volkstraat",
      "HUISNR": "26",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3960522319852595, 51.21147856430103]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47043,
      "NAAM": "Multipharma 102",
      "ID": "ap01007",
      "STRAAT": "Waterhoenlaan",
      "HUISNR": "10",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.381638016758071, 51.22075688553387]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47044,
      "NAAM": "Marktapotheek",
      "ID": "ap01008",
      "STRAAT": "Weggestraat",
      "HUISNR": "5",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.447936146004334, 51.24607421933492]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47045,
      "NAAM": "Apotheek De Arend",
      "ID": "ap01010",
      "STRAAT": "Zwarte Arendlaan",
      "HUISNR": "14",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.486033249096665, 51.22146085954009]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47046,
      "NAAM": "Apotheek Drie Koningen",
      "ID": "ap01012",
      "STRAAT": "Grotesteenweg",
      "HUISNR": "99",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.418194645395542, 51.1957154627859]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47047,
      "NAAM": "Apotheek Van Puyvelde",
      "ID": "ap01013",
      "STRAAT": "Helmstraat",
      "HUISNR": "162",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.437500152878252, 51.218071645623276]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47048,
      "NAAM": "Apotheek Arena",
      "ID": "ap01014",
      "STRAAT": "Herentalsebaan",
      "HUISNR": "265",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.464196873748589, 51.208153716886834]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47049,
      "NAAM": "Apotheek Dons",
      "ID": "ap01015",
      "STRAAT": "Monnikenhofstraat",
      "HUISNR": "179",
      "POSTCODE": "2040",
      "DISTRICT": "BERENDRECHT-ZANDVLIET-LILLO"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.329644559752666, 51.34789278096412]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47050,
      "NAAM": "Apotheek Audenaerde",
      "ID": "ap01018",
      "STRAAT": "Turnhoutsebaan",
      "HUISNR": "375",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.443143783666418, 51.21477900932772]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47051,
      "NAAM": "Apotheek Cons-envi",
      "ID": "ap01019",
      "STRAAT": "Turnhoutsebaan",
      "HUISNR": "238",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.437945152468482, 51.21401062597426]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47052,
      "NAAM": "Multipharma 145",
      "ID": "ap01020",
      "STRAAT": "Canadalaan",
      "HUISNR": "218",
      "POSTCODE": "2030",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.421921404465463, 51.254940436693154]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47053,
      "NAAM": "Apotheek Jan Palfijn",
      "ID": "ap01021",
      "STRAAT": "Lange Bremstraat",
      "HUISNR": "70",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.451411777095616, 51.259068221074514]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47054,
      "NAAM": "Apotheek Boomsesteenweg",
      "ID": "ap01023",
      "STRAAT": "Boomsesteenweg",
      "HUISNR": "824",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.382564835822647, 51.15662877805767]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47055,
      "NAAM": "Idealpharma",
      "ID": "ap00848",
      "STRAAT": "Heidestraat",
      "HUISNR": "1",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3542817165101555, 51.174015931781014]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47056,
      "NAAM": "Apotheek Van Hulst",
      "ID": "ap01037",
      "STRAAT": "Driehoekstraat",
      "HUISNR": "91",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4210053833692715, 51.28254917942078]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47057,
      "NAAM": "Coop-apotheken 42",
      "ID": "ap01027",
      "STRAAT": "Julius Vuylstekelaan",
      "HUISNR": "5",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.378988768254832, 51.2289990049187]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47058,
      "NAAM": "Pharma force",
      "ID": "ap01028",
      "STRAAT": "Kloosterstraat",
      "HUISNR": "80",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.417161381693282, 51.281939463638906]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47059,
      "NAAM": "Apotheek Noorderlaan",
      "ID": "ap01030",
      "STRAAT": "Noorderlaan",
      "HUISNR": "104",
      "POSTCODE": "2030",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4211929288967005, 51.25038460938096]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47060,
      "NAAM": "Apotheek Schijnpoort",
      "ID": "ap01032",
      "STRAAT": "Pothoekstraat",
      "HUISNR": "130",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.436877499891038, 51.22504067341454]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47061,
      "NAAM": "Apotheek Anfarma",
      "ID": "ap01033",
      "STRAAT": "Schulstraat",
      "HUISNR": "1",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.407238975175926, 51.20220807042335]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47062,
      "NAAM": "Apotheek de Molen",
      "ID": "ap01036",
      "STRAAT": "Kapelsesteenweg",
      "HUISNR": "531",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.444800920306361, 51.29060889931597]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47063,
      "NAAM": "Apotheek Krols",
      "ID": "ap01031",
      "STRAAT": "Paardenmarkt",
      "HUISNR": "38",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4097183051490525, 51.224922828728886]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47064,
      "NAAM": "Apotheek Farma 2000",
      "ID": "ap01034",
      "STRAAT": "Statiestraat",
      "HUISNR": "71",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.426377814985803, 51.19816260083725]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47065,
      "NAAM": "Apotheek De-Wilde-Zee",
      "ID": "ap01039",
      "STRAAT": "Huidevettersstraat",
      "HUISNR": "38",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.405209435651215, 51.216905246295]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47066,
      "NAAM": "Multipharma 88",
      "ID": "ap01042",
      "STRAAT": "Offerandestraat",
      "HUISNR": "1",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.423574374875623, 51.21963938920069]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47067,
      "NAAM": "Apotheek Anselmo",
      "ID": "ap01044",
      "STRAAT": "Anselmostraat",
      "HUISNR": "28",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4031883109185825, 51.207450904271916]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47068,
      "NAAM": "Apotheek Wymeersch & De Heyn",
      "ID": "ap01045",
      "STRAAT": "Boomsesteenweg",
      "HUISNR": "406",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3883774113075065, 51.18562758824585]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47069,
      "NAAM": "CoopApotheek De Coninckplein",
      "ID": "ap01046",
      "STRAAT": "De Conincplein",
      "HUISNR": "9",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4201370741225, 51.22123619105212]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47070,
      "NAAM": "Apotheek Laporte",
      "ID": "ap01047",
      "STRAAT": "Dorpstraat",
      "HUISNR": "18",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.418432502893895, 51.278671716687406]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47071,
      "NAAM": "Apotheek Smet & Van Assche",
      "ID": "ap01049",
      "STRAAT": "Drakenhoflaan",
      "HUISNR": "60",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4589682764529215, 51.196355958818884]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47072,
      "NAAM": "Apotheek Eliaerts - AFS 49",
      "ID": "ap01050",
      "STRAAT": "Eliaertsstraat",
      "HUISNR": "1",
      "POSTCODE": "2140",
      "DISTRICT": "BORGERHOUT"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.434179301792924, 51.214818775032995]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47073,
      "NAAM": "Apotheek Generaal bvba",
      "ID": "ap01051",
      "STRAAT": "Generaal Lemanstraat",
      "HUISNR": "10",
      "POSTCODE": "2600",
      "DISTRICT": "BERCHEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.410887722687628, 51.197042098986415]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47074,
      "NAAM": "Apotheek Bosuil",
      "ID": "ap01052",
      "STRAAT": "Gijsbrecht van Deurnelaan",
      "HUISNR": "33",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.461389730336495, 51.2322289134923]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47075,
      "NAAM": "Apotheek Cortebeeck",
      "ID": "ap01053",
      "STRAAT": "Grote Markt",
      "HUISNR": "56",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.401349930329201, 51.220986027647655]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47076,
      "NAAM": "Apotheek Levecque",
      "ID": "ap01054",
      "STRAAT": "Italielei",
      "HUISNR": "79",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.414975764709438, 51.22682120787005]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47077,
      "NAAM": "Apotheek Rozemaai",
      "ID": "ap01055",
      "STRAAT": "Jef Van Hoofstraat",
      "HUISNR": "2",
      "POSTCODE": "2030",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.417536642448392, 51.2686526198709]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47078,
      "NAAM": "Apotheek Zaghbour",
      "ID": "ap01056",
      "STRAAT": "Lakborslei",
      "HUISNR": "191",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4542161275371575, 51.22466403284736]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47079,
      "NAAM": "De Lindeboom Sur Plus",
      "ID": "ap01057",
      "STRAAT": "Lange Lozanastraat",
      "HUISNR": "103",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.405271773378893, 51.203452676272384]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47080,
      "NAAM": "Apotheek The Pharm",
      "ID": "ap01058",
      "STRAAT": "Lange Stuivenbergstraat",
      "HUISNR": "76",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.431409371885692, 51.22439989374775]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47081,
      "NAAM": "Apotheek Ronny Smeyers",
      "ID": "ap01059",
      "STRAAT": "Leopoldlei",
      "HUISNR": "103",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.440171463126152, 51.29379804520408]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47082,
      "NAAM": "Apotheek Oomen",
      "ID": "ap01060",
      "STRAAT": "Maantjessteenweg",
      "HUISNR": "2",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.446975972458849, 51.25445702608124]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47083,
      "NAAM": "Apotheek Melkmarkt",
      "ID": "ap01061",
      "STRAAT": "Melkmarkt",
      "HUISNR": "33",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.40289703411759, 51.21986512712181]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47084,
      "NAAM": "Apotheek De Ferm - Cachet nv",
      "ID": "ap01062",
      "STRAAT": "Merksemheidelaan",
      "HUISNR": "2",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.463302528953694, 51.2536342296126]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47085,
      "NAAM": "Apotheek The +Pharm",
      "ID": "ap01063",
      "STRAAT": "Pothoekstraat",
      "HUISNR": "12",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.436536837995761, 51.22077006351486]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47086,
      "NAAM": "Apotheek Verheijen",
      "ID": "ap01064",
      "STRAAT": "Rucaplein",
      "HUISNR": "54",
      "POSTCODE": "2610",
      "DISTRICT": "WILRIJK"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4215685249965535, 51.17853673632123]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47087,
      "NAAM": "Antwerp Port Pharmacy",
      "ID": "ap01065",
      "STRAAT": "Sint-Jansplein",
      "HUISNR": "8",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4185342635090725, 51.22590185565516]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47088,
      "NAAM": "De Lindeboom Apotheek Hoboken",
      "ID": "ap01066",
      "STRAAT": "Verenigde Natieslaan",
      "HUISNR": "45",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.354362242685585, 51.16435645626478]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47089,
      "NAAM": "De Wilde Zee",
      "ID": "ap01039",
      "STRAAT": "Nieuwe Gaanderij",
      "HUISNR": "51",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.405209435651215, 51.216905246295]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47090,
      "NAAM": "De Lindeboom Lange Lozanastraat",
      "ID": "ap01068",
      "STRAAT": "Lange Lozanastraat",
      "HUISNR": "81",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.404825704449045, 51.20426140307823]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47091,
      "NAAM": "Instapharma BV\r\n",
      "ID": "ap01069",
      "STRAAT": "Abdijstraat",
      "HUISNR": "115",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.382613982489257, 51.18853785128181]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47092,
      "NAAM": "Apham NV\r\n",
      "ID": "ap01070",
      "STRAAT": "Antwerpsesteenweg",
      "HUISNR": "182",
      "POSTCODE": "2660",
      "DISTRICT": "HOBOKEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.361035152583459, 51.17891910631459]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47093,
      "NAAM": "Buyck NV",
      "ID": "ap01071",
      "STRAAT": "Bouvaertlaan",
      "HUISNR": "31",
      "POSTCODE": "2050",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.386031828379904, 51.231477637249]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47094,
      "NAAM": "Apotheek Melisse BV\r\n",
      "ID": "ap01072",
      "STRAAT": "Frans Adriaenssensstraat",
      "HUISNR": "126",
      "POSTCODE": "2170",
      "DISTRICT": "MERKSEM"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.442201867032655, 51.2543160588491]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47095,
      "NAAM": "Perifar CV\r\n",
      "ID": "ap01073",
      "STRAAT": "Herentalsebaan",
      "HUISNR": "419",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.47193683821067, 51.20602911825207]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47096,
      "NAAM": "Apotheek De Molen - Homeosan BV",
      "ID": "ap01074",
      "STRAAT": "Kapelsesteenweg",
      "HUISNR": "617",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.441908705517354, 51.294786269616765]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47097,
      "NAAM": "Global E-Care",
      "ID": "ap01075",
      "STRAAT": "Kattendijkdok-Westkaai",
      "HUISNR": "41",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.405645133813281, 51.231574389123445]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47098,
      "NAAM": "Apoteek van het Museum NV",
      "ID": "ap01075",
      "STRAAT": "Lambermontplaats",
      "HUISNR": "16",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.391722323215333, 51.20688132461752]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47099,
      "NAAM": "Apotheek De Moor",
      "ID": "ap01075",
      "STRAAT": "Lange Lobroekstraat",
      "HUISNR": "205",
      "POSTCODE": "2060",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.427656422966142, 51.2313829824642]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47100,
      "NAAM": "Vroome Pharma Management BV",
      "ID": "ap01076",
      "STRAAT": "Oever",
      "HUISNR": "8",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.396647584791177, 51.21811867407169]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47101,
      "NAAM": "Stelieco BV\r\n",
      "ID": "ap01077",
      "STRAAT": "Oorderseweg",
      "HUISNR": "152",
      "POSTCODE": "2180",
      "DISTRICT": "EKEREN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.411773616265006, 51.28167508536012]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47102,
      "NAAM": "Apotheek Verlinden\r\n",
      "ID": "ap01078",
      "STRAAT": "Putsebaan",
      "HUISNR": "24",
      "POSTCODE": "2040",
      "DISTRICT": "BERENDRECHT-ZANDVLIET-LILLO"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.316300135069372, 51.35892573542884]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47103,
      "NAAM": "Apotheek Croket BV",
      "ID": "ap01079",
      "STRAAT": "Quinten Matsijslei",
      "HUISNR": "11",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4164019563185875, 51.214295204224555]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47104,
      "NAAM": "Apotheek Van Moer",
      "ID": "ap01080",
      "STRAAT": "Sint-Bernardsesteenweg",
      "HUISNR": "227",
      "POSTCODE": "2020",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.3757253607231155, 51.186806862382326]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47105,
      "NAAM": "Apotheek Evelyne Djan\r\n",
      "ID": "ap01081",
      "STRAAT": "Van Breestraat",
      "HUISNR": "18",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.408857353110162, 51.21029881663151]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47106,
      "NAAM": "Apharmat BV",
      "ID": "ap01082",
      "STRAAT": "Van Eycklei",
      "HUISNR": "47",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.4172561773098975, 51.209831418589445]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47107,
      "NAAM": "Farduci BV",
      "ID": "ap01082",
      "STRAAT": "Venneborglaan",
      "HUISNR": "174",
      "POSTCODE": "2100",
      "DISTRICT": "DEURNE"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.477330554069726, 51.22465325104953]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47108,
      "NAAM": "Yzewyn BV\r\n",
      "ID": "ap01083",
      "STRAAT": "Bisschoppenhoflaan",
      "HUISNR": "444",
      "POSTCODE": "2100",
      "DISTRICT": "Deurne"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.469617372297269, 51.2341807357151]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47109,
      "NAAM": "Apotheek GA Mast CV",
      "ID": "ap01084",
      "STRAAT": "Kerkstraat",
      "HUISNR": "2",
      "POSTCODE": "2060",
      "DISTRICT": "Antwerpen"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.428888400045593, 51.21757782228582]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47110,
      "NAAM": "G.A. Markgrave - AFS 46",
      "ID": "ap01084",
      "STRAAT": "Markgravelei",
      "HUISNR": "32",
      "POSTCODE": "2018",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.399950171774986, 51.19970914292328]
    }
  }, {
    "type": "Feature",
    "properties": {
      "OBJECTID": 47111,
      "NAAM": "Medi-Market Antwerpen Wapper",
      "ID": "ap01085",
      "STRAAT": "Schuttershofstraat",
      "HUISNR": "48",
      "POSTCODE": "2000",
      "DISTRICT": "ANTWERPEN"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [4.408892300937104, 51.216241496506264]
    }
  }]
};
},{}],"node_modules/fuse.js/dist/fuse.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Fuse.js v5.0.7-beta - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2020 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define("Fuse", [], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Fuse = e() : t.Fuse = e();
}(this, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var i = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        r.d(n, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 5);
  }([function (t, e) {
    function r(t) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    t.exports = {
      isDefined: function isDefined(t) {
        return null != t;
      },
      isArray: function isArray(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t);
      },
      isString: function isString(t) {
        return "string" == typeof t;
      },
      isNumber: function isNumber(t) {
        return "number" == typeof t;
      },
      isObject: function isObject(t) {
        return "object" === r(t);
      },
      toString: function toString(t) {
        return null == t ? "" : function (t) {
          if ("string" == typeof t) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        }(t);
      }
    };
  }, function (t, e, r) {
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    var i = r(7),
        o = r(10),
        s = r(2).MAX_BITS,
        a = function () {
      function t(e, r) {
        var n = r.location,
            i = void 0 === n ? 0 : n,
            a = r.distance,
            c = void 0 === a ? 100 : a,
            u = r.threshold,
            h = void 0 === u ? .6 : u,
            f = r.isCaseSensitive,
            l = void 0 !== f && f,
            v = r.findAllMatches,
            p = void 0 !== v && v,
            d = r.minMatchCharLength,
            y = void 0 === d ? 1 : d,
            g = r.includeMatches,
            m = void 0 !== g && g;
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.options = {
          location: i,
          distance: c,
          threshold: h,
          isCaseSensitive: l,
          findAllMatches: p,
          includeMatches: m,
          minMatchCharLength: y
        }, e.length > s) throw new Error("Pattern length exceeds max of ".concat(s, "."));
        this.pattern = l ? e : e.toLowerCase(), this.patternAlphabet = o(this.pattern);
      }

      var e, r, a;
      return e = t, (r = [{
        key: "searchIn",
        value: function value(t) {
          var e = t.$;
          return this.searchInString(e);
        }
      }, {
        key: "searchInString",
        value: function value(t) {
          var e = this.options,
              r = e.isCaseSensitive,
              n = e.includeMatches;

          if (r || (t = t.toLowerCase()), this.pattern === t) {
            var o = {
              isMatch: !0,
              score: 0
            };
            return n && (o.matchedIndices = [[0, t.length - 1]]), o;
          }

          var s = this.options,
              a = s.location,
              c = s.distance,
              u = s.threshold,
              h = s.findAllMatches,
              f = s.minMatchCharLength;
          return i(t, this.pattern, this.patternAlphabet, {
            location: a,
            distance: c,
            threshold: u,
            findAllMatches: h,
            minMatchCharLength: f,
            includeMatches: n
          });
        }
      }]) && n(e.prototype, r), a && n(e, a), t;
    }();

    t.exports = a;
  }, function (t, e) {
    t.exports.MAX_BITS = 32;
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = e.n,
          n = void 0 === r ? 3 : r,
          i = e.pad,
          o = void 0 === i || i,
          s = e.sort,
          a = void 0 !== s && s,
          c = [];
      if (null == t) return c;
      t = t.toLowerCase(), o && (t = " ".concat(t, " "));
      var u = t.length - n + 1;
      if (u < 1) return c;

      for (; u--;) {
        c[u] = t.substr(u, n);
      }

      return a && c.sort(function (t, e) {
        return t == e ? 0 : t < e ? -1 : 1;
      }), c;
    };
  }, function (t, e, r) {
    var n = r(0),
        i = n.isDefined,
        o = n.isString,
        s = n.isNumber,
        a = n.isArray,
        c = n.toString;

    t.exports = function (t, e) {
      var r = [],
          n = !1;
      return function t(e, u) {
        if (u) {
          var h = u.indexOf("."),
              f = u,
              l = null;
          -1 !== h && (f = u.slice(0, h), l = u.slice(h + 1));
          var v = e[f];
          if (i(v)) if (l || !o(v) && !s(v)) {
            if (a(v)) {
              n = !0;

              for (var p = 0, d = v.length; p < d; p += 1) {
                t(v[p], l);
              }
            } else l && t(v, l);
          } else r.push(c(v));
        } else r.push(e);
      }(t, e), n ? r : r[0];
    };
  }, function (t, e, r) {
    function n(t, e) {
      var r = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? n(Object(r), !0).forEach(function (e) {
          o(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
      }

      return t;
    }

    function o(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function a(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    var c = r(6),
        u = c.BitapSearch,
        h = c.ExtendedSearch,
        f = c.NGramSearch,
        l = r(0),
        v = l.isArray,
        p = l.isDefined,
        d = l.isString,
        y = l.isNumber,
        g = (l.isObject, r(4)),
        m = r(24),
        b = m.createIndex,
        x = m.KeyStore,
        S = r(27),
        k = S.transformMatches,
        M = S.transformScore,
        w = r(2).MAX_BITS,
        _ = {
      isCaseSensitive: !1,
      distance: 100,
      findAllMatches: !1,
      getFn: g,
      includeMatches: !1,
      includeScore: !1,
      keys: [],
      location: 0,
      minMatchCharLength: 1,
      shouldSort: !0,
      sortFn: function sortFn(t, e) {
        return t.score - e.score;
      },
      threshold: .6,
      useExtendedSearch: !1
    },
        O = function () {
      function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        s(this, t), this.options = i({}, _, {}, r), this.options.isCaseSensitive = r.caseSensitive, delete this.options.caseSensitive, this._processKeys(this.options.keys), this.setCollection(e, n);
      }

      var e, r, n;
      return e = t, (r = [{
        key: "setCollection",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.list = t, this.listIsStringArray = d(t[0]), e ? this.setIndex(e) : this.setIndex(this._createIndex());
        }
      }, {
        key: "setIndex",
        value: function value(t) {
          this._indexedList = t;
        }
      }, {
        key: "_processKeys",
        value: function value(e) {
          this._keyStore = new x(e), t.verbose;
        }
      }, {
        key: "_createIndex",
        value: function value() {
          return b(this._keyStore.keys(), this.list, {
            getFn: this.options.getFn
          });
        }
      }, {
        key: "search",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            limit: !1
          },
              r = this.options,
              n = r.useExtendedSearch,
              i = r.shouldSort,
              o = null;
          o = n ? new h(t, this.options) : t.length > w ? new f(t, this.options) : new u(t, this.options);

          var s = this._searchUsing(o);

          return this._computeScore(s), i && this._sort(s), e.limit && y(e.limit) && (s = s.slice(0, e.limit)), this._format(s);
        }
      }, {
        key: "_searchUsing",
        value: function value(t) {
          var e = this._indexedList,
              r = [],
              n = this.options.includeMatches;
          if (this.listIsStringArray) for (var i = 0, o = e.length; i < o; i += 1) {
            var s = e[i],
                a = s.$,
                c = s.idx;

            if (p(a)) {
              var u = t.searchIn(s),
                  h = u.isMatch,
                  f = u.score;

              if (h) {
                var l = {
                  score: f,
                  value: a
                };
                n && (l.indices = u.matchedIndices), r.push({
                  item: a,
                  idx: c,
                  matches: [l]
                });
              }
            }
          } else for (var d = this._keyStore.keys(), y = this._keyStore.count(), g = 0, m = e.length; g < m; g += 1) {
            var b = e[g],
                x = b.$,
                S = b.idx;

            if (p(x)) {
              for (var k = [], M = 0; M < y; M += 1) {
                var w = d[M],
                    _ = x[w];
                if (p(_)) if (v(_)) for (var O = 0, j = _.length; O < j; O += 1) {
                  var A = _[O],
                      P = A.$,
                      I = A.idx;

                  if (p(P)) {
                    var C = t.searchIn(A),
                        L = C.isMatch,
                        F = C.score;

                    if (L) {
                      var N = {
                        score: F,
                        key: w,
                        value: P,
                        idx: I
                      };
                      n && (N.indices = C.matchedIndices), k.push(N);
                    }
                  }
                } else {
                  var E = _.$,
                      $ = t.searchIn(_),
                      z = $.isMatch,
                      D = $.score;
                  if (!z) continue;
                  var T = {
                    score: D,
                    key: w,
                    value: E
                  };
                  n && (T.indices = $.matchedIndices), k.push(T);
                }
              }

              k.length && r.push({
                idx: S,
                item: x,
                matches: k
              });
            }
          }
          return r;
        }
      }, {
        key: "_computeScore",
        value: function value(t) {
          for (var e = 0, r = t.length; e < r; e += 1) {
            for (var n = t[e], i = n.matches, o = i.length, s = 1, a = 0; a < o; a += 1) {
              var c = i[a],
                  u = c.key,
                  h = this._keyStore.get(u, "weight"),
                  f = h > -1 ? h : 1,
                  l = 0 === c.score && h > -1 ? Number.EPSILON : c.score;

              s *= Math.pow(l, f);
            }

            n.score = s;
          }
        }
      }, {
        key: "_sort",
        value: function value(t) {
          t.sort(this.options.sortFn);
        }
      }, {
        key: "_format",
        value: function value(t) {
          var e = [],
              r = this.options,
              n = r.includeMatches,
              i = r.includeScore,
              o = [];
          n && o.push(k), i && o.push(M);

          for (var s = 0, a = t.length; s < a; s += 1) {
            var c = t[s],
                u = c.idx,
                h = {
              item: this.list[u],
              refIndex: u
            };
            if (o.length) for (var f = 0, l = o.length; f < l; f += 1) {
              o[f](c, h);
            }
            e.push(h);
          }

          return e;
        }
      }]) && a(e.prototype, r), n && a(e, n), t;
    }();

    O.createIndex = b, t.exports = O;
  }, function (t, e, r) {
    t.exports = {
      BitapSearch: r(1),
      ExtendedSearch: r(11),
      NGramSearch: r(18)
    };
  }, function (t, e, r) {
    var n = r(8),
        i = r(9);

    t.exports = function (t, e, r, o) {
      for (var s = o.location, a = void 0 === s ? 0 : s, c = o.distance, u = void 0 === c ? 100 : c, h = o.threshold, f = void 0 === h ? .6 : h, l = o.findAllMatches, v = void 0 !== l && l, p = o.minMatchCharLength, d = void 0 === p ? 1 : p, y = o.includeMatches, g = void 0 !== y && y, m = e.length, b = t.length, x = Math.max(0, Math.min(a, b)), S = f, k = t.indexOf(e, x), M = [], w = 0; w < b; w += 1) {
        M[w] = 0;
      }

      if (-1 !== k) {
        var _ = n(e, {
          errors: 0,
          currentLocation: k,
          expectedLocation: x,
          distance: u
        });

        if (S = Math.min(_, S), -1 !== (k = t.lastIndexOf(e, x + m))) {
          var O = n(e, {
            errors: 0,
            currentLocation: k,
            expectedLocation: x,
            distance: u
          });
          S = Math.min(O, S);
        }
      }

      k = -1;

      for (var j = [], A = 1, P = m + b, I = 1 << (m <= 31 ? m - 1 : 30), C = 0; C < m; C += 1) {
        for (var L = 0, F = P; L < F;) {
          n(e, {
            errors: C,
            currentLocation: x + F,
            expectedLocation: x,
            distance: u
          }) <= S ? L = F : P = F, F = Math.floor((P - L) / 2 + L);
        }

        P = F;
        var N = Math.max(1, x - F + 1),
            E = v ? b : Math.min(x + F, b) + m,
            $ = Array(E + 2);
        $[E + 1] = (1 << C) - 1;

        for (var z = E; z >= N; z -= 1) {
          var D = z - 1,
              T = r[t.charAt(D)];

          if (T && (M[D] = 1), $[z] = ($[z + 1] << 1 | 1) & T, 0 !== C && ($[z] |= (j[z + 1] | j[z]) << 1 | 1 | j[z + 1]), $[z] & I && (A = n(e, {
            errors: C,
            currentLocation: D,
            expectedLocation: x,
            distance: u
          })) <= S) {
            if (S = A, (k = D) <= x) break;
            N = Math.max(1, 2 * x - k);
          }
        }

        if (n(e, {
          errors: C + 1,
          currentLocation: x,
          expectedLocation: x,
          distance: u
        }) > S) break;
        j = $;
      }

      var B = {
        isMatch: k >= 0,
        score: A || .001
      };
      return g && (B.matchedIndices = i(M, d)), B;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = e.errors,
          n = void 0 === r ? 0 : r,
          i = e.currentLocation,
          o = void 0 === i ? 0 : i,
          s = e.expectedLocation,
          a = void 0 === s ? 0 : s,
          c = e.distance,
          u = void 0 === c ? 100 : c,
          h = n / t.length,
          f = Math.abs(a - o);
      return u ? h + f / u : f ? 1 : h;
    };
  }, function (t, e) {
    t.exports = function () {
      for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = [], n = -1, i = -1, o = 0, s = t.length; o < s; o += 1) {
        var a = t[o];
        a && -1 === n ? n = o : a || -1 === n || ((i = o - 1) - n + 1 >= e && r.push([n, i]), n = -1);
      }

      return t[o - 1] && o - n >= e && r.push([n, o - 1]), r;
    };
  }, function (t, e) {
    t.exports = function (t) {
      for (var e = {}, r = t.length, n = 0; n < r; n += 1) {
        e[t.charAt(n)] = 0;
      }

      for (var i = 0; i < r; i += 1) {
        e[t.charAt(i)] |= 1 << r - i - 1;
      }

      return e;
    };
  }, function (t, e, r) {
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    var i = r(12),
        o = r(13),
        s = r(14),
        a = r(15),
        c = r(16),
        u = r(17),
        h = r(1),
        f = r(0).isString,
        l = function () {
      function t(e, r) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t);
        var n = r.isCaseSensitive;
        this.query = null, this.options = r, this._fuzzyCache = {}, f(e) && e.trim().length > 0 && (this.pattern = n ? e : e.toLowerCase(), this.query = function (t) {
          return t.split("|").map(function (t) {
            return t.trim().split(/ +/g);
          });
        }(this.pattern));
      }

      var e, r, l;
      return e = t, (r = [{
        key: "searchIn",
        value: function value(t) {
          var e = this.query;
          if (!this.query) return {
            isMatch: !1,
            score: 1
          };
          var r = t.$;
          r = this.options.isCaseSensitive ? r : r.toLowerCase();

          for (var n = !1, i = 0, o = e.length; i < o; i += 1) {
            var s = e[i],
                a = null;
            n = !0;

            for (var c = 0, u = s.length; c < u; c += 1) {
              var h = s[c];

              if (!(a = this._search(h, r)).isMatch) {
                n = !1;
                break;
              }
            }

            if (n) return a;
          }

          return {
            isMatch: !1,
            score: 1
          };
        }
      }, {
        key: "_search",
        value: function value(t, e) {
          if (i.isForPattern(t)) return i.match(t, e);
          if (s.isForPattern(t)) return s.match(t, e);
          if (a.isForPattern(t)) return a.match(t, e);
          if (u.isForPattern(t)) return u.match(t, e);
          if (c.isForPattern(t)) return c.match(t, e);
          if (o.isForPattern(t)) return o.match(t, e);
          var r = this._fuzzyCache[t];
          return r || (r = new h(t, this.options), this._fuzzyCache[t] = r), r.searchInString(e);
        }
      }]) && n(e.prototype, r), l && n(e, l), t;
    }();

    t.exports = l;
  }, function (t, e) {
    var r = function r(t) {
      return t.substr(1);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "'" == t.charAt(0);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: e.indexOf(n) > -1,
          score: 0
        };
      }
    };
  }, function (t, e) {
    var r = function r(t) {
      return t.substr(1);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "!" == t.charAt(0);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: -1 === e.indexOf(n),
          score: 0
        };
      }
    };
  }, function (t, e) {
    var r = function r(t) {
      return t.substr(1);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "^" == t.charAt(0);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: e.startsWith(n),
          score: 0
        };
      }
    };
  }, function (t, e) {
    var r = function r(t) {
      return t.substr(2);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "!" == t.charAt(0) && "^" == t.charAt(1);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: !e.startsWith(n),
          score: 0
        };
      }
    };
  }, function (t, e) {
    var r = function r(t) {
      return t.substr(0, t.length - 1);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "$" == t.charAt(t.length - 1);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: e.endsWith(n),
          score: 0
        };
      }
    };
  }, function (t, e) {
    var r = function r(t) {
      return t.substring(1, t.length - 1);
    };

    t.exports = {
      isForPattern: function isForPattern(t) {
        return "!" == t.charAt(0) && "$" == t.charAt(t.length - 1);
      },
      sanitize: r,
      match: function match(t, e) {
        var n = r(t);
        return {
          isMatch: !e.endsWith(n),
          score: 0
        };
      }
    };
  }, function (t, e, r) {
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function i(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    var o = r(3),
        s = r(19).jaccardDistance,
        a = function () {
      function t(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          threshold: .6
        };
        n(this, t), this.options = r, this.patternNgram = o(e, {
          sort: !0
        });
      }

      var e, r, a;
      return e = t, (r = [{
        key: "searchIn",
        value: function value(t) {
          var e = t.ng;
          e || (e = o(t.$, {
            sort: !0
          }), t.ng = e);
          var r = s(this.patternNgram, e),
              n = r < this.options.threshold;
          return {
            score: n ? r : 1,
            isMatch: n
          };
        }
      }]) && i(e.prototype, r), a && i(e, a), t;
    }();

    t.exports = a;
  }, function (t, e, r) {
    t.exports = {
      jaccardDistance: r(20)
    };
  }, function (t, e, r) {
    var n = r(21),
        i = n.union,
        o = n.intersection;

    t.exports = function (t, e) {
      var r = i(t, e);
      return 1 - o(t, e).length / r.length;
    };
  }, function (t, e, r) {
    t.exports = {
      union: r(22),
      intersection: r(23)
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var r = [], n = 0, i = 0; n < t.length && i < e.length;) {
        var o = t[n],
            s = e[i];
        o < s ? (r.push(o), n += 1) : s < o ? (r.push(s), i += 1) : (r.push(s), n += 1, i += 1);
      }

      for (; n < t.length;) {
        r.push(t[n]), n += 1;
      }

      for (; i < e.length;) {
        r.push(e[i]), i += 1;
      }

      return r;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var r = [], n = 0, i = 0; n < t.length && i < e.length;) {
        var o = t[n],
            s = e[i];
        o == s ? (r.push(o), n += 1, i += 1) : o < s ? n += 1 : (o > s || (n += 1), i += 1);
      }

      return r;
    };
  }, function (t, e, r) {
    t.exports = {
      createIndex: r(25),
      KeyStore: r(26)
    };
  }, function (t, e, r) {
    var n = r(0),
        i = n.isArray,
        o = n.isDefined,
        s = n.isString,
        a = r(4),
        c = r(3);

    t.exports = function (t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.getFn,
          u = void 0 === n ? a : n,
          h = r.ngrams,
          f = void 0 !== h && h,
          l = [];
      if (s(e[0])) for (var v = 0, p = e.length; v < p; v += 1) {
        var d = e[v];

        if (o(d)) {
          var y = {
            $: d,
            idx: v
          };
          f && (y.ng = c(d, {
            sort: !0
          })), l.push(y);
        }
      } else for (var g = t.length, m = 0, b = e.length; m < b; m += 1) {
        for (var x = e[m], S = {
          idx: m,
          $: {}
        }, k = 0; k < g; k += 1) {
          var M = t[k],
              w = u(x, M);
          if (o(w)) if (i(w)) {
            for (var _ = [], O = [{
              arrayIndex: -1,
              value: w
            }]; O.length;) {
              var j = O.pop(),
                  A = j.arrayIndex,
                  P = j.value;
              if (o(P)) if (s(P)) {
                var I = {
                  $: P,
                  idx: A
                };
                f && (I.ng = c(P, {
                  sort: !0
                })), _.push(I);
              } else if (i(P)) for (var C = 0, L = P.length; C < L; C += 1) {
                O.push({
                  arrayIndex: C,
                  value: P[C]
                });
              }
            }

            S.$[M] = _;
          } else {
            var F = {
              $: w
            };
            f && (F.ng = c(w, {
              sort: !0
            })), S.$[M] = F;
          }
        }

        l.push(S);
      }
      return l;
    };
  }, function (t, e, r) {
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    var i = r(0).isString,
        o = function () {
      function t(e) {
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._keys = {}, this._keyNames = [], this._length = e.length, e.length && i(e[0])) for (var r = 0; r < this._length; r += 1) {
          var n = e[r];
          this._keys[n] = {
            weight: 1
          }, this._keyNames.push(n);
        } else {
          for (var o = 0, s = 0; s < this._length; s += 1) {
            var a = e[s];
            if (!a.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
            var c = a.name;
            if (this._keyNames.push(c), !a.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
            var u = a.weight;
            if (u <= 0 || u >= 1) throw new Error('"weight" property in key must bein the range of (0, 1)');
            this._keys[c] = {
              weight: u
            }, o += u;
          }

          for (var h = 0; h < this._length; h += 1) {
            var f = this._keyNames[h],
                l = this._keys[f].weight;
            this._keys[f].weight = l / o;
          }
        }
      }

      var e, r, o;
      return e = t, (r = [{
        key: "get",
        value: function value(t, e) {
          return this._keys[t] ? this._keys[t][e] : -1;
        }
      }, {
        key: "keys",
        value: function value() {
          return this._keyNames;
        }
      }, {
        key: "count",
        value: function value() {
          return this._length;
        }
      }, {
        key: "toJSON",
        value: function value() {
          return JSON.stringify(this._keys);
        }
      }]) && n(e.prototype, r), o && n(e, o), t;
    }();

    t.exports = o;
  }, function (t, e, r) {
    t.exports = {
      transformMatches: r(28),
      transformScore: r(29)
    };
  }, function (t, e, r) {
    var n = r(0),
        i = (n.isArray, n.isDefined);
    n.isString, n.isNumber, n.isObject;

    t.exports = function (t, e) {
      var r = t.matches;
      if (e.matches = [], i(r)) for (var n = 0, o = r.length; n < o; n += 1) {
        var s = r[n];

        if (i(s.indices) && 0 !== s.indices.length) {
          var a = {
            indices: s.indices,
            value: s.value
          };
          s.key && (a.key = s.key), s.idx > -1 && (a.refIndex = s.idx), e.matches.push(a);
        }
      }
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      e.score = t.score;
    };
  }]);
});
},{}],"node_modules/autocompleter/autocomplete.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.autocomplete = factory());
}(this, function () { 'use strict';

  /*
   * https://github.com/kraaden/autocomplete
   * Copyright (c) 2016 Denys Krasnoshchok
   * MIT License
   */
  function autocomplete(settings) {
      // just an alias to minimize JS file size
      var doc = document;
      var container = doc.createElement("div");
      var containerStyle = container.style;
      var userAgent = navigator.userAgent;
      var mobileFirefox = userAgent.indexOf("Firefox") !== -1 && userAgent.indexOf("Mobile") !== -1;
      var debounceWaitMs = settings.debounceWaitMs || 0;
      var preventSubmit = settings.preventSubmit || false;
      // 'keyup' event will not be fired on Mobile Firefox, so we have to use 'input' event instead
      var keyUpEventName = mobileFirefox ? "input" : "keyup";
      var items = [];
      var inputValue = "";
      var minLen = 2;
      var showOnFocus = settings.showOnFocus;
      var selected;
      var keypressCounter = 0;
      var debounceTimer;
      if (settings.minLength !== undefined) {
          minLen = settings.minLength;
      }
      if (!settings.input) {
          throw new Error("input undefined");
      }
      var input = settings.input;
      container.className = "autocomplete " + (settings.className || "");
      // IOS implementation for fixed positioning has many bugs, so we will use absolute positioning
      containerStyle.position = "absolute";
      /**
       * Detach the container from DOM
       */
      function detach() {
          var parent = container.parentNode;
          if (parent) {
              parent.removeChild(container);
          }
      }
      /**
       * Clear debouncing timer if assigned
       */
      function clearDebounceTimer() {
          if (debounceTimer) {
              window.clearTimeout(debounceTimer);
          }
      }
      /**
       * Attach the container to DOM
       */
      function attach() {
          if (!container.parentNode) {
              doc.body.appendChild(container);
          }
      }
      /**
       * Check if container for autocomplete is displayed
       */
      function containerDisplayed() {
          return !!container.parentNode;
      }
      /**
       * Clear autocomplete state and hide container
       */
      function clear() {
          keypressCounter++;
          items = [];
          inputValue = "";
          selected = undefined;
          detach();
      }
      /**
       * Update autocomplete position
       */
      function updatePosition() {
          if (!containerDisplayed()) {
              return;
          }
          containerStyle.height = "auto";
          containerStyle.width = input.offsetWidth + "px";
          var maxHeight = 0;
          var inputRect;
          function calc() {
              var docEl = doc.documentElement;
              var clientTop = docEl.clientTop || doc.body.clientTop || 0;
              var clientLeft = docEl.clientLeft || doc.body.clientLeft || 0;
              var scrollTop = window.pageYOffset || docEl.scrollTop;
              var scrollLeft = window.pageXOffset || docEl.scrollLeft;
              inputRect = input.getBoundingClientRect();
              var top = inputRect.top + input.offsetHeight + scrollTop - clientTop;
              var left = inputRect.left + scrollLeft - clientLeft;
              containerStyle.top = top + "px";
              containerStyle.left = left + "px";
              maxHeight = window.innerHeight - (inputRect.top + input.offsetHeight);
              if (maxHeight < 0) {
                  maxHeight = 0;
              }
              containerStyle.top = top + "px";
              containerStyle.bottom = "";
              containerStyle.left = left + "px";
              containerStyle.maxHeight = maxHeight + "px";
          }
          // the calc method must be called twice, otherwise the calculation may be wrong on resize event (chrome browser)
          calc();
          calc();
          if (settings.customize && inputRect) {
              settings.customize(input, inputRect, container, maxHeight);
          }
      }
      /**
       * Redraw the autocomplete div element with suggestions
       */
      function update() {
          // delete all children from autocomplete DOM container
          while (container.firstChild) {
              container.removeChild(container.firstChild);
          }
          // function for rendering autocomplete suggestions
          var render = function (item, currentValue) {
              var itemElement = doc.createElement("div");
              itemElement.textContent = item.label || "";
              return itemElement;
          };
          if (settings.render) {
              render = settings.render;
          }
          // function to render autocomplete groups
          var renderGroup = function (groupName, currentValue) {
              var groupDiv = doc.createElement("div");
              groupDiv.textContent = groupName;
              return groupDiv;
          };
          if (settings.renderGroup) {
              renderGroup = settings.renderGroup;
          }
          var fragment = doc.createDocumentFragment();
          var prevGroup = "#9?$";
          items.forEach(function (item) {
              if (item.group && item.group !== prevGroup) {
                  prevGroup = item.group;
                  var groupDiv = renderGroup(item.group, inputValue);
                  if (groupDiv) {
                      groupDiv.className += " group";
                      fragment.appendChild(groupDiv);
                  }
              }
              var div = render(item, inputValue);
              if (div) {
                  div.addEventListener("click", function (ev) {
                      settings.onSelect(item, input);
                      clear();
                      ev.preventDefault();
                      ev.stopPropagation();
                  });
                  if (item === selected) {
                      div.className += " selected";
                  }
                  fragment.appendChild(div);
              }
          });
          container.appendChild(fragment);
          if (items.length < 1) {
              if (settings.emptyMsg) {
                  var empty = doc.createElement("div");
                  empty.className = "empty";
                  empty.textContent = settings.emptyMsg;
                  container.appendChild(empty);
              }
              else {
                  clear();
                  return;
              }
          }
          attach();
          updatePosition();
          updateScroll();
      }
      function updateIfDisplayed() {
          if (containerDisplayed()) {
              update();
          }
      }
      function resizeEventHandler() {
          updateIfDisplayed();
      }
      function scrollEventHandler(e) {
          if (e.target !== container) {
              updateIfDisplayed();
          }
          else {
              e.preventDefault();
          }
      }
      function keyupEventHandler(ev) {
          var keyCode = ev.which || ev.keyCode || 0;
          var ignore = [38 /* Up */, 13 /* Enter */, 27 /* Esc */, 39 /* Right */, 37 /* Left */, 16 /* Shift */, 17 /* Ctrl */, 18 /* Alt */, 20 /* CapsLock */, 91 /* WindowsKey */, 9 /* Tab */];
          for (var _i = 0, ignore_1 = ignore; _i < ignore_1.length; _i++) {
              var key = ignore_1[_i];
              if (keyCode === key) {
                  return;
              }
          }
          if (keyCode >= 112 /* F1 */ && keyCode <= 123 /* F12 */) {
              return;
          }
          // the down key is used to open autocomplete
          if (keyCode === 40 /* Down */ && containerDisplayed()) {
              return;
          }
          startFetch(0 /* Keyboard */);
      }
      /**
       * Automatically move scroll bar if selected item is not visible
       */
      function updateScroll() {
          var elements = container.getElementsByClassName("selected");
          if (elements.length > 0) {
              var element = elements[0];
              // make group visible
              var previous = element.previousElementSibling;
              if (previous && previous.className.indexOf("group") !== -1 && !previous.previousElementSibling) {
                  element = previous;
              }
              if (element.offsetTop < container.scrollTop) {
                  container.scrollTop = element.offsetTop;
              }
              else {
                  var selectBottom = element.offsetTop + element.offsetHeight;
                  var containerBottom = container.scrollTop + container.offsetHeight;
                  if (selectBottom > containerBottom) {
                      container.scrollTop += selectBottom - containerBottom;
                  }
              }
          }
      }
      /**
       * Select the previous item in suggestions
       */
      function selectPrev() {
          if (items.length < 1) {
              selected = undefined;
          }
          else {
              if (selected === items[0]) {
                  selected = items[items.length - 1];
              }
              else {
                  for (var i = items.length - 1; i > 0; i--) {
                      if (selected === items[i] || i === 1) {
                          selected = items[i - 1];
                          break;
                      }
                  }
              }
          }
      }
      /**
       * Select the next item in suggestions
       */
      function selectNext() {
          if (items.length < 1) {
              selected = undefined;
          }
          if (!selected || selected === items[items.length - 1]) {
              selected = items[0];
              return;
          }
          for (var i = 0; i < (items.length - 1); i++) {
              if (selected === items[i]) {
                  selected = items[i + 1];
                  break;
              }
          }
      }
      function keydownEventHandler(ev) {
          var keyCode = ev.which || ev.keyCode || 0;
          if (keyCode === 38 /* Up */ || keyCode === 40 /* Down */ || keyCode === 27 /* Esc */) {
              var containerIsDisplayed = containerDisplayed();
              if (keyCode === 27 /* Esc */) {
                  clear();
              }
              else {
                  if (!containerDisplayed || items.length < 1) {
                      return;
                  }
                  keyCode === 38 /* Up */
                      ? selectPrev()
                      : selectNext();
                  update();
              }
              ev.preventDefault();
              if (containerIsDisplayed) {
                  ev.stopPropagation();
              }
              return;
          }
          if (keyCode === 13 /* Enter */) {
              if (selected) {
                  settings.onSelect(selected, input);
                  clear();
              }
              if (preventSubmit) {
                  ev.preventDefault();
              }
          }
      }
      function focusEventHandler() {
          if (showOnFocus) {
              startFetch(1 /* Focus */);
          }
      }
      function startFetch(trigger) {
          // if multiple keys were pressed, before we get update from server,
          // this may cause redrawing our autocomplete multiple times after the last key press.
          // to avoid this, the number of times keyboard was pressed will be
          // saved and checked before redraw our autocomplete box.
          var savedKeypressCounter = ++keypressCounter;
          var val = input.value;
          if (val.length >= minLen || trigger === 1 /* Focus */) {
              clearDebounceTimer();
              debounceTimer = window.setTimeout(function () {
                  settings.fetch(val, function (elements) {
                      if (keypressCounter === savedKeypressCounter && elements) {
                          items = elements;
                          inputValue = val;
                          selected = items.length > 0 ? items[0] : undefined;
                          update();
                      }
                  }, 0 /* Keyboard */);
              }, trigger === 0 /* Keyboard */ ? debounceWaitMs : 0);
          }
          else {
              clear();
          }
      }
      function blurEventHandler() {
          // we need to delay clear, because when we click on an item, blur will be called before click and remove items from DOM
          setTimeout(function () {
              if (doc.activeElement !== input) {
                  clear();
              }
          }, 200);
      }
      /**
       * Fixes #26: on long clicks focus will be lost and onSelect method will not be called
       */
      container.addEventListener("mousedown", function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
      });
      /**
       * This function will remove DOM elements and clear event handlers
       */
      function destroy() {
          input.removeEventListener("focus", focusEventHandler);
          input.removeEventListener("keydown", keydownEventHandler);
          input.removeEventListener(keyUpEventName, keyupEventHandler);
          input.removeEventListener("blur", blurEventHandler);
          window.removeEventListener("resize", resizeEventHandler);
          doc.removeEventListener("scroll", scrollEventHandler, true);
          clearDebounceTimer();
          clear();
          // prevent the update call if there are pending AJAX requests
          keypressCounter++;
      }
      // setup event handlers
      input.addEventListener("keydown", keydownEventHandler);
      input.addEventListener(keyUpEventName, keyupEventHandler);
      input.addEventListener("blur", blurEventHandler);
      input.addEventListener("focus", focusEventHandler);
      window.addEventListener("resize", resizeEventHandler);
      doc.addEventListener("scroll", scrollEventHandler, true);
      return {
          destroy: destroy
      };
  }

  return autocomplete;

}));


},{}],"node_modules/autocompleter/autocomplete.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/compute-scroll-into-view/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isElement(el) {
  return el != null && typeof el === 'object' && el.nodeType === 1;
}

function canOverflow(overflow, skipOverflowHiddenElements) {
  if (skipOverflowHiddenElements && overflow === 'hidden') {
    return false;
  }

  return overflow !== 'visible' && overflow !== 'clip';
}

function getFrameElement(el) {
  if (!el.ownerDocument || !el.ownerDocument.defaultView) {
    return null;
  }

  return el.ownerDocument.defaultView.frameElement;
}

function isHiddenByFrame(el) {
  var frame = getFrameElement(el);

  if (!frame) {
    return false;
  }

  return frame.clientHeight < el.scrollHeight || frame.clientWidth < el.scrollWidth;
}

function isScrollable(el, skipOverflowHiddenElements) {
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    var style = getComputedStyle(el, null);
    return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements) || isHiddenByFrame(el);
  }

  return false;
}

function alignNearest(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
  if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
    return 0;
  }

  if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
    return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
  }

  if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
    return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
  }

  return 0;
}

var _default = function _default(target, options) {
  var scrollMode = options.scrollMode,
      block = options.block,
      inline = options.inline,
      boundary = options.boundary,
      skipOverflowHiddenElements = options.skipOverflowHiddenElements;
  var checkBoundary = typeof boundary === 'function' ? boundary : function (node) {
    return node !== boundary;
  };

  if (!isElement(target)) {
    throw new TypeError('Invalid target');
  }

  var scrollingElement = document.scrollingElement || document.documentElement;
  var frames = [];
  var cursor = target;

  while (isElement(cursor) && checkBoundary(cursor)) {
    cursor = cursor.parentNode;

    if (cursor === scrollingElement) {
      frames.push(cursor);
      break;
    }

    if (cursor === document.body && isScrollable(cursor) && !isScrollable(document.documentElement)) {
      continue;
    }

    if (isScrollable(cursor, skipOverflowHiddenElements)) {
      frames.push(cursor);
    }
  }

  var viewportWidth = window.visualViewport ? visualViewport.width : innerWidth;
  var viewportHeight = window.visualViewport ? visualViewport.height : innerHeight;
  var viewportX = window.scrollX || pageXOffset;
  var viewportY = window.scrollY || pageYOffset;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      targetHeight = _target$getBoundingCl.height,
      targetWidth = _target$getBoundingCl.width,
      targetTop = _target$getBoundingCl.top,
      targetRight = _target$getBoundingCl.right,
      targetBottom = _target$getBoundingCl.bottom,
      targetLeft = _target$getBoundingCl.left;

  var targetBlock = block === 'start' || block === 'nearest' ? targetTop : block === 'end' ? targetBottom : targetTop + targetHeight / 2;
  var targetInline = inline === 'center' ? targetLeft + targetWidth / 2 : inline === 'end' ? targetRight : targetLeft;
  var computations = [];

  for (var index = 0; index < frames.length; index++) {
    var frame = frames[index];

    var _frame$getBoundingCli = frame.getBoundingClientRect(),
        height = _frame$getBoundingCli.height,
        width = _frame$getBoundingCli.width,
        top = _frame$getBoundingCli.top,
        right = _frame$getBoundingCli.right,
        bottom = _frame$getBoundingCli.bottom,
        left = _frame$getBoundingCli.left;

    if (scrollMode === 'if-needed' && targetTop >= 0 && targetLeft >= 0 && targetBottom <= viewportHeight && targetRight <= viewportWidth && targetTop >= top && targetBottom <= bottom && targetLeft >= left && targetRight <= right) {
      return computations;
    }

    var frameStyle = getComputedStyle(frame);
    var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
    var borderTop = parseInt(frameStyle.borderTopWidth, 10);
    var borderRight = parseInt(frameStyle.borderRightWidth, 10);
    var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
    var blockScroll = 0;
    var inlineScroll = 0;
    var scrollbarWidth = 'offsetWidth' in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
    var scrollbarHeight = 'offsetHeight' in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;

    if (scrollingElement === frame) {
      if (block === 'start') {
        blockScroll = targetBlock;
      } else if (block === 'end') {
        blockScroll = targetBlock - viewportHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - viewportHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline;
      } else if (inline === 'center') {
        inlineScroll = targetInline - viewportWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - viewportWidth;
      } else {
        inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
      }

      blockScroll = Math.max(0, blockScroll + viewportY);
      inlineScroll = Math.max(0, inlineScroll + viewportX);
    } else {
      if (block === 'start') {
        blockScroll = targetBlock - top - borderTop;
      } else if (block === 'end') {
        blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
      } else if (block === 'nearest') {
        blockScroll = alignNearest(top, bottom, height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
      } else {
        blockScroll = targetBlock - (top + height / 2) + scrollbarHeight / 2;
      }

      if (inline === 'start') {
        inlineScroll = targetInline - left - borderLeft;
      } else if (inline === 'center') {
        inlineScroll = targetInline - (left + width / 2) + scrollbarWidth / 2;
      } else if (inline === 'end') {
        inlineScroll = targetInline - right + borderRight + scrollbarWidth;
      } else {
        inlineScroll = alignNearest(left, right, width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
      }

      var scrollLeft = frame.scrollLeft,
          scrollTop = frame.scrollTop;
      blockScroll = Math.max(0, Math.min(scrollTop + blockScroll, frame.scrollHeight - height + scrollbarHeight));
      inlineScroll = Math.max(0, Math.min(scrollLeft + inlineScroll, frame.scrollWidth - width + scrollbarWidth));
      targetBlock += scrollTop - blockScroll;
      targetInline += scrollLeft - inlineScroll;
    }

    computations.push({
      el: frame,
      top: blockScroll,
      left: inlineScroll
    });
  }

  return computations;
};

exports.default = _default;
},{}],"node_modules/scroll-into-view-if-needed/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeScrollIntoView = _interopRequireDefault(require("compute-scroll-into-view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = 'scrollBehavior' in document.body.style;
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : (0, _computeScrollIntoView.default)(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior((0, _computeScrollIntoView.default)(target, computeOptions), computeOptions.behavior);
}

var _default = scrollIntoView;
exports.default = _default;
},{"compute-scroll-into-view":"node_modules/compute-scroll-into-view/es/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("leaflet/dist/leaflet");

require("leaflet/dist/leaflet.css");

require("leaflet.markercluster/dist/MarkerCluster.css");

require("leaflet.markercluster/dist/MarkerCluster.Default.css");

var _markerIcon = _interopRequireDefault(require("./images/marker-icon.png"));

var _markerShadow = _interopRequireDefault(require("./images/marker-shadow.png"));

require("./index.css");

var _apotheker = _interopRequireDefault(require("./apotheker.json"));

var _fuse = _interopRequireDefault(require("fuse.js"));

var _autocompleter = _interopRequireDefault(require("autocompleter"));

require("autocompleter/autocomplete.css");

var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
var L = window['L'];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

var map = L.map('mapid').setView([51.222791, 4.409208], 10);

function compare(a, b) {
  var aProps = a.properties;
  var bProps = b.properties;

  if (aProps.NAAM < bProps.NAAM) {
    return -1;
  }

  if (aProps.NAAM > bProps.NAAM) {
    return 1;
  }

  return 0;
}

_apotheker.default.features.sort(compare);

var apothekersObs = [];

_apotheker.default.features.forEach(function (ft) {
  apothekersObs.push(ft.properties);
});

console.log(apothekersObs);
var options = {
  keys: ['NAAM', 'STRAAT', 'POSTCODE', 'HUISNR    ']
};
var fuse = new _fuse.default(apothekersObs, options); // console.log(fuse.search('Valaar'))

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // L.marker([51.222791,4.409208], {
//     icon: L.icon({
//         iconUrl: marker,
//         shadowUrl: markerShadow,
//         iconAnchor: [10.5,41], // point of the icon which will correspond to marker's location
//         shadowAnchor: [10.5,41],  // the same for the shadow
//     })
// }).addTo(map)

var selectedId = '';
var apothekersLayer = L.geoJSON(_apotheker.default, {
  pointToLayer: function pointToLayer(feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: _markerIcon.default,
        shadowUrl: _markerShadow.default,
        iconAnchor: [10.5, 41],
        // point of the icon which will correspond to marker's location
        shadowAnchor: [10.5, 41] // the same for the shadow

      })
    });
  },
  filter: function filter(ft) {
    if (selectedId === '') {
      return true;
    }

    if (ft.properties.OBJECTID == selectedId) {
      return true;
    }

    return false;
  }
});
map.addLayer(apothekersLayer);
Array.prototype.forEach.call(document.getElementsByClassName('leaflet-layer'), function (el) {
  el.classList.add('dark');
});
document.body.classList.add('dark');
Array.prototype.forEach.call(document.getElementsByClassName('leaflet-container'), function (el) {
  el.classList.add('dark');
});
var entries = '';

_apotheker.default.features.forEach(function (ft) {
  var props = ft.properties;
  var district = props.DISTRICT.capitalize();
  var entry = "<div id=\"".concat(props.OBJECTID, "\" class=\"apoListItem\"><h3>").concat(props.NAAM, "</h3><p>").concat(props.STRAAT, " ").concat(props.HUISNR, "<br>").concat(props.POSTCODE, " ").concat(district, "</p></div>");
  entries += entry;
});

var apoList = document.getElementById("apoList");
apoList.innerHTML = entries;
document.getElementsByClassName('apoListItem');
Array.prototype.forEach.call(document.getElementsByClassName('apoListItem'), function (el) {
  el.onclick = function () {
    selectApo(el.id);
  };
});

function selectApo(apoId) {
  if (selectedId !== '') {
    document.getElementById(selectedId).classList.remove("selected");
  }

  selectedId = apoId;
  apothekersLayer.clearLayers(); // inherited from LayerGroup

  apothekersLayer.addData(_apotheker.default);
  var selectedEl = document.getElementById(selectedId);
  selectedEl.classList.add("selected");
  (0, _scrollIntoViewIfNeeded.default)(selectedEl, {
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
    scrollMode: 'if-needed'
  });
  fitbounds();
}

function showAll() {
  if (selectedId !== '') {
    document.getElementById(selectedId).classList.remove("selected");
  }

  selectedId = '';
  apothekersLayer.clearLayers(); // inherited from LayerGroup

  apothekersLayer.addData(_apotheker.default);
  fitbounds();
}

var search = document.getElementById("search");

search.onfocus = function () {
  search.value = '';
  showAll();
};

function fitbounds() {
  map.fitBounds(apothekersLayer.getBounds(), {
    maxZoom: 16
  });
}

fitbounds();
(0, _autocompleter.default)({
  input: search,
  fetch: function fetch(text, update) {
    var searchResult = fuse.search(text);
    var suggestions = [];
    console.log(searchResult);
    searchResult.forEach(function (item) {
      var name = item.item.NAAM;
      var id = item.item.OBJECTID;
      suggestions.push({
        label: name,
        value: id
      });
    });
    update(suggestions);
  },
  onSelect: function onSelect(item) {
    search.value = item.label;
    var id = item.value;
    selectApo(id);
  }
});
},{"leaflet/dist/leaflet":"node_modules/leaflet/dist/leaflet.js","leaflet/dist/leaflet.css":"node_modules/leaflet/dist/leaflet.css","leaflet.markercluster/dist/MarkerCluster.css":"node_modules/leaflet.markercluster/dist/MarkerCluster.css","leaflet.markercluster/dist/MarkerCluster.Default.css":"node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css","./images/marker-icon.png":"images/marker-icon.png","./images/marker-shadow.png":"images/marker-shadow.png","./index.css":"index.css","./apotheker.json":"apotheker.json","fuse.js":"node_modules/fuse.js/dist/fuse.js","autocompleter":"node_modules/autocompleter/autocomplete.js","autocompleter/autocomplete.css":"node_modules/autocompleter/autocomplete.css","scroll-into-view-if-needed":"node_modules/scroll-into-view-if-needed/es/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41017" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/antwerpen-apotherkers.e31bb0bc.js.map