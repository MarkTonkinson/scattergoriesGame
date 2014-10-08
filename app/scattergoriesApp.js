var app = angular.module('scattergoriesApp', ['ngRoute', 'firebase', 'timer']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login/loginview.html',
		controller: 'loginCtrl' 
	})
	.when('/player', {
		templateUrl: 'views/player/playerview.html',
		controller: 'playerCtrl',
		resolve: {
			gameList: function(playerService, $route) {
				return playerService.getGameList(listId);
			},
			playerData: function(playerService){
				return playerService.getPlayerData();
			}
		}
	})
	.when('/joingame', {
		templateUrl: 'views/joingame/joingame.html', 
		controller: 'joingameCtrl'
	})
	.when('/create', {
		templateUrl: 'views/creategame/creategameview.html',
		controller: 'creategameCtrl',
		resolve: {
			gameList: function(playerService, $route) {
				return playerService.getGameList($route.listId);
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