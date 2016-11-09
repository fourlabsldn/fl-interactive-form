import _ from 'lodash/fp';

const telRegex = /^[\+0-9\-\(\)\s]{6,}$/;

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (state.required && (_.isNil(state.answer) || !telRegex.test(state.answer))) {
    return 'Please insert a valid email address';
  }

  return null;
}
