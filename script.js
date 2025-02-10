//Global variables
let computerScore = 0;
let humanScore = 0;

//Step 1: Setup project strucure

//Step 2: Computer choice
function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);
    
    let choice = (random == 0) ? 'Rock':
    (random == 1) ? 'Paper' : 'Sciccors';

    return choice;
}

//Step 3: Human choice
function getHumanChoice(){
    
    let choice = prompt("Rock, Paper, Sciccors?").toLowerCase();
        
    if(choice === 'rock' || choice === 'paper' || choice === 'sciccors'){
        return choice;
    } else{
        alert('Choose a valid option');
        getHumanChoice();
    }
   
}

//Step 4: Declare players score
//Step 5: Write single round logic






