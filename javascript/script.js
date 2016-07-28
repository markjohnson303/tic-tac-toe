////////////////////////////////////////
////GLOBAL VARIABLES

var boardState = {
	a1 : ".", b1 : ".", c1 : ".",
	a2 : ".", b2 : ".", c2 : ".",
	a3 : ".", b3 : ".", c3 : ".",
} ;

var row1 = [boardState.a1, boardState.b1, boardState.c1];
var row2 = [boardState.a2, boardState.b2, boardState.c2];
var row3 = [boardState.a3, boardState.b3, boardState.c3];
var cola = [boardState.a1, boardState.a2, boardState.a3];
var colb = [boardState.b1, boardState.b2, boardState.b3];
var colc = [boardState.c1, boardState.c2, boardState.c3];
var diag1= [boardState.a1, boardState.b2, boardState.c3];
var diag2= [boardState.c1, boardState.b2, boardState.a3];

var positions = Object.keys(boardState);

var currentPlayer = firstPlayer();

////////////////////////////////////////
////INITIALIZATION FUNCTIONS

//Get first player
function firstPlayer() {
	var randomNumber = Math.random();
	if (randomNumber < 0.5) {
		return "x";
	} else {
		return "o";
	}
	return firstPlayer;
}

//Add event listeners to cells
var cells = document.querySelectorAll('.cell');

for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", playerMove);
}

//Add event listenerto reset buttom
var resetButton = document.querySelector('#reset');

resetButton.addEventListener("click", newGame);

//Announce the first player
announcePlayer();

////////////////////////////////////////
////BASIC GAME FUNCTIONS

//Clear Game Board
function clearGameBoard(){
	for (var io = 0; io < positions.length; io++) {
		var cello = positions[io] + "o";
		document.getElementById(cello).style.display = "none";
	}
	for (var ix = 0; ix < positions.length; ix++) {
		var cellx = positions[ix] + "x";
		document.getElementById(cellx).style.display = "none";
	}
}

//Reset Board State
function resetBoardState(){
	boardState = {
		a1 : ".", b1 : ".", c1 : ".",
		a2 : ".", b2 : ".", c2 : ".",
		a3 : ".", b3 : ".", c3 : ".",
	};
}

//Start a new game
function newGame() {
	clearGameBoard();
	resetBoardState();
	firstPlayer();
	announcePlayer();
}

//Announce current player

function switchPlayer(){
			if(currentPlayer == 'x'){
			currentPlayer="o";
		} else {
			currentPlayer="x";
		}
}

function announcePlayer(){
	document.getElementById("currentPlayer").innerHTML = currentPlayer;
}


////////////////////////////////////////
////PLAYER MOVE


//Make a move
function playerMove(){
	var playedCell = this.id;
	if(boardState[playedCell] == "."){
		document.getElementById(playedCell + currentPlayer).style.display = 'block';
		boardState[playedCell] = currentPlayer;
		switchPlayer();
		announcePlayer();
	}

}


////////////////////////////////////////
////Check for winner

//Check for a winner
function getWinner(){

}


//Get Rows

function getRow1(){
	row1 = [boardState.a1, boardState.a2, boardState.a3]
}














