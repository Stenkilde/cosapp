(function () {
    'use strict';

    angular
        .module('cosApp')
        .controller('Userfeed', Userfeed);

    /* @ngInject */
    function Userfeed(UserFactory, $rootScope, $timeout, toastr) {
        /*jshint validthis: true */
        var vm 			= this;
        vm.login        = login;
        vm.handleError  = handleError;

        function activate() {
            UserFactory.getUser().then(function(response) {
                vm.user = response;
            }, handleError);
        }

        function login(username, password) {
            UserFactory.login(vm.username, vm.password).then(function success(response) {
                vm.user = response.data;
            }, handleError);
        }

        function handleError(response) {
            toastr.error('Error ' + response.data);
        }

        activate();

    }

})();