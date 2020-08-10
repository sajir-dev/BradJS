function quack (num) {
    for (let i=0; i<num; i++) {
        console.log("Quack");
    }
}

quack(3);

// function expression 
const k = function(num) {
    for (let i = 0; i<num; i++) {
        console.log("Whack!");
    }
}

k(3);
