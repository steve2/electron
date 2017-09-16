(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('actionbar', actionbar);

    actionbar.$inject = ['STATIC_DIR'];

    function actionbar(STATIC_DIR) {

        controller.$inject = ['$scope', '$rootScope', '$state', '$element'];

        function controller($scope, $rootScope, $state, $element) {

            $scope.isElectron = isElectron();

            // Height of items in the action bar.
            $scope.itemHeight = function() {
                return {
                    'height': $element.find('.actionbar').outerHeight() + 'px'
                };
            };

            // Apply the `active` class to appropriate actionbar item.
            $scope.$watch(function() { return $state.current.name },
                function(state) {
                    $scope.active = state.split('.')[1];
                });
        }

        return {
            restrict: 'E',
            scope: { actions: '=' },
            controller: controller,
            templateUrl: STATIC_DIR + '/components/actionbar/actionbar.html'
        }
    }

})();