import Ember from 'ember';

export default Ember.Controller.extend({
	isDisabled: true,
	employeeID: null,
	fromLocation: null,
	toLocation: null,
	timeGiven: null,
	selectedFrom: 'Tom',
  	vehicleIndex: 0,
  	
  	vehicle: Ember.computed('vehicleIndex', function() {
    	return this.get('vehicles')[this.get('vehicleIndex')];
  	}),  	

  	vehicles: [],
  	
  	// fromPoints[] will be populated from backend using component
  	fromPoints: [],	

  	
	actions: {
		searchCabs() {  			
			// feature yet to be implemented			

		}
	}
});
