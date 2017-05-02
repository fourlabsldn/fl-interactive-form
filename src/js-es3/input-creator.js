import { createOptionsInput, createDropdownInput, createCountryDropdownInput } from './input-types/options-input';
import createTextInput from './input-types/text-input';

// ================= FIELD FACTORY ===================//
//
//  Implements the `getValue` method to return the input value
//

const inputCreators = {
  EmailBox: createTextInput,
  NumberBox: createTextInput,
  TelephoneBox: createTextInput,
  TextBox: createTextInput,
  DateField: createTextInput,
  TextArea: createTextInput,
  Checkboxes: createOptionsInput,
  Dropdown: createDropdownInput,
  CountryDropdown: createCountryDropdownInput,
  RadioButtons: createOptionsInput,
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

  const elementType = inputCreators[config.type] || inputCreators[config.primitiveType];
  const inputEl = elementType(config);

  wrapper.appendChild(legend);
  wrapper.appendChild(inputEl);
  wrapper.getValue = inputEl.getValue;
  wrapper.validate = inputEl.validate;
  return wrapper;
}
