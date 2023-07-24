const rps = ["rock", "paper", "scissors"];
const winners = []

function getComputerChoice() {
    return rps[(Math.floor(Math.random() * rps.length))]
};

function oneRound(){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        const winner = checkWinner(playerSelection,computerSelection);
        logRound(playerSelection,computerSelection,winner)
}

function checkWinner(playerC,computerC){
    if (playerC == computerC) {
        winners.push("tie")
        return "Tie";
    } else if (
        (playerC === "rock" && computerC === "scissors") || 
        (playerC === "paper" && computerC === "rock") || 
        (playerC === "scissors" && computerC === "paper")) {
        winners.push("player");
        return "Player Wins!";
        } else {
            winners.push("computer");
            return "Computer Wins.";
        }
}

function logRound(playerChoice,getComputerChoice,checkWinner) {
    let playerWins = winners.filter(item => item == "player").length;
    let computerWins = winners.filter(item => item == "computer").length;
    let ties = winners.filter(item => item == "tie").length;
    document.getElementById("results").innerHTML = `Player chose: ${playerChoice}, Computer chose: ${getComputerChoice}`;
    document.getElementById("roundWinner").innerHTML = `${checkWinner}`;
    document.getElementById("tally").innerHTML = `Player: ${playerWins} wins ---- Computer: ${computerWins} wins ---- Ties: ${ties}`;
}

function checkInput(choice){
   return rps.includes(choice);
}

document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);

function playerChoice(){
    let input = event.target.id;
    return input;
    }

function finishedGame(){
    let playerWins = winners.filter(item => item == "player").length;
    let computerWins = winners.filter(item => item == "computer").length;
    if (playerWins == 5){ 
        return 1
    } else if (computerWins == 5){
        return 2
    }
}

function playGame(){
        document.getElementById("victory").innerHTML = ``;
        oneRound();
        finishedGame()
        if (finishedGame() === 1){
            document.getElementById("victory").innerHTML = `PLAYER WON!`;
        } else if (finishedGame() === 2){
            document.getElementById("victory").innerHTML = `COMPUTER WON...`;
            }
        if (finishedGame() === 1 || finishedGame() === 2){
            winners.length = 0;
        }
}
