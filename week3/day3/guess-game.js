
var url = "https://raw.githubusercontent.com/OmarInCS/GuessWordApp/master/words.txt";
var words;
var selectedIdx, selectedWord;

$.get(url, (response) => {
    words = response.split("\n");
    words = words.filter(w => w.length >= 4 && w.length <= 10);
    selectRandomWord();
    // console.log(words);
});


function selectRandomWord() {
    selectedIdx = parseInt(Math.random() * words.length);
    selectedWord = words[selectedIdx];
    console.log(selectedIdx);
    console.log(selectedWord);
    selectedWord = Array.from(selectedWord);

    var idx1 = parseInt(Math.random() * selectedWord.length);
    var idx2 = parseInt(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";

    console.log(selectedWord);
    for (var letter of selectedWord) {
        var wordTag = document.getElementById("word");
        if (letter != "?") {
            wordTag.innerHTML += `
                <input type="text" class="letter-box correct" value="${letter}" disabled>
            `;
        }
        else {
            wordTag.innerHTML += `
                <input type="text" class="letter-box wrong" placeholder="${letter}">
            `;
        }
    }
}


function checkAnswer() {
    var boxesLst = document.querySelectorAll(".letter-box");
    var correctWord = words[selectedIdx];
    var userAnswer = "";

    for (var i = 0; i < boxesLst.length; i++) {
        var boxLetter = boxesLst[i].value;
        var correctLetter = correctWord[i];
        if (boxLetter == correctLetter && boxesLst[i].classList.contains("wrong")) {
            boxesLst[i].classList.replace("wrong", "correct");
            boxesLst[i].disabled = true;
        }

        userAnswer += boxLetter;
    }

    if (userAnswer == correctWord) {
        document.getElementById("face-img").src = "../../images/happy.png";
    }
}