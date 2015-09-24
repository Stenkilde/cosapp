(function () {
    'use strict';

    angular
        .module('cosApp')
        .controller('Userfeed', Userfeed);

    /* @ngInject */
    function Userfeed(UserFactory, $rootScope, $timeout) {
        /*jshint validthis: true */
        var vm 			= this;
        vm.login        = login;
        vm.handleError  = handleError;

        function activate() {
            UserFactory.getUser().then(function success(response) {
                vm.user = response;
                console.log(vm.user);
            });
        }

        function login(username, password) {
            UserFactory.login(vm.username, vm.password).then(function success(response) {
                vm.user = response.data;
                vm.user = (response.data);

            }, handleError);
        }

        function handleError(response) {
            console.log('Error ' + response.data);
        }

        activate();

    }

})();