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
                        }
                    }
                }
            },
            {
                state: 'about',
                config: {
                    url: '/about',
                    templateUrl: 'app/home/template/about.html',
                    title: 'About us',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        }
                    }
                }
            },
            {
                state: 'faqs',
                config: {
                    url: '/faqs',
                    templateUrl: 'app/home/template/faqs.html',
                    title: 'FAQs',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        }
                    }
                }
            },
            {
                state: 'warranty',
                config: {
                    url: '/warranty',
                    templateUrl: 'app/home/template/warranty.html',
                    title: 'FAQs',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        }
                    }
                }
            },
            {
                state: 'policy',
                config: {
                    url: '/policy',
                    templateUrl: 'app/home/template/policy.html',
                    title: 'Privacy policy',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        }
                    }
                }
            },
            {
                state: 'terms',
                config: {
                    url: '/terms',
                    templateUrl: 'app/home/template/terms.html',
                    title: 'Terms',
                    resolve: {
                        translations: function (translateHelper) {
                            return translateHelper.addParts('home');
                        }
                    }
                }
            },
        ];
    }
})();
