(function() {
    "use strict";

    angular
        .module('app.components')
        .directive('news', news);

    news.$inject = ['STATIC_DIR'];

    function news(STATIC_DIR) {

        controller.$inject = ['$scope'];

        function controller($scope) {

            $scope.isCreate = _isCreate;

            $scope.types = {
                create: 'create',
                default: 'default'
            };

            function _isCreate(typestr) {
                return (typestr == $scope.types.create);
            }

        }

        return {
            restrict: 'E',
            scope: { type: '@', info: '=' },
            controller: controller,
            templateUrl: STATIC_DIR + '/components/news/news.html'
        }
    }

})();