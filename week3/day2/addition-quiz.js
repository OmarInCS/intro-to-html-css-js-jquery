
let x, y;
let score = 0;

function showQuestion() {
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    
    document.getElementById("question").innerHTML = `What's ${x} + ${y} ?`;
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let answer = parseInt(document.getElementById("answer").value);
    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct";
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    }
    else {
        document.getElementById("message").innerHTML = "Wrong";
    }
}


