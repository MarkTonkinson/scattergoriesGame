var app = angular.module('scattergoriesApp');

app.service('creategameService', function($firebase){
	
	var newGame;
	
	this.addGameToJoin = function(gameId){ //this is keeping track of games to join information
		return $firebase(new Firebase(firebaseUrl + '/games/' + gameId));
	}

	this.getGameList = function(){
		return newGame;
	}

	this.setGameList = function(chosenList) {
		newGame = chosenList;
	}
});