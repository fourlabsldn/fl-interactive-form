import { trimSpaces, createErrorMessage, removeErrorMessage } from '../utils';

const textInputTypes = {
  TextArea: 'text',
  TextBox: 'text',
  EmailBox: 'email',
  NumberBox: 'number',
  TelephoneBox: 'telephone',
};

const inputTypesRegex = {
  text: /\w{1,}/,
  // Simple and quite broad for basic validation.
  email: /^(.+)@(.+){2,}\.(.+){2,}$/,
  // matches (+23) 2343 - 2342
  telephone: /^[\+0-9\-\(\)\s]{6,}$/,
  number: /^[0-9]$/,
};


// Returns true if valid and false if not.
// HTML -> Boolean
function validate(field, required) {
  // Remove errors
  removeErrorMessage(field.parentElement);
  const type = field.getAttribute('type');
  const regex = inputTypesRegex[type];
  const content = trimSpaces(field.value);

  // TODO: use !config.required
  if (!regex || regex.test(content)) {
    return true;
  }
  field.parentElement.appendChild(createErrorMessage(`Please insert a valid ${type}.`));
  return false;
}


export default function createTextInput(config) {
  const tagName = config.type === 'TextArea' ? 'textarea' : 'input';
  const el = document.createElement(tagName);
  el.className = tagName === 'textarea'
    ? 'fl-if_TextInput-input fl-if_TextAreaInput-input'
    : 'fl-if_TextInput-input';
  el.setAttribute('name', config.title);
  el.setAttribute('type', textInputTypes[config.type]);
  el.placeholder = config.placeholder;
  if (config.required) {
    el.setAttribute('required', true);
  }

  el.getValue = function getValue() {
    return el.value;
  };

  el.validate = () => validate(el, config.required);
  return el;
}
