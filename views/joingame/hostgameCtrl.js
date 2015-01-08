var app = angular.module('scattergoriesApp');

app.controller('hostgameCtrl', function($scope, $location, playerService, $firebase, $route, creategameService){
	// var firebaseUrl = 'https://mtscattergories.firebaseio.com/';
	
	$scope.startGame = function(){
		
		$location.path($location.$$path + '/player/' + playerService.getUid());
	}

	//display username on page for them
	$scope.playerName = playerService.getUserName();



	//this grabs the user info from the service
	$scope.userName = playerService.getUserName();
	$scope.userImage = playerService.getUserImage();


	// Get, show, and hide game lists

		$scope.gameQuestions14 = $firebase(new Firebase(firebaseUrl + 'List14')).$asArray();
		$scope.gameQuestions13 = $firebase(new Firebase(firebaseUrl + 'List13')).$asArray();
		
		//show and hide lists
		$scope.showList14 = false;
		$scope.showList13 = false;


		//this hides and shows lists and sets them to a variable
		$scope.setGameList = function(){
			if($scope.showList13 === true){
				$scope.chosenGameList = 'List13';
				// $firebase(new Firebase(firebaseUrl + 'List13')).$asArray().$loaded();
			}
			else if($scope.showList14 === true) {
				$scope.chosenGameList = 'List14';
				// $firebase(new Firebase(firebaseUrl+'List14')).$asArray().$loaded();
			}
			return $scope.chosenGameList;
		}		

		
	//chat controls
	$scope.chatMessage = {
		chatName: playerService.getUserName()
	}

	$scope.addChat = function() {
		var chatLocation = $location.$$path.replace('/game/','');
		
		var ref = $firebase(new Firebase(firebaseUrl + chatLocation)).$asArray();
		ref.$add($scope.chatMessage);
	}

	$scope.getChat = function() {
		var chatLocation = $location.$$path.replace('/game/','');
		
		$scope.chats = $firebase(new Firebase(firebaseUrl + chatLocation)).$asObject();
		
	}
	$scope.getChat();
		
		

	
}); //endPage





