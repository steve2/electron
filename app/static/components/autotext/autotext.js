(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('autotext', autotext);

    autotext.$inject = ['STATIC_DIR'];

    function autotext(STATIC_DIR) {

        controller.$inject = ['$scope', '$rootScope', '$state', '$element', '$timeout'];

        function controller($scope, $rootScope, $state, $element, $timeout) {

            $timeout(function () {
                autosize(angular.element($element.find('textarea')));
            });
        }

        return {
            restrict: 'E',
            transclude: true,
            scope: { placeholder: '@' },
            controller: controller,
            templateUrl: STATIC_DIR + '/components/autotext/autotext.html'
        }
    }

})();