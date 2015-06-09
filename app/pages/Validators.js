/**
 * Created by sbatni on 6/9/2015.
 */
'use strict';

var app = angular.module('pmpApp');

app.directive('uniqueValidate', function() {
    return {
        // restrict to an attribute type.
        restrict: 'A',
        scope: {
            datasource: '=',
            index: '='
        },
        // element must have ng-model attribute.
        require: 'ngModel',

        // scope = the parent scope
        // elem = the element the directive is on
        // attr = a dictionary of attributes on the element
        // ctrl = the controller for ngModel.
        link: function(scope, elem, attr, ctrl) {


            // add a parser that will process each time the value is
            // parsed into the model when the user updates it.
            ctrl.$parsers.unshift(function(value) {
                // test and set the validity after update.
                var valid = true;
                for (var key=0, size=scope.datasource.length; key<size;key++) {
                    if(scope.datasource[key].sku === value) {
                        if(key !== scope.index) {
                            valid = false;
                        }
                    }
                }
                ctrl.$setValidity('uniqueValidate', valid);

                // if it's valid, return the value to the model,
                // otherwise return undefined.
                return valid ? value : undefined;
            });

        }
    };
});