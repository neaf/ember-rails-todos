import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleComplete() {
      this.todo.set("completed", !this.todo.get("completed"))
      this.todo.save()
    }
  }
});
