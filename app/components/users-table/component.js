import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

let UsersTableComponent = Ember.Component.extend({
  layout: hbs`
    {{#each users as |user|}}
      <div>{{user.login}}</div>
      <button onclick={{action remove user.id}}>Remove</button>
    {{/each}}
  `
});

export default UsersTableComponent;
