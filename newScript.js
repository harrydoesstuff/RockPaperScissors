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
const endGame = document.querySelector(".endGameResult");
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
        // roundResult.textContent = "player wins";
        // playerScore++;
        playerWins();
        updateResults();
    } else if (playerSelection === 2 && computerSelection === 3) {
        // roundResult.textContent = "player wins";
        // playerScore++;
        playerWins();
        updateResults();
    } else if (playerSelection === 1 && computerSelection === 2) {
        // roundResult.textContent = "player wins";
        // playerScore++;
        playerWins();
        updateResults();
    } else if (playerSelection === 3 && computerSelection === 2) {
        // roundResult.textContent = "computer wins";
        // computerScore++;
        computerWins();
        updateResults();
    } else if (playerSelection === 2 && computerSelection === 1) {
        // roundResult.textContent = "computer wins";
        // computerScore++;
        computerWins();
        updateResults();
    } else if (playerSelection === 1 && computerSelection === 3) {
        // roundResult.textContent = "computer wins";
        // computerScore++;
        computerWins();
        updateResults();
    } else if (playerSelection === computerSelection) {
        tie();
        updateResults();
    }
    
}

function playerWins() {
    roundResult.textContent = "You win!"
    playerScore++; 
}

function computerWins() {
    roundResult.textContent = "You lose :("
    computerScore++; 
}

function tie() {
    roundResult.textContent = "Tie!" 
}

function updateResults() {
    if (computerScore < 5 || playerScore < 5){
    computerRoundResult.innerHTML = computerScore;
    playerRoundResult.innerHTML = playerScore;
    } else if (computerScore >= 5 || playerScore >= 5){
    endGameResult.textContent = "Game Over! The final score is Computer: ", "${computerScore}", " Player: ", "${playerScore}";
    }
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//      console.log(playRound());
//      console.log("Your score = " + userScore);
//      console.log("Computer's score = " + computerScore);
//     }
// }


// function finalResult () {
//     if (userScore > computerScore) {
//         return "The final score is " + userScore + " to " + computerScore + " . You win!";
//     } else if (computerScore > userScore) {
//         return "The final score is " + computerScore + " to " + userScore + " . You lose :(";
//     } else if (computerScore === userScore) {
//         return "The final score is " + userScore + " to " + computerScore + " . It's a tie! Refresh the page to play again.";
//     }
// }