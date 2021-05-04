
var words = []
var selectedWord = ""
var selectedIndex;
var letterBoxTemplate = `
    <input type="text" class="letter-box {{status}}" value="{{letter}}" placeholder="?" {{disabled}}>
`;

function selectRandomWord() {
    selectedIndex = Math.round(Math.random() * (words.length - 1));
    selectedWord = words[selectedIndex];
    selectedWord = Array.from(selectedWord);
    // console.log(selectedWord);

    var idx1 = Math.round(Math.random() * (selectedWord.length - 1));
    var idx2 = Math.round(Math.random() * (selectedWord.length - 1));
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
    var userWord = "";

    for (var i = 0; i < boxList.length; i++) {
        var userLetter = boxList[i].value;
        var correctLetter = correctWord[i];
        if (userLetter === correctLetter && boxList[i].classList.contains("wrong")) {
            boxList[i].classList.replace("wrong", "correct");
            boxList[i].disabled = true;
        }
        userWord += userLetter;
    }

    if (userWord === correctWord) {
        document.getElementById("face-img").src = "happy.png";
    }
}

function playAgain() {
    selectRandomWord();
    showLetterBoxs();
    document.getElementById("face-img").src = "think.png";
}

function loadWords() {
    var url = "https://raw.githubusercontent.com/OmarInCS/GuessWordApp/master/words.txt";
    $.get(url, (data) => {
        words = data.split("\n");
        words = words.filter((word) => word.length > 3 && word.length < 10);
        selectRandomWord();
        showLetterBoxs();
        // console.log(data);
    })
}

document.addEventListener("DOMContentLoaded", loadWords);
// register the onclick event for 'bt-check' and 'bt-again'
