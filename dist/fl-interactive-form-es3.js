(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.flInteractiveForm = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _global$1 = interopDefault(_global);


var require$$3 = Object.freeze({
	"default": _global$1
});

var _has = createCommonjsModule(function (module) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
});

var _has$1 = interopDefault(_has);


var require$$4 = Object.freeze({
	"default": _has$1
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


var require$$1$1 = Object.freeze({
	"default": _fails$1
});

var _descriptors = createCommonjsModule(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !interopDefault(require$$1$1)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _descriptors$1 = interopDefault(_descriptors);


var require$$1 = Object.freeze({
	"default": _descriptors$1
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core$1 = interopDefault(_core);
var version = _core.version;

var require$$0 = Object.freeze({
	"default": _core$1,
	version: version
});

var _isObject = createCommonjsModule(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var _isObject$1 = interopDefault(_isObject);


var require$$0$1 = Object.freeze({
	"default": _isObject$1
});

var _anObject = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var _anObject$1 = interopDefault(_anObject);


var require$$5 = Object.freeze({
	"default": _anObject$1
});

var _domCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$1)
  , document = interopDefault(require$$3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var _domCreate$1 = interopDefault(_domCreate);


var require$$2$2 = Object.freeze({
	"default": _domCreate$1
});

var _ie8DomDefine = createCommonjsModule(function (module) {
module.exports = !interopDefault(require$$1) && !interopDefault(require$$1$1)(function(){
  return Object.defineProperty(interopDefault(require$$2$2)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _ie8DomDefine$1 = interopDefault(_ie8DomDefine);


var require$$1$3 = Object.freeze({
	"default": _ie8DomDefine$1
});

var _toPrimitive = createCommonjsModule(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = interopDefault(require$$0$1);
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


var require$$4$1 = Object.freeze({
	"default": _toPrimitive$1
});

var _objectDp = createCommonjsModule(function (module, exports) {
var anObject       = interopDefault(require$$5)
  , IE8_DOM_DEFINE = interopDefault(require$$1$3)
  , toPrimitive    = interopDefault(require$$4$1)
  , dP             = Object.defineProperty;

exports.f = interopDefault(require$$1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
var f$1 = _objectDp.f;

var require$$2$1 = Object.freeze({
	"default": _objectDp$1,
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


var require$$2$3 = Object.freeze({
	"default": _propertyDesc$1
});

var _hide = createCommonjsModule(function (module) {
var dP         = interopDefault(require$$2$1)
  , createDesc = interopDefault(require$$2$3);
module.exports = interopDefault(require$$1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var _hide$1 = interopDefault(_hide);


var require$$2 = Object.freeze({
	"default": _hide$1
});

var _uid = createCommonjsModule(function (module) {
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
});

var _uid$1 = interopDefault(_uid);


var require$$12 = Object.freeze({
	"default": _uid$1
});

var _redefine = createCommonjsModule(function (module) {
var global    = interopDefault(require$$3)
  , hide      = interopDefault(require$$2)
  , has       = interopDefault(require$$4)
  , SRC       = interopDefault(require$$12)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

interopDefault(require$$0).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _redefine$1 = interopDefault(_redefine);


var require$$4$2 = Object.freeze({
	"default": _redefine$1
});

var _aFunction = createCommonjsModule(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var _aFunction$1 = interopDefault(_aFunction);


var require$$0$2 = Object.freeze({
	"default": _aFunction$1
});

var _ctx = createCommonjsModule(function (module) {
// optional / simple context binding
var aFunction = interopDefault(require$$0$2);
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


var require$$31 = Object.freeze({
	"default": _ctx$1
});

var _export = createCommonjsModule(function (module) {
var global    = interopDefault(require$$3)
  , core      = interopDefault(require$$0)
  , hide      = interopDefault(require$$2)
  , redefine  = interopDefault(require$$4$2)
  , ctx       = interopDefault(require$$31)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
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


var require$$1$2 = Object.freeze({
	"default": _export$1
});

var _meta = createCommonjsModule(function (module) {
var META     = interopDefault(require$$12)('meta')
  , isObject = interopDefault(require$$0$1)
  , has      = interopDefault(require$$4)
  , setDesc  = interopDefault(require$$2$1).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !interopDefault(require$$1$1)(function(){
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

var require$$6 = Object.freeze({
	"default": _meta$1,
	KEY: KEY,
	NEED: NEED,
	fastKey: fastKey,
	getWeak: getWeak,
	onFreeze: onFreeze
});

var _shared = createCommonjsModule(function (module) {
var global = interopDefault(require$$3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
});

var _shared$1 = interopDefault(_shared);


var require$$1$4 = Object.freeze({
	"default": _shared$1
});

var _wks = createCommonjsModule(function (module) {
var store      = interopDefault(require$$1$4)('wks')
  , uid        = interopDefault(require$$12)
  , Symbol     = interopDefault(require$$3).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$1 = interopDefault(_wks);


var require$$0$4 = Object.freeze({
	"default": _wks$1
});

var _setToStringTag = createCommonjsModule(function (module) {
var def = interopDefault(require$$2$1).f
  , has = interopDefault(require$$4)
  , TAG = interopDefault(require$$0$4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
});

var _setToStringTag$1 = interopDefault(_setToStringTag);


var require$$0$3 = Object.freeze({
	"default": _setToStringTag$1
});

var _wksExt = createCommonjsModule(function (module, exports) {
exports.f = interopDefault(require$$0$4);
});

var _wksExt$1 = interopDefault(_wksExt);
var f$2 = _wksExt.f;

var require$$1$5 = Object.freeze({
	"default": _wksExt$1,
	f: f$2
});

var _library = createCommonjsModule(function (module) {
module.exports = false;
});

var _library$1 = interopDefault(_library);


var require$$2$4 = Object.freeze({
	"default": _library$1
});

var _wksDefine = createCommonjsModule(function (module) {
var global         = interopDefault(require$$3)
  , core           = interopDefault(require$$0)
  , LIBRARY        = interopDefault(require$$2$4)
  , wksExt         = interopDefault(require$$1$5)
  , defineProperty = interopDefault(require$$2$1).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
});

var _wksDefine$1 = interopDefault(_wksDefine);


var require$$0$5 = Object.freeze({
	"default": _wksDefine$1
});

var _cof = createCommonjsModule(function (module) {
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
});

var _cof$1 = interopDefault(_cof);


var require$$0$6 = Object.freeze({
	"default": _cof$1
});

var _iobject = createCommonjsModule(function (module) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = interopDefault(require$$0$6);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
});

var _iobject$1 = interopDefault(_iobject);


var require$$1$8 = Object.freeze({
	"default": _iobject$1
});

var _defined = createCommonjsModule(function (module) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
});

var _defined$1 = interopDefault(_defined);


var require$$4$3 = Object.freeze({
	"default": _defined$1
});

var _toIobject = createCommonjsModule(function (module) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = interopDefault(require$$1$8)
  , defined = interopDefault(require$$4$3);
module.exports = function(it){
  return IObject(defined(it));
};
});

var _toIobject$1 = interopDefault(_toIobject);


var require$$1$7 = Object.freeze({
	"default": _toIobject$1
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


var require$$26 = Object.freeze({
	"default": _toInteger$1
});

var _toLength = createCommonjsModule(function (module) {
// 7.1.15 ToLength
var toInteger = interopDefault(require$$26)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
});

var _toLength$1 = interopDefault(_toLength);


var require$$3$1 = Object.freeze({
	"default": _toLength$1
});

var _toIndex = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$26)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
});

var _toIndex$1 = interopDefault(_toIndex);


var require$$24 = Object.freeze({
	"default": _toIndex$1
});

var _arrayIncludes = createCommonjsModule(function (module) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = interopDefault(require$$1$7)
  , toLength  = interopDefault(require$$3$1)
  , toIndex   = interopDefault(require$$24);
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


var require$$1$9 = Object.freeze({
	"default": _arrayIncludes$1
});

var _sharedKey = createCommonjsModule(function (module) {
var shared = interopDefault(require$$1$4)('keys')
  , uid    = interopDefault(require$$12);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
});

var _sharedKey$1 = interopDefault(_sharedKey);


var require$$0$7 = Object.freeze({
	"default": _sharedKey$1
});

var _objectKeysInternal = createCommonjsModule(function (module) {
var has          = interopDefault(require$$4)
  , toIObject    = interopDefault(require$$1$7)
  , arrayIndexOf = interopDefault(require$$1$9)(false)
  , IE_PROTO     = interopDefault(require$$0$7)('IE_PROTO');

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


var require$$1$6 = Object.freeze({
	"default": _objectKeysInternal$1
});

var _enumBugKeys = createCommonjsModule(function (module) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
});

var _enumBugKeys$1 = interopDefault(_enumBugKeys);


var require$$0$8 = Object.freeze({
	"default": _enumBugKeys$1
});

var _objectKeys = createCommonjsModule(function (module) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = interopDefault(require$$1$6)
  , enumBugKeys = interopDefault(require$$0$8);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
});

var _objectKeys$1 = interopDefault(_objectKeys);


var require$$2$5 = Object.freeze({
	"default": _objectKeys$1
});

var _keyof = createCommonjsModule(function (module) {
var getKeys   = interopDefault(require$$2$5)
  , toIObject = interopDefault(require$$1$7);
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
	"default": _keyof$1
});

var _objectGops = createCommonjsModule(function (module, exports) {
exports.f = Object.getOwnPropertySymbols;
});

var _objectGops$1 = interopDefault(_objectGops);
var f$3 = _objectGops.f;

var require$$2$6 = Object.freeze({
	"default": _objectGops$1,
	f: f$3
});

var _objectPie = createCommonjsModule(function (module, exports) {
exports.f = {}.propertyIsEnumerable;
});

var _objectPie$1 = interopDefault(_objectPie);
var f$4 = _objectPie.f;

var require$$0$9 = Object.freeze({
	"default": _objectPie$1,
	f: f$4
});

var _enumKeys = createCommonjsModule(function (module) {
// all enumerable object keys, includes symbols
var getKeys = interopDefault(require$$2$5)
  , gOPS    = interopDefault(require$$2$6)
  , pIE     = interopDefault(require$$0$9);
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
	"default": _enumKeys$1
});

var _isArray = createCommonjsModule(function (module) {
// 7.2.2 IsArray(argument)
var cof = interopDefault(require$$0$6);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
});

var _isArray$1 = interopDefault(_isArray);


var require$$1$10 = Object.freeze({
	"default": _isArray$1
});

var _objectDps = createCommonjsModule(function (module) {
var dP       = interopDefault(require$$2$1)
  , anObject = interopDefault(require$$5)
  , getKeys  = interopDefault(require$$2$5);

module.exports = interopDefault(require$$1) ? Object.defineProperties : function defineProperties(O, Properties){
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


var require$$0$10 = Object.freeze({
	"default": _objectDps$1
});

var _html = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$3).document && document.documentElement;
});

var _html$1 = interopDefault(_html);


var require$$3$2 = Object.freeze({
	"default": _html$1
});

var _objectCreate = createCommonjsModule(function (module) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = interopDefault(require$$5)
  , dPs         = interopDefault(require$$0$10)
  , enumBugKeys = interopDefault(require$$0$8)
  , IE_PROTO    = interopDefault(require$$0$7)('IE_PROTO')
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
  interopDefault(require$$3$2).appendChild(iframe);
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


var require$$6$1 = Object.freeze({
	"default": _objectCreate$1
});

var _objectGopn = createCommonjsModule(function (module, exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = interopDefault(require$$1$6)
  , hiddenKeys = interopDefault(require$$0$8).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
});

var _objectGopn$1 = interopDefault(_objectGopn);
var f$6 = _objectGopn.f;

var require$$3$3 = Object.freeze({
	"default": _objectGopn$1,
	f: f$6
});

var _objectGopnExt = createCommonjsModule(function (module) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = interopDefault(require$$1$7)
  , gOPN      = interopDefault(require$$3$3).f
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

var require$$0$11 = Object.freeze({
	"default": _objectGopnExt$1,
	f: f$5
});

var _objectGopd = createCommonjsModule(function (module, exports) {
var pIE            = interopDefault(require$$0$9)
  , createDesc     = interopDefault(require$$2$3)
  , toIObject      = interopDefault(require$$1$7)
  , toPrimitive    = interopDefault(require$$4$1)
  , has            = interopDefault(require$$4)
  , IE8_DOM_DEFINE = interopDefault(require$$1$3)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = interopDefault(require$$1) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
});

var _objectGopd$1 = interopDefault(_objectGopd);
var f$7 = _objectGopd.f;

var require$$2$7 = Object.freeze({
	"default": _objectGopd$1,
	f: f$7
});

var es6_symbol = createCommonjsModule(function (module) {
'use strict';
// ECMAScript 6 symbols shim
var global         = interopDefault(require$$3)
  , has            = interopDefault(require$$4)
  , DESCRIPTORS    = interopDefault(require$$1)
  , $export        = interopDefault(require$$1$2)
  , redefine       = interopDefault(require$$4$2)
  , META           = interopDefault(require$$6).KEY
  , $fails         = interopDefault(require$$1$1)
  , shared         = interopDefault(require$$1$4)
  , setToStringTag = interopDefault(require$$0$3)
  , uid            = interopDefault(require$$12)
  , wks            = interopDefault(require$$0$4)
  , wksExt         = interopDefault(require$$1$5)
  , wksDefine      = interopDefault(require$$0$5)
  , keyOf          = interopDefault(require$$16)
  , enumKeys       = interopDefault(require$$15)
  , isArray        = interopDefault(require$$1$10)
  , anObject       = interopDefault(require$$5)
  , toIObject      = interopDefault(require$$1$7)
  , toPrimitive    = interopDefault(require$$4$1)
  , createDesc     = interopDefault(require$$2$3)
  , _create        = interopDefault(require$$6$1)
  , gOPNExt        = interopDefault(require$$0$11)
  , $GOPD          = interopDefault(require$$2$7)
  , $DP            = interopDefault(require$$2$1)
  , $keys          = interopDefault(require$$2$5)
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
  interopDefault(require$$3$3).f = gOPNExt.f = $getOwnPropertyNames;
  interopDefault(require$$0$9).f  = $propertyIsEnumerable;
  interopDefault(require$$2$6).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !interopDefault(require$$2$4)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || interopDefault(require$$2)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
});

var es6_object_create = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: interopDefault(require$$6$1)});
});

var es6_object_defineProperty = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !interopDefault(require$$1), 'Object', {defineProperty: interopDefault(require$$2$1).f});
});

var es6_object_defineProperties = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !interopDefault(require$$1), 'Object', {defineProperties: interopDefault(require$$0$10)});
});

var _objectSap = createCommonjsModule(function (module) {
// most Object methods by ES6 should accept primitives
var $export = interopDefault(require$$1$2)
  , core    = interopDefault(require$$0)
  , fails   = interopDefault(require$$1$1);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
});

var _objectSap$1 = interopDefault(_objectSap);


var require$$0$12 = Object.freeze({
	"default": _objectSap$1
});

var es6_object_getOwnPropertyDescriptor = createCommonjsModule(function (module) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = interopDefault(require$$1$7)
  , $getOwnPropertyDescriptor = interopDefault(require$$2$7).f;

interopDefault(require$$0$12)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
});

var _toObject = createCommonjsModule(function (module) {
// 7.1.13 ToObject(argument)
var defined = interopDefault(require$$4$3);
module.exports = function(it){
  return Object(defined(it));
};
});

var _toObject$1 = interopDefault(_toObject);


var require$$5$1 = Object.freeze({
	"default": _toObject$1
});

var _objectGpo = createCommonjsModule(function (module) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = interopDefault(require$$4)
  , toObject    = interopDefault(require$$5$1)
  , IE_PROTO    = interopDefault(require$$0$7)('IE_PROTO')
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


var require$$0$13 = Object.freeze({
	"default": _objectGpo$1
});

var es6_object_getPrototypeOf = createCommonjsModule(function (module) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = interopDefault(require$$5$1)
  , $getPrototypeOf = interopDefault(require$$0$13);

interopDefault(require$$0$12)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
});

var es6_object_keys = createCommonjsModule(function (module) {
// 19.1.2.14 Object.keys(O)
var toObject = interopDefault(require$$5$1)
  , $keys    = interopDefault(require$$2$5);

interopDefault(require$$0$12)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
});

var es6_object_getOwnPropertyNames = createCommonjsModule(function (module) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
interopDefault(require$$0$12)('getOwnPropertyNames', function(){
  return interopDefault(require$$0$11).f;
});
});

var es6_object_freeze = createCommonjsModule(function (module) {
// 19.1.2.5 Object.freeze(O)
var isObject = interopDefault(require$$0$1)
  , meta     = interopDefault(require$$6).onFreeze;

interopDefault(require$$0$12)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
});

var es6_object_seal = createCommonjsModule(function (module) {
// 19.1.2.17 Object.seal(O)
var isObject = interopDefault(require$$0$1)
  , meta     = interopDefault(require$$6).onFreeze;

interopDefault(require$$0$12)('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});
});

var es6_object_preventExtensions = createCommonjsModule(function (module) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = interopDefault(require$$0$1)
  , meta     = interopDefault(require$$6).onFreeze;

interopDefault(require$$0$12)('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});
});

var es6_object_isFrozen = createCommonjsModule(function (module) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = interopDefault(require$$0$1);

interopDefault(require$$0$12)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
});

var es6_object_isSealed = createCommonjsModule(function (module) {
// 19.1.2.13 Object.isSealed(O)
var isObject = interopDefault(require$$0$1);

interopDefault(require$$0$12)('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
});

var es6_object_isExtensible = createCommonjsModule(function (module) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = interopDefault(require$$0$1);

interopDefault(require$$0$12)('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
});

var _objectAssign = createCommonjsModule(function (module) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = interopDefault(require$$2$5)
  , gOPS     = interopDefault(require$$2$6)
  , pIE      = interopDefault(require$$0$9)
  , toObject = interopDefault(require$$5$1)
  , IObject  = interopDefault(require$$1$8)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || interopDefault(require$$1$1)(function(){
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


var require$$3$4 = Object.freeze({
	"default": _objectAssign$1
});

var es6_object_assign = createCommonjsModule(function (module) {
// 19.1.3.1 Object.assign(target, source)
var $export = interopDefault(require$$1$2);

$export($export.S + $export.F, 'Object', {assign: interopDefault(require$$3$4)});
});

var _sameValue = createCommonjsModule(function (module) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
});

var _sameValue$1 = interopDefault(_sameValue);


var require$$21 = Object.freeze({
	"default": _sameValue$1
});

var es6_object_is = createCommonjsModule(function (module) {
// 19.1.3.10 Object.is(value1, value2)
var $export = interopDefault(require$$1$2);
$export($export.S, 'Object', {is: interopDefault(require$$21)});
});

var _setProto = createCommonjsModule(function (module) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = interopDefault(require$$0$1)
  , anObject = interopDefault(require$$5);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = interopDefault(require$$31)(Function.call, interopDefault(require$$2$7).f(Object.prototype, '__proto__').set, 2);
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
var set$1 = _setProto.set;
var check = _setProto.check;

var require$$0$14 = Object.freeze({
	"default": _setProto$1,
	set: set$1,
	check: check
});

var es6_object_setPrototypeOf = createCommonjsModule(function (module) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = interopDefault(require$$1$2);
$export($export.S, 'Object', {setPrototypeOf: interopDefault(require$$0$14).set});
});

var _classof = createCommonjsModule(function (module) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = interopDefault(require$$0$6)
  , TAG = interopDefault(require$$0$4)('toStringTag')
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


var require$$1$11 = Object.freeze({
	"default": _classof$1
});

var es6_object_toString = createCommonjsModule(function (module) {
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = interopDefault(require$$1$11)
  , test    = {};
test[interopDefault(require$$0$4)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  interopDefault(require$$4$2)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
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


var require$$1$13 = Object.freeze({
	"default": _invoke$1
});

var _bind = createCommonjsModule(function (module) {
'use strict';
var aFunction  = interopDefault(require$$0$2)
  , isObject   = interopDefault(require$$0$1)
  , invoke     = interopDefault(require$$1$13)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};
});

var _bind$1 = interopDefault(_bind);


var require$$1$12 = Object.freeze({
	"default": _bind$1
});

var es6_function_bind = createCommonjsModule(function (module) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = interopDefault(require$$1$2);

$export($export.P, 'Function', {bind: interopDefault(require$$1$12)});
});

var es6_function_name = createCommonjsModule(function (module) {
var dP         = interopDefault(require$$2$1).f
  , createDesc = interopDefault(require$$2$3)
  , has        = interopDefault(require$$4)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || interopDefault(require$$1) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});
});

var es6_function_hasInstance = createCommonjsModule(function (module) {
'use strict';
var isObject       = interopDefault(require$$0$1)
  , getPrototypeOf = interopDefault(require$$0$13)
  , HAS_INSTANCE   = interopDefault(require$$0$4)('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))interopDefault(require$$2$1).f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});
});

var _stringWs = createCommonjsModule(function (module) {
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
});

var _stringWs$1 = interopDefault(_stringWs);


var require$$0$17 = Object.freeze({
	"default": _stringWs$1
});

var _stringTrim = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2)
  , defined = interopDefault(require$$4$3)
  , fails   = interopDefault(require$$1$1)
  , spaces  = interopDefault(require$$0$17)
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;
});

var _stringTrim$1 = interopDefault(_stringTrim);


var require$$0$16 = Object.freeze({
	"default": _stringTrim$1
});

var _parseInt = createCommonjsModule(function (module) {
var $parseInt = interopDefault(require$$3).parseInt
  , $trim     = interopDefault(require$$0$16).trim
  , ws        = interopDefault(require$$0$17)
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;
});

var _parseInt$1 = interopDefault(_parseInt);


var require$$0$15 = Object.freeze({
	"default": _parseInt$1
});

var es6_parseInt = createCommonjsModule(function (module) {
var $export   = interopDefault(require$$1$2)
  , $parseInt = interopDefault(require$$0$15);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});
});

var _parseFloat = createCommonjsModule(function (module) {
var $parseFloat = interopDefault(require$$3).parseFloat
  , $trim       = interopDefault(require$$0$16).trim;

module.exports = 1 / $parseFloat(interopDefault(require$$0$17) + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;
});

var _parseFloat$1 = interopDefault(_parseFloat);


var require$$0$18 = Object.freeze({
	"default": _parseFloat$1
});

var es6_parseFloat = createCommonjsModule(function (module) {
var $export     = interopDefault(require$$1$2)
  , $parseFloat = interopDefault(require$$0$18);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});
});

var _inheritIfRequired = createCommonjsModule(function (module) {
var isObject       = interopDefault(require$$0$1)
  , setPrototypeOf = interopDefault(require$$0$14).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};
});

var _inheritIfRequired$1 = interopDefault(_inheritIfRequired);


var require$$0$19 = Object.freeze({
	"default": _inheritIfRequired$1
});

var es6_number_constructor = createCommonjsModule(function (module) {
'use strict';
var global            = interopDefault(require$$3)
  , has               = interopDefault(require$$4)
  , cof               = interopDefault(require$$0$6)
  , inheritIfRequired = interopDefault(require$$0$19)
  , toPrimitive       = interopDefault(require$$4$1)
  , fails             = interopDefault(require$$1$1)
  , gOPN              = interopDefault(require$$3$3).f
  , gOPD              = interopDefault(require$$2$7).f
  , dP                = interopDefault(require$$2$1).f
  , $trim             = interopDefault(require$$0$16).trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(interopDefault(require$$6$1)(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = interopDefault(require$$1) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  interopDefault(require$$4$2)(global, NUMBER, $Number);
}
});

var _aNumberValue = createCommonjsModule(function (module) {
var cof = interopDefault(require$$0$6);
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};
});

var _aNumberValue$1 = interopDefault(_aNumberValue);


var require$$0$20 = Object.freeze({
	"default": _aNumberValue$1
});

var _stringRepeat = createCommonjsModule(function (module) {
'use strict';
var toInteger = interopDefault(require$$26)
  , defined   = interopDefault(require$$4$3);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
});

var _stringRepeat$1 = interopDefault(_stringRepeat);


var require$$1$14 = Object.freeze({
	"default": _stringRepeat$1
});

var es6_number_toFixed = createCommonjsModule(function (module) {
'use strict';
var $export      = interopDefault(require$$1$2)
  , toInteger    = interopDefault(require$$26)
  , aNumberValue = interopDefault(require$$0$20)
  , repeat       = interopDefault(require$$1$14)
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !interopDefault(require$$1$1)(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});
});

var es6_number_toPrecision = createCommonjsModule(function (module) {
'use strict';
var $export      = interopDefault(require$$1$2)
  , $fails       = interopDefault(require$$1$1)
  , aNumberValue = interopDefault(require$$0$20)
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});
});

var es6_number_epsilon = createCommonjsModule(function (module) {
// 20.1.2.1 Number.EPSILON
var $export = interopDefault(require$$1$2);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
});

var es6_number_isFinite = createCommonjsModule(function (module) {
// 20.1.2.2 Number.isFinite(number)
var $export   = interopDefault(require$$1$2)
  , _isFinite = interopDefault(require$$3).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
});

var _isInteger = createCommonjsModule(function (module) {
// 20.1.2.3 Number.isInteger(number)
var isObject = interopDefault(require$$0$1)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
});

var _isInteger$1 = interopDefault(_isInteger);


var require$$0$21 = Object.freeze({
	"default": _isInteger$1
});

var es6_number_isInteger = createCommonjsModule(function (module) {
// 20.1.2.3 Number.isInteger(number)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Number', {isInteger: interopDefault(require$$0$21)});
});

var es6_number_isNan = createCommonjsModule(function (module) {
// 20.1.2.4 Number.isNaN(number)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
});

var es6_number_isSafeInteger = createCommonjsModule(function (module) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export   = interopDefault(require$$1$2)
  , isInteger = interopDefault(require$$0$21)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
});

var es6_number_maxSafeInteger = createCommonjsModule(function (module) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = interopDefault(require$$1$2);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
});

var es6_number_minSafeInteger = createCommonjsModule(function (module) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = interopDefault(require$$1$2);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
});

var es6_number_parseFloat = createCommonjsModule(function (module) {
var $export     = interopDefault(require$$1$2)
  , $parseFloat = interopDefault(require$$0$18);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});
});

var es6_number_parseInt = createCommonjsModule(function (module) {
var $export   = interopDefault(require$$1$2)
  , $parseInt = interopDefault(require$$0$15);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});
});

var _mathLog1p = createCommonjsModule(function (module) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
});

var _mathLog1p$1 = interopDefault(_mathLog1p);


var require$$0$22 = Object.freeze({
	"default": _mathLog1p$1
});

var es6_math_acosh = createCommonjsModule(function (module) {
// 20.2.2.3 Math.acosh(x)
var $export = interopDefault(require$$1$2)
  , log1p   = interopDefault(require$$0$22)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
});

var es6_math_asinh = createCommonjsModule(function (module) {
// 20.2.2.5 Math.asinh(x)
var $export = interopDefault(require$$1$2)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});
});

var es6_math_atanh = createCommonjsModule(function (module) {
// 20.2.2.7 Math.atanh(x)
var $export = interopDefault(require$$1$2)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
});

var _mathSign = createCommonjsModule(function (module) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
});

var _mathSign$1 = interopDefault(_mathSign);


var require$$0$23 = Object.freeze({
	"default": _mathSign$1
});

var es6_math_cbrt = createCommonjsModule(function (module) {
// 20.2.2.9 Math.cbrt(x)
var $export = interopDefault(require$$1$2)
  , sign    = interopDefault(require$$0$23);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
});

var es6_math_clz32 = createCommonjsModule(function (module) {
// 20.2.2.11 Math.clz32(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
});

var es6_math_cosh = createCommonjsModule(function (module) {
// 20.2.2.12 Math.cosh(x)
var $export = interopDefault(require$$1$2)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
});

var _mathExpm1 = createCommonjsModule(function (module) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
});

var _mathExpm1$1 = interopDefault(_mathExpm1);


var require$$0$24 = Object.freeze({
	"default": _mathExpm1$1
});

var es6_math_expm1 = createCommonjsModule(function (module) {
// 20.2.2.14 Math.expm1(x)
var $export = interopDefault(require$$1$2)
  , $expm1  = interopDefault(require$$0$24);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});
});

var es6_math_fround = createCommonjsModule(function (module) {
// 20.2.2.16 Math.fround(x)
var $export   = interopDefault(require$$1$2)
  , sign      = interopDefault(require$$0$23)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});
});

