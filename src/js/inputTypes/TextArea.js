import Text from './TextBox';

export default class TextArea extends Text {
  constructor(...args) {
    super(...args);
    this.inputEl = 'textarea';
  }
}
