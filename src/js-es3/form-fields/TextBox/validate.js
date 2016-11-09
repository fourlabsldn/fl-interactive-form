import _ from 'lodash/fp';

const textRegex = /\w{2,}/;

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (!state.required) {
    return null;
  }

  if (_.isNil(state.answer) || !textRegex.test(state.answer)) {
    return 'Please fill in this field.';
  }

  return null;
}
