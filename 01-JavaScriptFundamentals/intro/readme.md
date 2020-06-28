
## Data types
let val; <br>
val = String (555); //converts '555' into a string and stores in val <br>
console.log(val.length) //output:3 <br>
console.log(typeof val) // String  <br>

*(number).toString()* also converts a number to string<br>


val = Number ('5'); // converts string 5 to number 5 <br>
console.log (val.toFixed(2)); // output will be 5.00, ie; number and two decimal points <br>

val = parseInt('847'); //will convert string '847' to number 847 <br>
*parseFloat* can be used to decimal values as well <br>

## Math Object
Math.PI // return value of the PI <br>
Math.E // return value of the exponent e <br>
Math.round (2.4) // rounds the value to 2 <br>
Math.ceil (2.4) // rounds the value to upper ceiling, here 2.4 -> 3 <br>
Math.floor (2.8) // rounds the value to lower ceiling, here 2.8 -> 2<br>
Math.sqrt (64) // will return sqrt of 64,ie; 8 <br>
Math.random() // will return a random number between 0 and 1 <br>
Math.floor (Math.random()*20 +1)// will return any number between 1-20 <br>


## String Functions 

let firstName = "John"; <br>
let lastName = "Don" ;<br>
let val;
val = firstName.concat(' ',lastName); // output John Don <br> 
val = firstName.toUpperCase(); //output JOHN <br>
val = firstName.toLowerCase(); //output john <br>
val = firstName.indexOf(h); // will return 2, lastIndexOf method will start searching from the end and will return the last index of the given char<br>

firstName.charAt(3); //will return 'n'; <br>

let str = 'my name is subash'; <br>
val = str.split(' '); //will return a string<br>
substring, slice <br>








