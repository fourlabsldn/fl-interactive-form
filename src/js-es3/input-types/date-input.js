import { applyDataMask, trimSpaces, createErrorMessage, removeErrorMessage } from '../utils';

function validate(field, required) {
  const dateNumbers = trimSpaces(field.value).match(/[0-9]/g) || [];
  const container = field.parentElement;
  removeErrorMessage(container);

  if (required && dateNumbers.length !== 8) {
    createErrorMessage(container);
    return false;
  }
  return true;
}


export default function createDateInput(config) { // eslint-disable-line no-unused-vars
  const dateField = document.createElement('input');
  dateField.setAttribute('type', 'text');
  dateField.className = 'fl-if_TextInput-input';
  dateField.value = 'DD/MM/YYYY';
  applyDataMask(dateField, '  /  /    ');

  dateField.getValue = function () { return dateField.value; };

  dateField.validate = () => validate(dateField, config.required);

  return dateField;
}
