/* globals define */
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

// To be used with Require.js
define(function () {
  // ================= HELPERS ==================//
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function fakeEvent(answers) {
    return { detail: { answers: answers } };
  }

  function applyDataMask(field, fieldMask) {
    var mask = fieldMask.split('');

    // For now, this just strips everything that's not a number
    function stripMask(maskedData) {
      function isDigit(char) {
        return /\d/.test(char);
      }
      return maskedData.split('').filter(isDigit);
    }

    // Replace `_` characters with characters from `data`
    function applyMask(data) {
      return mask.map(function (char) {
        if (char != ' ') return char;
        if (data.length == 0) return char;
        return data.shift();
      }).join('')
    }

    function reapplyMask(data) {
      return applyMask(stripMask(data));
    }

    function changed() {
      var oldStart = field.selectionStart;
      var oldEnd = field.selectionEnd;

      field.value = reapplyMask(field.value);

      field.selectionStart = oldStart;
      field.selectionEnd = oldEnd;
    }

    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
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
    el.className = 'fl-if_TextInput-input';
    el.setAttribute('name', config.title);
    el.setAttribute('type', textInputTypes[config.type]);
    el.placeholder = config.placeholder;
    if (config.required) {
      el.setAttribute('required', true);
    }

    el.getValue = function getValue() {
      return el.value;
    };

    return el;
  }

  // ---- RADIO AND CHECKBOX INPUT

  function createOptionsInput(config) {
    var wrapper = document.createElement('div');


    wrapper.className = 'fl-if_OptionsInput';

    var options = [];
    var optionType = config.type === 'RadioButtons' ? 'radio' : 'checkbox';
    var optionName = config.title.replace(/\s'"/gi, '');
    var optionEl;
    var optionLegend;
    var optionWrapper;
    for (var i = 0; i < config.options.length; i++) {
      optionWrapper = document.createElement('label');
      optionWrapper.className = wrapper.className + '-option';
      optionWrapper.className += config.type === 'RadioButtons'
        ? ' fl-if_OptionsInput-radio'
        : ' fl-if_OptionsInput-checkbox';

      optionEl = document.createElement('input');
      optionEl.type = optionType;
      optionEl.setAttribute('value', config.options[i].value);
      optionEl.setAttribute('name', optionName);
      optionWrapper.appendChild(optionEl);

      optionLegend = document.createTextNode(config.options[i].caption);
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
    wrapper.className = 'fl-if_Dropdown fl-if_OptionsInput';

    var select = document.createElement('select');
    select.setAttribute('name', config.title);
    wrapper.appendChild(select);

    var optionEl;
    for (var optionIndex = 0; optionIndex < config.options.length; optionIndex++) {
      optionEl = document.createElement('option');
      optionEl.setAttribute('value', config.options[optionIndex].value);
      optionEl.innerHTML = config.options[optionIndex].caption;

      var disabledIndexes = config.disabledIndexes || [];
      for (var j = 0; j < disabledIndexes.length; j++) {
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

  function createCountryDropdownInput(config) {
    config.options = [ "AFGHANISTAN", "ALBANIA", "ALGERIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", "ANGUILLA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ARGENTINA", "ARMENIA", "ARUBA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOWINA", "BOTSWANA", "BOUVET ISLAND", "BRAZIL", "BRITISH INDIAN OCEAN TERRITORY", "BRUNEI DARUSSALAM", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "CHRISTMAS ISLAND", "COCOS (KEELING) ISLANDS", "COLOMBIA", "COMOROS", "CONGO", "CONGO, THE DRC", "COOK ISLANDS", "COSTA RICA", "COTE D'IVOIRE", "CROATIA (local name: 'Hrvatska)", "CUBA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "EAST TIMOR", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FALKLAND ISLANDS (MALVINAS)", "FAROE ISLANDS", "FIJI", "FINLAND", "FRANCE", "FRANCE, METROPOLITAN", "FRENCH GUIANA", "FRENCH POLYNESIA", "FRENCH SOUTHERN TERRITORIES", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GIBRALTAR", "GREECE", "GREENLAND", "GRENADA", "GUADELOUPE", "GUAM", "GUATEMALA", "GUINEA", "GUINEA-BISSAU", "GUYANA", "HAITI", "HEARD AND MC DONALD ISLANDS", "HOLY SEE (VATICAN CITY STATE)", "HONDURAS", "HONG KONG", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "IRAN (ISLAMIC REPUBLIC OF)", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KOREA, D.P.R.O.", "KOREA, REPUBLIC OF", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYAN ARAB JAMAHIRIYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAU", "MACEDONIA", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MAYOTTE", "MEXICO", "MICRONESIA, FEDERATED STATES OF", "MOLDOVA, REPUBLIC OF", "MONACO", "MONGOLIA", "MONTENEGRO", "MONTSERRAT", "MOROCCO", "MOZAMBIQUE", "MYANMAR (Burma)", "NAMIBIA", "NAURU", "NEPAL", "NETHERLANDS", "NETHERLANDS ANTILLES", "NEW CALEDONIA", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NIUE", "NORFOLK ISLAND", "NORTHERN MARIANA ISLANDS", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "PITCAIRN", "POLAND", "PORTUGAL", "PUERTO RICO", "QATAR", "REUNION", "ROMANIA", "RUSSIAN FEDERATION", "RWANDA", "SAINT KITTS AND NEVIS", "SAINT LUCIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAO TOME AND PRINCIPE", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA (Slovak Republic)", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SOUTH AFRICA", "SOUTH GEORGIA AND SOUTH S.S.", "SOUTH SUDAN", "SPAIN", "SRI LANKA", "ST. HELENA", "ST. PIERRE AND MIQUELON", "SUDAN", "SURINAME", "SVALBARD AND JAN MAYEN ISLANDS", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIAN ARAB REPUBLIC", "TAIWAN, PROVINCE OF CHINA", "TAJIKISTAN", "TANZANIA, UNITED REPUBLIC OF", "THAILAND", "TOGO", "TOKELAU", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TURKS AND CAICOS ISLANDS", "TUVALU", "U.S. MINOR ISLANDS", "UGANDA", "UKRAINE", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "URUGUAY", "UZBEKISTAN", "VANUATU", "VENEZUELA", "VIETNAM", "VIRGIN ISLANDS (BRITISH)", "VIRGIN ISLANDS (U.S.)", "WALLIS AND FUTUNA ISLANDS", "WESTERN SAHARA", "YEMEN", "ZAMBIA", "ZIMBABWE", "ENGLAND", "SCOTLAND", "MULTI COUNTRY", "HAWAII", "GALAPAGOS"];
    config.disabledIndexes = [];
    return createDropdownInput(config);
  }

  function createDateInput(config) {
    var dateField = document.createElement('input');
    dateField.setAttribute('type', 'text');
    dateField.className = 'fl-if_TextInput-input';
    dateField.style = 'text-align: center;';
    dateField.setAttribute('placeholder', 'DD/MM/YYY');
    applyDataMask(dateField, '  /  /    ');
    dateField.getValue = function () { return dateField.value; };
    return dateField;
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
    CountryDropdown: createCountryDropdownInput,
    RadioButtons: createOptionsInput,
    DateField: createDateInput
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
      for (var j = 0; j < listeners.length; j++) {
        listeners[j](evt);
      }
    };

    form.addEventListener('submit', function submitBtnClick(e) {
      var formData = clone(config);

      for (var j = 0; j < formData.length; j++) {
        formData[j].answer = questions[j].getValue();
      }

      formWrapper.triggerSubmit(formData);

      e.preventDefault();
      e.stopPropagation();
      console.log('Not blocking anything')
      return false;
    });

    return formWrapper;
  }

  // ----------- END OF FORM STRUCTURE  ---------------//
  // =============== GLOBAL OBJECT ===================//

  // START HERE
  var flInteractiveForm = {
    create: function create(config) {
      assert(config && config.length !== undefined,
        'The first argument must be a configuration array');

      var form = es3Form(config);
      return form;
    }
  };

  window.flInteractiveForm = flInteractiveForm;
  return flInteractiveForm;
});
