!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DynamicKeepAlive=e():n.DynamicKeepAlive=e()}(window,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function r(n){return null!=n}t.r(e);var o,i={};function c(n){if(n&&n.componentOptions)return n.componentOptions.Ctor.options.name}function u(n){if(n&&n.componentOptions)return n.componentOptions.Ctor.cid}function a(n){var e=i[n];e&&(e.componentInstance.$destroy(),i[n]=null)}function f(n){var e;i[n]?a(n):(e=n,Object.keys(i).filter(function(n){return e===n.substr(n.indexOf("-")+1)})).forEach(function(n){a(n)})}function l(n){var e,t=(e=n,Object.prototype.toString.call(e).slice(8,-1));if(!["String","Array"].includes(t))throw new Error("The parameter type must be String or Array!");"String"===t?f(n):n.forEach(function(n){f(String(n))})}var p={name:"dynamic-keep-alive",render:function(){var n=this.$slots.default,e=function(n){if(Array.isArray(n))for(var e=0;e<n.length;e++){var t=n[e];if(r(t)&&(r(t.componentOptions)||(o=t).isComment&&o.asyncFactory))return t}var o}(n);if(e&&e.componentOptions){var t=u(e),a=c(e),f="".concat(t,"-").concat(a);void 0===a||o.exclude&&o.exclude.includes(a)||(i[f]?e.componentInstance=i[f].componentInstance:i[f]=e,e.data.keepAlive=!0)}return e||n&&n[0]},beforeDestroy:function(){!function(n){var e=n.$children;if(Array.isArray(e)&&0<e.length)for(var t=e.length-1;0<=t;t--){var r=e[t].$vnode,o=u(r),i=c(r);o&&i&&a("".concat(o,"-").concat(i))}}(this)}};e.default={install:function(n,e){!function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o=n}(e),n.component("dynamic-keep-alive",p),n.prototype.$dynamicKeepAlive={removeCache:l}}}}])});