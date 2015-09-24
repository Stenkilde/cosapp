(function () {
	'use strict';

	angular
	.module('cosApp')
	.factory('UserFactory', UserFactory);

	function UserFactory($http, $q, AuthFactory, $window, $state) {
		var service = {
			createUser: createUser,
			login: login,
			logout: logout,
			getUser: getUser
		};

		var store = $window.localStorage;
		var key = 'auth-token';

		return service;

		function login(username, password) {
			return $http.post('api/login', {
				username: username,
				password: password
			}).then(function success(response) {
				AuthFactory.setToken(response.data.token);
				$state.go($state.current, {}, {reload: true});
				return response;
			});
		}

		function logout() {
			store.removeItem(key);
		}

		function createUser(article) {
			return $http.post('/api/user', article).then(function(response) {
				return response.data;
			});
		} 

		function getUser() {
		  if(AuthFactory.getToken()) {
		    return $http.post('/api/me', {token: store.getItem(key)})
		    .then(function(response) {
		      return response.data;
		    });
		  } 
		  return $q.reject({data: 'client has no auth token, please login again'});
		}
	}

})();