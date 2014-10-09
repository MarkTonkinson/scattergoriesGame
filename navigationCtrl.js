var app = angular.module('scattergoriesApp');

app.controller('navigationCtrl', function($scope, $firebase, playerService){
	
	  $scope.username = playerService.getUserName();
	  $scope.image = playerService.getUserImage();
	

});