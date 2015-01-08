var app = angular.module('scattergoriesApp');

app.controller('compareCtrl', function($scope, playerService, $firebase, $location, $route){
	

	//this gets the list of the players on page load
    $scope.grabGameId = function() { //you could move this to the service and pass it the string
      var n = 0;
        var str = $location.$$path.replace('/compare','');
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
    var gameId = $scope.grabGameId();
    
  	var ref = new Firebase("https://mtscattergories.firebaseio.com/" + gameId);
    var list = $firebase(ref).$asObject();
    $scope.answers = list;
   

  
   
  

  	//delete game, destroy player answer lists
  	$scope.deletePlayerAnswersAndGame = function(){ 	
      var gameId = $scope.grabGameId();
  		var ref = new Firebase("https://mtscattergories.firebaseio.com/" + gameId);
  		$firebase(ref).$remove();
      
      var deleteGameTitle = $scope.grabGameId();
      var gameTitle = deleteGameTitle.replace('game','');

      var gameRef = $firebase(new Firebase(firebaseUrl + 'games/' + gameTitle));
      gameRef.$remove();//this removes the game from the list

      $scope.deleteChats();

      $location.path('/create');
  	}

//chat controls
  $scope.chatMessage = {
    chatName: playerService.getUserName()
  }

  $scope.addChat = function() {
    var chatLocation = $location.$$path.replace('/compare/game/','');
    
    var ref = $firebase(new Firebase(firebaseUrl + chatLocation)).$asArray();
    ref.$add($scope.chatMessage);
  }

  $scope.getChat = function() {
    var chatLocation = $location.$$path.replace('/compare/game/','');
    
    $scope.chats = $firebase(new Firebase(firebaseUrl + chatLocation)).$asObject();
   
  }
  $scope.getChat();

  $scope.deleteChats = function() {
    var chatLocation = $location.$$path.replace('/compare/game/','');
    
    $firebase(new Firebase(firebaseUrl + chatLocation)).$remove();

  }


   //this increases player's score
  $scope.scoreCounterPlus = function(){
    
    var ref = new Firebase("https://mtscattergories.firebaseio.com/users/" + playerService.getUid() + '/score');
      $firebase(ref).$set($scope.creatorScore); //this will only 'set' the most recent score- it doesn't add to it
    }

});



