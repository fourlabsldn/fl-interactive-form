import TextInput from './TextInput';

export default class TextBox extends TextInput {
  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'text';
  }

  /**
   * @override
   */
  validateResponse(response) {
    if (this.props.config.required && !response) {
      return 'This field must be completed.';
    }

    return false;
  }
}
