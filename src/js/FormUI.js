import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import clone from './utils/clone';
import globals from './utils/globals';
import scrollSlide from './utils/scrollSlide';
import NavigationBar from './NavigationBar';
import SubmitButton from './input_types/SubmitButton';
import AnimationManager from './utils/AnimationManager';
import throttle from './utils/throttle';
import assert from 'fl-assert';


// Takes care of the UI part of things.
export default class FormUI extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.componentDidMount = this.componentDidMount.bind(this);
    this.generateInitialState = this.generateInitialState.bind(this);
    this.setActiveFieldIndex = this.setActiveFieldIndex.bind(this);
    this.getFormFields = this.getFormFields.bind(this);
    this.getFieldNode = this.getFieldNode.bind(this);
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
    this.setQuestionActive = this.setQuestionActive.bind(this);
    this.slideFieldToCenter = this.slideFieldToCenter.bind(this);

    // public
    this.focusQuestion = throttle(this.focusQuestion.bind(this), 250, this, false);
    this.setQuestionCompleted = this.setQuestionCompleted.bind(this);
    this.focus = this.focus.bind(this);

    this.animations = new AnimationManager();
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
    ui.questions = this.props.config.questions.map(q => createUiObj(q.key));
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
    this.animations.schedule(() => this.slideFieldToCenter(0), '', 30);


    const centerActiveQuestion = () => {
      const active = this.getActiveFieldIndex();
      this.slideFieldToCenter(active);
    };

    window.addEventListener(
      'resize',
      () => this.animations.schedule(centerActiveQuestion, 'formResize', 20)
    );
  }

  /**
   * @public
   * Moves the focus to the next or previous question by
   * setting it as active and moving it to the center of the viewport.
   * @method focusQuestion
   * @param  {String} prevNext
   * @return {void}
   */
  focusQuestion(prevNext) {
    const next = prevNext === 'next';
    const fieldCount = this.getFormFields().length;
    const activeIndex = this.getActiveFieldIndex();
    const changedIndex = activeIndex + (next ? +1 : -1);
    const newActiveIndex = Math.max(0, Math.min(fieldCount - 1, changedIndex));
    this.slideFieldToCenter(newActiveIndex);
    this.setActiveFieldIndex(newActiveIndex);
  }

  /**
   * @private
   */
  async slideFieldToCenter(fieldIndex) {
    assert(typeof fieldIndex === 'number', 'Invalid field index');
    const node = this.getFieldNode(fieldIndex);
    const viewBox = this.refs.questionsViewBox;

    const viewBoxheight = viewBox.clientHeight;
    const distanceFromTop = Math.max(0, (viewBoxheight - node.clientHeight) / 2);

    const targetScroll = node.offsetTop - distanceFromTop;
    const animationDuration = 500;

    try {
      await scrollSlide(viewBox, targetScroll, animationDuration);
      const focusEl = node.querySelector(`.${globals.FOCUS_CLASS}`);
      if (focusEl) {
        this.focus(focusEl);
      }
    } catch (e) {
      // nothing
    }
  }

  /**
   * @private
   * @method setActiveFieldIndex
   * @param  {String} index
   */
  setActiveFieldIndex(index) {
    const ui = clone(this.state.ui);

    // set everyone not active
    ui.submitButton.active = false;
    for (const q of ui.questions) {
      q.active = false;
    }

    const formFields = this.getFormFields();
    const newActiveField = formFields[index];

    if (newActiveField.key === ui.submitButton.key) {
      ui.submitButton.active = true;
    } else {
      const questionIndex = ui.questions.findIndex(q => q.key === newActiveField.key);
      assert(questionIndex !== -1, `Invalid question index ${index}`);
      ui.questions[questionIndex].active = true;
    }

    this.setState({ ui });
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
   * @method getActiveQuestionIndex
   * @return {Int}
   */
  getActiveFieldIndex() {
    const formFields = this.getFormFields();
    return formFields.findIndex(f => f.active === true);
  }

  getFieldNode(index) {
    return this.refs.questions.children[index];
  }

  /**
   * @public
   * @method setQuestionActive
   * @param  {[type]} questionKey [description]
   */
  setQuestionActive(questionKey) {
    const formFields = this.getFormFields();
    const qIndex = formFields.findIndex(q => q.key === questionKey);
    this.setActiveFieldIndex(qIndex);
  }

  handleScroll() {
    const viewBoxTop = this.refs.questionsViewBox.getBoundingClientRect().top;
    const viewBoxHeight = this.refs.questionsViewBox.clientHeight;
    const viewBoxCenter = viewBoxTop + viewBoxHeight / 2;
    let closestToCenter = {
      distance: null,
      index: null,
    };


    const fieldCount = this.getFormFields();
    for (let i = 0; i < fieldCount.length; i++) {
      const fieldEl = this.getFieldNode(i);
      const fieldElTop = fieldEl.getBoundingClientRect().top;
      const fieldHeight = fieldEl.clientHeight;
      const fieldCenter = fieldElTop + fieldHeight / 2;
      const fieldDistanceToCenter = Math.abs(viewBoxCenter - fieldCenter);

      if (typeof closestToCenter.distance !== 'number'
        || fieldDistanceToCenter < closestToCenter.distance) {
        closestToCenter = {
          distance: fieldDistanceToCenter,
          index: i,
        };
      }
    }

    const activeIndex = this.getActiveFieldIndex();
    if (closestToCenter.index !== activeIndex) {
      this.setActiveFieldIndex(closestToCenter.index);
      // this.slideFieldToCenter(closestToCenter.index);
    }
  }

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
   * Focus and prevent viewBox from scrolling
   * @public
   * @method focus
   * @param  {HTMLElement} element
   * @return {void}
   */
  focus(element) {
    if (!element) { return; }
    const currScrollPosition = this.refs.viewBox.scrollTop;
    const focus = () => {
      element.focus();
      this.refs.viewBox.scrollTop = currScrollPosition;
    };

    setTimeout(focus, 10);
  }

  render() {
    const appControl = this.props.appControl;
    appControl.focusQuestion = this.focusQuestion;
    appControl.setQuestionCompleted = this.setQuestionCompleted;
    appControl.setQuestionActive = this.setQuestionActive;
    appControl.focus = this.focus;

    const questions = this.props.config.questions.map((q, index) => {
      return (
        <FormField
          config={q}
          ui={this.state.ui.questions[index]}
          appControl={appControl}
          key={q.key}
        />);
    });

    return (
      <div
        className={this.bemClass}
        onScroll={() => {
          this.animations.schedule(this.handleScroll, 'scroll', 3);
        }}
      >

        <div className={this.bemSubComponent('questionsViewBox')} ref="questionsViewBox">
          <div className={this.bemSubComponent('questions')} ref="questions" >
            {questions}

            <SubmitButton
              ui={this.state.ui.submitButton}
              appControl={appControl}
              ref="submitButton"
            />
          </div>
        </div>

        <NavigationBar appControl={appControl} ui={this.state.ui} />
      </div>
    );
  }
}

FormUI.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
