import Application from '@ember/application';
import Inflector from 'ember-inflector';


import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

const inflector = Inflector.inflector;
inflector.irregular('env', 'env');
loadInitializers(App, config.modulePrefix);

export default App;


