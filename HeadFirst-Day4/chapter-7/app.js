let test1 = [];
let test2 = {};
let test3 = true;
let test4 = {"hi" : "Hello", "phone" : 1234};
function test5 () {
    return 1;
}
let test6 = null;
let test7 = undefined;
let test8 = 0/0;

console.log("test1:", typeof(test1));
console.log("test2:", typeof(test2));
console.log("test3:", typeof(test3));
console.log("test4:", typeof(test4));
console.log("test5:", typeof(test6));

console.log(typeof(test4.hi));

console.log("test6: typeof null", typeof test6);
console.log("test7: typeof undefined", typeof test7);

console.log("test8: typeof NaN", typeof test8);

if (99 == "99") {
    console.log("99 == \"99\" when we use double equal signs");
} else {
    console.log("string 99 and Number 99 are not equal")
}

if (99 === "99") {
    console.log("99 == \"99\" when we use double equal signs");
} else {
    console.log("string 99 and Number 99 are not equal when we use triple equal sign")
}

if (null == undefined) {
    console.log("null and undefined are equal when we use double equal to");
} else {
    console.log("null and undefined are not equal when we compare them with double equal to")
}

if (null === undefined) {
    console.log("null and undefined is equal when we use triple equalto");
} else {
    console.log("null and undefined are not equal when we use triple equal to");
}