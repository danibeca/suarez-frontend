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
                state: 'sports/categories/products',
                config: {
                    url: '/sports/:sport_id/categories/:category_id/products',
                    templateUrl: 'app/sport/template/products.html',
                    controller: 'SportCategoryProductController',
                    controllerAs: 'vm',
                    title: 'products',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        line: function (Restangular, $stateParams) {
                            return Restangular.one('lines', $stateParams.category_id).get();
                        },
                        category: function (Restangular, $stateParams) {
                            return Restangular.one('categories', $stateParams.category_id).get();
                        },
                        products: function (Restangular, $stateParams) {
                            return Restangular
                                .service('products', Restangular.one('sports', $stateParams.sport_id).one('categories', $stateParams.category_id))
                                .getList();
                        }
                    }
                }
            }
            /*{
                state: 'sports/categories',
                config: {
                    url: '/sports/:id/categories',
                    templateUrl: 'app/sport/template/categories.html',
                    controller: 'SportCategoryController',
                    controllerAs: 'vm',
                    title: 'categories',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        categories: function (Restangular,  $stateParams) {
                            return Restangular.service('categories', Restangular.one('sports', $stateParams.id)).getList();
                        }
                    }
                }
            },*/
        ];
    }
})();
