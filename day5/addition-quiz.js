
var x, y;
bmi = w / Math.pow(h / 100, 2)
function showNewQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);

    var h1Tag = document.getElementById("question");
    h1Tag.innerHTML = "What's " + x + " + " + y + " ?";

    document.getElementById("answer").value = "";
    document.getElementById("message").innerHTML = "";
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