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
    const options = [
      {
        "value": 0
      },
      {
        "value": 1,
        "caption": "AFGHANISTAN"
      },
      {
        "value": 2,
        "caption": "ALBANIA"
      },
      {
        "value": 3,
        "caption": "ALGERIA"
      },
      {
        "value": 4,
        "caption": "AMERICAN SAMOA"
      },
      {
        "value": 5,
        "caption": "ANDORRA"
      },
      {
        "value": 6,
        "caption": "ANGOLA"
      },
      {
        "value": 7,
        "caption": "ANGUILLA"
      },
      {
        "value": 8,
        "caption": "ANTARCTICA"
      },
      {
        "value": 9,
        "caption": "ANTIGUA AND BARBUDA"
      },
      {
        "value": 10,
        "caption": "ARGENTINA"
      },
      {
        "value": 11,
        "caption": "ARMENIA"
      },
      {
        "value": 12,
        "caption": "ARUBA"
      },
      {
        "value": 13,
        "caption": "AUSTRALIA"
      },
      {
        "value": 14,
        "caption": "AUSTRIA"
      },
      {
        "value": 15,
        "caption": "AZERBAIJAN"
      },
      {
        "value": 16,
        "caption": "BAHAMAS"
      },
      {
        "value": 17,
        "caption": "BAHRAIN"
      },
      {
        "value": 18,
        "caption": "BANGLADESH"
      },
      {
        "value": 19,
        "caption": "BARBADOS"
      },
      {
        "value": 20,
        "caption": "BELARUS"
      },
      {
        "value": 21,
        "caption": "BELGIUM"
      },
      {
        "value": 22,
        "caption": "BELIZE"
      },
      {
        "value": 23,
        "caption": "BENIN"
      },
      {
        "value": 24,
        "caption": "BERMUDA"
      },
      {
        "value": 25,
        "caption": "BHUTAN"
      },
      {
        "value": 26,
        "caption": "BOLIVIA"
      },
      {
        "value": 27,
        "caption": "BOSNIA AND HERZEGOWINA"
      },
      {
        "value": 28,
        "caption": "BOTSWANA"
      },
      {
        "value": 29,
        "caption": "BOUVET ISLAND"
      },
      {
        "value": 30,
        "caption": "BRAZIL"
      },
      {
        "value": 31,
        "caption": "BRITISH INDIAN OCEAN TERRITORY"
      },
      {
        "value": 32,
        "caption": "BRUNEI DARUSSALAM"
      },
      {
        "value": 33,
        "caption": "BULGARIA"
      },
      {
        "value": 34,
        "caption": "BURKINA FASO"
      },
      {
        "value": 35,
        "caption": "BURUNDI"
      },
      {
        "value": 36,
        "caption": "CAMBODIA"
      },
      {
        "value": 37,
        "caption": "CAMEROON"
      },
      {
        "value": 38,
        "caption": "CANADA"
      },
      {
        "value": 39,
        "caption": "CAPE VERDE"
      },
      {
        "value": 40,
        "caption": "CAYMAN ISLANDS"
      },
      {
        "value": 41,
        "caption": "CENTRAL AFRICAN REPUBLIC"
      },
      {
        "value": 42,
        "caption": "CHAD"
      },
      {
        "value": 43,
        "caption": "CHILE"
      },
      {
        "value": 44,
        "caption": "CHINA"
      },
      {
        "value": 45,
        "caption": "CHRISTMAS ISLAND"
      },
      {
        "value": 46,
        "caption": "COCOS (KEELING) ISLANDS"
      },
      {
        "value": 47,
        "caption": "COLOMBIA"
      },
      {
        "value": 48,
        "caption": "COMOROS"
      },
      {
        "value": 49,
        "caption": "CONGO"
      },
      {
        "value": 50,
        "caption": "CONGO, THE DRC"
      },
      {
        "value": 51,
        "caption": "COOK ISLANDS"
      },
      {
        "value": 52,
        "caption": "COSTA RICA"
      },
      {
        "value": 53,
        "caption": "COTE D'IVOIRE"
      },
      {
        "value": 54,
        "caption": "CROATIA (local name: 'Hrvatska)"
      },
      {
        "value": 55,
        "caption": "CUBA"
      },
      {
        "value": 56,
        "caption": "CYPRUS"
      },
      {
        "value": 57,
        "caption": "CZECH REPUBLIC"
      },
      {
        "value": 58,
        "caption": "DENMARK"
      },
      {
        "value": 59,
        "caption": "DJIBOUTI"
      },
      {
        "value": 60,
        "caption": "DOMINICA"
      },
      {
        "value": 61,
        "caption": "DOMINICAN REPUBLIC"
      },
      {
        "value": 62,
        "caption": "EAST TIMOR"
      },
      {
        "value": 63,
        "caption": "ECUADOR"
      },
      {
        "value": 64,
        "caption": "EGYPT"
      },
      {
        "value": 65,
        "caption": "EL SALVADOR"
      },
      {
        "value": 66,
        "caption": "EQUATORIAL GUINEA"
      },
      {
        "value": 67,
        "caption": "ERITREA"
      },
      {
        "value": 68,
        "caption": "ESTONIA"
      },
      {
        "value": 69,
        "caption": "ETHIOPIA"
      },
      {
        "value": 70,
        "caption": "FALKLAND ISLANDS (MALVINAS)"
      },
      {
        "value": 71,
        "caption": "FAROE ISLANDS"
      },
      {
        "value": 72,
        "caption": "FIJI"
      },
      {
        "value": 73,
        "caption": "FINLAND"
      },
      {
        "value": 74,
        "caption": "FRANCE"
      },
      {
        "value": 75,
        "caption": "FRANCE, METROPOLITAN"
      },
      {
        "value": 76,
        "caption": "FRENCH GUIANA"
      },
      {
        "value": 77,
        "caption": "FRENCH POLYNESIA"
      },
      {
        "value": 78,
        "caption": "FRENCH SOUTHERN TERRITORIES"
      },
      {
        "value": 79,
        "caption": "GABON"
      },
      {
        "value": 80,
        "caption": "GAMBIA"
      },
      {
        "value": 81,
        "caption": "GEORGIA"
      },
      {
        "value": 82,
        "caption": "GERMANY"
      },
      {
        "value": 83,
        "caption": "GHANA"
      },
      {
        "value": 84,
        "caption": "GIBRALTAR"
      },
      {
        "value": 85,
        "caption": "GREECE"
      },
      {
        "value": 86,
        "caption": "GREENLAND"
      },
      {
        "value": 87,
        "caption": "GRENADA"
      },
      {
        "value": 88,
        "caption": "GUADELOUPE"
      },
      {
        "value": 89,
        "caption": "GUAM"
      },
      {
        "value": 90,
        "caption": "GUATEMALA"
      },
      {
        "value": 91,
        "caption": "GUINEA"
      },
      {
        "value": 92,
        "caption": "GUINEA-BISSAU"
      },
      {
        "value": 93,
        "caption": "GUYANA"
      },
      {
        "value": 94,
        "caption": "HAITI"
      },
      {
        "value": 95,
        "caption": "HEARD AND MC DONALD ISLANDS"
      },
      {
        "value": 96,
        "caption": "HOLY SEE (VATICAN CITY STATE)"
      },
      {
        "value": 97,
        "caption": "HONDURAS"
      },
      {
        "value": 98,
        "caption": "HONG KONG"
      },
      {
        "value": 99,
        "caption": "HUNGARY"
      },
      {
        "value": 100,
        "caption": "ICELAND"
      },
      {
        "value": 101,
        "caption": "INDIA"
      },
      {
        "value": 102,
        "caption": "INDONESIA"
      },
      {
        "value": 103,
        "caption": "IRAN (ISLAMIC REPUBLIC OF)"
      },
      {
        "value": 104,
        "caption": "IRAQ"
      },
      {
        "value": 105,
        "caption": "IRELAND"
      },
      {
        "value": 106,
        "caption": "ISRAEL"
      },
      {
        "value": 107,
        "caption": "ITALY"
      },
      {
        "value": 108,
        "caption": "JAMAICA"
      },
      {
        "value": 109,
        "caption": "JAPAN"
      },
      {
        "value": 110,
        "caption": "JORDAN"
      },
      {
        "value": 111,
        "caption": "KAZAKHSTAN"
      },
      {
        "value": 112,
        "caption": "KENYA"
      },
      {
        "value": 113,
        "caption": "KIRIBATI"
      },
      {
        "value": 114,
        "caption": "KOREA, D.P.R.O."
      },
      {
        "value": 115,
        "caption": "KOREA, REPUBLIC OF"
      },
      {
        "value": 116,
        "caption": "KUWAIT"
      },
      {
        "value": 117,
        "caption": "KYRGYZSTAN"
      },
      {
        "value": 118,
        "caption": "LAOS"
      },
      {
        "value": 119,
        "caption": "LATVIA"
      },
      {
        "value": 120,
        "caption": "LEBANON"
      },
      {
        "value": 121,
        "caption": "LESOTHO"
      },
      {
        "value": 122,
        "caption": "LIBERIA"
      },
      {
        "value": 123,
        "caption": "LIBYAN ARAB JAMAHIRIYA"
      },
      {
        "value": 124,
        "caption": "LIECHTENSTEIN"
      },
      {
        "value": 125,
        "caption": "LITHUANIA"
      },
      {
        "value": 126,
        "caption": "LUXEMBOURG"
      },
      {
        "value": 127,
        "caption": "MACAU"
      },
      {
        "value": 128,
        "caption": "MACEDONIA"
      },
      {
        "value": 129,
        "caption": "MADAGASCAR"
      },
      {
        "value": 130,
        "caption": "MALAWI"
      },
      {
        "value": 131,
        "caption": "MALAYSIA"
      },
      {
        "value": 132,
        "caption": "MALDIVES"
      },
      {
        "value": 133,
        "caption": "MALI"
      },
      {
        "value": 134,
        "caption": "MALTA"
      },
      {
        "value": 135,
        "caption": "MARSHALL ISLANDS"
      },
      {
        "value": 136,
        "caption": "MARTINIQUE"
      },
      {
        "value": 137,
        "caption": "MAURITANIA"
      },
      {
        "value": 138,
        "caption": "MAURITIUS"
      },
      {
        "value": 139,
        "caption": "MAYOTTE"
      },
      {
        "value": 140,
        "caption": "MEXICO"
      },
      {
        "value": 141,
        "caption": "MICRONESIA, FEDERATED STATES OF"
      },
      {
        "value": 142,
        "caption": "MOLDOVA, REPUBLIC OF"
      },
      {
        "value": 143,
        "caption": "MONACO"
      },
      {
        "value": 144,
        "caption": "MONGOLIA"
      },
      {
        "value": 145,
        "caption": "MONTENEGRO"
      },
      {
        "value": 146,
        "caption": "MONTSERRAT"
      },
      {
        "value": 147,
        "caption": "MOROCCO"
      },
      {
        "value": 148,
        "caption": "MOZAMBIQUE"
      },
      {
        "value": 149,
        "caption": "MYANMAR (Burma)"
      },
      {
        "value": 150,
        "caption": "NAMIBIA"
      },
      {
        "value": 151,
        "caption": "NAURU"
      },
      {
        "value": 152,
        "caption": "NEPAL"
      },
      {
        "value": 153,
        "caption": "NETHERLANDS"
      },
      {
        "value": 154,
        "caption": "NETHERLANDS ANTILLES"
      },
      {
        "value": 155,
        "caption": "NEW CALEDONIA"
      },
      {
        "value": 156,
        "caption": "NEW ZEALAND"
      },
      {
        "value": 157,
        "caption": "NICARAGUA"
      },
      {
        "value": 158,
        "caption": "NIGER"
      },
      {
        "value": 159,
        "caption": "NIGERIA"
      },
      {
        "value": 160,
        "caption": "NIUE"
      },
      {
        "value": 161,
        "caption": "NORFOLK ISLAND"
      },
      {
        "value": 162,
        "caption": "NORTHERN MARIANA ISLANDS"
      },
      {
        "value": 163,
        "caption": "NORWAY"
      },
      {
        "value": 164,
        "caption": "OMAN"
      },
      {
        "value": 165,
        "caption": "PAKISTAN"
      },
      {
        "value": 166,
        "caption": "PALAU"
      },
      {
        "value": 167,
        "caption": "PANAMA"
      },
      {
        "value": 168,
        "caption": "PAPUA NEW GUINEA"
      },
      {
        "value": 169,
        "caption": "PARAGUAY"
      },
      {
        "value": 170,
        "caption": "PERU"
      },
      {
        "value": 171,
        "caption": "PHILIPPINES"
      },
      {
        "value": 172,
        "caption": "PITCAIRN"
      },
      {
        "value": 173,
        "caption": "POLAND"
      },
      {
        "value": 174,
        "caption": "PORTUGAL"
      },
      {
        "value": 175,
        "caption": "PUERTO RICO"
      },
      {
        "value": 176,
        "caption": "QATAR"
      },
      {
        "value": 177,
        "caption": "REUNION"
      },
      {
        "value": 178,
        "caption": "ROMANIA"
      },
      {
        "value": 179,
        "caption": "RUSSIAN FEDERATION"
      },
      {
        "value": 180,
        "caption": "RWANDA"
      },
      {
        "value": 181,
        "caption": "SAINT KITTS AND NEVIS"
      },
      {
        "value": 182,
        "caption": "SAINT LUCIA"
      },
      {
        "value": 183,
        "caption": "SAINT VINCENT AND THE GRENADINES"
      },
      {
        "value": 184,
        "caption": "SAMOA"
      },
      {
        "value": 185,
        "caption": "SAN MARINO"
      },
      {
        "value": 186,
        "caption": "SAO TOME AND PRINCIPE"
      },
      {
        "value": 187,
        "caption": "SAUDI ARABIA"
      },
      {
        "value": 188,
        "caption": "SENEGAL"
      },
      {
        "value": 189,
        "caption": "SERBIA"
      },
      {
        "value": 190,
        "caption": "SEYCHELLES"
      },
      {
        "value": 191,
        "caption": "SIERRA LEONE"
      },
      {
        "value": 192,
        "caption": "SINGAPORE"
      },
      {
        "value": 193,
        "caption": "SLOVAKIA (Slovak Republic)"
      },
      {
        "value": 194,
        "caption": "SLOVENIA"
      },
      {
        "value": 195,
        "caption": "SOLOMON ISLANDS"
      },
      {
        "value": 196,
        "caption": "SOMALIA"
      },
      {
        "value": 197,
        "caption": "SOUTH AFRICA"
      },
      {
        "value": 198,
        "caption": "SOUTH GEORGIA AND SOUTH S.S."
      },
      {
        "value": 199,
        "caption": "SOUTH SUDAN"
      },
      {
        "value": 200,
        "caption": "SPAIN"
      },
      {
        "value": 201,
        "caption": "SRI LANKA"
      },
      {
        "value": 202,
        "caption": "ST. HELENA"
      },
      {
        "value": 203,
        "caption": "ST. PIERRE AND MIQUELON"
      },
      {
        "value": 204,
        "caption": "SUDAN"
      },
      {
        "value": 205,
        "caption": "SURINAME"
      },
      {
        "value": 206,
        "caption": "SVALBARD AND JAN MAYEN ISLANDS"
      },
      {
        "value": 207,
        "caption": "SWAZILAND"
      },
      {
        "value": 208,
        "caption": "SWEDEN"
      },
      {
        "value": 209,
        "caption": "SWITZERLAND"
      },
      {
        "value": 210,
        "caption": "SYRIAN ARAB REPUBLIC"
      },
      {
        "value": 211,
        "caption": "TAIWAN, PROVINCE OF CHINA"
      },
      {
        "value": 212,
        "caption": "TAJIKISTAN"
      },
      {
        "value": 213,
        "caption": "TANZANIA, UNITED REPUBLIC OF"
      },
      {
        "value": 214,
        "caption": "THAILAND"
      },
      {
        "value": 215,
        "caption": "TOGO"
      },
      {
        "value": 216,
        "caption": "TOKELAU"
      },
      {
        "value": 217,
        "caption": "TONGA"
      },
      {
        "value": 218,
        "caption": "TRINIDAD AND TOBAGO"
      },
      {
        "value": 219,
        "caption": "TUNISIA"
      },
      {
        "value": 220,
        "caption": "TURKEY"
      },
      {
        "value": 221,
        "caption": "TURKMENISTAN"
      },
      {
        "value": 222,
        "caption": "TURKS AND CAICOS ISLANDS"
      },
      {
        "value": 223,
        "caption": "TUVALU"
      },
      {
        "value": 224,
        "caption": "U.S. MINOR ISLANDS"
      },
      {
        "value": 225,
        "caption": "UGANDA"
      },
      {
        "value": 226,
        "caption": "UKRAINE"
      },
      {
        "value": 227,
        "caption": "UNITED ARAB EMIRATES"
      },
      {
        "value": 228,
        "caption": "UNITED KINGDOM"
      },
      {
        "value": 229,
        "caption": "UNITED STATES"
      },
      {
        "value": 230,
        "caption": "URUGUAY"
      },
      {
        "value": 231,
        "caption": "UZBEKISTAN"
      },
      {
        "value": 232,
        "caption": "VANUATU"
      },
      {
        "value": 233,
        "caption": "VENEZUELA"
      },
      {
        "value": 234,
        "caption": "VIETNAM"
      },
      {
        "value": 235,
        "caption": "VIRGIN ISLANDS (BRITISH)"
      },
      {
        "value": 236,
        "caption": "VIRGIN ISLANDS (U.S.)"
      },
      {
        "value": 237,
        "caption": "WALLIS AND FUTUNA ISLANDS"
      },
      {
        "value": 238,
        "caption": "WESTERN SAHARA"
      },
      {
        "value": 239,
        "caption": "YEMEN"
      },
      {
        "value": 240,
        "caption": "ZAMBIA"
      },
      {
        "value": 241,
        "caption": "ZIMBABWE"
      },
      {
        "value": 242,
        "caption": "ENGLAND"
      },
      {
        "value": 243,
        "caption": "SCOTLAND"
      },
      {
        "value": 244,
        "caption": "MULTI COUNTRY"
      },
      {
        "value": 245,
        "caption": "HAWAII"
      },
      {
        "value": 246,
        "caption": "GALAPAGOS"
      }
    ];
    const optionEls = options.map(option => (
      <option
        key={`${this.props.config.key}${option.value}`}
        tabIndex="0"
        value={option.value}
      >
        {option.caption}
      </option>
    ));

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
