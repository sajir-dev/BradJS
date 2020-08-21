let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1- Element
// 2- Attribute (deprecated)
// 3- Text node
// 8- Comment
// 9- Document itself
// 10- Doctype 

//Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get sibling
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling.previousSibling;

console.log(val);
