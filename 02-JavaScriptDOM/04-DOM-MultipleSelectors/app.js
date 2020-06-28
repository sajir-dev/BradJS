// //getElementsByClassName

// //selects all elements with class name collection-item
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'blue';
// items[3].textContent = 'Hello';

// //selects just the collection items inside ul
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// //document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'green';
// lis[3].textContent = 'Hello';

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// });

// console.log(lis);

//document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);

items.forEach(function(item, index){
    item.textContent = `${index} Hello`;
});

console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)'); //return an array
const liEven = document.querySelectorAll('li:nth-child(even)'); //return an array

liOdd.forEach(function(li){
    li.style.background = '#999';
});

// liEven.forEach(function(li){
//     li.style.background = '#f4f4f4';
// });

for(let i=0; i<liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

