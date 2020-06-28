/*
    - Player must guess a number between 1 and 10
    - Player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if loose
    - Let the player to choose to play again
*/

// Game Vars
let min = 1,
    max = 5,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event Listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }

    if (guess === winningNum){
        //Game over-won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        guessesLeft -=1;
        if (guessesLeft === 0){
            //Game over - lost

            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {

            //Change border color
            guessInput.style.borderColor = 'red';

            //Clear input
            guessInput.value = '';

            //Tell user it is a wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//Get a random number and set it as winning number
function getRandomNum (min, max){
    return (Math.floor(Math.random()*(max-min+1)+min))
}

//Game over
function gameOver(won, msg){
    let color;
    won === true? color='green' : color='red';

    console.log(color);

    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Set Message
    setMessage (msg, color);

    //Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Set message
function setMessage (msg, color){
    message.style.color = color;
    message.textContent = msg;
}



