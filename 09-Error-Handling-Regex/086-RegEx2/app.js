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
re = /gre?a?y\?/i;  // optional e and a, and checking presence of a question mark in the end. otherwise it will feel y is optional because that is what regex means when we put a question mark

//Brackets [] - Character set
re = /gr[ae]y/i;    // must be an a or e
re = /[GF]ray/i;    // must be G or F
re = /[^GF]ray/i;   // anything except G or F in the beginning with ray
re = /[A-Z]ray/;    // anything capital letter with ray
re = /[a-z]ray/i;    // Anything small letter with ray
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9][0-9]ray/ // Matches any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;    //l - 2 times with specified characters   
re = /Hel{2,4}o/i;  //l 2-4 times with specified characters
re = /Hel{2,}o/i;   //l more than 2 times with specfied characters

// Paranthesis () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand character classes
re = /\w/;  // matches any word character
re = /\w+/; // matches one or more word characters
re = /\W/;  // matches and non-word character
re = /\d/;  // matches any digit character
re = /\d+/; // matches one or more non digit characters
re = /\D/;  // matches any non-digit character
re = /\s/;  // matches space character
re = /\S/;  // matches non-space characters
re = /Hell\b/i; //Word boundary

//Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x if not followed by y

// String to match
const str = 'abcxKzf';

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