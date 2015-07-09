/**
 * Created by sbatni on 6/9/2015.
 */
'use strict';

var app = angular.module('pmpApp');

app.directive('uniqueValidater', function() {
  return {
    restrict: 'A',
    scope: {
      items: '=',
      index: '='
    },
    require: 'ngModel',

    link: function(scope, elem, attr, ctrl) {

      ctrl.$parsers.unshift(function(value) {
        var isValid = true;
        for (var key = 0, size = scope.items.length; key < size; key++) {
          if (scope.items[key][ctrl.$name] === value && key !== scope.index) {
            isValid = false;
            break;
          }
        }
        ctrl.$setValidity('uniqness', isValid);

        return isValid ? value : undefined;
      });
    }
  };
});
