(function () {
	'use strict';

	angular
	.module('cosApp')
	.factory('UserFactory', UserFactory);

	function UserFactory($http, $q, AuthFactory, $window) {
		var service = {
			createUser: createUser,
			login: login,
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
				return response;
			});
		}

		function createUser(article) {
			var deferred = $q.defer();

			var url = '/api/user';

			var userPromise = $http.post(url, article).then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		} 

		function getUser() {
			var deferred = $q.defer();

			if(AuthFactory.getToken()) {
				//return store.getItem(key);
				return $http.post('/api/me', {
					token: store.getItem(key)
				}).then(function(results) {
					deferred.resolve(results);
				}, function(err) {
					deferred.reject(err);
				});
			} else {
				return $q.reject({data: 'client has no auth token, please login again'});
			}
		}

		// function getUser() {
		// 	if (AuthFactory.getToken()) {
		// 		return $http.get('api/me');
		// 	} else {
		// 		return $q.reject({ data: 'client has no auth token' });
		// 	}
		// }
	}

})();