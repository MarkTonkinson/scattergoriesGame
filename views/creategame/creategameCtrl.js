var app = angular.module('scattergoriesApp');
	var firebaseUrl = 'https://mtscattergories.firebaseio.com/';
app.controller('creategameCtrl', function($scope, $location, /*gameList,*/ playerService, creategameService, $firebase){
	
	//if they have come to create a game they need to be set as a creator, if they leave page in any other way, then they need to be set as notCreator
		//$firebase(new Firebase(firebaseUrl + playerService.getUid() + '/gameCreator')); //this is what you did to add an answer list
	

		
		

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

		//this function takes the new game data and send it on
		$scope.moveToJoinGame = function(){
			$scope.gameListChosen = $scope.setGameList();
			creategameService.setGameList($scope.gameListChosen);
			$location.path('/joingame');
		}

		

	
	

})