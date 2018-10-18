/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(46);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(47)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Immutable = factory());
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(6);
/* unused harmony reexport parsePath */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["b"]; });










/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_MODAL = exports.OPEN_MODAL = 'OPEN_MODAL';
var CLOSE_MODAL = exports.CLOSE_MODAL = 'CLOSE_MODAL';
var SEARCH_MEDIA = exports.SEARCH_MEDIA = 'SEARCH_MEDIA';
var SHOW_SPINNER = exports.SHOW_SPINNER = 'SHOW_SPINNER';
var HIDE_SPINNER = exports.HIDE_SPINNER = 'HIDE_SPINNER';

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    'svg',
    { version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: props.size,
      height: props.size,
      fill: props.color,
      viewBox: '0 0 32 32' },
    props.children
  );
};

Icon.propTypes = {
  children: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

Icon.defaultProps = {
  color: 'white',
  size: 32
};

exports.default = Icon;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImmutable = isImmutable;
exports.denormalizeImmutable = denormalizeImmutable;
/**
 * Helpers to enable Immutable compatibility *without* bringing in
 * the 'immutable' package as a dependency.
 */

/**
 * Check if an object is immutable by checking if it has a key specific
 * to the immutable library.
 *
 * @param  {any} object
 * @return {bool}
 */
function isImmutable(object) {
  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
  object._map && object._map.hasOwnProperty('__ownerID') // Immutable.Record
  ));
}

/**
 * Denormalize an immutable entity.
 *
 * @param  {Schema} schema
 * @param  {Immutable.Map|Immutable.Record} input
 * @param  {function} unvisit
 * @param  {function} getDenormalizedEntity
 * @return {Immutable.Map|Immutable.Record}
 */
function denormalizeImmutable(schema, input, unvisit) {
  return Object.keys(schema).reduce(function (object, key) {
    // Immutable maps cast keys to strings on write so we need to ensure
    // we're accessing them using string keys.
    var stringKey = '' + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_11__generatePath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_12__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_13__withRouter__["a"]; });





























/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(16);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(74);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = openModal;
exports.closeModal = closeModal;
exports.searchMedia = searchMedia;
exports.showSpinner = showSpinner;
exports.hideSpinner = hideSpinner;

var _actionTypes = __webpack_require__(10);

function openModal(mediaId) {
  return {
    type: _actionTypes.OPEN_MODAL,
    payload: { mediaId: mediaId }
  };
}

function closeModal() {
  return {
    type: _actionTypes.CLOSE_MODAL
  };
}

function searchMedia(query) {
  return function (dispatch) {
    dispatch(showSpinner());
    // Fake async function.
    setTimeout(function () {
      dispatch({
        type: _actionTypes.SEARCH_MEDIA,
        payload: {
          query: query
        }
      });

      dispatch(hideSpinner());
    }, 2000);
  };
}

function showSpinner() {
  return {
    type: _actionTypes.SHOW_SPINNER
  };
}

function hideSpinner() {
  return {
    type: _actionTypes.HIDE_SPINNER
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreen = exports.Volume = exports.Pause = exports.Play = undefined;

var _Play = __webpack_require__(133);

var _Play2 = _interopRequireDefault(_Play);

var _Pause = __webpack_require__(134);

var _Pause2 = _interopRequireDefault(_Pause);

var _Volume = __webpack_require__(135);

var _Volume2 = _interopRequireDefault(_Volume);

var _FullScreen = __webpack_require__(136);

var _FullScreen2 = _interopRequireDefault(_FullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Play = _Play2.default;
exports.Pause = _Pause2.default;
exports.Volume = _Volume2.default;
exports.FullScreen = _FullScreen2.default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImmutableUtils = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolymorphicSchema = function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    _classCallCheck(this, PolymorphicSchema);

    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }
    this.define(definition);
  }

  _createClass(PolymorphicSchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = definition;
    }
  }, {
    key: 'getSchemaAttribute',
    value: function getSchemaAttribute(input, parent, key) {
      return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
    }
  }, {
    key: 'inferSchema',
    value: function inferSchema(input, parent, key) {
      if (this.isSingleSchema) {
        return this.schema;
      }

      var attr = this.getSchemaAttribute(input, parent, key);
      return this.schema[attr];
    }
  }, {
    key: 'normalizeValue',
    value: function normalizeValue(value, parent, key, visit, addEntity) {
      var schema = this.inferSchema(value, parent, key);
      if (!schema) {
        return value;
      }
      var normalizedValue = visit(value, parent, key, schema, addEntity);
      return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
    }
  }, {
    key: 'denormalizeValue',
    value: function denormalizeValue(value, unvisit) {
      var schemaKey = (0, _ImmutableUtils.isImmutable)(value) ? value.get('schema') : value.schema;
      if (!this.isSingleSchema && !schemaKey) {
        return value;
      }
      var id = (0, _ImmutableUtils.isImmutable)(value) ? value.get('id') : value.id;
      var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
      return unvisit(id || value, schema);
    }
  }, {
    key: 'isSingleSchema',
    get: function get() {
      return !this._schemaAttribute;
    }
  }]);

  return PolymorphicSchema;
}();

exports.default = PolymorphicSchema;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(__WEBPACK_IMPORTED_MODULE_3_history__["c" /* createLocation */])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(28);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children);

    return null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(60)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ __webpack_exports__["a"] = (generatePath);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(32);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(35);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(20);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(84);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(95);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

__webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  var activeStyle = { color: '#000' };

  return _react2.default.createElement(
    'ul',
    { className: 'Navbar' },
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/', exact: true, activeClassName: 'activeNavItem' },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/about', exact: true, activeClassName: 'activeNavItem' },
        'About'
      )
    )
  );
}

exports.default = Navbar;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(21);

var _Media = __webpack_require__(107);

var _Media2 = _interopRequireDefault(_Media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaContainer = function (_Component) {
  _inherits(MediaContainer, _Component);

  function MediaContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaContainer.__proto__ || Object.getPrototypeOf(MediaContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleOpenModal = function (mediaId) {
      _this.props.openModal(mediaId);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediaContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Media2.default, _extends({
        handleOpenModal: this.handleOpenModal
      }, this.props.data.toJS()));
    }
  }]);

  return MediaContainer;
}(_react.Component);

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'mediaFiles', props.id])
  };
}

var mapDispatchToProps = {
  openModal: _actions.openModal
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MediaContainer);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    props.show && _react2.default.createElement(
      'div',
      { className: 'spinner' },
      _react2.default.createElement('span', { className: 'spinner__loader' })
    )
  );
};

Spinner.propTypes = {
  show: _propTypes2.default.bool
};

Spinner.defaultProps = {
  show: false
};

exports.default = Spinner;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = exports.schema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Entity = __webpack_require__(155);

var _Entity2 = _interopRequireDefault(_Entity);

var _Union = __webpack_require__(156);

var _Union2 = _interopRequireDefault(_Union);

var _Values = __webpack_require__(157);

var _Values2 = _interopRequireDefault(_Values);

var _Array = __webpack_require__(158);

var ArrayUtils = _interopRequireWildcard(_Array);

var _Object = __webpack_require__(159);

var ObjectUtils = _interopRequireWildcard(_Object);

var _ImmutableUtils = __webpack_require__(12);

var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visit = function visit(value, parent, key, schema, addEntity) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
    return value;
  }

  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? ArrayUtils.normalize : ObjectUtils.normalize;
    return method(schema, value, parent, key, visit, addEntity);
  }

  return schema.normalize(value, parent, key, visit, addEntity);
};

var addEntities = function addEntities(entities) {
  return function (schema, processedEntity, value, parent, key) {
    var schemaKey = schema.key;
    var id = schema.getId(value, parent, key);
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }

    var existingEntity = entities[schemaKey][id];
    if (existingEntity) {
      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
    } else {
      entities[schemaKey][id] = processedEntity;
    }
  };
};

var schema = exports.schema = {
  Array: ArrayUtils.default,
  Entity: _Entity2.default,
  Object: ObjectUtils.default,
  Union: _Union2.default,
  Values: _Values2.default
};

