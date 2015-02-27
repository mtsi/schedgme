/**'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);**/
var app = angular.module('SchedgMeApp',['ui.bootstrap']);
app.controller('DropdownCtrl', function($scope, $log){
	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {
		$log.log('Dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopProagation();
		$scope.status.isopen = !$scope.status.isopen;
	};

	

	$scope.actions = [
		{id: 'calbert', name: 'Chris Albert'},
		{id: 'mmahony', name: 'Mike Mahony'},
		{id: 'ctfletcher', name: 'CT Fletcher'},
		{id: 'rjohnson', name: 'Rob Johnson'}
	];

	$scope.specialties = [
		{id: 'wl', name: 'Weightloss'},
		{id: 'pt', name: 'Personal Training'},
		{id: 'cp', name: 'Contest Prep'},
		{id: 'cf', name: 'Cross Fit'},
		{id: 'fl', name: 'Fat Loss'},
		{id: 'br', name: 'Body Recomposition'}
	];

	$scope.states = [
		{id: "ALL", name: "Any State"},
		{id: "AL", name: "Alabama"},
		{id: "AK", name: "Alaska"},
		{id: "AZ", name: "Arizona"},
		{id: "AR", name: "Arkansas"},
		{id: "CA", name: "California"},
		{id: "CO", name: "Colorado"},
		{id: "CT", name: "Connecticut"},
		{id: "DE", name: "Deleware"},
		{id: "DC", name: "District of Columbia"},
		{id: "FL", name: "Florida"},
		{id: "GA", name: "Georgia"},
		{id: "HI", name: "Hawaii"},
		{id: "ID", name: "Idaho"},
		{id: "IL", name: "Illinois"},
		{id: "IN", name: "Indiana"},
		{id: "IA", name: "Iowa"},
		{id: "KS", name: "Kansas"},
		{id: "KY", name: "Kentucky"},
		{id: "LA", name: "Louisiana"},
		{id: "ME", name: "Maine"},
		{id: "MD", name: "Maryland"},
		{id: "MA", name: "Massacheusetts"},
		{id: "MI", name: "Michigan"},
		{id: "MN", name: "Minnesota"},
		{id: "MS", name: "Mississippi"},
		{id: "MO", name: "Missouri"},
		{id: "MT", name: "Montana"},
		{id: "NE", name: "Nebraska"},
		{id: "NV", name: "Neveda"},
		{id: "NH", name: "New Hampshire"},
		{id: "NJ", name: "New Jersey"},
		{id: "NM", name: "New Mexico"},
		{id: "NY", name: "New York"},
		{id: "NC", name: "North Carolina"},
		{id: "ND", name: "North Dakota"},
		{id: "OH", name: "Ohio"},
		{id: "OK", name: "Oaklahoma"},
		{id: "OR", name: "Oregon"},
		{id: "PA", name: "Pennsylvania"},
		{id: "RI", name: "Rhode Island"},
		{id: "SC", name: "South Carolina"},
		{id: "SD", name: "South Dakota"},
		{id: "TN", name: "Tennessee"},
		{id: "TX", name: "Texas"},
		{id: "UT", name: "Utah"},
		{id: "VT", name: "Vermont"},
		{id: "VA", name: "Virginia"},
		{id: "WA", name: "Washington"},
		{id: "WV", name: "West Virginia"},
		{id: "WI", name: "Wisconsin"},
		{id: "WY", name: "Wyoming"}
	];

	$scope.selectedAction = {id: 'all', name: 'Select a Trainer'};
	$scope.selectedState = {id: 'ALL', name: 'Any State'};
	$scope.selectedSpecialty = {id: 'ALL', name: 'Select a Specialty'};

	$scope.setAction = function(action) {
		$scope.selectedAction = action;
	};

	$scope.setState = function(state) {
		$scope.selectedState = state;
	}

	$scope.setSpecialty = function(specialty) {
		$scope.selectedSpecialty = specialty;
	}

});
