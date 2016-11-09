/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
export default function render(state) {
  const wrapper = document.createElement('div');
  wrapper.className = 'fl-if_Dropdown fl-if_OptionsInput';

  const select = document.createElement('select');
  select.className = 'fl-if_Dropdown-option';
  select.setAttribute('name', state.title);
  select.setAttribute('required', !!state.required);
  wrapper.appendChild(select);

  let optionEl;
  for (let optionIndex = 0; optionIndex < state.options.length; optionIndex++) {
    optionEl = document.createElement('option');
    optionEl.setAttribute('value', state.options[optionIndex].value);
    optionEl.innerHTML = state.options[optionIndex].caption;
    if (optionIndex === 0) {
      optionEl.setAttribute('selected', true);
    }


    const disabledIndexes = state.disabledIndexes || [];
    for (let j = 0; j < disabledIndexes.length; j++) {
      if (optionIndex === state.disabledIndexes[j]) {
        optionEl.setAttribute('disabled', true);
      }
    }

    select.appendChild(optionEl);
  }

  return wrapper;
}
