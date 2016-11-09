import _ from 'lodash/fp';
import assert from 'fl-assert';

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
export default function getState(oldState, el) {
  const dropdown = el.querySelector('select');
  const selected = dropdown.selectedIndex;

  assert(
    !_.isNil(oldState.options[selected]),
    `Option ${selected} is out of range. Maximum otions is ${oldState.options.length}`
  );

  const newState = Object.assign(
      {},
      oldState,
      { answer: oldState.options[selected] }
  );

  return newState;
}
