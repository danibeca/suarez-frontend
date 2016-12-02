(function () {
    'use strict';

    angular
        .module('app.custom')
        .controller('CustomController', CustomController);

    /* @ngInject */
    function CustomController(customService) {
        /*jshint unused:false*/

        var vm = this;
        vm.title = 'Custom product';
        vm.selectedColor = [255, 255, 255];
        vm.colors = [];
        vm.pieces = [];
        vm.selectColor = selectColor;
        vm.fill = fill;
        vm.set = set;

        ini();

        function ini() {
            vm.colors = customService.getColors();
            vm.pieces = customService.getPieces();

            //set();
        }

        function set() {
            angular.element(document).ready(function () {
                angular.forEach(vm.pieces, function (data, id) {
                    var canvas = document.getElementById('canvasImg[' + data.id + ']');
                    var img = new Image();
                    img.src = 'images/' + data.img;
                    var ctx = canvas.getContext('2d');
                    img.onload = function () {
                        ctx.drawImage(img, 0, 0);
                        img.style.display = 'none';
                    };
                });
            });
        }

        function fill(event) {
            angular.forEach(vm.pieces, function (data, id) {

                var canvas = document.getElementById('canvasImg[' + data.id + ']');
                var ctx = canvas.getContext('2d');
                var pixelData = ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data;

                if (pixelData[3] !== 0) {
                    ctx.drawImage(canvas, 0, 0);

                    var canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    for (var x = 0; x < canvasData.width; x++) {
                        for (var y = 0; y < canvasData.height; y++) {
                            // Index of the pixel in the array
                            var idx = (x + y * canvas.width) * 4;

                            // Update the values of the pixel;
                            canvasData.data[idx + 0] = vm.selectedColor[0];
                            canvasData.data[idx + 1] = vm.selectedColor[1];
                            canvasData.data[idx + 2] = vm.selectedColor[2];
                        }
                    }
                    ctx.putImageData(canvasData, 0, 0);
                }

            });
        }

        function selectColor(r, g, b) {
            vm.selectedColor = [r, g, b];
        }
    }
})();
