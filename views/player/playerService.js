var app = angular.module('scattergoriesApp');

app.service('playerService', function ($firebase){

	var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	if (authData) {
	  var username =  authData.google.displayName;
	  var image = authData.google.cachedUserProfile.picture;
	  var uid = authData.uid.replace('google:','');
	  
	}
	//this is supposed to set the player to creator- it happens in teh create game control and will need to be reset at the end of a game
	this.setUserToCreator = function(){
		//this is all in the control right now.. need to check it when I get to join game page
	}

	//used to display username on appropriate pages
	this.getUserName = function() {
		return username;
	}
	//used to display user image on appropriate pages
	this.getUserImage = function() {
		return image;
	}
	//grabs the user id when it's necessary to place it on the user
	this.getUid = function(){
		return uid;
	}


	
	this.getGameList = function(){
		return $firebase(new Firebase('https://mtscattergories.firebaseio.com/List14'));
	}

	// this.getPlayerData = function(){
	// 	var authData = new Firebase(firebaseUrl).getAuth();
	// }

	// this.getPlayerData = function(userId){
	// 	var arr = $firebase(new Firebase(firebaseUrl + userId)).$asObject();
 //        	console.log("loaded record", arr);
	// }

	this.playerAnswers = function() {
		$firebase(new Firebase(firebaseUrl)); //not doing anything right now
	}
//I don't think this is doing anything . . ..
	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};
	

});