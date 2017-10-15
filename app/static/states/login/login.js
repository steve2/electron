(function() {
    "use strict";

    angular
        .module('app')
        .controller('login', login);

    login.$inject = ['$scope', 'sessions'];

    function login($scope, sessions) {
        var ct = this;

        ct.login = _login;

        function _login(username, password) {
            return sessions.login(username, password);
        }

    }

})();