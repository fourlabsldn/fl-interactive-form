import _ from 'lodash/fp';

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (!state.required) {
    return null;
  }

  if (_.isNil(state.answer) || state.answer.length === 0) {
    return 'Please choose at least one option.';
  }

  return null;
}
