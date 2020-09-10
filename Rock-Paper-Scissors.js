// computer makes RPS choice
function computerPlay(){
	let compChoice = Math.floor(Math.random()*3) + 1;
	if(compChoice == 1){
		return 'Rock';
	} else if(compChoice == 2){
		return 'Paper';
	}
	return 'Scissors';
}

//compare playerSelection with computerSelection using rules of R,P,S
function playRound(playerSelection, computerSelection){
	console.log('The computer chose: ' + computerSelection.toLowerCase());
	switch(computerSelection){
		case 'Rock':
			if(playerSelection == 'rock'){
				console.log('Rock ties Rock');
				console.log('It\' a tie.');
				break;
			}
			else if(playerSelection == 'paper'){
				console.log('Paper covers Rock');
				console.log('You win!');
				break;
			}
			console.log('Rock crushes Scissors');
			console.log('The Computer wins.');
			break;

		case 'Paper':
			console.log('SwitchCompPaper; playerSelection:' + playerSelection);
			if(playerSelection == 'rock'){
				console.log('Paper covers Rock');
				console.log('The Computer wins.');
				break;
			}
			else if(playerSelection == 'paper'){
				console.log('Paper ties Paper');
				console.log('It\'s a tie.');
				break;
			}
			console.log('Scissors cut Paper');
			console.log('You win!');
			break;

		case 'Scissors':
			if(playerSelection == 'scissors'){
				console.log('Scissors ties Scissors');
				console.log('It\'s a tie.');
				// return "tie";
				break;
			}
			else if(playerSelection == 'rock'){
				console.log('Rock crushes Scissors');
				console.log('You win!');
				// return false; // rock beats scissors
				break;
			}
			console.log('Scissors cut Paper');
			console.log('The Computer wins.');
			// return true; //scissors beats paper
			break;
	}
}


//DOM STUFF //
// Define container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.className = '#buttonContainer';

// Define Buttons
const rockButton = document.createElement('button');
rockButton.className = 'playerChoiceButton';
rockButton.id = 'rock';
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', setPlayerChoice);

const paperButton = document.createElement('button');
paperButton.className = 'playerChoiceButton';
paperButton.id = 'paper';
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', setPlayerChoice);

const scissorsButton = document.createElement('button');
scissorsButton.className = 'playerChoiceButton';
scissorsButton.id = 'scissors';
scissorsButton.textContent = 'Scissors';
scissorsButton.addEventListener('click', setPlayerChoice);

//Add buttons to DOM
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
const header = document.querySelector('#headerThing');
header.appendChild(buttonContainer);

let playerSelection = '';
function setPlayerChoice(e){
	playerSelection = e.target.id;
	console.log('You chose: ' + playerSelection);
	playRound(playerSelection, computerPlay());
}
