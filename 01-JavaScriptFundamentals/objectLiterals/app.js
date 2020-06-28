const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 30,
    email: "steve@aol.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Miami",
        state: "FL"
    },
    getBirthYear: function(){
        return 2020-this.age;
    }
}

let val;

val = person;
//Get specific person
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];

console.log(val);
 