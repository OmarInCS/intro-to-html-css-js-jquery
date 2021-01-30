
let x, y, score = 0;
let scoresList = [];
let historyItem = `
                <div class="history-item">
                    <span>{{date}}</span>
                    <span>{{score}}</span>
                </div>
`;

function initializePage() {
    showQuestion();
    
    let allTabs = document.querySelectorAll(".tab");
    for (let tab of allTabs) {
        tab.onclick = handleTabClick;
    }
}

function showQuestion() {
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    let questionTag = document.getElementById("question");
    questionTag.innerHTML = `What's ${x} + ${y} ?`;
}

function checkAnswer() {
    let answer = parseInt(document.getElementById("answer").value);
    if (answer === x+y) {
        showQuestion();
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
    else {
        document.getElementById("message").innerHTML = "Game Over!!";
        document.getElementById("answer").disabled = true;
        document.getElementById("bt-check").disabled = true;
        
        let options = {year: "numeric", month: "short", day:"numeric"};
        let historyRecord = {date: (new Date()).toLocaleDateString("en-UK", options),
                             score: score};
        scoresList.push(historyRecord);
    }
}


function playAgain() {
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("answer").disabled = false;
    document.getElementById("bt-check").disabled = false;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerHTML = "";
    showQuestion();
}

function handleTabClick() {
    
    let allTabs = Array.from(document.querySelectorAll(".tab"));
    for (let tab of allTabs) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    let idx = allTabs.indexOf(this);

    let allBoxs = document.querySelectorAll("main > .box");
    for (let box of allBoxs) {
        box.classList.add("hidden");
    }
    allBoxs[idx].classList.remove("hidden");

    if (this.innerHTML === "History") {
        showHistory();
    }
}

function showHistory() {
    let historyTable = document.getElementById("history");
    historyTable.innerHTML = "";
    for(let record of scoresList) {
        let historyElement = historyItem.replace("{{date}}", record.date);
        historyElement = historyElement.replace("{{score}}", record.score);
        historyTable.innerHTML += historyElement;
    }
}

function clearHistory() {
    scoresList = [];
    document.getElementById("history").innerHTML = "";
}