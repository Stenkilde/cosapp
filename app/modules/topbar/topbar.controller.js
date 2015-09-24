(function () {
	'use strict';

	angular
		.module('cosApp')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar($modal, UserFactory, toastr, $state) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.openCreate	= openCreate;
		vm.createUser	= createUser;
		vm.logout		= logout;
		
		function activate() {
		    UserFactory.getUser().then(function(response) {
		        vm.user = response;
		    });
		}

		activate();

		function logout() {
			UserFactory.logout();
			$state.go($state.current, {}, {reload: true});
		}


		function createUser() {
			UserFactory.createUser({
				name: vm.name,
				cosplayName: vm.cosplayName,
				username: vm.username,
				password: vm.password
			}).then(function(response) {
				console.log(response)
				toastr.success(response.message);
			});
		}

      	function openCreate() {
  			$modal.open({
		      	templateUrl: 'modules/topbar/topbar.create.html',
		      	controller: 'Topbar',
		      	controllerAs: 'topbar'
	 	    });
      	}

	}

})();