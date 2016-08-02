/* eslint-env es6: false */
/* eslint-disable no-var, comma-dangle, vars-on-top */
/* globals xController */

xController((xdiv) => {
  const config = JSON.parse(xdiv.getAttribute('data-config'));
  var form = es3Form(config);
  xdiv.appendChild(form);
});


function es3Form(config) {
  var formWrapper = document.createelement('form');
  formWrapper.className = 'fl-if_FormUI';

  var questionEl;
  for (var i = 0; i < config.questions.length; i++) {
    questionEl = formField(config.questions[i]);
    formWrapper.appendChild(questionEl);
  }

  var submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  formWrapper.appendChild(submitBtn);
  return formWrapper;
}


/**
 * @method formField
 * @param  {Object} config Question configuration object
 * @return {HTMLElement}
 */
var inputCreators = {
  EmailBox: createTextInput,
  NumberBox: createTextInput,
  TelephoneBox: createTextInput,
  TextBox: createTextInput,
  TextArea: createTextInput,
  Checkboxes: createOptionsInput,
  Dropdown: createDropdownInput,
  RadioBtns: createOptionsInput
};

function formField(config) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_FormField';

  var legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';

  var inputEl = inputCreators[config.type](config);
  wrapper.appendChild(legend);
  wrapper.appendChild(inputEl);
  return wrapper;
}

var textInputTypes = {
  TextArea: 'text',
  TextBox: 'text',
  EmailBox: 'email',
  NumberBox: 'number',
  TelephoneBox: 'telephone'
};
function createTextInput(config) {
  var tagName = config.type === 'TextArea' ? 'textarea' : 'input';
  var el = document.createElement(tagName);
  el.type = textInputTypes[config.type];
  el.placeholder = config.placeholder;
  return el;
}

function createOptionsInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = config.type === 'RadioBtns' ? 'fl-if_RadioBtns' : 'fl-if_Checkboxes';

  var optionEl;
  var optionType = config.type === 'RadioBtns' ? 'radio' : 'checkbox';
  var optionName = config.title.replace(/\s'"/gi, '');
  for (var i = 0; i < config.options.length; i++) {
    optionEl = document.createElement('input');
    optionEl.type = optionType;
    optionEl.name = optionName;
    optionEl.innerHTML = config.options[i];
    wrapper.appendChild(optionEl);
  }

  return wrapper;
}

function createDropdownInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_Dropdown';

  var optionEl;
  var select = document.createElement('select');
  for (var i = 0; i < config.options.length; i++) {
    optionEl = document.createElement('option');
    optionEl.innerHTML = config.options[i];
    select.appendChild(optionEl);
  }
  return wrapper;
}
