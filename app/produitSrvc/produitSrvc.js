(function() {
    'use strict';

    angular
        .module('app')
        .service('produitSrvc', Service);

    Service.$inject = ['$http', '$routeParams'];
    function Service($http,$routeParams) {
        var vm=this;
        vm.produits=[];
        vm.produit={};
        vm.produitEmpty={empty:true};
        vm.categories=[];

        this.selectProductToView = function (produit){
            console.log('un produit à été sélectionné' + JSON.stringify(produit));
            console.log(this,vm);
            //impossible caer dereferencement du conteneur objet partage par le service
            //vm.produit=produit;
            Object.assign(vm.produit,produit);
            //passage par un champ d'un objet avec une reference Fixe !important
            //je peux que changer(affecter) les contenus 
            vm.produitEmpty.empty=false;
        }

        this.saveProduct = function () {

            $http({
                url: 'http://localhost:5629/produits/' + vm.produit.id,
                method: (undefined===vm.produit.id?'POST':'PUT'),
                headers: {
                    'Content-Type': 'application/json'
                },
                data:
                {
                    id: vm.produit.id,
                    nom: vm.produit.nom,
                    description: vm.produit.description,
                    prix: vm.produit.prix,
                    stock: vm.produit.stock,
                    categorieId: vm.produit.categorieId,
                    img: vm.produit.img

                }

            }).then(
                function (response) {
                    var o_i= vm.produits.findIndex(function (elem) {
                        return elem.id==response.data.id;
                    })
                    response.data.categorie= vm.categories.find(function (elem){
                        return elem.id==response.data.id;
                    })
                    vm.produits[o_i]=response.data;
                    console.log(vm.produits[o_i]);
                    alert('Put effectué' + JSON.stringify(vm.produits[o_i]));
                },
                function (response) {
                    alert('Put echoué' + response.status);
                }
            );
        }
        ////////////////


        function activate() {
            loadHttpCategories();
            loadHttpProducts();
        }
      

        function loadHttpCategories(){
            $http({
                method:'GET',
                url:'http://localhost:5629/categories'

            }).then(function success(response){
                vm.categories.slice(0);
                response.data.map(function(elem,index){
                    vm.categories.push(elem);
                });

                //console.log(response);
                //vm.categories=response.data
                console.log('Valeur catégories du controller mises à jour \n',vm.categories);
            },function unsuccess(response){
                console.log('Rest ERROR');
            });
        }

        function loadHttpProducts(){
            $http({
                method:'GET',
                url:'http://localhost:5629/produits'

            }).then(function success(response){
               
                vm.produits.slice(0);
                response.data.map(function(elem,index){
                    vm.produits.push(elem);
                });
                console.log($routeParams);


                if(undefined!==$routeParams.idProduit){
                    
                    var prodToShow=vm.produits.find(function(elem){
                        return $routeParams.idProduit==elem.id;
                    })

                    if(undefined !== prodToShow)
                    {
                        Object.assign(vm.produit,prodToShow);
                    }
                }

                //console.log(response);
                // impossible car perte de ref 
                //vm.produits=response.data
                console.log('Valeur prodsuits du controller mises à jour \n',vm.produits);
            },function unsuccess(response){
                console.log('Rest ERROR');
            });

        }

     activate();
           
    } // fin décalaration service
        
} //fin self.executed()
)();