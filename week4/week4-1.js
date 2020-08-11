
let wordsList = [], selectedIndex, selectedWord = [];
let letterBoxTemplate = `
<input type="text" class="letter-box {{class}}" placeholder="?" value="{{letter}}" {{disabled}}>
`;

function loadData() {
    let url = "https://raw.githubusercontent.com/OmarInCS/JS-GuessWord/master/before/words.txt";
    $.get(url, (data) => {
        wordsList = data.split("\n");
        wordsList = wordsList.filter(w => w.length > 3 && w.length < 10);
        selectRandomWord();
        showRandomWord();
        // console.log(wordsList);
    });
}

function selectRandomWord() {
    selectedIndex = Math.floor(Math.random() * wordsList.length);
    selectedWord = wordsList[selectedIndex].split("");
    let idx1 = Math.floor(Math.random() * selectedWord.length);
    let idx2 = Math.floor(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
    console.log(selectedWord.join(""));
}

function showRandomWord() {
    let wordDiv = $("#word");
    wordDiv.html("");
    selectedWord.forEach(letter => {
        if (letter === "?") {
            var letterBox = letterBoxTemplate.replace("{{class}}", "wrong")
                                             .replace("{{letter}}", "")
                                             .replace("{{disabled}}", "");
            
        }
        else {
            var letterBox = letterBoxTemplate.replace("{{class}}", "correct")
                                             .replace("{{letter}}", letter)
                                             .replace("{{disabled}}", "disabled");
            
        }
        wordDiv.append(letterBox);
    });
}

function checkAnswer() {
    let correctWord = wordsList[selectedIndex];
    let userWord = "";
    
    $(".letter-box").each((i, e) => {
        userWord += e.value;
        if (e.value === correctWord[i]) {
            e.classList.add("correct");
            e.classList.remove("wrong");
            e.disabled = true;
        }
    });

    if (userWord === correctWord) {
        $("img").attr("src", "../images/happy.png");
    }
}

function playAgain() {
    selectRandomWord();
    showRandomWord();
    $("img").attr("src", "../images/think.png");
}