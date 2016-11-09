import TextBox from './form-fields/TextBox/main';
import TextArea from './form-fields/TextArea/main';
import Dropdown from './form-fields/Dropdown/main';
import assert from 'fl-assert';
import { curry } from 'lodash/fp';

const defaultConstructors = {
  TextBox,
  TextArea,
  Dropdown,
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
