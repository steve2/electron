(function () {
	'use strict';

	angular
		.module('app')
		.factory('articles', articles);

	articles.$inject = ['$resource', '$http'];

	function articles($resource, $http) {

        var resources = {

            articles: 
				$resource('http://localhost:8080/api/news/articles/:articleid/', {}, {})
        };

		return {

            // List all articles.
			list: function () {
                return resources.articles.query();
			},

			// Get an article by its ID.
			get: function (articleid) {
				return resources.articles.get({ articleid: articleid })
			},

			// Updates an article.
			update: function (article) {
				return resources.articles.save({ articleid: article.id }, article);
			},

			// Create a news article.
			create: function (article) {
				return resources.articles.save({}, article)
			},

			// Delete an existing article.
			delete: function (article) {
				return resources.articles.delete({ articleid: article.id })
			}

		};

	}
})();