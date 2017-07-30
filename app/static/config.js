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

    function Config($httpProvider, $resourceProvider) {

        // Django CSRF Token 
        // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        // Don't strip trailing slashes from Resource URIs. 
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }

    function Run() {

    }

})();