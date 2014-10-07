var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, $firebase){ //game list is from resolve in app
	$scope.username = "Mark";
	
	var playerAnswersList = $firebase(new Firebase('https://mtscattergories.firebaseio.com/playerList'));
	var playerAnswer = playerAnswersList.$asArray();
	
	$scope.gameQuestions = gameList.$asArray();
	console.log(gameList.$asArray());

	$scope.playerAnswer;

	$scope.submitAnswer = function(){
		debugger;
		playerAnswer.$add({answer: playerAnswer});
	}

});