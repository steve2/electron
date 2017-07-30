(function() {
    "use strict";

    angular
        .module("app")
        .config(Routes)

    function Routes($stateProvider, $urlRouterProvider, $locationProvider, STATIC_DIR) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                abstract: true,
                templateUrl: STATIC_DIR + '/states/root.html',
                controller: 'root as root',
            })
            .state('root.home', {
                templateUrl: STATIC_DIR + '/states/home/home.html',
                controller: 'home as home',
                url: '/'
            })
            .state('root.settings', {
                templateUrl: STATIC_DIR + '/states/settings/settings.html',
                controller: 'settings as settings',
                url: '/settings'
            })
            .state('root.community', {
                templateUrl: STATIC_DIR + '/states/community/community.html',
                controller: 'community as community',
                url: '/community'
            });

    }

})();