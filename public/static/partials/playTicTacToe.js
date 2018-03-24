var image = "nothing";
var elements = ["white.png", "white.png", "white.png", "white.png", "white.png", "white.png", "white.png", "white.png", "white.png"];
function imageChoosing(num1) {
    if (num1 == 1) {
        image = "5_w_hand.png";
    } else if (num1 == 2) {
        image = "04_wo_hand.png";
    } else if (num1 == 3) {
        image = "03_y.png";
    } else if (num1 == 4) {
        image = "02_y.png";
    } else {
        image = "01_y.png";
    }
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
}

function playTicTacToe(num2) {
    if (image == "nothing") {
    } else {
        if (num2 == 1) {
            document.getElementById("r11").src=image;
            elements[0] = image;
        } else if (num2 == 2) {
            document.getElementById("r12").src=image;
            elements[1] = image;
        } else if (num2 == 3) {
            document.getElementById("r13").src=image;
            elements[2] = image;
        } else if (num2 == 4) {
            document.getElementById("r21").src=image;
            elements[3] = image;
        } else if (num2 == 5) {
            document.getElementById("r22").src=image;
            elements[4] = image;
        } else if (num2 == 6) {
            document.getElementById("r23").src=image;
            elements[5] = image;
        } else if (num2 == 7) {
            document.getElementById("r31").src=image;
            elements[6] = image;
        } else if (num2 == 8) {
            document.getElementById("r32").src=image;
            elements[7] = image;
        } else {
            document.getElementById("r33").src=image;
            elements[8] = image;
        }
        document.getElementById("button11").disabled = true;
        document.getElementById("button12").disabled = true;
        document.getElementById("button13").disabled = true;
        document.getElementById("button21").disabled = true;
        document.getElementById("button22").disabled = true;
        document.getElementById("button23").disabled = true;
        document.getElementById("button31").disabled = true;
        document.getElementById("button32").disabled = true;
        document.getElementById("button33").disabled = true;
        if (elements[0] == image
            && ((elements[0] == elements[1] && elements[1] == elements[2])
                || (elements[0] == elements[3] && elements[3] == elements[6])
                || (elements[0] == elements[4] && elements[4] == elements[8]))) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else if (elements[1] == image
            && (elements[1] == elements[4] && elements[4] == elements[7])) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else if (elements[2] == image
            && ((elements[2] == elements[5] && elements[5] == elements[8])
                || (elements[2] == elements[4] && elements[4] == elements[6]))) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else if (elements[3] == image
            && (elements[3] == elements[4] && elements[4] == elements[5])) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else if (elements[6] == image
            && (elements[6] == elements[7] && elements[7] == elements[8])) {
            document.getElementById("result").innerHTML = "YOU WIN!";
        } else {
            computerPlaying();
            if (elements[0] == "cross.png"
                && ((elements[0] == elements[1] && elements[1] == elements[2])
                    || (elements[0] == elements[3] && elements[3] == elements[6])
                    || (elements[0] == elements[4] && elements[4] == elements[8]))) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
            } else if (elements[1] == "cross.png"
                && (elements[1] == elements[4] && elements[4] == elements[7])) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
            } else if (elements[2] == "cross.png"
                && ((elements[2] == elements[5] && elements[5] == elements[8])
                    || (elements[2] == elements[4] && elements[4] == elements[6]))) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
            } else if (elements[3] == "cross.png"
                && (elements[3] == elements[4] && elements[4] == elements[5])) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
            } else if (elements[6] == "cross.png"
                && (elements[6] == elements[7] && elements[7] == elements[8])) {
                document.getElementById("result").innerHTML = "YOU LOSE...";
            } else if (!elements.includes("white.png")) {
                document.getElementById("result").innerHTML = "ITS A DRAW!";
            } else {
                document.getElementById("button11").disabled = false;
                document.getElementById("button12").disabled = false;
                document.getElementById("button13").disabled = false;
                document.getElementById("button21").disabled = false;
                document.getElementById("button22").disabled = false;
                document.getElementById("button23").disabled = false;
                document.getElementById("button31").disabled = false;
                document.getElementById("button32").disabled = false;
                document.getElementById("button33").disabled = false;
            }
        }
    }
}
playTicTacToe();

function computerPlaying() {
    var indx = Math.floor(Math.random() * 10);
    while (elements[indx % 10] != "white.png") {
        indx = indx + 1;
    }
    elements[indx] = "cross.png";
    if (indx == 0) {
        document.getElementById("r11").src="cross.png";
    } else if (indx == 1) {
        document.getElementById("r12").src="cross.png";
    } else if (indx == 2) {
        document.getElementById("r13").src="cross.png";
    } else if (indx == 3) {
        document.getElementById("r21").src="cross.png";
    } else if (indx == 4) {
        document.getElementById("r22").src="cross.png";
    } else if (indx == 5) {
        document.getElementById("r23").src="cross.png";
    } else if (indx == 6) {
        document.getElementById("r31").src="cross.png";
    } else if (indx == 7) {
        document.getElementById("r32").src="cross.png";
    } else {
        document.getElementById("r33").src="cross.png";
    }
}

