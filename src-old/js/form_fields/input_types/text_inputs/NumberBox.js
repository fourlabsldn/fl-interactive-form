import TextInput from './TextInput';
const numberRegex = /^[0-9]+$/;
export default class NumberBox extends TextInput {
  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
    if (!this.isRequired() && !response) {
      return false;
    }

    if (this.isRequired() && !response) {
      return 'This field must be completed'
    }

    if (!numberRegex.test(response)) {
      return 'Invalid response. Please only insert number characters.';
    }

    return false;
  }

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'email';
  }
}