var normalize = exports.normalize = function normalize(input, schema) {
  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
  }

  var entities = {};
  var addEntity = addEntities(entities);

  var result = visit(input, input, null, schema, addEntity);
  return { entities: entities, result: result };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);
  if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = ImmutableUtils.isImmutable(entity) ? entity : _extends({}, entity);

    // Need to set this first so that if it is referenced further within the
    // denormalization the reference will already exist.
    cache[schema.key][id] = entityCopy;
    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
  }

  return cache[schema.key][id];
};

var getUnvisit = function getUnvisit(entities) {
  var cache = {};
  var getEntity = getEntities(entities);

  return function unvisit(input, schema) {
    if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
      var method = Array.isArray(schema) ? ArrayUtils.denormalize : ObjectUtils.denormalize;
      return method(schema, input, unvisit);
    }

    if (input === undefined || input === null) {
      return input;
    }

    if (schema instanceof _Entity2.default) {
      return unvisitEntity(input, schema, unvisit, getEntity, cache);
    }

    return schema.denormalize(input, unvisit);
  };
};

var getEntities = function getEntities(entities) {
  var isImmutable = ImmutableUtils.isImmutable(entities);

  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
      return entityOrId;
    }

    return isImmutable ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
  };
};

var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizedData = exports.categories = exports.category = exports.media = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _normalizr = __webpack_require__(41);

var _api = __webpack_require__(160);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var media = exports.media = new _normalizr.schema.Entity('mediaFiles', {}, {
  processStrategy: function processStrategy(media, parent, key) {
    return _extends({}, media, {
      categoryId: parent.id
    });
  }
});

var category = exports.category = new _normalizr.schema.Entity('categories', {
  playlist: new _normalizr.schema.Array(media)
});

var categories = exports.categories = new _normalizr.schema.Array(category);

var normalizedData = exports.normalizedData = (0, _normalizr.normalize)(_api2.default.categories, categories);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (action) {
  return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
};

module.exports = exports['default'];
//# sourceMappingURL=getStateName.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRouterDom = __webpack_require__(13);

var _reduxDevtoolsExtension = __webpack_require__(73);

var _redux = __webpack_require__(18);

var _immutable = __webpack_require__(4);

var _reactRedux = __webpack_require__(7);

var _reactDom = __webpack_require__(37);

var _reduxLogger = __webpack_require__(98);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxThunk = __webpack_require__(99);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _about = __webpack_require__(100);

var _about2 = _interopRequireDefault(_about);

var _home = __webpack_require__(103);

var _home2 = _interopRequireDefault(_home);

var _reducers = __webpack_require__(162);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeContainer = document.getElementById('home-container');

