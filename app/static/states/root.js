(function() {
    "use strict";

    angular
        .module('app')
        .controller('root', root);

    root.$inject = ['$timeout'];

    function root($timeout) {
        var ct = this;

        ct.actionbar = {
            actions: [
                { name: 'home', text: 'Home', state: 'root.home' },
                { name: 'community', text: 'Community', state: 'root.community' },
                { name: 'settings', text: 'Settings', state: 'root.settings' }
            ]
        };

        $timeout(function() {

            // Register window control events after initializing AngularJS.
            registerCloseControls("wndclose");
        });

        ct.navbarHeight = function() {
            return 56;
        };

        ct.contentHeight = function () {
            return { 'height': 'calc(100vh - ' + ct.navbarHeight() + 'px)' };
        }

        ct.contentStyle = function() {
            return {
                'height': 'calc(100vh - ' + ct.navbarHeight() + 'px)',
                'margin-top': ct.navbarHeight() + 'px'
            };
        };

    }

})();