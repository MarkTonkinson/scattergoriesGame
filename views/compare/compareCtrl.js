var app = angular.module('scattergoriesApp');

app.controller('compareCtrl', function($scope, playerService, $firebase){
	$scope.ifCreator = true;

	//this gets the list of the player logged in
	var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  	var list = $firebase(ref).$asArray();
  	$scope.answers = list;
  	console.log(list);

  //I tried making removing it as an object and as an array- I've tried so many things . . . is it a read write issue?  
  //  code like
  		//list.$remove();  list.$remove($scope.answers);  $scope.answers.$remove();
  		//list[0].$remove();
  		//list.$destroy();  $scope.answers.$destroy();  $scope.answer.$destory();- trying to remove the one
  	//again and again it just said the method was undefined
  	//if I put it in the deletePlayerList function it got stuck in teh normal angular land place

  	

  	//submit game, destroy player list
  	$scope.deletePlayerList = function(){ 	
  		var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  		$firebase(ref).$remove();
  	}
});