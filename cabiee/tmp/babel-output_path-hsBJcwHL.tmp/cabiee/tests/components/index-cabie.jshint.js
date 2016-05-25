define('cabiee/tests/components/index-cabie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/index-cabie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/index-cabie.js should pass jshint.');
  });
});