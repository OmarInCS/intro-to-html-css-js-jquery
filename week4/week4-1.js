
let wordsList, selectedIndex, selectedWord;
let letterBoxTemplate = `
    <input type="text" class="letter-box {{color}}" placeholder="{{mark}}" value="{{letter}}" {{disabled}}>
`;

function loadData() {
    let url = "https://raw.githubusercontent.com/OmarInCS/JS-GuessWord/master/before/words.txt";
    $.get(url, (data) => {
        wordsList = data.split("\n");
        wordsList = wordsList.filter(w => w.length > 4 && w.length < 11);
        selectRandomWord();
        displaySelectedWord();
        // console.log(wordsList);
    });
}

function selectRandomWord() {
    selectedIndex = Math.floor(Math.random() * wordsList.length);
    selectedWord = wordsList[selectedIndex];
    let idx1 = Math.floor(Math.random() * selectedWord.length);
    let idx2 = Math.floor(Math.random() * selectedWord.length);
    selectedWord = Array.from(selectedWord)
                        .map((c, i) => (i === idx1 || i === idx2)? "?" : c)
                        .join("");
    // console.log(selectedWord);
}

function displaySelectedWord() {
    let wordPlace = $("#word");
    wordPlace.html("");
    Array.from(selectedWord)
         .forEach((c, i) => {
             wordPlace.append(letterBoxTemplate
                                .replace("{{color}}", c === "?" ? "wrong" : "correct")
                                .replace("{{mark}}", c === "?" ? "?" : "")
                                .replace("{{letter}}", c === "?" ? "" : c)
                                .replace("{{disabled}}", c === "?" ? "" : "disabled"))
         });
    
    
}

function checkAnswer() {
    let userAnswer = "";
    let correctAnswer = wordsList[selectedIndex];

    $(".letter-box").each((i, e) => {
        console.log(e);
        userAnswer += e.value;
        if (e.value === correctAnswer[i]) {
            e.classList.add("correct");
            e.classList.remove("wrong");
        }
    });

    if (userAnswer === correctAnswer) {
        $("img").attr("src", "../images/happy.png")
    }
}

function playAgain() {
    selectRandomWord();
    displaySelectedWord();
    $("img").attr("src", "../images/think.png")
}