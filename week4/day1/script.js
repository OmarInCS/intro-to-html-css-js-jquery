let wordsList = [];
let selectedIndex, selectedWord;
let letterBoxTemplate = `
    <input type="text" value="{{letter}}" placeholder="?" {{disabled}} 
            class="letter-box {{status}}">
`;

function loadWords() {
    let url = "https://raw.githubusercontent.com/OmarInCS/JS-GuessWord/master/before/words.txt";
    $.get(url, (data) => {
        wordsList = data.split("\n");
        wordsList = wordsList.filter((word) => word.length >= 4 && word.length <= 10);
        selectRandomWord();
        loadLetterBoxs();
    });
}

function selectRandomWord() {
    selectedIndex = parseInt(Math.random() * wordsList.length);
    selectedWord = Array.from(wordsList[selectedIndex]);

    let idx1 = parseInt(Math.random() * selectedWord.length);
    let idx2 = parseInt(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
}

function loadLetterBoxs() {
    let wordTag = document.getElementById("word");
    wordTag.innerHTML = "";
    for (let letter of selectedWord) {
        if (letter === "?") {
            var letterBox = letterBoxTemplate.replace("{{letter}}", "")
                                                .replace("{{disabled}}", "")
                                                .replace("{{status}}", "wrong");
            
        }
        else {
            var letterBox = letterBoxTemplate.replace("{{letter}}", letter)
                                                .replace("{{disabled}}", "disabled")
                                                .replace("{{status}}", "correct");
        }
        wordTag.innerHTML += letterBox;
    }
}

function checkAnswer() {
    let correctAnswer = Array.from(wordsList[selectedIndex]);
    let letterBoxs = document.querySelectorAll(".letter-box");
    let userAnswer = [];

    for (let i = 0; i < correctAnswer.length; i++) {
        if (correctAnswer[i] === letterBoxs[i].value && letterBoxs[i].classList.contains("wrong")) {
            letterBoxs[i].classList.remove("wrong");
            letterBoxs[i].classList.add("correct");
            letterBoxs[i].disabled = true;
        }
        userAnswer.push(letterBoxs[i].value);
    }

    
    if (userAnswer.join("") === correctAnswer.join("")) {
        document.querySelector("#box > img").src = "happy.png";
    }
}

function playAgain() {
    selectRandomWord();
    loadLetterBoxs();
    document.querySelector("#box > img").src = "think.png";
}