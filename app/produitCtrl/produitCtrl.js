(function () {
    angular.module('app')
        .controller('produitCtrl', ['$scope', '$http',

            function ($scope, $http) {
                //le corps fonctionnel du controller
                // model + actions
                var virtualThis = this;

                //Var sur le scope
                $scope.value = 'une valeur issue du $scope';
                // Une Variable local au controller
                var localVar = 'une variable local';


                this.id = 1;
                this.nom = 'Pepsi 33cl';
                this.description = 'Boisson gazeuse Americaine';
                this.prix = 2.54;
                this.stock = 10;
                this.img = '/img/Pepsi_transparent.png';
                this.categorieId = 0;
                this.categorie = { id: 0, name: 'Boisson' }

                $scope.onSubmitForm = function () {
                    $http({
                        url: 'http://localhost:5629/produits/' + virtualThis.id,
                        method: (undefined===virtualThis.id)?'PUT' : 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data:
                        {
                            id: virtualThis.id,
                            nom: virtualThis.nom,
                            description: virtualThis.description,
                            prix: virtualThis.prix,
                            stock: virtualThis.stock,
                            categorieId: virtualThis.categorieId,
                            img: virtualThis.img

                        }

                    }).then(
                        function (response) {
                            alert('Put effectué' + JSON.stringify(response.data));
                        },
                        function (response) {
                            alert('Put echoué' + JSON.stringify(response.data));
                        }
                    );

                }
            }
        ]);

})();