import Ember from 'ember';

const { inject, get } = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),
  redux: inject.service(),

  model() {
    let ajax = get(this, 'ajax');
    let redux = get(this, 'redux');

    return ajax.request('https://api.github.com/users').then((response) => {
      redux.dispatch({
        type: 'DESERIALIZE_USERS',
        response: response
      });
    });
  }
});
