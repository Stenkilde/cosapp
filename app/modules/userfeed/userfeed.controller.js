(function () {
    'use strict';

    angular
        .module('cosApp')
        .controller('Userfeed', Userfeed);

    /* @ngInject */
    function Userfeed(UserFactory) {
        /*jshint validthis: true */
        var vm 			= this;
        vm.login        = login;
        vm.handleError  = handleError;

        function activate() {
        	
        }

        function login(username, password) {
            UserFactory.login(vm.username, vm.password).then(function success(response) {
                vm.user = response.data;
                console.log(response);
            }, handleError);
        }

        function handleError(response) {
            console.log('Error ' + response.data);
        }

        activate();

    }

})();