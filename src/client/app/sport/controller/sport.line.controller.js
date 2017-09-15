(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('SportLineController', SportLineController);

    /* @ngInject */
    function SportLineController(lines, sport, linesLength, $state, functions) {
        /*jshint unused:false*/

        if (linesLength === 0) {
            $state.go('sports');
        }
        else if (linesLength === 1) {
            $state.go('sports/lines/categories', {'sport_id': sport.data.id, 'line_id': lines[0].id});
        }
        else {
            var vm = this;
            vm.sport = sport.data;
            vm.lines = lines;
            var cols = functions.columns(lines.length);
            vm.regular = cols.regular;
            vm.special = cols.special;
            vm.regularColMd = cols.regularColMd;
            vm.specialColMd = cols.specialColMd;
        }
    }
})();