var store = (0, _redux.createStore)(_reducers2.default, (0, _immutable.Map)(), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxLogger2.default, _reduxThunk2.default)));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, strict: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, strict: true, path: '/about', component: _about2.default })
    )
  )
), homeContainer);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["a" /* createBrowserHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(24),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(48);
var invariant = __webpack_require__(49);
var ReactPropTypesSecret = __webpack_require__(50);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(25);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createHashHistory);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(14);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createMemoryHistory);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["b" /* createHashHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(58);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(16);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(__WEBPACK_IMPORTED_MODULE_3_history__["d" /* createMemoryHistory */])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(26);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  "aria-current": __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(62);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(64);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generatePath__ = __webpack_require__(30);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["f" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: Object(__WEBPACK_IMPORTED_MODULE_5__generatePath__["a" /* default */])(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // private, from <Switch>
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(66);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history__["e" /* createPath */])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, Object(__WEBPACK_IMPORTED_MODULE_4_history__["c" /* createLocation */])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(68);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(17);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (match == null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__ = __webpack_require__(30);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__["a" /* default */]);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(17);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(72);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], {
      children: function children(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(18).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(76);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(19), __webpack_require__(75)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(93);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(34);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(90);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(87);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(85);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(19)))

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(36);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(89);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(34);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(94);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(20);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(24),ba=__webpack_require__(96);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?t("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;t("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function z(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});z.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
z.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(z);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=z.extend({data:null}),qb=z.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?t("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,C="function"===typeof Symbol&&Symbol.for,$b=C?Symbol.for("react.element"):60103,ac=C?Symbol.for("react.portal"):60106,bc=C?Symbol.for("react.fragment"):60107,cc=C?Symbol.for("react.strict_mode"):60108,dc=C?Symbol.for("react.profiler"):60114,ec=C?Symbol.for("react.provider"):60109,fc=C?Symbol.for("react.context"):60110,gc=C?Symbol.for("react.async_mode"):60111,hc=C?Symbol.for("react.forward_ref"):60112,ic=C?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef")}if("function"===typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var E={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new D(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new D(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new D(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new D(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new D(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){E[a]=new D(a,3,!0,a,null)});
["capture","download"].forEach(function(a){E[a]=new D(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){E[a]=new D(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){E[a]=new D(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);E[b]=new D(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});E.tabIndex=new D("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=z.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=z.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,h=ed.mouseLeave,k=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,h=ed.pointerLeave,k=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(k=e;k;k=Oa(k))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?t("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}5!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=z.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=z.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=z.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=z}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ga(g,!1)}}var Gd=!0;
function F(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Od(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Od();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Od(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Od(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=z.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=""+yc(b.defaultValue))}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&F(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function G(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function H(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},I={current:Fe},J={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function K(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){G(J,a);G(I,a)}function Je(a){G(J,a);G(I,a)}
function Ke(a,b,c){I.current!==Fe?t("168"):void 0;H(I,b,a);H(J,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=I.current;H(I,b,a);H(J,J.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,G(J,a),G(I,a),H(I,b,a)):G(J,a);H(J,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Te(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}t("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=jf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var r=k.expirationTime;if(r>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>r)h=r}else l=jf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;H(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;G(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?t("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},L={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?t("174"):void 0;return a}
function Af(a,b){H(yf,b,a);H(xf,a,a);H(L,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}G(L,a);H(L,b,a)}function Bf(a){G(L,a);G(xf,a);G(yf,a)}function Cf(a){zf(yf.current);var b=zf(L.current);var c=le(b,a.type);b!==c&&(H(xf,a,a),H(L,c,a))}function Df(a){xf.current===a&&(G(L,a),G(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=K(b)?Ge:I.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?t("110"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function r(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function A(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function S(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function B(e,g,h,k){for(var l=null,m=null,p=g,u=g=0,q=null;null!==p&&u<h.length;u++){p.index>u?(q=p,p=null):q=p.sibling;var v=A(e,p,h[u],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;p=q}if(u===h.length)return c(e,p),l;if(null===p){for(;u<h.length;u++)if(p=r(e,h[u],k))g=f(p,g,u),null===m?l=p:m.sibling=p,m=p;return l}for(p=d(e,p);u<h.length;u++)if(q=S(p,e,u,h[u],k))a&&null!==q.alternate&&p.delete(null===q.key?u:q.key),g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;a&&p.forEach(function(a){return b(e,a)});return l}function P(e,g,h,k){var l=kc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;for(var m=l=null,p=g,u=g=
0,q=null,v=h.next();null!==p&&!v.done;u++,v=h.next()){p.index>u?(q=p,p=null):q=p.sibling;var x=A(e,p,v.value,k);if(null===x){p||(p=q);break}a&&p&&null===x.alternate&&b(e,p);g=f(x,g,u);null===m?l=x:m.sibling=x;m=x;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;u++,v=h.next())v=r(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;u++,v=h.next())v=S(p,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?u:v.key),g=f(v,g,u),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return B(a,d,f,h);if(kc(f))return P(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function M(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!J.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);M(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=K(c)?Ge:I.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;M(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(K(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=K(c)?Ge:I.current,h=c.contextTypes,k=null!==h&&void 0!==h;h=k?He(b,g):Fe;var l=new c(d,h);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=g,k.__reactInternalMemoizedMaskedChildContext=h);Mf(b,c,d,e);d=!0}else{g=b.stateNode;h=b.memoizedProps;g.props=h;var m=g.context;
k=K(c)?Ge:I.current;k=He(b,k);var r=c.getDerivedStateFromProps;(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k);af=!1;var A=b.memoizedState;m=g.state=A;var S=b.updateQueue;null!==S&&(kf(b,S,d,g,e),m=b.memoizedState);h!==d||A!==m||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),m=b.memoizedState),(h=af||Kf(b,c,h,d,A,m,k))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=
b.memoizedProps,g.props=h,m=g.context,k=K(c)?Ge:I.current,k=He(b,k),r=c.getDerivedStateFromProps,(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k),af=!1,m=b.memoizedState,A=g.state=m,S=b.updateQueue,null!==S&&(kf(b,S,d,g,e),A=b.memoizedState),h!==d||m!==A||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),A=b.memoizedState),(r=af||Kf(b,c,h,d,
m,A,k))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,A,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,A,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=A),g.props=d,g.state=A,g.context=k,d=r):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var h=g?null:d.render();b.effectTag|=1;null!==a&&g&&(M(a,b,null,f),b.child=null);M(a,b,h,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?t("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:t("283",c)}}f=He(b,I.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;K(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var h=c.getDerivedStateFromProps;"function"===typeof h&&Ff(b,c,h,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;M(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!J.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:K(b.type)&&Me(b);break;case 3:K(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(M(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(M(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):M(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,M(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,M(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,M(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var h=g.value;
f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!J.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(2===g.tag||3===g.tag){var k=df(c);k.tag=2;ff(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||
k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==
k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}M(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,M(a,b,e,c),b.memoizedProps=d,b.child;default:t("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};
sg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;zf(L.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=we)}te(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&ve(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&qg(b)}};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(h=f.parentNode,h.insertBefore(g,f)):(h=f,h.appendChild(g)),null===h.onclick&&(h.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?re(c,h):"dangerouslySetInnerHTML"===g?ne(c,h):"children"===g?oe(c,h):xc(c,g,h,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:t("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:K(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return K(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,N=null,Mg=null,O=0,Ng=!1,Q=null,Og=!1,Fg=null;function Pg(){if(null!==N)for(var a=N.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;O=0;Ng=!1;N=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:K(b.type)&&Ie(b);break;case 3:K(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),h=b.type;if(null!==e&&null!=b.stateNode)sg(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=
128);else if(f){var k=zf(L.current);if($f(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,r=g;e[Ia]=f;e[Ja]=m;h=void 0;g=l;switch(g){case "iframe":case "object":F("load",e);break;case "video":case "audio":for(l=0;l<fb.length;l++)F(fb[l],e);break;case "source":F("error",e);break;case "img":case "image":case "link":F("error",e);F("load",e);break;case "form":F("reset",e);F("submit",e);break;case "details":F("toggle",e);break;case "input":Bc(e,m);F("invalid",e);ve(r,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};F("invalid",e);ve(r,"onChange");break;case "textarea":ge(e,m),F("invalid",e),ve(r,"onChange")}te(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(h)&&null!=k&&ve(r,h));switch(g){case "input":Wb(e);Fc(e,m,!0);break;case "textarea":Wb(e);ie(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=we)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&qg(b)}else{m=b;e=h;r=f;l=9===g.nodeType?g:g.ownerDocument;k===je.html&&(k=ke(e));k===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof r.is?l=l.createElement(e,{is:r.is}):(l=l.createElement(e),"select"===e&&r.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ia]=m;e[Ja]=f;a:for(m=e,r=b,l=r.child;null!==l;){if(7===l.tag||8===l.tag)m.appendChild(l.stateNode);
else if(6!==l.tag&&null!==l.child){l.child.return=l;l=l.child;continue}if(l===r)break;for(;null===l.sibling;){if(null===l.return||l.return===r)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}r=e;l=h;m=f;var A=g,S=ue(l,m);switch(l){case "iframe":case "object":F("load",r);g=m;break;case "video":case "audio":for(g=0;g<fb.length;g++)F(fb[g],r);g=m;break;case "source":F("error",r);g=m;break;case "img":case "image":case "link":F("error",r);F("load",r);g=m;break;case "form":F("reset",r);F("submit",
r);g=m;break;case "details":F("toggle",r);g=m;break;case "input":Bc(r,m);g=zc(r,m);F("invalid",r);ve(A,"onChange");break;case "option":g=de(r,m);break;case "select":r._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});F("invalid",r);ve(A,"onChange");break;case "textarea":ge(r,m);g=fe(r,m);F("invalid",r);ve(A,"onChange");break;default:g=m}te(l,g);k=void 0;var B=l,P=r,v=g;for(k in v)if(v.hasOwnProperty(k)){var p=v[k];"style"===k?re(P,p):"dangerouslySetInnerHTML"===k?(p=p?p.__html:void 0,
null!=p&&ne(P,p)):"children"===k?"string"===typeof p?("textarea"!==B||""!==p)&&oe(P,p):"number"===typeof p&&oe(P,""+p):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=p&&ve(A,k):null!=p&&xc(P,k,p,S))}switch(l){case "input":Wb(r);Fc(r,m,!1);break;case "textarea":Wb(r);ie(r,m);break;case "option":null!=m.value&&r.setAttribute("value",""+yc(m.value));break;case "select":g=r;g.multiple=!!m.multiple;r=m.value;null!=r?ee(g,!!m.multiple,
r,!1):null!=m.defaultValue&&ee(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(r.onclick=we)}(f=ze(h,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?t("166"):void 0),e=zf(yf.current),zf(L.current),$f(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[Ia]=f,(f=h.nodeValue!==e)&&qg(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),
f[Ia]=h,b.stateNode=f));break;case 13:case 14:break;case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:t("167");default:t("156")}b=N=null;f=a;if(1073741823===O||1073741823!==f.childExpirationTime){h=0;for(e=f.child;null!==e;){g=e.expirationTime;m=e.childExpirationTime;if(0===h||0!==g&&g<h)h=g;if(0===h||0!==m&&m<h)h=m;e=e.sibling}f.childExpirationTime=h}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,O);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,O);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?t("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==O||a!==Mg||null===N)Pg(),Mg=a,O=d,N=Ue(Mg.current,null,O),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==N&&!Tg();)N=Rg(N);else for(;null!==N;)N=Rg(N)}catch(r){if(null===N)e=!0,Dg(r);else{null===N?t("271"):void 0;var f=N,g=f.return;if(null===g)e=!0,Dg(r);else{a:{var h=g,k=f,l=r;g=O;k.effectTag|=512;k.firstEffect=k.lastEffect=null;Ng=!0;l=nf(l,k);do{switch(h.tag){case 5:h.effectTag|=
1024;h.expirationTime=g;g=Cg(h,l,g);gf(h,g);break a;case 2:case 3:k=l;var m=h.stateNode;if(0===(h.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){h.effectTag|=1024;h.expirationTime=g;g=Eg(h,k,g);gf(h,g);break a}}h=h.return}while(null!==h)}N=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==N)a.finishedWork=null;else{b=a.current.alternate;null===b?t("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?t("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:O:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===O&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==O&&b<O&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,t("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?t("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?t("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,r=-1,A=0,S=0,B=e,P=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(r=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;P=B;B=v}for(;;){if(B===
e)break b;P===f&&++A===h&&(m=l);P===k&&++S===g&&(r=l);if(null!==(v=B.nextSibling))break;B=P;P=B.parentNode}B=v}f=-1===m||-1===r?null:{start:m,end:r}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(Q=d;null!==Q;){e=!1;f=void 0;try{for(;null!==Q;){if(Q.effectTag&256){var p=Q.alternate;a:switch(h=Q,h.tag){case 2:case 3:if(h.effectTag&256&&null!==p){var u=p.memoizedProps,x=p.memoizedState,R=h.stateNode;R.props=h.memoizedProps;R.state=h.memoizedState;var yh=R.getSnapshotBeforeUpdate(u,
x);R.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:t("163")}}Q=Q.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===Q?t("178"):void 0,wg(Q,f),null!==Q&&(Q=Q.nextEffect))}for(Q=d;null!==Q;){p=!1;u=void 0;try{for(;null!==Q;){var w=Q.effectTag;w&16&&oe(Q.stateNode,"");if(w&128){var y=Q.alternate;if(null!==y){var q=y.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(w&14){case 2:Ag(Q);Q.effectTag&=-3;break;case 6:Ag(Q);Q.effectTag&=-3;Bg(Q.alternate,
Q);break;case 4:Bg(Q.alternate,Q);break;case 8:x=Q,yg(x),x.return=null,x.child=null,x.alternate&&(x.alternate.child=null,x.alternate.return=null)}Q=Q.nextEffect}}catch(Xa){p=!0,u=Xa}p&&(null===Q?t("178"):void 0,wg(Q,u),null!==Q&&(Q=Q.nextEffect))}q=ye;y=Td();w=q.focusedElem;u=q.selectionRange;if(y!==w&&w&&w.ownerDocument&&Sd(w.ownerDocument.documentElement,w)){null!==u&&Ud(w)&&(y=u.start,q=u.end,void 0===q&&(q=y),"selectionStart"in w?(w.selectionStart=y,w.selectionEnd=Math.min(q,w.value.length)):
(p=w.ownerDocument||document,y=(p?p.defaultView:window).getSelection(),x=w.textContent.length,q=Math.min(u.start,x),u=void 0===u.end?q:Math.min(u.end,x),!y.extend&&q>u&&(x=u,u=q,q=x),x=Rd(w,q),R=Rd(w,u),x&&R&&(1!==y.rangeCount||y.anchorNode!==x.node||y.anchorOffset!==x.offset||y.focusNode!==R.node||y.focusOffset!==R.offset)&&(p=p.createRange(),p.setStart(x.node,x.offset),y.removeAllRanges(),q>u?(y.addRange(p),y.extend(R.node,R.offset)):(p.setEnd(R.node,R.offset),y.addRange(p)))));y=[];for(q=w;q=q.parentNode;)1===
q.nodeType&&y.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof w.focus&&w.focus();for(w=0;w<y.length;w++)q=y[w],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(Q=d;null!==Q;){d=!1;w=void 0;try{for(y=c;null!==Q;){var Sa=Q.effectTag;if(Sa&36){var oc=Q.alternate;q=Q;p=y;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();else{var Ih=oc.memoizedProps,
Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,p));break;case 5:var lg=q.updateQueue;if(null!==lg){u=null;if(null!==q.child)switch(q.child.tag){case 7:u=q.child.stateNode;break;case 2:case 3:u=q.child.stateNode}lf(q,lg,u,p)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&Kh.focus();break;
case 8:break;case 6:break;case 15:break;case 16:break;default:t("163")}}if(Sa&128){var Ac=Q.ref;if(null!==Ac){var mg=Q.stateNode;switch(Q.tag){case 7:var Pd=mg;break;default:Pd=mg}"function"===typeof Ac?Ac(Pd):Ac.current=Pd}}var Lh=Q.nextEffect;Q.nextEffect=null;Q=Lh}}catch(Xa){d=!0,w=Xa}d&&(null===Q?t("178"):void 0,wg(Q,w),null!==Q&&(Q=Q.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=null);a.expirationTime=
b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?t("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?t("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(K(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(K(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);t("171");b=void 0}if(2===a.tag){var c=a.type;if(K(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,K(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:t("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?t("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var h=e;e=function(){var a=zh(f._internalRoot);h.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:t("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:t("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?t("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,Ea.injectEventPluginsByName,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:t("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.1",rendererPackageName:"react-dom"});
var Nh={default:Mh},Oh=Nh&&Mh||Nh;module.exports=Oh.default||Oh;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(97);
} else {
  module.exports = require('./cjs/schedule.development.js');
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * schedule.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=Date,g="function"===typeof setTimeout?setTimeout:void 0,h="function"===typeof clearTimeout?clearTimeout:void 0,l="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,m="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,n="object"===typeof performance&&"function"===typeof performance.now;
exports.unstable_now=void 0;if(n){var p=performance;exports.unstable_now=function(){return p.now()}}else exports.unstable_now=function(){return f.now()};exports.unstable_scheduleWork=void 0;exports.unstable_cancelScheduledWork=void 0;
if(d){var q=null,r=null,t=-1,u=!1,v=!1,w=void 0,x=void 0,y=function(a){w=l(function(b){h(x);a(b)});x=g(function(){m(w);a(exports.unstable_now())},100)},z=0,A=33,B=33,C={didTimeout:!1,timeRemaining:function(){var a=z-exports.unstable_now();return 0<a?a:0}},E=function(a,b){var c=a.scheduledCallback,e=!1;try{c(b),e=!0}finally{exports.unstable_cancelScheduledWork(a),e||(u=!0,window.postMessage(D,"*"))}},D="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===
window&&a.data===D&&(u=!1,null!==q)){if(null!==q){var b=exports.unstable_now();if(!(-1===t||t>b)){a=-1;for(var c=[],e=q;null!==e;){var k=e.timeoutTime;-1!==k&&k<=b?c.push(e):-1!==k&&(-1===a||k<a)&&(a=k);e=e.next}if(0<c.length)for(C.didTimeout=!0,b=0,e=c.length;b<e;b++)E(c[b],C);t=a}}for(a=exports.unstable_now();0<z-a&&null!==q;)a=q,C.didTimeout=!1,E(a,C),a=exports.unstable_now();null===q||v||(v=!0,y(F))}},!1);var F=function(a){v=!1;var b=a-z+B;b<B&&A<B?(8>b&&(b=8),B=b<A?A:b):A=b;z=a+B;u||(u=!0,window.postMessage(D,
"*"))};exports.unstable_scheduleWork=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=exports.unstable_now()+b.timeout);if(-1===t||-1!==c&&c<t)t=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===q?q=a:(b=a.prev=r,null!==b&&(b.next=a));r=a;v||(v=!0,y(F));return a};exports.unstable_cancelScheduledWork=function(a){if(null!==a.prev||q===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,q=b):null!==c?(c.next=null,r=c):r=
q=null}}}else{var G=new Map;exports.unstable_scheduleWork=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=g(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})});G.set(a,c);return b};exports.unstable_cancelScheduledWork=function(a){var b=G.get(a.scheduledCallback);G.delete(a);h(b)}};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(38);

var _navbar2 = _interopRequireDefault(_navbar);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'About' },
        _react2.default.createElement(_navbar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'AboutContent' },
          'A video player built on ',
          _react2.default.createElement(
            'a',
            { href: 'https://reactjs.org/', target: '_blank' },
            'React'
          ),
          '.'
        )
      );
    }
  }]);

  return About;
}(_react.PureComponent);

exports.default = About;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(7);

var _immutable = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(21);

var _Categories = __webpack_require__(104);

var _Categories2 = _interopRequireDefault(_Categories);

var _handleError = __webpack_require__(115);

var _handleError2 = _interopRequireDefault(_handleError);

var _homeLayout = __webpack_require__(118);

var _homeLayout2 = _interopRequireDefault(_homeLayout);

var _Modal = __webpack_require__(120);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalMedia = __webpack_require__(121);

var _ModalMedia2 = _interopRequireDefault(_ModalMedia);

var _Related = __webpack_require__(123);

var _Related2 = _interopRequireDefault(_Related);

var _Spinner = __webpack_require__(40);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _videoPlayer = __webpack_require__(128);

var _videoPlayer2 = _interopRequireDefault(_videoPlayer);

var _Selectors = __webpack_require__(152);

var selectors = _interopRequireWildcard(_Selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalVisible: false,
      media: {}
    }, _this.handleCloseModal = function () {
      _this.props.closeModal();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          categories = _props.categories,
          modal = _props.modal,
          spinner = _props.spinner,
          search = _props.search;


      return _react2.default.createElement(
        _handleError2.default,
        null,
        _react2.default.createElement(
          _homeLayout2.default,
          null,
          _react2.default.createElement(_Related2.default, null),
          _react2.default.createElement(_Categories2.default, {
            categories: categories,
            search: search
          }),
          _react2.default.createElement(_Spinner2.default, { show: spinner.get('show') }),
          modal.get('visible') && _react2.default.createElement(
            _Modal2.default,
            null,
            _react2.default.createElement(
              _ModalMedia2.default,
              {
                handleClick: this.handleCloseModal
              },
              _react2.default.createElement(_videoPlayer2.default, {
                mediaId: modal.get('mediaId')
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

function mapStateToProps(state, props) {
  var categories = selectors.denormalizedCategoriesSelector(state);

  var search = (0, _immutable.List)();
  var query = state.getIn(['data', 'search']);

  if (query) {
    var mediaFiles = state.getIn(['data', 'entities', 'mediaFiles']);
    search = mediaFiles.filter(function (item) {
      return item.get('title').toLowerCase().includes(query) || item.get('author').toLowerCase().includes(query);
    }).toList();
  }

  var modal = state.get('modal');
  var spinner = state.get('spinner');

  return {
    categories: categories,
    search: search,
    modal: modal,
    spinner: spinner
  };
}

var mapDispatchToProps = {
  closeModal: _actions.closeModal
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Category = __webpack_require__(105);

var _Category2 = _interopRequireDefault(_Category);

var _Media = __webpack_require__(39);

var _Media2 = _interopRequireDefault(_Media);

var _navbar = __webpack_require__(38);

var _navbar2 = _interopRequireDefault(_navbar);

var _Search = __webpack_require__(111);

var _Search2 = _interopRequireDefault(_Search);

__webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Categories = function Categories(props) {
  var categories = props.categories,
      search = props.search;


  var renderSearchResults = function renderSearchResults() {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      !!search.size && _react2.default.createElement(
        'ul',
        { className: 'categories__search-results' },
        search.map(function (item) {
          var id = item.get('id');

          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(_Media2.default, { id: id })
          );
        })
      )
    );
  };

  var renderCategories = function renderCategories() {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      props.categories.map(function (category) {
        var _category$toJS = category.toJS(),
            description = _category$toJS.description,
            id = _category$toJS.id,
            playlist = _category$toJS.playlist,
            title = _category$toJS.title;

        return _react2.default.createElement(_Category2.default, {
          key: id,
          description: description,
          playlist: playlist,
          title: title
        });
      })
    );
  };

  return _react2.default.createElement(
    'div',
    { className: 'categories' },
    _react2.default.createElement(_navbar2.default, null),
    _react2.default.createElement(_Search2.default, null),
    renderSearchResults(),
    renderCategories()
  );
};

Categories.propTypes = {
  categories: _propTypes2.default.array,
  search: _propTypes2.default.array
};

Categories.defaultProps = {
  categories: [],
  search: []
};

exports.default = Categories;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Playlist = __webpack_require__(106);

var _Playlist2 = _interopRequireDefault(_Playlist);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function Category(props) {
  return _react2.default.createElement(
    'div',
    { className: 'category' },
    _react2.default.createElement(
      'h2',
      { className: 'category__title' },
      props.title
    ),
    _react2.default.createElement(
      'p',
      { className: 'category__description' },
      props.description
    ),
    _react2.default.createElement(_Playlist2.default, { playlist: props.playlist })
  );
};

Category.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  playlist: _propTypes2.default.array
};

Category.defaultProps = {
  title: 'Empty title',
  description: 'Empty description',
  playlist: []
};

exports.default = Category;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Media = __webpack_require__(39);

var _Media2 = _interopRequireDefault(_Media);

__webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function Playlist(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'playlist' },
    props.playlist.map(function (mediaFile) {
      var id = mediaFile.id;


      return _react2.default.createElement(
        'li',
        { key: id },
        _react2.default.createElement(_Media2.default, { id: id })
      );
    })
  );
};

exports.default = Playlist;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_PureComponent) {
  _inherits(Media, _PureComponent);

  function Media() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(args))), _this), _this.handleMediaClick = function () {
      var _this$props = _this.props,
          handleOpenModal = _this$props.handleOpenModal,
          id = _this$props.id;


      return handleOpenModal(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cover = _props.cover,
          title = _props.title,
          author = _props.author,
          handleClick = _props.handleClick;


      return _react2.default.createElement(
        'div',
        { className: 'media', onClick: this.handleMediaClick },
        _react2.default.createElement(
          'figure',
          { className: 'media__cover' },
          _react2.default.createElement('img', {
            className: 'media__image',
            src: cover,
            alt: title,
            width: '260',
            height: '160'
          })
        ),
        _react2.default.createElement(
          'h3',
          { className: 'media__title' },
          title
        ),
        _react2.default.createElement(
          'p',
          { className: 'media__author' },
          author
        )
      );
    }
  }]);

  return Media;
}(_react.PureComponent);

Media.propTypes = {
  author: _propTypes2.default.string,
  cover: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['video', 'audio']).isRequired
};

Media.defaultProps = {
  author: 'Unknown',
  cover: './src/images/covers/default-image.png'
};

exports.default = Media;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(21);

var _Search = __webpack_require__(112);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchContainer = function (_Component) {
  _inherits(SearchContainer, _Component);

  function SearchContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchContainer.__proto__ || Object.getPrototypeOf(SearchContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleRef = function (element) {
      _this.input = element;
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.searchMedia(_this.input.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Search2.default, {
          handleRef: this.handleRef,
          handleSubmit: this.handleSubmit
        })
      );
    }
  }]);

  return SearchContainer;
}(_react.Component);

var mapDispatchToProps = {
  searchMedia: _actions.searchMedia
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SearchContainer);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(props) {
  return _react2.default.createElement(
    'form',
    {
      className: 'search',
      onSubmit: props.handleSubmit
    },
    _react2.default.createElement('input', {
      autoComplete: 'off',
      className: 'search__field',
      name: 'search',
      placeholder: 'Search for media',
      ref: props.handleRef,
      type: 'text'
    })
  );
};

exports.default = Search;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _regularError = __webpack_require__(116);

var _regularError2 = _interopRequireDefault(_regularError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HandleError = function (_Component) {
  _inherits(HandleError, _Component);

  function HandleError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HandleError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HandleError.__proto__ || Object.getPrototypeOf(HandleError)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HandleError, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      this.setState({
        error: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.error) {
        return _react2.default.createElement(_regularError2.default, null);
      }
      // If everything is ok, it renders app.
      return this.props.children;
    }
  }]);

  return HandleError;
}(_react.Component);

exports.default = HandleError;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegularError() {
  return _react2.default.createElement(
    'div',
    { className: 'RegularError' },
    'Sorry, there was an error. Please, try again or contact me at: ',
    _react2.default.createElement(
      'a',
      { href: 'mailto: velizfabianhoracio@gmail.com' },
      'velizfabianhoracio@gmail.com'
    )
  );
}

exports.default = RegularError;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeLayout(props) {
  return _react2.default.createElement(
    'section',
    { className: 'HomeLayout' },
    props.children
  );
}

exports.default = HomeLayout;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(37);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalContainer = function (_Component) {
  _inherits(modalContainer, _Component);

  function modalContainer() {
    _classCallCheck(this, modalContainer);

    return _possibleConstructorReturn(this, (modalContainer.__proto__ || Object.getPrototypeOf(modalContainer)).apply(this, arguments));
  }

  _createClass(modalContainer, [{
    key: 'render',
    value: function render() {
      var modalContainer = document.getElementById('modal-container');
      return (0, _reactDom.createPortal)(this.props.children, modalContainer);
    }
  }]);

  return modalContainer;
}(_react.Component);

exports.default = modalContainer;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaModal = function MediaModal(props) {
  return _react2.default.createElement(
    'div',
    { className: 'modal-media' },
    _react2.default.createElement(
      'button',
      {
        className: 'modal-media__close',
        onClick: props.handleClick
      },
      'X'
    ),
    props.children
  );
};

exports.default = MediaModal;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(124);

var _Logo2 = _interopRequireDefault(_Logo);

__webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fakePlaylist = [{ id: 1, label: 'Playlist 1', link: 'http://google.com' }, { id: 2, label: 'Playlist 2', link: 'http://google.com' }];

var Related = function Related(props) {
  return _react2.default.createElement(
    'div',
    { className: 'related' },
    _react2.default.createElement(_Logo2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'related__playlist' },
      _react2.default.createElement(
        'h2',
        { className: 'related__playlist-heading' },
        'My Playlist'
      ),
      _react2.default.createElement(
        'ol',
        { className: 'related__playlist-items' },
        fakePlaylist.map(function (playlist) {
          return _react2.default.createElement(
            'li',
            { key: playlist.id },
            _react2.default.createElement(
              'a',
              { href: playlist.link },
              playlist.label
            )
          );
        })
      )
    )
  );
};

exports.default = Related;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(13);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react2.default.createElement(_reactRouterDom.NavLink, {
    className: 'logo',
    exact: true,
    to: '/'
  });
};

exports.default = Logo;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(129);

var _VideoPlayerControls = __webpack_require__(130);

var _VideoPlayerControls2 = _interopRequireDefault(_VideoPlayerControls);

var _FullScreen = __webpack_require__(132);

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _PlayPause = __webpack_require__(138);

var _PlayPause2 = _interopRequireDefault(_PlayPause);

var _ProgressBar = __webpack_require__(140);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Spinner = __webpack_require__(40);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Timer = __webpack_require__(142);

var _Timer2 = _interopRequireDefault(_Timer);

var _video = __webpack_require__(144);

var _video2 = _interopRequireDefault(_video);

var _videoPlayerLayout = __webpack_require__(146);

var _videoPlayerLayout2 = _interopRequireDefault(_videoPlayerLayout);

var _videoTitle = __webpack_require__(148);

var _videoTitle2 = _interopRequireDefault(_videoTitle);

var _Volume = __webpack_require__(150);

var _Volume2 = _interopRequireDefault(_Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlayer = function (_Component) {
  _inherits(VideoPlayer, _Component);

  function VideoPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pause: true,
      duration: 0,
      currentTime: 0,
      loading: false,
      prevVolumeValue: 0,
      volumeValue: 1
    }, _this.togglePlay = function () {
      _this.setState({
        pause: !_this.state.pause
      });
    }, _this.handleLoadedMetadata = function (event) {
      _this.video = event.target;
      _this.setState({
        duration: _this.video.duration
      });
    }, _this.handleTimeUpdate = function (event) {
      _this.setState({
        currentTime: _this.video.currentTime
      });
    }, _this.handleProgressChange = function (event) {
      _this.video.currentTime = event.target.value;
    }, _this.handleSeeking = function (event) {
      _this.setState({
        loading: true
      });
    }, _this.handleSeeked = function (event) {
      _this.setState({
        loading: false
      });
    }, _this.handleVolumeChange = function (event) {
      var volumeValue = event.target.value;

      _this.setState({ volumeValue: volumeValue });
      _this.video.volume = volumeValue;
    }, _this.handleVolumeIconClick = function () {
      var newVolumeValue = _this.state.volumeValue === 0 ? _this.state.prevVolumeValue : 0;

      _this.setState({
        prevVolumeValue: _this.state.volumeValue,
        volumeValue: newVolumeValue
      });

      _this.video.volume = newVolumeValue;
    }, _this.handleFullScreenClick = function () {
      // TODO: Support cross-browser full screen.
      if (!document.webkitIsFullScreen) {
        _this.player.webkitRequestFullscreen();
      } else {
        document.webkitExitFullscreen();
      }
    }, _this.setVideoPlayerRef = function (element) {
      _this.player = element;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoPlayer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _videoPlayerLayout2.default,
        {
          setRef: this.setVideoPlayerRef
        },
        _react2.default.createElement(_videoTitle2.default, {
          title: this.props.media.get('title')
        }),
        _react2.default.createElement(_Spinner2.default, { show: this.state.loading }),
        _react2.default.createElement(
          _VideoPlayerControls2.default,
          null,
          _react2.default.createElement(_PlayPause2.default, {
            pause: this.state.pause,
            handleClick: this.togglePlay
          }),
          _react2.default.createElement(_Timer2.default, {
            duration: (0, _list.formatTime)(this.state.duration),
            currentTime: (0, _list.formatTime)(this.state.currentTime)
          }),
          _react2.default.createElement(_ProgressBar2.default, {
            duration: this.state.duration,
            value: this.state.currentTime,
            handleChange: this.handleProgressChange
          }),
          _react2.default.createElement(_Volume2.default, {
            value: this.state.volumeValue,
            handleChange: this.handleVolumeChange,
            handleClick: this.handleVolumeIconClick
          }),
          _react2.default.createElement(_FullScreen2.default, {
            handleClick: this.handleFullScreenClick
          })
        ),
        _react2.default.createElement(_video2.default, {
          pause: this.state.pause,
          autoplay: true,
          src: this.props.media.get('src'),
          handleLoadedMetadata: this.handleLoadedMetadata,
          handleTimeUpdate: this.handleTimeUpdate,
          handleSeeking: this.handleSeeking,
          handleSeeked: this.handleSeeked
        })
      );
    }
  }]);

  return VideoPlayer;
}(_react.Component);

function mapStateToProps(state, props) {
  var media = state.getIn(['data', 'entities', 'mediaFiles', props.mediaId]);
  return { media: media };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(VideoPlayer);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var leftPad = function leftPad(number) {
  var pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
};

var formatTime = exports.formatTime = function formatTime(secs) {
  var minutes = parseInt(secs / 60, 10);
  var seconds = parseInt(secs % 60, 10);
  return minutes + ':' + leftPad(seconds.toString());
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoPlayerControls = function VideoPlayerControls(props) {
  return _react2.default.createElement(
    'div',
    { className: 'video-player-controls' },
    props.children
  );
};

VideoPlayerControls.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = VideoPlayerControls;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(22);

__webpack_require__(137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullScreen = function FullScreen(props) {
  return _react2.default.createElement(
    'button',
    {
      className: 'full-screen',
      onClick: props.handleClick
    },
    _react2.default.createElement(_Icons.FullScreen, {
      color: props.color,
      size: props.size
    })
  );
};

FullScreen.propTypes = {
  color: _propTypes2.default.string,
  handleClick: _propTypes2.default.func,
  size: _propTypes2.default.number
};

FullScreen.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

exports.default = FullScreen;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(11);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function Play(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6 4l20 12-20 12z' })
  );
};

exports.default = Play;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(11);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pause = function Pause(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4 4h10v24h-10zM18 4h10v24h-10z' })
  );
};

exports.default = Pause;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(11);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Volume = function Volume(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z' }),
    _react2.default.createElement('path', { d: 'M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z' })
  );
};

exports.default = Volume;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(11);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullScreen = function FullScreen(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M32 0h-13l5 5-6 6 3 3 6-6 5 5z' }),
    _react2.default.createElement('path', { d: 'M32 32v-13l-5 5-6-6-3 3 6 6-5 5z' }),
    _react2.default.createElement('path', { d: 'M0 32h13l-5-5 6-6-3-3-6 6-5-5z' }),
    _react2.default.createElement('path', { d: 'M0 0v13l5-5 6 6 3-3-6-6 5-5z' })
  );
};

exports.default = FullScreen;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(22);

__webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayPause = function PlayPause(props) {
  var Component = props.pause ? _Icons.Pause : _Icons.Play;

  return _react2.default.createElement(
    'button',
    { className: 'play-pause', onClick: props.handleClick },
    _react2.default.createElement(Component, {
      size: props.size,
      color: props.color
    })
  );
};

PlayPause.propTypes = {
  color: _propTypes2.default.string,
  handleClick: _propTypes2.default.func,
  size: _propTypes2.default.number
};

PlayPause.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

exports.default = PlayPause;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(141);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 'progress-bar' },
    _react2.default.createElement('input', {
      className: 'progress-bar__field',
      max: props.duration,
      min: 0,
      onChange: props.handleChange,
      type: 'range',
      value: props.value
    })
  );
};

exports.default = ProgressBar;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timer = function Timer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'timer' },
    props.currentTime,
    ' / ',
    props.duration
  );
};

Timer.propTypes = {
  currentTime: _propTypes2.default.number,
  duration: _propTypes2.default.number
};

Timer.defaultProps = {
  currentTime: 0,
  duration: 0
};

exports.default = Timer;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.setRef = function (element) {
      _this.video = element;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Video, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.pause !== this.props.pause) {
        this.togglePlay();
      }
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      this.props.pause ? this.video.play() : this.video.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Video' },
        _react2.default.createElement('video', {
          ref: this.setRef,
          autoPlay: this.props.autoplay,
          src: this.props.src,
          onLoadedMetadata: this.props.handleLoadedMetadata,
          onTimeUpdate: this.props.handleTimeUpdate,
          onSeeking: this.props.handleSeeking,
          onSeeked: this.props.handleSeeked
        })
      );
    }
  }]);

  return Video;
}(_react.Component);

