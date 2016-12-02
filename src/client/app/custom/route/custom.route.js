/* jshint -W106 */
// jscs:disable
(function () {
    'use strict';

    angular
        .module('app.custom')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }


    function getStates() {
        return [
            {
                state: 'custom',
                config: {
                    url: '/custom',
                    templateUrl: 'app/custom/template/custom.html',
                    controller: 'CustomController',
                    controllerAs: 'vm',
                    title: 'custom',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('dashboard');
                        }
                    }
                }
            }
        ];
    }
})();
