(function () {
	'use strict';

	angular
		.module('app')
		.factory('sessions', sessions);

	sessions.$inject = ['$rootScope', '$resource', '$http'];

	function sessions($rootScope, $resource, $http) {

		var server = 'http://localhost:8080';

        var resources = {

            login: 
				$resource(server + '/api/auth/login/', {}, {}),

			logout:
				$resource(server + '/api/auth/logout/', {}, {}),

			current:
				$resource(server + '/api/auth/current/', {}, {}),
        };

		return {
			
			current: function () {
				return resources.current.get();
			},

			login: function (username, password) {
				var result = resources.login.save({ username: username, password: password });
				result.$promise.then(
					function (response) { $rootScope.$broadcast('auth.login', response); },
					function (errors) { $rootScope.$broadcast('auth.login.failed', errors); }
				);
				return result;
			},

			logout: function () {
				var result = resources.logout.save();
				result.$promise.then(
					function (response) { $rootScope.$broadcast('auth.logout'); },
					function (errors) { $rootScope.$broadcast('auth.logout.failed', errors); }
				);
				return result;
			},

		};

	}
})();