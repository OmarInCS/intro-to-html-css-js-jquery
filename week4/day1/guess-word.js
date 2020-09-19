let wordsList = [], selectedIndex, selectedWord;

function loadData() {
    let  url = "https://raw.githubusercontent.com/OmarInCS/JS-GuessWord/master/after/words.txt";
    $.get(url, (data) => {
        wordsList = data.split("\n");
        wordsList = wordsList.filter(w => w.length > 4 && w.length < 11);
        selectRandomWord();
        console.log(wordsList);
    });
}

function selectRandomWord() {
    selectedIndex = Math.floor(Math.random() * wordsList.length);
    selectedWord = wordsList[selectedIndex];
    console.log(selectedWord);
}