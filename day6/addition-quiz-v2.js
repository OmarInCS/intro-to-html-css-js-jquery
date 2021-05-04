

var x, y, score = 0;
var tabList;
var historyList = [];
var historyItemTemplate = `
    <div class="history-item">
        <span>{{date}}</span>
        <span>{{score}}</span>
    </div>
`;

function showNewQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);

    var h1Tag = document.getElementById("question");
    h1Tag.innerHTML = `What's ${x} + ${y} ?`;
    
    document.getElementById("answer").value = "";
}


function preprocess() {
    
    showNewQuestion();

    tabList = document.querySelectorAll(".tab");
    for (var tab of tabList) {
        // tab.onclick = handleTabClick;
        tab.addEventListener("click", handleTabClick);
    }

    var temp = localStorage.getItem("history");
    if (temp != null) {
        historyList = JSON.parse(temp);
    }
}


function handleTabClick() {

    for (var tab of tabList) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    var idx = Array.from(tabList).indexOf(this);
    var boxList = document.querySelectorAll("main > .box");

    for (var box of boxList) {
        box.classList.add("hidden");
    }
    boxList[idx].classList.remove("hidden");

    if (this.innerHTML == "History") {
        showHistory();
    }
}

function checkAnswer() {
    var answer = parseInt(document.getElementById("answer").value);
    if (answer == x+y) {
        score++;
        var scoreTag = document.getElementById("score");
        scoreTag.innerHTML = `Score: ${score}`;

        showNewQuestion();
    }
    else {
        document.getElementById("answer").disabled = true;
        document.getElementById("bt-check").disabled = true;
        var options = {day: "numeric", month: "short", year: "numeric"};
        historyList.push({
            date: (new Date()).toLocaleDateString("en-uk", options),
            score: score
        });
        localStorage.setItem("history", JSON.stringify(historyList));
        document.getElementById("message").innerHTML = "Game Over!!";
    }
}

function playAgain() {
    document.getElementById("answer").disabled = false;
    document.getElementById("bt-check").disabled = false;
    document.getElementById("message").innerHTML = "";
    score = 0;
    document.getElementById("score").innerHTML = "Score: 0";
    showNewQuestion();
}

function showHistory() {
    var historyTag = document.getElementById("history");
    historyTag.innerHTML = "";
    for (var history of historyList) {
        var historyItem = historyItemTemplate.replace("{{date}}", history.date)
                                             .replace("{{score}}", history.score);
        historyTag.innerHTML += historyItem;
    }
}

