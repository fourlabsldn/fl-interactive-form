import TextInput from './TextInput';

export default class TextArea extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'textarea';
    this.rows = '3';
  }
}
