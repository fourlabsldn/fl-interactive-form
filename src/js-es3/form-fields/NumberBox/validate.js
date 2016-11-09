import _ from 'lodash/fp';

const numberRegex = /^[0-9]+$/;

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (state.required && (_.isNil(state.answer) || !numberRegex.test(state.answer))) {
    return 'Please insert a valid email address';
  }

  return null;
}
