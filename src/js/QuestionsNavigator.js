import assert from 'fl-assert';
import AnimationManager from './utils/AnimationManager';

const FOCUS_CLASS = 'js-slv-focus';

export default class QuestionsNavigator {
  constructor(container, questionsClass) {
    this.questionsClass = questionsClass;
    this.activeClass = `${this.questionsClass}--active`;
    this.container = container;
    this.questions = Array.from(container.querySelectorAll(`.${questionsClass}`));
    this.animations = new AnimationManager();
    Object.preventExtensions(this);

    this.setActive(this.questions[2]);
  }

  getTop(el) {
    return el.getBoundingClientRect().top;
  }

  setActive(question) {
    const questionIndex = this.questions.findIndex(q => q === question);
    assert(questionIndex !== -1, 'Question not found in questions array.');

    const questionTop = this.getTop(question);
    this.questions.forEach(q => q.classList.remove(this.activeClass));
    question.classList.add(this.activeClass);


    // Focus element but keep scroll position
    const focusEl = question.querySelector(`.${FOCUS_CLASS}`);
    if (focusEl) { focusEl.focus(); }

    // Put scroll position the same position it was before.
    this.container.scrollTop = this.container.scrollTop + this.getTop(question) - questionTop;

    // smoothly scroll into view.
    this.scrollIntoView(question, this.container);
  }

  getFinalScrollPos(el, container) {
    // Let's have some extra displacement to position the question in the middle.
    const extra = Math.max(0, (container.clientHeight - el.clientHeight) / 2) - 20;
    return container.scrollTop + this.getTop(el) - this.getTop(container) - extra;
  }

  scrollIntoView(
    el,
    container,
    initialScroll = container.scrollTop,
    finalScroll = this.getFinalScrollPos(el, container),
    frameNumber = 1
  ) {
    const totalFrames = 30;
    const totalScroll = finalScroll - initialScroll;
    const percentageCompleted = (frameNumber / totalFrames);
    const nextPercentage = percentageCompleted * (2 - percentageCompleted);
    container.scrollTop = initialScroll + totalScroll * nextPercentage; // eslint-disable-line no-param-reassign, max-len

    if (frameNumber >= totalFrames) { return; }
    const animationName = 'scrollIntoView';
    this.animations.schedule(
      () => this.scrollIntoView(el, container, initialScroll, finalScroll, frameNumber + 1),
      animationName
    );
  }

  getActiveQuestionIndex() {
    const active = this.container.querySelector(`.${this.activeClass}`);
    return this.questions.findIndex(q => q === active);
  }

  setNextQuestionActive() {
    const activeIndex = this.getActiveQuestionIndex();
    if (activeIndex === -1) {
      this.setActive(this.questions[0]);
    } else if (activeIndex === this.questions.length - 1) {
      this.showSubmitButton();
    } else {
      this.setActive(this.questions[activeIndex + 1]);
    }
  }

  setPreviousQuestionActive() {
    const activeIndex = this.getActiveQuestionIndex();
    if (activeIndex === -1) {
      this.setActive(this.questions[0]);
      return;
    }
    const newActiveIndex = Math.max(0, activeIndex - 1);
    this.setActive(this.questions[newActiveIndex]);
  }

  showSubmitButton() {
    console.log('Pretend submit button is showing.');
  }
}
