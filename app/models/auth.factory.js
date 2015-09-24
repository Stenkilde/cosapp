(function () {
	'use strict';

	angular
		.module('cosApp')
		.factory('AuthFactory', AuthFactory);

	function AuthFactory($window) {
		var store = $window.localStorage;
		var key = 'auth-token';

		var service = {
			getToken: getToken,
			removeToken: removeToken,
			setToken: setToken
		};

		return service;

		function getToken() {
			return store.getItem(key);
		}

		function removeToken() {
			store.removeItem(key);
		}

		function setToken(token) {
			if(token) {
				store.setItem(key, token);
			} else {
				store.removeItem(key);
			}
		}

	}

})();