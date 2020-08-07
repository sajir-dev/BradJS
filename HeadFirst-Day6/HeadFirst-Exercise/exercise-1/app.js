
shapesRightAngle=(steps)=> {
    let ch = ""
    for (let i=0; i<steps; i++) {
        for (let j=0; j<=i; j++) {
            ch += "*"
        }
        ch += "\n";
    }
    return ch;
}

console.log(shapesRightAngle(5))

shapesTriangle= (steps) => {
    let pattern = "";
    for (let i=0; i<steps; i++) {
        for (let j=0; j<=steps*2; j++) {
            if (((i+j) < steps) || ((i+j) > (steps+2*i))) {
                currentChar = " ";
            } else {
                currentChar = "*";
            }
            pattern += currentChar;
        }
        pattern += `\n`;
    }

    return pattern;
}

console.log(shapesTriangle(30));
