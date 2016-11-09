import info from './info';

// These are the fields that will end up being
// changed on updates
const componentFields = {
  // Compulsory fields
  required: false,
  // Component specific fields
  title: 'Add a title',
  placeholder: 'Add a placeholder',
};

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
const initialState = state => {
  Promise.resolve(
    Object.assign({}, componentFields, info, state)
  );
};

export default initialState;
