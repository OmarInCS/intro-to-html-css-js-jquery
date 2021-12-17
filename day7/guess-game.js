
var words = [];
var selectedIndex, selectedWord;
var letterBoxTemplate = `
    <input type="text" class="letter-box {{status}}" value="{{letter}}" placeholder="?" {{disabled}}>
`;

function loadWords() {
    var url = "https://raw.githubusercontent.com/OmarInCS/GuessWordApp/master/words.txt";
    $.get(url, function(data) {
        words = data.split("\n");
        words = words.filter(w => w.length >= 4 && w.length <= 9);
        selectRandomWord();
        showLetterBoxs();
    });
}

function selectRandomWord() {
    selectedIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[selectedIndex];
    selectedWord = Array.from(selectedWord);
    // console.log(selectedWord);

    var idx1 = Math.floor(Math.random() * selectedWord.length);
    var idx2 = Math.floor(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
    // console.log(selectedWord);

}

function showLetterBoxs() {
    document.getElementById("word").innerHTML = "";
    for (var letter of selectedWord) {
        if (letter != "?") {
            var letterBox = letterBoxTemplate.replace("{{status}}", "correct")
                                            .replace("{{letter}}", letter)
                                            .replace("{{disabled}}", "disabled");
        }
        else {
            var letterBox = letterBoxTemplate.replace("{{status}}", "wrong")
                                            .replace("{{letter}}", "")
                                            .replace("{{disabled}}", "");
        }
        document.getElementById("word").innerHTML += letterBox;

    }
}

function checkAnswer() {
    var boxList = document.querySelectorAll(".letter-box");
    var correctWord = words[selectedIndex];

    for (var i = 0; i < boxList.length; i++) {
        var boxLetter = boxList[i].value;
        var correctLetter = correctWord[i];
        if (boxLetter === correctLetter && boxList[i].classList.contains("wrong")) {
            boxList[i].classList.replace("wrong", "correct");
            boxList[i].disabled = true;
        }
    }
}
