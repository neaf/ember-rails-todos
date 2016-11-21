import Ember from 'ember'

export default Ember.Route.extend({
  model() {
  },
  actions: {
    createTodo: function(text) {
      const todo = this.store.createRecord('todo', {
        text: text,
      })
      todo.save()
      this.transitionTo('todos')
    }
  }
})