var es6_math_hypot = createCommonjsModule(function (module) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = interopDefault(require$$1$2)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
});

var es6_math_imul = createCommonjsModule(function (module) {
// 20.2.2.18 Math.imul(x, y)
var $export = interopDefault(require$$1$2)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * interopDefault(require$$1$1)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
});

var es6_math_log10 = createCommonjsModule(function (module) {
// 20.2.2.21 Math.log10(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});
});

var es6_math_log1p = createCommonjsModule(function (module) {
// 20.2.2.20 Math.log1p(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {log1p: interopDefault(require$$0$22)});
});

var es6_math_log2 = createCommonjsModule(function (module) {
// 20.2.2.22 Math.log2(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
});

var es6_math_sign = createCommonjsModule(function (module) {
// 20.2.2.28 Math.sign(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {sign: interopDefault(require$$0$23)});
});

var es6_math_sinh = createCommonjsModule(function (module) {
// 20.2.2.30 Math.sinh(x)
var $export = interopDefault(require$$1$2)
  , expm1   = interopDefault(require$$0$24)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * interopDefault(require$$1$1)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
});

var es6_math_tanh = createCommonjsModule(function (module) {
// 20.2.2.33 Math.tanh(x)
var $export = interopDefault(require$$1$2)
  , expm1   = interopDefault(require$$0$24)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
});

var es6_math_trunc = createCommonjsModule(function (module) {
// 20.2.2.34 Math.trunc(x)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
});

var es6_string_fromCodePoint = createCommonjsModule(function (module) {
var $export        = interopDefault(require$$1$2)
  , toIndex        = interopDefault(require$$24)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
});

var es6_string_raw = createCommonjsModule(function (module) {
var $export   = interopDefault(require$$1$2)
  , toIObject = interopDefault(require$$1$7)
  , toLength  = interopDefault(require$$3$1);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});
});

var es6_string_trim = createCommonjsModule(function (module) {
'use strict';
// 21.1.3.25 String.prototype.trim()
interopDefault(require$$0$16)('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});
});

var _stringAt = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$26)
  , defined   = interopDefault(require$$4$3);
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


var require$$0$25 = Object.freeze({
	"default": _stringAt$1
});

var _iterators = createCommonjsModule(function (module) {
module.exports = {};
});

var _iterators$1 = interopDefault(_iterators);


var require$$1$15 = Object.freeze({
	"default": _iterators$1
});

var _iterCreate = createCommonjsModule(function (module) {
'use strict';
var create         = interopDefault(require$$6$1)
  , descriptor     = interopDefault(require$$2$3)
  , setToStringTag = interopDefault(require$$0$3)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
interopDefault(require$$2)(IteratorPrototype, interopDefault(require$$0$4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
});

var _iterCreate$1 = interopDefault(_iterCreate);


var require$$0$26 = Object.freeze({
	"default": _iterCreate$1
});

var _iterDefine = createCommonjsModule(function (module) {
'use strict';
var LIBRARY        = interopDefault(require$$2$4)
  , $export        = interopDefault(require$$1$2)
  , redefine       = interopDefault(require$$4$2)
  , hide           = interopDefault(require$$2)
  , has            = interopDefault(require$$4)
  , Iterators      = interopDefault(require$$1$15)
  , $iterCreate    = interopDefault(require$$0$26)
  , setToStringTag = interopDefault(require$$0$3)
  , getPrototypeOf = interopDefault(require$$0$13)
  , ITERATOR       = interopDefault(require$$0$4)('iterator')
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


var require$$4$4 = Object.freeze({
	"default": _iterDefine$1
});

var es6_string_iterator = createCommonjsModule(function (module) {
'use strict';
var $at  = interopDefault(require$$0$25)(true);

// 21.1.3.27 String.prototype[@@iterator]()
interopDefault(require$$4$4)(String, 'String', function(iterated){
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

var es6_string_codePointAt = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $at     = interopDefault(require$$0$25)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
});

var _isRegexp = createCommonjsModule(function (module) {
// 7.2.8 IsRegExp(argument)
var isObject = interopDefault(require$$0$1)
  , cof      = interopDefault(require$$0$6)
  , MATCH    = interopDefault(require$$0$4)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};
});

var _isRegexp$1 = interopDefault(_isRegexp);


var require$$2$8 = Object.freeze({
	"default": _isRegexp$1
});

var _stringContext = createCommonjsModule(function (module) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = interopDefault(require$$2$8)
  , defined  = interopDefault(require$$4$3);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
});

var _stringContext$1 = interopDefault(_stringContext);


var require$$1$16 = Object.freeze({
	"default": _stringContext$1
});

var _failsIsRegexp = createCommonjsModule(function (module) {
var MATCH = interopDefault(require$$0$4)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};
});

var _failsIsRegexp$1 = interopDefault(_failsIsRegexp);


var require$$0$27 = Object.freeze({
	"default": _failsIsRegexp$1
});

var es6_string_endsWith = createCommonjsModule(function (module) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export   = interopDefault(require$$1$2)
  , toLength  = interopDefault(require$$3$1)
  , context   = interopDefault(require$$1$16)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * interopDefault(require$$0$27)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});
});

