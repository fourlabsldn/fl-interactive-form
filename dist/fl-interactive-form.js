define(['react-dom', 'react'], function (ReactDOM, React) { 'use strict';

ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
React = 'default' in React ? React['default'] : React;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _cof = createCommonjsModule(function (module) {
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
});

var _cof$1 = interopDefault(_cof);


var require$$0$2 = Object.freeze({
	default: _cof$1
});

var _iobject = createCommonjsModule(function (module) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = interopDefault(require$$0$2);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
});

var _iobject$1 = interopDefault(_iobject);


var require$$1$1 = Object.freeze({
	default: _iobject$1
});

var _defined = createCommonjsModule(function (module) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
});

var _defined$1 = interopDefault(_defined);


var require$$0$3 = Object.freeze({
	default: _defined$1
});

var _toIobject = createCommonjsModule(function (module) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = interopDefault(require$$1$1)
  , defined = interopDefault(require$$0$3);
module.exports = function(it){
  return IObject(defined(it));
};
});

var _toIobject$1 = interopDefault(_toIobject);


var require$$1 = Object.freeze({
	default: _toIobject$1
});

var _objectPie = createCommonjsModule(function (module, exports) {
exports.f = {}.propertyIsEnumerable;
});

var _objectPie$1 = interopDefault(_objectPie);
var f$1 = _objectPie.f;

var require$$3 = Object.freeze({
	default: _objectPie$1,
	f: f$1
});

var _propertyDesc = createCommonjsModule(function (module) {
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
});

var _propertyDesc$1 = interopDefault(_propertyDesc);


var require$$0$5 = Object.freeze({
	default: _propertyDesc$1
});

var _isObject = createCommonjsModule(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var _isObject$1 = interopDefault(_isObject);


var require$$3$1 = Object.freeze({
	default: _isObject$1
});

var _toPrimitive = createCommonjsModule(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = interopDefault(require$$3$1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
});

var _toPrimitive$1 = interopDefault(_toPrimitive);


var require$$11 = Object.freeze({
	default: _toPrimitive$1
});

var _has = createCommonjsModule(function (module) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
});

var _has$1 = interopDefault(_has);


var require$$2 = Object.freeze({
	default: _has$1
});

var _fails = createCommonjsModule(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var _fails$1 = interopDefault(_fails);


var require$$0$6 = Object.freeze({
	default: _fails$1
});

var _descriptors = createCommonjsModule(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !interopDefault(require$$0$6)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _descriptors$1 = interopDefault(_descriptors);


var require$$1$2 = Object.freeze({
	default: _descriptors$1
});

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _global$1 = interopDefault(_global);


var require$$4 = Object.freeze({
	default: _global$1
});

var _domCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$3$1)
  , document = interopDefault(require$$4).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var _domCreate$1 = interopDefault(_domCreate);


var require$$2$2 = Object.freeze({
	default: _domCreate$1
});

var _ie8DomDefine = createCommonjsModule(function (module) {
module.exports = !interopDefault(require$$1$2) && !interopDefault(require$$0$6)(function(){
  return Object.defineProperty(interopDefault(require$$2$2)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _ie8DomDefine$1 = interopDefault(_ie8DomDefine);


var require$$2$1 = Object.freeze({
	default: _ie8DomDefine$1
});

var _objectGopd = createCommonjsModule(function (module, exports) {
var pIE            = interopDefault(require$$3)
  , createDesc     = interopDefault(require$$0$5)
  , toIObject      = interopDefault(require$$1)
  , toPrimitive    = interopDefault(require$$11)
  , has            = interopDefault(require$$2)
  , IE8_DOM_DEFINE = interopDefault(require$$2$1)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = interopDefault(require$$1$2) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
});

var _objectGopd$1 = interopDefault(_objectGopd);
var f$$1 = _objectGopd.f;

var require$$0$4 = Object.freeze({
	default: _objectGopd$1,
	f: f$$1
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core$1 = interopDefault(_core);
var version = _core.version;

var require$$0$8 = Object.freeze({
	default: _core$1,
	version: version
});

var _aFunction = createCommonjsModule(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var _aFunction$1 = interopDefault(_aFunction);


var require$$1$3 = Object.freeze({
	default: _aFunction$1
});

var _ctx = createCommonjsModule(function (module) {
// optional / simple context binding
var aFunction = interopDefault(require$$1$3);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
});

var _ctx$1 = interopDefault(_ctx);


var require$$8 = Object.freeze({
	default: _ctx$1
});

var _anObject = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$3$1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var _anObject$1 = interopDefault(_anObject);


var require$$2$3 = Object.freeze({
	default: _anObject$1
});

var _objectDp = createCommonjsModule(function (module, exports) {
var anObject       = interopDefault(require$$2$3)
  , IE8_DOM_DEFINE = interopDefault(require$$2$1)
  , toPrimitive    = interopDefault(require$$11)
  , dP             = Object.defineProperty;

exports.f = interopDefault(require$$1$2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
});

var _objectDp$1 = interopDefault(_objectDp);
var f$2 = _objectDp.f;

var require$$1$4 = Object.freeze({
	default: _objectDp$1,
	f: f$2
});

var _hide = createCommonjsModule(function (module) {
var dP         = interopDefault(require$$1$4)
  , createDesc = interopDefault(require$$0$5);
module.exports = interopDefault(require$$1$2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var _hide$1 = interopDefault(_hide);


var require$$0$9 = Object.freeze({
	default: _hide$1
});

var _export = createCommonjsModule(function (module) {
var global    = interopDefault(require$$4)
  , core      = interopDefault(require$$0$8)
  , ctx       = interopDefault(require$$8)
  , hide      = interopDefault(require$$0$9)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
});

var _export$1 = interopDefault(_export);


var require$$7 = Object.freeze({
	default: _export$1
});

var _objectSap = createCommonjsModule(function (module) {
// most Object methods by ES6 should accept primitives
var $export = interopDefault(require$$7)
  , core    = interopDefault(require$$0$8)
  , fails   = interopDefault(require$$0$6);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
});

var _objectSap$1 = interopDefault(_objectSap);


var require$$0$7 = Object.freeze({
	default: _objectSap$1
});

var es6_object_getOwnPropertyDescriptor = createCommonjsModule(function (module) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = interopDefault(require$$1)
  , $getOwnPropertyDescriptor = interopDefault(require$$0$4).f;

interopDefault(require$$0$7)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
});

var getOwnPropertyDescriptor$2 = createCommonjsModule(function (module) {
var $Object = interopDefault(require$$0$8).Object;
module.exports = function getOwnPropertyDescriptor$2(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
});

var getOwnPropertyDescriptor$3 = interopDefault(getOwnPropertyDescriptor$2);


var require$$0$1 = Object.freeze({
	default: getOwnPropertyDescriptor$3
});

var getOwnPropertyDescriptor$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$1), __esModule: true };
});

var _Object$getOwnPropertyDescriptor = interopDefault(getOwnPropertyDescriptor$1);


var require$$0 = Object.freeze({
	default: _Object$getOwnPropertyDescriptor
});

var _toInteger = createCommonjsModule(function (module) {
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
});

var _toInteger$1 = interopDefault(_toInteger);


var require$$1$7 = Object.freeze({
	default: _toInteger$1
});

var _toLength = createCommonjsModule(function (module) {
// 7.1.15 ToLength
var toInteger = interopDefault(require$$1$7)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
});

var _toLength$1 = interopDefault(_toLength);


var require$$3$2 = Object.freeze({
	default: _toLength$1
});

var _toIndex = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$1$7)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
});

var _toIndex$1 = interopDefault(_toIndex);


var require$$0$11 = Object.freeze({
	default: _toIndex$1
});

var _arrayIncludes = createCommonjsModule(function (module) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = interopDefault(require$$1)
  , toLength  = interopDefault(require$$3$2)
  , toIndex   = interopDefault(require$$0$11);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
});

var _arrayIncludes$1 = interopDefault(_arrayIncludes);


var require$$1$6 = Object.freeze({
	default: _arrayIncludes$1
});

var _shared = createCommonjsModule(function (module) {
var global = interopDefault(require$$4)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
});

var _shared$1 = interopDefault(_shared);


var require$$22 = Object.freeze({
	default: _shared$1
});

var _uid = createCommonjsModule(function (module) {
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
});

var _uid$1 = interopDefault(_uid);


var require$$4$2 = Object.freeze({
	default: _uid$1
});

var _sharedKey = createCommonjsModule(function (module) {
var shared = interopDefault(require$$22)('keys')
  , uid    = interopDefault(require$$4$2);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
});

var _sharedKey$1 = interopDefault(_sharedKey);


var require$$0$12 = Object.freeze({
	default: _sharedKey$1
});

var _objectKeysInternal = createCommonjsModule(function (module) {
var has          = interopDefault(require$$2)
  , toIObject    = interopDefault(require$$1)
  , arrayIndexOf = interopDefault(require$$1$6)(false)
  , IE_PROTO     = interopDefault(require$$0$12)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
});

var _objectKeysInternal$1 = interopDefault(_objectKeysInternal);


var require$$1$5 = Object.freeze({
	default: _objectKeysInternal$1
});

var _enumBugKeys = createCommonjsModule(function (module) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
});

var _enumBugKeys$1 = interopDefault(_enumBugKeys);


var require$$0$13 = Object.freeze({
	default: _enumBugKeys$1
});

var _objectKeys = createCommonjsModule(function (module) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = interopDefault(require$$1$5)
  , enumBugKeys = interopDefault(require$$0$13);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
});

var _objectKeys$1 = interopDefault(_objectKeys);


var require$$5 = Object.freeze({
	default: _objectKeys$1
});

var _objectDps = createCommonjsModule(function (module) {
var dP       = interopDefault(require$$1$4)
  , anObject = interopDefault(require$$2$3)
  , getKeys  = interopDefault(require$$5);

module.exports = interopDefault(require$$1$2) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
});

var _objectDps$1 = interopDefault(_objectDps);


var require$$4$1 = Object.freeze({
	default: _objectDps$1
});

var es6_object_defineProperties = createCommonjsModule(function (module) {
var $export = interopDefault(require$$7);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !interopDefault(require$$1$2), 'Object', {defineProperties: interopDefault(require$$4$1)});
});

var defineProperties$2 = createCommonjsModule(function (module) {
var $Object = interopDefault(require$$0$8).Object;
module.exports = function defineProperties$2(T, D){
  return $Object.defineProperties(T, D);
};
});

var defineProperties$3 = interopDefault(defineProperties$2);


var require$$0$10 = Object.freeze({
	default: defineProperties$3
});

var defineProperties$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$10), __esModule: true };
});

var _Object$defineProperties = interopDefault(defineProperties$1);

var es6_object_defineProperty = createCommonjsModule(function (module) {
var $export = interopDefault(require$$7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !interopDefault(require$$1$2), 'Object', {defineProperty: interopDefault(require$$1$4).f});
});

var defineProperty$2 = createCommonjsModule(function (module) {
var $Object = interopDefault(require$$0$8).Object;
module.exports = function defineProperty$2(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
});

var defineProperty$3 = interopDefault(defineProperty$2);


var require$$0$15 = Object.freeze({
	default: defineProperty$3
});

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$15), __esModule: true };
});

var _Object$defineProperty = interopDefault(defineProperty$1);


var require$$0$14 = Object.freeze({
	default: _Object$defineProperty
});

var _stringAt = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$1$7)
  , defined   = interopDefault(require$$0$3);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
});

var _stringAt$1 = interopDefault(_stringAt);


var require$$1$9 = Object.freeze({
	default: _stringAt$1
});

var _library = createCommonjsModule(function (module) {
module.exports = true;
});

var _library$1 = interopDefault(_library);


var require$$17 = Object.freeze({
	default: _library$1
});

var _redefine = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$9);
});

var _redefine$1 = interopDefault(_redefine);


var require$$25 = Object.freeze({
	default: _redefine$1
});

var _iterators = createCommonjsModule(function (module) {
module.exports = {};
});

var _iterators$1 = interopDefault(_iterators);


var require$$1$10 = Object.freeze({
	default: _iterators$1
});

var _html = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$4).document && document.documentElement;
});

var _html$1 = interopDefault(_html);


var require$$3$4 = Object.freeze({
	default: _html$1
});

var _objectCreate = createCommonjsModule(function (module) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = interopDefault(require$$2$3)
  , dPs         = interopDefault(require$$4$1)
  , enumBugKeys = interopDefault(require$$0$13)
  , IE_PROTO    = interopDefault(require$$0$12)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = interopDefault(require$$2$2)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  interopDefault(require$$3$4).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
});

var _objectCreate$1 = interopDefault(_objectCreate);


var require$$0$19 = Object.freeze({
	default: _objectCreate$1
});

var _wks = createCommonjsModule(function (module) {
var store      = interopDefault(require$$22)('wks')
  , uid        = interopDefault(require$$4$2)
  , Symbol     = interopDefault(require$$4).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$1 = interopDefault(_wks);


var require$$2$4 = Object.freeze({
	default: _wks$1
});

var _setToStringTag = createCommonjsModule(function (module) {
var def = interopDefault(require$$1$4).f
  , has = interopDefault(require$$2)
  , TAG = interopDefault(require$$2$4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
});

var _setToStringTag$1 = interopDefault(_setToStringTag);


var require$$3$5 = Object.freeze({
	default: _setToStringTag$1
});

var _iterCreate = createCommonjsModule(function (module) {
'use strict';
var create         = interopDefault(require$$0$19)
  , descriptor     = interopDefault(require$$0$5)
  , setToStringTag = interopDefault(require$$3$5)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
interopDefault(require$$0$9)(IteratorPrototype, interopDefault(require$$2$4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
});

var _iterCreate$1 = interopDefault(_iterCreate);


var require$$3$3 = Object.freeze({
	default: _iterCreate$1
});

var _toObject = createCommonjsModule(function (module) {
// 7.1.13 ToObject(argument)
var defined = interopDefault(require$$0$3);
module.exports = function(it){
  return Object(defined(it));
};
});

var _toObject$1 = interopDefault(_toObject);


var require$$6 = Object.freeze({
	default: _toObject$1
});

var _objectGpo = createCommonjsModule(function (module) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = interopDefault(require$$2)
  , toObject    = interopDefault(require$$6)
  , IE_PROTO    = interopDefault(require$$0$12)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
});

var _objectGpo$1 = interopDefault(_objectGpo);


var require$$1$11 = Object.freeze({
	default: _objectGpo$1
});

var _iterDefine = createCommonjsModule(function (module) {
'use strict';
var LIBRARY        = interopDefault(require$$17)
  , $export        = interopDefault(require$$7)
  , redefine       = interopDefault(require$$25)
  , hide           = interopDefault(require$$0$9)
  , has            = interopDefault(require$$2)
  , Iterators      = interopDefault(require$$1$10)
  , $iterCreate    = interopDefault(require$$3$3)
  , setToStringTag = interopDefault(require$$3$5)
  , getPrototypeOf = interopDefault(require$$1$11)
  , ITERATOR       = interopDefault(require$$2$4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
});

var _iterDefine$1 = interopDefault(_iterDefine);


var require$$0$18 = Object.freeze({
	default: _iterDefine$1
});

var es6_string_iterator = createCommonjsModule(function (module) {
'use strict';
var $at  = interopDefault(require$$1$9)(true);

// 21.1.3.27 String.prototype[@@iterator]()
interopDefault(require$$0$18)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
});

var _addToUnscopables = createCommonjsModule(function (module) {
module.exports = function(){ /* empty */ };
});

var _addToUnscopables$1 = interopDefault(_addToUnscopables);


var require$$4$3 = Object.freeze({
	default: _addToUnscopables$1
});

var _iterStep = createCommonjsModule(function (module) {
module.exports = function(done, value){
  return {value: value, done: !!done};
};
});

var _iterStep$1 = interopDefault(_iterStep);


var require$$3$6 = Object.freeze({
	default: _iterStep$1
});

var es6_array_iterator = createCommonjsModule(function (module) {
'use strict';
var addToUnscopables = interopDefault(require$$4$3)
  , step             = interopDefault(require$$3$6)
  , Iterators        = interopDefault(require$$1$10)
  , toIObject        = interopDefault(require$$1);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = interopDefault(require$$0$18)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
});

var web_dom_iterable = createCommonjsModule(function (module) {
var global        = interopDefault(require$$4)
  , hide          = interopDefault(require$$0$9)
  , Iterators     = interopDefault(require$$1$10)
  , TO_STRING_TAG = interopDefault(require$$2$4)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
});

var _wksExt = createCommonjsModule(function (module, exports) {
exports.f = interopDefault(require$$2$4);
});

var _wksExt$1 = interopDefault(_wksExt);
var f$3 = _wksExt.f;

var require$$1$12 = Object.freeze({
	default: _wksExt$1,
	f: f$3
});

var iterator$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$1$12).f('iterator');
});

var iterator$3 = interopDefault(iterator$2);


var require$$0$17 = Object.freeze({
	default: iterator$3
});

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$17), __esModule: true };
});

var iterator$1 = interopDefault(iterator);


var require$$1$8 = Object.freeze({
	default: iterator$1
});

var _meta = createCommonjsModule(function (module) {
var META     = interopDefault(require$$4$2)('meta')
  , isObject = interopDefault(require$$3$1)
  , has      = interopDefault(require$$2)
  , setDesc  = interopDefault(require$$1$4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !interopDefault(require$$0$6)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var _meta$1 = interopDefault(_meta);
var KEY = _meta.KEY;
var NEED = _meta.NEED;
var fastKey = _meta.fastKey;
var getWeak = _meta.getWeak;
var onFreeze = _meta.onFreeze;

var require$$24 = Object.freeze({
	default: _meta$1,
	KEY: KEY,
	NEED: NEED,
	fastKey: fastKey,
	getWeak: getWeak,
	onFreeze: onFreeze
});

var _wksDefine = createCommonjsModule(function (module) {
var global         = interopDefault(require$$4)
  , core           = interopDefault(require$$0$8)
  , LIBRARY        = interopDefault(require$$17)
  , wksExt         = interopDefault(require$$1$12)
  , defineProperty = interopDefault(require$$1$4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
});

var _wksDefine$1 = interopDefault(_wksDefine);


var require$$0$22 = Object.freeze({
	default: _wksDefine$1
});

var _keyof = createCommonjsModule(function (module) {
var getKeys   = interopDefault(require$$5)
  , toIObject = interopDefault(require$$1);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
});

var _keyof$1 = interopDefault(_keyof);


var require$$16 = Object.freeze({
	default: _keyof$1
});

var _objectGops = createCommonjsModule(function (module, exports) {
exports.f = Object.getOwnPropertySymbols;
});

var _objectGops$1 = interopDefault(_objectGops);
var f$4 = _objectGops.f;

var require$$4$4 = Object.freeze({
	default: _objectGops$1,
	f: f$4
});

var _enumKeys = createCommonjsModule(function (module) {
// all enumerable object keys, includes symbols
var getKeys = interopDefault(require$$5)
  , gOPS    = interopDefault(require$$4$4)
  , pIE     = interopDefault(require$$3);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
});

var _enumKeys$1 = interopDefault(_enumKeys);


var require$$15 = Object.freeze({
	default: _enumKeys$1
});

var _isArray = createCommonjsModule(function (module) {
// 7.2.2 IsArray(argument)
var cof = interopDefault(require$$0$2);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
});

var _isArray$1 = interopDefault(_isArray);


var require$$14 = Object.freeze({
	default: _isArray$1
});

var _objectGopn = createCommonjsModule(function (module, exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = interopDefault(require$$1$5)
  , hiddenKeys = interopDefault(require$$0$13).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
});

var _objectGopn$1 = interopDefault(_objectGopn);
var f$6 = _objectGopn.f;

var require$$0$23 = Object.freeze({
	default: _objectGopn$1,
	f: f$6
});

var _objectGopnExt = createCommonjsModule(function (module) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = interopDefault(require$$1)
  , gOPN      = interopDefault(require$$0$23).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
});

var _objectGopnExt$1 = interopDefault(_objectGopnExt);
var f$5 = _objectGopnExt.f;

var require$$8$1 = Object.freeze({
	default: _objectGopnExt$1,
	f: f$5
});

var es6_symbol = createCommonjsModule(function (module) {
'use strict';
// ECMAScript 6 symbols shim
var global         = interopDefault(require$$4)
  , has            = interopDefault(require$$2)
  , DESCRIPTORS    = interopDefault(require$$1$2)
  , $export        = interopDefault(require$$7)
  , redefine       = interopDefault(require$$25)
  , META           = interopDefault(require$$24).KEY
  , $fails         = interopDefault(require$$0$6)
  , shared         = interopDefault(require$$22)
  , setToStringTag = interopDefault(require$$3$5)
  , uid            = interopDefault(require$$4$2)
  , wks            = interopDefault(require$$2$4)
  , wksExt         = interopDefault(require$$1$12)
  , wksDefine      = interopDefault(require$$0$22)
  , keyOf          = interopDefault(require$$16)
  , enumKeys       = interopDefault(require$$15)
  , isArray        = interopDefault(require$$14)
  , anObject       = interopDefault(require$$2$3)
  , toIObject      = interopDefault(require$$1)
  , toPrimitive    = interopDefault(require$$11)
  , createDesc     = interopDefault(require$$0$5)
  , _create        = interopDefault(require$$0$19)
  , gOPNExt        = interopDefault(require$$8$1)
  , $GOPD          = interopDefault(require$$0$4)
  , $DP            = interopDefault(require$$1$4)
  , $keys          = interopDefault(require$$5)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  interopDefault(require$$0$23).f = gOPNExt.f = $getOwnPropertyNames;
  interopDefault(require$$3).f  = $propertyIsEnumerable;
  interopDefault(require$$4$4).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !interopDefault(require$$17)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || interopDefault(require$$0$9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
});

var es7_symbol_asyncIterator = createCommonjsModule(function (module) {
interopDefault(require$$0$22)('asyncIterator');
});

var es7_symbol_observable = createCommonjsModule(function (module) {
interopDefault(require$$0$22)('observable');
});

var index = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Symbol;
});

var index$1 = interopDefault(index);


var require$$0$21 = Object.freeze({
	default: index$1
});

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$21), __esModule: true };
});

var symbol$1 = interopDefault(symbol);


var require$$0$20 = Object.freeze({
	default: symbol$1
});

var _typeof = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _iterator = interopDefault(require$$1$8);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = interopDefault(require$$0$20);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof$1 = interopDefault(_typeof);


var require$$0$16 = Object.freeze({
	default: _typeof$1
});

