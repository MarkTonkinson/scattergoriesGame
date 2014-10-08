var app = angular.module('scattergoriesApp');

app.controller('navigationCtrl', function($scope){
	var users = $firebase(new Firebase('https://mtscattergories.firebaseio.com/users')).$asObject();
        	console.log("loaded record", users);

    users.$bindTo($scope, "users");
	
	var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	console.log(authData);
	if (authData) {
	  $scope.username = authData.google.displayName;
	  $scope.image = authData.google.cachedUserProfile.picture;
	}

});