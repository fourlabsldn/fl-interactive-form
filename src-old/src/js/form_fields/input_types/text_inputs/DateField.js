import React from 'react';
import InputField from '../InputField';
// This is causing transpilation issues. So, for now
// we copy the form-builder file and include it here.
// In the future we should include it directly from node_modules folder
import DateFieldFormBuilder from './DateField-form-builder'; // eslint-disable-line max-len

const breakdownResponse = response => {
  const breakdown = (response || '').split('-');
  const year = breakdown[0] || '';
  const month = breakdown[1] || '';
  const day = breakdown[2] || '';
  return { day, month, year };
};

const toDateString = d =>
  `${d.year}-${d.month}-${d.day}`;

const areAllFieldsFilled = (day, month, year) =>
  day.length === 2 && month.length === 2 && year.length === 4;

export default class DateField extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    this.changedSinceLastUpdate = false;

    this.state = Object.assign(
      {},
      this.props.config,
      { configShowing: false },
      breakdownResponse(this.props.config.answer)
    );

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

    // this function is effectively executed at the correct time: after the component's
    // onBlur listener, which handles date constrains. But when it is called,
    // the state that was set in there has still not been updated. To remedy
    // that we will add a setTimeout here to allow the state to be set.
    const handleBlur = () => {
      setTimeout(() => {
        this.changedSinceLastUpdate = false;

        const { day, month, year } = this.state;
        if (!areAllFieldsFilled(day, month, year)) {
          return;
        }

        if (this.changedSinceLastUpdate) {
          this.saveResponseAndJumpToQuestion();
        } else {
          this.saveResponse();
        }
      }, 500);
    };

    const handleKeyDown = e => {
      const tabKeyCode = 9;
      const tabPressed = e.keyCode === tabKeyCode;
      const nextElementIsInput = e.target.nextElementSibling &&
          e.target.nextElementSibling.nodeName === 'input';

      if (tabPressed && nextElementIsInput) {
        e.stopPropagation();
        return;
      }

      this.keyListener(e);
    };

    // DATEFIELD SPECIFIG FUNCTIONS
    const state = this.state;
    const update = (newState) => this.setState(newState);

    return (
      <div
        className={this.bemClass}
        onBlur={handleBlur}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      >
        {DateFieldFormBuilder.RenderEditor({ state, update })}
      </ div>
    );
  }
}
