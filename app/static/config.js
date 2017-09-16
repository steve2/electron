(function() {
    "use strict";

    angular
        .module("app", [

            "ui.router",

            'ngResource',
            'ngCookies',

            'app.constants',
            'app.components',

        ])
        .config(Config)
        .run(Run);

    Config.$inject = ['$httpProvider', '$resourceProvider'];
    Run.$inject = ['$rootScope', '$state', '$transitions', '$q', 'sessions'];

    function Config($httpProvider, $resourceProvider) {

        // Django CSRF Token 
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        // Don't strip trailing slashes from Resource URIs. 
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }

    function Run($rootScope, $state, $transitions, $q, sessions) {

        $rootScope.moment = moment;
        $rootScope.link = $state.go;

        $rootScope.authenticated = sessions.current();
        $rootScope.authenticated.$promise.then(
            function (response) {
                if ($state.current.name == 'root.login')
                    $state.go('root.home');
            },
            function (errors) { 
                $rootScope.authenticated = null; 
                $state.go('root.login');
            }
        );

        $rootScope.$on('auth.login', function (event, authenticated) {
            $rootScope.authenticated = authenticated;
            $rootScope.authenticated.$promise = $q(function (resolve) { resolve(); });
            if ($state.current.name == 'root.login') 
                $state.go('root.home');
        });

        $rootScope.$on('auth.logout', function (event) {
            $rootScope.authenticated = null;
            $state.go('root.login');
        });

        $transitions.onBefore({ to: '**' }, function ($state) {
            if ($state.to().authenticate && !$rootScope.authenticated) {
                $state.router.stateService.target('root.login');
                return false; }
            else if ($rootScope.authenticated && $state.to().name == 'root.login') {
                $state.router.stateService.target('root.home');
                return false; }
        });

    }

})();