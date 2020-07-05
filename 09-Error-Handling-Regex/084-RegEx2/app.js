let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter symbols
re = /^h/i;         //starts with h
re = /world$/i;     //ends with world
re = /^hello$/i;    //contains hello only -starts with hello and ends with hello
re = /h.llo/;       //matches with any ONE character instead of . in h.llo
re = /h*llo/;       //matches with any number of characters instead of * in h*llo
re = /gre?a?y/i;    //Optional character a/e
re = /gre?a?y\?/i;

// String to match
const str = 'grey?';

//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches the ${re.source}`);
    } else {
        console.log(`${str} is not matches the ${re.source}`)
    }
}

reTest(re, str);