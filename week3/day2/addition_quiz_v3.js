
let x, y;

function displayQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    let questionTag = document.getElementById("question");
    questionTag.innerHTML = `What's ${x} + ${y} ?`;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerHTML = "";
}

function checkAnswer() {
    let answerTag = document.getElementById("answer");
    let answer = Number(answerTag.value);
    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct Answer";
    }
    else {
        document.getElementById("message").innerHTML = "Wrong Answer";
    }
}