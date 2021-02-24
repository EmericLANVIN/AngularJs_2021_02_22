(function() {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ControllerController);

    ControllerController.$inject = ['$scope','produitSrvc'];
    function ControllerController($scope,prdSrvc) {
        //Test $scope, a évité....
        //$scope.value2='Test2 une valeur issue du $scope';

        var vm = this;
        this.produits = prdSrvc.produits;
        /*$scope.onshowproductclick = function(params) {
            console.log('j\'ai clické sur ',params);
        }*/
        $scope.onshowproductclick = prdSrvc.selectProductToView;
            
    }
})();