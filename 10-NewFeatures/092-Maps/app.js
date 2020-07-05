// MAPS = key-value pairs - can use ANY type as key or value

const map1 = new Map();

//set Keys
const key1 = 'some string',
      key2 = '{}',
      key3 = function() {};

//set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'value of key2');
map1.set(key3, 'Value of key3');

//Get values by keys
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//Count values
//console.log(map1.size);

//ITERATING MAPS

//Loop using for..of to get key and values
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }

// Iterate values only
// for (let values of map1.values()) {
//     console.log(values);
// }

//Loop using forEach
// map1.forEach(function(value, key){
//     console.log('${key} : ${value}')
// });

// CONVERT TO ARRAYS

//Create an array of the key value pairs
const keyValPair = Array.from(map1);

const keys = Array.from(map1.keys());

const values = Array.from(map1.values());

console.log(keyValPair);

console.log(keys);

console.log(values);