
let x, y;
let score = 0;
let scoreArray = [];

function initializePage() {
    showQuestion();
    let tabList = document.querySelectorAll(".tab");
    for (let tab of tabList) {
        tab.onclick = switchTab;
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
    }
}

function switchTab() {
    console.log("switchTab");
    console.log(this);
    
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
}

