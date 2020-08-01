const scores = [49, 62, 68, 71, 39, 55, 60, 69, 42,
            69, 65, 54];

function printAndGetHighScore(scores) {
    let highscore = scores[0];
    let output;

    for (let i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: "
        + scores[i];
        console.log(output);

        if (highscore<scores[i]) {
            highscore = scores[i];
        }
    }

    return highscore;
}

