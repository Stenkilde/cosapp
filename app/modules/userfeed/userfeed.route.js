(function() {
    'use strict';

    angular.module('cosApp')
        /* @ngInject */
        .config(function ($stateProvider) {

            var Index = {
                name: 'application.userfeed',
                url: '/',
                views: {
                    'main@application': {
                        templateUrl: 'modules/userfeed/userfeed.template.html',
                        controller: 'Userfeed',
                        controllerAs: 'userfeed'
                    }
                }
            };

            $stateProvider.state(Index);
        });
})();