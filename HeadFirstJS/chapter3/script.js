

function bowbow(weight, name) {
    if (weight > 20) {
        console.log(name + ", WOOF WOOF");
    } else {
        console.log(name + ", woof woof");
    }
}

bowbow(40, 'Stanley');
bowbow(5, 'Jimmy');


function whatShallwear(temp) { 
    if ( temp < 60 ) {
        console.log("Wear a jacket");
    } else if ( temp < 70 ) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

whatShallwear(50);
whatShallwear(80);
whatShallwear(60);

