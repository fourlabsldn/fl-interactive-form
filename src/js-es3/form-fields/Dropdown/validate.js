import _ from 'lodash/fp';

/**
 * @method validate
 * @param  {Object} state
 * @return {Stirng | null} Error
 */
export default function validate(state) {
  if (_.isNil(state.answer)) {
    return 'Please select an option';
  }

  if (!state.disabledIndexes) {
    return null;
  }

  if (_.includes(state.answer, state.disabledIndexes)) {
    return 'Please select a valid option';
  }

  return null;
}
