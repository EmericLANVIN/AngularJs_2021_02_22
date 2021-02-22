(function(){
    angular.module('app')
        .controller('produitCtrl',[ '$scope',
            function($scope){
                //le corps fonctionnel du controller
                // model + actions

                //Var sur le scope
                $scope='une valeur issue du $scope';
                // Une Variable local au controller
                var localVar='une variable local';
                

                this.id=0;
                this.nom='Pepsi 1.5';
                this.description='Boisson gazeuse arome café, Americaine';
                this.prix=2.54;
                this.stock=10;
                this.img='\img\Pepsi_transparent.png';
                this.categorie={id:0,name:'Boisson'}
            }
        ]);

})();