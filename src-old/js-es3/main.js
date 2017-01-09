import './polyfills';
import es3Form from './form-creator';
import { assert } from './utils';

// =============== GLOBAL OBJECT ===================//

// START HERE
const flInteractiveForm = {
  create: function create(config) {
    assert(config && config.length !== undefined,
      'The first argument must be a configuration array');

    const form = es3Form(config);
    return form;
  },
};

export default flInteractiveForm;
