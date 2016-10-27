
const textInputTypes = {
  TextArea: 'text',
  TextBox: 'text',
  EmailBox: 'email',
  NumberBox: 'number',
  TelephoneBox: 'telephone',
};

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

  return el;
}
