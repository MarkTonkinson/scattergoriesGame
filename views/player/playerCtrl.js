var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, $firebase, $location, playerService){ //game list is from resolve in app
	
	$scope.$on('timer-stopped', function (event){ //this broke after adding other things on this page . . . 
    	$scope.$apply(function(){ 
    		$location.path('/compare/');
    		$scope.submitPlayerAnswers();
    	});
    }); //apply forces it to work anyway - super wierd that it stopped

	
	
	
//this grabs the user info from the service
	$scope.userName = playerService.getUserName();
	$scope.userImage = playerService.getUserImage();
	$scope.uid = playerService.getUid();

	
	
	

	//this grabs the game list through the resolve on the routes
	$scope.gameQuestions = gameList.$asArray();  //need to make this dynamic


	$scope.answers;


	
		//this code breaks down the location code
		//use form validation to prevent people from using slashes
		$scope.grabCorrectGameId = function(){
		
			var n = 0;
			var str = $location.$$path
			var lettersToKeep = [];
			for(var i = 0; i < str.length; i++) {
				lettersToKeep.push(str[i])
				if(str[i] === '/') {
					n++;	
				}
				if (n === 3) {
					break;
				}
			}
			
			return lettersToKeep.join('');

		}

		//this adds the scopeArr
        $scope.submitPlayerAnswers = function() {
        	
        	//creates array of player answers
        	var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/answerList');
  			var list = $firebase(ref).$asArray();
			list.$add($scope.answers);	
			var correctPath = $scope.grabCorrectGameId();
			console.log($scope.grabCorrectGameId());

			$location.path('/compare' + correctPath);//remove later	
        	
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