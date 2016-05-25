define('cabiee/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'cabiee/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _cabieeConfigEnvironment) {

  var name = _cabieeConfigEnvironment['default'].APP.name;
  var version = _cabieeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});