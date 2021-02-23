(function() {
    'use strict';

    angular
        .module('app')
        .controller('produitsCtrl', ControllerController);

    ControllerController.$inject = ['$scope', '$http'];
    function ControllerController($scope, $http) {
        $scope.value2='Test2 une valeur issue du $scope';

        var vm = this;
        
        this.produits=[];
            
        activate();

        ////////////////

        function activate() {
            
            $http({
                method:'GET',
                url:'http://localhost:5629/produits'

            }).then(function success(response){
                console.log(response);
                vm.produits=response.data
                console.log('Valeur catégories du controller mises à jour \n',vm.produits);
            },function unsuccess(response){
                console.log('Rest ERROR');
            });

         }
    }
})();