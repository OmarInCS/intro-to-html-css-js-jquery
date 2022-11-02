
var words = [];
var selectedIdx, selectedWord;

function loadWords() {
    var url = "https://raw.githubusercontent.com/OmarInCS/GuessWordApp/master/words.txt";
    $.get(url, (data) => {
        words = data.split("\n");
        words = words.filter(w => w.length > 4 && w.length < 10);
        selectRandomWord();
        showLetterBoxes();
        // console.log(words);
    });
}


function selectRandomWord() {
    selectedIdx = Math.floor(Math.random() * words.length);
    selectedWord = words[selectedIdx];
    selectedWord = Array.from(selectedWord);
    console.log(selectedWord);

    var idx1 = Math.floor(Math.random() * selectedWord.length);
    var idx2 = Math.floor(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
    console.log(selectedWord);
}


function showLetterBoxes() {
    document.getElementById("word").innerHTML = "";
    for (var letter of selectedWord) {
        if (letter == "?") {
            var letterBox = `<input type="text" class="letter-box wrong" placeholder="?">`;
        }
        else {
            var letterBox = `<input type="text" class="letter-box correct" value="${letter}" disabled>`;
        }
        document.getElementById("word").innerHTML += letterBox;
    }
}


function checkAnswer() {
    var boxesLst = document.querySelectorAll(".letter-box");
    var correctWord = words[selectedIdx];

    for (var i = 0; i < boxesLst.length; i++) {
        var boxLetter = boxesLst[i].value;
        var correctLetter = correctWord[i];
        if (boxLetter == correctLetter && boxesLst[i].classList.contains("wrong")) {
            boxesLst[i].classList.replace("wrong", "correct");
            boxesLst[i].disabled = true;
        }
    }
}