(function () {	
	'use strict';

	angular
		.module('cosApp')
		.factory('AuthInterceptor', AuthInterceptor);

	function AuthInterceptor(AuthTokenFactory) {


		function addToken(config) {
			var token = AuthTokenFactory.getToken();
			if (token) {
				config.headers = config.headers || {};
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		}

	}

})();