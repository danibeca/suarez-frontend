(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineCategoryController', SportLineCategoryController);

    /* @ngInject */
    function SportLineCategoryController(categories) {
        /*jshint unused:false*/
        var vm = this;
        console.log(categories);
        vm.categories = categories;
    }
})();
