//ok lets start out fresh 


//scissors = 1
//paper = 2
//rock = 3
let playerSelection; 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector(".roundResult");
const computerRoundResult = document.querySelector(".computerScore");
const playerRoundResult = document.querySelector(".playerScore");
const endGameResult = document.querySelector(".endGameResult");
let computerScore = 0
let playerScore = 0 


rock.addEventListener("click", () => {
    playRound(3);
})

paper.addEventListener("click", () => {
    playRound(2);
})

scissors.addEventListener("click", () => {
    playRound(1);
})

function getComputerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 3) +1;
    return theRandomNumber
    }

function playRound (playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
  
    
    if (playerSelection === 3 && computerSelection === 1) {
       
        roundResult.textContent = "You win! You chose rock and the computer chose scissors";
        playerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        playerWins();

    } else if (playerSelection === 2 && computerSelection === 3) {
       
        roundResult.textContent = "You win! You chose paper and the computer chose rock";
        playerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        playerWins();

    } else if (playerSelection === 1 && computerSelection === 2) {
       
        roundResult.textContent = "You win! You chose scissors and the computer chose paper";
        playerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        playerWins();

    } else if (playerSelection === 3 && computerSelection === 2) {
        
        roundResult.textContent = "You lose :( you chose rock and the computer chose paper";
        computerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        computerWins();

    } else if (playerSelection === 2 && computerSelection === 1) {
       
        roundResult.textContent = "You lose :( you chose paper and the computer chose scissors";
        computerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        computerWins();

    } else if (playerSelection === 1 && computerSelection === 3) {
        
        roundResult.textContent = "You lose :( you chose scissors and the computer chose rock";
        computerScore++; 
        computerRoundResult.innerHTML = computerScore;
        playerRoundResult.innerHTML = playerScore;
        computerWins();

    } else if (playerSelection === 1 && computerSelection === 1) {
        roundResult.textContent = "A tie! You both chose scissors"
    } else if (playerSelection === 2 && computerSelection === 2) {
        roundResult.textContent = "A tie! You both chose paper"
    } else if (playerSelection === 3 && computerSelection === 3) {
        roundResult.textContent = "A tie! You both chose rock"
    }
}

function playerWins() {
   
    if (playerScore === 5) {
        endGameResult.textContent = "You reached 5, you win. Reload the page to play again."
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    }
}

function computerWins() {
 
    if (computerScore === 5) {
        endGameResult.textContent = "Computer reached 5, you lose. Reload the page to play again."
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    }
}


