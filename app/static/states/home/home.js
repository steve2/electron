(function() {
    "use strict";

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['articles', '$filter'];

    function home(articles, $filter) {
        var ct = this;

        ct.articles = {};
        ct.articlesByDate = {};

        ct.items = {
            controls: {
                sort: {
                    icon: 'fa-sort',
                    text: 'Sort Articles'
                }
            }
        };

        ct.articleControls = {
            delete: _deleteArticle,
            restore: _restoreArticle,
            destroy: _destroyArticle,
        };

        _refreshArticles();

        function _categorizeByDate(list) {
            var categorized = {};
            var previous = null;
            var dateCreated;

            list = $filter('orderBy')(list, '-dateCreated');

            for (var key in list) {
                var dateCreated = moment(list[key]['dateCreated']).format('LL');

                if (dateCreated != previous)
                    categorized[dateCreated] = [];

                categorized[dateCreated].push(list[key]);
                previous = dateCreated;
            }
            return categorized;
        }
        
        function _refreshArticles() {
            ct.articles.loading = true;
            articles.list().$promise.then(function (resource) {
                ct.articles = resource;
                ct.articles.loading = false;
                ct.articlesByDate = _categorizeByDate(resource);
            });
        }

        function _deleteArticle(article) {
            if (!confirm('Are you sure you want to delete this article?'))
                return;
            article.deleted = true;
            articles.update(article).$promise.then(
                function (success) {
                    _refreshArticles();
                },
                function (errors) {}
            );
        }

        function _restoreArticle(article) {
            if (!confirm('Are you sure you want to restore this article?'))
                return;
            article.deleted = false;
            articles.update(article).$promise.then(
                function (success) {
                    _refreshArticles();
                },
                function (errors) {}
            )
        }

        function _destroyArticle(article) {
            if (!confirm('Are you sure you want to destroy this article? This will permanently delete it.'))
                return;
            articles.delete(article).$promise.then(
                function (success) {
                    _refreshArticles();
                },
                function (errors) {}
            )
        }
    }

})();