import { applyDataMask } from '../utils';

export default function createDateInput(config) { // eslint-disable-line no-unused-vars
  const dateField = document.createElement('input');
  dateField.setAttribute('type', 'text');
  dateField.className = 'fl-if_TextInput-input';
  dateField.style.textAlign = 'center';
  dateField.value = 'DD/MM/YYYY';
  applyDataMask(dateField, '  /  /    ');
  dateField.getValue = function () { return dateField.value; };
  return dateField;
}
