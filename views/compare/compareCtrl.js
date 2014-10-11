var app = angular.module('scattergoriesApp');

app.controller('compareCtrl', function($scope, playerService, $firebase){
	$scope.ifCreator = true;

	//this gets the list of the player logged in
	var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  	var list = $firebase(ref).$asArray();
  	$scope.answers = list;
  	console.log(list);

  
  $scope.creatorScore;
  //this increases player's score
  $scope.scoreCounterPlus = function(){
    debugger;
  	var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/score');
      $firebase(ref).$set($scope.creatorScore); //this will only 'set' the most recent score- it doesn't add to it
    }

  	//submit game, destroy player list
  	$scope.deletePlayerList = function(){ 	
  		var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  		$firebase(ref).$remove();
  	}
});