'use strict';

var myControllers = angular.module("myControllers", []);

myApp.controller('LogInController', function($scope, $location) {
    $scope.uid = (document.getElementById("userid")) ? document.getElementById("userid").textContent : null;
    $scope.redirectToGame = function() {
        $location.path("/game");
    };
});

myApp.controller('LogOutController', function($scope, $location) {
});

myApp.controller('GameController', function($http, $scope, $location) {
    $scope.image= "nothing";
    $scope.elements = ["../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png",
    "../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png", "../static/img/white.png"];
    $scope.filled = [false, false, false, false, false, false, false, false, false];
$scope.imageChoosing = function(num1) {
    $scope.uid = "user0801";
    var link = "https://oopsiedaisies2018.firebaseio.com/users/" + $scope.uid + ".json";
    $http.get(link).then(function(results) {
        $scope.streak = (results.data.prevday) ? results.data.streak + 1 : 1;
        results.data.streak = $scope.streak;
        results.data.prevday = true;
        results.data.q1 = num1;
        $http.put(link, results.data).then(function(results) {
        }).
        catch(function(error) {
        });
    }).
    catch(function(error) {
        var data = {};
        data.streak = 1;
        data.prevday = true;
        data.q1 = num1;
        $http.put(link, data).then(function(results) {
        }).
        catch(function(error) {
        });
    });
    if (num1 == 1) {
        $scope.image = "../static/img/01_y.png";
    } else if (num1 == 2) {
        $scope.image = "../static/img/02_y.png";
    } else if (num1 == 3) {
        $scope.image = "../static/img/03_y.png";
    } else if (num1 == 4) {
        $scope.image = "../static/img/04_wo_hand.png";
    } else {
        $scope.image = "../static/img/5_w_hand.png";
    }

    for (var i = 1; i < 6; i++) {
        if (i != num1) {
            document.getElementById("button" + i).disabled = true;
        }
    }
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
