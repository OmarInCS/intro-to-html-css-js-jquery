

var number;
var trials = 0;

function startGame() {
    number = Math.round(Math.random() * 100);
    document.getElementById("image").src = "../images/think.png";
    document.getElementById("message").innerHTML = "Guess a number btw 0-100";
}


function checkAnswer() {
    
    var guess = Number(document.getElementById("answer").value);
    
    document.querySelector(".box > h3").innerHTML = `Trials: ${++trials}`;

    if (guess === number) {
        document.getElementById("message").innerHTML = "You Guess Right!";
        document.getElementById("image").src = "../images/happy.png";
    }
    else if (guess > number) {
        document.getElementById("message").innerHTML = "Guess a smaller number";
    }
    else {
        document.getElementById("message").innerHTML = "Guess a greater number";
    }
}
