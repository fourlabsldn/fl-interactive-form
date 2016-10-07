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
    el.className = 'fl-if_TextInput-input';
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
    var optionType = config.type === 'RadioBtns' ? 'radio' : 'checkbox';
    var optionName = config.title.replace(/\s'"/gi, '');
    var optionEl;
    var optionLegend;
    var optionWrapper;
    for (var i = 0; i < config.options.length; i++) {
      optionWrapper = document.createElement('label');
      optionWrapper.className = wrapper.className + '-option';
      optionWrapper.className += config.type === 'RadioBtns'
        ? ' fl-if_OptionsInput-radio'
        : ' fl-if_OptionsInput-checkbox';

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
    wrapper.className = 'fl-if_Dropdown fl-if_OptionsInput';

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

  function createCountryDropdownInput(config) {
    config.options = { '1': 'AFGHANISTAN', '2': 'ALBANIA', '3': 'ALGERIA', '4': 'AMERICAN SAMOA', '5': 'ANDORRA', '6': 'ANGOLA', '7': 'ANGUILLA', '8': 'ANTARCTICA', '9': 'ANTIGUA AND BARBUDA', '10': 'ARGENTINA', '11': 'ARMENIA', '12': 'ARUBA', '13': 'AUSTRALIA', '14': 'AUSTRIA', '15': 'AZERBAIJAN', '16': 'BAHAMAS', '17': 'BAHRAIN', '18': 'BANGLADESH', '19': 'BARBADOS', '20': 'BELARUS', '21': 'BELGIUM', '22': 'BELIZE', '23': 'BENIN', '24': 'BERMUDA', '25': 'BHUTAN', '26': 'BOLIVIA', '27': 'BOSNIA AND HERZEGOWINA', '28': 'BOTSWANA', '29': 'BOUVET ISLAND', '30': 'BRAZIL', '31': 'BRITISH INDIAN OCEAN TERRITORY', '32': 'BRUNEI DARUSSALAM', '33': 'BULGARIA', '34': 'BURKINA FASO', '35': 'BURUNDI', '36': 'CAMBODIA', '37': 'CAMEROON', '38': 'CANADA', '39': 'CAPE VERDE', '40': 'CAYMAN ISLANDS', '41': 'CENTRAL AFRICAN REPUBLIC', '42': 'CHAD', '43': 'CHILE', '44': 'CHINA', '45': 'CHRISTMAS ISLAND', '46': 'COCOS (KEELING) ISLANDS', '47': 'COLOMBIA', '48': 'COMOROS', '49': 'CONGO', '50': 'CONGO, THE DRC', '51': 'COOK ISLANDS', '52': 'COSTA RICA', '53': 'COTE D\'IVOIRE', '54': 'CROATIA (local name: \'Hrvatska)', '55': 'CUBA', '56': 'CYPRUS', '57': 'CZECH REPUBLIC', '58': 'DENMARK', '59': 'DJIBOUTI', '60': 'DOMINICA', '61': 'DOMINICAN REPUBLIC', '62': 'EAST TIMOR', '63': 'ECUADOR', '64': 'EGYPT', '65': 'EL SALVADOR', '242': 'ENGLAND', '66': 'EQUATORIAL GUINEA', '67': 'ERITREA', '68': 'ESTONIA', '69': 'ETHIOPIA', '70': 'FALKLAND ISLANDS (MALVINAS)', '71': 'FAROE ISLANDS', '72': 'FIJI', '73': 'FINLAND', '74': 'FRANCE', '75': 'FRANCE, METROPOLITAN', '76': 'FRENCH GUIANA', '77': 'FRENCH POLYNESIA', '78': 'FRENCH SOUTHERN TERRITORIES', '79': 'GABON', '246': 'GALAPAGOS', '80': 'GAMBIA', '81': 'GEORGIA', '82': 'GERMANY', '83': 'GHANA', '84': 'GIBRALTAR', '85': 'GREECE', '86': 'GREENLAND', '87': 'GRENADA', '88': 'GUADELOUPE', '89': 'GUAM', '90': 'GUATEMALA', '91': 'GUINEA', '92': 'GUINEA-BISSAU', '93': 'GUYANA', '94': 'HAITI', '245': 'HAWAII', '95': 'HEARD AND MC DONALD ISLANDS', '96': 'HOLY SEE (VATICAN CITY STATE)', '97': 'HONDURAS', '98': 'HONG KONG', '99': 'HUNGARY', '100': 'ICELAND', '101': 'INDIA', '102': 'INDONESIA', '103': 'IRAN (ISLAMIC REPUBLIC OF)', '104': 'IRAQ', '105': 'IRELAND', '106': 'ISRAEL', '107': 'ITALY', '108': 'JAMAICA', '109': 'JAPAN', '110': 'JORDAN', '111': 'KAZAKHSTAN', '112': 'KENYA', '113': 'KIRIBATI', '114': 'KOREA, D.P.R.O.', '115': 'KOREA, REPUBLIC OF', '116': 'KUWAIT', '117': 'KYRGYZSTAN', '118': 'LAOS', '119': 'LATVIA', '120': 'LEBANON', '121': 'LESOTHO', '122': 'LIBERIA', '123': 'LIBYAN ARAB JAMAHIRIYA', '124': 'LIECHTENSTEIN', '125': 'LITHUANIA', '126': 'LUXEMBOURG', '127': 'MACAU', '128': 'MACEDONIA', '129': 'MADAGASCAR', '130': 'MALAWI', '131': 'MALAYSIA', '132': 'MALDIVES', '133': 'MALI', '134': 'MALTA', '135': 'MARSHALL ISLANDS', '136': 'MARTINIQUE', '137': 'MAURITANIA', '138': 'MAURITIUS', '139': 'MAYOTTE', '140': 'MEXICO', '141': 'MICRONESIA, FEDERATED STATES OF', '142': 'MOLDOVA, REPUBLIC OF', '143': 'MONACO', '144': 'MONGOLIA', '145': 'MONTENEGRO', '146': 'MONTSERRAT', '147': 'MOROCCO', '148': 'MOZAMBIQUE', '244': 'MULTI COUNTRY', '149': 'MYANMAR (Burma)', '150': 'NAMIBIA', '151': 'NAURU', '152': 'NEPAL', '153': 'NETHERLANDS', '154': 'NETHERLANDS ANTILLES', '155': 'NEW CALEDONIA', '156': 'NEW ZEALAND', '157': 'NICARAGUA', '158': 'NIGER', '159': 'NIGERIA', '160': 'NIUE', '161': 'NORFOLK ISLAND', '162': 'NORTHERN MARIANA ISLANDS', '163': 'NORWAY', '164': 'OMAN', '165': 'PAKISTAN', '166': 'PALAU', '167': 'PANAMA', '168': 'PAPUA NEW GUINEA', '169': 'PARAGUAY', '170': 'PERU', '171': 'PHILIPPINES', '172': 'PITCAIRN', '173': 'POLAND', '174': 'PORTUGAL', '175': 'PUERTO RICO', '176': 'QATAR', '177': 'REUNION', '178': 'ROMANIA', '179': 'RUSSIAN FEDERATION', '180': 'RWANDA', '181': 'SAINT KITTS AND NEVIS', '182': 'SAINT LUCIA', '183': 'SAINT VINCENT AND THE GRENADINES', '184': 'SAMOA', '185': 'SAN MARINO', '186': 'SAO TOME AND PRINCIPE', '187': 'SAUDI ARABIA', '243': 'SCOTLAND', '188': 'SENEGAL', '189': 'SERBIA', '190': 'SEYCHELLES', '191': 'SIERRA LEONE', '192': 'SINGAPORE', '193': 'SLOVAKIA (Slovak Republic)', '194': 'SLOVENIA', '195': 'SOLOMON ISLANDS', '196': 'SOMALIA', '197': 'SOUTH AFRICA', '198': 'SOUTH GEORGIA AND SOUTH S.S.', '199': 'SOUTH SUDAN', '200': 'SPAIN', '201': 'SRI LANKA', '202': 'ST. HELENA', '203': 'ST. PIERRE AND MIQUELON', '204': 'SUDAN', '205': 'SURINAME', '206': 'SVALBARD AND JAN MAYEN ISLANDS', '207': 'SWAZILAND', '208': 'SWEDEN', '209': 'SWITZERLAND', '210': 'SYRIAN ARAB REPUBLIC', '211': 'TAIWAN, PROVINCE OF CHINA', '212': 'TAJIKISTAN', '213': 'TANZANIA, UNITED REPUBLIC OF', '214': 'THAILAND', '215': 'TOGO', '216': 'TOKELAU', '217': 'TONGA', '218': 'TRINIDAD AND TOBAGO', '219': 'TUNISIA', '220': 'TURKEY', '221': 'TURKMENISTAN', '222': 'TURKS AND CAICOS ISLANDS', '223': 'TUVALU', '224': 'U.S. MINOR ISLANDS', '225': 'UGANDA', '226': 'UKRAINE', '227': 'UNITED ARAB EMIRATES', '228': 'UNITED KINGDOM', '229': 'UNITED STATES', '230': 'URUGUAY', '231': 'UZBEKISTAN', '232': 'VANUATU', '233': 'VENEZUELA', '234': 'VIETNAM', '235': 'VIRGIN ISLANDS (BRITISH)', '236': 'VIRGIN ISLANDS (U.S.)', '237': 'WALLIS AND FUTUNA ISLANDS', '238': 'WESTERN SAHARA', '239': 'YEMEN', '240': 'ZAMBIA', '241': 'ZIMBABWE' };
    return createDropdownInput(config);
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

/*! (C) WebReflection Mit Style License */
(function(e){function w(e,t,n,r){for(var i,s,o=n.slice(),u=x(t,e),a=0,f=o.length;a<f;a++){i=o[a],typeof i=="object"?typeof i.handleEvent=="function"&&i.handleEvent(u):i.call(e,u);if(u.stoppedImmediatePropagation)break}return s=!u.stoppedPropagation,r&&s&&e.parentNode?e.parentNode.dispatchEvent(u):!u.defaultPrevented}function E(e,t){return{configurable:!0,get:e,set:t}}function S(e,t,n){var r=a(t||e,n);o(e,"textContent",E(function(){return r.get.call(this)},function(e){r.set.call(this,e)}))}function x(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function T(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function N(){if(this.tagName==="BR")return"\n";var e=this.firstChild,t=[];while(e)e.nodeType!==8&&e.nodeType!==7&&t.push(e.textContent),e=e.nextSibling;return t.join("")}function C(e){return e.nodeType!==9&&m.contains(e)}function k(e){var t=document.createEvent("Event");t.initEvent("input",!0,!0),(e.srcElement||e.fromElement||document).dispatchEvent(t)}function L(e){!n&&p.test(document.readyState)&&(n=!n,document.detachEvent(r,L),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function A(e){var t=e==="X"?"Left":"Top",n="client"+e,r="client"+t,i="scroll"+t,s="_@"+n;return function(){return this[s]||(this[s]=this[n]+(m[i]||document.body&&document.body[i]||0)-m[r])}}function O(e){var t;while(t=this.lastChild)this.removeChild(t);e!=null&&this.appendChild(document.createTextNode(e))}function M(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=Object.defineProperty||function(e,t,n){e[t]=n.value},u=Object.defineProperties||function(t,n){for(var r in n)if(f.call(n,r))try{o(t,r,n[r])}catch(i){e.console&&console.log(r+" failed on object:",t,i.message)}},a=Object.getOwnPropertyDescriptor,f=Object.prototype.hasOwnProperty,l=e.Element.prototype,c=e.Text.prototype,h=/^[a-z]+$/,p=/loaded|complete/,d={},v=document.createElement("div"),m=document.documentElement,g=m.removeAttribute,y=m.setAttribute,b=function(e){return{enumerable:!0,writable:!0,configurable:!0,value:e}};S(e.HTMLCommentElement.prototype,l,"nodeValue"),S(e.HTMLScriptElement.prototype,null,"text"),S(c,null,"nodeValue"),S(e.HTMLTitleElement.prototype,null,"text"),o(e.HTMLStyleElement.prototype,"textContent",function(e){return E(function(){return e.get.call(this.styleSheet)},function(t){e.set.call(this.styleSheet,t)})}(a(e.CSSStyleSheet.prototype,"cssText"))),u(l,{textContent:{get:N,set:O},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;t<n;t++)if(e[t].nodeType==1)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(e[t].nodeType==1)return e[t]}},oninput:{get:function(){return this._oninput||null},set:function(e){this._oninput&&(this.removeEventListener("input",this._oninput),this._oninput=e,e&&this.addEventListener("input",e))}},previousElementSibling:{get:function(){var e=this.previousSibling;while(e&&e.nodeType!=1)e=e.previousSibling;return e}},nextElementSibling:{get:function(){var e=this.nextSibling;while(e&&e.nodeType!=1)e=e.nextSibling;return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=t[n].nodeType==1);return e}},addEventListener:b(function(e,t,n){if(typeof t!="function"&&typeof t!="object")return;var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),l=a.h||(a.h=[]),c,p;if(!f.call(a,"w")){a.w=function(e){return e[s]||w(r,M(r,e),l,!1)};if(!f.call(d,i))if(h.test(e)){try{c=document.createEventObject(),c[s]=!0,r.nodeType!=9&&(r.parentNode==null&&v.appendChild(r),(p=r.getAttribute(i))&&g.call(r,i)),r.fireEvent(i,c),d[i]=!0}catch(m){d[i]=!1;while(v.hasChildNodes())v.removeChild(v.firstChild)}p!=null&&y.call(r,i,p)}else d[i]=!1;(a.n=d[i])&&r.attachEvent(i,a.w)}T(l,t)<0&&l[n?"unshift":"push"](t),e==="input"&&r.attachEvent("onkeyup",k)}),dispatchEvent:b(function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):w(t,e,i.h,!0):(u=t.parentNode)?u.dispatchEvent(e):!0,!e.defaultPrevented}),removeEventListener:b(function(e,t,n){if(typeof t!="function"&&typeof t!="object")return;var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?T(a,t):-1;-1<f&&a.splice(f,1)})}),u(c,{addEventListener:b(l.addEventListener),dispatchEvent:b(l.dispatchEvent),removeEventListener:b(l.removeEventListener)}),u(e.XMLHttpRequest.prototype,{addEventListener:b(function(e,t,n){var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),f=a.h||(a.h=[]);T(f,t)<0&&(r[i]||(r[i]=function(){var t=document.createEvent("Event");t.initEvent(e,!0,!0),r.dispatchEvent(t)}),f[n?"unshift":"push"](t))}),dispatchEvent:b(function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i;return o&&(i.n?t.fireEvent(n,e):w(t,e,i.h,!0))}),removeEventListener:b(l.removeEventListener)}),u(e.Event.prototype,{bubbles:b(!0),cancelable:b(!0),preventDefault:b(function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}),stopPropagation:b(function(){this.stoppedPropagation=!0,this.cancelBubble=!0}),stopImmediatePropagation:b(function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}),initEvent:b(function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}),pageX:{get:A("X")},pageY:{get:A("Y")}}),u(e.HTMLDocument.prototype,{defaultView:{get:function(){return this.parentWindow}},textContent:{get:function(){return this.nodeType===11?N.call(this):null},set:function(e){this.nodeType===11&&O.call(this,e)}},addEventListener:b(function(n,s,o){var u=this;l.addEventListener.call(u,n,s,o),t&&n===i&&!p.test(u.readyState)&&(t=!1,u.attachEvent(r,L),e==top&&function a(e){try{u.documentElement.doScroll("left"),L()}catch(t){setTimeout(a,50)}}())}),dispatchEvent:b(l.dispatchEvent),removeEventListener:b(l.removeEventListener),createEvent:b(function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t})}),u(e.Window.prototype,{getComputedStyle:b(function(){function i(e){this._=e}function s(){}var e=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,t=/^(top|right|bottom|left)$/,n=/\-([a-z])/g,r=function(e,t){return t.toUpperCase()};return i.prototype.getPropertyValue=function(i){var s=this._,o=s.style,u=s.currentStyle,a=s.runtimeStyle,f,l,c;return i=(i==="float"?"style-float":i).replace(n,r),f=u?u[i]:o[i],e.test(f)&&!t.test(i)&&(l=o.left,c=a&&a.left,c&&(a.left=u.left),o.left=i==="fontSize"?"1em":f,f=o.pixelLeft+"px",o.left=l,c&&(a.left=c)),f==null?f:f+""||"auto"},s.prototype.getPropertyValue=function(){return null},function(e,t){return t?new s(e):new i(e)}}()),addEventListener:b(function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return w(i,M(i,e),u,!1)}),u=i[o][s]||(i[o][s]=[]),T(u,n)<0&&u[r?"unshift":"push"](n)}),dispatchEvent:b(function(t){var n=e["on"+t.type];return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}),removeEventListener:b(function(t,n,r){var i="on"+t,o=(e[i]||Object)[s],u=o?T(o,n):-1;-1<u&&o.splice(u,1)})}),function(e,t,n){for(n=0;n<t.length;n++)document.createElement(t[n]);e.length||document.createStyleSheet(""),e[0].addRule(t.join(","),"display:block;")}(document.styleSheets,["header","nav","section","article","aside","footer"])})(this.window||global);