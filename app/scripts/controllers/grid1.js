'use strict';

/**
 * @ngdoc function
 * @name gridsApp.controller:Grid1Ctrl
 * @description
 * # Grid1Ctrl
 * Controller of the gridsApp
 */
angular.module('gridsApp')
  .controller('Grid1Ctrl', function ($scope) {
    $scope.columns = [
		{
			name: 'f1', 
			label: 'F1', 
			ords: true, 
			style: {
				'width': '80px',
				'background-color': 'red'
			}
		},
		{
			name: 'f2', 
			label: 'F2', 
			ords: false, 
			style: {
				'width': '70px'
			}
		},
		{
			name: 'f3', 
			label: 'F3', 
			ords: false, 
			style: {
				'width': '125px'
			}
		},
		{
			name: 'f4', 
			label: 'F4', 
			ords: true, 
			style: {
				'width': '100px'
			}
		},
		{
			name: 'f5', 
			label: 'F5', 
			ords: true, 
			style: {
				'width': '80px'
			}
		},
	];
	$scope.sorts = [{field:"f1", ord:"ASC"}];
	$scope.rowsxpage = 100;
  });
