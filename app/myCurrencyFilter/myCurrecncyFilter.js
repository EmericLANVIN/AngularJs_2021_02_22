(function() {
    'use strict';

    angular
        .module('app')
        .filter('myCurrency', DeclarationDuFilter);

    function DeclarationDuFilter() {
        return ExecutatnDuFilter;

        ////////////////

        function ExecutatnDuFilter(Params, devise, precision) {
            if(undefined==precision)precision=4;
            if(undefined==devise)devise='£';

            // calcul de la valeur de precision
            var precisionPow = Math.pow(10,precision);

            // arrondi à la précision souhaitée
            var rounded = Math.round(Params*precisionPow) / precisionPow;

            /*if(!rounded.toString().includes('.')) {
                rounded=rounded+'.'+getZero(precision);
            } else {
                var positionOfPoint = rounded.toString().indexOf('.');
                var stayChars = parseFloat(rounded).length() - positionOfPoint;
                var nbZeroToAdd = stayChars-precision;

                rounded=rounded+'.'+getZero(nbZeroToAdd);
            }*/
            rounded=parseFloat(rounded).toFixed(precision);
            return  rounded + devise;
        }

        function getZero() {
            var returnValue='';
            for(var i=0;i<numberof0;i++)
            {
                returnValue=returnValue+0;
            }
        }
        return returnValue;
    }
})();