var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, playerService, creategameService, $firebase){
	
	//if they have come to create a game they need to be set as a creator, if they leave page in any other way, then they need to be set as notCreator
		//$firebase(new Firebase(firebaseUrl + playerService.getUid() + '/gameCreator')); //this is what you did to add an answer list
	
		$scope.gameTitle;

		$scope.password;
		
		$scope.games = $firebase(new Firebase(firebaseUrl + 'games')).$asObject();
		
		//console.log($scope.games)
		//this grabs the user info from the service
		$scope.userName = playerService.getUserName();
		$scope.userImage = playerService.getUserImage();

		
		
		$scope.addToGameArray = function() {
			
			if($scope.password) {
				var pword = $scope.password;				
			} else{
				pword = 'none'
			}
			var newGameObj = {
				gameName: $scope.gameTitle,
				gamePassword: pword
			}
			
			
			var gameRef = $firebase(new Firebase(firebaseUrl + 'games/' + newGameObj.gameName));
			
			gameRef.$set(newGameObj);

			$scope.gameTitle='';
			$scope.passwordInput = false;	
			
		}

		$scope.passwordInput = false;

		$scope.passwordInputShow = function() {
			$scope.passwordInput = !$scope.passwordInput;
		}

		$scope.checkForPassword = function(gameObj){
			console.log(gameObj);
			var gameRef = $firebase(new Firebase(firebaseUrl + 'games/' + gameObj.gameName)).$asObject();
			
			console.log(gameObj.gamePassword);
			if(gameObj.gamePassword !== 'none'){
				$location.path('/loginToGame/' + gameObj.gamename);
			} else {
				$location.path('/game/' + gameObj.gameName)
			}

		}
		//this refers to the 
		$scope.loginPassword = function(){
			var loginLocale = $location.path.replace('/loginToGame/','');
			console.log(loginLocale);
			var gameRef = $firebase(new Firebase(firebaseUrl + 'games/' + loginLocale)).$asObject();
			console.log(gameRef)
			//if($scope.gameLogin === gameRef)
		}
		
})