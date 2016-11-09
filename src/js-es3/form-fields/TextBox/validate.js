import _ from 'lodash/fp';
import { trimSpaces } from '../../utils';

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (!state.required) {
    return null;
  }

  if (_.isNil(state.answer) || trimSpaces(state.answer).length < 1) {
    return 'Please fill in this field.';
  }

  return null;
}
