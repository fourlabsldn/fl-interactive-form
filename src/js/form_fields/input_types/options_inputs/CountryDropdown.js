import React from 'react';
import Dropdown from './Dropdown';
import globals from '../../../utils/globals';

export default class CountryDropdown extends Dropdown {
  /**
   * @override
   * @method generateOptions
   * @param  {Array<String>} options
   * @return {Array<ReactDOMElements}
   */
  generateOptions() {
    const options = { '1': 'AFGHANISTAN', '2': 'ALBANIA', '3': 'ALGERIA', '4': 'AMERICAN SAMOA', '5': 'ANDORRA', '6': 'ANGOLA', '7': 'ANGUILLA', '8': 'ANTARCTICA', '9': 'ANTIGUA AND BARBUDA', '10': 'ARGENTINA', '11': 'ARMENIA', '12': 'ARUBA', '13': 'AUSTRALIA', '14': 'AUSTRIA', '15': 'AZERBAIJAN', '16': 'BAHAMAS', '17': 'BAHRAIN', '18': 'BANGLADESH', '19': 'BARBADOS', '20': 'BELARUS', '21': 'BELGIUM', '22': 'BELIZE', '23': 'BENIN', '24': 'BERMUDA', '25': 'BHUTAN', '26': 'BOLIVIA', '27': 'BOSNIA AND HERZEGOWINA', '28': 'BOTSWANA', '29': 'BOUVET ISLAND', '30': 'BRAZIL', '31': 'BRITISH INDIAN OCEAN TERRITORY', '32': 'BRUNEI DARUSSALAM', '33': 'BULGARIA', '34': 'BURKINA FASO', '35': 'BURUNDI', '36': 'CAMBODIA', '37': 'CAMEROON', '38': 'CANADA', '39': 'CAPE VERDE', '40': 'CAYMAN ISLANDS', '41': 'CENTRAL AFRICAN REPUBLIC', '42': 'CHAD', '43': 'CHILE', '44': 'CHINA', '45': 'CHRISTMAS ISLAND', '46': 'COCOS (KEELING) ISLANDS', '47': 'COLOMBIA', '48': 'COMOROS', '49': 'CONGO', '50': 'CONGO, THE DRC', '51': 'COOK ISLANDS', '52': 'COSTA RICA', '53': 'COTE D\'IVOIRE', '54': 'CROATIA (local name: \'Hrvatska)', '55': 'CUBA', '56': 'CYPRUS', '57': 'CZECH REPUBLIC', '58': 'DENMARK', '59': 'DJIBOUTI', '60': 'DOMINICA', '61': 'DOMINICAN REPUBLIC', '62': 'EAST TIMOR', '63': 'ECUADOR', '64': 'EGYPT', '65': 'EL SALVADOR', '242': 'ENGLAND', '66': 'EQUATORIAL GUINEA', '67': 'ERITREA', '68': 'ESTONIA', '69': 'ETHIOPIA', '70': 'FALKLAND ISLANDS (MALVINAS)', '71': 'FAROE ISLANDS', '72': 'FIJI', '73': 'FINLAND', '74': 'FRANCE', '75': 'FRANCE, METROPOLITAN', '76': 'FRENCH GUIANA', '77': 'FRENCH POLYNESIA', '78': 'FRENCH SOUTHERN TERRITORIES', '79': 'GABON', '246': 'GALAPAGOS', '80': 'GAMBIA', '81': 'GEORGIA', '82': 'GERMANY', '83': 'GHANA', '84': 'GIBRALTAR', '85': 'GREECE', '86': 'GREENLAND', '87': 'GRENADA', '88': 'GUADELOUPE', '89': 'GUAM', '90': 'GUATEMALA', '91': 'GUINEA', '92': 'GUINEA-BISSAU', '93': 'GUYANA', '94': 'HAITI', '245': 'HAWAII', '95': 'HEARD AND MC DONALD ISLANDS', '96': 'HOLY SEE (VATICAN CITY STATE)', '97': 'HONDURAS', '98': 'HONG KONG', '99': 'HUNGARY', '100': 'ICELAND', '101': 'INDIA', '102': 'INDONESIA', '103': 'IRAN (ISLAMIC REPUBLIC OF)', '104': 'IRAQ', '105': 'IRELAND', '106': 'ISRAEL', '107': 'ITALY', '108': 'JAMAICA', '109': 'JAPAN', '110': 'JORDAN', '111': 'KAZAKHSTAN', '112': 'KENYA', '113': 'KIRIBATI', '114': 'KOREA, D.P.R.O.', '115': 'KOREA, REPUBLIC OF', '116': 'KUWAIT', '117': 'KYRGYZSTAN', '118': 'LAOS', '119': 'LATVIA', '120': 'LEBANON', '121': 'LESOTHO', '122': 'LIBERIA', '123': 'LIBYAN ARAB JAMAHIRIYA', '124': 'LIECHTENSTEIN', '125': 'LITHUANIA', '126': 'LUXEMBOURG', '127': 'MACAU', '128': 'MACEDONIA', '129': 'MADAGASCAR', '130': 'MALAWI', '131': 'MALAYSIA', '132': 'MALDIVES', '133': 'MALI', '134': 'MALTA', '135': 'MARSHALL ISLANDS', '136': 'MARTINIQUE', '137': 'MAURITANIA', '138': 'MAURITIUS', '139': 'MAYOTTE', '140': 'MEXICO', '141': 'MICRONESIA, FEDERATED STATES OF', '142': 'MOLDOVA, REPUBLIC OF', '143': 'MONACO', '144': 'MONGOLIA', '145': 'MONTENEGRO', '146': 'MONTSERRAT', '147': 'MOROCCO', '148': 'MOZAMBIQUE', '244': 'MULTI COUNTRY', '149': 'MYANMAR (Burma)', '150': 'NAMIBIA', '151': 'NAURU', '152': 'NEPAL', '153': 'NETHERLANDS', '154': 'NETHERLANDS ANTILLES', '155': 'NEW CALEDONIA', '156': 'NEW ZEALAND', '157': 'NICARAGUA', '158': 'NIGER', '159': 'NIGERIA', '160': 'NIUE', '161': 'NORFOLK ISLAND', '162': 'NORTHERN MARIANA ISLANDS', '163': 'NORWAY', '164': 'OMAN', '165': 'PAKISTAN', '166': 'PALAU', '167': 'PANAMA', '168': 'PAPUA NEW GUINEA', '169': 'PARAGUAY', '170': 'PERU', '171': 'PHILIPPINES', '172': 'PITCAIRN', '173': 'POLAND', '174': 'PORTUGAL', '175': 'PUERTO RICO', '176': 'QATAR', '177': 'REUNION', '178': 'ROMANIA', '179': 'RUSSIAN FEDERATION', '180': 'RWANDA', '181': 'SAINT KITTS AND NEVIS', '182': 'SAINT LUCIA', '183': 'SAINT VINCENT AND THE GRENADINES', '184': 'SAMOA', '185': 'SAN MARINO', '186': 'SAO TOME AND PRINCIPE', '187': 'SAUDI ARABIA', '243': 'SCOTLAND', '188': 'SENEGAL', '189': 'SERBIA', '190': 'SEYCHELLES', '191': 'SIERRA LEONE', '192': 'SINGAPORE', '193': 'SLOVAKIA (Slovak Republic)', '194': 'SLOVENIA', '195': 'SOLOMON ISLANDS', '196': 'SOMALIA', '197': 'SOUTH AFRICA', '198': 'SOUTH GEORGIA AND SOUTH S.S.', '199': 'SOUTH SUDAN', '200': 'SPAIN', '201': 'SRI LANKA', '202': 'ST. HELENA', '203': 'ST. PIERRE AND MIQUELON', '204': 'SUDAN', '205': 'SURINAME', '206': 'SVALBARD AND JAN MAYEN ISLANDS', '207': 'SWAZILAND', '208': 'SWEDEN', '209': 'SWITZERLAND', '210': 'SYRIAN ARAB REPUBLIC', '211': 'TAIWAN, PROVINCE OF CHINA', '212': 'TAJIKISTAN', '213': 'TANZANIA, UNITED REPUBLIC OF', '214': 'THAILAND', '215': 'TOGO', '216': 'TOKELAU', '217': 'TONGA', '218': 'TRINIDAD AND TOBAGO', '219': 'TUNISIA', '220': 'TURKEY', '221': 'TURKMENISTAN', '222': 'TURKS AND CAICOS ISLANDS', '223': 'TUVALU', '224': 'U.S. MINOR ISLANDS', '225': 'UGANDA', '226': 'UKRAINE', '227': 'UNITED ARAB EMIRATES', '228': 'UNITED KINGDOM', '229': 'UNITED STATES', '230': 'URUGUAY', '231': 'UZBEKISTAN', '232': 'VANUATU', '233': 'VENEZUELA', '234': 'VIETNAM', '235': 'VIRGIN ISLANDS (BRITISH)', '236': 'VIRGIN ISLANDS (U.S.)', '237': 'WALLIS AND FUTUNA ISLANDS', '238': 'WESTERN SAHARA', '239': 'YEMEN', '240': 'ZAMBIA', '241': 'ZIMBABWE' };
    const optionEls = [];
    let countryId;
    for (countryId in options) {
      optionEls.push((
        <option
          key={`${this.props.config.key}${countryId}`}
          tabIndex="0"
          value={countryId}
        >
          {options[countryId]}
        </option>
      ));
    }

    const classes = [
      this.bemSubComponent('option'),
      globals.FOCUS_CLASS,
    ].join(' ');

    return (
      <select
        className={classes}
        onChange={this.onChange}
        ref="selectionBox"
      >
        <option value="">Select an option</option>
        {optionEls}
      </ select>
    );
  }
}
