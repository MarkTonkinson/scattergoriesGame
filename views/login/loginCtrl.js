var app = angular.module('scattergoriesApp');

app.controller('loginCtrl', function($scope, loginService, $location){

	$scope.login = function() {
		loginService.firebaseLogin();

		// loginService.firebaseLogin().authWithOAuthPopup("google", function(error, authData) {
		// 	console.log(error);
		// 	console.log(authData);
		// }, { remember: 'sessionOnly'})//from the documentation- I think I can add scope here to add other details
			
		//how to make it pause- need a resolve from google . . .
		
	}

})
