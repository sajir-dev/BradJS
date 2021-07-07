const name = "john";
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

//without template literal (or template string)

html = '<ul>' + 
            '<li>Name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +
            '<li>City: ' + city + '</li>' +
       '</ul>';

function hello () {
    return 'hello';
}


//with template strings (es6)
html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${hello()}</li>
            <li>${52%4}</li>
            <li>${age>30?"young":"old"}</li>
        </ul>`;


document.body.innerHTML = html;