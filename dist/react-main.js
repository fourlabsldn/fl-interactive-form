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


var require$$0$20 = Object.freeze({
	default: _wks$1
});

var _setToStringTag = createCommonjsModule(function (module) {
var def = interopDefault(require$$1$4).f
  , has = interopDefault(require$$2)
  , TAG = interopDefault(require$$0$20)('toStringTag');

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
interopDefault(require$$0$9)(IteratorPrototype, interopDefault(require$$0$20)('iterator'), function(){ return this; });

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
  , ITERATOR       = interopDefault(require$$0$20)('iterator')
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
  , TO_STRING_TAG = interopDefault(require$$0$20)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
});

var _wksExt = createCommonjsModule(function (module, exports) {
exports.f = interopDefault(require$$0$20);
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


var require$$0$23 = Object.freeze({
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

var require$$0$24 = Object.freeze({
	default: _objectGopn$1,
	f: f$6
});

var _objectGopnExt = createCommonjsModule(function (module) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = interopDefault(require$$1)
  , gOPN      = interopDefault(require$$0$24).f
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
  , wks            = interopDefault(require$$0$20)
  , wksExt         = interopDefault(require$$1$12)
  , wksDefine      = interopDefault(require$$0$23)
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
  interopDefault(require$$0$24).f = gOPNExt.f = $getOwnPropertyNames;
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
interopDefault(require$$0$23)('asyncIterator');
});

var es7_symbol_observable = createCommonjsModule(function (module) {
interopDefault(require$$0$23)('observable');
});

var index = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Symbol;
});

var index$1 = interopDefault(index);


var require$$0$22 = Object.freeze({
	default: index$1
});

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$22), __esModule: true };
});

var symbol$1 = interopDefault(symbol);


var require$$0$21 = Object.freeze({
	default: symbol$1
});

var _typeof = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _iterator = interopDefault(require$$1$8);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = interopDefault(require$$0$21);

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
  , TAG = interopDefault(require$$0$20)('toStringTag')
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
  , ITERATOR   = interopDefault(require$$0$20)('iterator')
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
  , ITERATOR  = interopDefault(require$$0$20)('iterator')
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
  , SPECIES   = interopDefault(require$$0$20)('species');
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
  , SPECIES     = interopDefault(require$$0$20)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
});

var _setSpecies$1 = interopDefault(_setSpecies);


var require$$2$4 = Object.freeze({
	default: _setSpecies$1
});

var _iterDetect = createCommonjsModule(function (module) {
var ITERATOR     = interopDefault(require$$0$20)('iterator')
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


var require$$0$27 = Object.freeze({
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
      , FakePromise = (promise.constructor = {})[interopDefault(require$$0$20)('species')] = function(exec){ exec(empty, empty); };
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
interopDefault(require$$2$4)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && interopDefault(require$$0$27)(function(iter){
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


var require$$0$26 = Object.freeze({
	default: promise$2
});

var promise = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$26), __esModule: true };
});

var _Promise = interopDefault(promise);


var require$$0$25 = Object.freeze({
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


var require$$0$30 = Object.freeze({
	default: _objectAssign$1
});

var es6_object_assign = createCommonjsModule(function (module) {
// 19.1.3.1 Object.assign(target, source)
var $export = interopDefault(require$$7);

$export($export.S + $export.F, 'Object', {assign: interopDefault(require$$0$30)});
});

var assign$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Object.assign;
});

var assign$3 = interopDefault(assign$2);


var require$$0$29 = Object.freeze({
	default: assign$3
});

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$29), __esModule: true };
});

var _Object$assign = interopDefault(assign$1);


var require$$0$28 = Object.freeze({
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


var require$$0$31 = Object.freeze({
	default: getPrototypeOf$3
});

var getPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$31), __esModule: true };
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

var require$$0$33 = Object.freeze({
	default: _setProto$1,
	set: set$2,
	check: check
});

var es6_object_setPrototypeOf = createCommonjsModule(function (module) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = interopDefault(require$$7);
$export($export.S, 'Object', {setPrototypeOf: interopDefault(require$$0$33).set});
});

var setPrototypeOf$3 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$8).Object.setPrototypeOf;
});

var setPrototypeOf$4 = interopDefault(setPrototypeOf$3);


var require$$0$32 = Object.freeze({
	default: setPrototypeOf$4
});

var setPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$32), __esModule: true };
});

var setPrototypeOf$2 = interopDefault(setPrototypeOf$1);


var require$$2$5 = Object.freeze({
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


var require$$0$34 = Object.freeze({
	default: create$4
});

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$34), __esModule: true };
});

var create$2 = interopDefault(create$1);


var require$$1$16 = Object.freeze({
	default: create$2
});

var inherits = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _setPrototypeOf = interopDefault(require$$2$5);

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

var _promise = interopDefault(require$$0$25);

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


var require$$2$6 = Object.freeze({
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
  , createProperty = interopDefault(require$$2$6)
  , getIterFn      = interopDefault(require$$1$13);

$export($export.S + $export.F * !interopDefault(require$$0$27)(function(iter){ Array.from(iter); }), 'Array', {
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
            tabIndex: '0'
          },
          option
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
            tabIndex: '0'
          },
          option
        );
      });
    }
  }]);

  return Checkboxes;
}(OptionsInput);

var _extends = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _assign = interopDefault(require$$0$28);

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
        var disabled = disabledIndexes.indefOf(index) !== -1;
        return React.createElement(
          'option',
          {
            key: '' + _this2.props.config.key + index,
            tabIndex: '0',
            disabled: disabled
          },
          option
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

var inputTypes = {
  TextBox: TextBox,
  TextArea: TextArea,
  RadioButtons: RadioButtons,
  Checkboxes: Checkboxes,
  Dropdown: Dropdown,
  EmailBox: EmailBox,
  NumberBox: NumberBox$1,
  TelephoneBox: NumberBox
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

var stringify$2 = createCommonjsModule(function (module) {
var core  = interopDefault(require$$0$8)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify$2(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
});

var stringify$3 = interopDefault(stringify$2);


var require$$0$41 = Object.freeze({
	default: stringify$3
});

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$41), __esModule: true };
});

var _JSON$stringify = interopDefault(stringify$1);

var clone = (function (a) {
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

      var ui = clone(this.state.ui);
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
      var ui = clone(this.state.ui);

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
                ui = clone(this.state.ui);
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

      var newConfig = clone(this.state.config);
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
