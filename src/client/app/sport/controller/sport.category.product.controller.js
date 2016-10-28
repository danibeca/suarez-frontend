(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(products) {
        /*jshint unused:false*/
        var vm = this;
        vm.products = products;
        vm.title = 'Hola';
    }
})();
