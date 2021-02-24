(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoriesCtrl', ControllerController);

    // injection du $http afin d'effectuer des GET/POST/PUT/PATCH...
    ControllerController.$inject = ['produitSrvc'];
    function ControllerController(prdSrvc) {
        var vm = this;
        this.categories=prdSrvc.categories;

    }
})();