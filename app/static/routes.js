(function() {
    "use strict";

    angular
        .module("app")
        .config(Routes)

    function Routes($stateProvider, $urlRouterProvider, $locationProvider, STATIC_DIR) {

        // $locationProvider.html5Mode({ enabled: true, requireBase: false });

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
                url: '/',
                authenticate: true,
            })
            .state('root.settings', {
                templateUrl: STATIC_DIR + '/states/settings/settings.html',
                controller: 'settings as settings',
                url: '/settings',
                authenticate: true,
            })
            .state('root.community', {
                templateUrl: STATIC_DIR + '/states/community/community.html',
                controller: 'community as community',
                url: '/community',
                authenticate: true
            })
            .state('root.login', {
                templateUrl: STATIC_DIR + '/states/login/login.html',
                controller: 'login as login',
                url: '/login'
            })
            .state('root.debug', {
                templateUrl: STATIC_DIR + '/states/debug/debug.html',
                controller: 'debug as debug',
                url: '/debug',
                authenticate: true
            });
    }

})();