var es6_string_includes = createCommonjsModule(function (module) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export  = interopDefault(require$$1$2)
  , context  = interopDefault(require$$1$16)
  , INCLUDES = 'includes';

$export($export.P + $export.F * interopDefault(require$$0$27)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});
});

var es6_string_repeat = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: interopDefault(require$$1$14)
});
});

var es6_string_startsWith = createCommonjsModule(function (module) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export     = interopDefault(require$$1$2)
  , toLength    = interopDefault(require$$3$1)
  , context     = interopDefault(require$$1$16)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * interopDefault(require$$0$27)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});
});

var _stringHtml = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2)
  , fails   = interopDefault(require$$1$1)
  , defined = interopDefault(require$$4$3)
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};
});

var _stringHtml$1 = interopDefault(_stringHtml);


var require$$0$28 = Object.freeze({
	"default": _stringHtml$1
});

var es6_string_anchor = createCommonjsModule(function (module) {
'use strict';
// B.2.3.2 String.prototype.anchor(name)
interopDefault(require$$0$28)('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});
});

var es6_string_big = createCommonjsModule(function (module) {
'use strict';
// B.2.3.3 String.prototype.big()
interopDefault(require$$0$28)('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});
});

var es6_string_blink = createCommonjsModule(function (module) {
'use strict';
// B.2.3.4 String.prototype.blink()
interopDefault(require$$0$28)('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});
});

var es6_string_bold = createCommonjsModule(function (module) {
'use strict';
// B.2.3.5 String.prototype.bold()
interopDefault(require$$0$28)('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});
});

var es6_string_fixed = createCommonjsModule(function (module) {
'use strict';
// B.2.3.6 String.prototype.fixed()
interopDefault(require$$0$28)('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});
});

var es6_string_fontcolor = createCommonjsModule(function (module) {
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
interopDefault(require$$0$28)('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});
});

var es6_string_fontsize = createCommonjsModule(function (module) {
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
interopDefault(require$$0$28)('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});
});

var es6_string_italics = createCommonjsModule(function (module) {
'use strict';
// B.2.3.9 String.prototype.italics()
interopDefault(require$$0$28)('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});
});

var es6_string_link = createCommonjsModule(function (module) {
'use strict';
// B.2.3.10 String.prototype.link(url)
interopDefault(require$$0$28)('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});
});

var es6_string_small = createCommonjsModule(function (module) {
'use strict';
// B.2.3.11 String.prototype.small()
interopDefault(require$$0$28)('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});
});

var es6_string_strike = createCommonjsModule(function (module) {
'use strict';
// B.2.3.12 String.prototype.strike()
interopDefault(require$$0$28)('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});
});

var es6_string_sub = createCommonjsModule(function (module) {
'use strict';
// B.2.3.13 String.prototype.sub()
interopDefault(require$$0$28)('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});
});

var es6_string_sup = createCommonjsModule(function (module) {
'use strict';
// B.2.3.14 String.prototype.sup()
interopDefault(require$$0$28)('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});
});

var es6_date_now = createCommonjsModule(function (module) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = interopDefault(require$$1$2);

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});
});

var es6_date_toJson = createCommonjsModule(function (module) {
'use strict';
var $export     = interopDefault(require$$1$2)
  , toObject    = interopDefault(require$$5$1)
  , toPrimitive = interopDefault(require$$4$1);

$export($export.P + $export.F * interopDefault(require$$1$1)(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});
});

var es6_date_toIsoString = createCommonjsModule(function (module) {
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = interopDefault(require$$1$2)
  , fails   = interopDefault(require$$1$1)
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
});

var es6_date_toString = createCommonjsModule(function (module) {
var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  interopDefault(require$$4$2)(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}
});

var _dateToPrimitive = createCommonjsModule(function (module) {
'use strict';
var anObject    = interopDefault(require$$5)
  , toPrimitive = interopDefault(require$$4$1)
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};
});

var _dateToPrimitive$1 = interopDefault(_dateToPrimitive);


var require$$0$29 = Object.freeze({
	"default": _dateToPrimitive$1
});

var es6_date_toPrimitive = createCommonjsModule(function (module) {
var TO_PRIMITIVE = interopDefault(require$$0$4)('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))interopDefault(require$$2)(proto, TO_PRIMITIVE, interopDefault(require$$0$29));
});

var es6_array_isArray = createCommonjsModule(function (module) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Array', {isArray: interopDefault(require$$1$10)});
});

var _iterCall = createCommonjsModule(function (module) {
// call something on iterator step with safe closing on error
var anObject = interopDefault(require$$5);
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


var require$$4$5 = Object.freeze({
	"default": _iterCall$1
});

var _isArrayIter = createCommonjsModule(function (module) {
// check on default Array iterator
var Iterators  = interopDefault(require$$1$15)
  , ITERATOR   = interopDefault(require$$0$4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
});

var _isArrayIter$1 = interopDefault(_isArrayIter);


var require$$17 = Object.freeze({
	"default": _isArrayIter$1
});

var _createProperty = createCommonjsModule(function (module) {
'use strict';
var $defineProperty = interopDefault(require$$2$1)
  , createDesc      = interopDefault(require$$2$3);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
});

var _createProperty$1 = interopDefault(_createProperty);


var require$$0$30 = Object.freeze({
	"default": _createProperty$1
});

var core_getIteratorMethod = createCommonjsModule(function (module) {
var classof   = interopDefault(require$$1$11)
  , ITERATOR  = interopDefault(require$$0$4)('iterator')
  , Iterators = interopDefault(require$$1$15);
module.exports = interopDefault(require$$0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
});

var core_getIteratorMethod$1 = interopDefault(core_getIteratorMethod);


var require$$13 = Object.freeze({
	"default": core_getIteratorMethod$1
});

var _iterDetect = createCommonjsModule(function (module) {
var ITERATOR     = interopDefault(require$$0$4)('iterator')
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


var require$$5$2 = Object.freeze({
	"default": _iterDetect$1
});

var es6_array_from = createCommonjsModule(function (module) {
'use strict';
var ctx            = interopDefault(require$$31)
  , $export        = interopDefault(require$$1$2)
  , toObject       = interopDefault(require$$5$1)
  , call           = interopDefault(require$$4$5)
  , isArrayIter    = interopDefault(require$$17)
  , toLength       = interopDefault(require$$3$1)
  , createProperty = interopDefault(require$$0$30)
  , getIterFn      = interopDefault(require$$13);

$export($export.S + $export.F * !interopDefault(require$$5$2)(function(iter){ Array.from(iter); }), 'Array', {
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

var es6_array_of = createCommonjsModule(function (module) {
'use strict';
var $export        = interopDefault(require$$1$2)
  , createProperty = interopDefault(require$$0$30);

// WebKit Array.of isn't generic
$export($export.S + $export.F * interopDefault(require$$1$1)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});
});

var _strictMethod = createCommonjsModule(function (module) {
var fails = interopDefault(require$$1$1);

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};
});

var _strictMethod$1 = interopDefault(_strictMethod);


var require$$0$31 = Object.freeze({
	"default": _strictMethod$1
});

var es6_array_join = createCommonjsModule(function (module) {
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export   = interopDefault(require$$1$2)
  , toIObject = interopDefault(require$$1$7)
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (interopDefault(require$$1$8) != Object || !interopDefault(require$$0$31)(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});
});

var es6_array_slice = createCommonjsModule(function (module) {
'use strict';
var $export    = interopDefault(require$$1$2)
  , html       = interopDefault(require$$3$2)
  , cof        = interopDefault(require$$0$6)
  , toIndex    = interopDefault(require$$24)
  , toLength   = interopDefault(require$$3$1)
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * interopDefault(require$$1$1)(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
});

var es6_array_sort = createCommonjsModule(function (module) {
'use strict';
var $export   = interopDefault(require$$1$2)
  , aFunction = interopDefault(require$$0$2)
  , toObject  = interopDefault(require$$5$1)
  , fails     = interopDefault(require$$1$1)
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !interopDefault(require$$0$31)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});
});

var _arraySpeciesConstructor = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$1)
  , isArray  = interopDefault(require$$1$10)
  , SPECIES  = interopDefault(require$$0$4)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
});

var _arraySpeciesConstructor$1 = interopDefault(_arraySpeciesConstructor);


var require$$0$33 = Object.freeze({
	"default": _arraySpeciesConstructor$1
});

var _arraySpeciesCreate = createCommonjsModule(function (module) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = interopDefault(require$$0$33);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
});

var _arraySpeciesCreate$1 = interopDefault(_arraySpeciesCreate);


var require$$0$32 = Object.freeze({
	"default": _arraySpeciesCreate$1
});

var _arrayMethods = createCommonjsModule(function (module) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = interopDefault(require$$31)
  , IObject  = interopDefault(require$$1$8)
  , toObject = interopDefault(require$$5$1)
  , toLength = interopDefault(require$$3$1)
  , asc      = interopDefault(require$$0$32);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
});

var _arrayMethods$1 = interopDefault(_arrayMethods);


var require$$10 = Object.freeze({
	"default": _arrayMethods$1
});

var es6_array_forEach = createCommonjsModule(function (module) {
'use strict';
var $export  = interopDefault(require$$1$2)
  , $forEach = interopDefault(require$$10)(0)
  , STRICT   = interopDefault(require$$0$31)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});
});

var es6_array_map = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $map    = interopDefault(require$$10)(1);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});
});

var es6_array_filter = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $filter = interopDefault(require$$10)(2);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});
});

var es6_array_some = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $some   = interopDefault(require$$10)(3);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});
});

var es6_array_every = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $every  = interopDefault(require$$10)(4);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});
});

var _arrayReduce = createCommonjsModule(function (module) {
var aFunction = interopDefault(require$$0$2)
  , toObject  = interopDefault(require$$5$1)
  , IObject   = interopDefault(require$$1$8)
  , toLength  = interopDefault(require$$3$1);

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};
});

var _arrayReduce$1 = interopDefault(_arrayReduce);


var require$$1$17 = Object.freeze({
	"default": _arrayReduce$1
});

var es6_array_reduce = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $reduce = interopDefault(require$$1$17);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});
});

var es6_array_reduceRight = createCommonjsModule(function (module) {
'use strict';
var $export = interopDefault(require$$1$2)
  , $reduce = interopDefault(require$$1$17);

$export($export.P + $export.F * !interopDefault(require$$0$31)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
});

var es6_array_indexOf = createCommonjsModule(function (module) {
'use strict';
var $export       = interopDefault(require$$1$2)
  , $indexOf      = interopDefault(require$$1$9)(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !interopDefault(require$$0$31)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});
});

var es6_array_lastIndexOf = createCommonjsModule(function (module) {
'use strict';
var $export       = interopDefault(require$$1$2)
  , toIObject     = interopDefault(require$$1$7)
  , toInteger     = interopDefault(require$$26)
  , toLength      = interopDefault(require$$3$1)
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !interopDefault(require$$0$31)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});
});

var _arrayCopyWithin = createCommonjsModule(function (module) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = interopDefault(require$$5$1)
  , toIndex  = interopDefault(require$$24)
  , toLength = interopDefault(require$$3$1);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};
});

var _arrayCopyWithin$1 = interopDefault(_arrayCopyWithin);


var require$$2$9 = Object.freeze({
	"default": _arrayCopyWithin$1
});

var _addToUnscopables = createCommonjsModule(function (module) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = interopDefault(require$$0$4)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)interopDefault(require$$2)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
});

var _addToUnscopables$1 = interopDefault(_addToUnscopables);


var require$$0$34 = Object.freeze({
	"default": _addToUnscopables$1
});

var es6_array_copyWithin = createCommonjsModule(function (module) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = interopDefault(require$$1$2);

$export($export.P, 'Array', {copyWithin: interopDefault(require$$2$9)});

interopDefault(require$$0$34)('copyWithin');
});

var _arrayFill = createCommonjsModule(function (module) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = interopDefault(require$$5$1)
  , toIndex  = interopDefault(require$$24)
  , toLength = interopDefault(require$$3$1);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};
});

var _arrayFill$1 = interopDefault(_arrayFill);


var require$$3$5 = Object.freeze({
	"default": _arrayFill$1
});

var es6_array_fill = createCommonjsModule(function (module) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = interopDefault(require$$1$2);

$export($export.P, 'Array', {fill: interopDefault(require$$3$5)});

interopDefault(require$$0$34)('fill');
});

var es6_array_find = createCommonjsModule(function (module) {
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = interopDefault(require$$1$2)
  , $find   = interopDefault(require$$10)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
interopDefault(require$$0$34)(KEY);
});

var es6_array_findIndex = createCommonjsModule(function (module) {
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = interopDefault(require$$1$2)
  , $find   = interopDefault(require$$10)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
interopDefault(require$$0$34)(KEY);
});

var _setSpecies = createCommonjsModule(function (module) {
'use strict';
var global      = interopDefault(require$$3)
  , dP          = interopDefault(require$$2$1)
  , DESCRIPTORS = interopDefault(require$$1)
  , SPECIES     = interopDefault(require$$0$4)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
});

var _setSpecies$1 = interopDefault(_setSpecies);


var require$$0$35 = Object.freeze({
	"default": _setSpecies$1
});

var es6_array_species = createCommonjsModule(function (module) {
interopDefault(require$$0$35)('Array');
});

var _iterStep = createCommonjsModule(function (module) {
module.exports = function(done, value){
  return {value: value, done: !!done};
};
});

var _iterStep$1 = interopDefault(_iterStep);


var require$$3$6 = Object.freeze({
	"default": _iterStep$1
});

var es6_array_iterator = createCommonjsModule(function (module) {
'use strict';
var addToUnscopables = interopDefault(require$$0$34)
  , step             = interopDefault(require$$3$6)
  , Iterators        = interopDefault(require$$1$15)
  , toIObject        = interopDefault(require$$1$7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = interopDefault(require$$4$4)(Array, 'Array', function(iterated, kind){
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

var es6_array_iterator$1 = interopDefault(es6_array_iterator);


var require$$5$3 = Object.freeze({
	"default": es6_array_iterator$1
});

var _flags = createCommonjsModule(function (module) {
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = interopDefault(require$$5);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};
});

var _flags$1 = interopDefault(_flags);


var require$$1$18 = Object.freeze({
	"default": _flags$1
});

var es6_regexp_constructor = createCommonjsModule(function (module) {
var global            = interopDefault(require$$3)
  , inheritIfRequired = interopDefault(require$$0$19)
  , dP                = interopDefault(require$$2$1).f
  , gOPN              = interopDefault(require$$3$3).f
  , isRegExp          = interopDefault(require$$2$8)
  , $flags            = interopDefault(require$$1$18)
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(interopDefault(require$$1) && (!CORRECT_NEW || interopDefault(require$$1$1)(function(){
  re2[interopDefault(require$$0$4)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f$$1){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f$$1 === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f$$1)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f$$1)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  interopDefault(require$$4$2)(global, 'RegExp', $RegExp);
}

interopDefault(require$$0$35)('RegExp');
});

var es6_regexp_flags = createCommonjsModule(function (module) {
// 21.2.5.3 get RegExp.prototype.flags()
if(interopDefault(require$$1) && /./g.flags != 'g')interopDefault(require$$2$1).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: interopDefault(require$$1$18)
});
});

var es6_regexp_toString = createCommonjsModule(function (module) {
'use strict';

var anObject    = interopDefault(require$$5)
  , $flags      = interopDefault(require$$1$18)
  , DESCRIPTORS = interopDefault(require$$1)
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  interopDefault(require$$4$2)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(interopDefault(require$$1$1)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}
});

var _fixReWks = createCommonjsModule(function (module) {
'use strict';
var hide     = interopDefault(require$$2)
  , redefine = interopDefault(require$$4$2)
  , fails    = interopDefault(require$$1$1)
  , defined  = interopDefault(require$$4$3)
  , wks      = interopDefault(require$$0$4);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};
});

var _fixReWks$1 = interopDefault(_fixReWks);


var require$$1$19 = Object.freeze({
	"default": _fixReWks$1
});

var es6_regexp_match = createCommonjsModule(function (module) {
// @@match logic
interopDefault(require$$1$19)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});
});

var es6_regexp_replace = createCommonjsModule(function (module) {
// @@replace logic
interopDefault(require$$1$19)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});
});

var es6_regexp_search = createCommonjsModule(function (module) {
// @@search logic
interopDefault(require$$1$19)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});
});

