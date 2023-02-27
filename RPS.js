let playerScore = 0, computerScore = 0;
let result;

const playerScoreText = document.getElementById("player_score");
const computerScoreText = document.getElementById("computer_score");
const fightResult = document.getElementById("fight_result");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        let playerChoice = getPlayerChoice(e.target);
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        playRound(playerChoice, computerChoice);
    });
});

function getPlayerChoice(buttonPressed){
    return buttonPressed.id;
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
    updateScore(determineWinner(playerChoice, computerChoice));
    if(playerScore==5){
        declareWinner("player");
    }
    if(computerScore==5){
        declareWinner("computer");
    }
/*    const tieMessage = "It's a tie!";
    const playerWinMessage = `You win, ${playerChoice} beats ${computerChoice}`;
    const computerWinMessage = `You lose, ${computerChoice} beats ${playerChoice}`;
    if (playerChoice == computerChoice) {
        playerScore++;
        computerScore++;
        console.log(tieMessage);
        return("none");
    } else {
        if (playerChoice == "rock"){
            if (computerChoice=="paper"){
                computerScore++;
                console.log(computerWinMessage);
                return("computer");
            }
            else {
                playerScore++;
                console.log(playerWinMessage);
                return("player");
            }
        }
        if (playerChoice == "paper"){
            if (computerChoice=="scissors"){
                computerScore++;
                console.log(computerWinMessage);
                return("computer");
            }
            else {
                playerScore++;
                console.log(playerWinMessage);
                return("player");
            }
        }
        if (playerChoice == "scissors"){
            if (computerChoice=="rock"){
                computerScore++;
                console.log(computerWinMessage);
                return;
            }
            else {
                playerScore++;
                console.log(playerWinMessage);
                return;
            }
        }
    }*/
    
    function determineWinner(playerChoice, computerChoice){
        if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "rock")) {
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            fightResult.textContent=`You win this round! ${playerChoice} beats ${computerChoice}`;
            return("player");
        } else if (playerChoice == computerChoice){
            console.log("It is a tie!");
            fightResult.textContent="It is a tie! The fight goes on!"
            return("none");
        } else {
            console.log(`You lose this round. ${computerChoice} beats ${playerChoice}`);
            fightResult.textContent = `You lose this round. ${computerChoice} beats ${playerChoice}`
            return("computer");
        }
    }

    function updateScore(winner){
        if (winner == "player"){playerScore++;}
        else if (winner =="computer"){computerScore++;}
        else {return;}
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    }

    function declareWinner(winner){
        if (winner=="player"){
            alert(`You win`);
        }
        if (winner == "computer"){
            alert(`You lose. Badly.`)
        }
    }
}