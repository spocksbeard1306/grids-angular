'use strict';

/**
 * @ngdoc directive
 * @name gridsApp.directive:rpTable
 * @description
 * # rpTable
 */
angular.module('gridsApp')
  .directive('rpTable', function () {
    return {
		templateUrl: 'views/templates/rp-table.html',
		restrict: 'E',
		scope: {
			filter: '=',
			sorts: '=',
			columns: '=',
			rowsxpage: '='
		},
		controller: function($scope){
			var rows = [];
			$scope.page = (rows.length > 0 ? 1 : 0);
			$scope.numPages = Math.floor(rows.length / $scope.rowsxpage) + (rows.length % $scope.rowsxpage > 0? 1 : 0);
			$scope.firstRowPage = ($scope.page - 1) * $scope.rowsxpage + 1;
			$scope.lastRowPage = ($scope.page === $scope.numPages ? rows.length : $scope.page * $scope.rowsxpage);
			this.addRow = function(row){
				rows.push(row);
			};
			this.removeRow = function(row){
				_.remove(rows, row);
			};
			this.nextPage = function(){
				$scope.page += 1;
				//TODO: Reload
			};
			this.prevPage = function(){
				$scope.page -= 1;
				//TODO: Reload
			};
			this.lastPage = function(){
				$scope.page = $scope.numPages;
				//TODO: Reload
			};
			this.firstPage = function(){
				$scope.page = (rows.length > 0 ? 1 : 0);
				//TODO: Reload
			};
		}
		/*,
		link: function postLink(scope, element, attrs) {
			
		}*/
    };
  });
