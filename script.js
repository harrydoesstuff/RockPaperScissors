//This is the external JS file for the Rock Paper Scissors project. 
//Bit daunted by this one, but lets give it a crack. 
//The aim here is to play Rock Paper Scissors (RPS) against the computer. 


//PSEUDOCODE

//take input of string from user
//convert from string to integer
//3 = rock
//2 = paper
//1 = scissors
//create function for computer to randomly return either rock, paper or scissors = getComputerChoice
//create function that takes two parameters (playerSelection and getComputerChoice) = playRound
//return a string that declares the winner of the round
//create function to play 5 round game that keeps score and reports winner or loser at the end = game




function playerInput() {
    let getPlayerChoice = prompt("Please enter rock, paper or scissors:").toLowerCase();
    if (getPlayerChoice === "rock") {
        return 3;
    } else if (getPlayerChoice === "paper") {
        return 2;
    } else if (getPlayerChoice === "scissors") {
        return 1;
    }
}

//here I'm taking the players input, converting it to all lowercase, then converting the answer to an integer.


function getComputerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 3) +1;
        return theRandomNumber;
    }

//here I'm generating a random number between 1 and 3 that will be the computers selection.

    let userScore = 0;
    let computerScore = 0;

//declaring two variables to track the scores of the user and computer, setting their initial value to 0

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = playerInput();

    if (playerSelection === computerSelection) {
        return "A tie!"       
    } else if (playerSelection === 2 && computerSelection === 3){
        userScore++;
        return "You win this round! paper beats rock";
    } else if (playerSelection === 1 && computerSelection === 2) {
        userScore++;
        return "You win this round! scissors beats paper";
    } else if  (playerSelection === 3 && computerSelection === 1) {
        userScore++;
        return "You win this round! rock beats scissors";
    } else if (playerSelection === 3 && computerSelection === 2) {
        computerScore++;
        return "You lose! paper beats rock";
    } else if (playerSelection === 2 && computerSelection === 1) {
        computerScore++;
        return "You lose! scissors beats paper";
    } else if (playerSelection === 1 && computerSelection === 3) {
        computerScore++;
        return "You lose! rock beats scissors";
    }
 }

 //running the round by comparing the user selection to the computer selection. Based on the result, the score for either side will tick up by 1 (or none if a tie)


function game() {
    for (let i = 0; i < 5; i++) {
     console.log(playRound());
     console.log("Your score = " + userScore);
     console.log("Computer's score = " + computerScore);
    }
}

//creating a loop to run the game for 5 rounds and print the score at the end of each round.

function finalResult () {
    if (userScore > computerScore) {
        return "The final score is " + userScore + " to " + computerScore + " . You win!";
    } else if (computerScore > userScore) {
        return "The final score is " + computerScore + " to " + userScore + " . You lose :(";
    } else if (computerScore === userScore) {
        return "The final score is " + userScore + " to " + computerScore + " . It's a tie! Refresh the page to play again.";
    }
}

//printing the final result and declaring a winner, loser, or a tie.

console.log (game())
console.log (finalResult())

//console.logs to make the game and final result functions execute and print to the browser console.