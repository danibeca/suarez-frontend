(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineController', SportLineController);

    /* @ngInject */
    function SportLineController(lines, sport, functions) {
        /*jshint unused:false*/
        var vm = this;
        vm.sport = sport.data;
        vm.lines = lines;
        
        var cols = functions.columns(lines.length);

        vm.regular = cols.regular; 
        vm.special = cols.special; 
        vm.regular_col_md = cols.regular_col_md;
        vm.special_col_md = cols.special_col_md;
    }
})();
