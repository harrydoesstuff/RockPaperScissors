
function getComputerChoice() {
    let theRandomNumber = Math.floor(Math.random() * 3) +1;
        return theRandomNumber;
    }

const computerSelection = getComputerChoice();
let playerSelection = 0;


function playRound(playerSelection, computerSelection) {

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


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        playerSelection = button.id;
        playRound(playerSelection, computerSelection)
        console.log(playRound())
    })

})



    // let userScore = 0;
    // let computerScore = 0;




//ALL OF THE BELOW HAS BEEN COMMENTED OUT TEMPORARILY

// function game() {
//     for (let i = 0; i < 5; i++) {
//      console.log(playRound());
//      console.log("Your score = " + userScore);
//      console.log("Computer's score = " + computerScore);
//     }
// }

//creating a loop to run the game for 5 rounds and print the score at the end of each round.

// function finalResult () {
//     if (userScore > computerScore) {
//         return "The final score is " + userScore + " to " + computerScore + " . You win!";
//     } else if (computerScore > userScore) {
//         return "The final score is " + computerScore + " to " + userScore + " . You lose :(";
//     } else if (computerScore === userScore) {
//         return "The final score is " + userScore + " to " + computerScore + " . It's a tie! Refresh the page to play again.";
//     }
// }

//printing the final result and declaring a winner, loser, or a tie.

// console.log (game())
// console.log (finalResult())

//console.logs to make the game and final result functions execute and print to the browser console.


// TO DO:
//1. create 3 buttons in the html for the selections
//2. add event listener to the buttons that call the playRound function with the correct playerSelection every time the button is clicked
//3. add a div for displaying results and change all of the console.logs into DOM methods
//4. display the running score and announce a winner of the game once one player reaches 5 points
//5. once finished, commit changes to the new branch



// const scissors = document.getElementById("1");
// const paper = document.getElementById("2");
// const rock = document.getElementById("3");

// scissors.addEventListener("click", function() {
//     playRound(1, computerSelection);
// })

// paper.addEventListener("click", function() {
//     playRound(2, computerSelection);
// })

// rock.addEventListener("click", function() {
//     playRound(3, computerSelection);
// })