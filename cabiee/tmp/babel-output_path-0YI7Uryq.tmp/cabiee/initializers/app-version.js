define('cabiee/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'cabiee/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _cabieeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_cabieeConfigEnvironment['default'].APP.name, _cabieeConfigEnvironment['default'].APP.version)
  };
});