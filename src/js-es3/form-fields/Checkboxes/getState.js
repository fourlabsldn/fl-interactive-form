import assert from 'fl-assert';

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
export default function getState(oldState, el) {
  const checkboxes = Array.from(el.querySelectorAll('input'));

  assert(
    checkboxes && checkboxes.length > 0,
    'No checkboxes found. This should never happen, something went wrong.'
  );

  const answer = checkboxes
    .filter(c => c.checked)
    .map(c => c.value);

  const newState = Object.assign(
      {},
      oldState,
      { answer }
  );

  return newState;
}
