let cadi = {
    name: "Cadillac",
    manufacturer: "GM",
    year: "1955",
    color: "tan",
    mileage: 12892,
    passengers: 5,
    convertible: false,
    features :"Big-bucket seat"
};

let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
}

let bark;

if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

function getSecret (file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword === file.password) {
        return file.contents;
    } else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret (file, secretPassword, secret) {
    if (secretPassword === file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

const superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit"
};

let secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting in Philadelphia");
secret = getSecret(superSecretFile, 2);
console.log(secret);