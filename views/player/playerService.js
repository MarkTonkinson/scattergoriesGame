var app = angular.module('scattergoriesApp');

app.service('playerService', function ($firebase){

	var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	if (authData) {
	  var username =  authData.google.displayName;
	  console.log(username);
	  var image = authData.google.cachedUserProfile.picture;
	  var uid = authData.uid.replace('google:','');
	}

	this.getUserName = function() {
		return username;
	}
	
	this.getUserImage = function() {
		return image;
	}

	this.getUid = function(){
		return uid;
	}


	var firebaseUrl = 'https://mtscattergories.firebaseio.com/users/'
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

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};
	

});