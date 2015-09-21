(function () {
    'use strict';

    angular
        .module('cosApp')
        .controller('Userfeed', Userfeed);

    /* @ngInject */
    function Userfeed(UserFactory, $rootScope) {
        /*jshint validthis: true */
        var vm 			= this;
        vm.login        = login;
        vm.handleError  = handleError;

        function activate() {
        	UserFactory.getUser().then(function success(response) {
                  vm.user = response;
                  console.log($rootScope.user);
            });
        }

        function login(username, password) {
            UserFactory.login(vm.username, vm.password).then(function success(response) {
                vm.user = response.data;
                console.log(response);
                $rootScope.user = response.data.user;
                console.log($rootScope);

            }, handleError);
        }

        function handleError(response) {
            console.log('Error ' + response.data);
        }

        activate();

    }

})();