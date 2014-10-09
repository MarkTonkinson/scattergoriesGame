var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, $firebase, $location, playerService){ //game list is from resolve in app
	
	$scope.$on('timer-stopped', function (event){ //this broke after adding other things on this page . . . 
    	$scope.$apply(function(){ 
    		$location.path('/compare');
    		$scope.submitPlayerAnswers();
    	});
    }); //apply forces it to work anyway - super wierd that it stopped

	
	
	
//this grabs the user info from the service
	$scope.userName = playerService.getUserName();
	$scope.userImage = playerService.getUserImage();
	$scope.uid = playerService.getUid();

	
	
	

	//this grabs the game list through the resolve on the routes
	$scope.gameQuestions = gameList.$asArray();  //need to make this dynamic




	//this is for getting answer

	$scope.arr = ['I have one thing in me'];//remove the array item- also, what to do about empy ones, it won't display it right if you don't handle empty ones


		//this adds the scopeArr
        $scope.submitPlayerAnswers = function() {
        	var answers = $scope.myAnswer; //i'm not sure this line is doing anything- go and see when I get a moment
        	var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  			var list = $firebase(ref).$asArray();
			list.$add($scope.arr);

			//list.$add({what: 'hello', who: 'me', player: answers})
        	
        }


	// var ref = new Firebase("https://mtscattergories.firebaseio.com/playerAnswer/");
 //  	var sync = $firebase(ref);
 //  	$scope.playerAnswers = sync.$asArray();
	

	

	
	//this tells the page to go to the compare page when the timer stops
 	




});

//this is mostly showing me the data at the minute
	// var users = $firebase(new Firebase('https://mtscattergories.firebaseio.com/users')).$asObject();
 //        	console.log("loaded record", users);

 //    users.$bindTo($scope, "users");




//This should go in the directive  or into a service to call repeatedly . . .
	// var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	// var authData = dataRef.getAuth();
	// if (authData) {
	//   $scope.username =  authData.google.displayName;
	//   $scope.image = authData.google.cachedUserProfile.picture;
	//   $scope.uid = authData.uid.replace('google:','');
	// }

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