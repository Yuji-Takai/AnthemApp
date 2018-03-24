'use strict';

var myControllers = angular.module("myControllers", []);

myApp.controller('RegisterController', function($scope, $location, $http, $log) {
    $scope.registersuccess = false;
    $scope.submitted = false;
    $scope.registerfail = false;
    $scope.registerfailmessage = '';

    $scope.submitForm = function(isValid, user) {
        $scope.submitted = true;
        if (isValid) {
            $scope.registerUser(user);
        }
    };
    $scope.registerUser = function(user) {
        if (angular.isUndefined(user)) {
            // should not occur, must fill all fields
        } else {
            if (user.hasbreezecard == "false") {
                user.breezecardnumber = null;
            }

            $http.post('/api/signup/', user).
                then(function(results) {
                    $scope.registersuccess = true;
                    $scope.registerfail = false;
                }).
                catch(function(error) {
                    $scope.registerfail = true;
                    $scope.registerfailmessage = error.data;
                    user.password = undefined;
                    user.cpassword = undefined;
                });
        }
    };
});

myApp.controller('LogInController', function($rootScope, $scope, $location) {

});

myApp.controller('LogOutController', function($scope, $location) {
});
