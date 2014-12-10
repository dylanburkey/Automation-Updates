'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('solutions/solutions.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}]);