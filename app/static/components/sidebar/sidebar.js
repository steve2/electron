(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['STATIC_DIR'];

    function sidebar(STATIC_DIR) {

        controller.$inject = ['$scope', '$element'];

        function controller($scope, $element) {

        }

        return {
            restrict: 'E',
            scope: { items: '=' },
            controller: controller,
            templateUrl: STATIC_DIR + '/components/sidebar/sidebar.html'
        }
    }

})();