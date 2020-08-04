
let x, y;
let score = 0;

let displayQuestion = () => {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    let question = `What's ${x} + ${y} ?`;

    document.getElementById("question").innerHTML = question;
}


let checkAnswer = () => {
    let answer = Number(document.getElementById("answer").value);
    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct Answer";
        displayQuestion();
        score++;
        document.querySelector(".box > h3").innerHTML = "Score: " + score;
    }
    else {
        document.getElementById("message").innerHTML = "Wrong Answer";
    }
}