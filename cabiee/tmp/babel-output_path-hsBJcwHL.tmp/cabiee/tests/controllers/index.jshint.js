define('cabiee/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 23, col 37, Missing semicolon.\ncontrollers/index.js: line 24, col 17, Missing semicolon.\ncontrollers/index.js: line 33, col 27, Missing semicolon.\ncontrollers/index.js: line 34, col 41, Missing semicolon.\ncontrollers/index.js: line 37, col 43, Missing semicolon.\ncontrollers/index.js: line 33, col 23, \'data\' is defined but never used.\ncontrollers/index.js: line 48, col 37, Missing semicolon.\ncontrollers/index.js: line 27, col 13, \'$\' is not defined.\ncontrollers/index.js: line 35, col 19, \'$\' is not defined.\ncontrollers/index.js: line 38, col 27, \'$\' is not defined.\ncontrollers/index.js: line 39, col 31, \'$\' is not defined.\n\n11 errors');
  });
});