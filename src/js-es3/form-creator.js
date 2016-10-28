import formField from './input-creator';
import { fakeEvent, clone, createErrorMessage, removeErrorMessage } from './utils';

// =============== FORM STRUCTURE ===================//

export default function es3Form(config) {
  const form = document.createElement('form');
  form.className = 'fl-if_FormUI fl-if_FormUI-es3';

  const questions = [];
  let questionEl;
  for (let i = 0; i < config.length; i++) {
    questionEl = formField(config[i]);
    questions.push(questionEl);
    form.appendChild(questionEl);
  }

  const submitBtnContainer = document.createElement('div');
  submitBtnContainer.className = 'fl-if_FormField fl-if_FormField--active';

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'Submit';
  submitBtn.className = 'fl-if_NavigationBar-button';
  submitBtnContainer.appendChild(submitBtn);
  form.appendChild(submitBtnContainer);

  const formWrapper = document.createElement('div');
  formWrapper.className = 'fl-if';
  formWrapper.appendChild(form);

  const listeners = [];
  formWrapper.addEventListener = function customAddEventListener(event, callback) {
    if (event === 'submit') {
      listeners.push(callback);
    } else {
      return form.addEventListener(event, callback);
    }
    return null;
  };

  formWrapper.triggerSubmit = function triggerSubmit(formData) {
    const evt = fakeEvent(formData);
    for (let j = 0; j < listeners.length; j++) {
      listeners[j](evt);
    }
  };

  form.addEventListener('submit', function submitBtnClick(e) {
    e.preventDefault();
    e.stopPropagation();
    removeErrorMessage(form);
    const notValidatedFields = questions
      .map(field => {
        if (field.validate) {
          return field.validate();
        }
        return true;
      })
      .filter(v => !v);

    if (notValidatedFields.length > 0) {
      form.appendChild(
        createErrorMessage(`${notValidatedFields.length} fields need to be completed.`)
      );
      return false;
    }

    const formData = config.map((field, index) =>
      Object.assign({}, field, { answer: questions[index].getValue() })
    );

    formWrapper.triggerSubmit(formData);

    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  return formWrapper;
}
