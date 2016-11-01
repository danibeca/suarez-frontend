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
            },
            {
                state: 'sports/categories/products',
                config: {
                    url: '/sports/categories/products',
                    templateUrl: 'app/sport/template/products.html',
                    controller: 'SportCategoryProductController',
                    controllerAs: 'vm',
                    title: 'products',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        category: function (Restangular) {
                            return Restangular.one('categories', 1).get();
                        },
                        products: function (Restangular) {
                            return Restangular
                                .service('products', Restangular.one('sports', 1).one('categories', 1))
                                .getList();
                        }
                    }
                }
            }
        ];
    }
})();
