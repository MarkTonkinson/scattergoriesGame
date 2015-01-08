var app = angular.module('scattergoriesApp');

app.service('loginService', function($firebase, $q, $location){
	
	this.firebaseLogin = function(){
			var deferred = $q.defer();

			var newF = new Firebase('https://mtscattergories.firebaseio.com');

			newF.authWithOAuthPopup("google", function(error, authData) { 
				
				if (error) {
					console.log("Login Failed!", error);

				} else if(authData) {
					user = {};
					deferred.resolve(authData);
					//console.log("Login Succeeded!", authData);
						
					newF.child('users').child(authData.uid.replace('google:', '')).set(authData);
				//i tested setting the user to object.property.property.property- but Firebase wouldn't take it			
				}
			}, { remember: 'sessionOnly', scope: 'profile'})

		return deferred.promise;	

			
	
	};




	// this.firebaseLogin =function(){
	// 	// we would probably save a profile when we register new users on our site
	// 		// we could also read the profile to see if it's null
	// 		// here we will just simulate this with an isNewUser boolean
	// 		var isNewUser = true;
	// 		var ref = new Firebase("https://mtscattergories.firebaseio.com");
	// 		ref.onAuth(function(authData) {
	// 		  if (authData && isNewUser) {
	// 		    // save the user's profile into Firebase so we can
	// 		    // list users, use them in security rules, and show profiles
	// 		    ref.child('users').child(authData.uid).set(authData);
	// 		  }
	// 		});
	// }

	
});


// 		.success(function(authData){ 
		// 			deferred.resolve(authData);
		// 			console.log(authData);
		// 			$location.path('/player');
		// 		});
		// return deferred.promise;	
