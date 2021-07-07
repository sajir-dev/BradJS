//create element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//create a new link
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

//create text node and append
li.appendChild(document.createTextNode('Hello World'));

//Append li as a child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);