var ie8Polyfills = createCommonjsModule(function (module) {
  /*! (C) WebReflection Mit Style License */
  (function (e) {
    function w(e, t, n, r) {
      for (var i, s, o = n.slice(), u = x(t, e), a = 0, f = o.length; a < f; a++) {
        i = o[a], (typeof i === "undefined" ? "undefined" : _typeof$1(i)) == "object" ? typeof i.handleEvent == "function" && i.handleEvent(u) : i.call(e, u);if (u.stoppedImmediatePropagation) break;
      }return s = !u.stoppedPropagation, r && s && e.parentNode ? e.parentNode.dispatchEvent(u) : !u.defaultPrevented;
    }function E(e, t) {
      return { configurable: !0, get: e, set: t };
    }function S(e, t, n) {
      var r = a(t || e, n);o(e, "textContent", E(function () {
        return r.get.call(this);
      }, function (e) {
        r.set.call(this, e);
      }));
    }function x(e, t) {
      return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e;
    }function T(e, t) {
      var n = e.length;while (n-- && e[n] !== t) {}return n;
    }function N() {
      if (this.tagName === "BR") return "\n";var e = this.firstChild,
          t = [];while (e) {
        e.nodeType !== 8 && e.nodeType !== 7 && t.push(e.textContent), e = e.nextSibling;
      }return t.join("");
    }function C(e) {
      return e.nodeType !== 9 && m.contains(e);
    }function k(e) {
      var t = document.createEvent("Event");t.initEvent("input", !0, !0), (e.srcElement || e.fromElement || document).dispatchEvent(t);
    }function L(e) {
      !n && p.test(document.readyState) && (n = !n, document.detachEvent(r, L), e = document.createEvent("Event"), e.initEvent(i, !0, !0), document.dispatchEvent(e));
    }function A(e) {
      var t = e === "X" ? "Left" : "Top",
          n = "client" + e,
          r = "client" + t,
          i = "scroll" + t,
          s = "_@" + n;return function () {
        return this[s] || (this[s] = this[n] + (m[i] || document.body && document.body[i] || 0) - m[r]);
      };
    }function O(e) {
      var t;while (t = this.lastChild) {
        this.removeChild(t);
      }e != null && this.appendChild(document.createTextNode(e));
    }function M(t, n) {
      return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = new Date().getTime()), n;
    }if (document.createEvent) return;var t = !0,
        n = !1,
        r = "onreadystatechange",
        i = "DOMContentLoaded",
        s = "__IE8__" + Math.random(),
        o = _Object$defineProperty || function (e, t, n) {
      e[t] = n.value;
    },
        u = _Object$defineProperties || function (t, n) {
      for (var r in n) {
        if (f.call(n, r)) try {
          o(t, r, n[r]);
        } catch (i) {
          e.console && console.log(r + " failed on object:", t, i.message);
        }
      }
    },
        a = _Object$getOwnPropertyDescriptor,
        f = Object.prototype.hasOwnProperty,
        l = e.Element.prototype,
        c = e.Text.prototype,
        h = /^[a-z]+$/,
        p = /loaded|complete/,
        d = {},
        v = document.createElement("div"),
        m = document.documentElement,
        g = m.removeAttribute,
        y = m.setAttribute,
        b = function b(e) {
      return { enumerable: !0, writable: !0, configurable: !0, value: e };
    };S(e.HTMLCommentElement.prototype, l, "nodeValue"), S(e.HTMLScriptElement.prototype, null, "text"), S(c, null, "nodeValue"), S(e.HTMLTitleElement.prototype, null, "text"), o(e.HTMLStyleElement.prototype, "textContent", function (e) {
      return E(function () {
        return e.get.call(this.styleSheet);
      }, function (t) {
        e.set.call(this.styleSheet, t);
      });
    }(a(e.CSSStyleSheet.prototype, "cssText"))), u(l, { textContent: { get: N, set: O }, firstElementChild: { get: function get() {
          for (var e = this.childNodes || [], t = 0, n = e.length; t < n; t++) {
            if (e[t].nodeType == 1) return e[t];
          }
        } }, lastElementChild: { get: function get() {
          for (var e = this.childNodes || [], t = e.length; t--;) {
            if (e[t].nodeType == 1) return e[t];
          }
        } }, oninput: { get: function get() {
          return this._oninput || null;
        }, set: function set(e) {
          this._oninput && (this.removeEventListener("input", this._oninput), this._oninput = e, e && this.addEventListener("input", e));
        } }, previousElementSibling: { get: function get() {
          var e = this.previousSibling;while (e && e.nodeType != 1) {
            e = e.previousSibling;
          }return e;
        } }, nextElementSibling: { get: function get() {
          var e = this.nextSibling;while (e && e.nodeType != 1) {
            e = e.nextSibling;
          }return e;
        } }, childElementCount: { get: function get() {
          for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += t[n].nodeType == 1) {}return e;
        } }, addEventListener: b(function (e, t, n) {
        if (typeof t != "function" && (typeof t === "undefined" ? "undefined" : _typeof$1(t)) != "object") return;var r = this,
            i = "on" + e,
            u = r[s] || o(r, s, { value: {} })[s],
            a = u[i] || (u[i] = {}),
            l = a.h || (a.h = []),
            c,
            p;if (!f.call(a, "w")) {
          a.w = function (e) {
            return e[s] || w(r, M(r, e), l, !1);
          };if (!f.call(d, i)) if (h.test(e)) {
            try {
              c = document.createEventObject(), c[s] = !0, r.nodeType != 9 && (r.parentNode == null && v.appendChild(r), (p = r.getAttribute(i)) && g.call(r, i)), r.fireEvent(i, c), d[i] = !0;
            } catch (m) {
              d[i] = !1;while (v.hasChildNodes()) {
                v.removeChild(v.firstChild);
              }
            }p != null && y.call(r, i, p);
          } else d[i] = !1;(a.n = d[i]) && r.attachEvent(i, a.w);
        }T(l, t) < 0 && l[n ? "unshift" : "push"](t), e === "input" && r.attachEvent("onkeyup", k);
      }), dispatchEvent: b(function (e) {
        var t = this,
            n = "on" + e.type,
            r = t[s],
            i = r && r[n],
            o = !!i,
            u;return e.target || (e.target = t), o ? i.n ? t.fireEvent(n, e) : w(t, e, i.h, !0) : (u = t.parentNode) ? u.dispatchEvent(e) : !0, !e.defaultPrevented;
      }), removeEventListener: b(function (e, t, n) {
        if (typeof t != "function" && (typeof t === "undefined" ? "undefined" : _typeof$1(t)) != "object") return;var r = this,
            i = "on" + e,
            o = r[s],
            u = o && o[i],
            a = u && u.h,
            f = a ? T(a, t) : -1;-1 < f && a.splice(f, 1);
      }) }), u(c, { addEventListener: b(l.addEventListener), dispatchEvent: b(l.dispatchEvent), removeEventListener: b(l.removeEventListener) }), u(e.XMLHttpRequest.prototype, { addEventListener: b(function (e, t, n) {
        var r = this,
            i = "on" + e,
            u = r[s] || o(r, s, { value: {} })[s],
            a = u[i] || (u[i] = {}),
            f = a.h || (a.h = []);T(f, t) < 0 && (r[i] || (r[i] = function () {
          var t = document.createEvent("Event");t.initEvent(e, !0, !0), r.dispatchEvent(t);
        }), f[n ? "unshift" : "push"](t));
      }), dispatchEvent: b(function (e) {
        var t = this,
            n = "on" + e.type,
            r = t[s],
            i = r && r[n],
            o = !!i;return o && (i.n ? t.fireEvent(n, e) : w(t, e, i.h, !0));
      }), removeEventListener: b(l.removeEventListener) }), u(e.Event.prototype, { bubbles: b(!0), cancelable: b(!0), preventDefault: b(function () {
        this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1);
      }), stopPropagation: b(function () {
        this.stoppedPropagation = !0, this.cancelBubble = !0;
      }), stopImmediatePropagation: b(function () {
        this.stoppedImmediatePropagation = !0, this.stopPropagation();
      }), initEvent: b(function (e, t, n) {
        this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation();
      }), pageX: { get: A("X") }, pageY: { get: A("Y") } }), u(e.HTMLDocument.prototype, { defaultView: { get: function get() {
          return this.parentWindow;
        } }, textContent: { get: function get() {
          return this.nodeType === 11 ? N.call(this) : null;
        }, set: function set(e) {
          this.nodeType === 11 && O.call(this, e);
        } }, addEventListener: b(function (n, s, o) {
        var u = this;l.addEventListener.call(u, n, s, o), t && n === i && !p.test(u.readyState) && (t = !1, u.attachEvent(r, L), e == top && function a(e) {
          try {
            u.documentElement.doScroll("left"), L();
          } catch (t) {
            setTimeout(a, 50);
          }
        }());
      }), dispatchEvent: b(l.dispatchEvent), removeEventListener: b(l.removeEventListener), createEvent: b(function (e) {
        var t;if (e !== "Event") throw new Error("unsupported " + e);return t = document.createEventObject(), t.timeStamp = new Date().getTime(), t;
      }) }), u(e.Window.prototype, { getComputedStyle: b(function () {
        function i(e) {
          this._ = e;
        }function s() {}var e = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
            t = /^(top|right|bottom|left)$/,
            n = /\-([a-z])/g,
            r = function r(e, t) {
          return t.toUpperCase();
        };return i.prototype.getPropertyValue = function (i) {
          var s = this._,
              o = s.style,
              u = s.currentStyle,
              a = s.runtimeStyle,
              f,
              l,
              c;return i = (i === "float" ? "style-float" : i).replace(n, r), f = u ? u[i] : o[i], e.test(f) && !t.test(i) && (l = o.left, c = a && a.left, c && (a.left = u.left), o.left = i === "fontSize" ? "1em" : f, f = o.pixelLeft + "px", o.left = l, c && (a.left = c)), f == null ? f : f + "" || "auto";
        }, s.prototype.getPropertyValue = function () {
          return null;
        }, function (e, t) {
          return t ? new s(e) : new i(e);
        };
      }()), addEventListener: b(function (t, n, r) {
        var i = e,
            o = "on" + t,
            u;i[o] || (i[o] = function (e) {
          return w(i, M(i, e), u, !1);
        }), u = i[o][s] || (i[o][s] = []), T(u, n) < 0 && u[r ? "unshift" : "push"](n);
      }), dispatchEvent: b(function (t) {
        var n = e["on" + t.type];return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0;
      }), removeEventListener: b(function (t, n, r) {
        var i = "on" + t,
            o = (e[i] || Object)[s],
            u = o ? T(o, n) : -1;-1 < u && o.splice(u, 1);
      }) }), function (e, t, n) {
      for (n = 0; n < t.length; n++) {
        document.createElement(t[n]);
      }e.length || document.createStyleSheet(""), e[0].addRule(t.join(","), "display:block;");
    }(document.styleSheets, ["header", "nav", "section", "article", "aside", "footer"]);
  })(commonjsGlobal.window || commonjsGlobal);
});

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
(function () {
  try {
    new window.CustomEvent("test");
  } catch (e) {
    var CustomEvent = function CustomEvent(event, params) {
      var evt;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('Event');
      evt.initEvent(event, params.bubbles, params.cancelable, params.detail);
      evt.detail = params.detail;
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

// Bug checking function that will throw an error whenever
// the condition sent to it is evaluated to false
/**
 * Processes the message and outputs the correct message if the condition
 * is false. Otherwise it outputs null.
 * @api private
 * @method processCondition
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return {String | null}  - Error message if there is an error, nul otherwise.
 */
function processCondition(condition, errorMessage) {
  if (!condition) {
    var completeErrorMessage = '';
    var re = /at ([^\s]+)\s\(/g;
    var stackTrace = new Error().stack;
    var stackFunctions = [];

    var funcName = re.exec(stackTrace);
    while (funcName && funcName[1]) {
      stackFunctions.push(funcName[1]);
      funcName = re.exec(stackTrace);
    }

    // Number 0 is processCondition itself,
    // Number 1 is assert,
    // Number 2 is the caller function.
    if (stackFunctions[2]) {
      completeErrorMessage = stackFunctions[2] + ': ' + completeErrorMessage;
    }

    completeErrorMessage += errorMessage;
    return completeErrorMessage;
  }

  return null;
}

/**
 * Throws an error if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert(myDate !== undefined, "Date cannot be undefined.");
 * @api public
 * @method assert
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
function assert(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    throw new Error(error);
  }
}

/**
 * Logs a warning if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert.warn(myDate !== undefined, "No date provided.");
 * @api public
 * @method warn
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
assert.warn = function warn(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    console.warn(error);
  }
};

var _classof = createCommonjsModule(function (module) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = interopDefault(require$$0$2)
  , TAG = interopDefault(require$$2$4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
});

var _classof$1 = interopDefault(_classof);


var require$$3$7 = Object.freeze({
	default: _classof$1
});

var _anInstance = createCommonjsModule(function (module) {
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
});

var _anInstance$1 = interopDefault(_anInstance);


var require$$10 = Object.freeze({
	default: _anInstance$1
});

var _iterCall = createCommonjsModule(function (module) {
// call something on iterator step with safe closing on error
var anObject = interopDefault(require$$2$3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
});

var _iterCall$1 = interopDefault(_iterCall);


var require$$5$1 = Object.freeze({
	default: _iterCall$1
});

var _isArrayIter = createCommonjsModule(function (module) {
// check on default Array iterator
var Iterators  = interopDefault(require$$1$10)
  , ITERATOR   = interopDefault(require$$2$4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
});

var _isArrayIter$1 = interopDefault(_isArrayIter);


var require$$4$5 = Object.freeze({
	default: _isArrayIter$1
});

var core_getIteratorMethod = createCommonjsModule(function (module) {
var classof   = interopDefault(require$$3$7)
  , ITERATOR  = interopDefault(require$$2$4)('iterator')
  , Iterators = interopDefault(require$$1$10);
module.exports = interopDefault(require$$0$8).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
});

var core_getIteratorMethod$1 = interopDefault(core_getIteratorMethod);


var require$$1$13 = Object.freeze({
	default: core_getIteratorMethod$1
});

var _forOf = createCommonjsModule(function (module) {
var ctx         = interopDefault(require$$8)
  , call        = interopDefault(require$$5$1)
  , isArrayIter = interopDefault(require$$4$5)
  , anObject    = interopDefault(require$$2$3)
  , toLength    = interopDefault(require$$3$2)
  , getIterFn   = interopDefault(require$$1$13)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

var _forOf$1 = interopDefault(_forOf);


var require$$9 = Object.freeze({
	default: _forOf$1
});

var _speciesConstructor = createCommonjsModule(function (module) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = interopDefault(require$$2$3)
  , aFunction = interopDefault(require$$1$3)
  , SPECIES   = interopDefault(require$$2$4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
});

var _speciesConstructor$1 = interopDefault(_speciesConstructor);


var require$$8$2 = Object.freeze({
	default: _speciesConstructor$1
});

var _invoke = createCommonjsModule(function (module) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
});

var _invoke$1 = interopDefault(_invoke);


var require$$4$6 = Object.freeze({
	default: _invoke$1
});

var _task = createCommonjsModule(function (module) {
var ctx                = interopDefault(require$$8)
  , invoke             = interopDefault(require$$4$6)
  , html               = interopDefault(require$$3$4)
  , cel                = interopDefault(require$$2$2)
  , global             = interopDefault(require$$4)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(interopDefault(require$$0$2)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
});

var _task$1 = interopDefault(_task);
var set$1 = _task.set;
var clear = _task.clear;

var require$$1$14 = Object.freeze({
	default: _task$1,
	set: set$1,
	clear: clear
});

var _microtask = createCommonjsModule(function (module) {
var global    = interopDefault(require$$4)
  , macrotask = interopDefault(require$$1$14).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = interopDefault(require$$0$2)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
});

var _microtask$1 = interopDefault(_microtask);


var require$$6$1 = Object.freeze({
	default: _microtask$1
});

var _redefineAll = createCommonjsModule(function (module) {
var hide = interopDefault(require$$0$9);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
});

var _redefineAll$1 = interopDefault(_redefineAll);


var require$$4$7 = Object.freeze({
	default: _redefineAll$1
});

var _setSpecies = createCommonjsModule(function (module) {
'use strict';
var global      = interopDefault(require$$4)
  , core        = interopDefault(require$$0$8)
  , dP          = interopDefault(require$$1$4)
  , DESCRIPTORS = interopDefault(require$$1$2)
  , SPECIES     = interopDefault(require$$2$4)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
});

var _setSpecies$1 = interopDefault(_setSpecies);


var require$$2$5 = Object.freeze({
	default: _setSpecies$1
});

var _iterDetect = createCommonjsModule(function (module) {
var ITERATOR     = interopDefault(require$$2$4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
});

var _iterDetect$1 = interopDefault(_iterDetect);


var require$$0$26 = Object.freeze({
	default: _iterDetect$1
});

var es6_promise = createCommonjsModule(function (module) {
'use strict';
var LIBRARY            = interopDefault(require$$17)
  , global             = interopDefault(require$$4)
  , ctx                = interopDefault(require$$8)
  , classof            = interopDefault(require$$3$7)
  , $export            = interopDefault(require$$7)
  , isObject           = interopDefault(require$$3$1)
  , aFunction          = interopDefault(require$$1$3)
  , anInstance         = interopDefault(require$$10)
  , forOf              = interopDefault(require$$9)
  , speciesConstructor = interopDefault(require$$8$2)
  , task               = interopDefault(require$$1$14).set
  , microtask          = interopDefault(require$$6$1)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[interopDefault(require$$2$4)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = interopDefault(require$$4$7)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
interopDefault(require$$3$5)($Promise, PROMISE);
interopDefault(require$$2$5)(PROMISE);
Wrapper = interopDefault(require$$0$8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && interopDefault(require$$0$26)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
});

var promise$1 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Promise;
});

var promise$2 = interopDefault(promise$1);


var require$$0$25 = Object.freeze({
	default: promise$2
});

var promise = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$25), __esModule: true };
});

var _Promise = interopDefault(promise);


var require$$0$24 = Object.freeze({
	default: _Promise
});

var _objectAssign = createCommonjsModule(function (module) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = interopDefault(require$$5)
  , gOPS     = interopDefault(require$$4$4)
  , pIE      = interopDefault(require$$3)
  , toObject = interopDefault(require$$6)
  , IObject  = interopDefault(require$$1$1)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || interopDefault(require$$0$6)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
});

var _objectAssign$1 = interopDefault(_objectAssign);


var require$$0$29 = Object.freeze({
	default: _objectAssign$1
});

var es6_object_assign = createCommonjsModule(function (module) {
// 19.1.3.1 Object.assign(target, source)
var $export = interopDefault(require$$7);

$export($export.S + $export.F, 'Object', {assign: interopDefault(require$$0$29)});
});

var assign$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Object.assign;
});

var assign$3 = interopDefault(assign$2);


var require$$0$28 = Object.freeze({
	default: assign$3
});

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$28), __esModule: true };
});

var _Object$assign = interopDefault(assign$1);


var require$$0$27 = Object.freeze({
	default: _Object$assign
});

var es6_object_getPrototypeOf = createCommonjsModule(function (module) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = interopDefault(require$$6)
  , $getPrototypeOf = interopDefault(require$$1$11);

interopDefault(require$$0$7)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
});

var getPrototypeOf$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Object.getPrototypeOf;
});

var getPrototypeOf$3 = interopDefault(getPrototypeOf$2);


var require$$0$30 = Object.freeze({
	default: getPrototypeOf$3
});

var getPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$30), __esModule: true };
});

var _Object$getPrototypeOf = interopDefault(getPrototypeOf$1);


var require$$1$15 = Object.freeze({
	default: _Object$getPrototypeOf
});

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = interopDefault(classCallCheck);

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _defineProperty = interopDefault(require$$0$14);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = interopDefault(createClass);

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _typeof2 = interopDefault(require$$0$16);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = interopDefault(possibleConstructorReturn);

var _setProto = createCommonjsModule(function (module) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = interopDefault(require$$3$1)
  , anObject = interopDefault(require$$2$3);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = interopDefault(require$$8)(Function.call, interopDefault(require$$0$4).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
});

var _setProto$1 = interopDefault(_setProto);
var set$2 = _setProto.set;
var check = _setProto.check;

var require$$0$32 = Object.freeze({
	default: _setProto$1,
	set: set$2,
	check: check
});

var es6_object_setPrototypeOf = createCommonjsModule(function (module) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = interopDefault(require$$7);
$export($export.S, 'Object', {setPrototypeOf: interopDefault(require$$0$32).set});
});

var setPrototypeOf$3 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Object.setPrototypeOf;
});

var setPrototypeOf$4 = interopDefault(setPrototypeOf$3);


var require$$0$31 = Object.freeze({
	default: setPrototypeOf$4
});

var setPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$31), __esModule: true };
});

var setPrototypeOf$2 = interopDefault(setPrototypeOf$1);


var require$$2$6 = Object.freeze({
	default: setPrototypeOf$2
});

var es6_object_create = createCommonjsModule(function (module) {
var $export = interopDefault(require$$7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: interopDefault(require$$0$19)});
});

var create$3 = createCommonjsModule(function (module) {
var $Object = interopDefault(require$$0$8).Object;
module.exports = function create$3(P, D){
  return $Object.create(P, D);
};
});

var create$4 = interopDefault(create$3);


var require$$0$33 = Object.freeze({
	default: create$4
});

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$33), __esModule: true };
});

var create$2 = interopDefault(create$1);


var require$$1$16 = Object.freeze({
	default: create$2
});

var inherits = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _setPrototypeOf = interopDefault(require$$2$6);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = interopDefault(require$$1$16);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = interopDefault(require$$0$16);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = interopDefault(inherits);

var core_getIterator = createCommonjsModule(function (module) {
var anObject = interopDefault(require$$2$3)
  , get      = interopDefault(require$$1$13);
module.exports = interopDefault(require$$0$8).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
});

var core_getIterator$1 = interopDefault(core_getIterator);


var require$$0$36 = Object.freeze({
	default: core_getIterator$1
});

var getIterator$1 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$36);
});

var getIterator$2 = interopDefault(getIterator$1);


var require$$0$35 = Object.freeze({
	default: getIterator$2
});

var getIterator = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$35), __esModule: true };
});

var _getIterator = interopDefault(getIterator);


var require$$0$34 = Object.freeze({
	default: _getIterator
});

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal
);
});

var runtime$1 = interopDefault(runtime);


var require$$0$38 = Object.freeze({
	default: runtime$1
});

var runtimeModule = createCommonjsModule(function (module) {
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = interopDefault(require$$0$38);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}
});

var runtimeModule$1 = interopDefault(runtimeModule);


var require$$0$37 = Object.freeze({
	default: runtimeModule$1
});

var index$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$37);
});

var _regeneratorRuntime = interopDefault(index$2);

var asyncToGenerator = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _promise = interopDefault(require$$0$24);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
});

var _asyncToGenerator = interopDefault(asyncToGenerator);

var _createProperty = createCommonjsModule(function (module) {
'use strict';
var $defineProperty = interopDefault(require$$1$4)
  , createDesc      = interopDefault(require$$0$5);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
});

var _createProperty$1 = interopDefault(_createProperty);


var require$$2$7 = Object.freeze({
	default: _createProperty$1
});

var es6_array_from = createCommonjsModule(function (module) {
'use strict';
var ctx            = interopDefault(require$$8)
  , $export        = interopDefault(require$$7)
  , toObject       = interopDefault(require$$6)
  , call           = interopDefault(require$$5$1)
  , isArrayIter    = interopDefault(require$$4$5)
  , toLength       = interopDefault(require$$3$2)
  , createProperty = interopDefault(require$$2$7)
  , getIterFn      = interopDefault(require$$1$13);

$export($export.S + $export.F * !interopDefault(require$$0$26)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});
});

var from$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Array.from;
});

var from$3 = interopDefault(from$2);


var require$$0$40 = Object.freeze({
	default: from$3
});

var from$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$40), __esModule: true };
});

var _Array$from = interopDefault(from$1);


var require$$0$39 = Object.freeze({
	default: _Array$from
});

var toConsumableArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _from = interopDefault(require$$0$39);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = interopDefault(toConsumableArray);

var globals = {
  modulePrefix: 'fl-if', // Interactive form
  FOCUS_CLASS: 'fl-if_focusMe'
};

/**
 * This class automatically calculate element classes and
 * adds it to this.bemClass property.
 * If the element is supposed to be created as a descendant of another
 * component, it should be created with <MyReactBEM cssPrefix={this.bemClass} />
 * @abstract @class ReactBEM
 */

var ReactBEM = function (_React$Component) {
  _inherits(ReactBEM, _React$Component);

  function ReactBEM(props) {
    var _ref;

    _classCallCheck(this, ReactBEM);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ReactBEM.__proto__ || _Object$getPrototypeOf(ReactBEM)).call.apply(_ref, [this, props].concat(args)));

    if (props.cssPrefix) {
      _this.bemClass = props.cssPrefix + '-' + lowerCaseFirstLetter(_this.constructor.name);
    } else {
      _this.bemClass = globals.modulePrefix + '_' + _this.constructor.name;
    }

    _this.modulePrefix = globals.modulePrefix;
    _this.bemState = _this.bemState.bind(_this);
    _this.bemSubComponent = _this.bemSubComponent.bind(_this);
    return _this;
  }

  _createClass(ReactBEM, [{
    key: 'bemState',
    value: function bemState(state) {
      return this.bemClass + '--' + state;
    }
  }, {
    key: 'bemSubComponent',
    value: function bemSubComponent() {
      var className = '' + this.bemClass;

      for (var _len2 = arguments.length, componentTree = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        componentTree[_key2] = arguments[_key2];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(componentTree), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var componentName = _step.value;

          className += '-' + componentName;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return className;
    }
  }, {
    key: 'bemSubComponentState',
    value: function bemSubComponentState() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var state = args.pop();
      var subComponentClass = this.bemSubComponent(args);
      var subComponentState = subComponentClass + '--' + state;
      return subComponentState;
    }
  }]);

  return ReactBEM;
}(React.Component);

function lowerCaseFirstLetter(word) {
  if (word && word.charAt(0)) {
    var wordHead = word.charAt(0).toLowerCase();
    var wordTail = word.slice(1);
    return wordHead + wordTail;
  }
  return '';
}

ReactBEM.propTypes = {
  cssPrefix: React.PropTypes.string
};

var Error$1 = function (_ReactBEM) {
  _inherits(Error, _ReactBEM);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || _Object$getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: 'render',
    value: function render() {
      var classes = [this.bemClass];
      if (this.props.speechBubble) {
        classes.push(this.bemState('speechBubble'));
      }

      return React.createElement(
        'div',
        { className: classes.join(' ') },
        ' ',
        this.props.children,
        ' '
      );
    }
  }]);

  return Error;
}(ReactBEM);

