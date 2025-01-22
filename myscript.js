let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultsDiv = document.querySelector('.results');
const p = document.createElement('p')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

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

// function getHumanChoice(){
//     const choice = prompt("Rock, paper, scissors").toLowerCase();
//     if(choice === "rock" || choice === "paper" || choice === "scissors"){
//         return choice; //console.log(choice);
//     } else {
//         alert ("Invalid choice, please choose Rock, paper or scissors");
//     }
// }

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){ 
        p.innerText = `It's a tie! You both chose ${humanChoice}.`
        resultsDiv.appendChild(p)
    } else if (
        (humanChoice==="paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++;
        p.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
        resultsDiv.appendChild(p)
    } else {
        computerScore ++;
        p.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        resultsDiv.appendChild(p)
    }
}

const checkForWinner = (humanScore, computerScore) => {
    if (humanScore === 5){
        const winnerText = document.createElement('h2')
        winnerText.classList.add('human-won')
        winnerText.innerText = `Congrats! You've won the game by ${humanScore} to ${computerScore}.`
        resultsDiv.appendChild(winnerText)
    } if (computerScore === 5){
        const winnerText = document.createElement('h2')
        winnerText.classList.add('computer-won')
        winnerText.innerText = `Sorry! You've lost the game by ${computerScore} to ${humanScore}.`
        resultsDiv.appendChild(winnerText)
    }
}

const updateScore = (humanScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${humanScore}`
    computerScoreSpan.innerText = `Compuer Score: ${computerScore}`
}

rockButton.addEventListener('click', () =>{
    const computerChoice = getComputerChoice()
    const humanChoice = 'rock'
    playRound(humanChoice, computerChoice)
    updateScore(humanScore, computerScore)
    checkForWinner(humanScore, computerScore)
})

paperButton.addEventListener('click', () =>{
    const computerChoice = getComputerChoice()
    const humanChoice = 'paper'
    playRound(humanChoice, computerChoice)
    updateScore(humanScore, computerScore)
    checkForWinner(humanScore, computerScore)
})

scissorsButton.addEventListener('click', () =>{
    const computerChoice = getComputerChoice()
    const humanChoice = 'scissors'
    playRound(humanChoice, computerChoice)
    updateScore(humanScore, computerScore)
    checkForWinner(humanScore, computerScore)
})


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }

//     if (humanScore > computerScore) {
//         alert(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     } else if (computerScore > humanScore) {
//         alert(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     } else {
//         alert(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     }
// }

// playGame();
