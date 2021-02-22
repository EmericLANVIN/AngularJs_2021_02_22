(function() {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ControllerController);

    ControllerController.$inject = ['$scope'];
    function ControllerController($scope) {
        $scope.value2='Test2 une valeur issue du $scope';

        var vm = this;
        
        this.produits=[
            {id:0, nom:'Pepsi 33cl', description:'Boisson gazeuse Americaine', prix:2.54, stock:10, img:'/img/Pepsi_transparent.png'},
            {id:1, nom:'Orangina 33cl', description:'Boisson gazeuse oranger Française', prix:1.90, stock:50, img:'/img/Pepsi_transparent.png'},
            {id:2, nom:'Fanta 33cl', description:'Boisson gazeuse oranger Americaine', prix:2.00, stock:25, img:'/img/Pepsi_transparent.png'}
        ]
            
        activate();

        ////////////////

        function activate() { }
    }
})();