(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('scroller', scroller);

    scroller.$inject = ['STATIC_DIR'];

    function scroller(STATIC_DIR) {

        controller.$inject = ['$scope', '$rootScope', '$state', '$element', '$timeout'];

        function controller($scope, $rootScope, $state, $element, $timeout) {

            // Initialize NanoScroller after Angular JS.
            $timeout(function () {
                angular.element($element.find('.nano')).nanoScroller({});
            }, 500);

            // Refresh NanoScroller on state changes.
            $scope.$watch(function() { return $state.current.name },
                function(state) {
                    angular.element($element.find('.nano')).nanoScroller();
                });
        }

        return {
            restrict: 'E',
            transclude: true,
            controller: controller,
            templateUrl: STATIC_DIR + '/components/scroller/scroller.html'
        }
    }

})();