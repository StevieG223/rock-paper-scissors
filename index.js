
// make rock, paper, scissors 
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const paperButton = document.getElementById("paper");
// make scores display
let compScoreDisplay = document.getElementById("computer-score");
let playerScoreDisplay = document.getElementById("player-score");
let titleDiv = document.getElementById("title");
// make place record choices
let playerChoiceDisplay = document.getElementById("player-choice");
let compChoiceDisplay = document.getElementById("computer-choice");
// initiate scores
let computerPoints = 0;
let playerPoints = 0;
//have the computer calculate a choice, return choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        move = "rock";
        compChoiceDisplay.textContent = "✊";
    } else if (choice === 1) {
        move = "paper";
        compChoiceDisplay.textContent = "✋";
    } else if (choice === 2) {
        move = "scissors";
        compChoiceDisplay.textContent = "✌";
    }
    return move;
}

//have the player make a choice, return choice
rockButton.addEventListener("click", () => {
    let playerChoice = 'rock';
    playerChoiceDisplay.textContent = "✊";
    playRound(playerChoice);
});
scissorsButton.addEventListener("click", () => {
    let playerChoice = 'scissors';
    playerChoiceDisplay.textContent = "✌";
    playRound(playerChoice);
});
paperButton.addEventListener("click", () => {
    let playerChoice = 'paper';
    playerChoiceDisplay.textContent = "✋";
    playRound(playerChoice);
});

//play a game
function playRound(choice){
    let computerSelection= getComputerChoice();
    if (computerSelection === choice){
       // do nothing
    }else if ((computerSelection===
        'rock'&& choice==="scissors")||
        (computerSelection==='scissors' && choice==="paper")|| 
        (computerSelection==='paper' && choice==="rock")){
            computerPoints++;
            compScoreDisplay.innerHTML = `${String(computerPoints)}`
    }else if ((choice==='rock' && computerSelection==="scissors")||
        (choice==='scissors'&&computerSelection==="paper")|| 
        (choice==='paper'&&computerSelection==="rock")){
            playerPoints++;
            playerScoreDisplay.innerHTML = `${String(playerPoints)}`;
    }
    if (computerPoints >= 5 || playerPoints >= 5){
        playerScoreDisplay.innerHTML = `You won ${playerPoints} games`;
        compScoreDisplay.innerHTML = `Computer won ${computerPoints} games`;
        if (playerPoints<computerPoints){
            titleDiv.innerHTML="<h1>🏆The computer wins!</h1>";
        }
        else if (computerPoints<playerPoints){
            titleDiv.innerHTML="<h1>🏆You win!</h1>";
        }
        }
    }