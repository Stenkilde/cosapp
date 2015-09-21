var app = angular.module('cosApp', ['ui.router', 'mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
	$urlRouterProvider.otherwise('/');
});
