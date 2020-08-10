let migrating = true;

function quack (num) {
    for (let i=0; i<num; i++) {
        console.log("Quack");
    }
}

// quack(3);

// function expression 
const k = function(num) {
    for (let i = 0; i<num; i++) {
        console.log("Whack!");
    }
}

// k(3);

// if (migrating) {
//     quack(4);
//     k(3);
// }

// Function declaration Vs Function Expression
// ❏ Function declarations are evaluated
// before the rest of the code is evaluated.
// ❏ Function expressions get evaluated
// later, with the rest of the code.
// ❏ A function declaration doesn’t return a
// reference to a function; rather it creates
// a variable with the name of the function
// and assigns the new function to it.
// ❏ A function expression returns a
// reference to the new function created
// by the expression.
// ❏ You can hold function references in
// variables.
// ❏ Function declarations are statements;
// function expressions are used in
// statements.
// ❏ The process of invoking a function
// created by a declaration is exactly the
// same for one created with an expression.


// Function rafernce can be passed around with assignments
// const superK = k;
// superK(3);

// const superQuack = quack;
// superQuack(3);


// Passenger Exercise-445
const passengers = [
    {name: "Jane Doloop", paid:true, ticket: "coach"},
    {name: "Dr. Evel", paid:true, ticket: "firstClass"},
    {name:"Sue Property", paid: false, ticket: "firstClass"},
    {name:"John Funcall", paid: true, ticket: "premium"}
]

function checkNoFlyList (passenger) {
    // return (noFlyList(passenger)? true : false);
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    // return (passenger.paid? true: false);
    return (!passenger.paid);
}

// Exercise-448
function printPassenger (passenger) {
    console.log("Name: " + passenger.name, "Paid: "+passenger.paid);
}

function processPassengers (passengers, testFunction) {
    for (let i=0; i<passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

const allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take-off: We have passenger on the no-fly-list");
}

const allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
    console.log("The plane can't take off: Not everyone has paid");
}

// processPassengers(passengers, printPassenger);

// function which return another function
function createDrinkOrder(passenger) {
    // create a variable to hold the function we want to return
    let orderFn;

    if (passenger.ticket === "firstClass") {
        // defining the orderFn for first class passengers
        orderFn = function (){
            alert("You want a cocktail or wine");
        }
    } else if(passenger.ticket === "premium"){
        orderFn = function() {
            alert("You want a cola or wine or water")
        }
    } else {
        // definig the order function for coach passenegers
        orderFn = function () {
            alert("You want a water or cola");
        }
    }
    return orderFn;
}

function createDinnerOrder(passenger) {
    let orderFn;
    if (passenger.ticket === "firstClass") {
        orderFn =  function () {
            alert ("You want Chicken or Pasta?");
        }
    } else if (passenger.ticket === "premium") {
        orderFn = function() {
            alert ("You want snack box or cheese plate")
        }
    } else {
        orderFn = function() {
            alert("You want peanuts or pretzels");
        }
    }

    return orderFn;
}

// serving a customer function. We pass the passenger to the function
function serveCustomer(passenger) {
    // create a variable to hold the return value (the orderFn for respective passenger that defined previously)
    const getDrinkOrderFunction = createDrinkOrder (passenger);

    const getDinnerOrderFunction = createDinnerOrder (passenger);
    // we use the function referenced by getDrinkOrderFunction variable whenever we want, (multiple times for dinner order, showmovie etc..)
    getDrinkOrderFunction();

    getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (let i = 0; i<passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

// servePassengers(passengers);



