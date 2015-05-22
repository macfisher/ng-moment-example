var timeApp = angular.module('timeApp', ['angularMoment']);

timeApp.controller('mainController', function() {
	
	var vm = this;
	
	vm.timeOne = new Date();
});
