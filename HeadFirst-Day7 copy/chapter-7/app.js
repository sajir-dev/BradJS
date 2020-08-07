// View Object
const view = {
    displayMessage : function (msg) {
        const msgArea = document.getElementById("messageArea");
        msgArea.innerHTML = msg;
    },

    displayHit : function (location) {
        // console.log(location);
        const grid = document.getElementById(location);
        grid.classList.add("hit");
    },

    displayMiss : function (location) {
        // console.log(location);
        const grid = document.getElementById(location);
        grid.classList.add("miss");
    }
}

// view.displayMessage("Test Message");
// view.displayHit(35);
// view.displayMiss(66);


const model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,

    // ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
    //         {locations: ["24", "34", "44"], hits: ["", "", ""]},
    //         {locations: ["10", "11", "12"], hits: ["", "", ""]}],
    ships: [ {locations: [0, 0, 0], hits: ["", "", ""]},
             {locations: [0, 0, 0], hits: ["", "", ""]},
             {locations: [0, 0, 0], hits: ["", "", ""]}],

    fire: function(guess) {
        for (let i=0; i<this.numShips; i++) {
            let ship = this.ships[i];
            // locations = ship.locations;
            // let index = locations.indexOf(guess);
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)){
                    view.displayMessage("You sank my battleship");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed, ");
        return false;
    },

    isSunk: function(ship) {
        for (let i=0; i<this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        let locations;
        for(let i=0; i<this.numShips; i++){
            do {
                locations = this.generateShip();
            } while (this.collission(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function(){
        const direction = Math.floor(Math.random()*2);
        let row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * this.boardSize);
        } else {
            row = Math.floor(Math.random() * (this.boardSize - 3));
            col = Math.floor(Math.random() * this.boardSize);
        }

        const newShipLocations = [];

        for (let i=0; i<this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i ) + "" + col);
            }
        }

        return newShipLocations;
    },

    collission: function(locations) {
        for (let i=0; i < this.numShips; i++) {
            const ship = model.ships[i];
            for (let j=0; j<locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }


};

const controller = {
    guesses: 0,

    processGuess: function(guess) {
        let location = parseGuess(guess);
        // console.log(location);
        if (location) {
            this.guesses++ ;
            const hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                this.guesses + " guesses");
                // setTimeout(function () {
                //     location.reload();
                // }, 3000);
            }
        }
    }
}

parseGuess = guess => {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === "" || guess.length !==2) {
        alert("Oops! enter a letter and number on the board");
    } else {
        const row = alphabet.indexOf(guess[0]);
        const column = guess[1];

        if (isNaN(row) || isNaN (column)) {
            alert("Oops, that isnt on the board");
        } else if (row<0 || row>=model.boardSize || column<0 || column>=model.boardSize) {
            alert("Oops, that's off the board");
        } else {
            return row + column;
        }
    }
    return null;
}

function init() {
    const fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    const guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
}

function handleFireButton(){
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value;
    console.log(guess);
    controller.processGuess(guess);

    guessInput.value = "";
}

function handleKeyPress(e) {
    const fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;



// console.log(controller.processGuess("A0"));
// console.log(controller.processGuess("A6"));
// console.log(controller.processGuess("E0"));
// console.log(controller.processGuess("A7"));

// model.fire("06");
// model.fire("16");
// model.fire("26");

// model.fire("34");
// model.fire("24");
// model.fire("44");

// model.fire("12");
// model.fire("11");
// model.fire("10");



// const ships = [{locations: ["10", "20", "30"], hits: ["", "", ""]},
//             {locations: ["32", "33", "34"], hits: ["", "", ""]},
//             {locations: ["63", "64", "65"], hits: ["", "", "hit"]}]


// function createBoard() {
//     const board = [];
//     let grids;
//     for (let i=0; i<7; i++){
//         for (let j=0; j<7; j++){
//             grids = i.toString()+j.toString();
//             board.push((grids));
//         }
//     }
//     return board;
// }


// controller.processGuess("A0");

// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");

// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");

// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

