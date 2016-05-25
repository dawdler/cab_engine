define('cabiee/tests/test-helper', ['exports', 'cabiee/tests/helpers/resolver', 'ember-qunit'], function (exports, _cabieeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_cabieeTestsHelpersResolver['default']);
});