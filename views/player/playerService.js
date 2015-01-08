var app = angular.module('scattergoriesApp');

app.service('playerService', function ($firebase, $q){
	var authData;
	var username;
	var image;
	var uid;
	this.getData = function(){
		var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
		authData = dataRef.getAuth();
		username =  authData.google.displayName;
		image = authData.google.cachedUserProfile.picture;
		uid = authData.uid.replace('google:','');
		return authData  
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

	

});