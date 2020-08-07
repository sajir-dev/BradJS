// View Object
const view = {
    displayMessage : function (msg) {
        const msgArea = document.getElementById("messageArea");
        msgArea.innerHTML = msg;
    },

    displayHit : function (location) {
        let grid = document.getElementById(location);
        grid.classList.add("hit");
    },

    displayMiss : function (location) {
        let grid = document.getElementById(location);
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

    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["24", "34", "44"], hits: ["", "", ""]},
            {locations: ["10", "11", "12"], hits: ["", "", ""]}],

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
        view.displayMiss();
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
    }
};

const controller = {
    guesses: 0,

    processGuess: function(guess) {
        const alphabet = ["A", "B", "c", "D", "E", "F", "G"];

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
}

console.log(controller.processGuess("A0"));
console.log(controller.processGuess("A6"));
console.log(controller.processGuess("E0"));
console.log(controller.processGuess("A7"));

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


