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
                        sport: function (Restangular, $stateParams) {
                            return Restangular.one('sports', $stateParams.id).get();
                        },
                        lines: function (Restangular, $stateParams) {
                            return Restangular.service('lines', Restangular.one('sports', $stateParams.id)).getList();
                        }
                    }
                }
            },
            {
                state: 'sports/lines/categories',
                config: {
                    url: '/sports/:sport_id/lines/:line_id/categories',
                    templateUrl: 'app/sport/template/categories.html',
                    controller: 'SportLineCategoryController',
                    controllerAs: 'vm',
                    title: 'categories',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        categories: function (Restangular, $stateParams) {
                            return Restangular.service('categories', 
                                                            Restangular.one('sports', $stateParams.sport_id)
                                                                        .one('lines', $stateParams.line_id))
                                                        .getList();
                        },
                        line: function (Restangular, $stateParams) {
                            return Restangular.one('lines', $stateParams.line_id).get();
                        }
                    }
                }
            },
            {
                state: 'sports/lines/categories/templates',
                config: {
                    url: '/category/:category_id/templates',
                    templateUrl: 'app/sport/template/templates.html',
                    controller: 'CategoryTemplateController',
                    controllerAs: 'vm',
                    title: 'templates',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        templates: function (Restangular, $stateParams) {
                            return Restangular.service('templates', 
                                                            Restangular.one('categories', $stateParams.category_id))
                                                        .getList();
                        },
                        category: function (Restangular, $stateParams) {
                            return Restangular.one('categories', $stateParams.category_id).get();
                        }
                    }
                }
            },
            {
                state: 'designs',
                config: {
                    url: '/designs',
                    templateUrl: 'app/sport/template/designs.html',
                    controller: 'DesignController',
                    controllerAs: 'vm',
                    title: 'designs',
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
                state: 'contact',
                config: {
                    url: '/contact',
                    templateUrl: 'app/sport/template/contact.html',
                    controller: 'ContactController',
                    controllerAs: 'vm',
                    title: 'contact',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
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
                            return Restangular.service('products', 
                                                            Restangular.one('lines', $stateParams.line_id))
                                                        .getList();
                        }
                    }
                }
            }
        ];
    }
})();
