var timeApp = angular.module('timeApp', ['angularMoment']);

timeApp.controller('mainController', function() {
	
	// view-model
	var vm = this;
	
	// create new time variable with current date
	vm.time = new Date();
});
