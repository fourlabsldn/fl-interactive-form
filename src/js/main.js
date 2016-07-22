/* globals xController */
import QuestionsNavigator from './QuestionsNavigator';

xController((xdiv) => {
  const questionsContainer = xdiv.querySelector('.slv-ContactForm-questionsContainer');
  const qn = new QuestionsNavigator(questionsContainer, 'slv-ContactForm-question');

  const nextBtn = xdiv.querySelector('.js-slv-nextQuestion');
  nextBtn.addEventListener('click', () => qn.setNextQuestionActive());

  const prevBtn = xdiv.querySelector('.js-slv-prevQuestion');
  prevBtn.addEventListener('click', () => qn.setPreviousQuestionActive());

  return qn;
});
