let guessHist = document.getElementById("message1");
let scoreCounter = document.getElementById("score");
let msg3 = document.getElementById("message3");
let result = document.getElementsByName('span');
let btn = document.querySelector('.check');

let randomNum = Math.floor(Math.random()*100) + 1;
let score = 10;
let guessedNum = [];

btn.addEventListener('click', play);

function play(){
    let userInput = document.getElementById("guessNum").value;
    if(userInput < 1 || userInput > 100){
        document.getElementsByName('span').innerHTML - "Please enter a number between 1 and 100.";
    }
    else{
        guessedNum.push(userInput);
        score+= 1;

        if(userInput < randomNum){
            result.textContent = "Guess is too low, Go Higher.";
            scoreCounter.textContent -= score;
            guessHist.textContent = "*" + guessedNum;
        }
        else if(userInput > randomNum){
            result.textContent = "Guess is too high, Go Lower.";
            scoreCounter.textContent -= score;
            guessHist.textContent = "*" + guessedNum;
        }
        else{
            result.textContent = "Congratulations You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
            document.getElementById("check").disabled = true;
        }
    }
}

function startOver(){
  score = 10;
  document.getElementById('score');
}
