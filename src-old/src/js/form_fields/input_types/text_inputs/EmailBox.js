import TextInput from './TextInput';

/* RFC822 regex. see http://badsyntax.co/post/javascript-email-validation-rfc822 */
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

export default class EmailBox extends TextInput {
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

    if (!emailRegex.test(response)) {
      return 'Invalid email address.';
    }

    return false;
  }

  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
    this.type = 'email';
  }
}
