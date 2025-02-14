//Global variables
let computerScore = 0;
let humanScore = 0;

//Step 1: Setup project strucure

//Step 2: Computer choice
function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);
    
    let choice = (random == 0) ? 'rock':
    (random == 1) ? 'paper' : 'sciccors';

    return choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();
}

//Step 3: Human choice
function getHumanChoice(){
    
    let choice = prompt("Rock, Paper, Sciccors?").toLowerCase();
        
    if(choice === 'rock' || choice === 'paper' || choice === 'sciccors'){
        return choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();
    } else{
        alert('Choose a valid option');
        getHumanChoice();
    }

   
   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Step 4: Declare players score
//Step 5: Write single round logic
//Create function playRound
function playRound(humanChoice, computerChoice){
    
  /*   let result = (humanChoice == 'rock' && computerChoice == 'sciccors') ? `You win! ${humanChoice} beats ${computerChoice}` 
    :   (humanChoice == 'sciccors' && computerChoice == 'paper')  ? `You win! ${humanChoice} beats ${computerChoice}`
    :   (humanChoice == 'paper' && computerChoice == 'rock')  ? `You win! ${humanChoice} beats ${computerChoice}` 
    :   (humanChoice == computerChoice) ? "It\'s a tie!" 
    :   `You lose! ${computerChoice} beats ${humanChoice}`; */


    if(humanChoice === 'rock' && computerChoice === 'sciccors'){

        humanScore++;
        return  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
    } else if(humanChoice === 'paper' && computerChoice === 'rock'){

        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    } else if(humanChoice === 'sciccors' && computerChoice === 'paper'){

        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
    } else if(humanChoice === computerChoice){
        
        return  console.log(`It\'s a draw! ${humanChoice} equals ${computerChoice}`)
    
    } else{

        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);

    }
}

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);

//The function than increments the score from whoever won


