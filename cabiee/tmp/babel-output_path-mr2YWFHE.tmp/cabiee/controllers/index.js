define('cabiee/controllers/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		isDisabled: true,
		employeeID: null,
		fromLocation: null,
		toLocation: null,
		timeGiven: null,
		selectedFrom: 'Tom',
		fromPoints: ["Yehuda", "Tom"],
		vehicleIndex: 0,

		vehicle: _ember['default'].computed('vehicleIndex', function () {
			return this.get('vehicles')[this.get('vehicleIndex')];
		}),

		vehicles: [],

		actions: {
			searchCabs: function searchCabs() {
				_ember['default'].run.scheduleOnce('afterRender', this, function () {
					console.log("there");
				});

				console.log(this.get('employeeID'));
				$.ajax({
					type: 'GET',
					data: {},
					dataType: "json",
					url: "http://192.168.1.105:3000/points",
					success: function success(vehicles1) {
						var data;
						console.log(vehicles1);
						$.each(vehicles1, function (i, v) {
							console.log(i, v);
							$("#from-loc").append($('<option />').text(v.name).val(v.name));
						});
					},
					error: function error(_error) {
						console.log(_error);
					}
				});
			}
		}
	});
});