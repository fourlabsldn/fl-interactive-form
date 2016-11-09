import assert from 'fl-assert';
import { curry } from 'lodash/fp';

import TextBox from './form-fields/TextBox/main';
import TextArea from './form-fields/TextArea/main';
import Dropdown from './form-fields/Dropdown/main';
import EmailBox from './form-fields/EmailBox/main';
import TelephoneBox from './form-fields/TelephoneBox/main';
import NumberBox from './form-fields/NumberBox/main';
import Checkboxes from './form-fields/Checkboxes/main';
import RadioButtons from './form-fields/RadioButtons/main';

const defaultConstructors = {
  TextBox,
  TextArea,
  Dropdown,
  EmailBox,
  TelephoneBox,
  NumberBox,
  Checkboxes,
  RadioButtons,
};

const getConstructor = curry((customConstructors, config) => {
  const allConstructors = Object.assign({}, defaultConstructors, customConstructors);

  const fieldConstructor = allConstructors[config.type] || allConstructors[config.primitiveType];

  assert(
    fieldConstructor,
    `No field constructor available for ${config.type}.`
  );

  return fieldConstructor;
});


export default getConstructor;
