define(['react-dom', 'react'], function (ReactDOM, React) { 'use strict';

ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
React = 'default' in React ? React['default'] : React;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ie8Polyfills = createCommonjsModule(function (module) {
  /*! (C) WebReflection Mit Style License */
  (function (e) {
    function w(e, t, n, r) {
      for (var i, s, o = n.slice(), u = x(t, e), a = 0, f = o.length; a < f; a++) {
        i = o[a], typeof i == "object" ? typeof i.handleEvent == "function" && i.handleEvent(u) : i.call(e, u);if (u.stoppedImmediatePropagation) break;
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
      var n = e.length;while (n-- && e[n] !== t);return n;
    }function N() {
      if (this.tagName === "BR") return "\n";var e = this.firstChild,
          t = [];while (e) e.nodeType !== 8 && e.nodeType !== 7 && t.push(e.textContent), e = e.nextSibling;return t.join("");
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
      var t;while (t = this.lastChild) this.removeChild(t);e != null && this.appendChild(document.createTextNode(e));
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
      for (var r in n) if (f.call(n, r)) try {
        o(t, r, n[r]);
      } catch (i) {
        e.console && console.log(r + " failed on object:", t, i.message);
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
        b = function (e) {
      return { enumerable: !0, writable: !0, configurable: !0, value: e };
    };S(e.HTMLCommentElement.prototype, l, "nodeValue"), S(e.HTMLScriptElement.prototype, null, "text"), S(c, null, "nodeValue"), S(e.HTMLTitleElement.prototype, null, "text"), o(e.HTMLStyleElement.prototype, "textContent", function (e) {
      return E(function () {
        return e.get.call(this.styleSheet);
      }, function (t) {
        e.set.call(this.styleSheet, t);
      });
    }(a(e.CSSStyleSheet.prototype, "cssText"))), u(l, { textContent: { get: N, set: O }, firstElementChild: { get: function () {
          for (var e = this.childNodes || [], t = 0, n = e.length; t < n; t++) if (e[t].nodeType == 1) return e[t];
        } }, lastElementChild: { get: function () {
          for (var e = this.childNodes || [], t = e.length; t--;) if (e[t].nodeType == 1) return e[t];
        } }, oninput: { get: function () {
          return this._oninput || null;
        }, set: function (e) {
          this._oninput && (this.removeEventListener("input", this._oninput), this._oninput = e, e && this.addEventListener("input", e));
        } }, previousElementSibling: { get: function () {
          var e = this.previousSibling;while (e && e.nodeType != 1) e = e.previousSibling;return e;
        } }, nextElementSibling: { get: function () {
          var e = this.nextSibling;while (e && e.nodeType != 1) e = e.nextSibling;return e;
        } }, childElementCount: { get: function () {
          for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += t[n].nodeType == 1);return e;
        } }, addEventListener: b(function (e, t, n) {
        if (typeof t != "function" && typeof t != "object") return;var r = this,
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
              d[i] = !1;while (v.hasChildNodes()) v.removeChild(v.firstChild);
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
        if (typeof t != "function" && typeof t != "object") return;var r = this,
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
      }), pageX: { get: A("X") }, pageY: { get: A("Y") } }), u(e.HTMLDocument.prototype, { defaultView: { get: function () {
          return this.parentWindow;
        } }, textContent: { get: function () {
          return this.nodeType === 11 ? N.call(this) : null;
        }, set: function (e) {
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
            r = function (e, t) {
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
      for (n = 0; n < t.length; n++) document.createElement(t[n]);e.length || document.createStyleSheet(""), e[0].addRule(t.join(","), "display:block;");
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
    var CustomEvent = function (event, params) {
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
class ReactBEM extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    if (props.cssPrefix) {
      this.bemClass = `${ props.cssPrefix }-${ lowerCaseFirstLetter(this.constructor.name) }`;
    } else {
      this.bemClass = `${ globals.modulePrefix }_${ this.constructor.name }`;
    }

    this.modulePrefix = globals.modulePrefix;
    this.bemState = this.bemState.bind(this);
    this.bemSubComponent = this.bemSubComponent.bind(this);
  }

  bemState(state) {
    return `${ this.bemClass }--${ state }`;
  }

  bemSubComponent(...componentTree) {
    let className = `${ this.bemClass }`;
    for (const componentName of componentTree) {
      className += `-${ componentName }`;
    }
    return className;
  }

  bemSubComponentState(...args) {
    const state = args.pop();
    const subComponentClass = this.bemSubComponent(args);
    const subComponentState = `${ subComponentClass }--${ state }`;
    return subComponentState;
  }
}

function lowerCaseFirstLetter(word) {
  if (word && word.charAt(0)) {
    const wordHead = word.charAt(0).toLowerCase();
    const wordTail = word.slice(1);
    return wordHead + wordTail;
  }
  return '';
}

ReactBEM.propTypes = {
  cssPrefix: React.PropTypes.string
};

class Error$1 extends ReactBEM {

  render() {
    const classes = [this.bemClass];
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
}

function _asyncToGenerator$2(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class InputField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.keyListener = this.keyListener.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.validateResponse = this.validateResponse.bind(this);
    this.saveResponse = this.saveResponse.bind(this);
    this.saveResponseAndJumpToQuestion = this.saveResponseAndJumpToQuestion.bind(this);
    this.isRequired = this.isRequired.bind(this);
    this.keyPrev = this.keyPrev.bind(this);
    this.keyNext = this.keyNext.bind(this);
    this.keySelect = this.keySelect.bind(this);
  }

  /**
   * Saves question response and animates to the next
   * field according to the validation outcome.
   * @method saveResponseAndJumpToQuestion
   * @param  {String} jumpDirection
   * @return {Promise}
   */
  saveResponseAndJumpToQuestion(response, jumpDirection = 'next') {
    var _this = this;

    return _asyncToGenerator$2(function* () {
      const previouslyCompletedState = _this.props.ui.completed;
      yield _this.saveResponse(response);

      // We will not move to the next question if there is an error.
      const err = _this.validateResponse(response);
      if (err) {
        return;
      }

      // Now there will be a render pass and this element will be set to completed
      // we wait for the animation to finish before going to the next question.
      let animDuration = 0;
      if (!previouslyCompletedState && _this.props.ui.completed) {
        animDuration = 500;
      }

      setTimeout(function () {
        return _this.props.appControl.goToField(jumpDirection);
      }, animDuration);
    })();
  }

  // To be overriden by subclasses
  getResponse() {
    return this.props.config.answer;
  }

  /**
   * @private
   * @method isRequired
   * @return {Boolean}
   */
  isRequired() {
    return this.props.config.required;
  }

  /**
   * @private
   * @method validateResponse
   * @param  {Array | String | Int} response
   * @return {String} Returns an error message, if there is an error.
   * If there is no error it returns a falsy value.
   */
  validateResponse(response = this.getResponse()) {
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
  saveResponse(response = this.getResponse()) {
    var _this2 = this;

    return _asyncToGenerator$2(function* () {
      _this2.props.appControl.setQuestionResponse(_this2.props.config.key, response);

      // Show error if there is any
      const err = _this2.validateResponse(response);
      yield _this2.showError(err);

      yield _this2.props.appControl.setQuestionCompleted(_this2.props.config.key, !err);
    })();
  }

  keyListener(e) {
    // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;
    const enter = 13;

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

  keyPrev() {
    const response = this.getResponse();
    this.saveResponseAndJumpToQuestion(response, 'prev');
  }

  keyNext() {
    const response = this.getResponse();
    this.saveResponseAndJumpToQuestion(response, 'next');
  }

  keySelect() {
    this.keyNext();
  }

  showError(message) {
    var _this3 = this;

    return _asyncToGenerator$2(function* () {
      return yield _this3.props.appControl.setFieldError(_this3.props.config.key, message);
    })();
  }
}

InputField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

/**
 * @abstract @class
 */
class TextInput extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.inputEl = null; // To be set by subclasses

    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    this.changedSinceLastUpdate = false;

    /** @override */
    this.bemClass = `${ this.modulePrefix }_TextInput`;
  }

  getResponse() {
    const response = ReactDOM.findDOMNode(this.refs.input).value;
    return response.trim();
  }

  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
    if (this.isRequired() && !response) {
      return 'This field must be completed.';
    }

    return false;
  }

  render() {
    const InputEl = this.inputEl;
    const handleInputChange = () => {
      this.changedSinceLastUpdate = true;
      if (this.props.ui.active) {
        // set incomplete
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }

      if (this.props.ui.error) {
        this.showError(this.validateResponse());
      }
    };

    const handleBlur = () => {
      if (!this.changedSinceLastUpdate) {
        return;
      }
      this.changedSinceLastUpdate = false;
      this.saveResponse();
    };

    return React.createElement(
      'div',
      { className: this.bemClass },
      React.createElement(InputEl, {
        className: `${ this.bemSubComponent('input') } ${ this.className } ${ globals.FOCUS_CLASS }`,
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
}

const telRegex = /^\+?[0-9|\-|\s]{5,15}$/;
class NumberBox extends TextInput {
  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
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

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'tel';
  }
}

const numberRegex = /^[0-9]+$/;
class NumberBox$1 extends TextInput {
  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
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

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'email';
  }
}

/* RFC822 regex. see http://badsyntax.co/post/javascript-email-validation-rfc822 */
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

class EmailBox extends TextInput {
  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
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

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'email';
  }
}

class TextBox extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'text';
  }
}

class TextArea extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'textarea';
    // TODO: How to use this.bemSubComponent() corecctly?
    this.className = 'fl-if_TextAreaInput-input';
  }
}

class OptionsInput extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.generateOptions = this.generateOptions.bind(this);

    /** @override */
    this.bemClass = `${ this.modulePrefix }_OptionsInput`;
  }

  keyPrev() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${ globals.FOCUS_CLASS }`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex - 1]) {
      this.props.appControl.focus(options[focusedIndex - 1]);
    } else {
      super.keyPrev();
    }
  }

  keyNext() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${ globals.FOCUS_CLASS }`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex + 1]) {
      this.props.appControl.focus(options[focusedIndex + 1]);
    } else {
      super.keyNext();
    }
  }

  keySelect() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${ globals.FOCUS_CLASS }`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex]) {
      options[focusedIndex].click();
    } else {
      super.keySelect();
    }
  }

  /**
   * To be overriden by subclasses
   * @method generateOptions
   * @param  {Array} optionsArray
   * @return {Array<ReactElement>}
   */
  generateOptions(options) {
    throw new Error('Should be implemented by subclass');
  }

  render() {
    const options = this.generateOptions(this.props.config.options);

    return React.createElement(
      'div',
      {
        className: this.bemClass,
        onKeyDown: this.keyListener
      },
      options
    );
  }
}

class RadioButtons extends OptionsInput {
  /**
   * @method getResponse
   * @return {Int} Response index
   */
  getResponse() {
    // Even though radio buttons only have one response, all option
    // input elements hold their responses in an array.
    const anwerArray = this.props.config.answer;
    return anwerArray ? anwerArray[0] : undefined;
  }

  validateResponse(response) {
    if (!this.isRequired() || this.props.config.options[response] !== undefined) {
      return null;
    }
    return 'You must choose at lease one option';
  }

  generateOptions(options) {
    return options.map((option, index) => {
      const optionClasses = [this.bemSubComponent('option'), this.bemSubComponent('radio'), globals.FOCUS_CLASS];

      const response = this.getResponse();
      if (index === response) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return React.createElement(
        'div',
        {
          className: optionClasses.join(' '),
          key: `${ this.props.config.key }${ index }`,
          onClick: () => this.saveResponseAndJumpToQuestion([index], 'next'),
          tabIndex: '0'
        },
        option
      );
    });
  }
}

class Checkboxes extends OptionsInput {
  constructor(...args) {
    super(...args);
    this.checkboxClick = this.checkboxClick.bind(this);
  }

  /**
   * @override
   * @method getResponse
   * @return {Array<Boolean>} Each index corresponds to an option index
   * selection value.
   */
  getResponse() {
    if (Array.isArray(this.props.config.answer)) {
      return Array.from(this.props.config.answer);
    }

    // Return array of same size as options but all elements as false
    return this.props.config.options.map(() => false);
  }

  /**
   * @override
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */
  validateResponse(response = this.getResponse()) {
    if (!this.isRequired()) {
      return null;
    }
    if (!Array.isArray(response)) {
      return 'This field must be filled';
    }

    assert(response.length === this.props.config.options.length, `Invalid response array. Response of length ${ response.length }
       and options with length ${ this.props.config.options.length }`);

    // All values are boolean
    assert(response.reduce((valid, r) => valid && typeof r === 'boolean', true), 'Response array has non-boolean values');

    // If it is required, it must contain at least on checked opiton;
    const checkedOptionCount = response.filter(r => !!r).length;

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
  checkboxClick(index) {
    const selectedOptions = this.getResponse();
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
  generateOptions(options) {
    const responses = this.getResponse();
    return options.map((option, index) => {
      const optionClasses = [this.bemSubComponent('option'), this.bemSubComponent('checkbox'), globals.FOCUS_CLASS];

      if (responses[index]) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return React.createElement(
        'div',
        {
          className: optionClasses.join(' '),
          key: `${ this.props.config.key }${ index }`,
          onClick: () => this.checkboxClick(index),
          tabIndex: '0'
        },
        option
      );
    });
  }
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Dropdown extends OptionsInput {
  constructor(...args) {
    super(...args);

    this.onChange = this.onChange.bind(this);
    /** @override */
    this.bemClass = `${ this.bemClass } fl-if_Dropdown`;
  }

  /**
   * @override
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */
  validateResponse(response = this.getResponse()) {
    if (this.isRequired() && !response) {
      return 'Please choose an option';
    }

    return false;
  }

  onChange() {
    const selectedOption = this.refs.selectionBox.selectedIndex;
    this.saveResponseAndJumpToQuestion(selectedOption, 'next');
  }

  /**
   * @override
   * @method generateOptions
   * @param  {Array<String>} options
   * @return {Array<ReactDOMElements}
   */
  generateOptions(options) {
    const disabledIndexes = this.props.config.disabledIndexes || [];
    const optionEls = options.map((option, index) => {
      const disabled = disabledIndexes.includes(index);
      return React.createElement(
        'option',
        {
          key: `${ this.props.config.key }${ index }`,
          tabIndex: '0',
          disabled: disabled
        },
        option
      );
    });

    const classes = [this.bemSubComponent('option'), globals.FOCUS_CLASS].join(' ');

    const additionalProps = {};

    // If no answer was given, let's force the first option as selected
    // because it might be a placeholder, which is set to disabled and would
    // normally not be selected.
    const currResponse = this.getResponse();
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
}

function _asyncToGenerator$1(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const inputTypes = {
  TextBox,
  TextArea,
  RadioButtons,
  Checkboxes,
  Dropdown,
  EmailBox,
  NumberBox: NumberBox$1,
  TelephoneBox: NumberBox
};

class FormField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleClick() {
    if (!this.props.ui.active) {
      this.props.appControl.setFieldActive(this.props.config.key);
    }
  }

  /**
   * Shows error and returns error message
   * @method validate
   * @return {String} Error message
   */
  validate() {
    var _this = this;

    return _asyncToGenerator$1(function* () {
      const response = _this.refs.input.getResponse();
      const error = _this.refs.input.validateResponse(response);
      if (error) {
        yield _this.refs.input.showError(error);
      }
      return error;
    })();
  }

  render() {
    // assert(
    //   typeof inputTypes[this.props.config.type] !== 'undefined',
    //   `Invalid input type: ${this.props.config.type}`
    // );

    const classNames = [this.bemClass];
    if (this.props.ui.active) {
      classNames.push(this.bemState('active'));
    }
    if (this.props.ui.completed) {
      classNames.push(this.bemState('completed'));
    }

    const inputProps = {
      ui: this.props.ui,
      config: this.props.config,
      appControl: this.props.appControl,
      key: this.props.config.key,
      ref: 'input'
    };

    const errorMsg = this.props.ui.error;
    const error = errorMsg ? React.createElement(
      Error$1,
      { speechBubble: true },
      ' ',
      errorMsg,
      ' '
    ) : null;

    // We want to support new custom elements
    const reactElement = inputTypes[this.props.config.type] || inputTypes[this.props.config.primitiveType];

    return React.createElement(
      'div',
      { className: classNames.join(' '), onClick: this.handleClick },
      React.createElement(
        'p',
        { className: this.bemSubComponent('legend') },
        React.createElement('i', { className: `fa fa-check-circle ${ this.bemSubComponent('okIcon') }` }),
        this.props.config.title
      ),
      React.createElement(reactElement, inputProps),
      error
    );
  }
}

FormField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

class NavigationBar extends ReactBEM {

  render() {
    const completed = this.props.ui.questions.reduce((sum, q) => {
      return q.completed ? sum + 1 : sum;
    }, 0);

    const activeQuestionIndex = this.props.ui.questions.findIndex(q => q.active);
    const inactiveStyle = { pointerEvents: 'none', opacity: .5 };
    const prevBtnStyle = activeQuestionIndex === 0 ? inactiveStyle : {};
    const nextBtnStyle = activeQuestionIndex === -1 ? inactiveStyle : {};

    const percentageCompleted = Math.floor(completed * 100 / this.props.ui.questions.length);

    const btnClick = (e, nextPrev) => {
      // Prevent button click from dismissing the keyboard on phones.
      e.preventDefault();
      e.stopPropagation();
      this.props.appControl.goToField(nextPrev);
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
            style: { width: `${ percentageCompleted }%` }
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
            onClick: e => btnClick(e, 'prev'),
            style: prevBtnStyle
          },
          'Prev'
        ),
        React.createElement(
          'button',
          {
            className: this.bemSubComponent('button'),
            onClick: e => btnClick(e, 'next'),
            style: nextBtnStyle
          },
          'Next'
        )
      )
    );
  }
}

NavigationBar.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired
};

var clone = (a => JSON.parse(JSON.stringify(a)));

/**
 * @public
 * @method throttle
 * @param  {Function} fn
 * @param  {Int} threshhold - Number of milliseconds
 * @param  {Object} scope - this object
 * @param  {Boolean} defer - whether to execute the callback after the delay has finished
 * @return {Function}
 */
function throttle(fn, threshhold = 250, scope, defer = true) {
  let last;
  let deferTimer;
  return (...args) => {
    const context = scope || this;

    const now = +new Date();
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);

      if (defer) {
        deferTimer = setTimeout(() => {
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
class AnimationManager {
  constructor() {
    this.animations = {};
  }

  /**
   * Cancels a scheduled animation frame
   * @public
   * @method cancel
   * @param  {String} animationName Animation name set with scheduleAnimation
   * @return {void}
   */
  cancel(animationName) {
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
  schedule(animationFunction, animationName = Math.random().toString(), frameDelay = 0) {
    this.cancel(animationName);
    if (frameDelay > 0) {
      this.animations[animationName] = requestAnimationFrame(() => this.schedule(animationFunction, animationName, frameDelay - 1));
    } else {
      this.animations[animationName] = requestAnimationFrame(animationFunction);
    }
  }
}

/* eslint-disable no-param-reassign */

const animations = new AnimationManager();

/**
 * @public
 * @method scrollSlide
 * @param  {HTMLElement} container - Element whose scroll position will be changed
 * @param  {Int} targetScroll - Target scroll position;
 * @param  {Int} duration - Duration in milliseconds
 * @return {Promise} - To be fulfilled when transition ends
 */
function scrollSlide(container, targetScroll, duration = 500) {
  const initialScroll = container.scrollTop;
  const scrollDistance = targetScroll - initialScroll;

  // fps * duration / millisecondsPerSecond
  const totalFrames = 60 * duration / 1000;

  let f = 0; // frame number

  const doSliding = callback => {
    // scroll progress percentage from 0 to 1
    const p = f / totalFrames;

    // ease-in-out formula
    const displacementPercentage = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;

    const displacement = scrollDistance * displacementPercentage;
    container.scrollTop = initialScroll + displacement;

    f += 1;

    if (f < totalFrames) {
      animations.schedule(() => doSliding(callback), 'scrollSlide', 0);
    } else {
      callback();
    }
  };

  return new Promise((resolve, reject) => {
    let resolved = false;
    doSliding(() => {
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

function _asyncToGenerator$3(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class SubmitButton extends InputField {
  constructor(...args) {
    super(...args);
    this.saveResponse = () => null;
    this.getResponse = () => null;
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.initialState = {
      error: '',
      text: 'Submit'
    };

    this.state = this.initialState;
  }

  onClick() {
    var _this = this;

    return _asyncToGenerator$3(function* () {
      // If there is already an error being shown.
      if (_this.state.error) {
        _this.props.appControl.slideToFirstWithError();
        return;
      }

      const errorFields = yield _this.props.validateAllFields();
      if (errorFields.length > 0) {
        _this.setState({
          error: `${ errorFields.length } answer${ errorFields.length > 1 ? 's' : '' } need completing`,
          text: 'Review'
        });
      } else {
        _this.props.appControl.triggerSubmit();
      }
    })();
  }

  keySelect() {
    this.onClick();
  }

  keyPrev() {
    this.props.appControl.goToField('prev');
  }

  keyNext() {
    return;
  }

  onBlur() {
    this.setState(this.initialState);
  }

  render() {
    const buttonClass = this.props.ui.active ? `${ this.bemClass } ${ this.bemState('active') }` : `${ this.bemClass }`;

    const error = this.state.error ? React.createElement(
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
          className: `${ this.bemSubComponent('button') } ${ globals.FOCUS_CLASS }`,
          ref: 'button',
          onClick: this.onClick,
          onBlur: this.onBlur,
          tabIndex: '0'
        },
        this.state.text
      )
    );
  }
}

SubmitButton.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
  validateAllFields: React.PropTypes.func.isRequired
};

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const IS_TOUCH_DEVICE = mobileCheck();
// Takes care of the UI part of things.
class FormUI extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.onWheel = this.onWheel.bind(this);
    this.onScroll = throttle(this.onScroll.bind(this), 250, this, true);
    this.touchEnd = this.touchEnd.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.getFieldNode = this.getFieldNode.bind(this);
    this.getFormFields = this.getFormFields.bind(this);
    this.validateAllFields = this.validateAllFields.bind(this);
    this.setFieldActive = this.setFieldActive.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getActiveFieldKey = this.getActiveFieldKey.bind(this);
    this.slideFieldToCenter = this.slideFieldToCenter.bind(this);
    this.slideToFirstWithError = this.slideToFirstWithError.bind(this);
    this.processTouchDisplacement = this.processTouchDisplacement.bind(this);
    this.triggerSubmit = this.triggerSubmit.bind(this);

    // public
    this.focus = this.focus.bind(this);
    this.goToField = throttle(this.goToField.bind(this), 250, this, false);
    this.setFieldError = this.setFieldError.bind(this);
    this.setQuestionCompleted = this.setQuestionCompleted.bind(this);

    // instance globals
    this.initialTouchY = null;
    this.animatingScroll = false;
    this.animations = new AnimationManager();

    this.appControl = Object.assign(this.props.appControl, {
      focus: this.focus,
      goToField: this.goToField,
      setQuestionCompleted: this.setQuestionCompleted,
      setFieldActive: this.setFieldActive,
      setFieldError: this.setFieldError,
      triggerSubmit: this.triggerSubmit,
      slideToFirstWithError: this.slideToFirstWithError
    });

    this.state = this.generateInitialState(this.props.config);
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @method importConfig
   * @return {Object}
   */
  generateInitialState() {
    const createUiObj = objKey => {
      return { key: objKey, active: false, complete: false };
    };

    // Create a ui object to control questions
    const ui = {};
    ui.submitButton = createUiObj('submit');
    ui.questions = this.props.config.map(q => createUiObj(q.key));
    return { ui };
  }

  /**
   * Called once when the component is created.
   * @private
   * @method componentDidMount
   * @return {void}
   */
  componentDidMount() {
    // Make first question active.
    this.animations.schedule(() => this.goToField('next'), '', 30);

    const centerActiveQuestion = () => {
      const active = this.getActiveFieldKey();
      this.slideFieldToCenter(active);
    };

    window.addEventListener('resize', () => this.animations.schedule(centerActiveQuestion, 'formResize', 20));
  }

  /**
   * Returns an array containing all form questions and the submit button.
   * @method getFormFields
   * @return {Array}
   */
  getFormFields() {
    const formFields = [...this.state.ui.questions, this.state.ui.submitButton];
    return formFields;
  }

  /**
   * @private
   * @return {String}
   */
  getActiveFieldKey() {
    const formFields = this.getFormFields();
    const active = formFields.find(f => f.active === true);
    return active ? active.key : undefined;
  }

  /**
   * @private
   * @method getFieldNode
   * @param  {String} key
   * @return {HTMLElement}
   */
  getFieldNode(key) {
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
  focus(element) {
    if (!element) {
      return;
    }
    const currScrollPosition = this.refs.questionsViewBox.scrollTop;
    const focus = () => {
      element.focus();
      this.refs.questionsViewBox.scrollTop = currScrollPosition;
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
  goToField(prevNext) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const next = prevNext === 'next';
      const formFields = _this.getFormFields();
      const activeKey = _this.getActiveFieldKey();
      const activeIndex = formFields.findIndex(function (f) {
        return f.key === activeKey;
      });
      const changedIndex = activeIndex + (next ? +1 : -1);
      const newActiveIndex = Math.max(0, Math.min(formFields.length - 1, changedIndex));
      const newActiveKey = formFields[newActiveIndex].key;
      _this.setFieldActive(newActiveKey);

      yield _this.slideFieldToCenter(newActiveKey);
      const node = _this.getFieldNode(newActiveKey);
      const focusEl = node.querySelector(`.${ globals.FOCUS_CLASS }`);

      // On mobile devices we don't focus on input elements because
      // the keyboard keeps changing the screen width, which can be quite annoying.
      const moduleJustLoaded = activeKey === undefined;
      if (moduleJustLoaded || IS_TOUCH_DEVICE && focusEl.nodeName === 'INPUT') {
        return;
      }
      _this.focus(focusEl);
    })();
  }

  /**
   * @private
   */
  slideFieldToCenter(key) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.animatingScroll = true;
      const node = _this2.getFieldNode(key);
      assert(node, `No field found with key: ${ key }`);
      const viewBox = _this2.refs.questionsViewBox;

      const viewBoxheight = viewBox.clientHeight;
      const distanceFromTop = Math.max(0, (viewBoxheight - node.clientHeight) / 2);

      const targetScroll = node.offsetTop - distanceFromTop;
      const animationDuration = 160;

      try {
        yield scrollSlide(viewBox, targetScroll, animationDuration);
        const focusEl = node.querySelector(`.${ globals.FOCUS_CLASS }`);
        if (focusEl) {
          // this.focus(focusEl);
        }
      } catch (e) {
        // nothing
      } finally {
        _this2.animatingScroll = false;
      }
    })();
  }

  /**
   * Used by submit button. Shows error and returns arror ammount
   * @public
   * @method validateAllFields
   * @return {Array<String>}  Object with keys of fields with error
   */
  validateAllFields() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      const errorFields = [];

      for (const q of _this3.props.config) {
        const questionReactEl = _this3.refs[q.key];
        const err = yield questionReactEl.validate();
        if (err) {
          errorFields.push(q.key);
        }
      }

      return errorFields;
    })();
  }

  /**
   * @method slideToFirstWithError
   * @return {Promise}
   */
  slideToFirstWithError() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      const errorFields = yield _this4.validateAllFields();
      if (errorFields.length > 0) {
        _this4.setFieldActive(errorFields[0]);
        _this4.slideFieldToCenter(errorFields[0]);
      }
    })();
  }

  triggerSubmit() {
    const formElement = ReactDOM.findDOMNode(this);
    const submitEvent = new CustomEvent('submit', {
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
  setQuestionCompleted(questionKey, completed) {
    const qIndex = this.state.ui.questions.findIndex(q => q.key === questionKey);
    assert(qIndex !== -1, `Did not find question with key: ${ questionKey }`);

    const ui = clone(this.state.ui);
    ui.questions[qIndex].completed = !!completed;

    return new Promise(resolve => this.setState({ ui }, resolve));
  }

  /**
   * @private
   * @method setFieldActive
   * @param  {String} index
   */
  setFieldActive(key) {
    assert(this.refs[key], `Invalid key: ${ key }`);
    const ui = clone(this.state.ui);

    // set everyone not active
    ui.submitButton.active = false;
    for (const q of ui.questions) {
      q.active = false;
    }

    if (key === ui.submitButton.key) {
      ui.submitButton.active = true;
    } else {
      const questionIndex = ui.questions.findIndex(q => q.key === key);
      assert(questionIndex !== -1, `Invalid question index ${ questionIndex }`);
      ui.questions[questionIndex].active = true;
    }

    this.setState({ ui });
  }

  setFieldError(key, message) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      assert(_this5.refs[key], `Invalid key: ${ key }`);
      const ui = clone(_this5.state.ui);
      const field = ui.questions.find(function (q) {
        return q.key === key;
      });
      field.error = message;

      yield new Promise(function (resolve) {
        return _this5.setState({ ui }, resolve);
      });
    })();
  }

  // ==============================================================
  //                     EVENT HANDLERS
  // ==============================================================
  /**
   * Scroll envent on questionsViewBox
   * @param  {Event} e
   */
  onScroll() {
    if (this.animatingScroll) {
      return;
    }

    const formFields = this.getFormFields();
    const formNodes = formFields.map(f => this.getFieldNode(f.key));
    const viewBoxHeight = this.refs.questionsViewBox.clientHeight;
    const viewBoxScroll = this.refs.questionsViewBox.scrollTop;
    const viewBoxCenter = viewBoxScroll + viewBoxHeight / 2;

    function distanceFromCenter(element) {
      const elementCenter = element.clientHeight / 2 + element.offsetTop;
      const elementDistance = viewBoxCenter - elementCenter;
      const distance = Math.abs(elementDistance);
      return distance;
    }

    let smallestDistance = distanceFromCenter(formNodes[0]);
    const indexOfCenterNode = formNodes.reduce((closestIdx, node, nodeIdx) => {
      const nodeDistance = distanceFromCenter(formNodes[nodeIdx]);
      const closestNodeIndex = nodeDistance < smallestDistance ? nodeIdx : closestIdx;
      smallestDistance = nodeDistance < smallestDistance ? nodeDistance : smallestDistance;
      return closestNodeIndex;
    }, 0);

    const closestKey = formFields[indexOfCenterNode].key;
    this.setFieldActive(closestKey);
  }

  /**
   * Wheel envent on questionsViewBox
   * @param  {Event} e
   */
  onWheel(e) {
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

    const wheelDelta = e.deltaY;
    this.animations.schedule(() => {
      if (wheelDelta > 0) {
        this.goToField('next');
      } else if (wheelDelta < 0) {
        this.goToField('prev');
      }
    }, 'scroll', 0);
  }

  /**
   * Touch envent on questionsViewBox
   * @param  {Event} e
   */
  touchStart(e) {
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
  touchMove(e) {
    e.preventDefault();
    // Track Y
    this.currY = e.changedTouches[0].pageY;
  }

  /**
   * Touch envent on questionsViewBox
   * @param  {Event} e
   */
  touchEnd() {
    this.animations.cancel('touchScroll');
  }

  /**
   * @param  {Event} e
   * @return {void}
   */
  processTouchDisplacement() {
    const maxTouchSpeed = 0.9; // px/ms
    const maxTotalDisplacement = 130;

    const displacement = this.lastMoveY - this.currY;
    const currTime = new Date();
    // Make sure we never divide by 0
    const timeElapsed = Math.max(1, currTime - this.lastMoveTime);
    const touchSpeed = displacement / timeElapsed;
    this.lastMoveY = this.currY;
    this.lastMoveTime = new Date();

    const totalDisplacement = Math.abs(this.initialTouchY - this.currY);
    if (Math.abs(touchSpeed) < maxTouchSpeed && totalDisplacement < maxTotalDisplacement) {
      const newScrollValue = this.lastMoveScrollValue + displacement;
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

  render() {
    const questions = this.props.config.map((q, index) => {
      return React.createElement(FormField, {
        config: q,
        ui: this.state.ui.questions[index],
        appControl: this.appControl,
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
}

FormUI.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired
};

class Form extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.generateInitialState = this.generateInitialState.bind(this);
    this.exportConfig = this.exportConfig.bind(this);

    // public
    this.setQuestionResponse = this.setQuestionResponse.bind(this);

    this.state = this.generateInitialState(this.props.config);
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
  generateInitialState(initialConfig, customComponents = []) {
    const config = initialConfig.map(q => {
      const customConstructor = customComponents.find(c => c.type === q.type);
      return customConstructor ? customConstructor.initialState(q) : q;
    }).map(q => Object.assign({}, q, {
      answer: null,
      key: String(Date.now() + Math.random())
    }));

    return { config };
  }

  exportConfig() {
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
  setQuestionResponse(questionKey, answerValue) {
    const qIndex = this.state.config.findIndex(q => q.key === questionKey);
    assert(qIndex !== -1, `Did not find question with key: ${ questionKey }`);

    const newConfig = clone(this.state.config);
    newConfig[qIndex].answer = answerValue;

    return new Promise(resolve => this.setState({ config: newConfig }, resolve));
  }

  render() {
    const appControl = {
      setQuestionResponse: this.setQuestionResponse,
      exportConfig: this.exportConfig
    };

    return React.createElement(FormUI, { config: this.state.config, appControl: appControl });
  }
}

Form.PropTypes = {
  config: React.PropTypes.object.isRequired,
  customComponents: React.PropTypes.array
};

/* globals xController */
// import 'babel-polyfill'; // Removing to avoid conflict in squarespace
const flInteractiveForm = {
  create: (config, customComponents) => {
    assert(config && config.length !== undefined, 'The first argument must be a configuration array');

    const targetElement = document.createElement('div');
    targetElement.className = 'fl-if';
    ReactDOM.render(React.createElement(Form, { config: config, customComponents: customComponents }), targetElement);

    return targetElement;
  }
};

return flInteractiveForm;

});

//# sourceMappingURL=react-main.js.map
