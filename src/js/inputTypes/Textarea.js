import Text from './Text';

export default class Textarea extends Text {
  constructor(...args) {
    super(...args);
    this.inputEl = 'textarea';
  }
}
