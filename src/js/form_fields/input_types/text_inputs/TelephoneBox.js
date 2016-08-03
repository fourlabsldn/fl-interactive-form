import TextInput from './TextInput';
const telRegex = /^\+?[0-9|\-|\s]{5,15}$/;
export default class NumberBox extends TextInput {
  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
    if (!this.isRequired() && !response) {
      return false;
    }

    if (this.isRequired() && !response) {
      return 'This field must be completed';
    }

    if (!telRegex.test(response)) {
      return 'Please insert a valid telephone number';
    }

    return false;
  }

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'email';
  }
}
