
let x, y;
let score = 0;
let scoreArray = [];
let historyItemTemplate = `
                <div class="history-item">
                    <span class="date">{{date}}</span><span class="score">{{score}}</span>
                </div>
`;

function initializePage() {
    showQuestion();
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = switchTab;
    }
    let temp = localStorage.getItem("history");
    if (temp) {
        scoreArray = JSON.parse(temp);
    }
}

function showQuestion() {
    x = parseInt(Math.random() * 10);
    y = parseInt(Math.random() * 10);
    
    document.getElementById("question").innerHTML = `What's ${x} + ${y} ?`;
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
    document.getElementById("bt-check").disabled = false;
    document.getElementById("answer").disabled = false;
    document.getElementById("score").innerHTML = `Score: ${score}`;
}

function checkAnswer() {
    let answer = parseInt(document.getElementById("answer").value);
    if (answer === x+y) {
        document.getElementById("message").innerHTML = "Correct";
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
        showQuestion();
    }
    else {
        document.getElementById("message").innerHTML = "Game Over!";
        document.getElementById("bt-check").disabled = true;
        document.getElementById("answer").disabled = true;
        let options = {year: "numeric", month: "short", day: "numeric"};
        let record = {date: (new Date()).toLocaleDateString("en-UK", options), score: score};
        scoreArray.push(record);
        localStorage.setItem("history", JSON.stringify(scoreArray));
        score = 0;
    }
}

function showHistory() {
    console.log(scoreArray);
    document.getElementById("history").innerHTML = "";
    for (let record of scoreArray) {
        let historyItem = historyItemTemplate
                            .replace("{{date}}", record.date)
                            .replace("{{score}}", record.score);
        document.getElementById("history").innerHTML += historyItem;
    }
}

function switchTab() {
    console.log("switchTab");
    // console.log(this);
    
    let allTabs = Array.from(document.querySelectorAll(".tab"));
    let idx = allTabs.indexOf(this);
    for (let tab of allTabs) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    let allBoxs = document.querySelectorAll("main > .box");
    for (let box of allBoxs) {
        box.classList.add("hidden");
    }
    allBoxs[idx].classList.remove("hidden");

    if (this.innerText === "History") {
        showHistory();
    }
}

