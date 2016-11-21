import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/'}, function() {
    this.route('todos', { path: '/todos'}, function() {
      this.route('new', { path: '/new' })
    })
  })
});

export default Router;
