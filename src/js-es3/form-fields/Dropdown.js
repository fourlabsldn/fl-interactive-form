const info = {
  // Compulsory
  type: 'Dropdown',
  displayName: 'Dropdown',
  group: 'Options Components',
};

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
  errorShowing: null,
};

const initialState = () => Promise.resolve(Object.assign({}, componentFields, info));

// ES3

const isValid = el => true;

const getState = (oldState, el) => oldState;

const render = state => document.createElement('div');

const showErrors = (showHide, oldState) => oldState

const Dropdown = {
  initialState,
  es3: {
    isValid,
    getState,
    render,
    showErrors,
  },
};

export default Dropdown;