var es6_regexp_split = createCommonjsModule(function (module) {
// @@split logic
interopDefault(require$$1$19)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = interopDefault(require$$2$8)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});
});

var _anInstance = createCommonjsModule(function (module) {
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
});

var _anInstance$1 = interopDefault(_anInstance);


var require$$4$6 = Object.freeze({
	"default": _anInstance$1
});

var _forOf = createCommonjsModule(function (module) {
var ctx         = interopDefault(require$$31)
  , call        = interopDefault(require$$4$5)
  , isArrayIter = interopDefault(require$$17)
  , anObject    = interopDefault(require$$5)
  , toLength    = interopDefault(require$$3$1)
  , getIterFn   = interopDefault(require$$13)
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


var require$$1$20 = Object.freeze({
	"default": _forOf$1
});

var _speciesConstructor = createCommonjsModule(function (module) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = interopDefault(require$$5)
  , aFunction = interopDefault(require$$0$2)
  , SPECIES   = interopDefault(require$$0$4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
});

var _speciesConstructor$1 = interopDefault(_speciesConstructor);


var require$$8 = Object.freeze({
	"default": _speciesConstructor$1
});

var _task = createCommonjsModule(function (module) {
var ctx                = interopDefault(require$$31)
  , invoke             = interopDefault(require$$1$13)
  , html               = interopDefault(require$$3$2)
  , cel                = interopDefault(require$$2$2)
  , global             = interopDefault(require$$3)
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
  if(interopDefault(require$$0$6)(process) == 'process'){
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
var set$2 = _task.set;
var clear$1 = _task.clear;

var require$$0$36 = Object.freeze({
	"default": _task$1,
	set: set$2,
	clear: clear$1
});

var _microtask = createCommonjsModule(function (module) {
var global    = interopDefault(require$$3)
  , macrotask = interopDefault(require$$0$36).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = interopDefault(require$$0$6)(process) == 'process';

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


var require$$8$1 = Object.freeze({
	"default": _microtask$1
});

var _redefineAll = createCommonjsModule(function (module) {
var redefine = interopDefault(require$$4$2);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};
});

var _redefineAll$1 = interopDefault(_redefineAll);


var require$$3$7 = Object.freeze({
	"default": _redefineAll$1
});

var es6_promise = createCommonjsModule(function (module) {
'use strict';
var LIBRARY            = interopDefault(require$$2$4)
  , global             = interopDefault(require$$3)
  , ctx                = interopDefault(require$$31)
  , classof            = interopDefault(require$$1$11)
  , $export            = interopDefault(require$$1$2)
  , isObject           = interopDefault(require$$0$1)
  , aFunction          = interopDefault(require$$0$2)
  , anInstance         = interopDefault(require$$4$6)
  , forOf              = interopDefault(require$$1$20)
  , speciesConstructor = interopDefault(require$$8)
  , task               = interopDefault(require$$0$36).set
  , microtask          = interopDefault(require$$8$1)()
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
      , FakePromise = (promise.constructor = {})[interopDefault(require$$0$4)('species')] = function(exec){ exec(empty, empty); };
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
  Internal.prototype = interopDefault(require$$3$7)($Promise.prototype, {
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
interopDefault(require$$0$3)($Promise, PROMISE);
interopDefault(require$$0$35)(PROMISE);
Wrapper = interopDefault(require$$0)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && interopDefault(require$$5$2)(function(iter){
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

var _collectionStrong = createCommonjsModule(function (module) {
'use strict';
var dP          = interopDefault(require$$2$1).f
  , create      = interopDefault(require$$6$1)
  , redefineAll = interopDefault(require$$3$7)
  , ctx         = interopDefault(require$$31)
  , anInstance  = interopDefault(require$$4$6)
  , defined     = interopDefault(require$$4$3)
  , forOf       = interopDefault(require$$1$20)
  , $iterDefine = interopDefault(require$$4$4)
  , step        = interopDefault(require$$3$6)
  , setSpecies  = interopDefault(require$$0$35)
  , DESCRIPTORS = interopDefault(require$$1)
  , fastKey$$1     = interopDefault(require$$6).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey$$1(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f$$1 = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f$$1(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey$$1(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
});

var _collectionStrong$1 = interopDefault(_collectionStrong);
var getConstructor = _collectionStrong.getConstructor;
var def = _collectionStrong.def;
var getEntry = _collectionStrong.getEntry;
var setStrong = _collectionStrong.setStrong;

var require$$1$21 = Object.freeze({
	"default": _collectionStrong$1,
	getConstructor: getConstructor,
	def: def,
	getEntry: getEntry,
	setStrong: setStrong
});

var _collection = createCommonjsModule(function (module) {
'use strict';
var global            = interopDefault(require$$3)
  , $export           = interopDefault(require$$1$2)
  , redefine          = interopDefault(require$$4$2)
  , redefineAll       = interopDefault(require$$3$7)
  , meta              = interopDefault(require$$6)
  , forOf             = interopDefault(require$$1$20)
  , anInstance        = interopDefault(require$$4$6)
  , isObject          = interopDefault(require$$0$1)
  , fails             = interopDefault(require$$1$1)
  , $iterDetect       = interopDefault(require$$5$2)
  , setToStringTag    = interopDefault(require$$0$3)
  , inheritIfRequired = interopDefault(require$$0$19);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY$$1){
    var fn = proto[KEY$$1];
    redefine(proto, KEY$$1,
      KEY$$1 == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY$$1 == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY$$1 == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY$$1 == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
});

var _collection$1 = interopDefault(_collection);


var require$$0$37 = Object.freeze({
	"default": _collection$1
});

var es6_map = createCommonjsModule(function (module) {
'use strict';
var strong = interopDefault(require$$1$21);

// 23.1 Map Objects
module.exports = interopDefault(require$$0$37)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
});

var es6_map$1 = interopDefault(es6_map);


var require$$3$8 = Object.freeze({
	"default": es6_map$1
});

var es6_set = createCommonjsModule(function (module) {
'use strict';
var strong = interopDefault(require$$1$21);

// 23.2 Set Objects
module.exports = interopDefault(require$$0$37)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
});

var es6_set$1 = interopDefault(es6_set);


var require$$4$7 = Object.freeze({
	"default": es6_set$1
});

var _collectionWeak = createCommonjsModule(function (module) {
'use strict';
var redefineAll       = interopDefault(require$$3$7)
  , getWeak$$1           = interopDefault(require$$6).getWeak
  , anObject          = interopDefault(require$$5)
  , isObject          = interopDefault(require$$0$1)
  , anInstance        = interopDefault(require$$4$6)
  , forOf             = interopDefault(require$$1$20)
  , createArrayMethod = interopDefault(require$$10)
  , $has              = interopDefault(require$$4)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak$$1(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak$$1(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak$$1(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
});

var _collectionWeak$1 = interopDefault(_collectionWeak);
var getConstructor$1 = _collectionWeak.getConstructor;
var def$1 = _collectionWeak.def;
var ufstore = _collectionWeak.ufstore;

var require$$1$22 = Object.freeze({
	"default": _collectionWeak$1,
	getConstructor: getConstructor$1,
	def: def$1,
	ufstore: ufstore
});

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each         = interopDefault(require$$10)(0)
  , redefine     = interopDefault(require$$4$2)
  , meta         = interopDefault(require$$6)
  , assign       = interopDefault(require$$3$4)
  , weak         = interopDefault(require$$1$22)
  , isObject     = interopDefault(require$$0$1)
  , getWeak$$1      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak$$1(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = interopDefault(require$$0$37)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

var es6_weakMap$1 = interopDefault(es6_weakMap);


var require$$0$38 = Object.freeze({
	"default": es6_weakMap$1
});

var es6_weakSet = createCommonjsModule(function (module) {
'use strict';
var weak = interopDefault(require$$1$22);

// 23.4 WeakSet Objects
interopDefault(require$$0$37)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
});

var _typed = createCommonjsModule(function (module) {
var global = interopDefault(require$$3)
  , hide   = interopDefault(require$$2)
  , uid    = interopDefault(require$$12)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};
});

var _typed$1 = interopDefault(_typed);
var ABV = _typed.ABV;
var CONSTR = _typed.CONSTR;
var TYPED = _typed.TYPED;
var VIEW = _typed.VIEW;

var require$$33 = Object.freeze({
	"default": _typed$1,
	ABV: ABV,
	CONSTR: CONSTR,
	TYPED: TYPED,
	VIEW: VIEW
});

var _typedBuffer = createCommonjsModule(function (module, exports) {
'use strict';
var global         = interopDefault(require$$3)
  , DESCRIPTORS    = interopDefault(require$$1)
  , LIBRARY        = interopDefault(require$$2$4)
  , $typed         = interopDefault(require$$33)
  , hide           = interopDefault(require$$2)
  , redefineAll    = interopDefault(require$$3$7)
  , fails          = interopDefault(require$$1$1)
  , anInstance     = interopDefault(require$$4$6)
  , toInteger      = interopDefault(require$$26)
  , toLength       = interopDefault(require$$3$1)
  , gOPN           = interopDefault(require$$3$3).f
  , dP             = interopDefault(require$$2$1).f
  , arrayFill      = interopDefault(require$$3$5)
  , setToStringTag = interopDefault(require$$0$3)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value);
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
});

var _typedBuffer$1 = interopDefault(_typedBuffer);


var require$$32 = Object.freeze({
	"default": _typedBuffer$1
});

var es6_typed_arrayBuffer = createCommonjsModule(function (module) {
'use strict';
var $export      = interopDefault(require$$1$2)
  , $typed       = interopDefault(require$$33)
  , buffer       = interopDefault(require$$32)
  , anObject     = interopDefault(require$$5)
  , toIndex      = interopDefault(require$$24)
  , toLength     = interopDefault(require$$3$1)
  , isObject     = interopDefault(require$$0$1)
  , ArrayBuffer  = interopDefault(require$$3).ArrayBuffer
  , speciesConstructor = interopDefault(require$$8)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW$$1         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW$$1 in it;
  }
});

$export($export.P + $export.U + $export.F * interopDefault(require$$1$1)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

interopDefault(require$$0$35)(ARRAY_BUFFER);
});

var es6_typed_dataView = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2);
$export($export.G + $export.W + $export.F * !interopDefault(require$$33).ABV, {
  DataView: interopDefault(require$$32).DataView
});
});

var _typedArray = createCommonjsModule(function (module) {
'use strict';
if(interopDefault(require$$1)){
  var LIBRARY             = interopDefault(require$$2$4)
    , global              = interopDefault(require$$3)
    , fails               = interopDefault(require$$1$1)
    , $export             = interopDefault(require$$1$2)
    , $typed              = interopDefault(require$$33)
    , $buffer             = interopDefault(require$$32)
    , ctx                 = interopDefault(require$$31)
    , anInstance          = interopDefault(require$$4$6)
    , propertyDesc        = interopDefault(require$$2$3)
    , hide                = interopDefault(require$$2)
    , redefineAll         = interopDefault(require$$3$7)
    , toInteger           = interopDefault(require$$26)
    , toLength            = interopDefault(require$$3$1)
    , toIndex             = interopDefault(require$$24)
    , toPrimitive         = interopDefault(require$$4$1)
    , has                 = interopDefault(require$$4)
    , same                = interopDefault(require$$21)
    , classof             = interopDefault(require$$1$11)
    , isObject            = interopDefault(require$$0$1)
    , toObject            = interopDefault(require$$5$1)
    , isArrayIter         = interopDefault(require$$17)
    , create              = interopDefault(require$$6$1)
    , getPrototypeOf      = interopDefault(require$$0$13)
    , gOPN                = interopDefault(require$$3$3).f
    , getIterFn           = interopDefault(require$$13)
    , uid                 = interopDefault(require$$12)
    , wks                 = interopDefault(require$$0$4)
    , createArrayMethod   = interopDefault(require$$10)
    , createArrayIncludes = interopDefault(require$$1$9)
    , speciesConstructor  = interopDefault(require$$8)
    , ArrayIterators      = interopDefault(require$$5$3)
    , Iterators           = interopDefault(require$$1$15)
    , $iterDetect         = interopDefault(require$$5$2)
    , setSpecies          = interopDefault(require$$0$35)
    , arrayFill           = interopDefault(require$$3$5)
    , arrayCopyWithin     = interopDefault(require$$2$9)
    , $DP                 = interopDefault(require$$2$1)
    , $GOPD               = interopDefault(require$$2$7)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW$$1                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true);
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW$$1, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
});

var _typedArray$1 = interopDefault(_typedArray);


var require$$0$39 = Object.freeze({
	"default": _typedArray$1
});

var es6_typed_int8Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_uint8Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_uint8ClampedArray = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);
});

var es6_typed_int16Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_uint16Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_int32Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_uint32Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_float32Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_typed_float64Array = createCommonjsModule(function (module) {
interopDefault(require$$0$39)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
});

var es6_reflect_apply = createCommonjsModule(function (module) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = interopDefault(require$$1$2)
  , aFunction = interopDefault(require$$0$2)
  , anObject  = interopDefault(require$$5)
  , rApply    = (interopDefault(require$$3).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !interopDefault(require$$1$1)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
});

var es6_reflect_construct = createCommonjsModule(function (module) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = interopDefault(require$$1$2)
  , create     = interopDefault(require$$6$1)
  , aFunction  = interopDefault(require$$0$2)
  , anObject   = interopDefault(require$$5)
  , isObject   = interopDefault(require$$0$1)
  , fails      = interopDefault(require$$1$1)
  , bind       = interopDefault(require$$1$12)
  , rConstruct = (interopDefault(require$$3).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
});

var es6_reflect_defineProperty = createCommonjsModule(function (module) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = interopDefault(require$$2$1)
  , $export     = interopDefault(require$$1$2)
  , anObject    = interopDefault(require$$5)
  , toPrimitive = interopDefault(require$$4$1);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * interopDefault(require$$1$1)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});
});

var es6_reflect_deleteProperty = createCommonjsModule(function (module) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = interopDefault(require$$1$2)
  , gOPD     = interopDefault(require$$2$7).f
  , anObject = interopDefault(require$$5);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
});

var es6_reflect_enumerate = createCommonjsModule(function (module) {
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export  = interopDefault(require$$1$2)
  , anObject = interopDefault(require$$5);
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
interopDefault(require$$0$26)(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});
});

var es6_reflect_get = createCommonjsModule(function (module) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = interopDefault(require$$2$7)
  , getPrototypeOf = interopDefault(require$$0$13)
  , has            = interopDefault(require$$4)
  , $export        = interopDefault(require$$1$2)
  , isObject       = interopDefault(require$$0$1)
  , anObject       = interopDefault(require$$5);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});
});

var es6_reflect_getOwnPropertyDescriptor = createCommonjsModule(function (module) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = interopDefault(require$$2$7)
  , $export  = interopDefault(require$$1$2)
  , anObject = interopDefault(require$$5);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});
});

var es6_reflect_getPrototypeOf = createCommonjsModule(function (module) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = interopDefault(require$$1$2)
  , getProto = interopDefault(require$$0$13)
  , anObject = interopDefault(require$$5);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});
});

var es6_reflect_has = createCommonjsModule(function (module) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});
});

var es6_reflect_isExtensible = createCommonjsModule(function (module) {
// 26.1.10 Reflect.isExtensible(target)
var $export       = interopDefault(require$$1$2)
  , anObject      = interopDefault(require$$5)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
});

var _ownKeys = createCommonjsModule(function (module) {
// all object keys, includes non-enumerable and symbols
var gOPN     = interopDefault(require$$3$3)
  , gOPS     = interopDefault(require$$2$6)
  , anObject = interopDefault(require$$5)
  , Reflect  = interopDefault(require$$3).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
});

var _ownKeys$1 = interopDefault(_ownKeys);


var require$$3$9 = Object.freeze({
	"default": _ownKeys$1
});

var es6_reflect_ownKeys = createCommonjsModule(function (module) {
// 26.1.11 Reflect.ownKeys(target)
var $export = interopDefault(require$$1$2);

$export($export.S, 'Reflect', {ownKeys: interopDefault(require$$3$9)});
});

var es6_reflect_preventExtensions = createCommonjsModule(function (module) {
// 26.1.12 Reflect.preventExtensions(target)
var $export            = interopDefault(require$$1$2)
  , anObject           = interopDefault(require$$5)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});
});

var es6_reflect_set = createCommonjsModule(function (module) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = interopDefault(require$$2$1)
  , gOPD           = interopDefault(require$$2$7)
  , getPrototypeOf = interopDefault(require$$0$13)
  , has            = interopDefault(require$$4)
  , $export        = interopDefault(require$$1$2)
  , createDesc     = interopDefault(require$$2$3)
  , anObject       = interopDefault(require$$5)
  , isObject       = interopDefault(require$$0$1);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});
});

