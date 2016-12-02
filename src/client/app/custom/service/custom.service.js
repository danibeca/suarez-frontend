(function () {
    'use strict';

    angular
        .module('app.custom')
        .factory('customService', customService);

    /* @ngInject */
    function customService() {

        var service = {
            getColors: getColors,
            getPieces: getPieces
        };
        return service;

        function getColors() {
            return [
                {
                    'name': 'Rojo',
                    'hexa': [255, 0, 0]
                },
                {
                    'name': 'Amarillo',
                    'hexa': [255, 255, 0]
                },
                {
                    'name': 'Azul',
                    'hexa': [0, 0, 255]
                },
                {
                    'name': 'Negro',
                    'hexa': [0, 0, 0]
                },
                {
                    'name': 'Blanco',
                    'hexa': [255, 255, 255]
                },
                {
                    'name': 'Verde',
                    'hexa': [0, 255, 0]
                }
            ];
        }

        function getPieces() {
            return [
                {
                    'id': '1',
                    'img': 'j2.png'
                },
                {
                    'id': '2',
                    'img': 'j3.png'
                },
                {
                    'id': '3',
                    'img': 'j4.png'
                },
                {
                    'id': '4',
                    'img': 'j5.png'
                },
                {
                    'id': '5',
                    'img': 'j6.png'
                }
            ];
        }
    }
})();
