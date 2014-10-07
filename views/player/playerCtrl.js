var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, $firebase){ //game list is from resolve in app
	$scope.username = "Mark";
	
	var ref = new Firebase("https://mtscattergories.firebaseio.com/playerAnswer/");
  	var sync = $firebase(ref);
  	$scope.playerAnswers = sync.$asArray();
	

	
	//this grabs the game list through the resolve on the routes
	$scope.gameQuestions = gameList.$asArray();
	



	// $scope.submitAnswer = function(text){
	
	// 	$scope.playerAnswers.$add({text: text});
	// }

});