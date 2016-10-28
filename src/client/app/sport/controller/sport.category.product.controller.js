(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportCategoryProductController', SportCategoryProductController);

    /* @ngInject */
    function SportCategoryProductController(category, products) {
        /*jshint unused:false*/
        var vm = this;
        vm.category = category;
        vm.products = products;
        vm.title = 'Hola';
    }
})();
