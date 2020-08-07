let obj = {
    name: "abc",
    age: 29
}

let k1 = 10

function changeAge () {
    let test = obj;
    test.name = "def";

    let k2 = k1;
    k2 = 20;
}

function changeAgeByParameter(x) {
    x.name = "changeByParameter";
}

// changeAge();
// console.log(obj);
// // console.log("value of k", k1);
// changeAgeByParameter(obj);
// console.log(obj);

let x = "123";

if (!isNaN(x.charAt(0))){
    console.log('Number');
}