var app = angular.module('cosApp', ['ui.router', 'mm.foundation', 'ngAnimate','toastr']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
	$urlRouterProvider.otherwise('/');
});
