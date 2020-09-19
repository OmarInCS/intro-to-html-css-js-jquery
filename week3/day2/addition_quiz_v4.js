let x, y, score;
let historyList = [];
let historyItemTag = `
    <div class="history-item">
        <span class="date">{{Date}}</span><span class="score">{{Score}}</span>
    </div>
`;


function preprocess() {
    displayQuestion();
    score = 0;
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = tabPressed;
    }

    historyList = JSON.parse(localStorage.getItem("history")) || [];
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
        let options = {year: "numeric", month: "short", day: "numeric"};
        historyList.push({
            date: new Date().toLocaleDateString(undefined, options),
            score: score
        });
        localStorage.setItem("history", JSON.stringify(historyList));
    }
}


function playAgain() {
    document.getElementById("message").innerText = "";
    document.getElementById("answer").disabled = false;
    document.getElementById("bt-check").disabled = false;
    score = 0;
    document.querySelector(".box > h3").innerHTML = `Score: 0`;
    displayQuestion();
}


function displayHistory() {
    // console.log(historyList);
    let historyTag = document.getElementById("history");
    historyTag.innerHTML = "";
    
    for (let record of historyList) {
        let historyItem = historyItemTag.replace("{{Date}}", record.date)
                                        .replace("{{Score}}", record.score);
        historyTag.innerHTML += historyItem;
    }
}


function tabPressed() {
    console.log(this);
    let tabList = Array.from(document.querySelectorAll(".tab"));
    let idx = tabList.indexOf(this);

    for (let tab of tabList) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    let boxList = Array.from(document.querySelectorAll("main > .box"));
    for (let box of boxList) {
        box.classList.add("hidden");
    }
    boxList[idx].classList.remove("hidden");

    if (this.innerText === "History") {
        displayHistory();
    }
}


function clearHistory() {
    historyList = [];
    localStorage.removeItem("history");
}