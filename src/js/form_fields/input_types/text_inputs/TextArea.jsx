import TextInput from './TextInput';

export default class TextArea extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'textarea';
    // TODO: How to use this.bemSubComponent() corecctly?
    this.className = 'fl-if_TextAreaInput-input';
  }
}
