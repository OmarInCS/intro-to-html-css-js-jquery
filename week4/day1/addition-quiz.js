
var x, y;

function newQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    document.getElementById("question").innerHTML = `What's ${x} * ${y} ?`;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").style = "";
}

function checkAnswer() {
    var answer = document.getElementById("answer").value;
    if (answer == x*y) {
        document.getElementById("message").innerHTML = "Correct";
        document.getElementById("answer").style = "border: 2px solid green;";
    }
    else {
        document.getElementById("message").innerHTML = "Wrong";
        document.getElementById("answer").style = "border: 2px solid red;";
    }
}

