(function () {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }


    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/template/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: 'home',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        },
                        sports: function (Restangular) {
                            return Restangular.all('sports').getList();
                        },
                        categories: function (Restangular) {
                            return Restangular.service('categories', Restangular.one('sports', 1)).getList();
                        },
                        products: function (Restangular) {
                            return Restangular.service('products', Restangular.one('sports',1).one('categories',1)).getList();
                        }
                    }
                }
            }
        ];
    }
})();
