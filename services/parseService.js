var app = angular.module('queueApp');

app.service('parseService', function($http) {
	// var dfd = $q.promise();
	this.postQuestion = function(questionObj) {
	return $http({
		method: 'POST',
		url: "https://api.parse.com/1/classes/question",
		data: questionObj
	})
   }

   this.getQuestion = function() {
   return $http({
   		method: 'GET',
   		url: 'https://api.parse.com/1/classes/question'
    })	
   }


});



