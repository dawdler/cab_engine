import Ember from 'ember';

export default Ember.Component.extend({
	dummyTemp: null,

	didInsertElement: function() {
            Ember.run.scheduleOnce('afterRender', this, function() {
            	this.$("#login-button").fadeOut("slow");
            });
    }
});
