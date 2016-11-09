/**
 * @method render
 * @param  {Object} state
 * @return {HTMLElement} field
 */
export default function render(state) {
  const wrapper = document.createElement('div');

  wrapper.className = 'fl-if_OptionsInput';

  const options = [];
  const optionType = state.htmlInputType;
  const optionName = state.title.replace(/\s'"/gi, '');

  for (let i = 0; i < state.options.length; i++) {
    const optionID = Date.now() + Math.random();
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'fl-if_OptionsInput-optionWrapper';

    const optionEl = document.createElement('input');
    optionEl.id = optionID;
    optionEl.type = optionType;
    optionEl.setAttribute('value', state.options[i].value);
    optionEl.setAttribute('name', optionName);
    optionWrapper.appendChild(optionEl);

    const label = document.createElement('label');
    label.setAttribute('for', optionID);
    label.className = `${wrapper.className}-option fl-if_OptionsInput-${state.htmlInputType}`;
    optionWrapper.appendChild(label);

    const optionLegend = document.createTextNode(state.options[i].caption);
    label.appendChild(optionLegend);

    wrapper.appendChild(optionWrapper);
    options.push(optionEl);
  }

  return wrapper;
}
