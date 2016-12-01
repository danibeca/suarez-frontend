/* jshint -W106 */
// jscs:disable
(function () {
    'use strict';

    angular
        .module('app.sport')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }


    function getStates() {
        return [
            {
                state: 'sports',
                config: {
                    url: '/sports',
                    templateUrl: 'app/sport/template/sports.html',
                    controller: 'SportController',
                    controllerAs: 'vm',
                    title: 'sports',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        sports: function (Restangular) {
                            return Restangular.all('sports').getList();
                        }
                    }
                }
            },
            {
                state: 'sports/lines',
                config: {
                    url: '/sports/:id/lines',
                    templateUrl: 'app/sport/template/lines.html',
                    controller: 'SportLineController',
                    controllerAs: 'vm',
                    title: 'lines',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        lines: function (Restangular, $stateParams) {
                            return Restangular.service('lines', Restangular.one('sports', $stateParams.id)).getList();
                        }
                    }
                }
            },
            {
                state: 'sports/lines/products',
                config: {
                    url: '/sports/:sport_id/lines/:line_id/products',
                    templateUrl: 'app/sport/template/products.html',
                    controller: 'SportLineProductController',
                    controllerAs: 'vm',
                    title: 'products',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        products: function (Restangular, $stateParams) {
                            return Restangular
                                .service('products',
                                    Restangular.one('lines', $stateParams.line_id))
                                .getList();
                        }
                    }
                }
            }
        ];
    }
})();
