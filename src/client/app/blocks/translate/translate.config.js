(function () {
    'use strict';

    angular.module('blocks.translate')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig($translateProvider) {
        var defaultLanguage = 'en';

        $translateProvider.useLoader('$translatePartialLoader', {
            /* urlTemplate: 'app/i18n/{part}/{lang}.json' */
            urlTemplate: 'app/i18n/{part}/en.json'
        });
        $translateProvider.preferredLanguage(defaultLanguage);
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.useCookieStorage();
    }
})();
