var app = angular.module('scattergoriesApp');

app.service('creategameService', function($firebase){
	
	var newGame;
	
	this.addGameToJoin = function(gameId, gameQuestions){ //this is keeping track of games to join information
		
		//console.log("create game", firebaseUrl + 'games' + gameId);
		var createGameRef = $firebase(new Firebase(firebaseUrl + 'games' + gameId));
		createGameRef.$push({id:gameId, questions: gameQuestions});
	}

	this.getGamesToJoin = function() {
		getGameRef = $firebase(new Firebase(firebaseUrl + 'games')).$asArray();
		if (!getGameRef) { //doesn't do anything- just doesn't display
			alert('There are not any games to play yet');
		}
		return getGameRef;
		
	}
	this.getQuestionsAsObject = function(location){
		getQuestionsRef = $firebase(new Firebase(firebaseUrl + 'games' + location)).$asObject();
		return getQuestionsRef;
	}

	this.getGameList = function(){
		return newGame;
	}

	this.setGameList = function(chosenList) {
		newGame = chosenList;
	}
});