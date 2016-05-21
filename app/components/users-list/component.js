import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

let stateToComputed = (state) => {
  return {
    users: state.users.all
  };
};

let dispatchToActions = (dispatch) => {
  return {
    remove: (id) => dispatch({ type: 'REMOVE_USER', id: id })
  };
};

let UsersListComponent = Ember.Component.extend({
  layout: hbs`
    {{yield users (hash remove=(action "remove"))}}
  `
});

export default connect(stateToComputed, dispatchToActions)(UsersListComponent);
