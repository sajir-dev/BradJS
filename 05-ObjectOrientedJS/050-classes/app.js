class Person {
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970)
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x+y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1990');
mary.getsMarried('Renold');

console.log(Person.addNumbers(3, 4)); //Use class name instead of the object name because static functions are not the property of the object but the property of the class 