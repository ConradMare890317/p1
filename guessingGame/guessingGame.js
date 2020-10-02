var secret = 7;

var startBtn = document.getElementById("startButton");
startBtn.onclick = guessNumber;

function guessNumber() {
    var guess = parseInt(prompt("Please guess a number between 1 and 10"));
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while ((guess !== secret)) {
        if (guess > secret) {
            alert("Nope, Too high! Try again");
            guessNumber();
        } else if (guess < secret) {
            alert("Nope, Too low! Try again");
            guessNumber();
        } else
            alert("in valid input");
        guessNumber()
    }
    alert("Well done!")


}