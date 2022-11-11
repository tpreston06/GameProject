const msg = document.querySelector('span');
const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const history = document.querySelector('guessHistory');
const reset = document.querySelector('scoreReset');
let randomNum = Math.floor(Math.random() * 100) + 1;
let scoreCounter = 1 ++;
let resetButton;

btn.addEventListener('click', function() {
  const userInput = Number(input.value);
  if (scoreCounter === 1){
    guessHistory.textContent = ' ';
  }

  guessHistory.textContent += input + ' ';

  if (input.value === randomNum){
      msg.textContent = 'CONGRATULATIONS! Your guess was correct ' + ' is my secret number';
      span.textContent = ' ';
  }
  else if (scoreCounter === 10) {
    msg.textContent = 'No More Guesses...You Lose!';
    span.textContent = ' ';
  }
  else if (input.value < Number){
    msg.textContent = 'Your Guess is too Low!';
  }
  else if (input.value < Number){
    msg.textContent = 'Your Guess is too High!';
  }

}

if (scoreCounter === 1){
  guessHistory.textContent = ' ';
}
guessHistory.textContent += userInput + ' ';
