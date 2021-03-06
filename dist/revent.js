(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventEmitter = __webpack_require__(1);
	
	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
	
	exports.EventEmitter = _EventEmitter2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var EventEmitter = function EventEmitter() {
	  var events = {};
	  var self = this;
	
	  this.trigger = function (eventName, data) {
	
	    var callbacks = events[eventName];
	    var i;
	    if (typeof callbacks !== 'undefined') {
	      for (i = 0; i < callbacks.length; i++) {
	        callbacks[i](data);
	      }
	    }
	
	    return self;
	  };
	
	  this.on = function (eventName, callback) {
	
	    var callbacks = events[eventName];
	    if (typeof callbacks === 'undefined') {
	      callbacks = [];
	      events[eventName] = callbacks;
	    }
	    callbacks.push(callback);
	    return self;
	  };
	
	  this.off = function (eventName, callback) {
	
	    if (typeof eventName === 'undefined') {
	      events = {};
	      return self;
	    }
	
	    if (typeof callback === 'undefined') {
	      delete events[eventName];
	      return self;
	    }
	
	    var callbacks = events[eventName];
	    if (callbacks === undefined) {
	      return self;
	    }
	
	    var callbackIndex = callbacks.indexOf(callback);
	
	    if (callbackIndex < 0) {
	      return self;
	    }
	
	    callbacks.splice(callbackIndex, 1);
	    return self;
	  };
	
	  this.getEvents = function () {
	    return events;
	  };
	};
	
	exports['default'] = EventEmitter;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=revent.js.map