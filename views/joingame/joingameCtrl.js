var app = angular.module('scattergoriesApp');

app.controller('joingameCtrl', function($scope, $location, playerService, $firebase, game){
	// var firebaseUrl = 'https://mtscattergories.firebaseio.com/';
	$scope.ifCreator = true; // set this with the user
	$scope.startGame = function(){

		$location.path('/player/' + playerService.getUid());
	}

	//this generates a random letter
	$scope.generateLetter = function() { //now how do I make this so that the letter transfers to the player view when the start game is clicked?- this should really be in join game or maybe a service?  Would the random number run for every player?  Quite possibly . . .
		var alphabet = ['a','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y'];
		var randomNum = function(){
			return Math.floor(Math.random()*(24 - 1 + 1) + 1);
		}
		$scope.displayLetter = alphabet[randomNum()];
		
	}


//this calls the list chosen in createGame and puts it on scope so I can display it
	var gameListRef = $firebase(new Firebase(firebaseUrl + game)).$asObject(); //game is coming through the resolve

	$scope.gameQuestions = gameListRef; 

	gameListRef.$bindTo($scope, 'gameQuestions');

	console.log($scope.gameQuestions);
});