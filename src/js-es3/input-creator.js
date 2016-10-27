import { createOptionsInput, createDropdownInput, createCountryDropdownInput } from './input-types/options-input';
import createTextInput from './input-types/text-input';
import createDateInput from './input-types/date-input';

// ================= FIELD FACTORY ===================//
//
//  Implements the `getValue` method to return the input value
//

const inputCreators = {
  EmailBox: createTextInput,
  NumberBox: createTextInput,
  TelephoneBox: createTextInput,
  TextBox: createTextInput,
  TextArea: createTextInput,
  Checkboxes: createOptionsInput,
  Dropdown: createDropdownInput,
  CountryDropdown: createCountryDropdownInput,
  RadioButtons: createOptionsInput,
  DateField: createDateInput,
};

/**
 * @method formField
 * @param  {Object} config Question configuration object
 * @return {HTMLElement}
 */
export default function formField(config) {
  const wrapper = document.createElement('div');
  wrapper.className = 'fl-if_FormField fl-if_FormField--active';

  const legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';
  legend.innerHTML = config.title;

  const inputEl = inputCreators[config.type](config);
  wrapper.appendChild(legend);
  wrapper.appendChild(inputEl);
  wrapper.getValue = inputEl.getValue;
  return wrapper;
}
