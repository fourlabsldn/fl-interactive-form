import React from 'react';
import InputField from '../InputField';
import DateFieldFormBuilder from './DateField-form-builder';

// toDigits : Number -> Number -> String
const toDigits = (digitCount, num) => {
  const charCount = num.toString().length;
  const zeroesCount = Math.max(0, digitCount - charCount); // make sure never negative
  return Array(zeroesCount).fill(0).join('') + num.toString();
};

const toDateString = d =>
  `${toDigits(4, d.year)}-${toDigits(2, d.month)}-${toDigits(2, d.day)}`;

const areAllFieldsFilled = (day, month, year) =>
  day.length === 2 && month.length === 2 && year.length === 4;

export default class DateField extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    this.changedSinceLastUpdate = false;

    this.state = Object.assign({}, this.props.config, { configShowing: false });

    /** @override */
    this.bemClass = `${this.modulePrefix}_DateField`;
  }

  /**
   * @override
   */
  getResponse() {
    return toDateString(this.state);
  }

  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
    const [year, month, day] = response.split('-');
    if (this.isRequired() && !areAllFieldsFilled(day, month, year)) {
      return 'This field must be completed.';
    }

    return false;
  }

  render() {
    // GENERAL FL-INTERACTIVE-FORM FUNCTIONS
    const handleInputChange = () => {
      this.changedSinceLastUpdate = true;
      if (this.props.ui.active) {
        // set incomplete
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }

      if (this.props.ui.error) {
        this.showError(this.validateResponse());
      }
    };

    const handleBlur = () => {
      if (!this.changedSinceLastUpdate) { return; }
      this.changedSinceLastUpdate = false;

      const { day, month, year } = this.state;
      if (areAllFieldsFilled(day, month, year)) {
        this.saveResponseAndJumpToQuestion();
      }
    };

    // DATEFIELD SPECIFIG FUNCTIONS
    const state = this.state;
    const update = (newState) => this.setState(newState);

    return (
      <div
        className={this.bemClass}
        onBlur={handleBlur}
        onChange={handleInputChange}
        onKeyDown={this.keyListener}
      >
        {DateFieldFormBuilder.RenderEditor({ state, update })}
      </ div>
    );
  }
}
