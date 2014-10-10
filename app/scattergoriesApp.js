var app = angular.module('scattergoriesApp', ['ngRoute', 'firebase', 'timer']);

var firebaseUrl = 'https://mtscattergories.firebaseio.com/';//because I threw this in the app, it's put on the window and it is available everywhere- typically, not good practice

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/login', {
		templateUrl: 'views/login/loginview.html',
		controller: 'loginCtrl' 
	})
	.when('/player/:userId', {
		templateUrl: 'views/player/playerview.html',
		controller: 'playerCtrl',
		resolve: {
			gameList: function(playerService) {
				return playerService.getGameList();
			}
		}
	})
	.when('/joingames', {
		templateUrl: 'views/joingame/joingames.html',
		controller: 'joingamesCtrl', 
		resolve: {
			joingameRef: function(creategameService, $route) {
				return creategameService.addGameToJoin($route.current.params.gameTitle);
			}
		}
	})
	.when('/joingame/:gameTitle', {
		templateUrl: 'views/joingame/joingame.html', 
		controller: 'joingameCtrl',
		resolve: {
			

			game: function(creategameService){
				return creategameService.getGameList();
			}
		}
	})
	.when('/create', {
		templateUrl: 'views/creategame/creategameview.html',
		controller: 'creategameCtrl',
		resolve: {
			gameList: function(playerService) {
				return playerService.getGameList();
			}

		}
	})
	.when('/compare', {
		templateUrl: 'views/compare/compareview.html',
		controller: 'compareCtrl'
	})
	.otherwise({
		redirectTo: '/login'
	})

}]);
//this is how to protect the routes . . .

app.run(function($rootScope, $location){ //removed env service
  $rootScope.$on('$routeChangeStart', function(event, next, current){ //these parameters are taking in the root scope, the location, and the enviroment service- the root scope is the event- and we've picked the routechangestart as the event to watch with the $on, the location the place to go next and environment service determining the current location based on whether it can get username I believe
    var dataRef = new Firebase('https://mtscattergories.firebaseio.com');
	var authData = dataRef.getAuth();
	if (authData === null) {
      $location.path('/login');
    } // else {
    //   $rootScope.username = ; //replaced environmentService with current to see if it would get passed through
    // }
  })
});