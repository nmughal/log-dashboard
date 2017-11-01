import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('health');
  this.route('env');
  this.route('metric', { path: '/metrics' });
});

export default Router;
