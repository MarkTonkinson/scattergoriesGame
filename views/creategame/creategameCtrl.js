var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, /*gameList,*/ playerService, creategameService, $firebase){
	
	//if they have come to create a game they need to be set as a creator, if they leave page in any other way, then they need to be set as notCreator
		//$firebase(new Firebase(firebaseUrl + playerService.getUid() + '/gameCreator')); //this is what you did to add an answer list
	
		$scope.gameTitle;

	
		

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

		
		$scope.creator = 'creator';
		
		//this function takes the new game data and send it on
		$scope.moveToHostGame = function(){
			//collects the currently viewed list as the list you want
			$scope.gameListChosen = $scope.setGameList();
			creategameService.setGameList($scope.gameListChosen);

			//need to change the value of the player to a creator so they are in charge
			
			//get uid to use
			var uid = playerService.getUid();
			
			var ref = new Firebase('https://mtscattergories.firebaseio.com/users/' + uid + '/gameCreator');
			var arr = $firebase(ref).$asArray();

			arr.$add($scope.creator);

			
			//move to hostgame page
			$location.path('/hostgame/' + $scope.gameTitle);
		}

		

	
	

})