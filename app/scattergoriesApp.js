var app = angular.module('scattergoriesApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login/loginview.html',
		controller: 'loginCtrl'
	}).when('/player', {
		templateUrl: 'views/player/playerview.html',
		controller: 'playerCtrl',
		resolve: {
			gameList: function(playerService) {
				return playerService.getGameList();
			}
		}
	}).when('/create', {
		templateUrl: 'views/creategame/creategameview.html',
		controller: 'creategameCtrl'
	}).otherwise({
		redirectTo: '/login'
	})

}]);