const rps = ["rock", "paper", "scissors"];
let winners = []

function game(){
    winners = [];
    for (let i=0; i<5; i++){
    oneRound(i+1);
    }
    document.querySelector("button").textContent = "Play again";
    logWins();
}

function playerChoice (){
    let input = prompt("Choose rock, paper or scissors.");
    input = input.toLowerCase();
    let check = checkInput(input);
    while (check == false){
        input = prompt("Choose rock, paper or scissors.");
        input = input.toLowerCase();
        check = checkInput(input);
    };
    return input;
}

function getComputerChoice() {
    return rps[(Math.floor(Math.random() * rps.length))]
};

function oneRound(round){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        const winner = checkWinner(playerSelection,computerSelection);
        logRound(playerSelection,computerSelection,winner,round)
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

function logWins() {
    let playerWins = winners.filter(item => item == "player").length;
    let computerWins = winners.filter(item => item == "computer").length;
    let ties = winners.filter(item => item == "tie").length;
    console.log(`Results:`);
    console.log(`Player won ${playerWins}`);
    console.log(`Computer won ${computerWins}`);
    console.log(`Ties: ${ties}`);
}

function logRound(playerChoice,getComputerChoice,checkWinner,round) {
    console.log("Round ",round);
    console.log("Player chose ",playerChoice);
    console.log("Computer chose ",getComputerChoice);
    console.log(checkWinner);
    console.log("---------------------------")
}

function checkInput(choice){
   return rps.includes(choice);
}

