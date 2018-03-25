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

myApp.controller('LogInController', function($scope, $location) {
    $scope.redirectToGame = function() {
        $location.path("/game");
    };
});

myApp.controller('LogOutController', function($scope, $location) {
});

myApp.controller('GameController', function($scope, $location) {
    $scope.image= "nothing";
    $scope.elements = ["../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png",
    "../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png"];
    $scope.filled = [false, false, false, false, false, false, false, false, false];
    console.log("g");
$scope.imageChoosing = function(num1) {
    console.log(num1);
    $http.get('', user).then(function(results) {
        $scope.registersuccess = true;
        $scope.registerfail = false;
    }).
        catch(function(error) {
        $scope.registerfail = true;
        $scope.registerfailmessage = error.data;
        user.password = undefined;
        user.cpassword = undefined;
    });


    if (num1 == 1) {
        $scope.image = "../static/img/5_w_hand.png";
    } else if (num1 == 2) {
        $scope.image = "../static/img/04_wo_hand.png";
    } else if (num1 == 3) {
        $scope.image = "../static/img/03_y.png";
    } else if (num1 == 4) {
        $scope.image = "../static/img/02_y.png";
    } else {
        $scope.image = "../static/img/01_y.png";
    }
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
}

$scope.playTicTacToe = function(num2) {
    if ($scope.image== "nothing" || $scope.filled[num2 - 1] == true) {
        return;
    }
    if (num2 == 1) {
        document.getElementById("r11").src=$scope.image;
    } else if (num2 == 2) {
        document.getElementById("r12").src=$scope.image;
    } else if (num2 == 3) {
        document.getElementById("r13").src=$scope.image;
    } else if (num2 == 4) {
        document.getElementById("r21").src=$scope.image;
    } else if (num2 == 5) {
        document.getElementById("r22").src=$scope.image;
    } else if (num2 == 6) {
        document.getElementById("r23").src=$scope.image;
    } else if (num2 == 7) {
        document.getElementById("r31").src=$scope.image;
    } else if (num2 == 8) {
        document.getElementById("r32").src=$scope.image;
    } else {
        document.getElementById("r33").src=$scope.image;
    }
    $scope.elements[num2 - 1] = $scope.image;
    $scope.filled[num2 - 1] = true;

    if ($scope.elements[0] == $scope.image
        && (($scope.elements[0] == $scope.elements[1] && $scope.elements[1] == $scope.elements[2])
            || ($scope.elements[0] == $scope.elements[3] && $scope.elements[3] == $scope.elements[6])
            || ($scope.elements[0] == $scope.elements[4] && $scope.elements[4] == $scope.elements[8]))) {
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("button11").disabled = true;
        document.getElementById("button12").disabled = true;
        document.getElementById("button13").disabled = true;
        document.getElementById("button21").disabled = true;
        document.getElementById("button22").disabled = true;
        document.getElementById("button23").disabled = true;
        document.getElementById("button31").disabled = true;
        document.getElementById("button32").disabled = true;
        document.getElementById("button33").disabled = true;
        return;
    }
    if ($scope.elements[1] == $scope.image
        && ($scope.elements[1] == $scope.elements[4] && $scope.elements[4] == $scope.elements[7])) {
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("button11").disabled = true;
        document.getElementById("button12").disabled = true;
        document.getElementById("button13").disabled = true;
        document.getElementById("button21").disabled = true;
        document.getElementById("button22").disabled = true;
        document.getElementById("button23").disabled = true;
        document.getElementById("button31").disabled = true;
        document.getElementById("button32").disabled = true;
        document.getElementById("button33").disabled = true;
        return;
    }
    if ($scope.elements[2] == $scope.image
        && (($scope.elements[2] == $scope.elements[5] && $scope.elements[5] == $scope.elements[8])
            || ($scope.elements[2] == $scope.elements[4] && $scope.elements[4] == $scope.elements[6]))) {
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("button11").disabled = true;
        document.getElementById("button12").disabled = true;
        document.getElementById("button13").disabled = true;
        document.getElementById("button21").disabled = true;
        document.getElementById("button22").disabled = true;
        document.getElementById("button23").disabled = true;
        document.getElementById("button31").disabled = true;
        document.getElementById("button32").disabled = true;
        document.getElementById("button33").disabled = true;
        return;
    }
    if ($scope.elements[3] == $scope.image
        && ($scope.elements[3] == $scope.elements[4] && $scope.elements[4] == $scope.elements[5])) {
            document.getElementById("result").innerHTML = "YOU WIN!";
            document.getElementById("button11").disabled = true;
            document.getElementById("button12").disabled = true;
            document.getElementById("button13").disabled = true;
            document.getElementById("button21").disabled = true;
            document.getElementById("button22").disabled = true;
            document.getElementById("button23").disabled = true;
            document.getElementById("button31").disabled = true;
            document.getElementById("button32").disabled = true;
            document.getElementById("button33").disabled = true;
            return;
    }
    if ($scope.elements[6] == $scope.image
        && ($scope.elements[6] == $scope.elements[7] && $scope.elements[7] == $scope.elements[8])) {
            document.getElementById("result").innerHTML = "YOU WIN!";
            document.getElementById("button11").disabled = true;
            document.getElementById("button12").disabled = true;
            document.getElementById("button13").disabled = true;
            document.getElementById("button21").disabled = true;
            document.getElementById("button22").disabled = true;
            document.getElementById("button23").disabled = true;
            document.getElementById("button31").disabled = true;
            document.getElementById("button32").disabled = true;
            document.getElementById("button33").disabled = true;
            return;
    }
    $scope.computerPlaying();
    if (document.getElementById("result") != "YOU WIN!" && document.getElementById("result") != "YOU LOSE..." && !$scope.elements.includes("../static/img/white.png")) {
        document.getElementById("result").innerHTML = "IT'S A DRAW!";
        document.getElementById("button11").disabled = true;
        document.getElementById("button12").disabled = true;
        document.getElementById("button13").disabled = true;
        document.getElementById("button21").disabled = true;
        document.getElementById("button22").disabled = true;
        document.getElementById("button23").disabled = true;
        document.getElementById("button31").disabled = true;
        document.getElementById("button32").disabled = true;
        document.getElementById("button33").disabled = true;
        return;
    }
}

$scope.computerPlaying = function() {
    var indx = Math.floor(Math.random() * 9);
    var count = 0;
    while ($scope.filled[indx % 9] == true && count < 10) {
        indx = (indx + 1) % 9;
        count++;
    }
    $scope.elements[indx] = "../static/img/cross.png";
    $scope.filled[indx] = true;
    if (indx == 0) {
        document.getElementById("r11").src="../static/img/cross.png";
    } else if (indx == 1) {
        document.getElementById("r12").src="../static/img/cross.png";
    } else if (indx == 2) {
        document.getElementById("r13").src="../static/img/cross.png";
    } else if (indx == 3) {
        document.getElementById("r21").src="../static/img/cross.png";
    } else if (indx == 4) {
        document.getElementById("r22").src="../static/img/cross.png";
    } else if (indx == 5) {
        document.getElementById("r23").src="../static/img/cross.png";
    } else if (indx == 6) {
        document.getElementById("r31").src="../static/img/cross.png";
    } else if (indx == 7) {
        document.getElementById("r32").src="../static/img/cross.png";
    } else {
        document.getElementById("r33").src="../static/img/cross.png";
    }

    if ($scope.elements[0] == "../static/img/cross.png"
        && (($scope.elements[0] == $scope.elements[1] && $scope.elements[1] == $scope.elements[2])
            || ($scope.elements[0] == $scope.elements[3] && $scope.elements[3] == $scope.elements[6])
            || ($scope.elements[0] == $scope.elements[4] && $scope.elements[4] == $scope.elements[8]))) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
                document.getElementById("button11").disabled = true;
                document.getElementById("button12").disabled = true;
                document.getElementById("button13").disabled = true;
                document.getElementById("button21").disabled = true;
                document.getElementById("button22").disabled = true;
                document.getElementById("button23").disabled = true;
                document.getElementById("button31").disabled = true;
                document.getElementById("button32").disabled = true;
                document.getElementById("button33").disabled = true;
    } else if ($scope.elements[1] == "../static/img/cross.png"
        && ($scope.elements[1] == $scope.elements[4] && $scope.elements[4] == $scope.elements[7])) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
                document.getElementById("button11").disabled = true;
                document.getElementById("button12").disabled = true;
                document.getElementById("button13").disabled = true;
                document.getElementById("button21").disabled = true;
                document.getElementById("button22").disabled = true;
                document.getElementById("button23").disabled = true;
                document.getElementById("button31").disabled = true;
                document.getElementById("button32").disabled = true;
                document.getElementById("button33").disabled = true;
    } else if ($scope.elements[2] == "../static/img/cross.png"
        && (($scope.elements[2] == $scope.elements[5] && $scope.elements[5] == $scope.elements[8])
                || ($scope.elements[2] == $scope.elements[4] && $scope.elements[4] == $scope.elements[6]))) {
            document.getElementById("result").innerHTML = "YOU LOSE...";
            document.getElementById("button11").disabled = true;
            document.getElementById("button12").disabled = true;
            document.getElementById("button13").disabled = true;
            document.getElementById("button21").disabled = true;
            document.getElementById("button22").disabled = true;
            document.getElementById("button23").disabled = true;
            document.getElementById("button31").disabled = true;
            document.getElementById("button32").disabled = true;
            document.getElementById("button33").disabled = true;
    } else if ($scope.elements[3] == "../static/img/cross.png"
        && ($scope.elements[3] == $scope.elements[4] && $scope.elements[4] == $scope.elements[5])) {
            document.getElementById("result").innerHTML = "YOU LOSE...";
            document.getElementById("button11").disabled = true;
            document.getElementById("button12").disabled = true;
            document.getElementById("button13").disabled = true;
            document.getElementById("button21").disabled = true;
            document.getElementById("button22").disabled = true;
            document.getElementById("button23").disabled = true;
            document.getElementById("button31").disabled = true;
            document.getElementById("button32").disabled = true;
            document.getElementById("button33").disabled = true;
    } else if ($scope.elements[6] == "../static/img/cross.png"
        && ($scope.elements[6] == $scope.elements[7] && $scope.elements[7] == $scope.elements[8])) {
            document.getElementById("result").innerHTML = "YOU LOSE...";
            document.getElementById("button11").disabled = true;
            document.getElementById("button12").disabled = true;
            document.getElementById("button13").disabled = true;
            document.getElementById("button21").disabled = true;
            document.getElementById("button22").disabled = true;
            document.getElementById("button23").disabled = true;
            document.getElementById("button31").disabled = true;
            document.getElementById("button32").disabled = true;
            document.getElementById("button33").disabled = true;
    }
}


});
