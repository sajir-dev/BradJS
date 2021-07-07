// Iterator example
// function nameIterator(arr) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < arr.length ? 
//             {value: arr [nextIndex++], done: false } :
//             {done: true};
//         }
//     }
// }

// //Array of names
// const namesArr = ['James', 'Jacob', 'Jijo'];

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value)
// console.log(names.next().value)

//Generator
// function* sayNames(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().done);
// console.log(name.next().value);

function* createIds (){
    let start = 1000;
    while (true){
        yield start++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);


 
