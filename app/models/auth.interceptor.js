(function () {	
	'use strict';

	angular
		.module('cosApp')
		.factory('AuthInterceptor', AuthInterceptor);

	function AuthInterceptor(AuthFactory) {
		return {
			request: addToken
		};

		function addToken(config) {
			var token = AuthFactory.getToken();
			if(token) {
				config.headers = config.headers || {};
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		}

	}

})();