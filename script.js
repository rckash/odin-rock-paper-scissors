let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let convertedComputerChoice;

    switch(computerChoice) {
        case 1:
            convertedComputerChoice = "rock"
            break;
        case 2:
            convertedComputerChoice = "paper"
            break;
        case 3:
            convertedComputerChoice = "scissors"
            break;
        default:
            alert("CPU Error")
    }

    return convertedComputerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock\nPaper\nScissors\nWhat is your move?");
    let convertedHumanChoice = humanChoice.toLowerCase();

    return convertedHumanChoice;
}

function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

function playRound() {

    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    let result;

    switch(humanChoice) {
        case "rock":
            result = "Your move is ROCK\n";
            if (computerChoice === "rock") {
                result += "CPU's move is ROCK. It's a DRAW."
            } else if (computerChoice === "paper") {
                result += "CPU's move is PAPER. You LOSE."
                computerScore++
            } else if (computerChoice === "scissors") {
                result += "CPU's move is SCISSORS. You WIN."
                humanScore++
            } else {
                result += "Program Error. Please reload page."
            }
            break;
        case "paper":
            result = "Your move is PAPER\n";
            if (computerChoice === "rock") {
                result += "CPU's move is ROCK. You WIN."
                humanScore++
            } else if (computerChoice === "paper") {
                result += "CPU's move is PAPER. It's a DRAW."
            } else if (computerChoice === "scissors") {
                result += "CPU's move is SCISSORS. You LOSE."
                computerScore++
            } else {
                result += "Program Error."
            }
            break;
        case "scissors":
            result = "Your move is SCISSORS\n";
            if (computerChoice === "rock") {
                result += "CPU's move is ROCK. You LOSE."
                computerScore++
            } else if (computerChoice === "paper") {
                result += "CPU's move is PAPER. You WIN."
                humanScore++
            } else if (computerChoice === "scissors") {
                result += "CPU's move is SCISSORS. It's a DRAW."
            } else {
                result += "Program Error. Please reload page."
            }
            break;
        default:
            alert("Invalid move! Round is invalid.");
    }

    console.log(result);
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}` )
    return result;
}

function determineWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS! YOU WON THE MATCH!!!")
    } else if (computerScore > humanScore) {
        console.log("You LOSE the match :(")
    } else {
        console.log("It's a draw! Refresh the page to play again!")
    }
}

playGame();
console.log("Match over.");
determineWinner(humanScore, computerScore);