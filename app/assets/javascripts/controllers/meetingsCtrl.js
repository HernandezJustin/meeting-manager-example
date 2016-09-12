(function(){
  'use strict';
  angular.module("app").controller("meetingsCtrl", function($scope, $http){

    $scope.setup = function(){
      response = $http.get('/api/v1/meetings.json').then(function(response){
        $scope.meetings = response.data;
      });
      $scope.orderAttribute = 'name';
    };

    $scope.sortBy = function(attribute) {
     if(attribute != $scope.orderAttribute) {
       $scope.descending = false;
       } else {
         $scope.descending = !$scope.descending;
       }
       $scope.orderAttribute = attribute;
   };
  });
}());