var InputField = function (_ReactBEM) {
  _inherits(InputField, _ReactBEM);

  function InputField() {
    var _ref;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = InputField.__proto__ || _Object$getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args)));

    _this.keyListener = _this.keyListener.bind(_this);
    _this.getResponse = _this.getResponse.bind(_this);
    _this.validateResponse = _this.validateResponse.bind(_this);
    _this.saveResponse = _this.saveResponse.bind(_this);
    _this.saveResponseAndJumpToQuestion = _this.saveResponseAndJumpToQuestion.bind(_this);
    _this.isRequired = _this.isRequired.bind(_this);
    _this.keyPrev = _this.keyPrev.bind(_this);
    _this.keyNext = _this.keyNext.bind(_this);
    _this.keySelect = _this.keySelect.bind(_this);
    return _this;
  }

  /**
   * Saves question response and animates to the next
   * field according to the validation outcome.
   * @method saveResponseAndJumpToQuestion
   * @param  {String} jumpDirection
   * @return {Promise}
   */


  _createClass(InputField, [{
    key: 'saveResponseAndJumpToQuestion',
    value: function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(response) {
        var _this2 = this;

        var jumpDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'next';
        var previouslyCompletedState, err, animDuration;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                previouslyCompletedState = this.props.ui.completed;
                _context.next = 3;
                return this.saveResponse(response);

              case 3:

                // We will not move to the next question if there is an error.
                err = this.validateResponse(response);

                if (!err) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return');

              case 6:

                // Now there will be a render pass and this element will be set to completed
                // we wait for the animation to finish before going to the next question.
                animDuration = 0;

                if (!previouslyCompletedState && this.props.ui.completed) {
                  animDuration = 500;
                }

                setTimeout(function () {
                  return _this2.props.appControl.goToField(jumpDirection);
                }, animDuration);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveResponseAndJumpToQuestion(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return saveResponseAndJumpToQuestion;
    }()

    // To be overriden by subclasses

  }, {
    key: 'getResponse',
    value: function getResponse() {
      return this.props.config.answer;
    }

    /**
     * @private
     * @method isRequired
     * @return {Boolean}
     */

  }, {
    key: 'isRequired',
    value: function isRequired() {
      return this.props.config.required;
    }

    /**
     * @private
     * @method validateResponse
     * @param  {Array | String | Int} response
     * @return {String} Returns an error message, if there is an error.
     * If there is no error it returns a falsy value.
     */

  }, {
    key: 'validateResponse',
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (this.isRequired() && !response) {
        return 'Field must be filled.';
      }
      return null;
    }

    /**
     * Saves the response and sets the field as completed. No animation
     * @method saveResponse
     * @param  {Int | String | Array} response
     * @return {Promise}
     */

  }, {
    key: 'saveResponse',
    value: function () {
      var _ref3 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();
        var err;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.props.appControl.setQuestionResponse(this.props.config.key, response);

                // Show error if there is any
                err = this.validateResponse(response);
                _context2.next = 4;
                return this.showError(err);

              case 4:
                _context2.next = 6;
                return this.props.appControl.setQuestionCompleted(this.props.config.key, !err);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveResponse(_x5) {
        return _ref3.apply(this, arguments);
      }

      return saveResponse;
    }()
  }, {
    key: 'keyListener',
    value: function keyListener(e) {
      // eslint-disable-line complexity
      var up = 38;
      var down = 40;
      var tab = 9;
      var enter = 13;

      if (e.ctrlKey) {
        return;
      }
      if (e.shiftKey && e.keyCode !== tab) {
        return;
      }
      if (e.keyCode === enter) {
        this.keySelect();
      } else if (e.keyCode === up) {
        this.keyPrev();
      } else if (e.keyCode === down) {
        this.keyNext();
      } else if (e.keyCode === tab && e.shiftKey) {
        this.keyPrev();
      } else if (e.keyCode === tab) {
        this.keyNext();
      } else {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'keyPrev',
    value: function keyPrev() {
      var response = this.getResponse();
      this.saveResponseAndJumpToQuestion(response, 'prev');
    }
  }, {
    key: 'keyNext',
    value: function keyNext() {
      var response = this.getResponse();
      this.saveResponseAndJumpToQuestion(response, 'next');
    }
  }, {
    key: 'keySelect',
    value: function keySelect() {
      this.keyNext();
    }
  }, {
    key: 'showError',
    value: function () {
      var _ref4 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3(message) {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.props.appControl.setFieldError(this.props.config.key, message);

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function showError(_x7) {
        return _ref4.apply(this, arguments);
      }

      return showError;
    }()
  }]);

  return InputField;
}(ReactBEM);

InputField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

/**
 * @abstract @class
 */

var TextInput = function (_InputField) {
  _inherits(TextInput, _InputField);

  function TextInput() {
    var _ref;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || _Object$getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args)));

    _this.render = _this.render.bind(_this);
    _this.inputEl = null; // To be set by subclasses

    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    _this.changedSinceLastUpdate = false;

    /** @override */
    _this.bemClass = _this.modulePrefix + '_TextInput';
    return _this;
  }

  _createClass(TextInput, [{
    key: 'getResponse',
    value: function getResponse() {
      var response = ReactDOM.findDOMNode(this.refs.input).value;
      return response.trim();
    }

    /**
     * @override
     */

  }, {
    key: 'validateResponse',
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (this.isRequired() && !response) {
        return 'This field must be completed.';
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var InputEl = this.inputEl;
      var handleInputChange = function handleInputChange() {
        _this2.changedSinceLastUpdate = true;
        if (_this2.props.ui.active) {
          // set incomplete
          _this2.props.appControl.setQuestionCompleted(_this2.props.config.key, false);
        }

        if (_this2.props.ui.error) {
          _this2.showError(_this2.validateResponse());
        }
      };

      var handleBlur = function handleBlur() {
        if (!_this2.changedSinceLastUpdate) {
          return;
        }
        _this2.changedSinceLastUpdate = false;
        _this2.saveResponse();
      };

      return React.createElement(
        'div',
        { className: this.bemClass },
        React.createElement(InputEl, {
          className: this.bemSubComponent('input') + ' ' + this.className + ' ' + globals.FOCUS_CLASS,
          ref: 'input',
          type: this.type,
          defaultValue: this.props.config.answer,
          placeholder: this.props.config.placeholder,

          onKeyDown: this.keyListener,
          onChange: handleInputChange,
          onBlur: handleBlur,
          disabled: !this.props.ui.active
        })
      );
    }
  }]);

  return TextInput;
}(InputField);

var telRegex = /^\+?[0-9|\-|\s]{5,15}$/;

var NumberBox = function (_TextInput) {
  _inherits(NumberBox, _TextInput);

  _createClass(NumberBox, [{
    key: 'validateResponse',

    /**
     * @override
     */
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (!this.isRequired() && !response) {
        return false;
      }

      if (this.isRequired() && !response) {
        return 'This field must be completed';
      }

      if (!telRegex.test(response)) {
        return 'Please insert a valid telephone number';
      }

      return false;
    }
  }]);

  function NumberBox() {
    var _ref;

    _classCallCheck(this, NumberBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = NumberBox.__proto__ || _Object$getPrototypeOf(NumberBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'tel';
    return _this;
  }

  return NumberBox;
}(TextInput);

var numberRegex = /^[0-9]+$/;

var NumberBox$1 = function (_TextInput) {
  _inherits(NumberBox, _TextInput);

  _createClass(NumberBox, [{
    key: 'validateResponse',

    /**
     * @override
     */
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (!this.isRequired() && !response) {
        return false;
      }

      if (this.isRequired() && !response) {
        return 'This field must be completed';
      }

      if (!numberRegex.test(response)) {
        return 'Invalid response. Please only insert number characters.';
      }

      return false;
    }
  }]);

  function NumberBox() {
    var _ref;

    _classCallCheck(this, NumberBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = NumberBox.__proto__ || _Object$getPrototypeOf(NumberBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'email';
    return _this;
  }

  return NumberBox;
}(TextInput);

/* RFC822 regex. see http://badsyntax.co/post/javascript-email-validation-rfc822 */
var emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

var EmailBox = function (_TextInput) {
  _inherits(EmailBox, _TextInput);

  _createClass(EmailBox, [{
    key: 'validateResponse',

    /**
     * @override
     */
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (!this.isRequired() && !response) {
        return false;
      }

      if (this.isRequired() && !response) {
        return 'This field must be completed';
      }

      if (!emailRegex.test(response)) {
        return 'Invalid email address.';
      }

      return false;
    }
  }]);

  function EmailBox() {
    var _ref;

    _classCallCheck(this, EmailBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = EmailBox.__proto__ || _Object$getPrototypeOf(EmailBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'email';
    return _this;
  }

  return EmailBox;
}(TextInput);

var TextBox = function (_TextInput) {
  _inherits(TextBox, _TextInput);

  function TextBox() {
    var _ref;

    _classCallCheck(this, TextBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TextBox.__proto__ || _Object$getPrototypeOf(TextBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'text';
    return _this;
  }

  return TextBox;
}(TextInput);

var TextArea = function (_TextInput) {
  _inherits(TextArea, _TextInput);

  function TextArea() {
    var _ref;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || _Object$getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'textarea';
    // TODO: How to use this.bemSubComponent() corecctly?
    _this.className = 'fl-if_TextAreaInput-input';
    return _this;
  }

  return TextArea;
}(TextInput);

var get$1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _getPrototypeOf = interopDefault(require$$1$15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = interopDefault(require$$0);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
});

var _get = interopDefault(get$1);

var OptionsInput = function (_InputField) {
  _inherits(OptionsInput, _InputField);

  function OptionsInput() {
    var _ref;

    _classCallCheck(this, OptionsInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OptionsInput.__proto__ || _Object$getPrototypeOf(OptionsInput)).call.apply(_ref, [this].concat(args)));

    _this.render = _this.render.bind(_this);
    _this.generateOptions = _this.generateOptions.bind(_this);

    /** @override */
    _this.bemClass = _this.modulePrefix + '_OptionsInput';
    return _this;
  }

  _createClass(OptionsInput, [{
    key: 'keyPrev',
    value: function keyPrev() {
      var container = ReactDOM.findDOMNode(this);
      var options = _Array$from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex - 1]) {
        this.props.appControl.focus(options[focusedIndex - 1]);
      } else {
        _get(OptionsInput.prototype.__proto__ || _Object$getPrototypeOf(OptionsInput.prototype), 'keyPrev', this).call(this);
      }
    }
  }, {
    key: 'keyNext',
    value: function keyNext() {
      var container = ReactDOM.findDOMNode(this);
      var options = _Array$from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex + 1]) {
        this.props.appControl.focus(options[focusedIndex + 1]);
      } else {
        _get(OptionsInput.prototype.__proto__ || _Object$getPrototypeOf(OptionsInput.prototype), 'keyNext', this).call(this);
      }
    }
  }, {
    key: 'keySelect',
    value: function keySelect() {
      var container = ReactDOM.findDOMNode(this);
      var options = _Array$from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex]) {
        options[focusedIndex].click();
      } else {
        _get(OptionsInput.prototype.__proto__ || _Object$getPrototypeOf(OptionsInput.prototype), 'keySelect', this).call(this);
      }
    }

    /**
     * To be overriden by subclasses
     * @method generateOptions
     * @param  {Array} optionsArray
     * @return {Array<ReactElement>}
     */

  }, {
    key: 'generateOptions',
    value: function generateOptions(options) {
      throw new Error('Should be implemented by subclass');
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.generateOptions(this.props.config.options);

      return React.createElement(
        'div',
        {
          className: this.bemClass,
          onKeyDown: this.keyListener
        },
        options
      );
    }
  }]);

  return OptionsInput;
}(InputField);

var RadioButtons = function (_OptionsInput) {
  _inherits(RadioButtons, _OptionsInput);

  function RadioButtons() {
    _classCallCheck(this, RadioButtons);

    return _possibleConstructorReturn(this, (RadioButtons.__proto__ || _Object$getPrototypeOf(RadioButtons)).apply(this, arguments));
  }

  _createClass(RadioButtons, [{
    key: 'getResponse',

    /**
     * @method getResponse
     * @return {Int} Response index
     */
    value: function getResponse() {
      // Even though radio buttons only have one response, all option
      // input elements hold their responses in an array.
      var anwerArray = this.props.config.answer;
      return anwerArray ? anwerArray[0] : undefined;
    }
  }, {
    key: 'validateResponse',
    value: function validateResponse(response) {
      if (!this.isRequired() || this.props.config.options[response] !== undefined) {
        return null;
      }
      return 'You must choose at lease one option';
    }
  }, {
    key: 'generateOptions',
    value: function generateOptions(options) {
      var _this2 = this;

      return options.map(function (option, index) {
        var optionClasses = [_this2.bemSubComponent('option'), _this2.bemSubComponent('radio'), globals.FOCUS_CLASS];

        var response = _this2.getResponse();
        if (index === response) {
          optionClasses.push(_this2.bemSubComponentState('option', 'selected'));
        }

        return React.createElement(
          'div',
          {
            className: optionClasses.join(' '),
            key: '' + _this2.props.config.key + index,
            onClick: function onClick() {
              return _this2.saveResponseAndJumpToQuestion([index], 'next');
            },
            tabIndex: '0',
            value: option.value
          },
          option.caption
        );
      });
    }
  }]);

  return RadioButtons;
}(OptionsInput);

var Checkboxes = function (_OptionsInput) {
  _inherits(Checkboxes, _OptionsInput);

  function Checkboxes() {
    var _ref;

    _classCallCheck(this, Checkboxes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Checkboxes.__proto__ || _Object$getPrototypeOf(Checkboxes)).call.apply(_ref, [this].concat(args)));

    _this.checkboxClick = _this.checkboxClick.bind(_this);
    return _this;
  }

  /**
   * @override
   * @method getResponse
   * @return {Array<Boolean>} Each index corresponds to an option index
   * selection value.
   */


  _createClass(Checkboxes, [{
    key: 'getResponse',
    value: function getResponse() {
      if (Array.isArray(this.props.config.answer)) {
        return _Array$from(this.props.config.answer);
      }

      // Return array of same size as options but all elements as false
      return this.props.config.options.map(function () {
        return false;
      });
    }

    /**
     * @override
     * @method validateResponse
     * @param  {Array<Bool>} response
     * @return {String} - Error message.
     */

  }, {
    key: 'validateResponse',
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (!this.isRequired()) {
        return null;
      }
      if (!Array.isArray(response)) {
        return 'This field must be filled';
      }

      assert(response.length === this.props.config.options.length, 'Invalid response array. Response of length ' + response.length + '\n       and options with length ' + this.props.config.options.length);

      // All values are boolean
      assert(response.reduce(function (valid, r) {
        return valid && typeof r === 'boolean';
      }, true), 'Response array has non-boolean values');

      // If it is required, it must contain at least on checked opiton;
      var checkedOptionCount = response.filter(function (r) {
        return !!r;
      }).length;

      if (checkedOptionCount === 0) {
        return 'You must check at least one option.';
      }

      return null;
    }

    /**
     * @private
     * @method checkboxClick
     * @param  {Int} index - clicked option index
     * @return {void}
     */

  }, {
    key: 'checkboxClick',
    value: function checkboxClick(index) {
      var selectedOptions = this.getResponse();
      // Toggle selection
      selectedOptions[index] = !selectedOptions[index];
      this.saveResponse(selectedOptions);
    }

    /**
     * @override
     * @method generateOptions
     * @param  {Array<String>} options
     * @return {Array<ReactDOMElements}
     */

  }, {
    key: 'generateOptions',
    value: function generateOptions(options) {
      var _this2 = this;

      var responses = this.getResponse();
      return options.map(function (option, index) {
        var optionClasses = [_this2.bemSubComponent('option'), _this2.bemSubComponent('checkbox'), globals.FOCUS_CLASS];

        if (responses[index]) {
          optionClasses.push(_this2.bemSubComponentState('option', 'selected'));
        }

        return React.createElement(
          'div',
          {
            className: optionClasses.join(' '),
            key: '' + _this2.props.config.key + index,
            onClick: function onClick() {
              return _this2.checkboxClick(index);
            },
            tabIndex: '0',
            value: option.value
          },
          option.caption
        );
      });
    }
  }]);

  return Checkboxes;
}(OptionsInput);

var _extends = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _assign = interopDefault(require$$0$27);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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
});

var _extends$1 = interopDefault(_extends);

var Dropdown = function (_OptionsInput) {
  _inherits(Dropdown, _OptionsInput);

  function Dropdown() {
    var _ref;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || _Object$getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args)));

    _this.onChange = _this.onChange.bind(_this);
    /** @override */
    _this.bemClass = _this.bemClass + ' fl-if_Dropdown';
    return _this;
  }

  /**
   * @override
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */


  _createClass(Dropdown, [{
    key: 'validateResponse',
    value: function validateResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();

      if (this.isRequired() && !response) {
        return 'Please choose an option';
      }

      return false;
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      var selectedOption = this.refs.selectionBox.selectedIndex;
      this.saveResponseAndJumpToQuestion(selectedOption, 'next');
    }

    /**
     * @override
     * @method generateOptions
     * @param  {Array<String>} options
     * @return {Array<ReactDOMElements}
     */

  }, {
    key: 'generateOptions',
    value: function generateOptions(options) {
      var _this2 = this;

      var disabledIndexes = this.props.config.disabledIndexes || [];
      var optionEls = options.map(function (option, index) {
        var disabled = disabledIndexes.indexOf(index) !== -1;
        return React.createElement(
          'option',
          {
            key: '' + _this2.props.config.key + index,
            tabIndex: '0',
            disabled: disabled,
            value: option.value
          },
          option.caption
        );
      });

      var classes = [this.bemSubComponent('option'), globals.FOCUS_CLASS].join(' ');

      var additionalProps = {};

      // If no answer was given, let's force the first option as selected
      // because it might be a placeholder, which is set to disabled and would
      // normally not be selected.
      var currResponse = this.getResponse();
      if (currResponse === null || currResponse === undefined) {
        additionalProps.value = 0;
      }

      return React.createElement(
        'select',
        _extends$1({
          className: classes,
          onChange: this.onChange,
          ref: 'selectionBox'
        }, additionalProps),
        optionEls
      );
    }
  }]);

  return Dropdown;
}(OptionsInput);

