let x, y, score;

function preprocess() {
    displayQuestion();
    score = 0;
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = tabPressed;
    }
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
    console.log("--- tabPressed ---");
    let tabList = Array.from(this.parentElement.children);
    let idx = tabList.indexOf(this);

    for (let tab of tabList) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    let boxList = document.querySelectorAll("main > .box");
    for (let box of boxList) {
        box.classList.add("hidden");
    }
    boxList[idx].classList.remove("hidden");
}