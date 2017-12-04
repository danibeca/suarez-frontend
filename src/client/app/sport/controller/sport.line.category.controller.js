(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineCategoryController', SportLineCategoryController);

    /* @ngInject */
    function SportLineCategoryController(sport, categories, line, functions) {
        /*jshint unused:false*/
        var vm = this;
        vm.sport = sport.data;
        vm.line = line.data;
        vm.categories = categories;
        var cols = functions.columns(categories.length);
        vm.regular = cols.regular;
        vm.special = cols.special;
        vm.regularColMd = cols.regularColMd;
        vm.specialColMd = cols.specialColMd;
    }
})();
