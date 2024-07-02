// console.log('hello world');

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () =>{
    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


const getHumanChoice = () =>{
    const userInput = prompt('Enter your choice (rock, paper, or scissors): ').toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
        return userInput;
    } else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice();
    }
}


const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      return "Draw";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      return "You lose! Paper beats rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      return "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      return "You win! Paper beats rock!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      return "You lose! Scissors beats paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      return "You lose! Rock beats scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      return "You win! Scissors beats paper!";
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playGame = () =>{
    for(let i = 0; i < 5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(humanSelection, computerSelection)
        console.log(`Round ${i+1}: ${round}`);
    }
    console.log(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame()