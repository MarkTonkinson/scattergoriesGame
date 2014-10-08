var app = angular.module('scattergoriesApp');

app.controller('loginCtrl', function($scope, loginService, $location){

	$scope.login = function(){
		loginService.firebaseLogin().then(function(data){
			$location.path('/joingame');
		});
	}
		
	
	//Things I've tried
	/*Resolve in the Service
	Resolve in the router
	Pause with if statements in the controller and the service*/
			
		
			
		//$location.path('/player');

		


		
						//console.log(authData);
		


		// loginService.firebaseLogin().authWithOAuthPopup("google", function(error, authData) {
		// 	console.log(error);
		// 	console.log(authData);
		// }, { remember: 'sessionOnly'})//from the documentation- I think I can add scope here to add other details
			
		//how to make it pause- need a resolve from google . . .
		
	

})
