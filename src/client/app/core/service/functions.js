(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('functions', functions);

    /* @ngInject */
    function functions() {
        var service = {
            columns: columns
        };

        return service;

        function columns(total) {
            /* COLUMNS */

            var regularColMd = 0;
            var specialColMd = 0;
            var regular = 0;
            var special = 0;
            var div3 = parseInt(total / 3);
            var res3 = total % 3;
            var div4 = parseInt(total / 4);
            var res4 = total % 4;
            var aux;

            if (total === 1) {
                regularColMd = 'col-md-6';
                regular = 1;
            }
            else if (total === 2) {
                regularColMd = 'col-md-6';
                regular = 2;
            }
            else if (res4 === 0) {
                regularColMd = 'col-md-3';
                regular = total;
            }
            else if (res3 === 0) {
                regularColMd = 'col-md-4';
                regular = total;
            }
            else if (res3 > res4) {
                regular = div3 * 3;
                special = res3;
                regularColMd = 'col-md-4';
                aux = 12 / res3;
                specialColMd = 'col-md-' + aux;
            }
            else {
                regular = div4 * 4;
                special = res4;
                regularColMd = 'col-md-3';
                aux = 12 / res4;
                specialColMd = 'col-md-' + aux;
            }

            return {
                'regular': regular,
                'special': special,
                'regularColMd': regularColMd,
                'specialColMd': specialColMd
            };
        }
    }
})();
