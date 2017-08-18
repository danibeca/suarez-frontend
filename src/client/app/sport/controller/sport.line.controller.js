(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineController', SportLineController);

    /* @ngInject */
    function SportLineController(lines, sport) {
        /*jshint unused:false*/
        var vm = this;
        vm.sport = sport.data;
        vm.lines = lines;
    }
})();
