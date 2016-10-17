define(['react-dom', 'react'], function (ReactDOM, React) { 'use strict';

ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
React = 'default' in React ? React['default'] : React;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





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

    if (typeof gen.return !== "function") {
      this.return = undefined;
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

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
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



var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
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
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







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

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
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















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var ie8Polyfills = createCommonjsModule(function (module) {
  /*! (C) WebReflection Mit Style License */
  (function (e) {
    function w(e, t, n, r) {
      for (var i, s, o = n.slice(), u = x(t, e), a = 0, f = o.length; a < f; a++) {
        i = o[a], (typeof i === "undefined" ? "undefined" : _typeof(i)) == "object" ? typeof i.handleEvent == "function" && i.handleEvent(u) : i.call(e, u);if (u.stoppedImmediatePropagation) break;
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
        o = Object.defineProperty || function (e, t, n) {
      e[t] = n.value;
    },
        u = Object.defineProperties || function (t, n) {
      for (var r in n) {
        if (f.call(n, r)) try {
          o(t, r, n[r]);
        } catch (i) {
          e.console && console.log(r + " failed on object:", t, i.message);
        }
      }
    },
        a = Object.getOwnPropertyDescriptor,
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
        if (typeof t != "function" && (typeof t === "undefined" ? "undefined" : _typeof(t)) != "object") return;var r = this,
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
        if (typeof t != "function" && (typeof t === "undefined" ? "undefined" : _typeof(t)) != "object") return;var r = this,
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
  inherits(ReactBEM, _React$Component);

  function ReactBEM(props) {
    var _ref;

    classCallCheck(this, ReactBEM);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = ReactBEM.__proto__ || Object.getPrototypeOf(ReactBEM)).call.apply(_ref, [this, props].concat(args)));

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

  createClass(ReactBEM, [{
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
        for (var _iterator = componentTree[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  inherits(Error, _ReactBEM);

  function Error() {
    classCallCheck(this, Error);
    return possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  createClass(Error, [{
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
  inherits(InputField, _ReactBEM);

  function InputField() {
    var _ref;

    classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args)));

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


  createClass(InputField, [{
    key: 'saveResponseAndJumpToQuestion',
    value: function () {
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee(response) {
        var _this2 = this;

        var jumpDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'next';
        var previouslyCompletedState, err, animDuration;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _ref3 = asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getResponse();
        var err;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _ref4 = asyncToGenerator(regeneratorRuntime.mark(function _callee3(message) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
  inherits(TextInput, _InputField);

  function TextInput() {
    var _ref;

    classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args)));

    _this.render = _this.render.bind(_this);
    _this.inputEl = null; // To be set by subclasses

    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    _this.changedSinceLastUpdate = false;

    /** @override */
    _this.bemClass = _this.modulePrefix + '_TextInput';
    return _this;
  }

  createClass(TextInput, [{
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
  inherits(NumberBox, _TextInput);
  createClass(NumberBox, [{
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

    classCallCheck(this, NumberBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = NumberBox.__proto__ || Object.getPrototypeOf(NumberBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'tel';
    return _this;
  }

  return NumberBox;
}(TextInput);

var numberRegex = /^[0-9]+$/;

var NumberBox$1 = function (_TextInput) {
  inherits(NumberBox, _TextInput);
  createClass(NumberBox, [{
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

    classCallCheck(this, NumberBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = NumberBox.__proto__ || Object.getPrototypeOf(NumberBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'email';
    return _this;
  }

  return NumberBox;
}(TextInput);

/* RFC822 regex. see http://badsyntax.co/post/javascript-email-validation-rfc822 */
var emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

var EmailBox = function (_TextInput) {
  inherits(EmailBox, _TextInput);
  createClass(EmailBox, [{
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

    classCallCheck(this, EmailBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = EmailBox.__proto__ || Object.getPrototypeOf(EmailBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'email';
    return _this;
  }

  return EmailBox;
}(TextInput);

var TextBox = function (_TextInput) {
  inherits(TextBox, _TextInput);

  function TextBox() {
    var _ref;

    classCallCheck(this, TextBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'input';
    _this.type = 'text';
    return _this;
  }

  return TextBox;
}(TextInput);

var TextArea = function (_TextInput) {
  inherits(TextArea, _TextInput);

  function TextArea() {
    var _ref;

    classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args)));

    _this.inputEl = 'textarea';
    // TODO: How to use this.bemSubComponent() corecctly?
    _this.className = 'fl-if_TextAreaInput-input';
    return _this;
  }

  return TextArea;
}(TextInput);

var OptionsInput = function (_InputField) {
  inherits(OptionsInput, _InputField);

  function OptionsInput() {
    var _ref;

    classCallCheck(this, OptionsInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = OptionsInput.__proto__ || Object.getPrototypeOf(OptionsInput)).call.apply(_ref, [this].concat(args)));

    _this.render = _this.render.bind(_this);
    _this.generateOptions = _this.generateOptions.bind(_this);

    /** @override */
    _this.bemClass = _this.modulePrefix + '_OptionsInput';
    return _this;
  }

  createClass(OptionsInput, [{
    key: 'keyPrev',
    value: function keyPrev() {
      var container = ReactDOM.findDOMNode(this);
      var options = Array.from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex - 1]) {
        this.props.appControl.focus(options[focusedIndex - 1]);
      } else {
        get$1(OptionsInput.prototype.__proto__ || Object.getPrototypeOf(OptionsInput.prototype), 'keyPrev', this).call(this);
      }
    }
  }, {
    key: 'keyNext',
    value: function keyNext() {
      var container = ReactDOM.findDOMNode(this);
      var options = Array.from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex + 1]) {
        this.props.appControl.focus(options[focusedIndex + 1]);
      } else {
        get$1(OptionsInput.prototype.__proto__ || Object.getPrototypeOf(OptionsInput.prototype), 'keyNext', this).call(this);
      }
    }
  }, {
    key: 'keySelect',
    value: function keySelect() {
      var container = ReactDOM.findDOMNode(this);
      var options = Array.from(container.querySelectorAll('.' + globals.FOCUS_CLASS));
      var focusedIndex = options.findIndex(function (p) {
        return p === document.activeElement;
      });

      if (options[focusedIndex]) {
        options[focusedIndex].click();
      } else {
        get$1(OptionsInput.prototype.__proto__ || Object.getPrototypeOf(OptionsInput.prototype), 'keySelect', this).call(this);
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
  inherits(RadioButtons, _OptionsInput);

  function RadioButtons() {
    classCallCheck(this, RadioButtons);
    return possibleConstructorReturn(this, (RadioButtons.__proto__ || Object.getPrototypeOf(RadioButtons)).apply(this, arguments));
  }

  createClass(RadioButtons, [{
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
  inherits(Checkboxes, _OptionsInput);

  function Checkboxes() {
    var _ref;

    classCallCheck(this, Checkboxes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Checkboxes.__proto__ || Object.getPrototypeOf(Checkboxes)).call.apply(_ref, [this].concat(args)));

    _this.checkboxClick = _this.checkboxClick.bind(_this);
    return _this;
  }

  /**
   * @override
   * @method getResponse
   * @return {Array<Boolean>} Each index corresponds to an option index
   * selection value.
   */


  createClass(Checkboxes, [{
    key: 'getResponse',
    value: function getResponse() {
      if (Array.isArray(this.props.config.answer)) {
        return Array.from(this.props.config.answer);
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

var Dropdown = function (_OptionsInput) {
  inherits(Dropdown, _OptionsInput);

  function Dropdown() {
    var _ref;

    classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args)));

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


  createClass(Dropdown, [{
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
        var disabled = disabledIndexes.includes(index);
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
        _extends({
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
  inherits(FormField, _ReactBEM);

  function FormField() {
    var _ref;

    classCallCheck(this, FormField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = FormField.__proto__ || Object.getPrototypeOf(FormField)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  createClass(FormField, [{
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
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var response, error;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
  inherits(NavigationBar, _ReactBEM);

  function NavigationBar() {
    classCallCheck(this, NavigationBar);
    return possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  createClass(NavigationBar, [{
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

var clone = (function (a) {
  return JSON.parse(JSON.stringify(a));
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
    classCallCheck(this, AnimationManager);

    this.animations = {};
  }

  /**
   * Cancels a scheduled animation frame
   * @public
   * @method cancel
   * @param  {String} animationName Animation name set with scheduleAnimation
   * @return {void}
   */


  createClass(AnimationManager, [{
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

  return new Promise(function (resolve, reject) {
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
  inherits(SubmitButton, _InputField);

  function SubmitButton() {
    var _ref;

    classCallCheck(this, SubmitButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).call.apply(_ref, [this].concat(args)));

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

  createClass(SubmitButton, [{
    key: 'onClick',
    value: function () {
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var errorFields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
  inherits(FormUI, _ReactBEM);

  function FormUI() {
    var _ref;

    classCallCheck(this, FormUI);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // private
    var _this = possibleConstructorReturn(this, (_ref = FormUI.__proto__ || Object.getPrototypeOf(FormUI)).call.apply(_ref, [this].concat(args)));

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

    _this.appControl = Object.assign(_this.props.appControl, {
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


  createClass(FormUI, [{
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
      var formFields = [].concat(toConsumableArray(this.state.ui.questions), [this.state.ui.submitButton]);
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
      var _ref2 = asyncToGenerator(regeneratorRuntime.mark(function _callee(prevNext) {
        var next, formFields, activeKey, activeIndex, changedIndex, newActiveIndex, newActiveKey, node, focusEl, moduleJustLoaded;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      var _ref3 = asyncToGenerator(regeneratorRuntime.mark(function _callee2(key) {
        var node, viewBox, viewBoxheight, distanceFromTop, targetScroll, animationDuration, focusEl;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
      var _ref4 = asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var errorFields, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, q, questionReactEl, err;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                errorFields = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 4;
                _iterator = this.props.config[Symbol.iterator]();

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
      var _ref5 = asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var errorFields;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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

      return new Promise(function (resolve) {
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
        for (var _iterator2 = ui.questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
      var _ref6 = asyncToGenerator(regeneratorRuntime.mark(function _callee5(key, message) {
        var _this5 = this;

        var ui, field;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
                return new Promise(function (resolve) {
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
  inherits(Form, _ReactBEM);

  function Form() {
    var _ref;

    classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // private
    var _this = possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args)));

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


  createClass(Form, [{
    key: 'generateInitialState',
    value: function generateInitialState(initialConfig) {
      var customComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var config = initialConfig.map(function (q) {
        var customConstructor = customComponents.find(function (c) {
          return c.type === q.type;
        });
        return customConstructor ? customConstructor.initialState(q) : q;
      }).map(function (q) {
        return Object.assign({}, q, {
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

      return new Promise(function (resolve) {
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
