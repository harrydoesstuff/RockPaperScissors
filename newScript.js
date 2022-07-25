//ok lets start out fresh 


//scissors = 1
//paper = 2
//rock = 3
let playerSelection; 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


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
        console.log("player wins");
        return;
    } else if (playerSelection === 2 && computerSelection === 3) {
        console.log("player wins");
        return;
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("player wins");
        return;
    } else if (playerSelection === 3 && computerSelection === 2) {
        console.log("computer wins");
        return;
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("computer wins");
        return;
    } else if (playerSelection === 1 && computerSelection === 3) {
        console.log("computer wins");
        return;
    } else if (playerSelection === computerSelection) {
        console.log("tie");
        return;
    }
}



// const selections = document.querySelectorAll("[data-selection]");

// selections.forEach(selections => {
//     selections.addEventListener("click", e => {
//         const playerSelection = selections.dataset.selection;
//         playRound(playerSelection);
//     })
// })

// function playRound(playerSelection) {

//     let computerSelection = getComputerChoice();

//     if (playerSelection === computerSelection) {
//         tie();
//     } else if (playerSelection === 2 && computerSelection === 3){
//         playerWins();
//     } else if (playerSelection === 1 && computerSelection === 2) {
//         playerWins();
//     } else if  (playerSelection === 3 && computerSelection === 1) {
//         playerWins();
//     } else if (playerSelection === 3 && computerSelection === 2) {
//         computerWins();
//     } else if (playerSelection === 2 && computerSelection === 1) {
//         computerWins();
//     } else if (playerSelection === 1 && computerSelection === 3) {
//         computerWins();
//     }
    
// }

// function computerWins() {
//     console.log("computer wins");
// }

// function playerWins() {
//     console.log("player wins");
// }

// function tie() {
//     console.log("tie");
// }

// // computer choice
// function getComputerChoice() {
//     let theRandomNumber = Math.floor(Math.random() * 3) +1;
//     return theRandomNumber
//     }

// computerchoice




//WEBDEVSIMPLIFIED CODE

// const selectionButtons = document.querySelectorAll("[data-selection]")
// const SELECTIONS = [
//     {
//         name: "rock",
//         beats: "scissors"
//     },
//     {
//         name: "paper",
//         beats: "rock"
//     },
//     {
//         name: "scissors",
//         beats: "paper"
//     }
// ]


// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener("click", e => {
//         const selectionName = selectionButton.dataset.selection;
//         const selection = SELECTIONS.find(selection => selection.name === selectionName)
//         makeSelection(selection)
//     })
// })

// function makeSelection(selection) {
//     const computerSelection = randomSelection()
//     const yourWinner = isWinner(selection, computerSelection)
//     const computerWinner = isWinner(computerSelection, selection)
//     console.log(computerSelection)
// }

// function isWinner(selection, opponentSelection) {
//     return selection.beats === opponentSelection.name;
// }

// function randomSelection() {
//     const randomIndex = Math.floor (Math.random() * SELECTIONS.length)
//     return SELECTIONS[randomIndex];
// }