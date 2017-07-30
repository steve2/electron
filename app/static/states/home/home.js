(function() {
    "use strict";

    angular
        .module('app')
        .controller('home', home);

    home.$inject = ['articles'];

    function home(articles) {
        var ct = this;

        ct.news = articles.list();

    }

})();