(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportCategoryController', SportCategoryController);

    /* @ngInject */
    function SportCategoryController(categories) {
        /*jshint unused:false*/
        var vm = this;
        vm.categories = categories;
        vm.title = 'Hola';
    }
})();
