//Step 1: Setup project strucure

//Step 2: Computer choice


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    
    let choice = (random == 0) ? 'Rock':
    (random == 1) ? 'Paper' : 'Sciccors';

    return choice;
}

//Step 3: Human choice 

