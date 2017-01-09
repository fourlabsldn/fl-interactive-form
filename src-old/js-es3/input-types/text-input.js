import { trimSpaces, createErrorMessage, removeErrorMessage } from '../utils';

const textInputTypes = {
  TextArea: {
    type: 'text',
    regex: /\w{2,}/,
    error: 'This field must be filled',
  },
  TextBox: {
    type: 'text',
    regex: /\w{2,}/,
    error: 'This field must be filled',
  },
  EmailBox: {
    type: 'email',
    // Simple and quite broad for basic validation.
    regex: /^(.+)@(.+){2,}\.(.+){2,}$/,
    error: 'Please insert a valid email address',
  },
  NumberBox: {
    type: 'number',
    regex: /^[0-9]+$/,
    error: 'Please insert a valid number',
  },
  TelephoneBox: {
    type: 'tel',
    // matches (+23) 2343 - 2342
    regex: /^[\+0-9\-\(\)\s]{6,}$/,
    error: 'Please insert a valid telephone number',
  },
};

// Returns true if valid and false if not.
// HTML -> Boolean
function validate(field, required, type) {
  // Remove errors
  removeErrorMessage(field.parentElement);
  const regex = textInputTypes[type].regex;
  const content = trimSpaces(field.value);

  if (!required || !regex || regex.test(content)) {
    return true;
  }
  field.parentElement.appendChild(createErrorMessage(textInputTypes[type].error));
  return false;
}


export default function createTextInput(config) {
  const tagName = config.type === 'TextArea' ? 'textarea' : 'input';
  const el = document.createElement(tagName);
  el.className = tagName === 'textarea'
    ? 'fl-if_TextInput-input fl-if_TextAreaInput-input'
    : 'fl-if_TextInput-input';
  el.setAttribute('name', config.title);
  el.setAttribute('type', textInputTypes[config.type].type);
  el.placeholder = config.placeholder;
  if (config.required) {
    el.setAttribute('required', true);
  }

  el.getValue = function getValue() {
    return el.value;
  };

  el.validate = () => validate(el, config.required, config.type);

  el.addEventListener('blur', el.validate);

  return el;
}
