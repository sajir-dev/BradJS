function makePhrases() {
    const word1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    const word2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    const word3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    const rand1 = Math.floor(Math.random() * word1.length);
    const rand2 = Math.floor(Math.random() * word2.length);
    const rand3 = Math.floor(Math.random() * word3.length);

    let phrase = word1[rand1] + " " + word2[rand2] + " " + word3[rand3];
    alert(phrase);
}

// makePhrases();

const products = ["Choo Choo chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
const hasBubblegum = [false, false, false, true];

let i = 0;

while(i < hasBubblegum.length) {
    if (hasBubblegum[i]) {
        console.log(products[i]+ " containes bubblegum");
    }
    i = i+1;
}

for (let j=0; j<hasBubblegum.length; j++) {
    if (hasBubblegum[j]) {
        console.log(products[j]+ " containes bubblegum");
    }
}

const scores = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];


for (let i = 0; i < scores.length; i++ ) {
    let output = "Bubble solution #" + i +
        " score: " + scores[i];
    console.log(output);
}

let highest = 0

for (let i = 0; i < scores.length; i++) {
    if (scores[i]>highest) highest = scores[i];
}

// 01- July

console.log("Highest bubble score: " + highest);

const bestSolutions = []

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highest) {
        bestSolutions.push(i);
    }
}

let k = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highest) {
        bestSolutions[k++] = i ;
    }
}

console.log("solutions with highest bubble score: " + bestSolutions);
