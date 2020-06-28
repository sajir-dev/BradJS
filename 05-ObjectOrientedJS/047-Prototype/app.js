//Object.prototype
//Person.prototype

//Persom constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // this.calculateAge = function (){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
}

//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-1960');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

mary.getsMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('kids'));
console.log(mary)
