let x, y, score;

function preprocess() {
    displayQuestion();
    score = 0;
}

function displayQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    let question = `What's ${x} + ${y} ?`;
    let questionTag = document.getElementById("question");
    questionTag.innerText = question;
    document.getElementById("answer").value = "";
}


function checkAnswer() {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    
    let answer = Number(document.getElementById("answer").value);
    
    if (answer === x+y) {
        document.querySelector(".box > h3").innerHTML = `Score: ${++score}`;
        displayQuestion();
    }
    else {
        document.getElementById("message").innerText = "Game Over";
    }
}

function playAgain() {
    document.getElementById("message").innerText = "";
    score = 0;
    document.querySelector(".box > h3").innerHTML = `Score: 0`;
    displayQuestion();
}


function displayHistory() {
    
}


function tabPressed() {
    
}