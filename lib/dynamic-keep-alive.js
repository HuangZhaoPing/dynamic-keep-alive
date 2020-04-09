/*! DynamicKeepAlive.js v2.0.0 */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeCache", function() { return _dynamic_keep_alive__WEBPACK_IMPORTED_MODULE_0__["removeCache"]; });


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCache", function() { return removeCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOptions", function() { return initOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicKeepAlive", function() { return DynamicKeepAlive; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var cache = {};
var cacheKeys = [];
var options;

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(c) && (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(c.componentOptions) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isAsyncPlaceholder"])(c))) {
        return c;
      }
    }
  }
}

function matches(name) {
  var keys = Object.keys(cache);
  return keys.filter(function (k) {
    return name === k.substr(k.indexOf('-') + 1);
  });
}

function handleRemove(key) {
  var cached = cache[key];

  if (cached) {
    var instance = cached.componentInstance;

    if (instance) {
      instance.$destroy();
      cache[key] = null;
      delete cache[key];
    }
  }
}

function singleRemove(name) {
  if (cache[name]) {
    handleRemove(name);
  } else {
    var keys = matches(name);
    keys.forEach(function (k) {
      handleRemove(k);
    });
  }
}

function multipleRemove(names) {
  names.forEach(function (name) {
    singleRemove(String(name));
  });
}

function handleMaxCache(key) {
  cacheKeys.push(key);

  if (cacheKeys.length > options.max) {
    var k = cacheKeys.shift();
    singleRemove(k);
  }
}

function removeCache(parameter) {
  var rawType = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toRawType"])(parameter);
  var includeType = ['String', 'Array'];

  if (!includeType.includes(rawType)) {
    throw new Error('The parameter type must be String or Array!');
  }

  if (rawType === 'String') {
    singleRemove(parameter);
  } else {
    multipleRemove(parameter);
  }
}
function initOptions() {
  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  o.max = o.max || 20;
  options = o;
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
      var key = "".concat(id, "-").concat(name);

      if (name !== undefined && !noCache && (!options.exclude || !options.exclude.includes(name)) && !options.noCache) {
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
        } else {
          cache[key] = vnode;
          handleMaxCache(key);
        }

        vnode.data.keepAlive = true;
      }
    }

    return vnode || slot && slot[0];
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncPlaceholder", function() { return isAsyncPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return toRawType; });
function isDef(v) {
  return v !== undefined && v !== null;
}
function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/***/ })
/******/ ]);
});