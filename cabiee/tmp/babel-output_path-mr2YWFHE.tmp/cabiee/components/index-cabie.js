define('cabiee/components/index-cabie', ['exports', 'ember'], function (exports, _ember) {
           exports['default'] = _ember['default'].Component.extend({
                      dummyTemp: null,

                      didInsertElement: function didInsertElement() {
                                 _ember['default'].run.scheduleOnce('afterRender', this, function () {
                                            this.$("#login-button").fadeOut("slow");
                                 });
                      }
           });
});