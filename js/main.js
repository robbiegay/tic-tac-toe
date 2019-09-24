// JavaScript

let gameBoard = document.querySelector('.gameBoard');
let rstBtn = document.querySelector('#rstBtn');

// Declare empty game array and turns
let gameAr = [];
let turn = 0;

class sqObj {
    constructor(value, clicked, innerHTML) {
        this.value = value;
        this.clicked = clicked;
        this.innerHTML = 'null';
    }
    clickOn() {
        if (clicked === false) {
            this.clicked = true;
            if (turn === 0) {
                this.innerHTML = 'X';
                this.value = 1; // How to add this value to score array
                turn = 1;
            } else {
                this.innerHTML = 'O';
                this.value = 2;
                turn = 0;
            }
            winner();
        }
    }
    // this.addEventListener('click', clickOn);
}



rstBtn.addEventListener('click', start);

function start() {
    // Resets the game array to 0's
    gameAr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    // Builds the game board
    function build() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let sqObj1 = new sqObj(0, false);
                let tile = document.createElement('div');
                tile.addAttribute(id, 'i, j');
                tile.innerHTML = sqObj.innerHTML;
                gameAr.push[i, j] = sqObj.value[x or o];
            }
        }
    }
    build();
}


function winner() {
    // Insert winner logic here
}

// Start runs once on page load to build the page
start();