let x, y, score, scoreHistory;
let historyItem = `
            <div class="history-item">
                <span class="date">{{date}}</span><span class="score">{{score}}</span>
            </div>`;

function preprocess() {
    displayQuestion();
    score = 0;
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = tabPressed;
    }
    scoreHistory = JSON.parse(localStorage.getItem("history")) || [];
    console.log(scoreHistory);
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
        document.getElementById("bt-check").disabled = true;
        document.getElementById("answer").disabled = true;
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        historyRecord = {date: (new Date()).toLocaleString("en-UK", options), score: score};
        scoreHistory.push(historyRecord);
        localStorage.setItem("history", JSON.stringify(scoreHistory));
    }
}

function playAgain() {
    document.getElementById("bt-check").disabled = false;
    document.getElementById("answer").disabled = false;
    document.getElementById("message").innerText = "";
    score = 0;
    document.querySelector(".box > h3").innerHTML = `Score: 0`;
    displayQuestion();
}


function displayHistory() {
    let historyTag = document.getElementById("history");
    historyTag.innerHTML = "";
    for (let record of scoreHistory) {
        let score = historyItem.replace("{{date}}", record.date).replace("{{score}}", record.score);
        historyTag.innerHTML += score;
    }
}


function tabPressed() {
    let siblingList = Array.from(this.parentElement.children);
    let idx = siblingList.indexOf(this);

    let boxList = document.querySelectorAll("main > .box");
    for (let box of boxList) {
        box.classList.add("hidden");
    }
    boxList[idx].classList.remove("hidden");

    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    if (this.innerText === "History") {
        displayHistory();
    }
    // console.log(idx);
}