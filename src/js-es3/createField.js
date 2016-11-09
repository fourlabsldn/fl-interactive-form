/**
 * @method createField
 * @param  {Object} fieldConstructor
 * @param  {Object} initialState
 * @return {HTMLElement}
 */
export default function createField(fieldConstructor, initialState) {
  const wrapper = document.createElement('div');
  wrapper.className = 'fl-if_FormField fl-if_FormField--active';

  const legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';
  legend.innerHTML = initialState.title;

  const inputEl = fieldConstructor.es3.render(initialState);
  wrapper.appendChild(legend);
  wrapper.appendChild(inputEl);
  wrapper.getValue = inputEl.getValue;
  wrapper.validate = inputEl.validate;
  return wrapper;
}
