var app = angular.module('queueApp', []);

app.config(function($httpProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
});