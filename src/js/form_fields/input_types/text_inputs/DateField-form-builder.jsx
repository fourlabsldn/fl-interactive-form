import React from 'react';
import ReactDOM from 'react-dom';
import { curry, flow, get } from 'lodash/fp';
import assert from 'fl-assert';

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
  return stringValue.length === 0
    ? stringValue
    : flow(
        s => parseInt(s, 10),
        between(min, max),
        toDigits(maxChars)
      )(stringValue);
});


// updateDate : Number -> Number -> String -> String
const validate = curry((min, max, stringValue) => {
  const maxChars = max.toString().length;
  const value = stringValue.replace(/[^0-9]/g, '').slice(-maxChars);

  const isFieldFilled = value.length >= maxChars;
  // If it doesn't even have enough characters, it's below max and the
  // person might not have finished typing yet, so let's only really validate and
  // prettify if maxChars is reached
  return isFieldFilled
    ? validateAndPrettify(min, max, value)
    : value;
});

// focusNextWhenFilled : Number -> Event -> Nothing
const focusNextIfFilled = curry((max, e) => {
  const maxChars = max.toString().length;
  const isFieldFilled = e.target.value.toString().length >= maxChars;

  if (isFieldFilled) {
    const nextField = ReactDOM.findDOMNode(e.target).nextElementSibling;
    if (nextField && nextField.nodeName === 'INPUT') {
      nextField.focus();
    }
  }
});

// focusPreviousIfEmpty : Event -> Nothing
const focusPreviousIfEmpty = (e) => {
  const backspaceKeyCode = 8;
  const backspacePressed = e.keyCode === backspaceKeyCode;
  const fieldEmpty = e.target.value.length === 0;
  if (!(backspacePressed && fieldEmpty)) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  const prevField = ReactDOM.findDOMNode(e.target).previousElementSibling;
  if (prevField && prevField.nodeName === 'INPUT') {
    prevField.focus();
  }
};

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
}

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
    parsed => JSON.stringify(initialDate) === JSON.stringify(parsed)
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

const typeInfo = {
  // Compulsory
  type: 'DateField',
  displayName: 'Date Field',
  group: 'Text Components',
  required: false,

  // Component specific fields
  title: 'My date component',
  day: '',
  month: '',
  year: '',
  minDate: minDateDefault,
  maxDate: maxDateDefault,
};


// For Text Fields the initialState function will only return an object.
const initialState = () => Object.assign({}, typeInfo);

// When configuration is open, this is what is going to be displayed
/**
 * @method RenderConfigMode
 * @param  {Object} state : State
 * @param  {Function} update : State -> void // Will trigger a re-render
 */
const RenderEditor = ({ state, update }) => {

  // updateField : Object -> Object(the new state)
  const updateState = changedState => {
    const newState = Object.assign({}, state, changedState);
    update(newState);
    return newState;
  };

  // updateField : Object -> Event -> Object(the new state)
  const updateField = curry((fieldName, e) => {
    const value = e.target.value || initialState()[fieldName];
    return updateState({ [fieldName]: value });
  });


  const dateOnChange = curry((min, max, datePart, e) => {
    flow(
      get('target.value'),
      validate(min, max),
      v => updateState({ [datePart]: v })
    )(e);

    focusNextIfFilled(max, e);
  });

  const dateOnBlur = curry((appState, min, max, datePart, e) => {
    flow(
      get('target.value'),
      validateAndPrettify(min, max),
      v => Object.assign({}, appState, { [datePart]: v }),
      s => validateDateComponents(s.minDate, s.maxDate, s.day, s.month, s.year),
      s => updateState(s)
    )(e);
  });

  const setDateConstrain = curry((minMax, e) => {
    const value = e.target.value;
    const dateInMs = Date.parse(value);
    const newConstrain = isNaN(dateInMs) ? undefined : dateInMs;
    updateState({ [minMax]: newConstrain });
  });

  const minDateMilliseconds = state.minDate || minDateDefault;
  const maxDateMilliseconds = state.maxDate || maxDateDefault;
  const msToDateString = flow(millisecondsToBreakdownDate, toDateString);

  const minDateString = msToDateString(minDateMilliseconds);
  const maxDateString = msToDateString(maxDateMilliseconds);
  const minYear = millisecondsToBreakdownDate(minDateMilliseconds).year;
  const maxYear = millisecondsToBreakdownDate(maxDateMilliseconds).year;

  const configurationBar = (
    <div className="fl-fb-Field-config">
      From
      <input
        type="date"
        onChange={setDateConstrain('minDate')}
        className="fl-fb-Field-config-btn"
        defaultValue={minDateString}
      />
      To
      <input
        type="date"
        onChange={setDateConstrain('maxDate')}
        className="fl-fb-Field-config-btn"
        defaultValue={maxDateString}
      />
    </div>
  );


  return (
    <div>
      {state.configShowing
        ? (
            <h2>
              <input
                type="text"
                className="fl-fb-Field-editable"
                onChange={updateField('title')}
                defaultValue={state.title}
              />
            </h2>
          )
        : <h2>{state.title}</h2>
      }

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
        onKeyUp={focusPreviousIfEmpty}
      />
      /
      <input
        type="text"
        className="fl-fb-Field-editable fl-fb-Field-dateslot-year"
        placeholder="YYYY"
        value={state.year}
        onChange={dateOnChange(minYear, maxYear, 'year')}
        onBlur={dateOnBlur(state, minYear, maxYear, 'year')}
        pattern="^.{4}$" // two characters required
        required={state.required}
        onKeyUp={focusPreviousIfEmpty}
      />

      {state.configShowing ? configurationBar : null}

    </div>
  );
};

const ImageCards = {
  info: typeInfo,
  initialState,
  RenderEditor,
};

export default ImageCards;
