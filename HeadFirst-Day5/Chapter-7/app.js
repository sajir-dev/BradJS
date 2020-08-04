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


