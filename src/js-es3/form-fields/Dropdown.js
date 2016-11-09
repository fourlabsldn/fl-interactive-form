

// ES3

const isValid = state => true;

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
