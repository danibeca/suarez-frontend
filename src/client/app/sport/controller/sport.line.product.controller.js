(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineProductController', SportLineProductController);

    /* @ngInject */
    function SportLineProductController(products) {
        /*jshint unused:false*/
        var vm = this;
        vm.products = products;
    }
})();
