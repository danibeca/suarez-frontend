(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineController', SportLineController);

    /* @ngInject */
    function SportLineController(lines, sport, linesLength,$state) {
        /*jshint unused:false*/
        if(linesLength<=1){
            $state.go('sports/lines/categories', { sport_id: 1, line_id: 1 });
        }
        var vm = this;
        vm.sport = sport.data;
        vm.lines = lines;
    }
})();
