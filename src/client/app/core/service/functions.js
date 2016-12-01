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

            var rows = 1;                           // Number of regular rows
            var colsRows = 0;                      // Col width in regular rows
            var colsRowFinal = 0;                 // Col width in final row
            var rowsCol4 = parseInt(total / 3);      // Number of regular rows if cols width is 4
            var residueCol4 = parseInt(total) % 3;   // Residue if cols width is 4
            var rowsCol3 = parseInt(total / 4);      // Number of regular rows if cols width is 3
            var residueCol3 = parseInt(total) % 4;   // Residue if cols width is 3

            if (total < 5) {
                colsRows = 12 / total;
                rows = 1;
            }
            else if (residueCol4 === 0) {
                colsRows = 4;
                rows = rowsCol4;
            }
            else if (residueCol3 === 0) {
                colsRows = 3;
                rows = rowsCol3;
            }
            else if (residueCol4 > residueCol3) {
                colsRows = 4;
                rows = rowsCol4;
                colsRowFinal = columns(residueCol4);
            }
            else {
                colsRows = 3;
                rows = rowsCol3;
                colsRowFinal = columns(residueCol3);
            }

            return {
                'rows': rows,
                'cols_rows': colsRows,
                'cols_row_final': colsRowFinal
            };
        }
    }
})();
