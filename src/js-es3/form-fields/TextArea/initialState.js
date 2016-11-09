import info from './info';
import textFieldInitialState from '../TextField/initialState';

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
const initialState = state => {
  return textFieldInitialState(state)
    .then(initialised => Object.assign({}, initialised, info));
};

export default initialState;