var CountryDropdown = function (_Dropdown) {
  _inherits(CountryDropdown, _Dropdown);

  function CountryDropdown() {
    _classCallCheck(this, CountryDropdown);

    return _possibleConstructorReturn(this, (CountryDropdown.__proto__ || _Object$getPrototypeOf(CountryDropdown)).apply(this, arguments));
  }

  _createClass(CountryDropdown, [{
    key: 'generateOptions',

    /**
     * @override
     * @method generateOptions
     * @param  {Array<String>} options
     * @return {Array<ReactDOMElements}
     */
    value: function generateOptions() {
      var _this2 = this;

      var options = [{
        "value": 0
      }, {
        "value": 1,
        "caption": "AFGHANISTAN"
      }, {
        "value": 2,
        "caption": "ALBANIA"
      }, {
        "value": 3,
        "caption": "ALGERIA"
      }, {
        "value": 4,
        "caption": "AMERICAN SAMOA"
      }, {
        "value": 5,
        "caption": "ANDORRA"
      }, {
        "value": 6,
        "caption": "ANGOLA"
      }, {
        "value": 7,
        "caption": "ANGUILLA"
      }, {
        "value": 8,
        "caption": "ANTARCTICA"
      }, {
        "value": 9,
        "caption": "ANTIGUA AND BARBUDA"
      }, {
        "value": 10,
        "caption": "ARGENTINA"
      }, {
        "value": 11,
        "caption": "ARMENIA"
      }, {
        "value": 12,
        "caption": "ARUBA"
      }, {
        "value": 13,
        "caption": "AUSTRALIA"
      }, {
        "value": 14,
        "caption": "AUSTRIA"
      }, {
        "value": 15,
        "caption": "AZERBAIJAN"
      }, {
        "value": 16,
        "caption": "BAHAMAS"
      }, {
        "value": 17,
        "caption": "BAHRAIN"
      }, {
        "value": 18,
        "caption": "BANGLADESH"
      }, {
        "value": 19,
        "caption": "BARBADOS"
      }, {
        "value": 20,
        "caption": "BELARUS"
      }, {
        "value": 21,
        "caption": "BELGIUM"
      }, {
        "value": 22,
        "caption": "BELIZE"
      }, {
        "value": 23,
        "caption": "BENIN"
      }, {
        "value": 24,
        "caption": "BERMUDA"
      }, {
        "value": 25,
        "caption": "BHUTAN"
      }, {
        "value": 26,
        "caption": "BOLIVIA"
      }, {
        "value": 27,
        "caption": "BOSNIA AND HERZEGOWINA"
      }, {
        "value": 28,
        "caption": "BOTSWANA"
      }, {
        "value": 29,
        "caption": "BOUVET ISLAND"
      }, {
        "value": 30,
        "caption": "BRAZIL"
      }, {
        "value": 31,
        "caption": "BRITISH INDIAN OCEAN TERRITORY"
      }, {
        "value": 32,
        "caption": "BRUNEI DARUSSALAM"
      }, {
        "value": 33,
        "caption": "BULGARIA"
      }, {
        "value": 34,
        "caption": "BURKINA FASO"
      }, {
        "value": 35,
        "caption": "BURUNDI"
      }, {
        "value": 36,
        "caption": "CAMBODIA"
      }, {
        "value": 37,
        "caption": "CAMEROON"
      }, {
        "value": 38,
        "caption": "CANADA"
      }, {
        "value": 39,
        "caption": "CAPE VERDE"
      }, {
        "value": 40,
        "caption": "CAYMAN ISLANDS"
      }, {
        "value": 41,
        "caption": "CENTRAL AFRICAN REPUBLIC"
      }, {
        "value": 42,
        "caption": "CHAD"
      }, {
        "value": 43,
        "caption": "CHILE"
      }, {
        "value": 44,
        "caption": "CHINA"
      }, {
        "value": 45,
        "caption": "CHRISTMAS ISLAND"
      }, {
        "value": 46,
        "caption": "COCOS (KEELING) ISLANDS"
      }, {
        "value": 47,
        "caption": "COLOMBIA"
      }, {
        "value": 48,
        "caption": "COMOROS"
      }, {
        "value": 49,
        "caption": "CONGO"
      }, {
        "value": 50,
        "caption": "CONGO, THE DRC"
      }, {
        "value": 51,
        "caption": "COOK ISLANDS"
      }, {
        "value": 52,
        "caption": "COSTA RICA"
      }, {
        "value": 53,
        "caption": "COTE D'IVOIRE"
      }, {
        "value": 54,
        "caption": "CROATIA (local name: 'Hrvatska)"
      }, {
        "value": 55,
        "caption": "CUBA"
      }, {
        "value": 56,
        "caption": "CYPRUS"
      }, {
        "value": 57,
        "caption": "CZECH REPUBLIC"
      }, {
        "value": 58,
        "caption": "DENMARK"
      }, {
        "value": 59,
        "caption": "DJIBOUTI"
      }, {
        "value": 60,
        "caption": "DOMINICA"
      }, {
        "value": 61,
        "caption": "DOMINICAN REPUBLIC"
      }, {
        "value": 62,
        "caption": "EAST TIMOR"
      }, {
        "value": 63,
        "caption": "ECUADOR"
      }, {
        "value": 64,
        "caption": "EGYPT"
      }, {
        "value": 65,
        "caption": "EL SALVADOR"
      }, {
        "value": 66,
        "caption": "EQUATORIAL GUINEA"
      }, {
        "value": 67,
        "caption": "ERITREA"
      }, {
        "value": 68,
        "caption": "ESTONIA"
      }, {
        "value": 69,
        "caption": "ETHIOPIA"
      }, {
        "value": 70,
        "caption": "FALKLAND ISLANDS (MALVINAS)"
      }, {
        "value": 71,
        "caption": "FAROE ISLANDS"
      }, {
        "value": 72,
        "caption": "FIJI"
      }, {
        "value": 73,
        "caption": "FINLAND"
      }, {
        "value": 74,
        "caption": "FRANCE"
      }, {
        "value": 75,
        "caption": "FRANCE, METROPOLITAN"
      }, {
        "value": 76,
        "caption": "FRENCH GUIANA"
      }, {
        "value": 77,
        "caption": "FRENCH POLYNESIA"
      }, {
        "value": 78,
        "caption": "FRENCH SOUTHERN TERRITORIES"
      }, {
        "value": 79,
        "caption": "GABON"
      }, {
        "value": 80,
        "caption": "GAMBIA"
      }, {
        "value": 81,
        "caption": "GEORGIA"
      }, {
        "value": 82,
        "caption": "GERMANY"
      }, {
        "value": 83,
        "caption": "GHANA"
      }, {
        "value": 84,
        "caption": "GIBRALTAR"
      }, {
        "value": 85,
        "caption": "GREECE"
      }, {
        "value": 86,
        "caption": "GREENLAND"
      }, {
        "value": 87,
        "caption": "GRENADA"
      }, {
        "value": 88,
        "caption": "GUADELOUPE"
      }, {
        "value": 89,
        "caption": "GUAM"
      }, {
        "value": 90,
        "caption": "GUATEMALA"
      }, {
        "value": 91,
        "caption": "GUINEA"
      }, {
        "value": 92,
        "caption": "GUINEA-BISSAU"
      }, {
        "value": 93,
        "caption": "GUYANA"
      }, {
        "value": 94,
        "caption": "HAITI"
      }, {
        "value": 95,
        "caption": "HEARD AND MC DONALD ISLANDS"
      }, {
        "value": 96,
        "caption": "HOLY SEE (VATICAN CITY STATE)"
      }, {
        "value": 97,
        "caption": "HONDURAS"
      }, {
        "value": 98,
        "caption": "HONG KONG"
      }, {
        "value": 99,
        "caption": "HUNGARY"
      }, {
        "value": 100,
        "caption": "ICELAND"
      }, {
        "value": 101,
        "caption": "INDIA"
      }, {
        "value": 102,
        "caption": "INDONESIA"
      }, {
        "value": 103,
        "caption": "IRAN (ISLAMIC REPUBLIC OF)"
      }, {
        "value": 104,
        "caption": "IRAQ"
      }, {
        "value": 105,
        "caption": "IRELAND"
      }, {
        "value": 106,
        "caption": "ISRAEL"
      }, {
        "value": 107,
        "caption": "ITALY"
      }, {
        "value": 108,
        "caption": "JAMAICA"
      }, {
        "value": 109,
        "caption": "JAPAN"
      }, {
        "value": 110,
        "caption": "JORDAN"
      }, {
        "value": 111,
        "caption": "KAZAKHSTAN"
      }, {
        "value": 112,
        "caption": "KENYA"
      }, {
        "value": 113,
        "caption": "KIRIBATI"
      }, {
        "value": 114,
        "caption": "KOREA, D.P.R.O."
      }, {
        "value": 115,
        "caption": "KOREA, REPUBLIC OF"
      }, {
        "value": 116,
        "caption": "KUWAIT"
      }, {
        "value": 117,
        "caption": "KYRGYZSTAN"
      }, {
        "value": 118,
        "caption": "LAOS"
      }, {
        "value": 119,
        "caption": "LATVIA"
      }, {
        "value": 120,
        "caption": "LEBANON"
      }, {
        "value": 121,
        "caption": "LESOTHO"
      }, {
        "value": 122,
        "caption": "LIBERIA"
      }, {
        "value": 123,
        "caption": "LIBYAN ARAB JAMAHIRIYA"
      }, {
        "value": 124,
        "caption": "LIECHTENSTEIN"
      }, {
        "value": 125,
        "caption": "LITHUANIA"
      }, {
        "value": 126,
        "caption": "LUXEMBOURG"
      }, {
        "value": 127,
        "caption": "MACAU"
      }, {
        "value": 128,
        "caption": "MACEDONIA"
      }, {
        "value": 129,
        "caption": "MADAGASCAR"
      }, {
        "value": 130,
        "caption": "MALAWI"
      }, {
        "value": 131,
        "caption": "MALAYSIA"
      }, {
        "value": 132,
        "caption": "MALDIVES"
      }, {
        "value": 133,
        "caption": "MALI"
      }, {
        "value": 134,
        "caption": "MALTA"
      }, {
        "value": 135,
        "caption": "MARSHALL ISLANDS"
      }, {
        "value": 136,
        "caption": "MARTINIQUE"
      }, {
        "value": 137,
        "caption": "MAURITANIA"
      }, {
        "value": 138,
        "caption": "MAURITIUS"
      }, {
        "value": 139,
        "caption": "MAYOTTE"
      }, {
        "value": 140,
        "caption": "MEXICO"
      }, {
        "value": 141,
        "caption": "MICRONESIA, FEDERATED STATES OF"
      }, {
        "value": 142,
        "caption": "MOLDOVA, REPUBLIC OF"
      }, {
        "value": 143,
        "caption": "MONACO"
      }, {
        "value": 144,
        "caption": "MONGOLIA"
      }, {
        "value": 145,
        "caption": "MONTENEGRO"
      }, {
        "value": 146,
        "caption": "MONTSERRAT"
      }, {
        "value": 147,
        "caption": "MOROCCO"
      }, {
        "value": 148,
        "caption": "MOZAMBIQUE"
      }, {
        "value": 149,
        "caption": "MYANMAR (Burma)"
      }, {
        "value": 150,
        "caption": "NAMIBIA"
      }, {
        "value": 151,
        "caption": "NAURU"
      }, {
        "value": 152,
        "caption": "NEPAL"
      }, {
        "value": 153,
        "caption": "NETHERLANDS"
      }, {
        "value": 154,
        "caption": "NETHERLANDS ANTILLES"
      }, {
        "value": 155,
        "caption": "NEW CALEDONIA"
      }, {
        "value": 156,
        "caption": "NEW ZEALAND"
      }, {
        "value": 157,
        "caption": "NICARAGUA"
      }, {
        "value": 158,
        "caption": "NIGER"
      }, {
        "value": 159,
        "caption": "NIGERIA"
      }, {
        "value": 160,
        "caption": "NIUE"
      }, {
        "value": 161,
        "caption": "NORFOLK ISLAND"
      }, {
        "value": 162,
        "caption": "NORTHERN MARIANA ISLANDS"
      }, {
        "value": 163,
        "caption": "NORWAY"
      }, {
        "value": 164,
        "caption": "OMAN"
      }, {
        "value": 165,
        "caption": "PAKISTAN"
      }, {
        "value": 166,
        "caption": "PALAU"
      }, {
        "value": 167,
        "caption": "PANAMA"
      }, {
        "value": 168,
        "caption": "PAPUA NEW GUINEA"
      }, {
        "value": 169,
        "caption": "PARAGUAY"
      }, {
        "value": 170,
        "caption": "PERU"
      }, {
        "value": 171,
        "caption": "PHILIPPINES"
      }, {
        "value": 172,
        "caption": "PITCAIRN"
      }, {
        "value": 173,
        "caption": "POLAND"
      }, {
        "value": 174,
        "caption": "PORTUGAL"
      }, {
        "value": 175,
        "caption": "PUERTO RICO"
      }, {
        "value": 176,
        "caption": "QATAR"
      }, {
        "value": 177,
        "caption": "REUNION"
      }, {
        "value": 178,
        "caption": "ROMANIA"
      }, {
        "value": 179,
        "caption": "RUSSIAN FEDERATION"
      }, {
        "value": 180,
        "caption": "RWANDA"
      }, {
        "value": 181,
        "caption": "SAINT KITTS AND NEVIS"
      }, {
        "value": 182,
        "caption": "SAINT LUCIA"
      }, {
        "value": 183,
        "caption": "SAINT VINCENT AND THE GRENADINES"
      }, {
        "value": 184,
        "caption": "SAMOA"
      }, {
        "value": 185,
        "caption": "SAN MARINO"
      }, {
        "value": 186,
        "caption": "SAO TOME AND PRINCIPE"
      }, {
        "value": 187,
        "caption": "SAUDI ARABIA"
      }, {
        "value": 188,
        "caption": "SENEGAL"
      }, {
        "value": 189,
        "caption": "SERBIA"
      }, {
        "value": 190,
        "caption": "SEYCHELLES"
      }, {
        "value": 191,
        "caption": "SIERRA LEONE"
      }, {
        "value": 192,
        "caption": "SINGAPORE"
      }, {
        "value": 193,
        "caption": "SLOVAKIA (Slovak Republic)"
      }, {
        "value": 194,
        "caption": "SLOVENIA"
      }, {
        "value": 195,
        "caption": "SOLOMON ISLANDS"
      }, {
        "value": 196,
        "caption": "SOMALIA"
      }, {
        "value": 197,
        "caption": "SOUTH AFRICA"
      }, {
        "value": 198,
        "caption": "SOUTH GEORGIA AND SOUTH S.S."
      }, {
        "value": 199,
        "caption": "SOUTH SUDAN"
      }, {
        "value": 200,
        "caption": "SPAIN"
      }, {
        "value": 201,
        "caption": "SRI LANKA"
      }, {
        "value": 202,
        "caption": "ST. HELENA"
      }, {
        "value": 203,
        "caption": "ST. PIERRE AND MIQUELON"
      }, {
        "value": 204,
        "caption": "SUDAN"
      }, {
        "value": 205,
        "caption": "SURINAME"
      }, {
        "value": 206,
        "caption": "SVALBARD AND JAN MAYEN ISLANDS"
      }, {
        "value": 207,
        "caption": "SWAZILAND"
      }, {
        "value": 208,
        "caption": "SWEDEN"
      }, {
        "value": 209,
        "caption": "SWITZERLAND"
      }, {
        "value": 210,
        "caption": "SYRIAN ARAB REPUBLIC"
      }, {
        "value": 211,
        "caption": "TAIWAN, PROVINCE OF CHINA"
      }, {
        "value": 212,
        "caption": "TAJIKISTAN"
      }, {
        "value": 213,
        "caption": "TANZANIA, UNITED REPUBLIC OF"
      }, {
        "value": 214,
        "caption": "THAILAND"
      }, {
        "value": 215,
        "caption": "TOGO"
      }, {
        "value": 216,
        "caption": "TOKELAU"
      }, {
        "value": 217,
        "caption": "TONGA"
      }, {
        "value": 218,
        "caption": "TRINIDAD AND TOBAGO"
      }, {
        "value": 219,
        "caption": "TUNISIA"
      }, {
        "value": 220,
        "caption": "TURKEY"
      }, {
        "value": 221,
        "caption": "TURKMENISTAN"
      }, {
        "value": 222,
        "caption": "TURKS AND CAICOS ISLANDS"
      }, {
        "value": 223,
        "caption": "TUVALU"
      }, {
        "value": 224,
        "caption": "U.S. MINOR ISLANDS"
      }, {
        "value": 225,
        "caption": "UGANDA"
      }, {
        "value": 226,
        "caption": "UKRAINE"
      }, {
        "value": 227,
        "caption": "UNITED ARAB EMIRATES"
      }, {
        "value": 228,
        "caption": "UNITED KINGDOM"
      }, {
        "value": 229,
        "caption": "UNITED STATES"
      }, {
        "value": 230,
        "caption": "URUGUAY"
      }, {
        "value": 231,
        "caption": "UZBEKISTAN"
      }, {
        "value": 232,
        "caption": "VANUATU"
      }, {
        "value": 233,
        "caption": "VENEZUELA"
      }, {
        "value": 234,
        "caption": "VIETNAM"
      }, {
        "value": 235,
        "caption": "VIRGIN ISLANDS (BRITISH)"
      }, {
        "value": 236,
        "caption": "VIRGIN ISLANDS (U.S.)"
      }, {
        "value": 237,
        "caption": "WALLIS AND FUTUNA ISLANDS"
      }, {
        "value": 238,
        "caption": "WESTERN SAHARA"
      }, {
        "value": 239,
        "caption": "YEMEN"
      }, {
        "value": 240,
        "caption": "ZAMBIA"
      }, {
        "value": 241,
        "caption": "ZIMBABWE"
      }, {
        "value": 242,
        "caption": "ENGLAND"
      }, {
        "value": 243,
        "caption": "SCOTLAND"
      }, {
        "value": 244,
        "caption": "MULTI COUNTRY"
      }, {
        "value": 245,
        "caption": "HAWAII"
      }, {
        "value": 246,
        "caption": "GALAPAGOS"
      }];
      var optionEls = options.map(function (option) {
        return React.createElement(
          'option',
          {
            key: '' + _this2.props.config.key + option.value,
            tabIndex: '0',
            value: option.value
          },
          option.caption
        );
      });

      var classes = [this.bemSubComponent('option'), globals.FOCUS_CLASS].join(' ');

      return React.createElement(
        'select',
        {
          className: classes,
          onChange: this.onChange,
          ref: 'selectionBox'
        },
        React.createElement(
          'option',
          { value: '' },
          'Select an option'
        ),
        optionEls
      );
    }
  }]);

  return CountryDropdown;
}(Dropdown);

var defineProperty$4 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _defineProperty = interopDefault(require$$0$14);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

var _defineProperty = interopDefault(defineProperty$4);

var core_isIterable = createCommonjsModule(function (module) {
var classof   = interopDefault(require$$3$7)
  , ITERATOR  = interopDefault(require$$2$4)('iterator')
  , Iterators = interopDefault(require$$1$10);
module.exports = interopDefault(require$$0$8).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
});

var core_isIterable$1 = interopDefault(core_isIterable);


var require$$0$42 = Object.freeze({
	default: core_isIterable$1
});

var isIterable$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$42);
});

var isIterable$3 = interopDefault(isIterable$2);


var require$$0$41 = Object.freeze({
	default: isIterable$3
});

var isIterable = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$41), __esModule: true };
});

var isIterable$1 = interopDefault(isIterable);


var require$$1$17 = Object.freeze({
	default: isIterable$1
});

var slicedToArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _isIterable2 = interopDefault(require$$1$17);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = interopDefault(require$$0$34);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
});

var _slicedToArray = interopDefault(slicedToArray);

var stringify$2 = createCommonjsModule(function (module) {
var core  = interopDefault(require$$0$8)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify$2(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
});

var stringify$3 = interopDefault(stringify$2);


var require$$0$43 = Object.freeze({
	default: stringify$3
});

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$43), __esModule: true };
});

var _JSON$stringify = interopDefault(stringify$1);

var _mapping = createCommonjsModule(function (module, exports) {
/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 2, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 2, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 2, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'afterRearg': true, 'start': 1 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'afterRearg': true, 'start': 1 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'afterRearg': true, 'start': 1 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to track methods with placeholder support */
exports.placeholder = {
  'bind': true,
  'bindKey': true,
  'curry': true,
  'curryRight': true,
  'partial': true,
  'partialRight': true
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};
});

var _mapping$1 = interopDefault(_mapping);
var skipRearg = _mapping.skipRearg;
var skipFixed = _mapping.skipFixed;
var remap = _mapping.remap;
var realToAlias = _mapping.realToAlias;
var placeholder = _mapping.placeholder;
var mutate = _mapping.mutate;
var methodSpread = _mapping.methodSpread;
var methodRearg = _mapping.methodRearg;
var iterateeRearg = _mapping.iterateeRearg;
var iterateeAry = _mapping.iterateeAry;
var aryRearg = _mapping.aryRearg;
var aryMethod = _mapping.aryMethod;
var aliasToReal = _mapping.aliasToReal;

var require$$1$19 = Object.freeze({
	default: _mapping$1,
	skipRearg: skipRearg,
	skipFixed: skipFixed,
	remap: remap,
	realToAlias: realToAlias,
	placeholder: placeholder,
	mutate: mutate,
	methodSpread: methodSpread,
	methodRearg: methodRearg,
	iterateeRearg: iterateeRearg,
	iterateeAry: iterateeAry,
	aryRearg: aryRearg,
	aryMethod: aryMethod,
	aliasToReal: aliasToReal
});

var placeholder$1 = createCommonjsModule(function (module) {
/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};
});

var placeholder$2 = interopDefault(placeholder$1);


var require$$0$44 = Object.freeze({
	default: placeholder$2
});

var _baseConvert = createCommonjsModule(function (module) {
var mapping = interopDefault(require$$1$19),
    mutateMap = mapping.mutate,
    fallbackHolder = interopDefault(require$$0$44);

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var setPlaceholder,
      isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      placeholder$$1 = isLib ? func : fallbackHolder,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isFunction': util.isFunction,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'spread': util.spread,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isFunction = helpers.isFunction,
      keys = helpers.keys,
      rearg = helpers.rearg,
      spread = helpers.spread,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg$$1(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry$$1(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : spread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null) {
        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var oldOptions = options;
    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[name] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, name, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry$$1(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg$$1(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func) {
    name = mapping.aliasToReal[name] || name;

    var result,
        wrapped = func,
        wrapper = wrappers[name];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mutateMap.array[name]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mutateMap.object[name]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mutateMap.set[name]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (name == otherName) {
          var spreadData = mapping.methodSpread[name],
              afterRearg = spreadData && spreadData.afterRearg;

          result = afterRearg
            ? castFixed(name, castRearg(name, wrapped, aryKey), aryKey)
            : castRearg(name, castFixed(name, wrapped, aryKey), aryKey);

          result = castCap(name, result);
          result = castCurry(name, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(name, func);
    if (mapping.placeholder[name]) {
      setPlaceholder = true;
      result.placeholder = func.placeholder = placeholder$$1;
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  if (setPlaceholder) {
    _.placeholder = placeholder$$1;
  }
  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;
});

var _baseConvert$1 = interopDefault(_baseConvert);


var require$$1$18 = Object.freeze({
	default: _baseConvert$1
});

var identity = createCommonjsModule(function (module) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;
});

var identity$1 = interopDefault(identity);


var require$$2$9 = Object.freeze({
	default: identity$1
});

var isObject = createCommonjsModule(function (module) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;
});

var isObject$1 = interopDefault(isObject);


var require$$0$46 = Object.freeze({
	default: isObject$1
});

var isFunction = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$46);

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag || tag == proxyTag;
}

module.exports = isFunction;
});

var isFunction$1 = interopDefault(isFunction);


var require$$1$25 = Object.freeze({
	default: isFunction$1
});

var _freeGlobal = createCommonjsModule(function (module) {
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

module.exports = freeGlobal;
});

var _freeGlobal$1 = interopDefault(_freeGlobal);


var require$$0$49 = Object.freeze({
	default: _freeGlobal$1
});

var _root = createCommonjsModule(function (module) {
var freeGlobal = interopDefault(require$$0$49);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;
});

var _root$1 = interopDefault(_root);


var require$$0$48 = Object.freeze({
	default: _root$1
});

var _coreJsData = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$48);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;
});

var _coreJsData$1 = interopDefault(_coreJsData);


var require$$0$47 = Object.freeze({
	default: _coreJsData$1
});

var _isMasked = createCommonjsModule(function (module) {
var coreJsData = interopDefault(require$$0$47);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;
});

var _isMasked$1 = interopDefault(_isMasked);


var require$$2$11 = Object.freeze({
	default: _isMasked$1
});

var _toSource = createCommonjsModule(function (module) {
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;
});

var _toSource$1 = interopDefault(_toSource);


var require$$0$50 = Object.freeze({
	default: _toSource$1
});

var _baseIsNative = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$1$25),
    isMasked = interopDefault(require$$2$11),
    isObject = interopDefault(require$$0$46),
    toSource = interopDefault(require$$0$50);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;
});

var _baseIsNative$1 = interopDefault(_baseIsNative);


var require$$1$24 = Object.freeze({
	default: _baseIsNative$1
});

var _getValue = createCommonjsModule(function (module) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;
});

