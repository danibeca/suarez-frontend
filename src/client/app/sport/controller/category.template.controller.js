(function () {
    'use strict';

    angular
        .module('app.sport')
        .controller('CategoryTemplateController', CategoryTemplateController);

    /* @ngInject */
    function CategoryTemplateController(templates) {
        /*jshint unused:false*/
        var vm = this;
        //vm.category = category.data;
        vm.templates = templates;
        console.log(templates);
    }
})();
