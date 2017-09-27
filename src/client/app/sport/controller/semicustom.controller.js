(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SemicustomController', SemicustomController);

    /* @ngInject */
    function SemicustomController(designs) {
        /*jshint unused:false*/
        var vm = this;
        console.log(designs);
        vm.designs = designs;
    }
})();
