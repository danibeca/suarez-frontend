(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportController', SportController);

    /* @ngInject */
    function SportController(sports, functions) {
        /*jshint unused:false*/
        var vm = this;
        vm.sports = sports;
        var cols = functions.columns(sports.length);
        vm.regular = cols.regular;
        vm.special = cols.special;
        vm.regularColMd = cols.regularColMd;
        vm.specialColMd = cols.specialColMd;
    }
})();
