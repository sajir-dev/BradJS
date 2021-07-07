//Destructuring Assignment

let a, b;
[a, b] = [100, 200];
//Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({ a, b } = { a:100, b:200, c:300, d:400, e:500});
({a, b, ...rest} = { a:100, b:200, c:300, d:400, e:500 })

console.log(rest);

// Array Destructuring

// const people = ['john', 'Eby', 'Mike'];

// const [person1, person2, person3] = people

// console.log(person1, person2, person3);

//Parse array returned from a function
// function getPeople() {
//     return [ 'Eby', 'Aju', 'Rav' ];
// }

// const [person1, person2, person3 ] = getPeople();

// console.log( person1, person2, person3);

//Object destructuring

const person = {
    name: 'John Doe',
    age: 32 ,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        return 'Hello';
    }
}

//ES5
// const name = person.name, age = person.age, city = person.city ;
// console.log(name, age, city);

//ES6
const {name, age, city, sayHello } = person;
console.log(name, age, city);

console.log(sayHello());
