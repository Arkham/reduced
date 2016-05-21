import _ from 'lodash/lodash';

const initialState = {
  all: []
};

export default ((state, action) => {
  if (action.type === 'DESERIALIZE_USERS') {
    return _.extend({}, state, {
      all: _.uniq([].concat(state.all, action.response))
    });
  }

  if (action.type === 'REMOVE_USER') {
    return _.extend({}, state, {
      all: _.reject(state.all, (elem) => {
        return elem.id == action.id;
      })
    });
  }

  return state || initialState;
});
