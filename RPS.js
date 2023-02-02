console.log("Hello");
let playerScore = 0, computerScore = 0;
let result;
gameloop(5);

function gameloop(numOfRounds){
    for (let i=0; i<numOfRounds;i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (computerScore==playerScore){return alert(`The game was a tie! You both had ${playerScore} points`)}
    if (computerScore > playerScore){result = "lost";} 
    else {result = "won"}
    return alert(`After ${numOfRounds} rounds, you ${result} with a score ${playerScore} to ${computerScore}`);
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
    console.log(playerChoice);
    if (playerChoice == "rock" || playerChoice =="paper" || playerChoice == "scissors"){
        return playerChoice;
    }
    else getPlayerChoice();
}

function getComputerChoice(){
    let choiceArray = ["rock", "paper", "scissors"];
    let computerChoice = getRandomInt(3);
    return choiceArray[computerChoice];
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function playRound(playerChoice, computerChoice){
    let tieMessage = "It's a tie!";
    let playerWinMessage = "You win this round!";
    let computerWinMessage = "You lost this round :(";
    if (playerChoice == computerChoice) {
        playerScore++;
        computerScore++;
        return alert(tieMessage);
    } else {
        if (playerChoice == "rock"){
            if (computerChoice=="paper"){
                computerScore++;
                return alert(computerWinMessage);
            }
            else {
                playerScore++;
                return alert(playerWinMessage);
            }
        }
        if (playerChoice == "paper"){
            if (computerChoice=="scissors"){
                computerScore++;
                return alert(computerWinMessage);
            }
            else {
                playerScore++;
                return alert(playerWinMessage);
            }
        }
        if (playerChoice == "scissors"){
            if (computerChoice=="rock"){
                computerScore++;
                return alert(computerWinMessage);
            }
            else {
                playerScore++;
                return alert(playerWinMessage);
            }
        }
    }
}