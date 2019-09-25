// JavaScript

let gameBoard = document.querySelector('.gameBoard');
let rstBtn = document.querySelector('#rstBtn');
let whoseTurn = document.querySelector('#whoseTurn');
let winner = document.querySelector('#winner');

// Declare empty game array and turns
let turn = 'X';
let tileArr = [];
let gameWon = false;

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
    gameWon = false;
    winner.innerHTML = `It's <span id="whoseTurn">X</span>'s turn`;
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
        // Adds click listner and adds the tile to gameboard
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
            whoseTurn.innerHTML = turn;
            console.log(tileAr);
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
    // Loops through the 8 win options
    for (let i = 0; i < 8; i++) {
        // turns the array into a comma separated string, and tests if equal to all X's or all O's
        if (winAr[i].join() === '1,1,1' || winAr[i].join() === '2,2,2') {
            gameWon = true;
            winner.innerHTML = `${winAr[i].join() === '1,1,1' ? 'X' : 'O'} won the game!!`;
        }
    }
}

function rstGame() {
    // Clears the game board
    gameBoard.innerHTML = '';
    // Builds the game board
    createBoard(9);
    whoseTurn.innerHTML = turn;
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