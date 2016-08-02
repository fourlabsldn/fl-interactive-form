/* eslint-env es6: false */
/* eslint-disable no-var, comma-dangle, vars-on-top, prefer-template */
/* globals xController */

function es3Form(config) {
  var formWrapper = document.createElement('form');
  formWrapper.className = 'fl-if_FormUI';

  var questionEl;
  for (var i = 0; i < config.questions.length; i++) {
    questionEl = formField(config.questions[i]);
    formWrapper.appendChild(questionEl);
  }

  var submitBtnContainer = document.createElement('div');
  submitBtnContainer.className = 'fl-if_FormField fl-if_FormField--active';

  var submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'Submit';
  submitBtn.className = 'fl-if_NavigationBar-button';
  submitBtnContainer.appendChild(submitBtn);

  formWrapper.appendChild(submitBtnContainer);
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
  wrapper.className = 'fl-if_FormField fl-if_FormField--active';

  var legend = document.createElement('p');
  legend.className = 'fl-if_FormField-legend';
  legend.innerHTML = config.title;

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
  el.className = 'fl-if_TextBox-input';
  el.setAttribute('type', textInputTypes[config.type]);
  el.placeholder = config.placeholder;
  return el;
}

function createOptionsInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = config.type === 'RadioBtns' ? 'fl-if_RadioBtns' : 'fl-if_Checkboxes';

  var optionWrapper;
  var optionEl;
  var optionType = config.type === 'RadioBtns' ? 'radio' : 'checkbox';
  var optionName = config.title.replace(/\s'"/gi, '');
  var optionLegend;
  for (var i = 0; i < config.options.length; i++) {
    optionWrapper = document.createElement('label');
    optionWrapper.className = wrapper.className + '-option';

    optionEl = document.createElement('input');
    optionEl.type = optionType;
    optionEl.name = optionName;
    optionWrapper.appendChild(optionEl);

    optionLegend = document.createTextNode(config.options[i]);
    optionWrapper.appendChild(optionLegend);
    wrapper.appendChild(optionWrapper);
  }

  return wrapper;
}

function createDropdownInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_Dropdown';

  var select = document.createElement('select');
  wrapper.appendChild(select);

  var optionEl;
  for (var i = 0; i < config.options.length; i++) {
    optionEl = document.createElement('option');
    optionEl.innerHTML = config.options[i];
    select.appendChild(optionEl);
  }
  return wrapper;
}

// START HERE
xController(function (xdiv) {
  var config = JSON.parse(xdiv.getAttribute('data-config'));
  var form = es3Form(config);
  xdiv.appendChild(form);
});
