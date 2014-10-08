var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, gameList, creategameService){
	$scope.moveToJoinGame = function(){
		$location.path('/joingame'); //this hasn't been created yet
	}


	if($scope.list13) {
		$scope.gameQuestions = gameList.$asArray('list13');
	}

	//$scope.list13 = gameList.$asArray() = $scope.gameQuestions;
	//$scope.list14 = gameList(list14) = $scope.gameQuestions
	//$scope.gameQuestions = gameList.$asArray();

	
	

})