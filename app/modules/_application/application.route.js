(function() {
	'use strict';

	angular.module('cosApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				controller: 'Application',
				controllerAs: 'application',
				views : {
					// Wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html'
					},
					// Topbar
					'topbar@application': {
						templateUrl: 'modules/topbar/topbar.template.html',
						controller: 'Topbar',
						controllerAs: 'topbar'
					},
					// Userfeed
					'userfeed@application': {
						templateUrl: 'modules/userfeed/userfeed.template.html',
						controller: 'Userfeed',
						controllerAs: 'userfeed'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();
