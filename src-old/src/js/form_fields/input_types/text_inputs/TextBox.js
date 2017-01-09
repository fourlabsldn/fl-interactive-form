import TextInput from './TextInput';

export default class TextBox extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'text';
  }
}
