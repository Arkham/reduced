import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

let stateToComputed = (state) => {
  return {
    number: state.number
  };
};

let dispatchToActions = (dispatch) => {
  return {
    add: () => dispatch({ type: 'ADD' })
  };
};

let AdderComponent = Ember.Component.extend({
  layout: hbs`
    {{number}}
    <button onclick={{action "add"}}>Add</button>
  `
});

export default connect(stateToComputed, dispatchToActions)(AdderComponent);
