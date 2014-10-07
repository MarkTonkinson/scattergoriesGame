var app = angular.module('scattergoriesApp');

app.service('loginService', function($firebase, $q){
	
	this.firebaseLogin = function(){
		var deferred = $q.defer();
			return new Firebase('https://mtscattergories.firebaseio.com'
			authWithOAuthPopup("google", function(error, authData) {
				console.log(error);
				console.log(authData);
			}, { remember: 'sessionOnly'})
			if()
		deferred.resolve();


	}
});