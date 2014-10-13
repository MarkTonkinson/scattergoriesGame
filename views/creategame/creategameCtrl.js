var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, playerService, creategameService, $firebase){
	
	//if they have come to create a game they need to be set as a creator, if they leave page in any other way, then they need to be set as notCreator
		//$firebase(new Firebase(firebaseUrl + playerService.getUid() + '/gameCreator')); //this is what you did to add an answer list
	
		$scope.gameTitle;
		
		$scope.games = $firebase(new Firebase(firebaseUrl + 'games')).$asObject();
		
		//this grabs the user info from the service
		$scope.userName = playerService.getUserName();
		$scope.userImage = playerService.getUserImage();
		
		$scope.addToGameArray = function(gameTitle) {

			var gameRef = $firebase(new Firebase(firebaseUrl + 'games/' + gameTitle));
			
			gameRef.$set(gameTitle);	
			
		}
		
})