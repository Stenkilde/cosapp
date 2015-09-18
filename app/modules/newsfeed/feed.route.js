(function() {
    'use strict';

    angular.module('cosApp')
        /* @ngInject */
        .config(function ($stateProvider) {

            var Index = {
                name: 'application.newsfeed',
                url: '/',
                views: {
                    'main@application': {
                        templateUrl: 'modules/newsfeed/feed.template.html',
                        controller: 'Newsfeed',
                        controllerAs: 'newsfeed'
                    }
                }
            };

            $stateProvider.state(Index);
        });
})();