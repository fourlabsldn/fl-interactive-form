/* eslint-env es6: false */
/* eslint-disable no-var, comma-dangle, vars-on-top, prefer-template,
  prefer-arrow-callback, func-names
*/
/* globals xController */

/**
 *
 *	Exports flInteractiveForm right down at the end of this file.
 *	flInteractiveForm.create is used to create a form.
 *
 */

// ================= HELPERS ==================//
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function fakeEvent(obj) {
  return { detail: obj };
}


// ------------ END OF HELPERS ----------------//
// ================= INPUTS ===================//
//
//   All inputs implement the `getValue` method.
//

// ---- TEXT INPUT
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

  el.getValue = function getValue() {
    return el.value;
  };

  return el;
}

// ---- RADIO AND CHECKBOX INPUT

function createOptionsInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = config.type === 'RadioBtns' ? 'fl-if_RadioBtns' : 'fl-if_Checkboxes';

  var options = [];
  var optionType = config.type === 'RadioBtns' ? 'radio' : 'checkbox';
  var optionName = config.title.replace(/\s'"/gi, '');
  var optionEl;
  var optionLegend;
  var optionWrapper;
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
    options.push(optionEl);
  }

  wrapper.getValue = function getValue() {
    var value = [];
    for (var j = 0; j < options.length; j++) {
      if (options[j].checked) {
        value.push(config.options[j]);
      }
    }

    return value;
  };

  return wrapper;
}

// ---- DROPDOWN INPUT

function createDropdownInput(config) {
  var wrapper = document.createElement('div');
  wrapper.className = 'fl-if_Dropdown';

  var select = document.createElement('select');
  wrapper.appendChild(select);

  var optionEl;
  for (var optionIndex = 0; optionIndex < config.options.length; optionIndex++) {
    optionEl = document.createElement('option');
    optionEl.innerHTML = config.options[optionIndex];

    for (var j = 0; j < config.disabledIndexes.length; j++) {
      if (optionIndex === config.disabledIndexes[j]) {
        optionEl.setAttribute('disabled', true);
      }
    }

    select.appendChild(optionEl);
  }

  wrapper.getValue = function getValue() {
    return select.value;
  };

  return wrapper;
}

// ----------------- END OF INPUTS -------------------//
// ================= FIELD FACTORY ===================//
//
//  Implements the `getValue` method to return the input value
//

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
  wrapper.getValue = inputEl.getValue;
  return wrapper;
}


// ----------- END OF FIELD FACTORY  ---------------//
// =============== FORM STRUCTURE ===================//

function es3Form(config) {
  var form = document.createElement('form');
  form.className = 'fl-if_FormUI';

  var questions = [];
  var questionEl;
  for (var i = 0; i < config.length; i++) {
    questionEl = formField(config[i]);
    questions.push(questionEl);
    form.appendChild(questionEl);
  }

  var submitBtnContainer = document.createElement('div');
  submitBtnContainer.className = 'fl-if_FormField fl-if_FormField--active';

  var submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'Submit';
  submitBtn.className = 'fl-if_NavigationBar-button';
  submitBtnContainer.appendChild(submitBtn);
  form.appendChild(submitBtnContainer);

  var formWrapper = document.createElement('div');
  formWrapper.className = 'fl-if';
  formWrapper.appendChild(form);

  var listeners = [];
  formWrapper.addEventListener = function customAddEventListener(event, callback) {
    if (event === 'submit') {
      listeners.push(callback);
    } else {
      return form.addEventListener(event, callback);
    }
    return null;
  };

  formWrapper.triggerSubmit = function triggerSubmit(formData) {
    var evt = fakeEvent(formData);
    listeners.forEach(function (listener) { listener(evt); });
  };

  form.addEventListener('submit', function submitBtnClick(e) {
    var formData = clone(config);

    formData.forEach(function (field, idx) {
      field.answer = questions[idx].getValue(); // eslint-disable-line no-param-reassign
    });

    formWrapper.triggerSubmit(formData);

    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  return formWrapper;
}

// ----------- END OF FORM STRUCTURE  ---------------//
// =============== GLOBAL OBJECT ===================//

// START HERE
window.flInteractiveForm = {
  create: function create(config) {
    assert(config && config.length !== undefined,
      'The first argument must be a configuration array');

    var form = es3Form(config);
    return form;
  }
};
