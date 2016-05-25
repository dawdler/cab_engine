define('cabiee/app', ['exports', 'ember', 'cabiee/resolver', 'ember-load-initializers', 'cabiee/config/environment'], function (exports, _ember, _cabieeResolver, _emberLoadInitializers, _cabieeConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _cabieeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _cabieeConfigEnvironment['default'].podModulePrefix,
    Resolver: _cabieeResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _cabieeConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});