// ROCK, PAPER, SCISSORS in a Browser//
//by Steve Emhof as part of Odin Project curriculum//
//September 2020//

// FUNCTIONS & GLOBAL VARIABLES //
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
	// update the textContent things in round results part
	playerRoundResult.textContent = 'You chose: ' + playerSelection;
	computerRoundResult.textContent = 'The computer chose: ' + computerSelection;

	let roundWinner = 0;

	switch(computerSelection){
		case 'Rock':
			if(playerSelection == 'Rock'){
				roundSummary.textContent = 'It\'s a tie';
				roundWinner = 0; // roundWinner = 0 for ties
				break;
			}
			else if(playerSelection == 'Paper'){
				roundSummary.textContent = 'Paper covers Rock - YOU WIN!';
				roundWinner = 1; // roundWinner = 1 for player win 
				break;
			}
			roundSummary.textContent = 'Rock crushes Scissors - The Computer wins!';
			roundWinner = 2; // roundWinner = 2 for computer win	
			break;

		case 'Paper':
			if(playerSelection == 'Rock'){
				roundSummary.textContent = 'Paper covers Rock - The Computer wins!';
				roundWinner = 2; // computer wins
				break;
			}
			else if(playerSelection == 'Paper'){
				roundSummary.textContent = 'It\'s a tie';
				roundWinner = 0; // tie
				break;
			}
			roundSummary.textContent = 'Scissors cut Paper - YOU WIN!';
			roundWinner = 1; // player wins	
			break;

		case 'Scissors':
			if(playerSelection == 'Scissors'){
				roundSummary.textContent = 'It\'s a tie';
				roundWinner = 0; // tie
				break;	
			}
			else if(playerSelection == 'Rock'){
				roundSummary.textContent = 'Rock crushes Scissors - YOU WIN!';
				roundWinner = 1; // player win
				break;
			}
			roundSummary.textContent = 'Scissors cut Paper - The Computer wins!';
			roundWinner = 2; // computer wins
			break;
	}

	switch(roundWinner){
		case 0:
			tieRoundBackground();
			break;
		case 1:
			playerRoundWinBackground();
			break;
		case 2:
			computerRoundWinBackground();
			break;
	}

	updateScore(roundWinner);
}

// get player RPS selection and play a round
let playerSelection = '';
function setPlayerChoice(e){
	playerSelection = e.target.id;
	// console.log('You chose: ' + playerSelection);
	playRound(playerSelection, computerPlay());
}

let playerScoreTotal = 0;
let computerScoreTotal = 0;

function playerRoundWinBackground(){ // update display style when player wins roung
	roundSummary.style.backgroundColor = '#00b33c';
}

function computerRoundWinBackground(){ //update display style when computer wins round
	roundSummary.style.backgroundColor = '#ff1a1a'; // basically red 
}

function tieRoundBackground(){
	roundSummary.style.backgroundColor = '#ffff00';
}

function updateScore(winner){ // update and display current score and check for game winner
	switch(winner){
		case 0:
			break;
		case 1:
			++playerScoreTotal;
			playerScoreBox.textContent = 'Your score is: ' + playerScoreTotal;
			break;
		case 2:
			++computerScoreTotal;
			computerScoreBox.textContent = 'Computer score is: ' + computerScoreTotal;
			break;
	}
	if(playerScoreTotal == 5){
		gameOverDisplay.textContent = 'YOU WIN!';
		endOfGame('You');
	}
	else if(computerScoreTotal == 5){
		gameOverDisplay.textContent = 'The computer won';
		endOfGame('The computer');
	}
}

function endOfGame(gameWinner){ // display winner and reset scores
	alert(gameWinner + ' scored 5 points and won the game!');
	playerRoundResult.textContent = 'Your choice: ______';
	computerRoundResult.textContent = 'Computer\'s choice: ______';
	roundSummary.textContent = '';
	playerScoreTotal = 0;
	playerScoreBox.textContent = 'Your score is: ' + playerScoreTotal;
	computerScoreTotal = 0;
	computerScoreBox.textContent = "Computer score is: " + computerScoreTotal;
	gameOverDisplay.textContent = 'First to score 5 points wins the game';
}

//**DOM STUFF***//

//***BUTTONS***//
// Define container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.className = '#buttonContainer';

// Define Buttons
const rockButton = document.createElement('button');
rockButton.className = 'playerChoiceButton';
rockButton.id = 'Rock';
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', setPlayerChoice);

const paperButton = document.createElement('button');
paperButton.className = 'playerChoiceButton';
paperButton.id = 'Paper';
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', setPlayerChoice);

const scissorsButton = document.createElement('button');
scissorsButton.className = 'playerChoiceButton';
scissorsButton.id = 'Scissors';
scissorsButton.textContent = 'Scissors';
scissorsButton.addEventListener('click', setPlayerChoice);

//Add buttons to DOM
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
const header = document.querySelector('#headerThing');
header.appendChild(buttonContainer);

//***DISPLAY RESULTS***//
// ROUND RESULTS
const roundResults = document.createElement('div'); // container for results of each round played
roundResults.id = 'roundResults';

const playerRoundResult = document.createElement('div');
playerRoundResult.id = 'playerRoundResult';
playerRoundResult.textContent = 'Your choice: ______';
playerRoundResult.style.fontSize = '24px';
playerRoundResult.style.fontFamily = 'monospace';

const computerRoundResult = document.createElement('div');
computerRoundResult.id = 'computerRoundResult';
computerRoundResult.textContent = 'Computer\'s choice: ______';
computerRoundResult.style.fontSize = '24px';
computerRoundResult.style.fontFamily = 'monospace'

const roundSummary = document.createElement('div');
roundSummary.id = 'roundSummary';
roundSummary.style.fontSize = '32px';
roundSummary.style.fontFamily = 'arial';

roundResults.appendChild(playerRoundResult);
roundResults.appendChild(computerRoundResult);
roundResults.appendChild(roundSummary);


const resultsDisplay = document.querySelector('#resultsDisplay'); // container for all displayed results
resultsDisplay.appendChild(roundResults);

//GAME RESULTS//
const gameScore = document.createElement('div'); // container for running score
gameScore.id = 'gameScore';
gameScore.style.marginTop = '24px';

const playerScoreBox = document.createElement('div'); //display players' running score
playerScoreBox.id = 'playerScoreBox';
playerScoreBox.textContent = 'Your score is: ' + playerScoreTotal;
playerScoreBox.style.fontFamily = 'monospace';
playerScoreBox.style.fontSize = '22px';

const computerScoreBox = document.createElement('div'); // container for comp running score
computerScoreBox.id = 'computerScoreBox';
computerScoreBox.textContent = 'Computer Score is: ' + computerScoreTotal;
computerScoreBox.style.fontFamily = 'monospace';
computerScoreBox.style.fontSize = '22px';

const gameOverDisplay = document.createElement('div');
gameOverDisplay.id = 'gameOverDisplay';
gameOverDisplay.textContent = 'First to score 5 points wins the game';
gameOverDisplay.style.fontFamily = 'arial';
gameOverDisplay.style.fontSize = '26px';

// place in DOM
gameScore.appendChild(playerScoreBox);
gameScore.appendChild(computerScoreBox);
gameScore.appendChild(gameOverDisplay);
resultsDisplay.appendChild(gameScore);
