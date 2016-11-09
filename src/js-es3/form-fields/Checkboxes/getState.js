import assert from 'fl-assert';
import { map, filter, flow } from 'lodash';

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
export default function getState(oldState, el) {
  const checkboxes = el.querySelectorAll('input');

  assert(
    checkboxes && checkboxes.length > 0,
    'No checkboxes found. This should never happen, something went wrong.'
  );

  const answer = flow(
    filter(c => c.checked),
    map(c => c.value)
  )(checkboxes);

  const newState = Object.assign(
      {},
      oldState,
      { answer }
  );

  return newState;
}