var _getValue$1 = interopDefault(_getValue);


var require$$0$51 = Object.freeze({
	default: _getValue$1
});

var _getNative = createCommonjsModule(function (module) {
var baseIsNative = interopDefault(require$$1$24),
    getValue = interopDefault(require$$0$51);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;
});

var _getNative$1 = interopDefault(_getNative);


var require$$1$23 = Object.freeze({
	default: _getNative$1
});

var _WeakMap = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23),
    root = interopDefault(require$$0$48);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;
});

var _WeakMap$1 = interopDefault(_WeakMap);


var require$$2$10 = Object.freeze({
	default: _WeakMap$1
});

var _metaMap = createCommonjsModule(function (module) {
var WeakMap = interopDefault(require$$2$10);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;
});

var _metaMap$1 = interopDefault(_metaMap);


var require$$1$22 = Object.freeze({
	default: _metaMap$1
});

var _baseSetData = createCommonjsModule(function (module) {
var identity = interopDefault(require$$2$9),
    metaMap = interopDefault(require$$1$22);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;
});

var _baseSetData$1 = interopDefault(_baseSetData);


var require$$1$21 = Object.freeze({
	default: _baseSetData$1
});

var _baseCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$46);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;
});

var _baseCreate$1 = interopDefault(_baseCreate);


var require$$2$12 = Object.freeze({
	default: _baseCreate$1
});

var _createCtor = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$12),
    isObject = interopDefault(require$$0$46);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;
});

var _createCtor$1 = interopDefault(_createCtor);


var require$$1$26 = Object.freeze({
	default: _createCtor$1
});

var _createBind = createCommonjsModule(function (module) {
var createCtor = interopDefault(require$$1$26),
    root = interopDefault(require$$0$48);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;
});

var _createBind$1 = interopDefault(_createBind);


var require$$8$3 = Object.freeze({
	default: _createBind$1
});

var _apply = createCommonjsModule(function (module) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;
});

var _apply$1 = interopDefault(_apply);


var require$$4$8 = Object.freeze({
	default: _apply$1
});

var _composeArgs = createCommonjsModule(function (module) {
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;
});

var _composeArgs$1 = interopDefault(_composeArgs);


var require$$2$13 = Object.freeze({
	default: _composeArgs$1
});

var _composeArgsRight = createCommonjsModule(function (module) {
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;
});

var _composeArgsRight$1 = interopDefault(_composeArgsRight);


var require$$1$27 = Object.freeze({
	default: _composeArgsRight$1
});

var _countHolders = createCommonjsModule(function (module) {
/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;
});

var _countHolders$1 = interopDefault(_countHolders);


var require$$6$2 = Object.freeze({
	default: _countHolders$1
});

var _baseLodash = createCommonjsModule(function (module) {
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;
});

var _baseLodash$1 = interopDefault(_baseLodash);


var require$$0$53 = Object.freeze({
	default: _baseLodash$1
});

var _LazyWrapper = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$12),
    baseLodash = interopDefault(require$$0$53);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;
});

var _LazyWrapper$1 = interopDefault(_LazyWrapper);


var require$$2$14 = Object.freeze({
	default: _LazyWrapper$1
});

var noop = createCommonjsModule(function (module) {
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;
});

var noop$1 = interopDefault(noop);


var require$$0$54 = Object.freeze({
	default: noop$1
});

var _getData = createCommonjsModule(function (module) {
var metaMap = interopDefault(require$$1$22),
    noop = interopDefault(require$$0$54);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;
});

var _getData$1 = interopDefault(_getData);


var require$$3$8 = Object.freeze({
	default: _getData$1
});

var _realNames = createCommonjsModule(function (module) {
/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;
});

var _realNames$1 = interopDefault(_realNames);


var require$$0$55 = Object.freeze({
	default: _realNames$1
});

var _getFuncName = createCommonjsModule(function (module) {
var realNames = interopDefault(require$$0$55);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;
});

var _getFuncName$1 = interopDefault(_getFuncName);


var require$$2$15 = Object.freeze({
	default: _getFuncName$1
});

var _LodashWrapper = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$12),
    baseLodash = interopDefault(require$$0$53);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;
});

var _LodashWrapper$1 = interopDefault(_LodashWrapper);


var require$$5$2 = Object.freeze({
	default: _LodashWrapper$1
});

var isArray$1 = createCommonjsModule(function (module) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;
});

var isArray$2 = interopDefault(isArray$1);


var require$$1$28 = Object.freeze({
	default: isArray$2
});

var isObjectLike = createCommonjsModule(function (module) {
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

module.exports = isObjectLike;
});

var isObjectLike$1 = interopDefault(isObjectLike);


var require$$0$57 = Object.freeze({
	default: isObjectLike$1
});

var _copyArray = createCommonjsModule(function (module) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;
});

var _copyArray$1 = interopDefault(_copyArray);


var require$$4$11 = Object.freeze({
	default: _copyArray$1
});

var _wrapperClone = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$14),
    LodashWrapper = interopDefault(require$$5$2),
    copyArray = interopDefault(require$$4$11);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;
});

var _wrapperClone$1 = interopDefault(_wrapperClone);


var require$$0$58 = Object.freeze({
	default: _wrapperClone$1
});

var wrapperLodash = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$14),
    LodashWrapper = interopDefault(require$$5$2),
    baseLodash = interopDefault(require$$0$53),
    isArray = interopDefault(require$$1$28),
    isObjectLike = interopDefault(require$$0$57),
    wrapperClone = interopDefault(require$$0$58);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array of at least `200` elements
 * and any iteratees accept only one argument. The heuristic for whether a
 * section qualifies for shortcut fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;
});

var wrapperLodash$1 = interopDefault(wrapperLodash);


var require$$0$56 = Object.freeze({
	default: wrapperLodash$1
});

var _isLaziable = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$14),
    getData = interopDefault(require$$3$8),
    getFuncName = interopDefault(require$$2$15),
    lodash = interopDefault(require$$0$56);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;
});

var _isLaziable$1 = interopDefault(_isLaziable);


var require$$0$52 = Object.freeze({
	default: _isLaziable$1
});

var _shortOut = createCommonjsModule(function (module) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 500,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;
});

var _shortOut$1 = interopDefault(_shortOut);


var require$$0$59 = Object.freeze({
	default: _shortOut$1
});

var _setData = createCommonjsModule(function (module) {
var baseSetData = interopDefault(require$$1$21),
    shortOut = interopDefault(require$$0$59);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;
});

var _setData$1 = interopDefault(_setData);


var require$$1$29 = Object.freeze({
	default: _setData$1
});

var _getWrapDetails = createCommonjsModule(function (module) {
/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;
});

var _getWrapDetails$1 = interopDefault(_getWrapDetails);


var require$$3$9 = Object.freeze({
	default: _getWrapDetails$1
});

var _insertWrapDetails = createCommonjsModule(function (module) {
/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;
});

var _insertWrapDetails$1 = interopDefault(_insertWrapDetails);


var require$$2$16 = Object.freeze({
	default: _insertWrapDetails$1
});

var constant = createCommonjsModule(function (module) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;
});

var constant$1 = interopDefault(constant);


var require$$2$17 = Object.freeze({
	default: constant$1
});

var _defineProperty$1 = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
});

var _defineProperty$2 = interopDefault(_defineProperty$1);


var require$$0$62 = Object.freeze({
	default: _defineProperty$2
});

var _baseSetToString = createCommonjsModule(function (module) {
var constant = interopDefault(require$$2$17),
    defineProperty = interopDefault(require$$0$62),
    identity = interopDefault(require$$2$9);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;
});

var _baseSetToString$1 = interopDefault(_baseSetToString);


var require$$1$30 = Object.freeze({
	default: _baseSetToString$1
});

var _setToString = createCommonjsModule(function (module) {
var baseSetToString = interopDefault(require$$1$30),
    shortOut = interopDefault(require$$0$59);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;
});

var _setToString$1 = interopDefault(_setToString);


var require$$0$61 = Object.freeze({
	default: _setToString$1
});

var _arrayEach = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;
});

var _arrayEach$1 = interopDefault(_arrayEach);


var require$$14$1 = Object.freeze({
	default: _arrayEach$1
});

var _baseFindIndex = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;
});

var _baseFindIndex$1 = interopDefault(_baseFindIndex);


var require$$2$18 = Object.freeze({
	default: _baseFindIndex$1
});

var _baseIsNaN = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;
});

var _baseIsNaN$1 = interopDefault(_baseIsNaN);


var require$$1$31 = Object.freeze({
	default: _baseIsNaN$1
});

var _strictIndexOf = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;
});

var _strictIndexOf$1 = interopDefault(_strictIndexOf);


var require$$0$66 = Object.freeze({
	default: _strictIndexOf$1
});

var _baseIndexOf = createCommonjsModule(function (module) {
var baseFindIndex = interopDefault(require$$2$18),
    baseIsNaN = interopDefault(require$$1$31),
    strictIndexOf = interopDefault(require$$0$66);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;
});

var _baseIndexOf$1 = interopDefault(_baseIndexOf);


var require$$0$65 = Object.freeze({
	default: _baseIndexOf$1
});

var _arrayIncludes$2 = createCommonjsModule(function (module) {
var baseIndexOf = interopDefault(require$$0$65);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;
});

var _arrayIncludes$3 = interopDefault(_arrayIncludes$2);


var require$$0$64 = Object.freeze({
	default: _arrayIncludes$3
});

var _updateWrapDetails = createCommonjsModule(function (module) {
var arrayEach = interopDefault(require$$14$1),
    arrayIncludes = interopDefault(require$$0$64);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;
});

var _updateWrapDetails$1 = interopDefault(_updateWrapDetails);


var require$$0$63 = Object.freeze({
	default: _updateWrapDetails$1
});

var _setWrapToString = createCommonjsModule(function (module) {
var getWrapDetails = interopDefault(require$$3$9),
    insertWrapDetails = interopDefault(require$$2$16),
    setToString = interopDefault(require$$0$61),
    updateWrapDetails = interopDefault(require$$0$63);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;
});

var _setWrapToString$1 = interopDefault(_setWrapToString);


var require$$0$60 = Object.freeze({
	default: _setWrapToString$1
});

var _createRecurry = createCommonjsModule(function (module) {
var isLaziable = interopDefault(require$$0$52),
    setData = interopDefault(require$$1$29),
    setWrapToString = interopDefault(require$$0$60);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;
});

var _createRecurry$1 = interopDefault(_createRecurry);


var require$$4$10 = Object.freeze({
	default: _createRecurry$1
});

var _getHolder = createCommonjsModule(function (module) {
/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;
});

var _getHolder$1 = interopDefault(_getHolder);


var require$$3$10 = Object.freeze({
	default: _getHolder$1
});

var _isIndex = createCommonjsModule(function (module) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;
});

var _isIndex$1 = interopDefault(_isIndex);


var require$$3$11 = Object.freeze({
	default: _isIndex$1
});

var _reorder = createCommonjsModule(function (module) {
var copyArray = interopDefault(require$$4$11),
    isIndex = interopDefault(require$$3$11);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;
});

var _reorder$1 = interopDefault(_reorder);


var require$$2$19 = Object.freeze({
	default: _reorder$1
});

var _replaceHolders = createCommonjsModule(function (module) {
/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;
});

var _replaceHolders$1 = interopDefault(_replaceHolders);


var require$$0$67 = Object.freeze({
	default: _replaceHolders$1
});

var _createHybrid = createCommonjsModule(function (module) {
var composeArgs = interopDefault(require$$2$13),
    composeArgsRight = interopDefault(require$$1$27),
    countHolders = interopDefault(require$$6$2),
    createCtor = interopDefault(require$$1$26),
    createRecurry = interopDefault(require$$4$10),
    getHolder = interopDefault(require$$3$10),
    reorder = interopDefault(require$$2$19),
    replaceHolders = interopDefault(require$$0$67),
    root = interopDefault(require$$0$48);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    ARY_FLAG = 128,
    FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;
});

var _createHybrid$1 = interopDefault(_createHybrid);


var require$$4$9 = Object.freeze({
	default: _createHybrid$1
});

var _createCurry = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    createCtor = interopDefault(require$$1$26),
    createHybrid = interopDefault(require$$4$9),
    createRecurry = interopDefault(require$$4$10),
    getHolder = interopDefault(require$$3$10),
    replaceHolders = interopDefault(require$$0$67),
    root = interopDefault(require$$0$48);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;
});

var _createCurry$1 = interopDefault(_createCurry);


var require$$7$1 = Object.freeze({
	default: _createCurry$1
});

var _createPartial = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    createCtor = interopDefault(require$$1$26),
    root = interopDefault(require$$0$48);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;
});

var _createPartial$1 = interopDefault(_createPartial);


var require$$5$3 = Object.freeze({
	default: _createPartial$1
});

var _mergeData = createCommonjsModule(function (module) {
var composeArgs = interopDefault(require$$2$13),
    composeArgsRight = interopDefault(require$$1$27),
    replaceHolders = interopDefault(require$$0$67);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);

  var isCombo =
    ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
    ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;
});

var _mergeData$1 = interopDefault(_mergeData);


var require$$3$12 = Object.freeze({
	default: _mergeData$1
});

var isSymbol = createCommonjsModule(function (module) {
var isObjectLike = interopDefault(require$$0$57);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

module.exports = isSymbol;
});

var isSymbol$1 = interopDefault(isSymbol);


var require$$2$20 = Object.freeze({
	default: isSymbol$1
});

var toNumber = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$46),
    isSymbol = interopDefault(require$$2$20);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;
});

var toNumber$1 = interopDefault(toNumber);


var require$$0$70 = Object.freeze({
	default: toNumber$1
});

var toFinite = createCommonjsModule(function (module) {
var toNumber = interopDefault(require$$0$70);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;
});

var toFinite$1 = interopDefault(toFinite);


var require$$0$69 = Object.freeze({
	default: toFinite$1
});

var toInteger = createCommonjsModule(function (module) {
var toFinite = interopDefault(require$$0$69);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;
});

var toInteger$1 = interopDefault(toInteger);


var require$$0$68 = Object.freeze({
	default: toInteger$1
});

var _createWrap = createCommonjsModule(function (module) {
var baseSetData = interopDefault(require$$1$21),
    createBind = interopDefault(require$$8$3),
    createCurry = interopDefault(require$$7$1),
    createHybrid = interopDefault(require$$4$9),
    createPartial = interopDefault(require$$5$3),
    getData = interopDefault(require$$3$8),
    mergeData = interopDefault(require$$3$12),
    setData = interopDefault(require$$1$29),
    setWrapToString = interopDefault(require$$0$60),
    toInteger = interopDefault(require$$0$68);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;
});

var _createWrap$1 = interopDefault(_createWrap);


var require$$1$20 = Object.freeze({
	default: _createWrap$1
});

var ary = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$20);

/** Used to compose bitmasks for function metadata. */
var ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;
});

var ary$1 = interopDefault(ary);


var require$$12 = Object.freeze({
	default: ary$1
});

var _baseAssignValue = createCommonjsModule(function (module) {
var defineProperty = interopDefault(require$$0$62);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;
});

var _baseAssignValue$1 = interopDefault(_baseAssignValue);


var require$$1$33 = Object.freeze({
	default: _baseAssignValue$1
});

var eq = createCommonjsModule(function (module) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;
});

var eq$1 = interopDefault(eq);


var require$$3$13 = Object.freeze({
	default: eq$1
});

var _assignValue = createCommonjsModule(function (module) {
var baseAssignValue = interopDefault(require$$1$33),
    eq = interopDefault(require$$3$13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;
});

var _assignValue$1 = interopDefault(_assignValue);


var require$$13 = Object.freeze({
	default: _assignValue$1
});

var _copyObject = createCommonjsModule(function (module) {
var assignValue = interopDefault(require$$13),
    baseAssignValue = interopDefault(require$$1$33);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;
});

var _copyObject$1 = interopDefault(_copyObject);


var require$$1$32 = Object.freeze({
	default: _copyObject$1
});

var _baseTimes = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;
});

var _baseTimes$1 = interopDefault(_baseTimes);


var require$$5$4 = Object.freeze({
	default: _baseTimes$1
});

var _baseIsArguments = createCommonjsModule(function (module) {
var isObjectLike = interopDefault(require$$0$57);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && objectToString.call(value) == argsTag;
}

module.exports = baseIsArguments;
});

var _baseIsArguments$1 = interopDefault(_baseIsArguments);


var require$$1$35 = Object.freeze({
	default: _baseIsArguments$1
});

var isArguments = createCommonjsModule(function (module) {
var baseIsArguments = interopDefault(require$$1$35),
    isObjectLike = interopDefault(require$$0$57);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;
});

var isArguments$1 = interopDefault(isArguments);


var require$$1$34 = Object.freeze({
	default: isArguments$1
});

var stubFalse = createCommonjsModule(function (module) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;
});

var stubFalse$1 = interopDefault(stubFalse);


var require$$0$72 = Object.freeze({
	default: stubFalse$1
});

var isBuffer = createCommonjsModule(function (module, exports) {
var root = interopDefault(require$$0$48),
    stubFalse = interopDefault(require$$0$72);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});

var isBuffer$1 = interopDefault(isBuffer);


var require$$1$36 = Object.freeze({
	default: isBuffer$1
});

var isLength = createCommonjsModule(function (module) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;
});

var isLength$1 = interopDefault(isLength);


var require$$1$37 = Object.freeze({
	default: isLength$1
});

var _baseIsTypedArray = createCommonjsModule(function (module) {
var isLength = interopDefault(require$$1$37),
    isObjectLike = interopDefault(require$$0$57);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = baseIsTypedArray;
});

var _baseIsTypedArray$1 = interopDefault(_baseIsTypedArray);


var require$$2$22 = Object.freeze({
	default: _baseIsTypedArray$1
});

var _baseUnary = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;
});

var _baseUnary$1 = interopDefault(_baseUnary);


var require$$1$38 = Object.freeze({
	default: _baseUnary$1
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = interopDefault(require$$0$49);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var _nodeUtil$1 = interopDefault(_nodeUtil);


var require$$0$74 = Object.freeze({
	default: _nodeUtil$1
});

var isTypedArray = createCommonjsModule(function (module) {
var baseIsTypedArray = interopDefault(require$$2$22),
    baseUnary = interopDefault(require$$1$38),
    nodeUtil = interopDefault(require$$0$74);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;
});

var isTypedArray$1 = interopDefault(isTypedArray);


var require$$0$73 = Object.freeze({
	default: isTypedArray$1
});

var _arrayLikeKeys = createCommonjsModule(function (module) {
var baseTimes = interopDefault(require$$5$4),
    isArguments = interopDefault(require$$1$34),
    isArray = interopDefault(require$$1$28),
    isBuffer = interopDefault(require$$1$36),
    isIndex = interopDefault(require$$3$11),
    isTypedArray = interopDefault(require$$0$73);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;
});

var _arrayLikeKeys$1 = interopDefault(_arrayLikeKeys);


var require$$2$21 = Object.freeze({
	default: _arrayLikeKeys$1
});

var _isPrototype = createCommonjsModule(function (module) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;
});

var _isPrototype$1 = interopDefault(_isPrototype);


var require$$0$75 = Object.freeze({
	default: _isPrototype$1
});

var _overArg = createCommonjsModule(function (module) {
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

module.exports = overArg;
});

var _overArg$1 = interopDefault(_overArg);


var require$$0$77 = Object.freeze({
	default: _overArg$1
});

var _nativeKeys = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$77);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;
});

var _nativeKeys$1 = interopDefault(_nativeKeys);


var require$$0$76 = Object.freeze({
	default: _nativeKeys$1
});

var _baseKeys = createCommonjsModule(function (module) {
var isPrototype = interopDefault(require$$0$75),
    nativeKeys = interopDefault(require$$0$76);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;
});

var _baseKeys$1 = interopDefault(_baseKeys);


var require$$1$39 = Object.freeze({
	default: _baseKeys$1
});

var isArrayLike = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$1$25),
    isLength = interopDefault(require$$1$37);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;
});

var isArrayLike$1 = interopDefault(isArrayLike);


var require$$0$78 = Object.freeze({
	default: isArrayLike$1
});

var keys$1 = createCommonjsModule(function (module) {
var arrayLikeKeys = interopDefault(require$$2$21),
    baseKeys = interopDefault(require$$1$39),
    isArrayLike = interopDefault(require$$0$78);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;
});

var keys$2 = interopDefault(keys$1);


var require$$0$71 = Object.freeze({
	default: keys$2
});

var _baseAssign = createCommonjsModule(function (module) {
var copyObject = interopDefault(require$$1$32),
    keys = interopDefault(require$$0$71);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;
});

var _baseAssign$1 = interopDefault(_baseAssign);


var require$$12$1 = Object.freeze({
	default: _baseAssign$1
});

var _listCacheClear = createCommonjsModule(function (module) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;
});

var _listCacheClear$1 = interopDefault(_listCacheClear);


var require$$4$12 = Object.freeze({
	default: _listCacheClear$1
});

var _assocIndexOf = createCommonjsModule(function (module) {
var eq = interopDefault(require$$3$13);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;
});

var _assocIndexOf$1 = interopDefault(_assocIndexOf);


var require$$0$79 = Object.freeze({
	default: _assocIndexOf$1
});

var _listCacheDelete = createCommonjsModule(function (module) {
var assocIndexOf = interopDefault(require$$0$79);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;
});

var _listCacheDelete$1 = interopDefault(_listCacheDelete);


var require$$3$14 = Object.freeze({
	default: _listCacheDelete$1
});

var _listCacheGet = createCommonjsModule(function (module) {
var assocIndexOf = interopDefault(require$$0$79);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;
});

var _listCacheGet$1 = interopDefault(_listCacheGet);


var require$$2$23 = Object.freeze({
	default: _listCacheGet$1
});

var _listCacheHas = createCommonjsModule(function (module) {
var assocIndexOf = interopDefault(require$$0$79);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;
});

var _listCacheHas$1 = interopDefault(_listCacheHas);


var require$$1$42 = Object.freeze({
	default: _listCacheHas$1
});

var _listCacheSet = createCommonjsModule(function (module) {
var assocIndexOf = interopDefault(require$$0$79);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;
});

var _listCacheSet$1 = interopDefault(_listCacheSet);


var require$$0$80 = Object.freeze({
	default: _listCacheSet$1
});

var _ListCache = createCommonjsModule(function (module) {
var listCacheClear = interopDefault(require$$4$12),
    listCacheDelete = interopDefault(require$$3$14),
    listCacheGet = interopDefault(require$$2$23),
    listCacheHas = interopDefault(require$$1$42),
    listCacheSet = interopDefault(require$$0$80);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;
});

var _ListCache$1 = interopDefault(_ListCache);


var require$$1$41 = Object.freeze({
	default: _ListCache$1
});

var _stackClear = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$41);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;
});

var _stackClear$1 = interopDefault(_stackClear);


var require$$4$13 = Object.freeze({
	default: _stackClear$1
});

var _stackDelete = createCommonjsModule(function (module) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;
});

var _stackDelete$1 = interopDefault(_stackDelete);


var require$$3$15 = Object.freeze({
	default: _stackDelete$1
});

var _stackGet = createCommonjsModule(function (module) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;
});

var _stackGet$1 = interopDefault(_stackGet);


var require$$2$24 = Object.freeze({
	default: _stackGet$1
});

