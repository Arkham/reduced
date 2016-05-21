import Ember from 'ember';
import route from 'ember-redux/route';
import request from 'ember-ajax/request';

let model = (dispatch) => {
  return request('https://api.github.com/users').then((response) => {
    dispatch({
      type: 'DESERIALIZE_USERS',
      response: response
    });
  });
};

let UsersRoute = Ember.Route.extend();

export default route({model})(UsersRoute);
