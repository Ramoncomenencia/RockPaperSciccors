//Global variables
let computerScore = 0;
let humanScore = 0;
let humanSelection;
let computerSelection;
const rounds = 5;


//Step 1: Setup project strucure

//Step 2: Computer choice
function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);
    
    let choice = (random == 0) ? 'rock':
    (random == 1) ? 'paper' : 'sciccors';

    computerSelection = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();

    return computerSelection;
}

//Step 3: Human choice
function getHumanChoice(){
    
    let choice = prompt("Rock, Paper, Sciccors?").toLowerCase();
        
    if(choice === 'rock' || choice === 'paper' || choice === 'sciccors'){

        humanSelection = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase()

        return humanSelection;

    } else{
        
        alert('Choose a valid option');
        getHumanChoice();
    }
}



//Step 4: Declare players score
//Step 5: Write single round logic
function playRound(humanChoice, computerChoice){

    if(humanChoice == 'Rock' && computerChoice == 'Sciccors'){

        humanScore++;
        return  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
    } else if(humanChoice == 'Paper' && computerChoice == 'Rock'){

        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    } else if(humanChoice == 'Sciccors' && computerChoice == 'Paper'){

        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
    } else if(humanChoice == computerChoice){
        
        return  console.log(`It\'s a draw! ${humanChoice} equals ${computerChoice}`)
    
    } else{

        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);

    }
}




for(let i = 0; i < rounds; i++){
    getComputerChoice();
    getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log('Score: \n' + `Human: ${humanScore} \n` + `Computer: ${computerScore}`);
}