var _stackHas = createCommonjsModule(function (module) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;
});

var _stackHas$1 = interopDefault(_stackHas);


var require$$1$43 = Object.freeze({
	default: _stackHas$1
});

var _Map = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23),
    root = interopDefault(require$$0$48);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;
});

var _Map$1 = interopDefault(_Map);


var require$$5$5 = Object.freeze({
	default: _Map$1
});

var _nativeCreate = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;
});

var _nativeCreate$1 = interopDefault(_nativeCreate);


var require$$0$83 = Object.freeze({
	default: _nativeCreate$1
});

var _hashClear = createCommonjsModule(function (module) {
var nativeCreate = interopDefault(require$$0$83);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;
});

var _hashClear$1 = interopDefault(_hashClear);


var require$$4$15 = Object.freeze({
	default: _hashClear$1
});

var _hashDelete = createCommonjsModule(function (module) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;
});

var _hashDelete$1 = interopDefault(_hashDelete);


var require$$3$16 = Object.freeze({
	default: _hashDelete$1
});

var _hashGet = createCommonjsModule(function (module) {
var nativeCreate = interopDefault(require$$0$83);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;
});

var _hashGet$1 = interopDefault(_hashGet);


var require$$2$26 = Object.freeze({
	default: _hashGet$1
});

var _hashHas = createCommonjsModule(function (module) {
var nativeCreate = interopDefault(require$$0$83);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;
});

var _hashHas$1 = interopDefault(_hashHas);


var require$$1$44 = Object.freeze({
	default: _hashHas$1
});

var _hashSet = createCommonjsModule(function (module) {
var nativeCreate = interopDefault(require$$0$83);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;
});

var _hashSet$1 = interopDefault(_hashSet);


var require$$0$84 = Object.freeze({
	default: _hashSet$1
});

var _Hash = createCommonjsModule(function (module) {
var hashClear = interopDefault(require$$4$15),
    hashDelete = interopDefault(require$$3$16),
    hashGet = interopDefault(require$$2$26),
    hashHas = interopDefault(require$$1$44),
    hashSet = interopDefault(require$$0$84);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;
});

var _Hash$1 = interopDefault(_Hash);


var require$$2$25 = Object.freeze({
	default: _Hash$1
});

var _mapCacheClear = createCommonjsModule(function (module) {
var Hash = interopDefault(require$$2$25),
    ListCache = interopDefault(require$$1$41),
    Map = interopDefault(require$$5$5);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;
});

var _mapCacheClear$1 = interopDefault(_mapCacheClear);


var require$$4$14 = Object.freeze({
	default: _mapCacheClear$1
});

var _isKeyable = createCommonjsModule(function (module) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;
});

var _isKeyable$1 = interopDefault(_isKeyable);


var require$$0$86 = Object.freeze({
	default: _isKeyable$1
});

var _getMapData = createCommonjsModule(function (module) {
var isKeyable = interopDefault(require$$0$86);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;
});

var _getMapData$1 = interopDefault(_getMapData);


var require$$0$85 = Object.freeze({
	default: _getMapData$1
});

var _mapCacheDelete = createCommonjsModule(function (module) {
var getMapData = interopDefault(require$$0$85);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;
});

var _mapCacheDelete$1 = interopDefault(_mapCacheDelete);


var require$$3$17 = Object.freeze({
	default: _mapCacheDelete$1
});

var _mapCacheGet = createCommonjsModule(function (module) {
var getMapData = interopDefault(require$$0$85);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;
});

var _mapCacheGet$1 = interopDefault(_mapCacheGet);


var require$$2$27 = Object.freeze({
	default: _mapCacheGet$1
});

var _mapCacheHas = createCommonjsModule(function (module) {
var getMapData = interopDefault(require$$0$85);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;
});

var _mapCacheHas$1 = interopDefault(_mapCacheHas);


var require$$1$45 = Object.freeze({
	default: _mapCacheHas$1
});

var _mapCacheSet = createCommonjsModule(function (module) {
var getMapData = interopDefault(require$$0$85);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;
});

var _mapCacheSet$1 = interopDefault(_mapCacheSet);


var require$$0$87 = Object.freeze({
	default: _mapCacheSet$1
});

var _MapCache = createCommonjsModule(function (module) {
var mapCacheClear = interopDefault(require$$4$14),
    mapCacheDelete = interopDefault(require$$3$17),
    mapCacheGet = interopDefault(require$$2$27),
    mapCacheHas = interopDefault(require$$1$45),
    mapCacheSet = interopDefault(require$$0$87);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;
});

var _MapCache$1 = interopDefault(_MapCache);


var require$$0$82 = Object.freeze({
	default: _MapCache$1
});

var _stackSet = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$41),
    Map = interopDefault(require$$5$5),
    MapCache = interopDefault(require$$0$82);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;
});

var _stackSet$1 = interopDefault(_stackSet);


var require$$0$81 = Object.freeze({
	default: _stackSet$1
});

var _Stack = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$41),
    stackClear = interopDefault(require$$4$13),
    stackDelete = interopDefault(require$$3$15),
    stackGet = interopDefault(require$$2$24),
    stackHas = interopDefault(require$$1$43),
    stackSet = interopDefault(require$$0$81);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;
});

var _Stack$1 = interopDefault(_Stack);


var require$$7$2 = Object.freeze({
	default: _Stack$1
});

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var root = interopDefault(require$$0$48);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

var _cloneBuffer$1 = interopDefault(_cloneBuffer);


var require$$11$1 = Object.freeze({
	default: _cloneBuffer$1
});

var stubArray = createCommonjsModule(function (module) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;
});

var stubArray$1 = interopDefault(stubArray);


var require$$0$88 = Object.freeze({
	default: stubArray$1
});

var _getSymbols = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$77),
    stubArray = interopDefault(require$$0$88);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

module.exports = getSymbols;
});

var _getSymbols$1 = interopDefault(_getSymbols);


var require$$1$46 = Object.freeze({
	default: _getSymbols$1
});

var _copySymbols = createCommonjsModule(function (module) {
var copyObject = interopDefault(require$$1$32),
    getSymbols = interopDefault(require$$1$46);

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;
});

var _copySymbols$1 = interopDefault(_copySymbols);


var require$$9$1 = Object.freeze({
	default: _copySymbols$1
});

var _arrayPush = createCommonjsModule(function (module) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;
});

var _arrayPush$1 = interopDefault(_arrayPush);


var require$$3$18 = Object.freeze({
	default: _arrayPush$1
});

var _baseGetAllKeys = createCommonjsModule(function (module) {
var arrayPush = interopDefault(require$$3$18),
    isArray = interopDefault(require$$1$28);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;
});

var _baseGetAllKeys$1 = interopDefault(_baseGetAllKeys);


var require$$2$28 = Object.freeze({
	default: _baseGetAllKeys$1
});

var _getAllKeys = createCommonjsModule(function (module) {
var baseGetAllKeys = interopDefault(require$$2$28),
    getSymbols = interopDefault(require$$1$46),
    keys = interopDefault(require$$0$71);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;
});

var _getAllKeys$1 = interopDefault(_getAllKeys);


var require$$8$4 = Object.freeze({
	default: _getAllKeys$1
});

var _DataView = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23),
    root = interopDefault(require$$0$48);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;
});

var _DataView$1 = interopDefault(_DataView);


var require$$6$3 = Object.freeze({
	default: _DataView$1
});

var _Promise$1 = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23),
    root = interopDefault(require$$0$48);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;
});

var _Promise$2 = interopDefault(_Promise$1);


var require$$4$16 = Object.freeze({
	default: _Promise$2
});

var _Set = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$23),
    root = interopDefault(require$$0$48);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;
});

var _Set$1 = interopDefault(_Set);


var require$$3$20 = Object.freeze({
	default: _Set$1
});

var _baseGetTag = createCommonjsModule(function (module) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

module.exports = baseGetTag;
});

var _baseGetTag$1 = interopDefault(_baseGetTag);


var require$$1$47 = Object.freeze({
	default: _baseGetTag$1
});

var _getTag = createCommonjsModule(function (module) {
var DataView = interopDefault(require$$6$3),
    Map = interopDefault(require$$5$5),
    Promise = interopDefault(require$$4$16),
    Set = interopDefault(require$$3$20),
    WeakMap = interopDefault(require$$2$10),
    baseGetTag = interopDefault(require$$1$47),
    toSource = interopDefault(require$$0$50);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;
});

var _getTag$1 = interopDefault(_getTag);


var require$$3$19 = Object.freeze({
	default: _getTag$1
});

var _initCloneArray = createCommonjsModule(function (module) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;
});

var _initCloneArray$1 = interopDefault(_initCloneArray);


var require$$6$4 = Object.freeze({
	default: _initCloneArray$1
});

var _Uint8Array = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$48);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;
});

var _Uint8Array$1 = interopDefault(_Uint8Array);


var require$$4$17 = Object.freeze({
	default: _Uint8Array$1
});

var _cloneArrayBuffer = createCommonjsModule(function (module) {
var Uint8Array = interopDefault(require$$4$17);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;
});

var _cloneArrayBuffer$1 = interopDefault(_cloneArrayBuffer);


var require$$0$89 = Object.freeze({
	default: _cloneArrayBuffer$1
});

var _cloneDataView = createCommonjsModule(function (module) {
var cloneArrayBuffer = interopDefault(require$$0$89);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;
});

var _cloneDataView$1 = interopDefault(_cloneDataView);


var require$$5$7 = Object.freeze({
	default: _cloneDataView$1
});

var _addMapEntry = createCommonjsModule(function (module) {
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;
});

var _addMapEntry$1 = interopDefault(_addMapEntry);


var require$$2$29 = Object.freeze({
	default: _addMapEntry$1
});

var _arrayReduce = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;
});

var _arrayReduce$1 = interopDefault(_arrayReduce);


var require$$1$48 = Object.freeze({
	default: _arrayReduce$1
});

var _mapToArray = createCommonjsModule(function (module) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;
});

var _mapToArray$1 = interopDefault(_mapToArray);


var require$$1$49 = Object.freeze({
	default: _mapToArray$1
});

var _cloneMap = createCommonjsModule(function (module) {
var addMapEntry = interopDefault(require$$2$29),
    arrayReduce = interopDefault(require$$1$48),
    mapToArray = interopDefault(require$$1$49);

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;
});

var _cloneMap$1 = interopDefault(_cloneMap);


var require$$4$18 = Object.freeze({
	default: _cloneMap$1
});

var _cloneRegExp = createCommonjsModule(function (module) {
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;
});

var _cloneRegExp$1 = interopDefault(_cloneRegExp);


var require$$3$21 = Object.freeze({
	default: _cloneRegExp$1
});

var _addSetEntry = createCommonjsModule(function (module) {
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;
});

var _addSetEntry$1 = interopDefault(_addSetEntry);


var require$$2$31 = Object.freeze({
	default: _addSetEntry$1
});

var _setToArray = createCommonjsModule(function (module) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;
});

var _setToArray$1 = interopDefault(_setToArray);


var require$$0$90 = Object.freeze({
	default: _setToArray$1
});

var _cloneSet = createCommonjsModule(function (module) {
var addSetEntry = interopDefault(require$$2$31),
    arrayReduce = interopDefault(require$$1$48),
    setToArray = interopDefault(require$$0$90);

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;
});

var _cloneSet$1 = interopDefault(_cloneSet);


var require$$2$30 = Object.freeze({
	default: _cloneSet$1
});

var _Symbol = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$48);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;
});

var _Symbol$1 = interopDefault(_Symbol);


var require$$2$32 = Object.freeze({
	default: _Symbol$1
});

var _cloneSymbol = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$32);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;
});

var _cloneSymbol$1 = interopDefault(_cloneSymbol);


var require$$1$50 = Object.freeze({
	default: _cloneSymbol$1
});

var _cloneTypedArray = createCommonjsModule(function (module) {
var cloneArrayBuffer = interopDefault(require$$0$89);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;
});

var _cloneTypedArray$1 = interopDefault(_cloneTypedArray);


var require$$0$91 = Object.freeze({
	default: _cloneTypedArray$1
});

var _initCloneByTag = createCommonjsModule(function (module) {
var cloneArrayBuffer = interopDefault(require$$0$89),
    cloneDataView = interopDefault(require$$5$7),
    cloneMap = interopDefault(require$$4$18),
    cloneRegExp = interopDefault(require$$3$21),
    cloneSet = interopDefault(require$$2$30),
    cloneSymbol = interopDefault(require$$1$50),
    cloneTypedArray = interopDefault(require$$0$91);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;
});

var _initCloneByTag$1 = interopDefault(_initCloneByTag);


var require$$5$6 = Object.freeze({
	default: _initCloneByTag$1
});

var _getPrototype = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$77);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;
});

var _getPrototype$1 = interopDefault(_getPrototype);


var require$$1$51 = Object.freeze({
	default: _getPrototype$1
});

var _initCloneObject = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$12),
    getPrototype = interopDefault(require$$1$51),
    isPrototype = interopDefault(require$$0$75);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;
});

var _initCloneObject$1 = interopDefault(_initCloneObject);


var require$$4$19 = Object.freeze({
	default: _initCloneObject$1
});

var _baseClone = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$2),
    arrayEach = interopDefault(require$$14$1),
    assignValue = interopDefault(require$$13),
    baseAssign = interopDefault(require$$12$1),
    cloneBuffer = interopDefault(require$$11$1),
    copyArray = interopDefault(require$$4$11),
    copySymbols = interopDefault(require$$9$1),
    getAllKeys = interopDefault(require$$8$4),
    getTag = interopDefault(require$$3$19),
    initCloneArray = interopDefault(require$$6$4),
    initCloneByTag = interopDefault(require$$5$6),
    initCloneObject = interopDefault(require$$4$19),
    isArray = interopDefault(require$$1$28),
    isBuffer = interopDefault(require$$1$36),
    isObject = interopDefault(require$$0$46),
    keys = interopDefault(require$$0$71);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var props = isArr ? undefined : (isFull ? getAllKeys : keys)(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;
});

var _baseClone$1 = interopDefault(_baseClone);


var require$$1$40 = Object.freeze({
	default: _baseClone$1
});

var clone = createCommonjsModule(function (module) {
var baseClone = interopDefault(require$$1$40);

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

module.exports = clone;
});

var clone$1 = interopDefault(clone);


var require$$10$1 = Object.freeze({
	default: clone$1
});

var curry = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$20);

/** Used to compose bitmasks for function metadata. */
var CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;
});

var curry$1 = interopDefault(curry);


var require$$1$52 = Object.freeze({
	default: curry$1
});

var _setCacheAdd = createCommonjsModule(function (module) {
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;
});

var _setCacheAdd$1 = interopDefault(_setCacheAdd);


var require$$1$53 = Object.freeze({
	default: _setCacheAdd$1
});

var _setCacheHas = createCommonjsModule(function (module) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;
});

var _setCacheHas$1 = interopDefault(_setCacheHas);


var require$$0$93 = Object.freeze({
	default: _setCacheHas$1
});

var _SetCache = createCommonjsModule(function (module) {
var MapCache = interopDefault(require$$0$82),
    setCacheAdd = interopDefault(require$$1$53),
    setCacheHas = interopDefault(require$$0$93);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;
});

var _SetCache$1 = interopDefault(_SetCache);


var require$$2$36 = Object.freeze({
	default: _SetCache$1
});

var _arraySome = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;
});

var _arraySome$1 = interopDefault(_arraySome);


var require$$1$54 = Object.freeze({
	default: _arraySome$1
});

var _cacheHas = createCommonjsModule(function (module) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;
});

var _cacheHas$1 = interopDefault(_cacheHas);


var require$$0$94 = Object.freeze({
	default: _cacheHas$1
});

var _equalArrays = createCommonjsModule(function (module) {
var SetCache = interopDefault(require$$2$36),
    arraySome = interopDefault(require$$1$54),
    cacheHas = interopDefault(require$$0$94);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;
});

var _equalArrays$1 = interopDefault(_equalArrays);


var require$$2$35 = Object.freeze({
	default: _equalArrays$1
});

var _equalByTag = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$32),
    Uint8Array = interopDefault(require$$4$17),
    eq = interopDefault(require$$3$13),
    equalArrays = interopDefault(require$$2$35),
    mapToArray = interopDefault(require$$1$49),
    setToArray = interopDefault(require$$0$90);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;
});

var _equalByTag$1 = interopDefault(_equalByTag);


var require$$5$9 = Object.freeze({
	default: _equalByTag$1
});

var _equalObjects = createCommonjsModule(function (module) {
var keys = interopDefault(require$$0$71);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;
});

var _equalObjects$1 = interopDefault(_equalObjects);


var require$$4$21 = Object.freeze({
	default: _equalObjects$1
});

var _baseIsEqualDeep = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$2),
    equalArrays = interopDefault(require$$2$35),
    equalByTag = interopDefault(require$$5$9),
    equalObjects = interopDefault(require$$4$21),
    getTag = interopDefault(require$$3$19),
    isArray = interopDefault(require$$1$28),
    isBuffer = interopDefault(require$$1$36),
    isTypedArray = interopDefault(require$$0$73);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

module.exports = baseIsEqualDeep;
});

var _baseIsEqualDeep$1 = interopDefault(_baseIsEqualDeep);


var require$$2$34 = Object.freeze({
	default: _baseIsEqualDeep$1
});

var _baseIsEqual = createCommonjsModule(function (module) {
var baseIsEqualDeep = interopDefault(require$$2$34),
    isObject = interopDefault(require$$0$46),
    isObjectLike = interopDefault(require$$0$57);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

module.exports = baseIsEqual;
});

var _baseIsEqual$1 = interopDefault(_baseIsEqual);


var require$$6$5 = Object.freeze({
	default: _baseIsEqual$1
});

var _baseIsMatch = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$2),
    baseIsEqual = interopDefault(require$$6$5);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;
});

var _baseIsMatch$1 = interopDefault(_baseIsMatch);


var require$$2$33 = Object.freeze({
	default: _baseIsMatch$1
});

var _isStrictComparable = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$46);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;
});

var _isStrictComparable$1 = interopDefault(_isStrictComparable);


var require$$2$37 = Object.freeze({
	default: _isStrictComparable$1
});

var _getMatchData = createCommonjsModule(function (module) {
var isStrictComparable = interopDefault(require$$2$37),
    keys = interopDefault(require$$0$71);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;
});

var _getMatchData$1 = interopDefault(_getMatchData);


var require$$1$55 = Object.freeze({
	default: _getMatchData$1
});

var _matchesStrictComparable = createCommonjsModule(function (module) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;
});

var _matchesStrictComparable$1 = interopDefault(_matchesStrictComparable);


var require$$1$56 = Object.freeze({
	default: _matchesStrictComparable$1
});

var _baseMatches = createCommonjsModule(function (module) {
var baseIsMatch = interopDefault(require$$2$33),
    getMatchData = interopDefault(require$$1$55),
    matchesStrictComparable = interopDefault(require$$1$56);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;
});

var _baseMatches$1 = interopDefault(_baseMatches);


var require$$4$20 = Object.freeze({
	default: _baseMatches$1
});

var memoize = createCommonjsModule(function (module) {
var MapCache = interopDefault(require$$0$82);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;
});

var memoize$1 = interopDefault(memoize);


var require$$0$96 = Object.freeze({
	default: memoize$1
});

var _memoizeCapped = createCommonjsModule(function (module) {
var memoize = interopDefault(require$$0$96);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;
});

var _memoizeCapped$1 = interopDefault(_memoizeCapped);


var require$$1$58 = Object.freeze({
	default: _memoizeCapped$1
});

var _arrayMap = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;
});

var _arrayMap$1 = interopDefault(_arrayMap);


var require$$5$11 = Object.freeze({
	default: _arrayMap$1
});

var _baseToString = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$32),
    arrayMap = interopDefault(require$$5$11),
    isArray = interopDefault(require$$1$28),
    isSymbol = interopDefault(require$$2$20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;
});

var _baseToString$1 = interopDefault(_baseToString);


var require$$0$98 = Object.freeze({
	default: _baseToString$1
});

var toString$1 = createCommonjsModule(function (module) {
var baseToString = interopDefault(require$$0$98);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;
});

var toString$2 = interopDefault(toString$1);


var require$$0$97 = Object.freeze({
	default: toString$2
});

var _stringToPath = createCommonjsModule(function (module) {
var memoizeCapped = interopDefault(require$$1$58),
    toString = interopDefault(require$$0$97);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;
});

var _stringToPath$1 = interopDefault(_stringToPath);


var require$$1$57 = Object.freeze({
	default: _stringToPath$1
});

var _castPath = createCommonjsModule(function (module) {
var isArray = interopDefault(require$$1$28),
    stringToPath = interopDefault(require$$1$57);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

module.exports = castPath;
});

var _castPath$1 = interopDefault(_castPath);


var require$$6$6 = Object.freeze({
	default: _castPath$1
});

var _isKey = createCommonjsModule(function (module) {
var isArray = interopDefault(require$$1$28),
    isSymbol = interopDefault(require$$2$20);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;
});

var _isKey$1 = interopDefault(_isKey);


var require$$1$59 = Object.freeze({
	default: _isKey$1
});

var _toKey = createCommonjsModule(function (module) {
var isSymbol = interopDefault(require$$2$20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;
});

var _toKey$1 = interopDefault(_toKey);


var require$$0$99 = Object.freeze({
	default: _toKey$1
});

var _baseGet = createCommonjsModule(function (module) {
var castPath = interopDefault(require$$6$6),
    isKey = interopDefault(require$$1$59),
    toKey = interopDefault(require$$0$99);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;
});

var _baseGet$1 = interopDefault(_baseGet);


var require$$0$95 = Object.freeze({
	default: _baseGet$1
});

var get$3 = createCommonjsModule(function (module) {
var baseGet = interopDefault(require$$0$95);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;
});

var get$4 = interopDefault(get$3);


var require$$5$10 = Object.freeze({
	default: get$4
});

var _baseHasIn = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;
});

var _baseHasIn$1 = interopDefault(_baseHasIn);


var require$$1$60 = Object.freeze({
	default: _baseHasIn$1
});

var _hasPath = createCommonjsModule(function (module) {
var castPath = interopDefault(require$$6$6),
    isArguments = interopDefault(require$$1$34),
    isArray = interopDefault(require$$1$28),
    isIndex = interopDefault(require$$3$11),
    isKey = interopDefault(require$$1$59),
    isLength = interopDefault(require$$1$37),
    toKey = interopDefault(require$$0$99);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;
});

var _hasPath$1 = interopDefault(_hasPath);


var require$$0$100 = Object.freeze({
	default: _hasPath$1
});

var hasIn = createCommonjsModule(function (module) {
var baseHasIn = interopDefault(require$$1$60),
    hasPath = interopDefault(require$$0$100);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;
});

var hasIn$1 = interopDefault(hasIn);


var require$$4$22 = Object.freeze({
	default: hasIn$1
});

var _baseMatchesProperty = createCommonjsModule(function (module) {
var baseIsEqual = interopDefault(require$$6$5),
    get = interopDefault(require$$5$10),
    hasIn = interopDefault(require$$4$22),
    isKey = interopDefault(require$$1$59),
    isStrictComparable = interopDefault(require$$2$37),
    matchesStrictComparable = interopDefault(require$$1$56),
    toKey = interopDefault(require$$0$99);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

module.exports = baseMatchesProperty;
});

