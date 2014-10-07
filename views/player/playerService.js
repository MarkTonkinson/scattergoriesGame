var app = angular.module('scattergoriesApp');

app.service('playerService', function($firebase){
	this.getGameList = function(){
		return $firebase(new Firebase('https://mtscattergories.firebaseio.com/List14'));
	}
	this.playerAnswers = function() {
		$firebase(new Firebase('https://mtscattergories.firebaseio.com/playerList')); //not doing anything right now
	}
	

})