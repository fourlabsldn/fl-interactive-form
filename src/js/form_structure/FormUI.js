import React from 'react';
import ReactDOM from 'react-dom';
import ReactBEM from '../react_helpers/ReactBEM';
import FormField from '../form_fields/FormField';
import NavigationBar from './NavigationBar';

import clone from '../utils/clone';
import globals from '../utils/globals';
import throttle from '../utils/throttle';
import isMobile from '../utils/isMobile';
import scrollSlide from '../utils/scrollSlide';
import AnimationManager from '../utils/AnimationManager';
import SubmitButton from '../form_fields/input_types/SubmitButton';
import assert from 'fl-assert';

const IS_TOUCH_DEVICE = isMobile();
// Takes care of the UI part of things.
export default class FormUI extends ReactBEM {
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
      slideToFirstWithError: this.slideToFirstWithError,
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
    const createUiObj = (objKey) => {
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

    window.addEventListener(
      'resize',
      () => this.animations.schedule(centerActiveQuestion, 'formResize', 20)
    );
  }

  /**
   * Returns an array containing all form questions and the submit button.
   * @method getFormFields
   * @return {Array}
   */
  getFormFields() {
    const formFields = [
      ... this.state.ui.questions,
      this.state.ui.submitButton,
    ];
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
    if (!element) { return; }
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
  async goToField(prevNext) {
    const next = prevNext === 'next';
    const formFields = this.getFormFields();
    const activeKey = this.getActiveFieldKey();
    const activeIndex = formFields.findIndex(f => f.key === activeKey);
    const changedIndex = activeIndex + (next ? +1 : -1);
    const newActiveIndex = Math.max(0, Math.min(formFields.length - 1, changedIndex));
    const newActiveKey = formFields[newActiveIndex].key;
    this.setFieldActive(newActiveKey);

    await this.slideFieldToCenter(newActiveKey);
    const node = this.getFieldNode(newActiveKey);
    const focusEl = node.querySelector(`.${globals.FOCUS_CLASS}`);

    // On mobile devices we don't focus on input elements because
    // the keyboard keeps changing the screen width, which can be quite annoying.
    const moduleJustLoaded = activeKey === undefined;
    if (moduleJustLoaded || (IS_TOUCH_DEVICE && focusEl.nodeName === 'INPUT')) {
      return;
    }
    this.focus(focusEl);
  }

  /**
   * @private
   */
  async slideFieldToCenter(key) {
    this.animatingScroll = true;
    const node = this.getFieldNode(key);
    assert(node, `No field found with key: ${key}`);
    const viewBox = this.refs.questionsViewBox;

    const viewBoxheight = viewBox.clientHeight;
    const distanceFromTop = Math.max(0, (viewBoxheight - node.clientHeight) / 2);

    const targetScroll = node.offsetTop - distanceFromTop;
    const animationDuration = 160;

    try {
      await scrollSlide(viewBox, targetScroll, animationDuration);
      const focusEl = node.querySelector(`.${globals.FOCUS_CLASS}`);
      if (focusEl) {
        // this.focus(focusEl);
      }
    } catch (e) {
      // nothing
    } finally {
      this.animatingScroll = false;
    }
  }

  /**
   * Used by submit button. Shows error and returns arror ammount
   * @public
   * @method validateAllFields
   * @return {Array<String>}  Object with keys of fields with error
   */
  async validateAllFields() {
    const errorFields = [];

    for (const q of this.props.config) {
      const questionReactEl = this.refs[q.key];
      const err = await questionReactEl.validate();
      if (err) {
        errorFields.push(q.key);
      }
    }

    return errorFields;
  }


  /**
   * @method slideToFirstWithError
   * @return {Promise}
   */
  async slideToFirstWithError() {
    const errorFields = await this.validateAllFields();
    if (errorFields.length > 0) {
      this.setFieldActive(errorFields[0]);
      this.slideFieldToCenter(errorFields[0]);
    }
  }

  triggerSubmit() {
    const formElement = ReactDOM.findDOMNode(this);
    const submitEvent = new CustomEvent('submit', {
      detail: { answers: this.props.config },
      bubbles: true,
      cancelable: true,
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
    assert(qIndex !== -1, `Did not find question with key: ${questionKey}`);

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
    assert(this.refs[key], `Invalid key: ${key}`);
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
      assert(questionIndex !== -1, `Invalid question index ${questionIndex}`);
      ui.questions[questionIndex].active = true;
    }

    this.setState({ ui });
  }

  async setFieldError(key, message) {
    assert(this.refs[key], `Invalid key: ${key}`);
    const ui = clone(this.state.ui);
    const field = ui.questions.find(q => q.key === key);
    field.error = message;

    await new Promise(resolve => this.setState({ ui }, resolve));
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
    if ((new Date() - this.lastWheelMove) < 350) {
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
    const currTime = new Date;
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
      return (
        <FormField
          config={q}
          ui={this.state.ui.questions[index]}
          appControl={this.appControl}
          key={q.key}
          ref={q.key}
        />);
    });


    return (
      <div className={this.bemClass}>
        <div
          className={this.bemSubComponent('questionsViewBox')}
          ref="questionsViewBox"
          onTouchStart={this.touchStart}
          onTouchEnd={this.touchEnd}
          onTouchMove={this.touchMove}
          onWheel={this.onWheel}
          onScroll={this.onScroll}
        >
          <div className={this.bemSubComponent('questions')} ref="questions" >
            {questions}

            <SubmitButton
              ui={this.state.ui.submitButton}
              appControl={this.appControl}
              ref={this.state.ui.submitButton.key}
              validateAllFields={this.validateAllFields}
            />
          </div>
        </div>

        <NavigationBar appControl={this.appControl} ui={this.state.ui} />
      </div>
    );
  }
}

FormUI.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
