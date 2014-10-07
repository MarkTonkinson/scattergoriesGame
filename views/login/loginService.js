var app = angular.module('scattergoriesApp');

app.service('loginService', function($firebase, $q, $location){
	
	this.firebaseLogin = function(){
		var deferred = $q.defer();
			var login = function(){
				new Firebase('https://mtscattergories.firebaseio.com')
				.authWithOAuthRedirect("google", function(error, authData) {
					
					console.log(error);
					console.log(authData);
				
				}, { remember: 'sessionOnly'});	
				

			}
			
			login().success(function(authData){ //It's getting stuck right here and not recognizing the then statement
				return deferred.resolve(authData);//skips this
				console.log(authData);
				$location.path('/player');
			});
			return deferred.promise;

			
		
	
	}
});

// if(error === null) {
				// 	deferred.reject(alert("You haven't logged in"));
				// } else {
					
				// 	});
				// }