let re;
re = /hello/;
re = /hello/i; //i-case insensitive

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('abc hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.input);
// console.log(result.index);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first element, if not found returns -1
// const str = 'Brad HELLO There';
// const result = str.search(re);
// console.log(result);

//replace() - Return a new string with some ir all matches of a pattern
// const str = 'HELLOfi There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);
