// JavaScript

let gameBoard = document.querySelector('.gameBoard');
let rstBtn = document.querySelector('#rstBtn');
let whoseTurn = document.querySelector('#whoseTurn');

// Declare empty game array and turns
let gameAr = [];
let turn = 'X';
let tileArr = [];

class sqObj {
    constructor(value, clicked) {
        this.value = value;
        this.clicked = clicked;
    }
}

function createBoard(gridSize) {
    // Resets game on build
    tileAr = [];
    turn = 'X';
    gameAr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < gridSize; i++) {
        // Builds the board
        let div = document.createElement('div');
        div.className += 'col-4 border bg-white';
        div.id = `tile${i}`;
        div.setAttribute('style', 'height: 100px;');
        let text = document.createTextNode('_');
        div.appendChild(text);
        // Creates an object for each tile
        let tile = new sqObj(0, false);
        tileAr.push(tile)
        // Adds click listner and adds the tile to gameboard
        div.addEventListener('click', clickedOn);
        gameBoard.appendChild(div);
    }
}

// Creates a 9 tile board, each tile is names tile 0-9
createBoard(9);

function clickedOn() {
    // alert(`You clicked ${this.id}`);
    // this.innerHTML = turn;
    if (this.clickedOn) {
        alert('This square has already been clicked on')
    } else {
        this.innerHTML = turn;
        turn === 'X' ? turn = 'O' : turn = 'X';
        this.clickedOn = true;
        whoseTurn.innerHTML = turn;
    }
    console.log(gameAr);
    console.log(tileAr);
    isWinner();
}

function isWinner() {
    // win conditions

}

function rstGame() {
    // Clears the game board
    gameBoard.innerHTML = '';
    // Builds the game board
    createBoard(9);
}

rstBtn.addEventListener('click', rstGame);















// class sqObj {
//     constructor(value, clicked, innerHTML) {
//         this.value = value;
//         this.clicked = clicked;
//         this.innerHTML = 'null';
//     }
//     clickOn() {
//         if (clicked === false) {
//             this.clicked = true;
//             if (turn === 0) {
//                 this.innerHTML = 'X';
//                 this.value = 1; // How to add this value to score array
//                 turn = 1;
//             } else {
//                 this.innerHTML = 'O';
//                 this.value = 2;
//                 turn = 0;
//             }
//             winner();
//         }
//     }
//     // this.addEventListener('click', clickOn);
// }



// rstBtn.addEventListener('click', start);

// function start() {
//     // Resets the game array to 0's
//     gameAr = [
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]
//     ];
//     // Builds the game board
//     function build() {
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 let sqObj1 = new sqObj(0, false);
//                 let tile = document.createElement('div');
//                 tile.addAttribute(id, 'i, j');
//                 tile.innerHTML = sqObj.innerHTML;
//                 gameAr.push[i, j] = sqObj.value[x or o];
//             }
//         }
//     }
//     build();
// }


// function winner() {
//     // Insert winner logic here
// }

// // Start runs once on page load to build the page
// start();