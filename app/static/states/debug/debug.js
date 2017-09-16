(function() {
    "use strict";

    angular
        .module('app')
        .controller('debug', debug);

    debug.$inject = ['$scope', 'articles', 'sessions'];

    function debug($scope, articles, sessions) {
        var ct = this;

        ct.execute = execute;
        ct.command = "";
        ct.outputLines = [];

        function execute(command) {
            ct.outputLines.push(command);

            if (command == 'logout') 
                sessions.logout();
            else {

                try {
                    var e = ct.$eval(command);
                    if (e === undefined)
                        ct.outputLines.push('"' + command + '" could not be evaluated.');
                    else
                        ct.outputLines.push(e); 
                } catch (error) {
                    ct.outputLines.push(error.message);
                }
            }
            ct.command = "";
        }


    }

})();