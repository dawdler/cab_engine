import Ember from 'ember';

export default Ember.Component.extend({
	dummyTemp: null,

	didInsertElement: function() {
            Ember.run.scheduleOnce('afterRender', this, function() {
            	// fire the ajax to get different drop points from backend
            	$.ajax({
			  		type: 'GET',
			  		data: {},
           	  		dataType: "json",	
			  		url: "http://0.0.0.0:3000/points",
			  		
			  		success: function(vehicles1) {
			  			var data
			  			console.log(vehicles1)
			  			$.each(vehicles1, function (i,v)
							{
  								console.log(i,v)
  								$("#from-loc").append(
              					$('<option />')
                  				.text(v.name)
                  				.val(v.name)
          						);

							});
				
			  			},
			  		error: function(e) {
			  			console.log(e)
			  		}
			  	});
            });

    }
});
