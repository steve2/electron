(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('article', article);

    article.$inject = ['STATIC_DIR'];

    function article(STATIC_DIR) {

        controller.$inject = ['$scope', '$element'];

        function controller($scope, $element) {

            $scope.timeOfDay = _timeOfDay;
            $scope.fromNow = _fromNow;

            function _timeOfDay(date) {
                return moment(date).format('LT');
            }

            function _fromNow(date) {
                return moment(date).fromNow();
            }

        }

        return {
            restrict: 'E',
            scope: { data: '=', controls: '=' },
            controller: controller,
            templateUrl: STATIC_DIR + '/components/article/article.html'
        }
    }

})();