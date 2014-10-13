var app = angular.module('scattergoriesApp');

app.controller('playerCtrl', function($scope, gameList, $firebase, $location, playerService ){ //game list is from resolve in app
	
	$scope.$on('timer-stopped', function (event){ //this broke after adding other things on this page . . . 
    	$scope.$apply(function(){ 
    		$scope.submitPlayerAnswers();
    		
    	});
    }); //apply forces it to work anyway - super wierd that it stopped

	

	
	//this grabs the user info from the service
	$scope.userName = playerService.getUserName();
	$scope.userImage = playerService.getUserImage();



	//allows player to see chosen list
		$scope.gameQuestions14 = $firebase(new Firebase(firebaseUrl + 'List14')).$asArray();
		$scope.gameQuestions13 = $firebase(new Firebase(firebaseUrl + 'List13')).$asArray();
		
		//show and hide lists
		$scope.showList14 = false;
		$scope.showList13 = false;


		//this hides and shows lists and sets them to a variable
		$scope.setGameList = function(){
			if($scope.showList13 === true){
				$scope.chosenGameList = 'List13';
				// $firebase(new Firebase(firebaseUrl + 'List13')).$asArray().$loaded();
			}
			else if($scope.showList14 === true) {
				$scope.chosenGameList = 'List14';
				// $firebase(new Firebase(firebaseUrl+'List14')).$asArray().$loaded();
			}
			return $scope.chosenGameList;
		}		
	
	
	


	$scope.answers = {
		a: playerService.getUserName()
	}
	
		$scope.grabGameNameId = function(){
			
			var n = 0;
			var str = $location.$$path
			var lettersToKeep = [];
			for(var i = 0; i < str.length; i++) {
				lettersToKeep.push(str[i])
				if(str[i] === '/') {
					n++;	
				}
				if (n === 3) {
					break;
				}
			}
			
			return lettersToKeep.join('');

		}

		$scope.grabGameId = function() {
			var n = 0;
				var str = $location.$$path
				var lettersToKeep = [];
				for(var i = 0; i < str.length; i++) {
					lettersToKeep.push(str[i])
					if(str[i] === '/') {
						n++;	
					}
					if (n === 3) {
						break;
					}
				}
				
				var lettersOnly = [];//has to be outside of loop or it resets every time
				for(var j = 0; j < lettersToKeep.length; j++){
					
					if(lettersToKeep[j] !== '/'){
						lettersOnly.push(lettersToKeep[j]);
					}
				}
								
				return lettersOnly.join('');
		}

		
        $scope.submitPlayerAnswers = function() {
        	

        	
			var correctPath = $scope.grabGameNameId();
			
		
			var gameOnlyPath = $scope.grabGameId();
			
			
			var ref = new Firebase("https://mtscattergories.firebaseio.com/" + gameOnlyPath);
  			var list = $firebase(ref).$asArray();
  			
			list.$add($scope.answers);
			debugger;
			$location.path('/compare' + correctPath);//remove later	
        	
        }



});

