(function () {
	'use strict';

	angular
		.module('app')
		.factory('articles', articles);

	articles.$inject = ['$resource', '$http'];

	function articles($resource, $http) {

        var resources = {

            articles: 
            $resource('http://localhost:8080/api/news/articles/', {}, {
                query: { method: 'GET', isArray: true }
            })

        };

		return {

            // List all articles.
			list: function () {
                return resources.articles.query();
            }

		};

	}
})();