(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoriesCtrl', ControllerController);

    ControllerController.$inject = [];
    function ControllerController() {
        var vm = this;
        this.categories=[
            {id:0, nom:'Boisson'},
            {id:1, nom:'Dessert'},
            {id:2, nom:'Plat'},
            {id:3, nom:'Glace'},
            {id:4, nom:'Bière'}
        ]

        activate();

        ////////////////

        function activate() { }
    }
})();