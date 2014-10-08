var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, playerData, $firebase, $location){ //game list is from resolve in app
	$scope.username;
	
	var ref = new Firebase("https://mtscattergories.firebaseio.com/playerAnswer/");
  	var sync = $firebase(ref);
  	$scope.playerAnswers = sync.$asArray();
	

	
	//this grabs the game list through the resolve on the routes
	$scope.gameQuestions = gameList.$asArray();
	
	//this tells the page to go to the compare page when the timer stops
 	$scope.$on('timer-stopped', function (event){
    	$location.path('/compare');
    });


//this is mostly showing me the data at the minute
	var users = $firebase(new Firebase('https://mtscattergories.firebaseio.com/users')).$asObject();
        	console.log("loaded record", users);

    users.$bindTo($scope, "users");

//This should go in the directive
	var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	if (authData) {
	  $scope.username =  authData.google.displayName;
	  $scope.image = authData.google.cachedUserProfile.picture;
	}

	// var userInfo = $firebase(new Firebase('https://mtscattergories.firebaseio.com/'));
 //    var authData = auth.uid;
 //    console.log(authData);

	//What I've tested
		//author.uid and onAuth method from user authentification
		//confused by Simple login directions if it is deprecated 
		//getCurrentUser() - angularFirebase



	// $scope.submitAnswer = function(text){
	
	// 	$scope.playerAnswers.$add({text: text});
	// }

});