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

            var regular_col_md = 0;
            var special_col_md = 0;
            var regular = 0;
            var special = 0;
            var div_3 = parseInt(total / 3);
            var res_3 = total % 3;
            var div_4 = parseInt(total / 4);
            var res_4 = total % 4;

            if(total === 1){
                regular_col_md = 'col-md-6';
                regular = 1;
            }
            else if(total === 2){
                regular_col_md = 'col-md-6';
                regular = 2;
            }
            else if(res_4 === 0){
                regular_col_md = 'col-md-3';
                regular = total;
            }
            else if(res_3 === 0){
                regular_col_md = 'col-md-4';
                regular = total;
            }
            else if(res_3 > res_4){ // Ej: 5
                regular = div_3*3;
                special = res_3;
                regular_col_md = 'col-md-4';
                special_col_md = 'col-md-'+12/res_3;
            }
            else { // 10 Ej: 10
                regular = div_4*4;
                special = res_4;
                regular_col_md = 'col-md-3';
                special_col_md = 'col-md-'+12/res_4;
            }

            return {
                'regular': regular,
                'special': special,
                'regular_col_md': regular_col_md,
                'special_col_md': special_col_md
            };

            /*
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
            };*/
        }
    }
})();
