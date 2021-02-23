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
            {id:0, nom:'Pepsi 33cl', description:'Boisson gazeuse Americaine', prix:2.54, stock:10, img:'/img/Pepsi_transparent.png', categorie:{id:0,name:'Boisson'}},
            {id:1, nom:'Orangina 33cl', description:'Boisson gazeuse oranger Française', prix:1.90, stock:50, img:'/img/Orangina.jpg', categorie:{id:0,name:'Boisson'}  },
            {id:2, nom:'Fanta 33cl', description:'Boisson gazeuse oranger Americaine', prix:2.00, stock:25, img:'/img/Fanta.png', categorie:{id:0,name:'Boisson'}},
            {id:3, nom:'Chouffe 33cl', description:'Boisson Belge alcoolisée au houblon', prix:4.00, stock:100, img:'', categorie:{id:4,name:'Bière'}},
            {id:4, nom:'Carte d or vanille', description:'Glace vanille de Madagascar', prix:5.00, stock:50, img:'', categorie:{id:3,name:'Glace'}}

        ]
            
        activate();

        ////////////////

        function activate() { }
    }
})();