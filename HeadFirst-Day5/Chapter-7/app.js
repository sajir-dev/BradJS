let test;

test = 3 + "4" ; // 34
test = "3" + 4 ; // 34
test = 3 + 4;  // 7
test = "3" + "4"; // 34

test = "4" - 3; // 1
test = 4 - "3"; // 1

test = 4* "3"; // 12
test = "4" * 3;  // 12

test = 4/"3"; // 1.3333
test = "4"/3; // 1.3333

test = "2" + 1 + 3 + "5" + "pizzas";  // 2135pizzas
test = 2 + 1 + 3 + 5 + "pizzas" // 11pizzas
test = 2 + 1 + "3" + 5 + "pizzas";  //335pizzas
test = 2 + "1" + 3 + 5 + "pizzas";  //2135pizzas

test = 2 * "3" * 4 * "pizzas" // NaN

test = 3 + "bananas" + 2 + "apples"; // 3bananas2apples

console.log(test);


let fruit = {name: "Apple", nutrition: "high"};
let apple = {name: "Apple", nutrition: "high"};


console.log(fruit === apple); // false

let testThis; // if (testThis) => false
testThis = null; // if (testThis) => true 

testThis = 0 ; // if (testThis) => false
testThis = ""; // if (testThis) => false
testThis = " "; // if (testThis) => true
testThis = NaN ; // if (testThis) => false
testThis = []; // if (testTHis) => true
testThis = {}; // if (testThis) => true

if (testThis) {
    console.log("testThis is true inside conditional statement");
} else {
    console.log("testThis is false inside conditional statement");
}

let stringTest = "          X    OxxOO    X   ";
let hugs = 0;
let kisses = 0;
stringTest = stringTest.trim();
stringTest = stringTest.toUpperCase();

for (let i = 0; i<stringTest.length; i++) {
    if (stringTest.charAt(i) === "X") {
        hugs++;
    } else if (stringTest.charAt(i) == "0") {
        kisses++;
    }
}

console.log ("stringTest:", stringTest, "hugs: ", hugs, "kisses: ", kisses);

function validatePhoneNumber1 (phone) {
    if (phone.length !== 8) {
        return false;
    }

    for (let i = 0; i<phone.length; i++){
        if (i === 3) {
            if (phone.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phone.charAt(i))) {
            return false;
        }
    }

    return true;
}


function validatePhoneNumber2 (phone) {
    if ((phone.length !== 8) || (phone.charAt(3) !== '-' ) || 
    (isNaN(phone.substring(0,3))) || (isNaN(phone.substring(4)))) {
        console.log("here");
        return false;
    } 
    
    // if (phone.length !== 7 || isNaN(phone)) {
    //     console.log("here");
    //     return false;
    // }

    return true;
}

console.log(validatePhoneNumber1("123-4567"));
console.log(validatePhoneNumber2("1234234"));

// recheck
function validatePhoneNumber3 (phone) {
    return phone.match(/^\d{3}-\d{4}$/);
}

// recheck
console.log(validatePhoneNumber2("123-4234"));

// Validate phone number
function validatePhoneNumber4 (phone) {
    let phoneNo = phone.split("");

    if (phoneNo.length>8 || phoneNo.length<7) {
        return false
    }

    for (let i = 0; i<phoneNo.length; i++) {
        if (isNaN(phoneNo[i])) {
            return false;
        }
    }
}

function Duck (sound) {
    this.sound =  sound;
    this.quack = function () {
        console.log(this.sound);
    }
}

let toy = new Duck ("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);