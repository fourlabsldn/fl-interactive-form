import assert from 'fl-assert';

export default class QuestionsNavigator {
  constructor(container, questionsClass) {
    this.questionsClass = questionsClass;
    this.activeClass = `${this.questionsClass}--active`;
    this.container = container;
    this.questions = Array.from(container.querySelectorAll(`.${questionsClass}`));
    this.setActive(this.questions[2]);
  }

  getTop(el) {
    return el.getBoundingClientRect().top;
  }

  setActive(question) {
    const questionIndex = this.questions.findIndex(q => q === question);
    assert(questionIndex !== -1, 'Question not found in questions array.');

    this.questions.forEach(q => q.classList.remove(this.activeClass));
    question.classList.add(this.activeClass);

    this.scrollIntoView(question, this.container);
  }

  scrollIntoView(el, container) {
    const end = this.getTop(el) - 10;
    const diff = end - this.getTop(container);
    const containerScrollBeforeChange = container.scrollTop;

    const smoothedStepSize = Math.floor(diff / 5);
    const stepSize = Math.sign(smoothedStepSize) * Math.max(1, Math.abs(smoothedStepSize));
    container.scrollTop = container.scrollTop + stepSize;  // eslint-disable-line no-param-reassign

    const elementInView = (containerScrollBeforeChange + stepSize) === end;
    const cantScrollMore = containerScrollBeforeChange === container.scrollTop;

    if (elementInView || cantScrollMore) { return; }
    requestAnimationFrame(() => {
      this.scrollIntoView(el, container);
    });
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
