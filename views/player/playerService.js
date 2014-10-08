var app = angular.module('scattergoriesApp');

app.service('playerService', function($firebase){
	this.getGameList = function(listId){
		return $firebase(new Firebase('https://mtscattergories.firebaseio.com/' + listId));
	}

	this.getPlayerData = function(userId){
		var arr = $firebase(new Firebase('https://mtscattergories.firebaseio.com/users/' + userId)).$asObject();
        	console.log("loaded record", arr);
	}

	this.playerAnswers = function() {
		$firebase(new Firebase('https://mtscattergories.firebaseio.com/playerList')); //not doing anything right now
	}
	

});