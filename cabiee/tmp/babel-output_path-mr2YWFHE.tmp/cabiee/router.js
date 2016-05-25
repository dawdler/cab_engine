define('cabiee/router', ['exports', 'ember', 'cabiee/config/environment'], function (exports, _ember, _cabieeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _cabieeConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('about');
  });

  exports['default'] = Router;
});