var _baseMatchesProperty$1 = interopDefault(_baseMatchesProperty);


var require$$3$22 = Object.freeze({
	default: _baseMatchesProperty$1
});

var _baseProperty = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;
});

var _baseProperty$1 = interopDefault(_baseProperty);


var require$$3$23 = Object.freeze({
	default: _baseProperty$1
});

var _basePropertyDeep = createCommonjsModule(function (module) {
var baseGet = interopDefault(require$$0$95);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;
});

var _basePropertyDeep$1 = interopDefault(_basePropertyDeep);


var require$$2$38 = Object.freeze({
	default: _basePropertyDeep$1
});

var property = createCommonjsModule(function (module) {
var baseProperty = interopDefault(require$$3$23),
    basePropertyDeep = interopDefault(require$$2$38),
    isKey = interopDefault(require$$1$59),
    toKey = interopDefault(require$$0$99);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;
});

var property$1 = interopDefault(property);


var require$$0$101 = Object.freeze({
	default: property$1
});

var _baseIteratee = createCommonjsModule(function (module) {
var baseMatches = interopDefault(require$$4$20),
    baseMatchesProperty = interopDefault(require$$3$22),
    identity = interopDefault(require$$2$9),
    isArray = interopDefault(require$$1$28),
    property = interopDefault(require$$0$101);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;
});

var _baseIteratee$1 = interopDefault(_baseIteratee);


var require$$0$92 = Object.freeze({
	default: _baseIteratee$1
});

var iteratee = createCommonjsModule(function (module) {
var baseClone = interopDefault(require$$1$40),
    baseIteratee = interopDefault(require$$0$92);

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
}

module.exports = iteratee;
});

var iteratee$1 = interopDefault(iteratee);


var require$$5$8 = Object.freeze({
	default: iteratee$1
});

var _isFlattenable = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$32),
    isArguments = interopDefault(require$$1$34),
    isArray = interopDefault(require$$1$28);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;
});

var _isFlattenable$1 = interopDefault(_isFlattenable);


var require$$0$103 = Object.freeze({
	default: _isFlattenable$1
});

var _baseFlatten = createCommonjsModule(function (module) {
var arrayPush = interopDefault(require$$3$18),
    isFlattenable = interopDefault(require$$0$103);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;
});

var _baseFlatten$1 = interopDefault(_baseFlatten);


var require$$0$102 = Object.freeze({
	default: _baseFlatten$1
});

var flatten = createCommonjsModule(function (module) {
var baseFlatten = interopDefault(require$$0$102);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;
});

var flatten$1 = interopDefault(flatten);


var require$$2$39 = Object.freeze({
	default: flatten$1
});

var _overRest = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;
});

var _overRest$1 = interopDefault(_overRest);


var require$$1$61 = Object.freeze({
	default: _overRest$1
});

var _flatRest = createCommonjsModule(function (module) {
var flatten = interopDefault(require$$2$39),
    overRest = interopDefault(require$$1$61),
    setToString = interopDefault(require$$0$61);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;
});

var _flatRest$1 = interopDefault(_flatRest);


var require$$4$23 = Object.freeze({
	default: _flatRest$1
});

var rearg = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$20),
    flatRest = interopDefault(require$$4$23);

/** Used to compose bitmasks for function metadata. */
var REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;
});

var rearg$1 = interopDefault(rearg);


var require$$3$24 = Object.freeze({
	default: rearg$1
});

var _baseRest = createCommonjsModule(function (module) {
var identity = interopDefault(require$$2$9),
    overRest = interopDefault(require$$1$61),
    setToString = interopDefault(require$$0$61);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;
});

var _baseRest$1 = interopDefault(_baseRest);


var require$$2$41 = Object.freeze({
	default: _baseRest$1
});

var _baseSlice = createCommonjsModule(function (module) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;
});

var _baseSlice$1 = interopDefault(_baseSlice);


var require$$0$104 = Object.freeze({
	default: _baseSlice$1
});

var _castSlice = createCommonjsModule(function (module) {
var baseSlice = interopDefault(require$$0$104);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;
});

var _castSlice$1 = interopDefault(_castSlice);


var require$$1$62 = Object.freeze({
	default: _castSlice$1
});

var spread = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    arrayPush = interopDefault(require$$3$18),
    baseRest = interopDefault(require$$2$41),
    castSlice = interopDefault(require$$1$62),
    toInteger = interopDefault(require$$0$68);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
  return baseRest(function(args) {
    var array = args[start],
        otherArgs = castSlice(args, 0, start);

    if (array) {
      arrayPush(otherArgs, array);
    }
    return apply(func, this, otherArgs);
  });
}

module.exports = spread;
});

var spread$1 = interopDefault(spread);


var require$$2$40 = Object.freeze({
	default: spread$1
});

var toPath = createCommonjsModule(function (module) {
var arrayMap = interopDefault(require$$5$11),
    copyArray = interopDefault(require$$4$11),
    isArray = interopDefault(require$$1$28),
    isSymbol = interopDefault(require$$2$20),
    stringToPath = interopDefault(require$$1$57),
    toKey = interopDefault(require$$0$99);

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

module.exports = toPath;
});

var toPath$1 = interopDefault(toPath);


var require$$0$105 = Object.freeze({
	default: toPath$1
});

var _util = createCommonjsModule(function (module) {
module.exports = {
  'ary': interopDefault(require$$12),
  'assign': interopDefault(require$$12$1),
  'clone': interopDefault(require$$10$1),
  'curry': interopDefault(require$$1$52),
  'forEach': interopDefault(require$$14$1),
  'isArray': interopDefault(require$$1$28),
  'isFunction': interopDefault(require$$1$25),
  'iteratee': interopDefault(require$$5$8),
  'keys': interopDefault(require$$1$39),
  'rearg': interopDefault(require$$3$24),
  'spread': interopDefault(require$$2$40),
  'toInteger': interopDefault(require$$0$68),
  'toPath': interopDefault(require$$0$105)
};
});

var _util$1 = interopDefault(_util);


var require$$0$45 = Object.freeze({
	default: _util$1
});

var convert = createCommonjsModule(function (module) {
var baseConvert = interopDefault(require$$1$18),
    util = interopDefault(require$$0$45);

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;
});

var convert$1 = interopDefault(convert);


var require$$2$8 = Object.freeze({
	default: convert$1
});

var get$2 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$8),
    func = convert('get', interopDefault(require$$5$10));

func.placeholder = interopDefault(require$$0$44);
module.exports = func;
});

var _get$1 = interopDefault(get$2);

var _createFlow = createCommonjsModule(function (module) {
var LodashWrapper = interopDefault(require$$5$2),
    flatRest = interopDefault(require$$4$23),
    getData = interopDefault(require$$3$8),
    getFuncName = interopDefault(require$$2$15),
    isArray = interopDefault(require$$1$28),
    isLaziable = interopDefault(require$$0$52);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var CURRY_FLAG = 8,
    PARTIAL_FLAG = 32,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 &&
          isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;
});

var _createFlow$1 = interopDefault(_createFlow);


var require$$0$106 = Object.freeze({
	default: _createFlow$1
});

var flow$1 = createCommonjsModule(function (module) {
var createFlow = interopDefault(require$$0$106);

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;
});

var flow$2 = interopDefault(flow$1);


var require$$1$63 = Object.freeze({
	default: flow$2
});

var flow = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$8),
    func = convert('flow', interopDefault(require$$1$63));

func.placeholder = interopDefault(require$$0$44);
module.exports = func;
});

var _flow = interopDefault(flow);

var curry$2 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$8),
    func = convert('curry', interopDefault(require$$1$52));

func.placeholder = interopDefault(require$$0$44);
module.exports = func;
});

var _curry = interopDefault(curry$2);

var minDateDefault = -2208988800000;
var maxDateDefault = 4102444800000;

// Returns a number. If num is NaN, returns min
// between : Number -> Number -> Number
var between = _curry(function (min, max, num) {
  var constrained = Math.max(min, Math.min(num, max));
  return isNaN(constrained) ? min : constrained;
});

// toDigits : Number -> Number -> String
var toDigits = _curry(function (digitCount, num) {
  var charCount = num.toString().length;
  var zeroesCount = Math.max(0, digitCount - charCount); // make sure never negative
  return Array(zeroesCount).fill(0).join('') + num.toString();
});

// validate : Number -> Number -> String -> String
var validateAndPrettify = _curry(function (min, max, stringValue) {
  var maxChars = max.toString().length;
  return _flow(function (s) {
    return parseInt(s, 10);
  }, between(min, max), toDigits(maxChars))(stringValue);
});

// updateDate : Number -> Number -> String -> String
var validate = _curry(function (min, max, stringValue) {
  var maxChars = max.toString().length;
  var value = stringValue.replace(/[^0-9]/g, '').slice(-maxChars);

  var isFieldFilled = value.length === maxChars;
  // If it doesn't even have enough characters, it's below max and the
  // person might not have finished typing yet, so let's only really validate and
  // prettify if maxChars is reached
  return isFieldFilled ? validateAndPrettify(min, max, stringValue) : value;
});

// focusNextWhenFilled : Number -> Event -> Nothing
var focusNextIfFilled = _curry(function (max, e) {
  var maxChars = max.toString().length;
  var isFieldFilled = e.target.value.toString().length === maxChars;

  if (isFieldFilled) {
    var nextField = ReactDOM.findDOMNode(e.target).nextElementSibling;
    if (nextField && nextField.nodeName === 'INPUT') {
      nextField.focus();
    }
  }
});

// parseAndConstrain : Number -> Number -> String -> Number
var parseAndConstrain = function parseAndConstrain(min, max, numString) {
  var parsed = parseInt(numString, 10);
  var constrained = between(min, max, parsed);
  assert.warn(!isNaN(constrained), 'Error parsing ' + numString);
  return constrained;
};

var millisecondsToBreakdownDate = function millisecondsToBreakdownDate(ms) {
  var date = new Date(ms);
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
};

var toDateString = function toDateString(d) {
  return toDigits(4, d.year) + '-' + toDigits(2, d.month) + '-' + toDigits(2, d.day);
};

var toMilliseconds = function toMilliseconds(d) {
  return _flow(toDateString, Date.parse)(d);
};

// parseDate : (String | Number) -> (String | Number) -> (String | Number) -> { day, month, year }
function parseDate(dayString, monthString, yearString) {
  var initialDate = {
    day: parseAndConstrain(1, 31, dayString),
    month: parseAndConstrain(1, 12, monthString),
    year: parseAndConstrain(1, 2500, yearString)
  };

  var dateIsValid = _flow(toMilliseconds, millisecondsToBreakdownDate, function (parsed) {
    return _JSON$stringify(initialDate) === _JSON$stringify(parsed);
  })(initialDate);

  if (!dateIsValid) {
    // All values have been constrined to their allowed values, the only case
    // in which date could be NaN is the one where the day value is greater than
    // the maximum possible day value of the specified month. Like Feb 31
    // So we will decrease the day and try to parse again. If the day is already
    // quite low, then throw the error.
    assert(initialDate.day > 25, 'An unknown error occurred parsing the date ' + dayString + '/' + monthString + '/' + yearString);
    return parseDate(initialDate.day - 1, initialDate.month, initialDate.year);
  }

  return initialDate;
}

// Returns an object with date components that form a valid date
// Int -> Int -> String -> String -> String -> { day, month, year }
var validateDateComponents = function validateDateComponents(appMinDate, appMaxDate, day, month, year) {
  var areAllFieldsFilled = day.length === 2 && month.length === 2 && year.length === 4;

  if (!areAllFieldsFilled) {
    return { day: day, month: month, year: year };
  }
  var minDate = appMinDate || minDateDefault; // 1900-01-01
  var maxDate = appMaxDate || maxDateDefault; // 2100-01-01

  return _flow(function () {
    return parseDate(day, month, year);
  }, toMilliseconds, between(minDate, maxDate), millisecondsToBreakdownDate, function (d) {
    return {
      day: toDigits(2, d.day),
      month: toDigits(2, d.month),
      year: toDigits(4, d.year)
    };
  })();
};

var DateField = function (_InputField) {
  _inherits(DateField, _InputField);

  function DateField() {
    var _ref;

    _classCallCheck(this, DateField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = DateField.__proto__ || _Object$getPrototypeOf(DateField)).call.apply(_ref, [this].concat(args)));

    _this.render = _this.render.bind(_this);
    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    _this.changedSinceLastUpdate = false;

    _this.state = _Object$assign({}, _this.props.config);

    /** @override */
    _this.bemClass = _this.modulePrefix + '_TextInput';
    return _this;
  }

  /**
   * @override
   */


  _createClass(DateField, [{
    key: 'getResponse',
    value: function getResponse() {
      return toDateString(this.state);
    }

    /**
     * @override
     */

  }, {
    key: 'validateResponse',
    value: function validateResponse(response) {
      var _response$split = response.split('-');

      var _response$split2 = _slicedToArray(_response$split, 3);

      var year = _response$split2[0];
      var month = _response$split2[1];
      var day = _response$split2[2];

      var areAllFieldsFilled = day.length === 2 && month.length === 2 && year.length === 4;

      if (this.isRequired() && !areAllFieldsFilled) {
        return 'This field must be completed.';
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // GENERAL FL-INTERACTIVE-FORM FUNCTIONS
      var handleInputChange = function handleInputChange() {
        _this2.changedSinceLastUpdate = true;
        if (_this2.props.ui.active) {
          // set incomplete
          _this2.props.appControl.setQuestionCompleted(_this2.props.config.key, false);
        }

        if (_this2.props.ui.error) {
          _this2.showError(_this2.validateResponse());
        }
      };

      var handleBlur = function handleBlur() {
        if (!_this2.changedSinceLastUpdate) {
          return;
        }
        _this2.changedSinceLastUpdate = false;
        _this2.saveResponse();
      };

      // DATEFIELD SPECIFIG FUNCTIONS
      var state = this.state;
      var update = function update(newState) {
        return _this2.setState(newState);
      };

      // updateField : Object -> Object(the new state)
      var updateState = function updateState(changedState) {
        var newState = _Object$assign({}, state, changedState);
        update(newState);
        return newState;
      };

      var dateOnChange = _curry(function (min, max, datePart, e) {
        _flow(_get$1('target.value'), validate(min, max), function (v) {
          return updateState(_defineProperty({}, datePart, v));
        })(e);

        focusNextIfFilled(max, e);
        handleInputChange();
      });

      var dateOnBlur = _curry(function (appState, min, max, datePart, e) {
        _flow(_get$1('target.value'), validateAndPrettify(min, max), function (v) {
          return _Object$assign({}, appState, _defineProperty({}, datePart, v));
        }, function (s) {
          return validateDateComponents(s.minDate, s.maxDate, s.day, s.month, s.year);
        }, function (s) {
          return updateState(s);
        })(e);
        handleBlur();
      });

      return React.createElement(
        'div',
        { className: this.bemClass },
        React.createElement('input', {
          type: 'text',
          className: 'fl-fb-Field-editable fl-fb-Field-dateslot-day',
          placeholder: 'DD',
          value: state.day,
          onChange: dateOnChange(1, 31, 'day'),
          onBlur: dateOnBlur(state, 1, 31, 'day'),
          pattern: '^.{2}$' // two characters required
          , required: state.required
        }),
        '/',
        React.createElement('input', {
          type: 'text',
          className: 'fl-fb-Field-editable fl-fb-Field-dateslot-month',
          placeholder: 'MM',
          value: state.month,
          onChange: dateOnChange(1, 12, 'month'),
          onBlur: dateOnBlur(state, 1, 12, 'month'),
          pattern: '^.{2}$' // two characters required
          , required: state.required
        }),
        '/',
        React.createElement('input', {
          type: 'text',
          className: 'fl-fb-Field-editable fl-fb-Field-dateslot-year',
          placeholder: 'YYYY',
          value: state.year,
          onChange: dateOnChange(1900, 2050, 'year'),
          onBlur: dateOnBlur(state, 1900, 2050, 'year'),
          pattern: '^.{4}$' // two characters required
          , required: state.required
        })
      );
    }
  }]);

  return DateField;
}(InputField);

var inputTypes = {
  TextBox: TextBox,
  TextArea: TextArea,
  RadioButtons: RadioButtons,
  Checkboxes: Checkboxes,
  Dropdown: Dropdown,
  EmailBox: EmailBox,
  NumberBox: NumberBox$1,
  TelephoneBox: NumberBox,
  CountryDropdown: CountryDropdown,
  DateField: DateField
};

var FormField = function (_ReactBEM) {
  _inherits(FormField, _ReactBEM);

  function FormField() {
    var _ref;

    _classCallCheck(this, FormField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FormField.__proto__ || _Object$getPrototypeOf(FormField)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(FormField, [{
    key: 'handleClick',
    value: function handleClick() {
      if (!this.props.ui.active) {
        this.props.appControl.setFieldActive(this.props.config.key);
      }
    }

    /**
     * Shows error and returns error message
     * @method validate
     * @return {String} Error message
     */

  }, {
    key: 'validate',
    value: function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        var response, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = this.refs.input.getResponse();
                error = this.refs.input.validateResponse(response);

                if (!error) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return this.refs.input.showError(error);

              case 5:
                return _context.abrupt('return', error);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function validate() {
        return _ref2.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: 'render',
    value: function render() {
      // assert(
      //   typeof inputTypes[this.props.config.type] !== 'undefined',
      //   `Invalid input type: ${this.props.config.type}`
      // );

      var classNames = [this.bemClass];
      if (this.props.ui.active) {
        classNames.push(this.bemState('active'));
      }
      if (this.props.ui.completed) {
        classNames.push(this.bemState('completed'));
      }

      var inputProps = {
        ui: this.props.ui,
        config: this.props.config,
        appControl: this.props.appControl,
        key: this.props.config.key,
        ref: 'input'
      };

      var errorMsg = this.props.ui.error;
      var error = errorMsg ? React.createElement(
        Error$1,
        { speechBubble: true },
        ' ',
        errorMsg,
        ' '
      ) : null;

      // We want to support new custom elements
      var reactElement = inputTypes[this.props.config.type] || inputTypes[this.props.config.primitiveType];

      return React.createElement(
        'div',
        { className: classNames.join(' '), onClick: this.handleClick },
        React.createElement(
          'p',
          { className: this.bemSubComponent('legend') },
          React.createElement('i', { className: 'fa fa-check-circle ' + this.bemSubComponent('okIcon') }),
          this.props.config.title
        ),
        React.createElement(reactElement, inputProps),
        error
      );
    }
  }]);

  return FormField;
}(ReactBEM);

FormField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

var NavigationBar = function (_ReactBEM) {
  _inherits(NavigationBar, _ReactBEM);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || _Object$getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var completed = this.props.ui.questions.reduce(function (sum, q) {
        return q.completed ? sum + 1 : sum;
      }, 0);

      var activeQuestionIndex = this.props.ui.questions.findIndex(function (q) {
        return q.active;
      });
      var inactiveStyle = { pointerEvents: 'none', opacity: .5 };
      var prevBtnStyle = activeQuestionIndex === 0 ? inactiveStyle : {};
      var nextBtnStyle = activeQuestionIndex === -1 ? inactiveStyle : {};

      var percentageCompleted = Math.floor(completed * 100 / this.props.ui.questions.length);

      var btnClick = function btnClick(e, nextPrev) {
        // Prevent button click from dismissing the keyboard on phones.
        e.preventDefault();
        e.stopPropagation();
        _this2.props.appControl.goToField(nextPrev);
      };

      return React.createElement(
        'div',
        { className: this.bemClass },
        React.createElement(
          'div',
          { className: this.bemSubComponent('progress') },
          React.createElement(
            'div',
            { className: this.bemSubComponent('progress', 'percentage') },
            percentageCompleted,
            '% complete'
          ),
          React.createElement(
            'div',
            { className: this.bemSubComponent('progress', 'bar') },
            React.createElement('div', {
              className: this.bemSubComponent('progress', 'bar', 'fill'),
              style: { width: percentageCompleted + '%' }
            })
          )
        ),
        React.createElement(
          'div',
          { className: this.bemSubComponent('buttons') },
          React.createElement(
            'button',
            {
              className: this.bemSubComponent('button'),
              onClick: function onClick(e) {
                return btnClick(e, 'prev');
              },
              style: prevBtnStyle
            },
            'Prev'
          ),
          React.createElement(
            'button',
            {
              className: this.bemSubComponent('button'),
              onClick: function onClick(e) {
                return btnClick(e, 'next');
              },
              style: nextBtnStyle
            },
            'Next'
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(ReactBEM);

NavigationBar.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired
};

var clone$2 = (function (a) {
  return JSON.parse(_JSON$stringify(a));
});

/**
 * @public
 * @method throttle
 * @param  {Function} fn
 * @param  {Int} threshhold - Number of milliseconds
 * @param  {Object} scope - this object
 * @param  {Boolean} defer - whether to execute the callback after the delay has finished
 * @return {Function}
 */
function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

  var _this = this;

  var scope = arguments[2];
  var defer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var last = void 0;
  var deferTimer = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = scope || _this;

    var now = +new Date();
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);

      if (defer) {
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      }
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function mobileCheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
})();

/**
 * Handled calling requestAnimationFrame and makes it easy to perform an
 * animation a reduced amount of frames per second by jumping frames.
 * @class AnimationManager
 */

var AnimationManager = function () {
  function AnimationManager() {
    _classCallCheck(this, AnimationManager);

    this.animations = {};
  }

  /**
   * Cancels a scheduled animation frame
   * @public
   * @method cancel
   * @param  {String} animationName Animation name set with scheduleAnimation
   * @return {void}
   */


  _createClass(AnimationManager, [{
    key: 'cancel',
    value: function cancel(animationName) {
      cancelAnimationFrame(this.animations[animationName]);
    }

    /**
     * Will call animationFunction after a frameDelay amount of frames.
     * @public
     * @method schedule
     * @param  {Function} animationFunction
     * @param  {String} animationName - Optional, but you need one if you want to
     * be able to cancel it afterwards
     * @param  {Int} frameDelay - Optional. animationFunction will be called
     * immediately if it is not provided.
     * @return {void}
     */

  }, {
    key: 'schedule',
    value: function schedule(animationFunction) {
      var _this = this;

      var animationName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random().toString();
      var frameDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.cancel(animationName);
      if (frameDelay > 0) {
        this.animations[animationName] = requestAnimationFrame(function () {
          return _this.schedule(animationFunction, animationName, frameDelay - 1);
        });
      } else {
        this.animations[animationName] = requestAnimationFrame(animationFunction);
      }
    }
  }]);

  return AnimationManager;
}();

/* eslint-disable no-param-reassign */

var animations = new AnimationManager();

/**
 * @public
 * @method scrollSlide
 * @param  {HTMLElement} container - Element whose scroll position will be changed
 * @param  {Int} targetScroll - Target scroll position;
 * @param  {Int} duration - Duration in milliseconds
 * @return {Promise} - To be fulfilled when transition ends
 */
function scrollSlide(container, targetScroll) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var initialScroll = container.scrollTop;
  var scrollDistance = targetScroll - initialScroll;

  // fps * duration / millisecondsPerSecond
  var totalFrames = 60 * duration / 1000;

  var f = 0; // frame number

  var doSliding = function doSliding(callback) {
    // scroll progress percentage from 0 to 1
    var p = f / totalFrames;

    // ease-in-out formula
    var displacementPercentage = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;

    var displacement = scrollDistance * displacementPercentage;
    container.scrollTop = initialScroll + displacement;

    f += 1;

    if (f < totalFrames) {
      animations.schedule(function () {
        return doSliding(callback);
      }, 'scrollSlide', 0);
    } else {
      callback();
    }
  };

  return new _Promise(function (resolve, reject) {
    var resolved = false;
    doSliding(function () {
      resolved = true;resolve();
    });

    // In case another scroll comes up and any 'doSliding' callback is cancelled
    // we will make sure to reject the promise and not leave it hanging
    function rejectIfNotResolved() {
      if (!resolved) {
        reject('Animation frame cancelled');
      }
    }

    setTimeout(rejectIfNotResolved, 1.5 * duration);
  });
}

var SubmitButton = function (_InputField) {
  _inherits(SubmitButton, _InputField);

  function SubmitButton() {
    var _ref;

    _classCallCheck(this, SubmitButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SubmitButton.__proto__ || _Object$getPrototypeOf(SubmitButton)).call.apply(_ref, [this].concat(args)));

    _this.saveResponse = function () {
      return null;
    };
    _this.getResponse = function () {
      return null;
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.initialState = {
      error: '',
      text: 'Submit'
    };

    _this.state = _this.initialState;
    return _this;
  }

  _createClass(SubmitButton, [{
    key: 'onClick',
    value: function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        var errorFields;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.state.error) {
                  _context.next = 3;
                  break;
                }

                this.props.appControl.slideToFirstWithError();
                return _context.abrupt('return');

              case 3:
                _context.next = 5;
                return this.props.validateAllFields();

              case 5:
                errorFields = _context.sent;

                if (errorFields.length > 0) {
                  this.setState({
                    error: errorFields.length + ' answer' + (errorFields.length > 1 ? 's' : '') + ' need completing',
                    text: 'Review'
                  });
                } else {
                  this.props.appControl.triggerSubmit();
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onClick() {
        return _ref2.apply(this, arguments);
      }

      return onClick;
    }()
  }, {
    key: 'keySelect',
    value: function keySelect() {
      this.onClick();
    }
  }, {
    key: 'keyPrev',
    value: function keyPrev() {
      this.props.appControl.goToField('prev');
    }
  }, {
    key: 'keyNext',
    value: function keyNext() {
      return;
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      this.setState(this.initialState);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonClass = this.props.ui.active ? this.bemClass + ' ' + this.bemState('active') : '' + this.bemClass;

      var error = this.state.error ? React.createElement(
        Error$1,
        null,
        this.state.error
      ) : null;

      return React.createElement(
        'div',
        {
          className: buttonClass,
          onKeyDown: this.keyListener
        },
        error,
        React.createElement(
          'button',
          {
            className: this.bemSubComponent('button') + ' ' + globals.FOCUS_CLASS,
            ref: 'button',
            onClick: this.onClick,
            onBlur: this.onBlur,
            tabIndex: '0'
          },
          this.state.text
        )
      );
    }
  }]);

  return SubmitButton;
}(InputField);

SubmitButton.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
  validateAllFields: React.PropTypes.func.isRequired
};

