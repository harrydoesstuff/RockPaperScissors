//This is the external JS file for the Rock Paper Scissors project. 
//Bit daunted by this one, but lets give it a crack. 
//The aim here is to play Rock Paper Scissors (RPS) against the computer. 


//PSEUDOCODE

//take input of string from user, rock paper or scissors = playerSelection
//convert from string to integer
//create function for computer to randomly return either rock, paper or scissors = getComputerChoice
//create function that takes two parameters (playerSelection and getComputerChoice) = playRound
//return a string that declares the winner of the round
//create function to play 5 round game that keeps score and reports winner or loser at the end = game


//take input of a string from user

let getPlayerChoice = prompt("Please enter rock, paper or scissors:")

//convert string input to integer

function convertedPlayerSelection() {
    if (getPlayerChoice === "rock") {
        return 3;
    } else if (getPlayerChoice === "paper") {
        return 2;
    } else if (getPlayerChoice === "scissors") {
        return 1;
    }
}

//create function for computer to randomly return either rock, paper or scissors = getComputerChoice
//3 = rock
//2 = paper
//1 = scissors

function getComputerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 3) +1;
        return theRandomNumber;
    }


// function getComputerChoice() {
// let theRandomNumber = Math.floor(Math.random() * 3) +1;
//     if (theRandomNumber === 3) {
//         return "rock"; 
//     }else if (theRandomNumber === 2) {
//         return "paper";
//     }else {
//         return "scissors";
//     }  
// }

//create function that compares getPlayerChoice and getComputerChoice and declares a winner of the round (playerSelection = getPlayerChoice, computerSelection = getComputerChoice)

function playRound() {

    if (playerSelection === computerSelection) {
        return "A tie!"
        
    } else if (playerSelection === 2 && computerSelection === 3){
        return "You win this round! paper beats rock";

    } else if (playerSelection === 1 && computerSelection === 2) {
        return "You win this round! scissors beats paper";

    } else if (playerSelection === 3 && computerSelection === 2) {
        return "You lose! paper beats rock";

    } else if (playerSelection === 2 && computerSelection === 1) {
        return "You lose! scissors beats paper";

    } else if (playerSelection === 1 && computerSelection === 3) {
        return "You lose! rock beats scissors";
        
    } else if  (playerSelection === 3 && computerSelection === 1) {
        return "You win this round! rock beats scissors";
    }
 }

 const playerSelection = convertedPlayerSelection();
 const computerSelection = getComputerChoice();


console.log(playRound())

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === "rock" && computerSelection === "scissors") {
//         return "You win this round! rock beats scissors";

//     } else if (playerSelection === "paper" && computerSelection === "rock"){
//         return "You win this round! paper beats rock";

//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return "You win this round! scissors beats paper";

//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "You lose! paper beats rock";

//     } else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return "You lose! scissors beats paper";

//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//         return "You lose! rock beats scissors";
        
//     } else if (playerSelection === computerSelection) {
//         return "A tie!"
//     }
//  }