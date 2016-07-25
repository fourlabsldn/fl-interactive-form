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
    key: "cancel",
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
    key: "schedule",
    value: function schedule(animationFunction) {
      var _this = this;

      var animationName = arguments.length <= 1 || arguments[1] === undefined ? Math.random().toString() : arguments[1];
      var frameDelay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

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

var FOCUS_CLASS = 'js-slv-focus';

var QuestionsNavigator = function () {
  function QuestionsNavigator(container, questionsClass) {
    classCallCheck(this, QuestionsNavigator);

    this.questionsClass = questionsClass;
    this.activeClass = this.questionsClass + '--active';
    this.container = container;
    this.questions = Array.from(container.querySelectorAll('.' + questionsClass));
    this.animations = new AnimationManager();
    Object.preventExtensions(this);

    this.setActive(this.questions[2]);
  }

  createClass(QuestionsNavigator, [{
    key: 'getTop',
    value: function getTop(el) {
      return el.getBoundingClientRect().top;
    }
  }, {
    key: 'setActive',
    value: function setActive(question) {
      var _this = this;

      var questionIndex = this.questions.findIndex(function (q) {
        return q === question;
      });
      assert(questionIndex !== -1, 'Question not found in questions array.');

      var questionTop = this.getTop(question);
      this.questions.forEach(function (q) {
        return q.classList.remove(_this.activeClass);
      });
      question.classList.add(this.activeClass);

      // Focus element but keep scroll position
      var focusEl = question.querySelector('.' + FOCUS_CLASS);
      if (focusEl) {
        focusEl.focus();
      }

      // Put scroll position the same position it was before.
      this.container.scrollTop = this.container.scrollTop + this.getTop(question) - questionTop;

      // smoothly scroll into view.
      this.scrollIntoView(question, this.container);
    }
  }, {
    key: 'getFinalScrollPos',
    value: function getFinalScrollPos(el, container) {
      // Let's have some extra displacement to position the question in the middle.
      var extra = Math.max(0, (container.clientHeight - el.clientHeight) / 2) - 20;
      return container.scrollTop + this.getTop(el) - this.getTop(container) - extra;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(el, container) {
      var initialScroll = arguments.length <= 2 || arguments[2] === undefined ? container.scrollTop : arguments[2];

      var _this2 = this;

      var finalScroll = arguments.length <= 3 || arguments[3] === undefined ? this.getFinalScrollPos(el, container) : arguments[3];
      var frameNumber = arguments.length <= 4 || arguments[4] === undefined ? 1 : arguments[4];

      var totalFrames = 30;
      var totalScroll = finalScroll - initialScroll;
      var percentageCompleted = frameNumber / totalFrames;
      var nextPercentage = percentageCompleted * (2 - percentageCompleted);
      container.scrollTop = initialScroll + totalScroll * nextPercentage; // eslint-disable-line no-param-reassign, max-len

      if (frameNumber >= totalFrames) {
        return;
      }
      var animationName = 'scrollIntoView';
      this.animations.schedule(function () {
        return _this2.scrollIntoView(el, container, initialScroll, finalScroll, frameNumber + 1);
      }, animationName);
    }
  }, {
    key: 'getActiveQuestionIndex',
    value: function getActiveQuestionIndex() {
      var active = this.container.querySelector('.' + this.activeClass);
      return this.questions.findIndex(function (q) {
        return q === active;
      });
    }
  }, {
    key: 'setNextQuestionActive',
    value: function setNextQuestionActive() {
      var activeIndex = this.getActiveQuestionIndex();
      if (activeIndex === -1) {
        this.setActive(this.questions[0]);
      } else if (activeIndex === this.questions.length - 1) {
        this.showSubmitButton();
      } else {
        this.setActive(this.questions[activeIndex + 1]);
      }
    }
  }, {
    key: 'setPreviousQuestionActive',
    value: function setPreviousQuestionActive() {
      var activeIndex = this.getActiveQuestionIndex();
      if (activeIndex === -1) {
        this.setActive(this.questions[0]);
        return;
      }
      var newActiveIndex = Math.max(0, activeIndex - 1);
      this.setActive(this.questions[newActiveIndex]);
    }
  }, {
    key: 'showSubmitButton',
    value: function showSubmitButton() {
      console.log('Pretend submit button is showing.');
    }
  }]);
  return QuestionsNavigator;
}();

xController(function (xdiv) {
  var questionsContainer = xdiv.querySelector('.slv-ContactForm-questionsContainer');
  var qn = new QuestionsNavigator(questionsContainer, 'slv-ContactForm-question');

  var nextBtn = xdiv.querySelector('.js-slv-nextQuestion');
  nextBtn.addEventListener('click', function () {
    return qn.setNextQuestionActive();
  });

  var prevBtn = xdiv.querySelector('.js-slv-prevQuestion');
  prevBtn.addEventListener('click', function () {
    return qn.setPreviousQuestionActive();
  });

  return qn;
});

//# sourceMappingURL=slv-contact.js.map
