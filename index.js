//have the computer calculate a choice, return choice
function getComputerChoice(){
    let move = "";
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        move = "rock";
    }else if (choice===1){
        move = "paper";
    }else if (choice===2){
        move = "scissors";
    }
    return move;
    }
//have the player make a choice, return choice
function getPlayerSelection(){
    let playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
    return playerChoice;
    }
// initiate scores
let computerPoints = 0;
let playerPoints = 0;
//play a game
function playRockPaperScissors(){
//get both choices
    let computerSelection= getComputerChoice();
    let playerSelection = getPlayerSelection();
    //evauate choices and determine tie or winner
    if (computerSelection === playerSelection){
        console.log(`You chose ${playerSelection}`);
        console.log(`The computer chose ${computerSelection}`);
        console.log("Tie Game! Play again");
        playRockPaperScissors();
    }else if ((computerSelection===
        'rock'&&playerSelection==="scissors")||
        (computerSelection==='scissors' && playerSelection==="paper")|| 
        (computerSelection==='paper' && playerSelection==="rock")){
            console.log(`You chose ${playerSelection}`);
            console.log(`The computer chose ${computerSelection}`);
            console.log("You lose");
            computerPoints++;
    }else if ((playerSelection==='rock' && computerSelection==="scissors")||
        (playerSelection==='scissors'&&computerSelection==="paper")|| 
        (playerSelection==='paper'&&computerSelection==="rock")){
            console.log(`You chose ${playerSelection}`);
            console.log(`The computer chose ${computerSelection}`);
            console.log("You win!");
            playerPoints++;
    }
    }
function playGame(){
    console.log(`The computer won ${computerPoints} games`);
    console.log(`You won ${playerPoints} games`);
    if (playerPoints===computerPoints){
        console.log("Tie Game!");
    }else if (playerPoints<computerPoints){
        console.log("The computer wins");
    }else if (playerPoints>computerPoints){
        console.log("You win!");
    }
}
