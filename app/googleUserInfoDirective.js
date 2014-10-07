var app = angular.module('scattergoriesApp');

app.directive('googleUserInfoDirective', function($q, loginService){ //get the user info from the service
	restrict: "EA",
	link: function(scope, elem, attr) {
		var googleInfo = angular.element('{{googleusername}} <img src="{{googlepicid}}">')  //these are placeholder words in the expressions.  they haven't been attached yet
	}


})