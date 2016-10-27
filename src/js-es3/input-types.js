/* eslint-disable
  no-var,
  comma-dangle,
  vars-on-top,
  prefer-template,
  complexity,
  no-param-reassign,
  quotes
*/

//
//
//
//   All inputs implement the `getValue` method.
//
//
//

import { applyDataMask } from './utils';

const textInputTypes = {
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

  const options = [];
  const optionType = config.type === 'RadioButtons' ? 'radio' : 'checkbox';
  const optionName = config.title.replace(/\s'"/gi, '');
  for (var i = 0; i < config.options.length; i++) {
    const optionID = Date.now() + Math.random();
    const optionWrapper = document.createElement('div');
    optionWrapper.className = "fl-if_OptionsInput-optionWrapper";

    const optionEl = document.createElement('input');
    optionEl.id = optionID;
    optionEl.type = optionType;
    optionEl.setAttribute('value', config.options[i].value);
    optionEl.setAttribute('name', optionName);
    optionWrapper.appendChild(optionEl);

    const label = document.createElement('label');
    label.setAttribute('for', optionID);
    label.className = wrapper.className + '-option';
    label.className += config.type === 'RadioButtons'
    ? ' fl-if_OptionsInput-radio'
    : ' fl-if_OptionsInput-checkbox';
    optionWrapper.appendChild(label);

    const optionLegend = document.createTextNode(config.options[i].caption);
    label.appendChild(optionLegend);

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
  select.className = "fl-if_Dropdown-option";
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
  config.options = ["AFGHANISTAN", "ALBANIA", "ALGERIA", "AMERICAN SAMOA", "ANDORRA", "ANGOLA", "ANGUILLA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ARGENTINA", "ARMENIA", "ARUBA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BENIN", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA AND HERZEGOWINA", "BOTSWANA", "BOUVET ISLAND", "BRAZIL", "BRITISH INDIAN OCEAN TERRITORY", "BRUNEI DARUSSALAM", "BULGARIA", "BURKINA FASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CAPE VERDE", "CAYMAN ISLANDS", "CENTRAL AFRICAN REPUBLIC", "CHAD", "CHILE", "CHINA", "CHRISTMAS ISLAND", "COCOS (KEELING) ISLANDS", "COLOMBIA", "COMOROS", "CONGO", "CONGO, THE DRC", "COOK ISLANDS", "COSTA RICA", "COTE D'IVOIRE", "CROATIA (local name: 'Hrvatska)", "CUBA", "CYPRUS", "CZECH REPUBLIC", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICAN REPUBLIC", "EAST TIMOR", "ECUADOR", "EGYPT", "EL SALVADOR", "EQUATORIAL GUINEA", "ERITREA", "ESTONIA", "ETHIOPIA", "FALKLAND ISLANDS (MALVINAS)", "FAROE ISLANDS", "FIJI", "FINLAND", "FRANCE", "FRANCE, METROPOLITAN", "FRENCH GUIANA", "FRENCH POLYNESIA", "FRENCH SOUTHERN TERRITORIES", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GIBRALTAR", "GREECE", "GREENLAND", "GRENADA", "GUADELOUPE", "GUAM", "GUATEMALA", "GUINEA", "GUINEA-BISSAU", "GUYANA", "HAITI", "HEARD AND MC DONALD ISLANDS", "HOLY SEE (VATICAN CITY STATE)", "HONDURAS", "HONG KONG", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "IRAN (ISLAMIC REPUBLIC OF)", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KOREA, D.P.R.O.", "KOREA, REPUBLIC OF", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYAN ARAB JAMAHIRIYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACAU", "MACEDONIA", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MALTA", "MARSHALL ISLANDS", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MAYOTTE", "MEXICO", "MICRONESIA, FEDERATED STATES OF", "MOLDOVA, REPUBLIC OF", "MONACO", "MONGOLIA", "MONTENEGRO", "MONTSERRAT", "MOROCCO", "MOZAMBIQUE", "MYANMAR (Burma)", "NAMIBIA", "NAURU", "NEPAL", "NETHERLANDS", "NETHERLANDS ANTILLES", "NEW CALEDONIA", "NEW ZEALAND", "NICARAGUA", "NIGER", "NIGERIA", "NIUE", "NORFOLK ISLAND", "NORTHERN MARIANA ISLANDS", "NORWAY", "OMAN", "PAKISTAN", "PALAU", "PANAMA", "PAPUA NEW GUINEA", "PARAGUAY", "PERU", "PHILIPPINES", "PITCAIRN", "POLAND", "PORTUGAL", "PUERTO RICO", "QATAR", "REUNION", "ROMANIA", "RUSSIAN FEDERATION", "RWANDA", "SAINT KITTS AND NEVIS", "SAINT LUCIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SAN MARINO", "SAO TOME AND PRINCIPE", "SAUDI ARABIA", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONE", "SINGAPORE", "SLOVAKIA (Slovak Republic)", "SLOVENIA", "SOLOMON ISLANDS", "SOMALIA", "SOUTH AFRICA", "SOUTH GEORGIA AND SOUTH S.S.", "SOUTH SUDAN", "SPAIN", "SRI LANKA", "ST. HELENA", "ST. PIERRE AND MIQUELON", "SUDAN", "SURINAME", "SVALBARD AND JAN MAYEN ISLANDS", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIAN ARAB REPUBLIC", "TAIWAN, PROVINCE OF CHINA", "TAJIKISTAN", "TANZANIA, UNITED REPUBLIC OF", "THAILAND", "TOGO", "TOKELAU", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TURKS AND CAICOS ISLANDS", "TUVALU", "U.S. MINOR ISLANDS", "UGANDA", "UKRAINE", "UNITED ARAB EMIRATES", "UNITED KINGDOM", "UNITED STATES", "URUGUAY", "UZBEKISTAN", "VANUATU", "VENEZUELA", "VIETNAM", "VIRGIN ISLANDS (BRITISH)", "VIRGIN ISLANDS (U.S.)", "WALLIS AND FUTUNA ISLANDS", "WESTERN SAHARA", "YEMEN", "ZAMBIA", "ZIMBABWE", "ENGLAND", "SCOTLAND", "MULTI COUNTRY", "HAWAII", "GALAPAGOS"]; // eslint-disable-line max-len
  config.disabledIndexes = [];
  return createDropdownInput(config);
}

function createDateInput(config) { // eslint-disable-line no-unused-vars
  var dateField = document.createElement('input');
  dateField.setAttribute('type', 'text');
  dateField.className = 'fl-if_TextInput-input';
  dateField.style.textAlign = 'center';
  dateField.value = 'DD/MM/YYYY';
  applyDataMask(dateField, '  /  /    ');
  dateField.getValue = function () { return dateField.value; };
  return dateField;
}


// ================= FIELD FACTORY ===================//
//
//  Implements the `getValue` method to return the input value
//

const inputCreators = {
  EmailBox: createTextInput,
  NumberBox: createTextInput,
  TelephoneBox: createTextInput,
  TextBox: createTextInput,
  TextArea: createTextInput,
  Checkboxes: createOptionsInput,
  Dropdown: createDropdownInput,
  CountryDropdown: createCountryDropdownInput,
  RadioButtons: createOptionsInput,
  DateField: createDateInput,
};

/**
 * @method formField
 * @param  {Object} config Question configuration object
 * @return {HTMLElement}
 */
export default function formField(config) {
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
