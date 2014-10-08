var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, /*gameList,*/ creategameService, $firebase){
	$scope.moveToJoinGame = function(){
		//setGameList-pass info on
		$location.path('/joingame');
	}



	//get all lists

		var firebaseUrl = 'https://mtscattergories.firebaseio.com/';
		// $scope.lists = {
		// 	name: 'list13',
		// 	name: 'list14'
		// }  Try and get this to show up in options

		$scope.gameQuestions14 = $firebase(new Firebase(firebaseUrl + 'List14')).$asArray();
		$scope.gameQuestions13 = $firebase(new Firebase(firebaseUrl + 'List13')).$asArray();
		
		//show and hide lists
		$scope.showList14 = false;
		$scope.showList13 = false;

		$scope.setGameList = function(){
			if($scope.showList13 === true){
				$scope.chosenGameList = gameQuestions14;
			}
			else if($scope.showList14 === true)
				$scope.chosenGameList = gameQuestions13;
		}		


		//$scope.gameQuestionsList14 = sync.$asArray();
		//gameList.$asArray();
	//the problem is I'm not really trying to change routes on the page- just the route of the firebase

	//$scope.list13 = gameList.$asArray() = $scope.gameQuestions;
	//$scope.list14 = gameList(list14) = $scope.gameQuestions
	//$scope.gameQuestions = gameList.$asArray();

	
	

})