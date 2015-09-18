(function () {
	'use strict';

	angular
		.module('cosApp')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar($modal, UserFactory) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.openCreate	= openCreate;
		vm.createUser	= createUser;
		


		function createUser() {
			UserFactory.createUser({
				name: vm.name,
				cosplayName: vm.cosplayName,
				username: vm.username,
				password: vm.password
			}).then(function(result) {
				console.log(result)
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