exports.default = Video;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(147);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoPlayerLayout = function VideoPlayerLayout(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'VideoPlayerLayout',
      ref: props.setRef
    },
    props.children
  );
};

exports.default = VideoPlayerLayout;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoTitle = function VideoTitle(props) {
  return _react2.default.createElement(
    'div',
    { className: 'VideoTitle' },
    _react2.default.createElement(
      'h2',
      null,
      props.title
    )
  );
};

exports.default = VideoTitle;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(22);

__webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Volume = function Volume(props) {
  return _react2.default.createElement(
    'div',
    { className: 'volume' },
    _react2.default.createElement(
      'button',
      {
        className: 'volume__button',
        onClick: props.handleClick
      },
      _react2.default.createElement(_Icons.Volume, {
        color: props.color,
        size: props.size
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'volume__range' },
      _react2.default.createElement('input', {
        className: 'volume__input',
        max: 1,
        min: 0,
        onChange: props.handleChange,
        step: 0.05,
        type: 'range',
        value: props.value
      })
    )
  );
};

Volume.propTypes = {
  color: _propTypes2.default.string,
  handleClick: _propTypes2.default.func,
  size: _propTypes2.default.number
};

Volume.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

exports.default = Volume;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categories = __webpack_require__(153);

Object.keys(_categories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _categories[key];
    }
  });
});

