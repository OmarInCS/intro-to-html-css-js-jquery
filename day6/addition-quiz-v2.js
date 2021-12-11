
var x, y, score = 0;
var historyList = [];
var historyRecordTemplate = `
    <div class="history-item">
        <span>{{date}}</span>
        <span>{{score}}</span>
    </div>
`;

function showHistoryData() {
    var historyTag = document.getElementById("history");
    historyTag.innerHTML = "";
    for (var historyItem of historyList) {
        historyTag.innerHTML += historyRecordTemplate.replace("{{date}}", historyItem.date)
                                                    .replace("{{score}}", historyItem.score);
    }
}

function clearHistory() {
    localStorage.setItem('history', null);
    historyList = [];
    showHistoryData();
}


function preprocess() {
    var tabList = document.querySelectorAll(".tabs > div");
    for (var tab of tabList) {
        tab.onclick = handleTabClick;
    }

    getNewQuestion();
    historyList = JSON.parse(localStorage.getItem("history"));
    if (historyList === null) {
        historyList = [];
    }
    showHistoryData();
}

function getNewQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);

    document.getElementById("question").innerHTML = `What's ${x} + ${y} ?`;

    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    var answer = parseInt(document.getElementById("answer").value);

    if (answer === x+y) {
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
        getNewQuestion();
    }
    else {
        document.getElementById("message").innerHTML = "Game Over!!";
        document.getElementById("bt-check").disabled = true;
        document.getElementById("answer").disabled = true;
        var options = {day: "numeric", month: "short", year: "numeric"};
        var historyRecord = {
            date: (new Date()).toLocaleDateString("en-US", options),
            score
        };
        historyList.push(historyRecord);
        localStorage.setItem("history", JSON.stringify(historyList));
        showHistoryData();
    }
}


function playAgain() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("bt-check").disabled = false;
    document.getElementById("answer").disabled = false;
    score = 0;
    document.getElementById("score").innerHTML = "Score: 0";
    getNewQuestion();
}


function handleTabClick() {

    var tabList = Array.from(document.querySelectorAll(".tabs > div"));
    for (var tab of tabList) {
        tab.classList.remove("active");
    }
    this.classList.add("active");

    var idx = tabList.indexOf(this);

    var boxList = Array.from(document.querySelectorAll("main > .box"));

    for(var box of boxList) {
        box.classList.add("hidden");
    }
    boxList[idx].classList.remove("hidden");
}

