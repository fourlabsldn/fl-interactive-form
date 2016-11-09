import assert from 'fl-assert';

/**
 * @method getState
 * @param  {Object} oldState
 * @param  {HTMLElement} el - The element created from oldState
 * @return {Object} state - A new state to be rendered
 */
export default function getState(oldState, el) {
  const input = el.querySelector('input');

  assert(input, 'No input found in form element. This should never happen, something went wrong.');

  const answer = input.value;

  const newState = Object.assign(
      {},
      oldState,
      { answer }
  );

  return newState;
}
