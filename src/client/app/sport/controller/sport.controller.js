(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportController', SportController);

    /* @ngInject */
    function SportController(sports) {
        /*jshint unused:false*/
        var vm = this;
        vm.sports = sports;
    }
})();
