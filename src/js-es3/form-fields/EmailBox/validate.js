import _ from 'lodash/fp';

const emailRegex = /^(.+)@(.+){2,}\.(.+){2,}$/;

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (state.required && (_.isNil(state.answer) || !emailRegex.test(state.answer))) {
    return 'Please insert a valid email address';
  }

  return null;
}
