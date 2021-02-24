(function () {
    angular.module('app')
        .controller('produitCtrl', ['$scope', 'produitSrvc',

            function ($scope, prdSrvc) {
                //le corps fonctionnel du controller
                // model + actions
                var virtualThis = this;

                //Var sur le scope
                $scope.value = 'une valeur issue du $scope';
                // Une Variable local au controller
                var localVar = 'une variable local';

                //Appel au final du service directement pour ajouter un produit
                this.produit = prdSrvc.produit;
                this.isEmpty=prdSrvc.produitEmpty;
                
                // this.id = 1;
                // this.nom = 'Pepsi 33cl';
                // this.description = 'Boisson gazeuse Americaine';
                // this.prix = 2.54;
                // this.stock = 10;
                // this.img = '/img/Pepsi_transparent.png';
                // this.categorieId = 0;
                // this.categorie = { id: 0, name: 'Boisson' }

                $scope.onSubmitForm = prdSrvc.saveProduct;

            }
        ]);

})();