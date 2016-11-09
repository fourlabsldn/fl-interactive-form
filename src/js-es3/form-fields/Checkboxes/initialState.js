import info from './info';

// These are the fields that will end up being
// changed on updates
const componentFields = {
  // Compulsory fields
  required: false,
  // Component specific fields
  title: 'Add a title',
  options: [
    { value: 0, caption: 'Insert an option' },
  ],

  // states needed to handle UI
  newOptionValue: '',
  newOptionCaption: '',
};

/**
 * @method initialState
 * @param  {Object} state - A past state. Usually the one created in form-builder
 * @return {Object} newState - The state that will guide the creation of the field's HTMLElement
 */
const initialState = state => {
  return Promise.resolve(
    Object.assign({}, componentFields, info, state)
  );
};

export default initialState;
