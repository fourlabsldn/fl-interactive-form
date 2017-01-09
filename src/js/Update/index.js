import assert from "fl-assert";

const actionHandlers = {
};

// Redux itself triggers some updates. We don't want to handle these,
// but they are not errors.
const isReduxAction = a => a && a.type && a.type.includes("@@redux");
const isExpectedAction = a => a && a.type && actionHandlers[a.type];

const update = (state, action) =>
  isExpectedAction(action)
    ? actionHandlers[action.type](state, action)
  : isReduxAction(action)
    ? state
  : assert(false, `Invalid action type: ${action.type}`);

export default update;