var _entities = __webpack_require__(161);

Object.keys(_entities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _entities[key];
    }
  });
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalizedCategoriesSelector = exports.entitiesSelector = exports.categoriesSelector = undefined;

var _reselect = __webpack_require__(154);

var _normalizr = __webpack_require__(41);

var _Schemas = __webpack_require__(42);

var categoriesSelector = exports.categoriesSelector = function categoriesSelector(state) {
  return state.getIn(['data', 'categories']);
};

var entitiesSelector = exports.entitiesSelector = function entitiesSelector(state) {
  return state.getIn(['data', 'entities']);
};

var denormalizedCategoriesSelector = exports.denormalizedCategoriesSelector = (0, _reselect.createSelector)(categoriesSelector, entitiesSelector, function (categoryIds, entities) {
  return categoryIds.map(function (id) {
    return (0, _normalizr.denormalize)(id, _Schemas.category, entities);
  });
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImmutableUtils = __webpack_require__(12);

var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return ImmutableUtils.isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = function () {
  function EntitySchema(key) {
    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, EntitySchema);

    if (!key || typeof key !== 'string') {
      throw new Error('Expected a string key for Entity, but found ' + key + '.');
    }

    var _options$idAttribute = options.idAttribute,
        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
        _options$mergeStrateg = options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = options.processStrategy,
        processStrategy = _options$processStrat === undefined ? function (input) {
      return _extends({}, input);
    } : _options$processStrat;


    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this.define(definition);
  }

  _createClass(EntitySchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
        var schema = definition[key];
        return _extends({}, entitySchema, _defineProperty({}, key, schema));
      }, this.schema || {});
    }
  }, {
    key: 'getId',
    value: function getId(input, parent, key) {
      return this._getId(input, parent, key);
    }
  }, {
    key: 'merge',
    value: function merge(entityA, entityB) {
      return this._mergeStrategy(entityA, entityB);
    }
  }, {
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this = this;

      var processedEntity = this._processStrategy(input, parent, key);
      Object.keys(this.schema).forEach(function (key) {
        if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
          var schema = _this.schema[key];
          processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
        }
      });

      addEntity(this, processedEntity, input, parent, key);
      return this.getId(input, parent, key);
    }
  }, {
    key: 'denormalize',
    value: function denormalize(entity, unvisit) {
      var _this2 = this;

      if (ImmutableUtils.isImmutable(entity)) {
        return ImmutableUtils.denormalizeImmutable(this.schema, entity, unvisit);
      }

      Object.keys(this.schema).forEach(function (key) {
        if (entity.hasOwnProperty(key)) {
          var schema = _this2.schema[key];
          entity[key] = unvisit(entity[key], schema);
        }
      });
      return entity;
    }
  }, {
    key: 'key',
    get: function get() {
      return this._key;
    }
  }, {
    key: 'idAttribute',
    get: function get() {
      return this._idAttribute;
    }
  }]);

  return EntitySchema;
}();

