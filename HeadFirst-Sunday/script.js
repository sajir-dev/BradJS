let fiat = {
    make: "Fiat",
    model: "500",

    started: false,
    fuel: 0,

    start: function() {
        if (!fuel) {
            alert ("The car is on empty fuel, fill up before starting");
        } else {
            this.started = true;
        }
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert (this.make + " " + this.model + " goes zoom zoom");
                this.fuel--;
            } else {
                alert ("Uh oh, out of fuel");
                this.stop();
            }
        } else {
            alert ("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }

}

fiat.addFuel(2)
fiat.start();
fiat.drive();

fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();


