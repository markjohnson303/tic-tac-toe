////////////////////////////////////////
////GLOBAL VARIABLES

var boardState = {
	a1 : ".", b1 : ".", c1 : ".",
	a2 : ".", b2 : ".", c2 : ".",
	a3 : ".", b3 : ".", c3 : ".",
} ;

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

function announcePlayer(){
	document.getElementById("currentPlayer").innerHTML = currentPlayer;
}


////////////////////////////////////////
////PLAYER MOVE

function playerMove(){
	var playedCell = this.id;
	if(boardState[playedCell] == "."){
		document.getElementById(playedCell + currentPlayer).style.display = 'block';
		boardState[playedCell] = currentPlayer;
		if(currentPlayer == 'x'){
			currentPlayer="o";
		} else {
			currentPlayer="x";
		}
		announcePlayer();
	}

}


















