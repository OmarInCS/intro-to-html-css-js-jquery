let x, y;

function preprocess() {
    displayQuestion();
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
}


function checkAnswer() {
    if (event instanceof KeyboardEvent && event.key !== "Enter") return;
    
    let answer = Number(document.getElementById("answer").value);
    console.log(typeof answer);
    if (answer === x+y) {
        document.getElementById("message").innerText = "Correct Answer";
    }
    else {
        document.getElementById("message").innerText = "Wrong Answer";
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
    // console.log(idx);
}