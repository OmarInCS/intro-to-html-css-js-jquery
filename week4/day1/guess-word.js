let wordsList = [], selectedIndex, selectedWord;
let letterBoxTemplate = `
    <input type="text" value="{{letter}}" {{disabled}} placeholder="?" class="letter-box {{correct}}" >
`

function loadData() {
    let  url = "https://raw.githubusercontent.com/OmarInCS/JS-GuessWord/master/after/words.txt";
    $.get(url, (data) => {
        wordsList = data.split("\n");
        wordsList = wordsList.filter(w => w.length > 4 && w.length < 10);
        selectRandomWord();
        displayWord();
        // console.log(wordsList);
    });
}

function selectRandomWord() {
    selectedIndex = Math.floor(Math.random() * wordsList.length);
    selectedWord = wordsList[selectedIndex];
    // console.log(selectedWord);
    let idx1 = Math.floor(Math.random() * selectedWord.length);
    let idx2 = Math.floor(Math.random() * selectedWord.length);
    selectedWord = Array.from(selectedWord);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
    // selectedWord = selectedWord.join("");
    // console.log(selectedWord);
}

function displayWord() {
    let wordTag = document.getElementById("word");
    wordTag.innerHTML = "";
    for (let letter of selectedWord) {
        if (letter !== "?") {
            wordTag.innerHTML += letterBoxTemplate.replace("{{letter}}", letter)
                                                    .replace("{{disabled}}", "disabled")
                                                    .replace("{{correct}}", "correct");
        }
        else {
            wordTag.innerHTML += letterBoxTemplate.replace("{{letter}}", "")
                                                    .replace("{{disabled}}", "")
                                                    .replace("{{correct}}", "wrong");
        }
    }
}

function checkAnswer() {
    let correctAnswer = wordsList[selectedIndex];
    let userAnswer = "";

    let letterBoxs = document.querySelectorAll(".letter-box");
    for (let i in correctAnswer) {
        if (correctAnswer[i] === letterBoxs[i].value) {
            if (letterBoxs[i].classList) {
                letterBoxs[i].classList.remove("wrong");
                letterBoxs[i].classList.add("correct");
            }
        }
        userAnswer += letterBoxs[i].value;
    }

    if (correctAnswer === userAnswer) {
        let imgTag = document.querySelector("#box > img");
        imgTag.src = "happy.png";
    }
}

function playAgain() {
    let imgTag = document.querySelector("#box > img");
    imgTag.src = "think.png";
    selectRandomWord();
    displayWord();
}