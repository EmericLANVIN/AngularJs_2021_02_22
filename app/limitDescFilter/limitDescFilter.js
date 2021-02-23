(function() {
    'use strict';

    angular
        .module('app')
        .filter('myDescFilter', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(Params, maxlength) {
            if(undefined==maxlength)maxlength=15;
            if(Params.length == maxlength) {
                return Params
            } else {
                return Params.substring(0,maxlength)+'...';
            }
            
        }
    }
})();