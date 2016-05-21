import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import Redux from 'npm:redux';

let { createStore } = Redux;

let reducer = ((state, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  }

  return state || 0;
});

let store = createStore(reducer);

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    store.subscribe(() => {
      this.notifyPropertyChange('number');
    });
  },

  number: Ember.computed(function() {
    return store.getState();
  }),

  actions: {
    add() {
      store.dispatch({ type: 'ADD' });
    }
  },

  layout: hbs`
    {{number}}
    <button onclick={{action "add"}}>Add</button>
  `
});
