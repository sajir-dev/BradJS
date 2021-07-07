const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car){
//     console.log(car);
// });

const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Karen'},
    {id:4, name:'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

// console.log(ids);

// cars.forEach(function(car, index){
//     console.log(`${index} : ${car}`);
// });


// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

const user = {
    firstName: "John",
    secondName: "Doe",
    age: 40
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}