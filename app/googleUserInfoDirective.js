var app = angular.module('scattergoriesApp');

app.controller('googleDirCtrl', function($scope){

	var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	if (authData) {
	  $scope.username =  authData.google.displayName;
	  $scope.image = authData.google.cachedUserProfile.picture;
	}

});



app.directive('googleUserInfoDirective', function(){ //get the user info from the service
	return {
		templateUrl: 'googleUserInfoDirective.html'
	}


})