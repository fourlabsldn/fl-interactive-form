import _ from 'lodash/fp';

/**
 * @method buildStructure
 * @param  {Array<HTMLElement>} fields
 * @return {HTMLElement} form
 */
export default function buildStructure(fields) {
  // The form itself
  const form = document.createElement('form');
  form.className = 'fl-if_FormUI fl-if_FormUI-es3';

  // All fields
  _.forEach(f => form.appendChild(f), fields);

  // Submit Btn
  const submitBtnContainer = document.createElement('div');
  submitBtnContainer.className = 'fl-if_FormField fl-if_FormField--active';
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'Submit';
  submitBtn.className = 'fl-if_NavigationBar-button';
  submitBtnContainer.appendChild(submitBtn);
  form.appendChild(submitBtnContainer);

  // Wrapper for nice scrolling
  const formWrapper = document.createElement('div');
  formWrapper.className = 'fl-if';
  formWrapper.appendChild(form);

  return formWrapper;
}
