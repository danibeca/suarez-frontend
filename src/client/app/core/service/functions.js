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

        function columns(total){

            var rows = 1;                           // Number of regular rows
            var cols_rows = 0;                      // Col width in regular rows
            var cols_row_final = 0;                 // Col width in final row
            var rows_col4 = parseInt(total/3);      // Number of regular rows if cols width is 4
            var residue_col4 = parseInt(total)%3;   // Residue if cols width is 4
            var rows_col3 = parseInt(total/4);      // Number of regular rows if cols width is 3
            var residue_col3 = parseInt(total)%4;   // Residue if cols width is 3

            if(total < 5){
                cols_rows = 12/total; 
                rows = 1;
            }
            else if(residue_col4 === 0){
                cols_rows = 4;
                rows = rows_col4;
            }
            else if(residue_col3 === 0){
                cols_rows = 3;
                rows = rows_col3;
            }
            else if(residue_col4 > residue_col3){
                cols_rows = 4;
                rows = rows_col4;
                cols_row_final = columns(residue_col4);
            }
            else {
                cols_rows = 3;
                rows = rows_col3;
                cols_row_final = columns(residue_col3);
            }

            return {'rows': rows,
                    'cols_rows': cols_rows,
                    'cols_row_final': cols_row_final};
        }
    }
})();
    