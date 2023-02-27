let playerScore=0, computerScore=0;
let result;

const playerScoreText = document.getElementById("player_score");
const computerScoreText = document.getElementById("computer_score");
const fightResult = document.getElementById("fight_result");
const computerChoiceImage = document.getElementById("computer_choice");
const resetButton = document.getElementById("reset_button");
const buttons = document.querySelectorAll('.player_button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        let playerChoice = getPlayerChoice(e.target);
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        playRound(playerChoice, computerChoice);
    });
});

resetButton.addEventListener('click', resetGame);

function getPlayerChoice(buttonPressed){
    return buttonPressed.id;
}

function getComputerChoice(){
    let choiceArray = ["rock", "paper", "scissors"];
    let computerChoice = getRandomInt(3);
    displayComputerChoice(choiceArray[computerChoice]);
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
        buttons.forEach((button)=>{
            button.disabled=true;
        });
        if (winner=="player"){
            fightResult.textContent="Congratulation! You won the fight!";
        }
        if (winner == "computer"){
            fightResult.textContent=`You lost the fight. Badly.`;
        }
    }
}

function displayComputerChoice(computerChoice){
    computerChoiceImage.className = "icon";
    if(computerChoice=="rock"){
        computerChoiceImage.src="./images/rock_icon.png";
    }
    if(computerChoice=="paper"){
        computerChoiceImage.src="./images/paper_icon.png";
    }
    if(computerChoice=="scissors"){
        computerChoiceImage.src="./images/scissors_icon.png";
    }
}

function resetGame(){
    playerScore=0;
    computerScore=0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    fightResult.textContent="Waiting for your choice";
    computerChoiceImage.src="./images/robot.png";
    buttons.forEach((button)=>{
        button.disabled=false;
    });
}