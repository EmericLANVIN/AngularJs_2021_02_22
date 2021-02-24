(function(){
    angular.module('app',['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/home', { 
                    template : '<h1>Hello et bienvenue sur ma boutique {{name}}</h1>'
                })
                .when('/produits', {
                    templateUrl  : 'vues/produits.html',
                    controller   : 'produitsCtrl', 
                    controllerAs : 'prods' 
                }) 
                .when('/produits/:idProduit', {
                    templateUrl  : 'vues/produit.html',
                    controller   : 'produitCtrl', 
                    controllerAs : 'prod' 
                })
                .when('/produits/edit/:idProduit', {
                    templateUrl  : 'vues/edit.html',
                    controller   : 'produitCtrl', 
                    controllerAs : 'prod' 
                }) 
            .otherwise({redirectTo:'/home'});
        }]);
})();
