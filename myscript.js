let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock"
    } else if (choice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    const choice = prompt("Rock, paper, scissors").toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice; //console.log(choice);
    } else {
        alert ("Invalid choice, please choose Rock, paper or scissors");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert (`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice==="paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++;
        alert (`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore ++;
        alert (`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        alert(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        alert(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();