exports.default = EntitySchema;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Polymorphic = __webpack_require__(23);

var _Polymorphic2 = _interopRequireDefault(_Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnionSchema = function (_PolymorphicSchema) {
  _inherits(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    _classCallCheck(this, UnionSchema);

    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }
    return _possibleConstructorReturn(this, (UnionSchema.__proto__ || Object.getPrototypeOf(UnionSchema)).call(this, definition, schemaAttribute));
  }

  _createClass(UnionSchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      return this.normalizeValue(input, parent, key, visit, addEntity);
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      return this.denormalizeValue(input, unvisit);
    }
  }]);

  return UnionSchema;
}(_Polymorphic2.default);

exports.default = UnionSchema;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Polymorphic = __webpack_require__(23);

var _Polymorphic2 = _interopRequireDefault(_Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValuesSchema = function (_PolymorphicSchema) {
  _inherits(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    _classCallCheck(this, ValuesSchema);

    return _possibleConstructorReturn(this, (ValuesSchema.__proto__ || Object.getPrototypeOf(ValuesSchema)).apply(this, arguments));
  }

  _createClass(ValuesSchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this2 = this;

      return Object.keys(input).reduce(function (output, key, index) {
        var value = input[key];
        return value !== undefined && value !== null ? _extends({}, output, _defineProperty({}, key, _this2.normalizeValue(value, input, key, visit, addEntity))) : output;
      }, {});
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      var _this3 = this;

      return Object.keys(input).reduce(function (output, key) {
        var entityOrId = input[key];
        return _extends({}, output, _defineProperty({}, key, _this3.denormalizeValue(entityOrId, unvisit)));
      }, {});
    }
  }]);

  return ValuesSchema;
}(_Polymorphic2.default);

