let x, y, score, scoreHistory;
let scoreRecordTemplate = `
                <div class="history-item">
                    <span class="date">{{date}}</span><span class="score">{{score}}</span>
                </div>
`;

function preprocess() {
    displayQuestion();
    score = 0;
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = tabPressed;
    }
    scoreHistory = JSON.parse(localStorage.getItem("scoreHistory")) || [];
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
        document.getElementById("answer").disabled = true;
        document.getElementById("bt-check").disabled = true;
        let options = {year: "numeric", month: "long", day: "numeric"};
        let historyRecord = {date: new Date().toLocaleDateString("en-UK", options), score: score};
        scoreHistory.push(historyRecord);
        localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
    }
}

function playAgain() {
    document.getElementById("message").innerText = "";
    score = 0;
    document.querySelector(".box > h3").innerHTML = `Score: 0`;
    document.getElementById("answer").disabled = false;
    document.getElementById("bt-check").disabled = false;
    displayQuestion();
}


function displayHistory() {
    console.log(scoreHistory);
    let historyTag = document.getElementById("history");
    historyTag.innerHTML = "";
    for (let score of scoreHistory) {
        let scoreRecord = scoreRecordTemplate.replace("{{date}}", score.date)
                                             .replace("{{score}}", score.score);
        historyTag.innerHTML += scoreRecord;
    }
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

    if (this.innerText === "History") {
        displayHistory();
    }
}