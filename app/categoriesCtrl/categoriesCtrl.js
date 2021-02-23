(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoriesCtrl', ControllerController);

    // injection du $http afin d'effectuer des GET/POST/PUT/PATCH...
    ControllerController.$inject = ['$http'];
    function ControllerController($http) {
        var vm = this;
        this.categories=[];

        activate();

        ////////////////

        function activate() {
            
                $http({
                    method:'GET',
                    url:'http://localhost:5629/categories'

                }).then(function success(response){
                    console.log(response);
                    vm.categories=response.data
                    console.log('Valeur catégories du controller mises à jour \n',vm.categories);
                },function unsuccess(response){
                    console.log('Rest ERROR');
                });

         }
    }
})();