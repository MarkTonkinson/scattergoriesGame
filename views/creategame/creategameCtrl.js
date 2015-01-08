var app = angular.module('scattergoriesApp');

app.controller('creategameCtrl', function($scope, $location, playerData, playerService, creategameService, $firebase, $route){
	
	//if they have come to create a game they need to be set as a creator, if they leave page in any other way, then they need to be set as notCreator
		//$firebase(new Firebase(firebaseUrl + playerService.getUid() + '/gameCreator')); //this is what you did to add an answer list
		
		
		$scope.gameTitle;

		$scope.password;
		
		$scope.games = $firebase(new Firebase(firebaseUrl + 'games')).$asObject();
		

		$scope.userName = playerService.getUserName()
		$scope.userImage = playerService.getUserImage()


		
		$scope.addToGameArray = function() {
			
			var generateLetter = function() { //now how do I make this so that the letter transfers to the player view when the start game is clicked?- this should really be in join game or maybe a service?  Would the random number run for every player?  Quite possibly . . .
				var alphabet = ['A','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y'];
				var randomNum = function(){
					return Math.floor(Math.random()*(24 - 1 + 1) + 1);
				}
				return alphabet[randomNum()];
			}

			if($scope.password) {
				var pword = $scope.password;				
			} else{
				pword = 'none'
			}
			var newGameObj = {
				gameName: $scope.gameTitle,
				gamePassword: pword,
				gameLetter: generateLetter()
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

		
		
})