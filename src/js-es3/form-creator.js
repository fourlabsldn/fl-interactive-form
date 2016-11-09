import getConstructor from './getConstructor';
import createField from './createField';
import { fakeEvent, createErrorMessage, removeErrorMessage } from './utils';
import buildStructure from './buildStructure';
import { flow, zip, map } from 'lodash/fp';


function addListeners(formWrapper, questions, fieldConstructors, initialStates) {
  const listeners = [];

  formWrapper.addEventListener = function customAddEventListener(event, callback) { // eslint-disable-line max-len, no-param-reassign
    if (event === 'submit') {
      listeners.push(callback);
    } else {
      return formWrapper.addEventListener(event, callback);
    }
    return null;
  };

  formWrapper.triggerSubmit = function triggerSubmit(formData) { // eslint-disable-line max-len, no-param-reassign
    const evt = fakeEvent(formData);
    for (let j = 0; j < listeners.length; j++) {
      listeners[j](evt);
    }
  };

  formWrapper.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    const submitBtnContainer = formWrapper.querySelector('button[type=submit]').parentElement;
    removeErrorMessage(submitBtnContainer); // TODO: make message appear under submit button

    const questionStates = [];
    for (let i = 0; i < questions.length; i++) {
      questionStates.push(
        fieldConstructors[i].es3.getState(initialStates[i], questions[i])
      );
    }

    let errorCount = 0;
    for (let i = 0; i < questions.length; i++) {
      removeErrorMessage(questions[i]);
      const error = fieldConstructors[i].es3.validate(questionStates[i]);
      if (error) {
        errorCount += 1;
        const errMsg = createErrorMessage(error);
        questions[i].appendChild(errMsg);
      }
    }

    if (errorCount > 0) {
      submitBtnContainer.appendChild(
        createErrorMessage(`${errorCount} fields need to be completed.`)
      );
      return false;
    }

    const formData = questionStates.map(s => ({ answer: s.answer }));
    formWrapper.triggerSubmit(formData);

    e.preventDefault();
    e.stopPropagation();
    return false;
  });
}

export default function es3Form(config, customConstructors) {
  const fieldConstructors = map(getConstructor(customConstructors), config);

  const initialStatesPromises = flow(
    zip(fieldConstructors),
    map(([constr, conf]) => constr.initialState(conf))
  )(config);

  return Promise.all(initialStatesPromises)
    .then(initialStates => {
      const fields = flow(
        zip(fieldConstructors),
        map(([constr, init]) => createField(constr, init))
      )(initialStates);

      const formWrapper = buildStructure(fields);

      addListeners(formWrapper, fields, fieldConstructors, initialStates);

      return formWrapper;
    });
}