var es6_reflect_setPrototypeOf = createCommonjsModule(function (module) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = interopDefault(require$$1$2)
  , setProto = interopDefault(require$$0$14);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});
});

var es7_array_includes = createCommonjsModule(function (module) {
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export   = interopDefault(require$$1$2)
  , $includes = interopDefault(require$$1$9)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

interopDefault(require$$0$34)('includes');
});

var es7_string_at = createCommonjsModule(function (module) {
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = interopDefault(require$$1$2)
  , $at     = interopDefault(require$$0$25)(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
});

var _stringPad = createCommonjsModule(function (module) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = interopDefault(require$$3$1)
  , repeat   = interopDefault(require$$1$14)
  , defined  = interopDefault(require$$4$3);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};
});

var _stringPad$1 = interopDefault(_stringPad);


var require$$0$40 = Object.freeze({
	"default": _stringPad$1
});

var es7_string_padStart = createCommonjsModule(function (module) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = interopDefault(require$$1$2)
  , $pad    = interopDefault(require$$0$40);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});
});

var es7_string_padEnd = createCommonjsModule(function (module) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = interopDefault(require$$1$2)
  , $pad    = interopDefault(require$$0$40);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});
});

var es7_string_trimLeft = createCommonjsModule(function (module) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
interopDefault(require$$0$16)('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');
});

var es7_string_trimRight = createCommonjsModule(function (module) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
interopDefault(require$$0$16)('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');
});

var es7_string_matchAll = createCommonjsModule(function (module) {
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export     = interopDefault(require$$1$2)
  , defined     = interopDefault(require$$4$3)
  , toLength    = interopDefault(require$$3$1)
  , isRegExp    = interopDefault(require$$2$8)
  , getFlags    = interopDefault(require$$1$18)
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

interopDefault(require$$0$26)($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
});

var es7_symbol_asyncIterator = createCommonjsModule(function (module) {
interopDefault(require$$0$5)('asyncIterator');
});

var es7_symbol_observable = createCommonjsModule(function (module) {
interopDefault(require$$0$5)('observable');
});

var es7_object_getOwnPropertyDescriptors = createCommonjsModule(function (module) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = interopDefault(require$$1$2)
  , ownKeys        = interopDefault(require$$3$9)
  , toIObject      = interopDefault(require$$1$7)
  , gOPD           = interopDefault(require$$2$7)
  , createProperty = interopDefault(require$$0$30);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});
});

var _objectToArray = createCommonjsModule(function (module) {
var getKeys   = interopDefault(require$$2$5)
  , toIObject = interopDefault(require$$1$7)
  , isEnum    = interopDefault(require$$0$9).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
});

var _objectToArray$1 = interopDefault(_objectToArray);


var require$$0$41 = Object.freeze({
	"default": _objectToArray$1
});

var es7_object_values = createCommonjsModule(function (module) {
// https://github.com/tc39/proposal-object-values-entries
var $export = interopDefault(require$$1$2)
  , $values = interopDefault(require$$0$41)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
});

var es7_object_entries = createCommonjsModule(function (module) {
// https://github.com/tc39/proposal-object-values-entries
var $export  = interopDefault(require$$1$2)
  , $entries = interopDefault(require$$0$41)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
});

var _objectForcedPam = createCommonjsModule(function (module) {
// Forced replacement prototype accessors methods
module.exports = interopDefault(require$$2$4)|| !interopDefault(require$$1$1)(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete interopDefault(require$$3)[K];
});
});

var _objectForcedPam$1 = interopDefault(_objectForcedPam);


var require$$0$42 = Object.freeze({
	"default": _objectForcedPam$1
});

var es7_object_defineGetter = createCommonjsModule(function (module) {
'use strict';
var $export         = interopDefault(require$$1$2)
  , toObject        = interopDefault(require$$5$1)
  , aFunction       = interopDefault(require$$0$2)
  , $defineProperty = interopDefault(require$$2$1);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
interopDefault(require$$1) && $export($export.P + interopDefault(require$$0$42), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});
});

var es7_object_defineSetter = createCommonjsModule(function (module) {
'use strict';
var $export         = interopDefault(require$$1$2)
  , toObject        = interopDefault(require$$5$1)
  , aFunction       = interopDefault(require$$0$2)
  , $defineProperty = interopDefault(require$$2$1);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
interopDefault(require$$1) && $export($export.P + interopDefault(require$$0$42), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});
});

var es7_object_lookupGetter = createCommonjsModule(function (module) {
'use strict';
var $export                  = interopDefault(require$$1$2)
  , toObject                 = interopDefault(require$$5$1)
  , toPrimitive              = interopDefault(require$$4$1)
  , getPrototypeOf           = interopDefault(require$$0$13)
  , getOwnPropertyDescriptor = interopDefault(require$$2$7).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
interopDefault(require$$1) && $export($export.P + interopDefault(require$$0$42), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});
});

var es7_object_lookupSetter = createCommonjsModule(function (module) {
'use strict';
var $export                  = interopDefault(require$$1$2)
  , toObject                 = interopDefault(require$$5$1)
  , toPrimitive              = interopDefault(require$$4$1)
  , getPrototypeOf           = interopDefault(require$$0$13)
  , getOwnPropertyDescriptor = interopDefault(require$$2$7).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
interopDefault(require$$1) && $export($export.P + interopDefault(require$$0$42), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});
});

var _arrayFromIterable = createCommonjsModule(function (module) {
var forOf = interopDefault(require$$1$20);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};
});

var _arrayFromIterable$1 = interopDefault(_arrayFromIterable);


var require$$3$10 = Object.freeze({
	"default": _arrayFromIterable$1
});

var _collectionToJson = createCommonjsModule(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = interopDefault(require$$1$11)
  , from    = interopDefault(require$$3$10);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
});

var _collectionToJson$1 = interopDefault(_collectionToJson);


var require$$0$43 = Object.freeze({
	"default": _collectionToJson$1
});

var es7_map_toJson = createCommonjsModule(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = interopDefault(require$$1$2);

$export($export.P + $export.R, 'Map', {toJSON: interopDefault(require$$0$43)('Map')});
});

var es7_set_toJson = createCommonjsModule(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = interopDefault(require$$1$2);

$export($export.P + $export.R, 'Set', {toJSON: interopDefault(require$$0$43)('Set')});
});

var es7_system_global = createCommonjsModule(function (module) {
// https://github.com/ljharb/proposal-global
var $export = interopDefault(require$$1$2);

$export($export.S, 'System', {global: interopDefault(require$$3)});
});

var es7_error_isError = createCommonjsModule(function (module) {
// https://github.com/ljharb/proposal-is-error
var $export = interopDefault(require$$1$2)
  , cof     = interopDefault(require$$0$6);

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});
});

var es7_math_iaddh = createCommonjsModule(function (module) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
});

var es7_math_isubh = createCommonjsModule(function (module) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
});

var es7_math_imulh = createCommonjsModule(function (module) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
});

var es7_math_umulh = createCommonjsModule(function (module) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = interopDefault(require$$1$2);

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
});

var _metadata = createCommonjsModule(function (module) {
var Map     = interopDefault(require$$3$8)
  , $export = interopDefault(require$$1$2)
  , shared  = interopDefault(require$$1$4)('metadata')
  , store   = shared.store || (shared.store = new (interopDefault(require$$0$38)));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};
});

var _metadata$1 = interopDefault(_metadata);
var store = _metadata.store;
var map$1 = _metadata.map;
var has$1 = _metadata.has;
var get$1 = _metadata.get;
var set$3 = _metadata.set;
var keys$1 = _metadata.keys;
var key = _metadata.key;
var exp = _metadata.exp;

var require$$2$10 = Object.freeze({
	"default": _metadata$1,
	store: store,
	map: map$1,
	has: has$1,
	get: get$1,
	set: set$3,
	keys: keys$1,
	key: key,
	exp: exp
});

var es7_reflect_defineMetadata = createCommonjsModule(function (module) {
var metadata                  = interopDefault(require$$2$10)
  , anObject                  = interopDefault(require$$5)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});
});

var es7_reflect_deleteMetadata = createCommonjsModule(function (module) {
var metadata               = interopDefault(require$$2$10)
  , anObject               = interopDefault(require$$5)
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store$$1                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store$$1.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store$$1['delete'](target);
}});
});

var es7_reflect_getMetadata = createCommonjsModule(function (module) {
var metadata               = interopDefault(require$$2$10)
  , anObject               = interopDefault(require$$5)
  , getPrototypeOf         = interopDefault(require$$0$13)
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
});

var es7_reflect_getMetadataKeys = createCommonjsModule(function (module) {
var Set                     = interopDefault(require$$4$7)
  , from                    = interopDefault(require$$3$10)
  , metadata                = interopDefault(require$$2$10)
  , anObject                = interopDefault(require$$5)
  , getPrototypeOf          = interopDefault(require$$0$13)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
});

var es7_reflect_getOwnMetadata = createCommonjsModule(function (module) {
var metadata               = interopDefault(require$$2$10)
  , anObject               = interopDefault(require$$5)
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
});

var es7_reflect_getOwnMetadataKeys = createCommonjsModule(function (module) {
var metadata                = interopDefault(require$$2$10)
  , anObject                = interopDefault(require$$5)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
});

var es7_reflect_hasMetadata = createCommonjsModule(function (module) {
var metadata               = interopDefault(require$$2$10)
  , anObject               = interopDefault(require$$5)
  , getPrototypeOf         = interopDefault(require$$0$13)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
});

var es7_reflect_hasOwnMetadata = createCommonjsModule(function (module) {
var metadata               = interopDefault(require$$2$10)
  , anObject               = interopDefault(require$$5)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
});

var es7_reflect_metadata = createCommonjsModule(function (module) {
var metadata                  = interopDefault(require$$2$10)
  , anObject                  = interopDefault(require$$5)
  , aFunction                 = interopDefault(require$$0$2)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});
});

var es7_asap = createCommonjsModule(function (module) {
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = interopDefault(require$$1$2)
  , microtask = interopDefault(require$$8$1)()
  , process   = interopDefault(require$$3).process
  , isNode    = interopDefault(require$$0$6)(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});
});

var es7_observable = createCommonjsModule(function (module) {
'use strict';
// https://github.com/zenparsing/es-observable
var $export     = interopDefault(require$$1$2)
  , global      = interopDefault(require$$3)
  , core        = interopDefault(require$$0)
  , microtask   = interopDefault(require$$8$1)()
  , OBSERVABLE  = interopDefault(require$$0$4)('observable')
  , aFunction   = interopDefault(require$$0$2)
  , anObject    = interopDefault(require$$5)
  , anInstance  = interopDefault(require$$4$6)
  , redefineAll = interopDefault(require$$3$7)
  , hide        = interopDefault(require$$2)
  , forOf       = interopDefault(require$$1$20)
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

interopDefault(require$$0$35)('Observable');
});

var _path = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$3);
});

var _path$1 = interopDefault(_path);


var require$$2$11 = Object.freeze({
	"default": _path$1
});

var _partial = createCommonjsModule(function (module) {
'use strict';
var path      = interopDefault(require$$2$11)
  , invoke    = interopDefault(require$$1$13)
  , aFunction = interopDefault(require$$0$2);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
});

var _partial$1 = interopDefault(_partial);


var require$$0$44 = Object.freeze({
	"default": _partial$1
});

var web_timers = createCommonjsModule(function (module) {
// ie9- setTimeout & setInterval additional parameters fix
var global     = interopDefault(require$$3)
  , $export    = interopDefault(require$$1$2)
  , invoke     = interopDefault(require$$1$13)
  , partial    = interopDefault(require$$0$44)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
});

var web_immediate = createCommonjsModule(function (module) {
var $export = interopDefault(require$$1$2)
  , $task   = interopDefault(require$$0$36);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
});

var web_dom_iterable = createCommonjsModule(function (module) {
var $iterators    = interopDefault(require$$5$3)
  , redefine      = interopDefault(require$$4$2)
  , global        = interopDefault(require$$3)
  , hide          = interopDefault(require$$2)
  , Iterators     = interopDefault(require$$1$15)
  , wks           = interopDefault(require$$0$4)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}
});

var shim = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0);
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

var _replacer = createCommonjsModule(function (module) {
module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};
});

var _replacer$1 = interopDefault(_replacer);


var require$$0$45 = Object.freeze({
	"default": _replacer$1
});

var core_regexp_escape = createCommonjsModule(function (module) {
// https://github.com/benjamingr/RexExp.escape
var $export = interopDefault(require$$1$2)
  , $re     = interopDefault(require$$0$45)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});
});

var _escape = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0).RegExp.escape;
});

var index = createCommonjsModule(function (module) {
"use strict";







if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
});

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

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
    'mergeWith': true
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

