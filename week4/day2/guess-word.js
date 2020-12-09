var wordsArray = [];
var selectedWord = "";
var selectedIndex;
var letterBoxTemplate = `
<input type="text" value="{{value}}" placeholder="?" {{disabled}} class="letter-box {{color}}">
`

/**
 * 
 * @param {string} letter 
 * 
 * check if the letter is " " and add an input element to the #word div 
 */
function loadLetterBoxs() {
    let wordTag = document.getElementById("word");
    wordTag.innerHTML = "";
    for (let letter of selectedWord) {
        if (letter === "?") {
            wordTag.innerHTML += letterBoxTemplate.replace("{{value}}", "")
                                                    .replace("{{disabled}}", "")
                                                    .replace("{{color}}", "wrong");
        }
        else {
            wordTag.innerHTML += letterBoxTemplate.replace("{{value}}", letter)
                                                    .replace("{{disabled}}", "disabled")
                                                    .replace("{{color}}", "correct");
        }
    }
}

/**
 *  1) Choose a random word from the global words array and set it to the global selectedWord variable 
 *  2) call hideLetters function to hide some letters
 *  3) iterate the word and call loadLetterBox for each letter
 */
function pickWord() {
    selectedIndex = parseInt(Math.random() * wordsArray.length);
    selectedWord = wordsArray[selectedIndex];
    selectedWord = Array.from(selectedWord);
    console.log(selectedWord);
    
    let idx1 = parseInt(Math.random() * selectedWord.length);
    let idx2 = parseInt(Math.random() * selectedWord.length);
    selectedWord[idx1] = "?";
    selectedWord[idx2] = "?";
    console.log(selectedWord);
    loadLetterBoxs();
}



/**
 * for each letter of the global variable selectedWord
 *  1) get the crossbonding input element from the DOM and get its value
 *  2) if the two letters match add 'correct' to the class attribute of the input element
 *  3) if the two letters don't match add 'wrong' to the class attribute of the input element
 * 4) if the whole word match change the img in the img tag to 'happy.png'
 */
function checkGuess() {
    let correctWord = wordsArray[selectedIndex];
    let answerBoxs = document.querySelectorAll(".letter-box");
    let userWord = "";
    
    for (let i = 0; i < answerBoxs.length; i++) {
        userWord += answerBoxs[i].value;
        if (answerBoxs[i].classList.contains("wrong") && answerBoxs[i].value === correctWord[i]) {
            answerBoxs[i].classList.remove("wrong");
            answerBoxs[i].classList.add("correct");
            answerBoxs[i].disabled = true;
        }
    }

    if (userWord === correctWord) {
        document.querySelector("#box > img").src = "../../images/happy.png";
    }
}

/**
 *  1) remove all HTML inside the #word div
 *  2) change the img in the img tag to 'think.png' 
 *  3) call the pickWord function to pick new word
 */
function playAgain() {
    pickWord();
    document.querySelector("#box > img").src = "../../images/think.png";
}


function loadWords() {
    var url = "https://raw.githubusercontent.com/OmarInCS/GuessWordApp/master/words.txt";
    $.get(url, (data) => {
        wordsArray = data.split("\n");
        wordsArray = wordsArray.filter( w => w.length >= 4 && w.length <= 9 );
        pickWord();
    })
}

document.addEventListener("DOMContentLoaded", loadWords);