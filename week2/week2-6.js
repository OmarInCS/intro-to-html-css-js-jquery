let x, y;

function displayQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    let question = `What's ${x} + ${y} ?`;
    let questionTag = document.getElementById("question");
    questionTag.innerText = question;
}


function checkAnswer() {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    
    let answer = Number(document.getElementById("answer").value);
    console.log(typeof answer);
    if (answer === x+y) {
        document.getElementById("message").innerText = "Correct Answer";
    }
    else {
        document.getElementById("message").innerText = "Wrong Answer";
    }
}