'use strict';

var myDirectives = angular.module("myDirectives", []);

//shows invalid box if field is invalid
myDirectives.directive('myvalidation', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      scope.$watch(attrs['myvalidation'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctrl.$setValidity('myvalidation', errorMsg ? false : true);
      });
    }
  };
});

myDirectives.directive('restrictTo', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        var re = RegExp(attrs.restrictTo);
        var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

        element[0].addEventListener('keydown', function(event) {
            var v=element[0].value + event.key;
            if (!exclude.test(event.key) && !re.test(v)) {
                event.preventDefault();
            }
        });
    }
  }
});