app = angular.module('queueApp');

app.controller('mainController', function($scope, parseService) {

$scope.postQuestion = function(getParseData) {
	var questionObj = {
		text: $scope.question
	}
  parseService.postQuestion(questionObj);
  }

$scope.getParseData = function() {
	
}

getParseData();


});

