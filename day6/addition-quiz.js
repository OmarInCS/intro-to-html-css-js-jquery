
var x, y;

function getNewQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);

    document.getElementById("question").innerHTML = `What's ${x} + ${y} ?`;

    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    var answer = parseInt(document.getElementById("answer").value);

    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct";
    }
    else {
        document.getElementById("message").innerHTML = "Wrong";
    }
}
