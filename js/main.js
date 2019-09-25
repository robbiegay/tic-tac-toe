// JavaScript

let gameBoard = document.querySelector('.gameBoard');
let rstBtn = document.querySelector('#rstBtn');
// let whoseTurn = document.querySelector('#whoseTurn');
let gameText = document.querySelector('#gameText');
// Scores
let xWins = document.querySelector('#xWins');
let yWins = document.querySelector('#yWins');
let ties = document.querySelector('#ties');
// Win table
let winTable = document.querySelector('.table');

// Declare empty game array and turns
let turn = 'X';
let tileArr = [];
let gameWon = false;
// [x wins, o wins, ties];
let gameTally = [0, 0, 0];

class sqObj {
    constructor(value, clicked) {
        this.value = value;
        this.clicked = clicked;
    }
}

function createBoard(gridSize) {
    // Resets game on build
    turn = 'X';
    tileAr = [];
    gameWon = false;
    gameText.innerHTML = `It's X's turn`;
    for (let i = 0; i < gridSize; i++) {
        // Builds the board
        let div = document.createElement('div');
        div.className += 'col-4 border bg-white display-2';
        div.id = `tile-${i}`;
        div.setAttribute('style', 'height: 100px;');
        let text = document.createTextNode('');
        div.appendChild(text);
        // Creates an object for each tile
        let tile = new sqObj(0, false);
        tileAr.push(tile)
        // Adds click listener and adds the tile to game board
        div.addEventListener('click', clickedOn);
        gameBoard.appendChild(div);
    }
}

// Creates a 9 tile board, each tile is names tile 0-9
createBoard(9);

function clickedOn(e) {
    if (!gameWon) {
        let id = e.target.id.split('-')[1];
        if (!tileAr[id].clicked) {
            tileAr[id].clicked = true;
            tileAr[id].value = (turn === 'X' ? 1 : 2);
            this.innerHTML = turn;
            turn === 'X' ? turn = 'O' : turn = 'X';
            gameText.innerHTML = `It's ${turn}'s turn`;
            // console.log(tileAr);
            isWinner();
        }
    }

}

function isWinner() {
    // All the possible places that a win could be
    let winAr = [
        // Horizontal Wins
        [tileAr[0].value, tileAr[1].value, tileAr[2].value],
        [tileAr[3].value, tileAr[4].value, tileAr[5].value],
        [tileAr[6].value, tileAr[7].value, tileAr[8].value],
        // Vertical Wins 
        [tileAr[0].value, tileAr[3].value, tileAr[6].value],
        [tileAr[1].value, tileAr[4].value, tileAr[7].value],
        [tileAr[2].value, tileAr[5].value, tileAr[8].value],
        // Diagonal Wins
        [tileAr[0].value, tileAr[4].value, tileAr[8].value],
        [tileAr[2].value, tileAr[4].value, tileAr[6].value]
    ];
    let tieAr = [
        tileAr[0].clicked, tileAr[1].clicked, tileAr[2].clicked,
        tileAr[3].clicked, tileAr[4].clicked, tileAr[5].clicked,
        tileAr[6].clicked, tileAr[7].clicked, tileAr[8].clicked,
    ]
    // Loops through the 8 win options
    for (let i = 0; i < 8; i++) {
        // turns the array into a comma separated string, and tests if equal to all X's or all O's
        if (winAr[i].join() === '1,1,1' || winAr[i].join() === '2,2,2') {
            gameWon = true;
            gameText.innerHTML = `${winAr[i].join() === '1,1,1' ? 'X' : 'O'} won the game!!`;
            // Adjust game tally
            turn === 'O' ? gameTally[0]++ : gameTally[1]++;
            xWins.innerHTML = gameTally[0];
            yWins.innerHTML = gameTally[1];
            ties.innerHTML = gameTally[2];
            winTable.style.visibility = 'visible';
        }
    }
    // Tests for ties
    if (tieAr.join() === 'true,true,true,true,true,true,true,true,true' && gameWon === false) {
        gameText.innerHTML = 'TIE!!';
        gameTally[2]++;
        xWins.innerHTML = gameTally[0];
        yWins.innerHTML = gameTally[1];
        ties.innerHTML = gameTally[2];
        winTable.style.visibility = 'visible';
    }
}

function rstGame() {
    // Clears the game board
    gameBoard.innerHTML = '';
    // Builds the game board
    createBoard(9);
    // whoseTurn.innerHTML = turn;
}

rstBtn.addEventListener('click', rstGame);