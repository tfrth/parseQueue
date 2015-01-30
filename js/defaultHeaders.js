var app = angular.module('queueApp');

app.factory('httpRequestInterceptor', function () {
	  return {
	    request: function (config) {
	      config.headers = {'X-Parse-Application-Id': 'ni0k2oinjXzu5SxmuID03gaD4zcOOqb6XxfKES8V', 'X-Parse-REST-API-Key': 'QRb1TzvXLT8jlzkG3XSW0ps9um74blQFmSuH0C8Z'}
	      return config;
	    }
	  };
	});