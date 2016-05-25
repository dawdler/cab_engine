import Ember from 'ember';

export default Ember.Controller.extend({
	isDisabled: true,
	employeeID: null,
	fromLocation: null,
	toLocation: null,
	timeGiven: null,
	selectedFrom: 'Tom',
  	fromPoints: ["Yehuda", "Tom"],
  	vehicleIndex: 0,
  	
  	vehicle: Ember.computed('vehicleIndex', function() {
    	return this.get('vehicles')[this.get('vehicleIndex')];
  	}),

  	vehicles: [],	

  	
	actions: {
		searchCabs() {
			Ember.run.scheduleOnce('afterRender', this, function() {
    			console.log("there")
  			})
  			
			console.log(this.get('employeeID'));
			$.ajax({
			  type: 'GET',
			  data: {},
           	  dataType: "json",	
			  url: "http://192.168.1.105:3000/points",
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

		}
	}
});
