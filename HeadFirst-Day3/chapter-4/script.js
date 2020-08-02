const scores = [49, 62, 68, 71, 39, 55, 60, 69, 42,
            69, 65, 54, 72];

const costs = scores.map(score => score/100);

console.log(costs);

function printAndGetHighScore(scoresArr) {
    let highscore = scoresArr[0];
    let output;

    for (let i = 0; i < scoresArr.length; i++) {
        output = "Bubble solution #" + i + " score: "
        + scoresArr[i];
        console.log(output);

        if (highscore<scoresArr[i]) {
            highscore = scoresArr[i];
        }
    }
    return highscore;
}

function bestSolutions(scoresArr, highestBubbleValue) {
    let bestSolutionsArr = [];
    for (let i = 0; i < scoresArr.length; i++) {
        if (scores[i] === highestBubbleValue) {
            bestSolutionsArr.push(i);
        }
    }
    return bestSolutionsArr;
}


function getMostCostEffectiveSolution (scoresArr, costsArr, highscore) {

    let bestSolutionsArr = bestSolutions (scoresArr, highscore);

    let bestCost = costsArr[bestSolutionsArr[0]];

    let mostEffectiveSolution = costsArr.indexOf(bestCost);

    for (let i=0; i<bestSolutionsArr.length; i++) {
        if (costs[bestSolutionsArr[i]]<bestCost) {
            bestCost = costs[bestSolutionsArr[i]];
            mostEffectiveSolution = costsArr.indexOf(bestCost);
        }
    }

    return mostEffectiveSolution;
}


let highScore = printAndGetHighScore(scores);

let mostEffectiveSolution = getMostCostEffectiveSolution(scores, costs, highScore);

console.log("Most Effective Solution", mostEffectiveSolution );