exports.default = ValuesSchema;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Polymorphic = __webpack_require__(23);

var _Polymorphic2 = _interopRequireDefault(_Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);
  if (isArray && definition.length > 1) {
    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = exports.normalize = function normalize(schema, input, parent, key, visit, addEntity) {
  schema = validateSchema(schema);

  var values = getValues(input);

  // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly
  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity);
  });
};

var denormalize = exports.denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = function (_PolymorphicSchema) {
  _inherits(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    _classCallCheck(this, ArraySchema);

    return _possibleConstructorReturn(this, (ArraySchema.__proto__ || Object.getPrototypeOf(ArraySchema)).apply(this, arguments));
  }

  _createClass(ArraySchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this2 = this;

      var values = getValues(input);

      return values.map(function (value, index) {
        return _this2.normalizeValue(value, parent, key, visit, addEntity);
      }).filter(function (value) {
        return value !== undefined && value !== null;
      });
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      var _this3 = this;

      return input && input.map ? input.map(function (value) {
        return _this3.denormalizeValue(value, unvisit);
      }) : input;
    }
  }]);

  return ArraySchema;
}(_Polymorphic2.default);

exports.default = ArraySchema;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ImmutableUtils = __webpack_require__(12);

var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var value = visit(input[key], input, key, localSchema, addEntity);
    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

