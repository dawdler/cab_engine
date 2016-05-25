define('cabiee/tests/helpers/resolver', ['exports', 'cabiee/resolver', 'cabiee/config/environment'], function (exports, _cabieeResolver, _cabieeConfigEnvironment) {

  var resolver = _cabieeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _cabieeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _cabieeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});