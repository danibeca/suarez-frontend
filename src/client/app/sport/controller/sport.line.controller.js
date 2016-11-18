(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineController', SportLineController);

    /* @ngInject */
    function SportLineController(lines) {
        /*jshint unused:false*/
        var vm = this;
        vm.lines = lines;
        console.log(lines);
        vm.title = 'Hola';
    }
})();
