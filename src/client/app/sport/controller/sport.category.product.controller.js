(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportCategoryProductController', SportCategoryProductController);

    /* @ngInject */
    function SportCategoryProductController(line, category, products) {
        /*jshint unused:false*/
        var vm = this;
        vm.category = category;
        vm.products = products;
        vm.line = line;
        vm.title = 'Hola';
    }
})();
