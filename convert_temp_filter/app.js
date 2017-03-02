angular.module('tempApp', [])

// .service("TemperatureService", [function() {
// 	this.convertTemp = function(temp, type) {
// 		if (type === "celsius") {
// 			var celsius = (5 / 9 * (temp - 32)).toFixed(2);
// 			return celsius + '°C'; 
// 		} else if (type === "kelvin") {
// 			var kelvin = (5 / 9  * (temp - 32) + 273);
// 			return kelvin.toFixed(2)  + "°K";
// 		} else {
// 			return temp + "°F"
// 		}
// 	}
// }])

.controller('mainController', ['$scope', '$http', function ($scope, $http) {

$scope.tempTypes = [
	{
		value: "farenheit",
		name: "°F"
	}, 
	{
		value: "celsius",
		name: "°C"
	}, 
	{
		value: "kelvin",
		name: "°K"
	}];

$scope.getTemp = function(lat, lon) {
	var key = '32e95c255be35ebd777741a9f03fe5a7';
	var url = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=JSON_CALLBACK';
	$http.jsonp((url))
		.then(function(response){
			var currentTemp = response.data.currently.temperature;
			$scope.cur = currentTemp;
		})
}

// $scope.updateTemp = function(type) {
// 	$scope.curDisplay = TemperatureService.convertTemp($scope.cur, type);
// }

// $scope.getCels = function(cur) {
// 	var celsius = 5 / 9 * (cur - 32);
// 	$scope.celsius = celsius;
// }

// $scope.getKelv = function(cur) {
// 	var kelvin = 5 / 9  * (cur - 32) + 273;
// 	$scope.kelvin = kelvin;
// }

// $scope.getFar = function(cur) {
// 	$scope.far = cur;
// }

}])

.filter('temps', function(){

	return function (temp, type){
		if (type === undefined) {
			return temp;
		}
		if (type === "celsius") {
			return (5 / 9 * (temp - 32)).toFixed(2) + "°C"; 
		} else if (type === "kelvin") {
			return (5 / 9  * (temp - 32) + 273).toFixed(2) + "°K"
		} else {
			return temp + "°F"
		}
	
	};

})




                