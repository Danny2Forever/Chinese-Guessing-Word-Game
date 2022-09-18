const inputs = document.querySelector(".inputs"),
simp_word = document.querySelector(".simplified-word span"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
Btn = document.querySelector(".btn"),
typingInput = document.querySelector(".typing-input");

let Guessword, word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.Guessword
    Realword = ranItem.word
    Simplified_word = ranItem.simplified_word
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    simp_word.innerText = ranItem.simplified_word;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < Realword.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = Realword[i];
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`祝贺你们! 你找到了这个词 "${Realword}" (${Simplified_word}) \n Congratulations! You found the word "${Realword}" (${Simplified_word})`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("游戏结束！ 你没有剩余的猜测\nGame over! You don't have remaining guesses.");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

Btn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());