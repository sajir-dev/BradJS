
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
view.showMiss(66)