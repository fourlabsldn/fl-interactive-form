import React from 'react';
import ReactDOM from 'react-dom';
import { curry, flow, get } from 'lodash/fp';
import assert from 'fl-assert';
import InputField from '../InputField';

const minDateDefault = -2208988800000;
const maxDateDefault = 4102444800000;

// Returns a number. If num is NaN, returns min
// between : Number -> Number -> Number
const between = curry((min, max, num) => {
  const constrained = Math.max(min, Math.min(num, max));
  return isNaN(constrained)
    ? min
    : constrained;
});

// toDigits : Number -> Number -> String
const toDigits = curry((digitCount, num) => {
  const charCount = num.toString().length;
  const zeroesCount = Math.max(0, digitCount - charCount); // make sure never negative
  return Array(zeroesCount).fill(0).join('') + num.toString();
});

// validate : Number -> Number -> String -> String
const validateAndPrettify = curry((min, max, stringValue) => {
  const maxChars = max.toString().length;
  return flow(
    s => parseInt(s, 10),
    between(min, max),
    toDigits(maxChars),
  )(stringValue);
});


// updateDate : Number -> Number -> String -> String
const validate = curry((min, max, stringValue) => {
  const maxChars = max.toString().length;
  const value = stringValue.replace(/[^0-9]/g, '').slice(-maxChars);

  const isFieldFilled = value.length === maxChars;
  // If it doesn't even have enough characters, it's below max and the
  // person might not have finished typing yet, so let's only really validate and
  // prettify if maxChars is reached
  return isFieldFilled
    ? validateAndPrettify(min, max, stringValue)
    : value;
});

// focusNextWhenFilled : Number -> Event -> Nothing
const focusNextIfFilled = curry((max, e) => {
  const maxChars = max.toString().length;
  const isFieldFilled = e.target.value.toString().length === maxChars;

  if (isFieldFilled) {
    const nextField = ReactDOM.findDOMNode(e.target).nextElementSibling;
    if (nextField && nextField.nodeName === 'INPUT') {
      nextField.focus();
    }
  }
});

// parseAndConstrain : Number -> Number -> String -> Number
const parseAndConstrain = (min, max, numString) => {
  const parsed = parseInt(numString, 10);
  const constrained = between(min, max, parsed);
  assert.warn(!isNaN(constrained), `Error parsing ${numString}`);
  return constrained;
};

const millisecondsToBreakdownDate = (ms) => {
  const date = new Date(ms);
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

const toDateString = d =>
  `${toDigits(4, d.year)}-${toDigits(2, d.month)}-${toDigits(2, d.day)}`;

const toMilliseconds = (d) => {
  return flow(
    toDateString,
    Date.parse
  )(d);
};

// parseDate : (String | Number) -> (String | Number) -> (String | Number) -> { day, month, year }
function parseDate(dayString, monthString, yearString) {
  const initialDate = {
    day: parseAndConstrain(1, 31, dayString),
    month: parseAndConstrain(1, 12, monthString),
    year: parseAndConstrain(1, 2500, yearString),
  };

  const dateIsValid = flow(
    toMilliseconds,
    millisecondsToBreakdownDate,
    parsed => JSON.stringify(initialDate) === JSON.stringify(parsed),
  )(initialDate);

  if (!dateIsValid) {
    // All values have been constrined to their allowed values, the only case
    // in which date could be NaN is the one where the day value is greater than
    // the maximum possible day value of the specified month. Like Feb 31
    // So we will decrease the day and try to parse again. If the day is already
    // quite low, then throw the error.
    assert(
      initialDate.day > 25,
      `An unknown error occurred parsing the date ${
      dayString}/${monthString}/${yearString}`
    );
    return parseDate(initialDate.day - 1, initialDate.month, initialDate.year);
  }

  return initialDate;
}

// Returns an object with date components that form a valid date
// Int -> Int -> String -> String -> String -> { day, month, year }
const validateDateComponents = (appMinDate, appMaxDate, day, month, year) => {
  const areAllFieldsFilled = day.length === 2
    && month.length === 2
    && year.length === 4;

  if (!areAllFieldsFilled) {
    return { day, month, year };
  }
  const minDate = appMinDate || minDateDefault; // 1900-01-01
  const maxDate = appMaxDate || maxDateDefault; // 2100-01-01

  return flow(
    () => parseDate(day, month, year),
    toMilliseconds,
    between(minDate, maxDate),
    millisecondsToBreakdownDate,
    d => ({
      day: toDigits(2, d.day),
      month: toDigits(2, d.month),
      year: toDigits(4, d.year),
    })
  )();
};

export default class DateField extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    this.changedSinceLastUpdate = false;

    this.state = Object.assign({}, this.props.config);

    /** @override */
    this.bemClass = `${this.modulePrefix}_TextInput`;
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
  validateResponse(response) {
    const [year, month, day] = response.split('-');
    const areAllFieldsFilled = day.length === 2
      && month.length === 2
      && year.length === 4;

    if (this.isRequired() && !areAllFieldsFilled) {
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
      this.saveResponse();
    };

    // DATEFIELD SPECIFIG FUNCTIONS
    const state = this.state;
    const update = (newState) => this.setState(newState);


    // updateField : Object -> Object(the new state)
    const updateState = changedState => {
      const newState = Object.assign({}, state, changedState);
      update(newState);
      return newState;
    };

    const dateOnChange = curry((min, max, datePart, e) => {
      flow(
        get('target.value'),
        validate(min, max),
        v => updateState({ [datePart]: v }),
      )(e);

      focusNextIfFilled(max, e);
      handleInputChange();
    });

    const dateOnBlur = curry((appState, min, max, datePart, e) => {
      flow(
        get('target.value'),
        validateAndPrettify(min, max),
        v => Object.assign({}, appState, { [datePart]: v }),
        s => validateDateComponents(s.minDate, s.maxDate, s.day, s.month, s.year),
        s => updateState(s)
      )(e);
      handleBlur();
    });

    return (
      <div className={this.bemClass}>
        <input
          type="text"
          className="fl-fb-Field-editable fl-fb-Field-dateslot-day"
          placeholder="DD"
          value={state.day}
          onChange={dateOnChange(1, 31, 'day')}
          onBlur={dateOnBlur(state, 1, 31, 'day')}
          pattern="^.{2}$" // two characters required
          required={state.required}
        />
        /
        <input
          type="text"
          className="fl-fb-Field-editable fl-fb-Field-dateslot-month"
          placeholder="MM"
          value={state.month}
          onChange={dateOnChange(1, 12, 'month')}
          onBlur={dateOnBlur(state, 1, 12, 'month')}
          pattern="^.{2}$" // two characters required
          required={state.required}
        />
        /
        <input
          type="text"
          className="fl-fb-Field-editable fl-fb-Field-dateslot-year"
          placeholder="YYYY"
          value={state.year}
          onChange={dateOnChange(1900, 2050, 'year')}
          onBlur={dateOnBlur(state, 1900, 2050, 'year')}
          pattern="^.{4}$" // two characters required
          required={state.required}
        />
      </ div>
    );
  }
}
