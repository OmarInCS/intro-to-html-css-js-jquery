
let x, y;

function showQuestion() {
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    let questionTag = document.getElementById("question");
    questionTag.innerHTML = `What's ${x} + ${y} ?`;
}

function checkAnswer() {
    let answer = parseInt(document.getElementById("answer").value);
    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct Answer";
    }
    else {
        document.getElementById("message").innerHTML = "Wrong Answer";
    }
}