exports.normalize = _normalize;
var _denormalize = function _denormalize(schema, input, unvisit) {
  if (ImmutableUtils.isImmutable(input)) {
    return ImmutableUtils.denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    if (object[key]) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

exports.denormalize = _denormalize;

var ObjectSchema = function () {
  function ObjectSchema(definition) {
    _classCallCheck(this, ObjectSchema);

    this.define(definition);
  }

  _createClass(ObjectSchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
        var schema = definition[key];
        return _extends({}, entitySchema, _defineProperty({}, key, schema));
      }, this.schema || {});
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _normalize.apply(undefined, [this.schema].concat(args));
    }
  }, {
    key: 'denormalize',
    value: function denormalize() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _denormalize.apply(undefined, [this.schema].concat(args));
    }
  }]);

  return ObjectSchema;
}();

exports.default = ObjectSchema;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ASSET_PATH = "http://192.168.1.56:8080" || '/src/static/';

module.exports = {
  "categories": [{
    "id": "1",
    "description": "Lo mejor de la semana",
    "title": "Destacados",
    "playlist": [{
      "title": "¿Qué es responsive Design?",
      "author": "LeonidasEsteban",
      "type": "video",
      "cover": ASSET_PATH + "/images/responsive.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "1"
    }, {
      "title": "Cómo optimzar la carga de un website",
      "author": "LeonidasEsteban",
      "type": "video",
      "cover": ASSET_PATH + "/images/optimizar.jpg",
      "src": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
      "id": "2"
    }, {
      "title": "Qué es Bitcoin",
      "author": "Yograterol",
      "type": "video",
      "cover": ASSET_PATH + "/images/bitcoin.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "3"
    }, {
      "title": "Que pasó con HTML5",
      "author": "Freddier",
      "type": "video",
      "cover": ASSET_PATH + "/images/html5.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "4"
    }, {
      "title": "Lo mejor de Mejorando.la",
      "author": "Cvander",
      "type": "video",
      "cover": ASSET_PATH + "/images/mejorandola.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "5"
    }]
  }, {
    "id": "2",
    "description": "Lo mejor para concentrarte",
    "title": "Para programar",
    "playlist": [{
      "title": "One more time",
      "author": "Daft Punk",
      "type": "video",
      "cover": ASSET_PATH + "/images/one-more-time.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "6"
    }, {
      "title": "Midnight City",
      "author": "M83",
      "type": "video",
      "cover": ASSET_PATH + "/images/midnight.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "7"
    }, {
      "title": "Solar Sailer",
      "author": "Daft Punk",
      "type": "video",
      "cover": ASSET_PATH + "/images/solar-sailer.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "8"
    }, {
      "title": "The social network",
      "author": "The social network",
      "type": "video",
      "cover": ASSET_PATH + "/images/social.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "9"
    }, {
      "title": "No vaya a ser",
      "author": "Pablo Alboran",
      "type": "video",
      "cover": ASSET_PATH + "/images/no-vaya-a-ser.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "10"
    }]
  }, {
    "id": "3",
    "description": "Si no te queda de otra",
    "title": "Regueton",
    "playlist": [{
      "title": "Despacito",
      "author": "Luis Fonsi",
      "type": "video",
      "cover": ASSET_PATH + "/images/despacito.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "11"
    }, {
      "title": "Echame la culpa",
      "author": "Luis fonsi",
      "type": "video",
      "cover": ASSET_PATH + "/images/echame-la-culpa.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "12"
    }, {
      "title": "Mi Gente",
      "author": "J Bavil",
      "type": "video",
      "cover": ASSET_PATH + "/images/mi-gente.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "13"
    }, {
      "title": "Felices los 4",
      "author": "Maluma",
      "type": "video",
      "cover": ASSET_PATH + "/images/felices.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "14"
    }, {
      "title": "Me Rehúso",
      "author": "Danny Ocean",
      "type": "video",
      "cover": ASSET_PATH + "/images/rehuso.jpg",
      "src": "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
      "id": "15"
    }]
  }]
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var entities = exports.entities = function entities(state) {
  return state.getIn('data', 'entities');
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(163);

var _data2 = _interopRequireDefault(_data);

var _modal = __webpack_require__(164);

var _modal2 = _interopRequireDefault(_modal);

var _spinner = __webpack_require__(165);

var _spinner2 = _interopRequireDefault(_spinner);

var _reduxImmutable = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _reduxImmutable.combineReducers)({
  data: _data2.default,
  modal: _modal2.default,
  spinner: _spinner2.default
});

exports.default = rootReducer;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(4);

var _actionTypes = __webpack_require__(10);

var _Schemas = __webpack_require__(42);

var initialState = (0, _immutable.fromJS)({
  entities: _Schemas.normalizedData.entities,
  categories: _Schemas.normalizedData.result,
  search: ''
});

function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SEARCH_MEDIA:
      return state.set('search', action.payload.query.toLowerCase());
    default:
      return state;
  }
}

exports.default = data;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(4);

var _actionTypes = __webpack_require__(10);

var initialState = (0, _immutable.fromJS)({
  visible: false,
  mediaId: null
});

function modal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.OPEN_MODAL:
      return state.merge({
        visible: true,
        mediaId: action.payload.mediaId
      });
    case _actionTypes.CLOSE_MODAL:
      return state.merge({
        visible: false,
        mediaId: null
      });
    default:
      return state;
  }
}

exports.default = modal;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(4);

var _actionTypes = __webpack_require__(10);

var initialState = (0, _immutable.fromJS)({
  show: false
});

function spinner() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SHOW_SPINNER:
      return state.set('show', true);
    case _actionTypes.HIDE_SPINNER:
      return state.set('show', false);
    default:
      return state;
  }
}

exports.default = spinner;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineReducers = undefined;

var _combineReducers2 = __webpack_require__(167);

var _combineReducers3 = _interopRequireDefault(_combineReducers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.combineReducers = _combineReducers3.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(4);

var _immutable2 = _interopRequireDefault(_immutable);

var _utilities = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (reducers) {
  var getDefaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _immutable2.default.Map;

  var reducerKeys = Object.keys(reducers);

  // eslint-disable-next-line space-infix-ops
  return function () {
    var inputState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultState();
    var action = arguments[1];

    // eslint-disable-next-line no-process-env
    if (false) {
      var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);

      if (warningMessage) {
        // eslint-disable-next-line no-console
        console.error(warningMessage);
      }
    }

    return inputState.withMutations(function (temporaryState) {
      reducerKeys.forEach(function (reducerName) {
        var reducer = reducers[reducerName];
        var currentDomainState = temporaryState.get(reducerName);
        var nextDomainState = reducer(currentDomainState, action);

        (0, _utilities.validateNextState)(nextDomainState, reducerName, action);

        temporaryState.set(reducerName, nextDomainState);
      });
    });
  };
};

module.exports = exports['default'];
//# sourceMappingURL=combineReducers.js.map

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;

var _getStateName2 = __webpack_require__(43);

var _getStateName3 = _interopRequireDefault(_getStateName2);

var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(169);

var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);

var _validateNextState2 = __webpack_require__(170);

var _validateNextState3 = _interopRequireDefault(_validateNextState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getStateName = _getStateName3.default;
exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
exports.validateNextState = _validateNextState3.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(4);

var _immutable2 = _interopRequireDefault(_immutable);

var _getStateName = __webpack_require__(43);

var _getStateName2 = _interopRequireDefault(_getStateName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, reducers, action) {
  var reducerNames = Object.keys(reducers);

  if (!reducerNames.length) {
    return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
  }

  var stateName = (0, _getStateName2.default)(action);

  if (_immutable2.default.isImmutable ? !_immutable2.default.isImmutable(state) : !_immutable2.default.Iterable.isIterable(state)) {
    return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Collection or Immutable.Record with the following properties: "' + reducerNames.join('", "') + '".';
  }

  var unexpectedStatePropertyNames = state.toSeq().keySeq().toArray().filter(function (name) {
    return !reducers.hasOwnProperty(name);
  });

  if (unexpectedStatePropertyNames.length > 0) {
    return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
  }

  return null;
};

module.exports = exports['default'];
//# sourceMappingURL=getUnexpectedInvocationParameterMessage.js.map

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nextState, reducerName, action) {
  // eslint-disable-next-line no-undefined
  if (nextState === undefined) {
    throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
  }
};

module.exports = exports['default'];
//# sourceMappingURL=validateNextState.js.map

/***/ })
/******/ ]);