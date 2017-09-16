(function() {
    "use strict";

    angular
        .module('app')
        .controller('root', root);

    root.$inject = ['$timeout'];

    function root($timeout) {
        var ct = this;

        // expose moment.js to templates.
        ct.moment = moment;

        ct.actionbar = {
            actions: [
                { name: 'home', text: 'Home', state: 'root.home' },
                { name: 'community', text: 'Community', state: 'root.community', disabled: true },
                { name: 'settings', text: 'Settings', state: 'root.settings', disabled: true },
                { name: 'debug', text: 'Debug', state: 'root.debug' }
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
        
        // Returns true if the application is running under Electron.
        ct.isElectron = function() {
            if (typeof require !== 'function') return false;
            if (typeof window !== 'object') return false;
            try {
                const electron = require('electron');
                if (typeof electron !== 'object') return false;
            } catch (e) {
                return false;
            }
            return true;
        }

    }

})();