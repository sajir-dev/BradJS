// View Object
const view = {
    displayMessage : function (msg) {
        const msgArea = document.getElementById("messageArea");
        msgArea.innerHTML = msg;
    },

    displayHit : function (location) {
        const location = document.getElementById(gridId);
        location.classList.add("hit");
    },

    displayMiss : function (location) {
        const location = document.getElementById(gridId);
        location.classList.add("miss");
    }
}

view.displayMessage("Test Message");
view.showBattleShip(35);
view.showMiss(66);


function board() {
    let board = [];
    let grids;
    for (let i=0; i<7; i++){
        for (let j=0; j<7; j++){
            grids = i.toString()+j.toString();
            board.push(grids);
        }
    }
    console.log(board);
}

board();