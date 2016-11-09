import TextBox from './form-fields/TextBox/main';
import TextArea from './form-fields/TextArea/main';
import Dropdown from './form-fields/Dropdown/main';

// ================= FIELD FACTORY ===================//
//
//  Implements the `getValue` method to return the input value
//

const defaultInputCreators = {
  TextBox,
  TextArea,
  Dropdown,
};

/**
 * @method formField
 * @param  {Object} config Question configuration object
 * @return {Promise<HTMLElement>}
 */
export default function formField(config, customFields = {}) {
  const wrapper = document.createElement('div');
  wrapper.className = 'fl-if_FormField fl-if_FormField--active';

  const legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';
  legend.innerHTML = config.title;

  const inputCreators = Object.assign({}, defaultInputCreators, customFields);

  const fieldConstructor = inputCreators[config.type] || inputCreators[config.primitiveType];

  return fieldConstructor.initialState(config)
    .then(initialState => {
      const inputEl = fieldConstructor.es3.render(initialState);
      wrapper.appendChild(legend);
      wrapper.appendChild(inputEl);
      wrapper.getValue = inputEl.getValue;
      wrapper.validate = inputEl.validate;
      return wrapper;
    });
}