var require$$1$24 = Object.freeze({
	"default": _mapping$1,
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


var require$$0$46 = Object.freeze({
	"default": placeholder$2
});

var _baseConvert = createCommonjsModule(function (module) {
var mapping = interopDefault(require$$1$24),
    mutateMap = mapping.mutate,
    fallbackHolder = interopDefault(require$$0$46);

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


var require$$1$23 = Object.freeze({
	"default": _baseConvert$1
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


var require$$2$13 = Object.freeze({
	"default": identity$1
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


var require$$0$48 = Object.freeze({
	"default": isObject$1
});

var isFunction = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$48);

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


var require$$1$30 = Object.freeze({
	"default": isFunction$1
});

var _freeGlobal = createCommonjsModule(function (module) {
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

module.exports = freeGlobal;
});

var _freeGlobal$1 = interopDefault(_freeGlobal);


var require$$0$51 = Object.freeze({
	"default": _freeGlobal$1
});

var _root = createCommonjsModule(function (module) {
var freeGlobal = interopDefault(require$$0$51);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;
});

var _root$1 = interopDefault(_root);


var require$$0$50 = Object.freeze({
	"default": _root$1
});

var _coreJsData = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$50);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;
});

var _coreJsData$1 = interopDefault(_coreJsData);


var require$$0$49 = Object.freeze({
	"default": _coreJsData$1
});

var _isMasked = createCommonjsModule(function (module) {
var coreJsData = interopDefault(require$$0$49);

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


var require$$2$15 = Object.freeze({
	"default": _isMasked$1
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


var require$$0$52 = Object.freeze({
	"default": _toSource$1
});

var _baseIsNative = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$1$30),
    isMasked = interopDefault(require$$2$15),
    isObject = interopDefault(require$$0$48),
    toSource = interopDefault(require$$0$52);

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


var require$$1$29 = Object.freeze({
	"default": _baseIsNative$1
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


var require$$0$53 = Object.freeze({
	"default": _getValue$1
});

var _getNative = createCommonjsModule(function (module) {
var baseIsNative = interopDefault(require$$1$29),
    getValue = interopDefault(require$$0$53);

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


var require$$1$28 = Object.freeze({
	"default": _getNative$1
});

var _WeakMap = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28),
    root = interopDefault(require$$0$50);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;
});

var _WeakMap$1 = interopDefault(_WeakMap);


var require$$2$14 = Object.freeze({
	"default": _WeakMap$1
});

var _metaMap = createCommonjsModule(function (module) {
var WeakMap = interopDefault(require$$2$14);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;
});

var _metaMap$1 = interopDefault(_metaMap);


var require$$1$27 = Object.freeze({
	"default": _metaMap$1
});

var _baseSetData = createCommonjsModule(function (module) {
var identity = interopDefault(require$$2$13),
    metaMap = interopDefault(require$$1$27);

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


var require$$1$26 = Object.freeze({
	"default": _baseSetData$1
});

var _baseCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$48);

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


var require$$2$16 = Object.freeze({
	"default": _baseCreate$1
});

var _createCtor = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$16),
    isObject = interopDefault(require$$0$48);

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


var require$$1$31 = Object.freeze({
	"default": _createCtor$1
});

var _createBind = createCommonjsModule(function (module) {
var createCtor = interopDefault(require$$1$31),
    root = interopDefault(require$$0$50);

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


var require$$8$2 = Object.freeze({
	"default": _createBind$1
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
	"default": _apply$1
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


var require$$2$17 = Object.freeze({
	"default": _composeArgs$1
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


var require$$1$32 = Object.freeze({
	"default": _composeArgsRight$1
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
	"default": _countHolders$1
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


var require$$0$55 = Object.freeze({
	"default": _baseLodash$1
});

var _LazyWrapper = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$16),
    baseLodash = interopDefault(require$$0$55);

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


var require$$2$18 = Object.freeze({
	"default": _LazyWrapper$1
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


var require$$0$56 = Object.freeze({
	"default": noop$1
});

var _getData = createCommonjsModule(function (module) {
var metaMap = interopDefault(require$$1$27),
    noop = interopDefault(require$$0$56);

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


var require$$3$11 = Object.freeze({
	"default": _getData$1
});

var _realNames = createCommonjsModule(function (module) {
/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;
});

var _realNames$1 = interopDefault(_realNames);


var require$$0$57 = Object.freeze({
	"default": _realNames$1
});

var _getFuncName = createCommonjsModule(function (module) {
var realNames = interopDefault(require$$0$57);

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


var require$$2$19 = Object.freeze({
	"default": _getFuncName$1
});

var _LodashWrapper = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$16),
    baseLodash = interopDefault(require$$0$55);

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


var require$$5$4 = Object.freeze({
	"default": _LodashWrapper$1
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


var require$$0$59 = Object.freeze({
	"default": isArray$2
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


var require$$0$60 = Object.freeze({
	"default": isObjectLike$1
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
	"default": _copyArray$1
});

var _wrapperClone = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$18),
    LodashWrapper = interopDefault(require$$5$4),
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


var require$$0$61 = Object.freeze({
	"default": _wrapperClone$1
});

var wrapperLodash = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$18),
    LodashWrapper = interopDefault(require$$5$4),
    baseLodash = interopDefault(require$$0$55),
    isArray = interopDefault(require$$0$59),
    isObjectLike = interopDefault(require$$0$60),
    wrapperClone = interopDefault(require$$0$61);

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


var require$$0$58 = Object.freeze({
	"default": wrapperLodash$1
});

var _isLaziable = createCommonjsModule(function (module) {
var LazyWrapper = interopDefault(require$$2$18),
    getData = interopDefault(require$$3$11),
    getFuncName = interopDefault(require$$2$19),
    lodash = interopDefault(require$$0$58);

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


var require$$0$54 = Object.freeze({
	"default": _isLaziable$1
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


var require$$0$62 = Object.freeze({
	"default": _shortOut$1
});

var _setData = createCommonjsModule(function (module) {
var baseSetData = interopDefault(require$$1$26),
    shortOut = interopDefault(require$$0$62);

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


var require$$1$33 = Object.freeze({
	"default": _setData$1
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


var require$$3$12 = Object.freeze({
	"default": _getWrapDetails$1
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


var require$$2$20 = Object.freeze({
	"default": _insertWrapDetails$1
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


var require$$2$21 = Object.freeze({
	"default": constant$1
});

var _defineProperty = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;
});

var _defineProperty$1 = interopDefault(_defineProperty);


var require$$0$65 = Object.freeze({
	"default": _defineProperty$1
});

var _baseSetToString = createCommonjsModule(function (module) {
var constant = interopDefault(require$$2$21),
    defineProperty = interopDefault(require$$0$65),
    identity = interopDefault(require$$2$13);

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


var require$$1$34 = Object.freeze({
	"default": _baseSetToString$1
});

var _setToString = createCommonjsModule(function (module) {
var baseSetToString = interopDefault(require$$1$34),
    shortOut = interopDefault(require$$0$62);

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


var require$$0$64 = Object.freeze({
	"default": _setToString$1
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


var require$$3$13 = Object.freeze({
	"default": _arrayEach$1
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


var require$$2$22 = Object.freeze({
	"default": _baseFindIndex$1
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


var require$$1$35 = Object.freeze({
	"default": _baseIsNaN$1
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


var require$$0$68 = Object.freeze({
	"default": _strictIndexOf$1
});

var _baseIndexOf = createCommonjsModule(function (module) {
var baseFindIndex = interopDefault(require$$2$22),
    baseIsNaN = interopDefault(require$$1$35),
    strictIndexOf = interopDefault(require$$0$68);

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


var require$$4$12 = Object.freeze({
	"default": _baseIndexOf$1
});

var _arrayIncludes$2 = createCommonjsModule(function (module) {
var baseIndexOf = interopDefault(require$$4$12);

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


var require$$0$67 = Object.freeze({
	"default": _arrayIncludes$3
});

var _updateWrapDetails = createCommonjsModule(function (module) {
var arrayEach = interopDefault(require$$3$13),
    arrayIncludes = interopDefault(require$$0$67);

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


var require$$0$66 = Object.freeze({
	"default": _updateWrapDetails$1
});

var _setWrapToString = createCommonjsModule(function (module) {
var getWrapDetails = interopDefault(require$$3$12),
    insertWrapDetails = interopDefault(require$$2$20),
    setToString = interopDefault(require$$0$64),
    updateWrapDetails = interopDefault(require$$0$66);

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


var require$$0$63 = Object.freeze({
	"default": _setWrapToString$1
});

var _createRecurry = createCommonjsModule(function (module) {
var isLaziable = interopDefault(require$$0$54),
    setData = interopDefault(require$$1$33),
    setWrapToString = interopDefault(require$$0$63);

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
	"default": _createRecurry$1
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


var require$$3$14 = Object.freeze({
	"default": _getHolder$1
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


var require$$3$15 = Object.freeze({
	"default": _isIndex$1
});

var _reorder = createCommonjsModule(function (module) {
var copyArray = interopDefault(require$$4$11),
    isIndex = interopDefault(require$$3$15);

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


var require$$2$23 = Object.freeze({
	"default": _reorder$1
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


var require$$0$69 = Object.freeze({
	"default": _replaceHolders$1
});

var _createHybrid = createCommonjsModule(function (module) {
var composeArgs = interopDefault(require$$2$17),
    composeArgsRight = interopDefault(require$$1$32),
    countHolders = interopDefault(require$$6$2),
    createCtor = interopDefault(require$$1$31),
    createRecurry = interopDefault(require$$4$10),
    getHolder = interopDefault(require$$3$14),
    reorder = interopDefault(require$$2$23),
    replaceHolders = interopDefault(require$$0$69),
    root = interopDefault(require$$0$50);

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
	"default": _createHybrid$1
});

var _createCurry = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    createCtor = interopDefault(require$$1$31),
    createHybrid = interopDefault(require$$4$9),
    createRecurry = interopDefault(require$$4$10),
    getHolder = interopDefault(require$$3$14),
    replaceHolders = interopDefault(require$$0$69),
    root = interopDefault(require$$0$50);

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


var require$$7 = Object.freeze({
	"default": _createCurry$1
});

var _createPartial = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    createCtor = interopDefault(require$$1$31),
    root = interopDefault(require$$0$50);

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


var require$$5$5 = Object.freeze({
	"default": _createPartial$1
});

var _mergeData = createCommonjsModule(function (module) {
var composeArgs = interopDefault(require$$2$17),
    composeArgsRight = interopDefault(require$$1$32),
    replaceHolders = interopDefault(require$$0$69);

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


var require$$3$16 = Object.freeze({
	"default": _mergeData$1
});

var isSymbol = createCommonjsModule(function (module) {
var isObjectLike = interopDefault(require$$0$60);

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


var require$$2$24 = Object.freeze({
	"default": isSymbol$1
});

var toNumber = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$48),
    isSymbol = interopDefault(require$$2$24);

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


var require$$0$71 = Object.freeze({
	"default": toNumber$1
});

var toFinite = createCommonjsModule(function (module) {
var toNumber = interopDefault(require$$0$71);

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


var require$$0$70 = Object.freeze({
	"default": toFinite$1
});

var toInteger = createCommonjsModule(function (module) {
var toFinite = interopDefault(require$$0$70);

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


var require$$1$36 = Object.freeze({
	"default": toInteger$1
});

var _createWrap = createCommonjsModule(function (module) {
var baseSetData = interopDefault(require$$1$26),
    createBind = interopDefault(require$$8$2),
    createCurry = interopDefault(require$$7),
    createHybrid = interopDefault(require$$4$9),
    createPartial = interopDefault(require$$5$5),
    getData = interopDefault(require$$3$11),
    mergeData = interopDefault(require$$3$16),
    setData = interopDefault(require$$1$33),
    setWrapToString = interopDefault(require$$0$63),
    toInteger = interopDefault(require$$1$36);

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


var require$$1$25 = Object.freeze({
	"default": _createWrap$1
});

var ary = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$25);

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


var require$$12$1 = Object.freeze({
	"default": ary$1
});

var _baseAssignValue = createCommonjsModule(function (module) {
var defineProperty = interopDefault(require$$0$65);

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


var require$$1$38 = Object.freeze({
	"default": _baseAssignValue$1
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


var require$$3$17 = Object.freeze({
	"default": eq$1
});

var _assignValue = createCommonjsModule(function (module) {
var baseAssignValue = interopDefault(require$$1$38),
    eq = interopDefault(require$$3$17);

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


var require$$13$1 = Object.freeze({
	"default": _assignValue$1
});

var _copyObject = createCommonjsModule(function (module) {
var assignValue = interopDefault(require$$13$1),
    baseAssignValue = interopDefault(require$$1$38);

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


var require$$1$37 = Object.freeze({
	"default": _copyObject$1
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


var require$$1$39 = Object.freeze({
	"default": _baseTimes$1
});

var _baseIsArguments = createCommonjsModule(function (module) {
var isObjectLike = interopDefault(require$$0$60);

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


var require$$1$41 = Object.freeze({
	"default": _baseIsArguments$1
});

var isArguments = createCommonjsModule(function (module) {
var baseIsArguments = interopDefault(require$$1$41),
    isObjectLike = interopDefault(require$$0$60);

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


var require$$1$40 = Object.freeze({
	"default": isArguments$1
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


var require$$0$73 = Object.freeze({
	"default": stubFalse$1
});

var isBuffer = createCommonjsModule(function (module, exports) {
var root = interopDefault(require$$0$50),
    stubFalse = interopDefault(require$$0$73);

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


var require$$1$42 = Object.freeze({
	"default": isBuffer$1
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


var require$$1$43 = Object.freeze({
	"default": isLength$1
});

var _baseIsTypedArray = createCommonjsModule(function (module) {
var isLength = interopDefault(require$$1$43),
    isObjectLike = interopDefault(require$$0$60);

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


var require$$2$26 = Object.freeze({
	"default": _baseIsTypedArray$1
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


var require$$1$44 = Object.freeze({
	"default": _baseUnary$1
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = interopDefault(require$$0$51);

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


var require$$0$75 = Object.freeze({
	"default": _nodeUtil$1
});

var isTypedArray = createCommonjsModule(function (module) {
var baseIsTypedArray = interopDefault(require$$2$26),
    baseUnary = interopDefault(require$$1$44),
    nodeUtil = interopDefault(require$$0$75);

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


var require$$0$74 = Object.freeze({
	"default": isTypedArray$1
});

var _arrayLikeKeys = createCommonjsModule(function (module) {
var baseTimes = interopDefault(require$$1$39),
    isArguments = interopDefault(require$$1$40),
    isArray = interopDefault(require$$0$59),
    isBuffer = interopDefault(require$$1$42),
    isIndex = interopDefault(require$$3$15),
    isTypedArray = interopDefault(require$$0$74);

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


var require$$2$25 = Object.freeze({
	"default": _arrayLikeKeys$1
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


var require$$0$76 = Object.freeze({
	"default": _isPrototype$1
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


var require$$0$78 = Object.freeze({
	"default": _overArg$1
});

var _nativeKeys = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$78);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;
});

var _nativeKeys$1 = interopDefault(_nativeKeys);


var require$$0$77 = Object.freeze({
	"default": _nativeKeys$1
});

var _baseKeys = createCommonjsModule(function (module) {
var isPrototype = interopDefault(require$$0$76),
    nativeKeys = interopDefault(require$$0$77);

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


var require$$1$45 = Object.freeze({
	"default": _baseKeys$1
});

var isArrayLike = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$1$30),
    isLength = interopDefault(require$$1$43);

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


var require$$3$18 = Object.freeze({
	"default": isArrayLike$1
});

var keys$2 = createCommonjsModule(function (module) {
var arrayLikeKeys = interopDefault(require$$2$25),
    baseKeys = interopDefault(require$$1$45),
    isArrayLike = interopDefault(require$$3$18);

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

var keys$3 = interopDefault(keys$2);


var require$$0$72 = Object.freeze({
	"default": keys$3
});

var _baseAssign = createCommonjsModule(function (module) {
var copyObject = interopDefault(require$$1$37),
    keys = interopDefault(require$$0$72);

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


var require$$12$2 = Object.freeze({
	"default": _baseAssign$1
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


var require$$4$13 = Object.freeze({
	"default": _listCacheClear$1
});

var _assocIndexOf = createCommonjsModule(function (module) {
var eq = interopDefault(require$$3$17);

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
	"default": _assocIndexOf$1
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


var require$$3$19 = Object.freeze({
	"default": _listCacheDelete$1
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


var require$$2$27 = Object.freeze({
	"default": _listCacheGet$1
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


var require$$1$48 = Object.freeze({
	"default": _listCacheHas$1
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
	"default": _listCacheSet$1
});

var _ListCache = createCommonjsModule(function (module) {
var listCacheClear = interopDefault(require$$4$13),
    listCacheDelete = interopDefault(require$$3$19),
    listCacheGet = interopDefault(require$$2$27),
    listCacheHas = interopDefault(require$$1$48),
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


var require$$1$47 = Object.freeze({
	"default": _ListCache$1
});

var _stackClear = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$47);

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


var require$$4$14 = Object.freeze({
	"default": _stackClear$1
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


var require$$3$20 = Object.freeze({
	"default": _stackDelete$1
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


var require$$2$28 = Object.freeze({
	"default": _stackGet$1
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


var require$$1$49 = Object.freeze({
	"default": _stackHas$1
});

var _Map = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28),
    root = interopDefault(require$$0$50);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;
});

var _Map$1 = interopDefault(_Map);


var require$$5$6 = Object.freeze({
	"default": _Map$1
});

var _nativeCreate = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;
});

var _nativeCreate$1 = interopDefault(_nativeCreate);


var require$$0$83 = Object.freeze({
	"default": _nativeCreate$1
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


var require$$4$16 = Object.freeze({
	"default": _hashClear$1
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


var require$$3$21 = Object.freeze({
	"default": _hashDelete$1
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


var require$$2$30 = Object.freeze({
	"default": _hashGet$1
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


var require$$1$50 = Object.freeze({
	"default": _hashHas$1
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
	"default": _hashSet$1
});

var _Hash = createCommonjsModule(function (module) {
var hashClear = interopDefault(require$$4$16),
    hashDelete = interopDefault(require$$3$21),
    hashGet = interopDefault(require$$2$30),
    hashHas = interopDefault(require$$1$50),
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


var require$$2$29 = Object.freeze({
	"default": _Hash$1
});

var _mapCacheClear = createCommonjsModule(function (module) {
var Hash = interopDefault(require$$2$29),
    ListCache = interopDefault(require$$1$47),
    Map = interopDefault(require$$5$6);

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


var require$$4$15 = Object.freeze({
	"default": _mapCacheClear$1
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
	"default": _isKeyable$1
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
	"default": _getMapData$1
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


var require$$3$22 = Object.freeze({
	"default": _mapCacheDelete$1
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


var require$$2$31 = Object.freeze({
	"default": _mapCacheGet$1
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


var require$$1$51 = Object.freeze({
	"default": _mapCacheHas$1
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
	"default": _mapCacheSet$1
});

var _MapCache = createCommonjsModule(function (module) {
var mapCacheClear = interopDefault(require$$4$15),
    mapCacheDelete = interopDefault(require$$3$22),
    mapCacheGet = interopDefault(require$$2$31),
    mapCacheHas = interopDefault(require$$1$51),
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
	"default": _MapCache$1
});

var _stackSet = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$47),
    Map = interopDefault(require$$5$6),
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
	"default": _stackSet$1
});

var _Stack = createCommonjsModule(function (module) {
var ListCache = interopDefault(require$$1$47),
    stackClear = interopDefault(require$$4$14),
    stackDelete = interopDefault(require$$3$20),
    stackGet = interopDefault(require$$2$28),
    stackHas = interopDefault(require$$1$49),
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


var require$$7$1 = Object.freeze({
	"default": _Stack$1
});

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var root = interopDefault(require$$0$50);

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


var require$$11 = Object.freeze({
	"default": _cloneBuffer$1
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
	"default": stubArray$1
});

var _getSymbols = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$78),
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


var require$$1$52 = Object.freeze({
	"default": _getSymbols$1
});

var _copySymbols = createCommonjsModule(function (module) {
var copyObject = interopDefault(require$$1$37),
    getSymbols = interopDefault(require$$1$52);

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


var require$$9 = Object.freeze({
	"default": _copySymbols$1
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


var require$$3$23 = Object.freeze({
	"default": _arrayPush$1
});

var _baseGetAllKeys = createCommonjsModule(function (module) {
var arrayPush = interopDefault(require$$3$23),
    isArray = interopDefault(require$$0$59);

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


var require$$2$32 = Object.freeze({
	"default": _baseGetAllKeys$1
});

var _getAllKeys = createCommonjsModule(function (module) {
var baseGetAllKeys = interopDefault(require$$2$32),
    getSymbols = interopDefault(require$$1$52),
    keys = interopDefault(require$$0$72);

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


var require$$8$3 = Object.freeze({
	"default": _getAllKeys$1
});

var _DataView = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28),
    root = interopDefault(require$$0$50);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;
});

var _DataView$1 = interopDefault(_DataView);


var require$$6$3 = Object.freeze({
	"default": _DataView$1
});

var _Promise = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28),
    root = interopDefault(require$$0$50);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;
});

var _Promise$1 = interopDefault(_Promise);


var require$$4$17 = Object.freeze({
	"default": _Promise$1
});

var _Set = createCommonjsModule(function (module) {
var getNative = interopDefault(require$$1$28),
    root = interopDefault(require$$0$50);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;
});

var _Set$1 = interopDefault(_Set);


var require$$3$25 = Object.freeze({
	"default": _Set$1
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


var require$$1$53 = Object.freeze({
	"default": _baseGetTag$1
});

var _getTag = createCommonjsModule(function (module) {
var DataView = interopDefault(require$$6$3),
    Map = interopDefault(require$$5$6),
    Promise = interopDefault(require$$4$17),
    Set = interopDefault(require$$3$25),
    WeakMap = interopDefault(require$$2$14),
    baseGetTag = interopDefault(require$$1$53),
    toSource = interopDefault(require$$0$52);

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


var require$$3$24 = Object.freeze({
	"default": _getTag$1
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
	"default": _initCloneArray$1
});

var _Uint8Array = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$50);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;
});

var _Uint8Array$1 = interopDefault(_Uint8Array);


var require$$4$18 = Object.freeze({
	"default": _Uint8Array$1
});

var _cloneArrayBuffer = createCommonjsModule(function (module) {
var Uint8Array = interopDefault(require$$4$18);

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
	"default": _cloneArrayBuffer$1
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


var require$$5$8 = Object.freeze({
	"default": _cloneDataView$1
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


var require$$2$33 = Object.freeze({
	"default": _addMapEntry$1
});

var _arrayReduce$2 = createCommonjsModule(function (module) {
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

var _arrayReduce$3 = interopDefault(_arrayReduce$2);


var require$$1$54 = Object.freeze({
	"default": _arrayReduce$3
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


var require$$1$55 = Object.freeze({
	"default": _mapToArray$1
});

var _cloneMap = createCommonjsModule(function (module) {
var addMapEntry = interopDefault(require$$2$33),
    arrayReduce = interopDefault(require$$1$54),
    mapToArray = interopDefault(require$$1$55);

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


var require$$4$19 = Object.freeze({
	"default": _cloneMap$1
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


var require$$3$26 = Object.freeze({
	"default": _cloneRegExp$1
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


var require$$2$35 = Object.freeze({
	"default": _addSetEntry$1
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
	"default": _setToArray$1
});

var _cloneSet = createCommonjsModule(function (module) {
var addSetEntry = interopDefault(require$$2$35),
    arrayReduce = interopDefault(require$$1$54),
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


var require$$2$34 = Object.freeze({
	"default": _cloneSet$1
});

var _Symbol = createCommonjsModule(function (module) {
var root = interopDefault(require$$0$50);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;
});

var _Symbol$1 = interopDefault(_Symbol);


var require$$2$36 = Object.freeze({
	"default": _Symbol$1
});

var _cloneSymbol = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$36);

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


var require$$1$56 = Object.freeze({
	"default": _cloneSymbol$1
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
	"default": _cloneTypedArray$1
});

var _initCloneByTag = createCommonjsModule(function (module) {
var cloneArrayBuffer = interopDefault(require$$0$89),
    cloneDataView = interopDefault(require$$5$8),
    cloneMap = interopDefault(require$$4$19),
    cloneRegExp = interopDefault(require$$3$26),
    cloneSet = interopDefault(require$$2$34),
    cloneSymbol = interopDefault(require$$1$56),
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


var require$$5$7 = Object.freeze({
	"default": _initCloneByTag$1
});

var _getPrototype = createCommonjsModule(function (module) {
var overArg = interopDefault(require$$0$78);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;
});

var _getPrototype$1 = interopDefault(_getPrototype);


var require$$1$57 = Object.freeze({
	"default": _getPrototype$1
});

var _initCloneObject = createCommonjsModule(function (module) {
var baseCreate = interopDefault(require$$2$16),
    getPrototype = interopDefault(require$$1$57),
    isPrototype = interopDefault(require$$0$76);

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


var require$$4$20 = Object.freeze({
	"default": _initCloneObject$1
});

var _baseClone = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$1),
    arrayEach = interopDefault(require$$3$13),
    assignValue = interopDefault(require$$13$1),
    baseAssign = interopDefault(require$$12$2),
    cloneBuffer = interopDefault(require$$11),
    copyArray = interopDefault(require$$4$11),
    copySymbols = interopDefault(require$$9),
    getAllKeys = interopDefault(require$$8$3),
    getTag = interopDefault(require$$3$24),
    initCloneArray = interopDefault(require$$6$4),
    initCloneByTag = interopDefault(require$$5$7),
    initCloneObject = interopDefault(require$$4$20),
    isArray = interopDefault(require$$0$59),
    isBuffer = interopDefault(require$$1$42),
    isObject = interopDefault(require$$0$48),
    keys = interopDefault(require$$0$72);

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


var require$$1$46 = Object.freeze({
	"default": _baseClone$1
});

var clone = createCommonjsModule(function (module) {
var baseClone = interopDefault(require$$1$46);

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
	"default": clone$1
});

var curry = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$25);

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


var require$$1$58 = Object.freeze({
	"default": curry$1
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


var require$$1$60 = Object.freeze({
	"default": _setCacheAdd$1
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


var require$$0$92 = Object.freeze({
	"default": _setCacheHas$1
});

var _SetCache = createCommonjsModule(function (module) {
var MapCache = interopDefault(require$$0$82),
    setCacheAdd = interopDefault(require$$1$60),
    setCacheHas = interopDefault(require$$0$92);

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


var require$$2$40 = Object.freeze({
	"default": _SetCache$1
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


var require$$1$61 = Object.freeze({
	"default": _arraySome$1
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


var require$$0$93 = Object.freeze({
	"default": _cacheHas$1
});

var _equalArrays = createCommonjsModule(function (module) {
var SetCache = interopDefault(require$$2$40),
    arraySome = interopDefault(require$$1$61),
    cacheHas = interopDefault(require$$0$93);

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


var require$$2$39 = Object.freeze({
	"default": _equalArrays$1
});

var _equalByTag = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$36),
    Uint8Array = interopDefault(require$$4$18),
    eq = interopDefault(require$$3$17),
    equalArrays = interopDefault(require$$2$39),
    mapToArray = interopDefault(require$$1$55),
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


var require$$5$10 = Object.freeze({
	"default": _equalByTag$1
});

var _equalObjects = createCommonjsModule(function (module) {
var keys = interopDefault(require$$0$72);

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


var require$$4$22 = Object.freeze({
	"default": _equalObjects$1
});

var _baseIsEqualDeep = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$1),
    equalArrays = interopDefault(require$$2$39),
    equalByTag = interopDefault(require$$5$10),
    equalObjects = interopDefault(require$$4$22),
    getTag = interopDefault(require$$3$24),
    isArray = interopDefault(require$$0$59),
    isBuffer = interopDefault(require$$1$42),
    isTypedArray = interopDefault(require$$0$74);

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


var require$$2$38 = Object.freeze({
	"default": _baseIsEqualDeep$1
});

var _baseIsEqual = createCommonjsModule(function (module) {
var baseIsEqualDeep = interopDefault(require$$2$38),
    isObject = interopDefault(require$$0$48),
    isObjectLike = interopDefault(require$$0$60);

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
	"default": _baseIsEqual$1
});

var _baseIsMatch = createCommonjsModule(function (module) {
var Stack = interopDefault(require$$7$1),
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


var require$$2$37 = Object.freeze({
	"default": _baseIsMatch$1
});

var _isStrictComparable = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$48);

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


var require$$2$41 = Object.freeze({
	"default": _isStrictComparable$1
});

var _getMatchData = createCommonjsModule(function (module) {
var isStrictComparable = interopDefault(require$$2$41),
    keys = interopDefault(require$$0$72);

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


var require$$1$62 = Object.freeze({
	"default": _getMatchData$1
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


var require$$1$63 = Object.freeze({
	"default": _matchesStrictComparable$1
});

var _baseMatches = createCommonjsModule(function (module) {
var baseIsMatch = interopDefault(require$$2$37),
    getMatchData = interopDefault(require$$1$62),
    matchesStrictComparable = interopDefault(require$$1$63);

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


var require$$4$21 = Object.freeze({
	"default": _baseMatches$1
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


var require$$0$95 = Object.freeze({
	"default": memoize$1
});

var _memoizeCapped = createCommonjsModule(function (module) {
var memoize = interopDefault(require$$0$95);

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


var require$$1$65 = Object.freeze({
	"default": _memoizeCapped$1
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


var require$$0$98 = Object.freeze({
	"default": _arrayMap$1
});

var _baseToString = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$36),
    arrayMap = interopDefault(require$$0$98),
    isArray = interopDefault(require$$0$59),
    isSymbol = interopDefault(require$$2$24);

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


var require$$0$97 = Object.freeze({
	"default": _baseToString$1
});

var toString$1 = createCommonjsModule(function (module) {
var baseToString = interopDefault(require$$0$97);

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


var require$$0$96 = Object.freeze({
	"default": toString$2
});

var _stringToPath = createCommonjsModule(function (module) {
var memoizeCapped = interopDefault(require$$1$65),
    toString = interopDefault(require$$0$96);

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


var require$$1$64 = Object.freeze({
	"default": _stringToPath$1
});

var _castPath = createCommonjsModule(function (module) {
var isArray = interopDefault(require$$0$59),
    stringToPath = interopDefault(require$$1$64);

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
	"default": _castPath$1
});

var _isKey = createCommonjsModule(function (module) {
var isArray = interopDefault(require$$0$59),
    isSymbol = interopDefault(require$$2$24);

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


var require$$1$66 = Object.freeze({
	"default": _isKey$1
});

var _toKey = createCommonjsModule(function (module) {
var isSymbol = interopDefault(require$$2$24);

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
	"default": _toKey$1
});

var _baseGet = createCommonjsModule(function (module) {
var castPath = interopDefault(require$$6$6),
    isKey = interopDefault(require$$1$66),
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


var require$$0$94 = Object.freeze({
	"default": _baseGet$1
});

var get$2 = createCommonjsModule(function (module) {
var baseGet = interopDefault(require$$0$94);

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

var get$3 = interopDefault(get$2);


var require$$5$11 = Object.freeze({
	"default": get$3
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


var require$$1$67 = Object.freeze({
	"default": _baseHasIn$1
});

var _hasPath = createCommonjsModule(function (module) {
var castPath = interopDefault(require$$6$6),
    isArguments = interopDefault(require$$1$40),
    isArray = interopDefault(require$$0$59),
    isIndex = interopDefault(require$$3$15),
    isKey = interopDefault(require$$1$66),
    isLength = interopDefault(require$$1$43),
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
	"default": _hasPath$1
});

var hasIn = createCommonjsModule(function (module) {
var baseHasIn = interopDefault(require$$1$67),
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


var require$$4$23 = Object.freeze({
	"default": hasIn$1
});

var _baseMatchesProperty = createCommonjsModule(function (module) {
var baseIsEqual = interopDefault(require$$6$5),
    get = interopDefault(require$$5$11),
    hasIn = interopDefault(require$$4$23),
    isKey = interopDefault(require$$1$66),
    isStrictComparable = interopDefault(require$$2$41),
    matchesStrictComparable = interopDefault(require$$1$63),
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


var require$$3$27 = Object.freeze({
	"default": _baseMatchesProperty$1
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


var require$$2$42 = Object.freeze({
	"default": _baseProperty$1
});

var _basePropertyDeep = createCommonjsModule(function (module) {
var baseGet = interopDefault(require$$0$94);

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


var require$$2$43 = Object.freeze({
	"default": _basePropertyDeep$1
});

var property = createCommonjsModule(function (module) {
var baseProperty = interopDefault(require$$2$42),
    basePropertyDeep = interopDefault(require$$2$43),
    isKey = interopDefault(require$$1$66),
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
	"default": property$1
});

var _baseIteratee = createCommonjsModule(function (module) {
var baseMatches = interopDefault(require$$4$21),
    baseMatchesProperty = interopDefault(require$$3$27),
    identity = interopDefault(require$$2$13),
    isArray = interopDefault(require$$0$59),
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


var require$$1$59 = Object.freeze({
	"default": _baseIteratee$1
});

var iteratee = createCommonjsModule(function (module) {
var baseClone = interopDefault(require$$1$46),
    baseIteratee = interopDefault(require$$1$59);

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


var require$$5$9 = Object.freeze({
	"default": iteratee$1
});

var _isFlattenable = createCommonjsModule(function (module) {
var Symbol = interopDefault(require$$2$36),
    isArguments = interopDefault(require$$1$40),
    isArray = interopDefault(require$$0$59);

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
	"default": _isFlattenable$1
});

var _baseFlatten = createCommonjsModule(function (module) {
var arrayPush = interopDefault(require$$3$23),
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
	"default": _baseFlatten$1
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


var require$$2$44 = Object.freeze({
	"default": flatten$1
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


var require$$1$68 = Object.freeze({
	"default": _overRest$1
});

var _flatRest = createCommonjsModule(function (module) {
var flatten = interopDefault(require$$2$44),
    overRest = interopDefault(require$$1$68),
    setToString = interopDefault(require$$0$64);

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


var require$$4$24 = Object.freeze({
	"default": _flatRest$1
});

var rearg = createCommonjsModule(function (module) {
var createWrap = interopDefault(require$$1$25),
    flatRest = interopDefault(require$$4$24);

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


var require$$3$28 = Object.freeze({
	"default": rearg$1
});

var _baseRest = createCommonjsModule(function (module) {
var identity = interopDefault(require$$2$13),
    overRest = interopDefault(require$$1$68),
    setToString = interopDefault(require$$0$64);

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


var require$$1$69 = Object.freeze({
	"default": _baseRest$1
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
	"default": _baseSlice$1
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


var require$$1$70 = Object.freeze({
	"default": _castSlice$1
});

var spread = createCommonjsModule(function (module) {
var apply = interopDefault(require$$4$8),
    arrayPush = interopDefault(require$$3$23),
    baseRest = interopDefault(require$$1$69),
    castSlice = interopDefault(require$$1$70),
    toInteger = interopDefault(require$$1$36);

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


var require$$2$45 = Object.freeze({
	"default": spread$1
});

var toPath = createCommonjsModule(function (module) {
var arrayMap = interopDefault(require$$0$98),
    copyArray = interopDefault(require$$4$11),
    isArray = interopDefault(require$$0$59),
    isSymbol = interopDefault(require$$2$24),
    stringToPath = interopDefault(require$$1$64),
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
	"default": toPath$1
});

var _util = createCommonjsModule(function (module) {
module.exports = {
  'ary': interopDefault(require$$12$1),
  'assign': interopDefault(require$$12$2),
  'clone': interopDefault(require$$10$1),
  'curry': interopDefault(require$$1$58),
  'forEach': interopDefault(require$$3$13),
  'isArray': interopDefault(require$$0$59),
  'isFunction': interopDefault(require$$1$30),
  'iteratee': interopDefault(require$$5$9),
  'keys': interopDefault(require$$1$45),
  'rearg': interopDefault(require$$3$28),
  'spread': interopDefault(require$$2$45),
  'toInteger': interopDefault(require$$1$36),
  'toPath': interopDefault(require$$0$105)
};
});

var _util$1 = interopDefault(_util);


var require$$0$47 = Object.freeze({
	"default": _util$1
});

var convert = createCommonjsModule(function (module) {
var baseConvert = interopDefault(require$$1$23),
    util = interopDefault(require$$0$47);

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


var require$$2$12 = Object.freeze({
	"default": convert$1
});

var _createBaseFor = createCommonjsModule(function (module) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;
});

var _createBaseFor$1 = interopDefault(_createBaseFor);


var require$$0$106 = Object.freeze({
	"default": _createBaseFor$1
});

var _baseFor = createCommonjsModule(function (module) {
var createBaseFor = interopDefault(require$$0$106);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;
});

var _baseFor$1 = interopDefault(_baseFor);


var require$$1$74 = Object.freeze({
	"default": _baseFor$1
});

var _baseForOwn = createCommonjsModule(function (module) {
var baseFor = interopDefault(require$$1$74),
    keys = interopDefault(require$$0$72);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;
});

var _baseForOwn$1 = interopDefault(_baseForOwn);


var require$$1$73 = Object.freeze({
	"default": _baseForOwn$1
});

var _createBaseEach = createCommonjsModule(function (module) {
var isArrayLike = interopDefault(require$$3$18);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;
});

var _createBaseEach$1 = interopDefault(_createBaseEach);


var require$$0$107 = Object.freeze({
	"default": _createBaseEach$1
});

var _baseEach = createCommonjsModule(function (module) {
var baseForOwn = interopDefault(require$$1$73),
    createBaseEach = interopDefault(require$$0$107);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;
});

var _baseEach$1 = interopDefault(_baseEach);


var require$$2$46 = Object.freeze({
	"default": _baseEach$1
});

var _baseMap = createCommonjsModule(function (module) {
var baseEach = interopDefault(require$$2$46),
    isArrayLike = interopDefault(require$$3$18);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;
});

var _baseMap$1 = interopDefault(_baseMap);


var require$$1$72 = Object.freeze({
	"default": _baseMap$1
});

var map$3 = createCommonjsModule(function (module) {
var arrayMap = interopDefault(require$$0$98),
    baseIteratee = interopDefault(require$$1$59),
    baseMap = interopDefault(require$$1$72),
    isArray = interopDefault(require$$0$59);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;
});

var map$4 = interopDefault(map$3);


var require$$1$71 = Object.freeze({
	"default": map$4
});

var map$2 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('map', interopDefault(require$$1$71));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _map = interopDefault(map$2);

var _arrayFilter = createCommonjsModule(function (module) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array ? array.length : 0,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;
});

var _arrayFilter$1 = interopDefault(_arrayFilter);


var require$$4$25 = Object.freeze({
	"default": _arrayFilter$1
});

var isArrayLikeObject = createCommonjsModule(function (module) {
var isArrayLike = interopDefault(require$$3$18),
    isObjectLike = interopDefault(require$$0$60);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;
});

var isArrayLikeObject$1 = interopDefault(isArrayLikeObject);


var require$$0$109 = Object.freeze({
	"default": isArrayLikeObject$1
});

var unzip = createCommonjsModule(function (module) {
var arrayFilter = interopDefault(require$$4$25),
    arrayMap = interopDefault(require$$0$98),
    baseProperty = interopDefault(require$$2$42),
    baseTimes = interopDefault(require$$1$39),
    isArrayLikeObject = interopDefault(require$$0$109);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter(array, function(group) {
    if (isArrayLikeObject(group)) {
      length = nativeMax(group.length, length);
      return true;
    }
  });
  return baseTimes(length, function(index) {
    return arrayMap(array, baseProperty(index));
  });
}

module.exports = unzip;
});

var unzip$1 = interopDefault(unzip);


var require$$0$108 = Object.freeze({
	"default": unzip$1
});

var zip$1 = createCommonjsModule(function (module) {
var baseRest = interopDefault(require$$1$69),
    unzip = interopDefault(require$$0$108);

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 */
var zip = baseRest(unzip);

module.exports = zip;
});

var zip$2 = interopDefault(zip$1);


var require$$1$75 = Object.freeze({
	"default": zip$2
});

var zip = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('zip', interopDefault(require$$1$75));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _zip = interopDefault(zip);

var _createFlow = createCommonjsModule(function (module) {
var LodashWrapper = interopDefault(require$$5$4),
    flatRest = interopDefault(require$$4$24),
    getData = interopDefault(require$$3$11),
    getFuncName = interopDefault(require$$2$19),
    isArray = interopDefault(require$$0$59),
    isLaziable = interopDefault(require$$0$54);

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


var require$$0$110 = Object.freeze({
	"default": _createFlow$1
});

var flow$1 = createCommonjsModule(function (module) {
var createFlow = interopDefault(require$$0$110);

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


var require$$1$76 = Object.freeze({
	"default": flow$2
});

var flow = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('flow', interopDefault(require$$1$76));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _flow = interopDefault(flow);

var curry$2 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('curry', interopDefault(require$$1$58));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _curry = interopDefault(curry$2);

var info = {
  // Compulsory
  type: 'TextBox',
  displayName: 'Text Box',
  group: 'Text Components',

  // Field type specific
  htmlInputType: 'text',
  htmlElement: 'input'
};

// These are the fields that will end up being
// changed on updates
var componentFields = {
  // Compulsory fields
  required: false,
  // Component specific fields
  title: 'Add a title',
  placeholder: 'Add a placeholder'
};

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
var initialState = function initialState(state) {
  return Promise.resolve(Object.assign({}, componentFields, info, state));
};

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

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
function getState(oldState, el) {
  var input = el.querySelector('input');

  assert(input, 'No input found in form element. This should never happen, something went wrong.');

  var answer = input.value;

  var newState = Object.assign({}, oldState, { answer: answer });

  return newState;
}

/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
function render(state) {
  var tagName = state.htmlElement;
  var el = document.createElement(tagName);

  el.className = 'fl-if_TextInput-input';

  el.setAttribute('name', state.title);

  el.setAttribute('type', state.htmlInputType);

  el.placeholder = state.placeholder;

  el.setAttribute('required', !!state.required);

  return el;
}

var isNil$1 = createCommonjsModule(function (module) {
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;
});

var isNil$2 = interopDefault(isNil$1);


var require$$2$47 = Object.freeze({
	"default": isNil$2
});

var _falseOptions = createCommonjsModule(function (module) {
module.exports = {
  'cap': false,
  'curry': false,
  'fixed': false,
  'immutable': false,
  'rearg': false
};
});

var _falseOptions$1 = interopDefault(_falseOptions);


var require$$1$77 = Object.freeze({
	"default": _falseOptions$1
});

var isNil = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('isNil', interopDefault(require$$2$47), interopDefault(require$$1$77));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _isNil = interopDefault(isNil);

function assert$2(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}



function fakeEvent(answers) {
  return {
    detail: {
      answers: answers
    }
  };
}



// createErrorMessage: String -> HTML
function createErrorMessage(message) {
  var err = document.createElement('div');
  err.className = 'fl-if_Error fl-if_Error--speechBubble';
  err.innerHTML = message;
  return err;
}

function removeErrorMessage(field) {
  var errorMessages = Array.from(field.querySelectorAll('.fl-if_Error'));
  errorMessages.forEach(function (er) {
    return er.remove();
  });
}

function trimSpaces(str) {
  return str.replace(/\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
}

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
function validate(state) {
  if (!state.required) {
    return null;
  }

  if (_isNil(state.answer) || trimSpaces(state.answer).length < 1) {
    return 'Please fill in this field.';
  }

  return null;
}

var TextBox = {
  initialState: initialState,
  es3: {
    validate: validate,
    getState: getState,
    render: render
  }
};

var info$1 = {
  // Compulsory
  type: 'TextArea',
  displayName: 'Text Area',
  group: 'Text Components',

  // Field type specific
  htmlInputType: 'textarea',
  htmlElement: 'input'
};

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
var initialState$1 = function initialState$1(state) {
  return initialState(state).then(function (initialised) {
    return Object.assign({}, initialised, info$1);
  });
};

/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
function render$1(state) {
  var el = render(state);
  el.className = el.className + ' fl-if_TextAreaInput-input';
  return el;
}

var TextArea = {
  initialState: initialState$1,
  info: info$1,
  es3: {
    validate: validate,
    getState: getState,
    render: render$1
  }
};

var info$2 = {
  // Compulsory
  type: 'Dropdown',
  displayName: 'Dropdown',
  group: 'Options Components'
};

// These are the fields that will end up being
// changed on updates
var componentFields$1 = {
  // Compulsory fields
  required: false,
  // Component specific fields
  title: 'Add a title',
  options: [{ value: 0, caption: 'Insert an option' }],

  // states needed to handle UI
  newOptionValue: '',
  newOptionCaption: '',
  errorShowing: null
};

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
var initialState$3 = function initialState$3(state) {
  return Promise.resolve(Object.assign({}, componentFields$1, info$2, state));
};

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
function getState$1(oldState, el) {
  var dropdown = el.querySelector('select');
  var selected = dropdown.selectedIndex;

  assert(!_isNil(oldState.options[selected]), 'Option ' + selected + ' is out of range. Maximum otions is ' + oldState.options.length);

  var newState = Object.assign({}, oldState, { answer: oldState.options[selected] });

  return newState;
}

/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
function render$2(state) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_Dropdown fl-if_OptionsInput';

  var select = document.createElement('select');
  select.className = 'fl-if_Dropdown-option';
  select.setAttribute('name', state.title);
  select.setAttribute('required', !!state.required);
  wrapper.appendChild(select);

  var optionEl = void 0;
  for (var optionIndex = 0; optionIndex < state.options.length; optionIndex++) {
    optionEl = document.createElement('option');
    optionEl.setAttribute('value', state.options[optionIndex].value);
    optionEl.innerHTML = state.options[optionIndex].caption;
    if (optionIndex === 0) {
      optionEl.setAttribute('selected', true);
    }

    var disabledIndexes = state.disabledIndexes || [];
    for (var j = 0; j < disabledIndexes.length; j++) {
      if (optionIndex === state.disabledIndexes[j]) {
        optionEl.setAttribute('disabled', true);
      }
    }

    select.appendChild(optionEl);
  }

  return wrapper;
}

var isString = createCommonjsModule(function (module) {
var isArray = interopDefault(require$$0$59),
    isObjectLike = interopDefault(require$$0$60);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;
});

var isString$1 = interopDefault(isString);


var require$$2$48 = Object.freeze({
	"default": isString$1
});

var _baseValues = createCommonjsModule(function (module) {
var arrayMap = interopDefault(require$$0$98);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;
});

var _baseValues$1 = interopDefault(_baseValues);


var require$$1$79 = Object.freeze({
	"default": _baseValues$1
});

var values$1 = createCommonjsModule(function (module) {
var baseValues = interopDefault(require$$1$79),
    keys = interopDefault(require$$0$72);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = values;
});

var values$2 = interopDefault(values$1);


var require$$0$111 = Object.freeze({
	"default": values$2
});

var includes$2 = createCommonjsModule(function (module) {
var baseIndexOf = interopDefault(require$$4$12),
    isArrayLike = interopDefault(require$$3$18),
    isString = interopDefault(require$$2$48),
    toInteger = interopDefault(require$$1$36),
    values = interopDefault(require$$0$111);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;
});

var includes$3 = interopDefault(includes$2);


var require$$1$78 = Object.freeze({
	"default": includes$3
});

var includes$1 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('includes', interopDefault(require$$1$78));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _includes = interopDefault(includes$1);

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
function validate$1(state) {
  if (_isNil(state.answer)) {
    return 'Please select an option';
  }

  if (!state.disabledIndexes) {
    return null;
  }

  if (_includes(state.answer, state.disabledIndexes)) {
    return 'Please select a valid option';
  }

  return null;
}

var Dropdown = {
  info: info$2,
  initialState: initialState$3,
  es3: {
    validate: validate$1,
    getState: getState$1,
    render: render$2
  }
};

var defaultConstructors = {
  TextBox: TextBox,
  TextArea: TextArea,
  Dropdown: Dropdown
};

var getConstructor$2 = _curry(function (customConstructors, config) {
  var allConstructors = Object.assign({}, defaultConstructors, customConstructors);

  var fieldConstructor = allConstructors[config.type] || allConstructors[config.primitiveType];

  assert(fieldConstructor, 'No field constructor available for ' + config.type + '.');

  return fieldConstructor;
});

/**
 * @method createField
 * @param  {Object} fieldConstructor
 * @param  {Object} initialState
 * @return {HTMLElement}
 */
function createField(fieldConstructor, initialState) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_FormField fl-if_FormField--active';

  var legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';
  legend.innerHTML = initialState.title;

  var inputEl = fieldConstructor.es3.render(initialState);
  wrapper.appendChild(legend);
  wrapper.appendChild(inputEl);
  wrapper.getValue = inputEl.getValue;
  wrapper.validate = inputEl.validate;
  return wrapper;
}

var forEach$2 = createCommonjsModule(function (module) {
var arrayEach = interopDefault(require$$3$13),
    baseEach = interopDefault(require$$2$46),
    baseIteratee = interopDefault(require$$1$59),
    isArray = interopDefault(require$$0$59);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = forEach;
});

var forEach$3 = interopDefault(forEach$2);


var require$$1$80 = Object.freeze({
	"default": forEach$3
});

var forEach$1 = createCommonjsModule(function (module) {
var convert = interopDefault(require$$2$12),
    func = convert('forEach', interopDefault(require$$1$80));

func.placeholder = interopDefault(require$$0$46);
module.exports = func;
});

var _forEach = interopDefault(forEach$1);

/**
 * @method buildStructure
 * @param  {Array<HTMLElement>} fields
 * @return {HTMLElement} form
 */
function buildStructure(fields) {
  // The form itself
  var form = document.createElement('form');
  form.className = 'fl-if_FormUI fl-if_FormUI-es3';

  // All fields
  _forEach(function (f) {
    return form.appendChild(f);
  }, fields);

  // Submit Btn
  var submitBtnContainer = document.createElement('div');
  submitBtnContainer.className = 'fl-if_FormField fl-if_FormField--active';
  var submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'Submit';
  submitBtn.className = 'fl-if_NavigationBar-button';
  submitBtnContainer.appendChild(submitBtn);
  form.appendChild(submitBtnContainer);

  // Wrapper for nice scrolling
  var formWrapper = document.createElement('div');
  formWrapper.className = 'fl-if';
  formWrapper.appendChild(form);

  return formWrapper;
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen["return"] !== "function") {
      this["return"] = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype["throw"] = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype["return"] = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var get$4 = function get$4(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$4(parent, property, receiver);
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

















var set$4 = function set$4(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$4(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function addListeners(formWrapper, questions, fieldConstructors, initialStates) {
  var listeners = [];

  formWrapper.addEventListener = function customAddEventListener(event, callback) {
    // eslint-disable-line max-len, no-param-reassign
    if (event === 'submit') {
      listeners.push(callback);
    } else {
      return formWrapper.addEventListener(event, callback);
    }
    return null;
  };

  formWrapper.triggerSubmit = function triggerSubmit(formData) {
    // eslint-disable-line max-len, no-param-reassign
    var evt = fakeEvent(formData);
    for (var j = 0; j < listeners.length; j++) {
      listeners[j](evt);
    }
  };

  formWrapper.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var submitBtnContainer = formWrapper.querySelector('button[type=submit]').parentElement;
    removeErrorMessage(submitBtnContainer); // TODO: make message appear under submit button

    var questionStates = [];
    for (var i = 0; i < questions.length; i++) {
      questionStates.push(fieldConstructors[i].es3.getState(initialStates[i], questions[i]));
    }

    var errorCount = 0;
    for (var _i = 0; _i < questions.length; _i++) {
      removeErrorMessage(questions[_i]);
      var error = fieldConstructors[_i].es3.validate(questionStates[_i]);
      if (error) {
        errorCount += 1;
        var errMsg = createErrorMessage(error);
        questions[_i].appendChild(errMsg);
      }
    }

    if (errorCount > 0) {
      submitBtnContainer.appendChild(createErrorMessage(errorCount + ' fields need to be completed.'));
      return false;
    }

    var formData = questionStates.map(function (s) {
      return { answer: s.answer };
    });
    formWrapper.triggerSubmit(formData);

    e.preventDefault();
    e.stopPropagation();
    return false;
  });
}

function es3Form(config, customConstructors) {
  var fieldConstructors = _map(getConstructor$2(customConstructors), config);

  var initialStatesPromises = _flow(_zip(fieldConstructors), _map(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2);

    var constr = _ref2[0];
    var conf = _ref2[1];
    return constr.initialState(conf);
  }))(config);

  return Promise.all(initialStatesPromises).then(function (initialStates) {
    var fields = _flow(_zip(fieldConstructors), _map(function (_ref3) {
      var _ref4 = slicedToArray(_ref3, 2);

      var constr = _ref4[0];
      var init = _ref4[1];
      return createField(constr, init);
    }))(initialStates);

    var formWrapper = buildStructure(fields);

    addListeners(formWrapper, fields, fieldConstructors, initialStates);

    return formWrapper;
  });
}

// =============== GLOBAL OBJECT ===================//

// START HERE
var flInteractiveForm = {
  create: function create(config, customFields) {
    assert$2(config && config.length !== undefined, 'The first argument must be a configuration array');

    return es3Form(config, customFields);
  }
};

return flInteractiveForm;

})));

//# sourceMappingURL=fl-interactive-form-es3.js.map