var IS_TOUCH_DEVICE = mobileCheck();
// Takes care of the UI part of things.

var FormUI = function (_ReactBEM) {
  _inherits(FormUI, _ReactBEM);

  function FormUI() {
    var _ref;

    _classCallCheck(this, FormUI);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // private
    var _this = _possibleConstructorReturn(this, (_ref = FormUI.__proto__ || _Object$getPrototypeOf(FormUI)).call.apply(_ref, [this].concat(args)));

    _this.onWheel = _this.onWheel.bind(_this);
    _this.onScroll = throttle(_this.onScroll.bind(_this), 250, _this, true);
    _this.touchEnd = _this.touchEnd.bind(_this);
    _this.touchMove = _this.touchMove.bind(_this);
    _this.touchStart = _this.touchStart.bind(_this);
    _this.getFieldNode = _this.getFieldNode.bind(_this);
    _this.getFormFields = _this.getFormFields.bind(_this);
    _this.validateAllFields = _this.validateAllFields.bind(_this);
    _this.setFieldActive = _this.setFieldActive.bind(_this);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.getActiveFieldKey = _this.getActiveFieldKey.bind(_this);
    _this.slideFieldToCenter = _this.slideFieldToCenter.bind(_this);
    _this.slideToFirstWithError = _this.slideToFirstWithError.bind(_this);
    _this.processTouchDisplacement = _this.processTouchDisplacement.bind(_this);
    _this.triggerSubmit = _this.triggerSubmit.bind(_this);

    // public
    _this.focus = _this.focus.bind(_this);
    _this.goToField = throttle(_this.goToField.bind(_this), 250, _this, false);
    _this.setFieldError = _this.setFieldError.bind(_this);
    _this.setQuestionCompleted = _this.setQuestionCompleted.bind(_this);

    // instance globals
    _this.initialTouchY = null;
    _this.animatingScroll = false;
    _this.animations = new AnimationManager();

    _this.appControl = _Object$assign(_this.props.appControl, {
      focus: _this.focus,
      goToField: _this.goToField,
      setQuestionCompleted: _this.setQuestionCompleted,
      setFieldActive: _this.setFieldActive,
      setFieldError: _this.setFieldError,
      triggerSubmit: _this.triggerSubmit,
      slideToFirstWithError: _this.slideToFirstWithError
    });

    _this.state = _this.generateInitialState(_this.props.config);
    return _this;
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @method importConfig
   * @return {Object}
   */


  _createClass(FormUI, [{
    key: 'generateInitialState',
    value: function generateInitialState() {
      var createUiObj = function createUiObj(objKey) {
        return { key: objKey, active: false, complete: false };
      };

      // Create a ui object to control questions
      var ui = {};
      ui.submitButton = createUiObj('submit');
      ui.questions = this.props.config.map(function (q) {
        return createUiObj(q.key);
      });
      return { ui: ui };
    }

    /**
     * Called once when the component is created.
     * @private
     * @method componentDidMount
     * @return {void}
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Make first question active.
      this.animations.schedule(function () {
        return _this2.goToField('next');
      }, '', 30);

      var centerActiveQuestion = function centerActiveQuestion() {
        var active = _this2.getActiveFieldKey();
        _this2.slideFieldToCenter(active);
      };

      window.addEventListener('resize', function () {
        return _this2.animations.schedule(centerActiveQuestion, 'formResize', 20);
      });
    }

    /**
     * Returns an array containing all form questions and the submit button.
     * @method getFormFields
     * @return {Array}
     */

  }, {
    key: 'getFormFields',
    value: function getFormFields() {
      var formFields = [].concat(_toConsumableArray(this.state.ui.questions), [this.state.ui.submitButton]);
      return formFields;
    }

    /**
     * @private
     * @return {String}
     */

  }, {
    key: 'getActiveFieldKey',
    value: function getActiveFieldKey() {
      var formFields = this.getFormFields();
      var active = formFields.find(function (f) {
        return f.active === true;
      });
      return active ? active.key : undefined;
    }

    /**
     * @private
     * @method getFieldNode
     * @param  {String} key
     * @return {HTMLElement}
     */

  }, {
    key: 'getFieldNode',
    value: function getFieldNode(key) {
      return ReactDOM.findDOMNode(this.refs[key]);
    }

    /**
     * element.focus() but with some extras
     * Focuses and prevent viewBox from scrolling
     * @public
     * @method focus
     * @param  {HTMLElement} element
     * @return {void}
     */

  }, {
    key: 'focus',
    value: function focus(element) {
      var _this3 = this;

      if (!element) {
        return;
      }
      var currScrollPosition = this.refs.questionsViewBox.scrollTop;
      var focus = function focus() {
        element.focus();
        _this3.refs.questionsViewBox.scrollTop = currScrollPosition;
      };

      setTimeout(focus, 10);
    }

    /**
     * @public
     * Moves the focus to the next or previous question by
     * setting it as active and moving it to the center of the viewport.
     * @method goToField
     * @param  {String} prevNext
     * @return {void}
     */

  }, {
    key: 'goToField',
    value: function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(prevNext) {
        var next, formFields, activeKey, activeIndex, changedIndex, newActiveIndex, newActiveKey, node, focusEl, moduleJustLoaded;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                next = prevNext === 'next';
                formFields = this.getFormFields();
                activeKey = this.getActiveFieldKey();
                activeIndex = formFields.findIndex(function (f) {
                  return f.key === activeKey;
                });
                changedIndex = activeIndex + (next ? +1 : -1);
                newActiveIndex = Math.max(0, Math.min(formFields.length - 1, changedIndex));
                newActiveKey = formFields[newActiveIndex].key;

                this.setFieldActive(newActiveKey);

                _context.next = 10;
                return this.slideFieldToCenter(newActiveKey);

              case 10:
                node = this.getFieldNode(newActiveKey);
                focusEl = node.querySelector('.' + globals.FOCUS_CLASS);

                // On mobile devices we don't focus on input elements because
                // the keyboard keeps changing the screen width, which can be quite annoying.

                moduleJustLoaded = activeKey === undefined;

                if (!(moduleJustLoaded || IS_TOUCH_DEVICE && focusEl.nodeName === 'INPUT')) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt('return');

              case 15:
                this.focus(focusEl);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goToField(_x) {
        return _ref2.apply(this, arguments);
      }

      return goToField;
    }()

    /**
     * @private
     */

  }, {
    key: 'slideFieldToCenter',
    value: function () {
      var _ref3 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(key) {
        var node, viewBox, viewBoxheight, distanceFromTop, targetScroll, animationDuration, focusEl;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.animatingScroll = true;
                node = this.getFieldNode(key);

                assert(node, 'No field found with key: ' + key);
                viewBox = this.refs.questionsViewBox;
                viewBoxheight = viewBox.clientHeight;
                distanceFromTop = Math.max(0, (viewBoxheight - node.clientHeight) / 2);
                targetScroll = node.offsetTop - distanceFromTop;
                animationDuration = 160;
                _context2.prev = 8;
                _context2.next = 11;
                return scrollSlide(viewBox, targetScroll, animationDuration);

              case 11:
                focusEl = node.querySelector('.' + globals.FOCUS_CLASS);

                if (focusEl) {
                  // this.focus(focusEl);
                }
                _context2.next = 17;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](8);

              case 17:
                _context2.prev = 17;

                this.animatingScroll = false;
                return _context2.finish(17);

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 15, 17, 20]]);
      }));

      function slideFieldToCenter(_x2) {
        return _ref3.apply(this, arguments);
      }

      return slideFieldToCenter;
    }()

    /**
     * Used by submit button. Shows error and returns arror ammount
     * @public
     * @method validateAllFields
     * @return {Array<String>}  Object with keys of fields with error
     */

  }, {
    key: 'validateAllFields',
    value: function () {
      var _ref4 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        var errorFields, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, q, questionReactEl, err;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                errorFields = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 4;
                _iterator = _getIterator(this.props.config);

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 16;
                  break;
                }

                q = _step.value;
                questionReactEl = this.refs[q.key];
                _context3.next = 11;
                return questionReactEl.validate();

              case 11:
                err = _context3.sent;

                if (err) {
                  errorFields.push(q.key);
                }

              case 13:
                _iteratorNormalCompletion = true;
                _context3.next = 6;
                break;

              case 16:
                _context3.next = 22;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 22:
                _context3.prev = 22;
                _context3.prev = 23;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 25:
                _context3.prev = 25;

                if (!_didIteratorError) {
                  _context3.next = 28;
                  break;
                }

                throw _iteratorError;

              case 28:
                return _context3.finish(25);

              case 29:
                return _context3.finish(22);

              case 30:
                return _context3.abrupt('return', errorFields);

              case 31:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 18, 22, 30], [23,, 25, 29]]);
      }));

      function validateAllFields() {
        return _ref4.apply(this, arguments);
      }

      return validateAllFields;
    }()

    /**
     * @method slideToFirstWithError
     * @return {Promise}
     */

  }, {
    key: 'slideToFirstWithError',
    value: function () {
      var _ref5 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4() {
        var errorFields;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.validateAllFields();

              case 2:
                errorFields = _context4.sent;

                if (errorFields.length > 0) {
                  this.setFieldActive(errorFields[0]);
                  this.slideFieldToCenter(errorFields[0]);
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function slideToFirstWithError() {
        return _ref5.apply(this, arguments);
      }

      return slideToFirstWithError;
    }()
  }, {
    key: 'triggerSubmit',
    value: function triggerSubmit() {
      var formElement = ReactDOM.findDOMNode(this);
      var submitEvent = new CustomEvent('submit', {
        detail: { answers: this.props.config },
        bubbles: true,
        cancelable: true
      });
      formElement.dispatchEvent(submitEvent);
    }

    // ==============================================================
    //                     STATE HANDLERS
    // ==============================================================

    /**
     * Sets a question as completed.
     * @private
     * @method setQuestionCompleted
     * @param  {String} questionKey
     * @param  {Boolean} completed
     * @return {Promise}
     */

  }, {
    key: 'setQuestionCompleted',
    value: function setQuestionCompleted(questionKey, completed) {
      var _this4 = this;

      var qIndex = this.state.ui.questions.findIndex(function (q) {
        return q.key === questionKey;
      });
      assert(qIndex !== -1, 'Did not find question with key: ' + questionKey);

      var ui = clone$2(this.state.ui);
      ui.questions[qIndex].completed = !!completed;

      return new _Promise(function (resolve) {
        return _this4.setState({ ui: ui }, resolve);
      });
    }

    /**
     * @private
     * @method setFieldActive
     * @param  {String} index
     */

  }, {
    key: 'setFieldActive',
    value: function setFieldActive(key) {
      assert(this.refs[key], 'Invalid key: ' + key);
      var ui = clone$2(this.state.ui);

      // set everyone not active
      ui.submitButton.active = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _getIterator(ui.questions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var q = _step2.value;

          q.active = false;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (key === ui.submitButton.key) {
        ui.submitButton.active = true;
      } else {
        var questionIndex = ui.questions.findIndex(function (q) {
          return q.key === key;
        });
        assert(questionIndex !== -1, 'Invalid question index ' + questionIndex);
        ui.questions[questionIndex].active = true;
      }

      this.setState({ ui: ui });
    }
  }, {
    key: 'setFieldError',
    value: function () {
      var _ref6 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee5(key, message) {
        var _this5 = this;

        var ui, field;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                assert(this.refs[key], 'Invalid key: ' + key);
                ui = clone$2(this.state.ui);
                field = ui.questions.find(function (q) {
                  return q.key === key;
                });

                field.error = message;

                _context5.next = 6;
                return new _Promise(function (resolve) {
                  return _this5.setState({ ui: ui }, resolve);
                });

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setFieldError(_x3, _x4) {
        return _ref6.apply(this, arguments);
      }

      return setFieldError;
    }()

    // ==============================================================
    //                     EVENT HANDLERS
    // ==============================================================
    /**
     * Scroll envent on questionsViewBox
     * @param  {Event} e
     */

  }, {
    key: 'onScroll',
    value: function onScroll() {
      var _this6 = this;

      if (this.animatingScroll) {
        return;
      }

      var formFields = this.getFormFields();
      var formNodes = formFields.map(function (f) {
        return _this6.getFieldNode(f.key);
      });
      var viewBoxHeight = this.refs.questionsViewBox.clientHeight;
      var viewBoxScroll = this.refs.questionsViewBox.scrollTop;
      var viewBoxCenter = viewBoxScroll + viewBoxHeight / 2;

      function distanceFromCenter(element) {
        var elementCenter = element.clientHeight / 2 + element.offsetTop;
        var elementDistance = viewBoxCenter - elementCenter;
        var distance = Math.abs(elementDistance);
        return distance;
      }

      var smallestDistance = distanceFromCenter(formNodes[0]);
      var indexOfCenterNode = formNodes.reduce(function (closestIdx, node, nodeIdx) {
        var nodeDistance = distanceFromCenter(formNodes[nodeIdx]);
        var closestNodeIndex = nodeDistance < smallestDistance ? nodeIdx : closestIdx;
        smallestDistance = nodeDistance < smallestDistance ? nodeDistance : smallestDistance;
        return closestNodeIndex;
      }, 0);

      var closestKey = formFields[indexOfCenterNode].key;
      this.setFieldActive(closestKey);
    }

    /**
     * Wheel envent on questionsViewBox
     * @param  {Event} e
     */

  }, {
    key: 'onWheel',
    value: function onWheel(e) {
      var _this7 = this;

      e.preventDefault();

      // Let's dismiss moves that are too small. They come from things like
      // Apple's scroll innertia, which can mess things up. We want to move
      // just one question per scroll if possible.
      if (!e.deltaY || Math.abs(e.deltaY) < 2) {
        return;
      }

      // Throttle the second part to a minimum of 500 milliseconds
      if (new Date() - this.lastWheelMove < 350) {
        return;
      }
      this.lastWheelMove = new Date();

      var wheelDelta = e.deltaY;
      this.animations.schedule(function () {
        if (wheelDelta > 0) {
          _this7.goToField('next');
        } else if (wheelDelta < 0) {
          _this7.goToField('prev');
        }
      }, 'scroll', 0);
    }

    /**
     * Touch envent on questionsViewBox
     * @param  {Event} e
     */

  }, {
    key: 'touchStart',
    value: function touchStart(e) {
      this.initialTouchY = e.changedTouches[0].pageY;
      this.lastMoveY = this.initialTouchY;
      this.lastMoveTime = new Date();
      this.lastMoveScrollValue = this.refs.questionsViewBox.scrollTop;
      this.currY = this.lastMoveY;
      this.animatingScroll = true;
      this.processTouchDisplacement();
    }

    /**
     * Touch envent on questionsViewBox
     * @param  {Event} e
     */

  }, {
    key: 'touchMove',
    value: function touchMove(e) {
      e.preventDefault();
      // Track Y
      this.currY = e.changedTouches[0].pageY;
    }

    /**
     * Touch envent on questionsViewBox
     * @param  {Event} e
     */

  }, {
    key: 'touchEnd',
    value: function touchEnd() {
      this.animations.cancel('touchScroll');
    }

    /**
     * @param  {Event} e
     * @return {void}
     */

  }, {
    key: 'processTouchDisplacement',
    value: function processTouchDisplacement() {
      var maxTouchSpeed = 0.9; // px/ms
      var maxTotalDisplacement = 130;

      var displacement = this.lastMoveY - this.currY;
      var currTime = new Date();
      // Make sure we never divide by 0
      var timeElapsed = Math.max(1, currTime - this.lastMoveTime);
      var touchSpeed = displacement / timeElapsed;
      this.lastMoveY = this.currY;
      this.lastMoveTime = new Date();

      var totalDisplacement = Math.abs(this.initialTouchY - this.currY);
      if (Math.abs(touchSpeed) < maxTouchSpeed && totalDisplacement < maxTotalDisplacement) {
        var newScrollValue = this.lastMoveScrollValue + displacement;
        this.lastMoveScrollValue = newScrollValue;
        this.refs.questionsViewBox.scrollTop = newScrollValue;
        this.animations.schedule(this.processTouchDisplacement, 'touchScroll', 0);
        return;
      }

      this.animations.cancel('touchScroll');
      this.animatingScroll = false;

      if (displacement > 0) {
        this.goToField('next');
      } else {
        this.goToField('prev');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var questions = this.props.config.map(function (q, index) {
        return React.createElement(FormField, {
          config: q,
          ui: _this8.state.ui.questions[index],
          appControl: _this8.appControl,
          key: q.key,
          ref: q.key
        });
      });

      return React.createElement(
        'div',
        { className: this.bemClass },
        React.createElement(
          'div',
          {
            className: this.bemSubComponent('questionsViewBox'),
            ref: 'questionsViewBox',
            onTouchStart: this.touchStart,
            onTouchEnd: this.touchEnd,
            onTouchMove: this.touchMove,
            onWheel: this.onWheel,
            onScroll: this.onScroll
          },
          React.createElement(
            'div',
            { className: this.bemSubComponent('questions'), ref: 'questions' },
            questions,
            React.createElement(SubmitButton, {
              ui: this.state.ui.submitButton,
              appControl: this.appControl,
              ref: this.state.ui.submitButton.key,
              validateAllFields: this.validateAllFields
            })
          )
        ),
        React.createElement(NavigationBar, { appControl: this.appControl, ui: this.state.ui })
      );
    }
  }]);

  return FormUI;
}(ReactBEM);

FormUI.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

var Form = function (_ReactBEM) {
  _inherits(Form, _ReactBEM);

  function Form() {
    var _ref;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // private
    var _this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || _Object$getPrototypeOf(Form)).call.apply(_ref, [this].concat(args)));

    _this.generateInitialState = _this.generateInitialState.bind(_this);
    _this.exportConfig = _this.exportConfig.bind(_this);

    // public
    _this.setQuestionResponse = _this.setQuestionResponse.bind(_this);

    _this.state = _this.generateInitialState(_this.props.config);
    return _this;
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @pure
   * @method importConfig
   * @param {Object} initialConfig - A configuration received as props.
   * Possibly an object created by fl-form-build
   * @param {Array<Object>} customComponents
   * @return {Object}
   */


  _createClass(Form, [{
    key: 'generateInitialState',
    value: function generateInitialState(initialConfig) {
      var customComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var config = initialConfig.map(function (q) {
        var customConstructor = customComponents.find(function (c) {
          return c.type === q.type;
        });
        return customConstructor ? customConstructor.initialState(q) : q;
      }).map(function (q) {
        return _Object$assign({}, q, {
          answer: null,
          key: String(Date.now() + Math.random())
        });
      });

      return { config: config };
    }
  }, {
    key: 'exportConfig',
    value: function exportConfig() {
      console.log(this.state);
      // To be implemented
    }

    /**
     * @public
     * @method setQuestionResponse
     * @param  {String} questionKey
     * @param  {} answerValue
     * @return Promise - will be resolved after the status is updated.
     */

  }, {
    key: 'setQuestionResponse',
    value: function setQuestionResponse(questionKey, answerValue) {
      var _this2 = this;

      var qIndex = this.state.config.findIndex(function (q) {
        return q.key === questionKey;
      });
      assert(qIndex !== -1, 'Did not find question with key: ' + questionKey);

      var newConfig = clone$2(this.state.config);
      newConfig[qIndex].answer = answerValue;

      return new _Promise(function (resolve) {
        return _this2.setState({ config: newConfig }, resolve);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var appControl = {
        setQuestionResponse: this.setQuestionResponse,
        exportConfig: this.exportConfig
      };

      return React.createElement(FormUI, { config: this.state.config, appControl: appControl });
    }
  }]);

  return Form;
}(ReactBEM);

Form.PropTypes = {
  config: React.PropTypes.object.isRequired,
  customComponents: React.PropTypes.array
};

/* globals xController */
// import 'babel-polyfill'; // Removing to avoid conflict in squarespace
var flInteractiveForm = {
  create: function create(config, customComponents) {
    assert(config && config.length !== undefined, 'The first argument must be a configuration array');

    var targetElement = document.createElement('div');
    targetElement.className = 'fl-if';
    ReactDOM.render(React.createElement(Form, { config: config, customComponents: customComponents }), targetElement);

    return targetElement;
  }
};

return flInteractiveForm;

});

//# sourceMappingURL=react-main.js.map
