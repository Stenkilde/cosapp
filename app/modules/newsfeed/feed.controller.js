(function () {
    'use strict';

    angular
        .module('cosApp')
        .controller('Newsfeed', Newsfeed);

    /* @ngInject */
    function Newsfeed() {
        /*jshint validthis: true */
        var vm 			= this;
        vm.feeds 		= 
        [
			{
				"feedTitle": "Header",
				"feedBody": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatem."
			},
			{
				"feedTitle": "Header2",
				"feedBody": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatem."
			},
			{
				"feedTitle": "Header3",
				"feedBody": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatem."
			}
		]

    }

})();
