function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);

    let choice = (random == 0) ? 'rock':
    (random == 1) ? 'paper' : 'sciccors';
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Sciccors?").toLowerCase();

    if(choice === 'rock' || choice === 'paper' || choice === 'sciccors'){
        return choice;
    } else{
        alert('Choose a valid option');
        getHumanChoice();
    }
}

function playGame(){
    
    let computerScore = 0;
    let humanScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(
            (humanChoice == 'rock' && computerChoice == 'sciccors') ||
            (humanChoice == 'paper' && computerChoice == 'rock')    ||
            (humanChoice == 'sciccors' && computerChoice == 'paper')
        ){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return humanScore++;
        
        } else if(humanChoice === computerChoice){
            console.log(`It\'s a draw! ${humanChoice} equals ${computerChoice}`);
        
        } else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return computerScore++;
        }
    }
    
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score:\nHuman:${humanScore}\nComputer:${computerScore}`)
    }

    if(humanScore > computerScore){
        console.log(`Human wins! ${humanScore} against ${computerScore}`);
    } else if(humanScore === computerScore){
        console.log(`It\'s a tie! ${humanScore} against ${computerScore}`);
    } else{
        console.log(`Computer wins! ${computerScore} against ${humanScore}`);
    }
}
   
playGame();






