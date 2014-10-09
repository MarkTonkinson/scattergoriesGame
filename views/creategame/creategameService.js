var app = angular.module('scattergoriesApp');

app.service('creategameService', function($firebase){
	
	var newGame;
	var firebaseUrl = 'https://mtscattergories.firebaseio.com/';


	this.getGameList = function(){
		return $firebase(new Firebase(firebaseUrl + newGame)).$asArray().$loaded().then(function(res){
			debugger;
			return res;
		});
	}

	this.setGameList = function(chosenList) {
		newGame = chosenList;
	}
});