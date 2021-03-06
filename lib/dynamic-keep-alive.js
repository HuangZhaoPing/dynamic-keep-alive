/*! DynamicKeepAlive.js v2.0.5 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DynamicKeepAlive"] = factory();
	else
		root["DynamicKeepAlive"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["getInstance"]; });


/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue, options) {
    Object(_dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["initOptions"])(options);
    Vue.component(_dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["DynamicKeepAlive"].name, _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["DynamicKeepAlive"]);
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicKeepAlive", function() { return DynamicKeepAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOptions", function() { return initOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
var cache = new Map();
var keys = new Map();
var options = null;

function initOptions() {
  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = {
    max: o.max || 20,
    exclude: o.exclude || []
  };
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

function removeCacheEntry() {
  var name = Array.from(keys.keys())[0];
  handleRemove(name);
}

function remove(val) {
  var rawType = toRawType(val);
  var types = ['String', 'Array'];

  if (!types.includes(rawType)) {
    throw new Error('The parameter type must be String or Array!');
  }

  if (rawType === 'String') {
    handleRemove(val);
  } else {
    val.forEach(function (val) {
      handleRemove(val);
    });
  }
}

function clear() {
  Array.from(keys.keys()).forEach(function (name) {
    handleRemove(name);
  });
}

function getInstance(name) {
  var cached = cache.get(keys.get(name));
  return cached ? cached.componentInstance : null;
}

function handleRemove(name) {
  var key = keys.get(name);
  var cached = cache.get(key);

  if (cached) {
    cached.componentInstance.$destroy();
    cache.delete(key);
    keys.delete(name);
  }
}

var DynamicKeepAlive = {
  name: 'DynamicKeepAlive',
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      var id = componentOptions.Ctor.cid;
      var _componentOptions$Cto = componentOptions.Ctor.options,
          name = _componentOptions$Cto.name,
          noCache = _componentOptions$Cto.noCache;
      var key = [id, name].join('&');

      if (name && !noCache && (!options.exclude || !options.exclude.includes(name)) && !options.noCache) {
        var cached = cache.get(key);

        if (cached) {
          vnode.componentInstance = cached.componentInstance;
          keys.delete(name);
        } else {
          cache.set(key, vnode);

          if (options.max && cache.size > options.max) {
            removeCacheEntry();
          }
        }

        keys.set(name, key);
        vnode.data.keepAlive = true;
      }
    }

    return vnode || slot && slot[0];
  }
};


/***/ })
/******/ ]);
});