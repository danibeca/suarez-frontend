(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineCategoryController', SportLineCategoryController);

    /* @ngInject */
    function SportLineCategoryController(categories, line) {
        /*jshint unused:false*/
        var vm = this;
        vm.line = line.data;
        vm.categories = categories;
    }
})();
