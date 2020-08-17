// //document.getElementById()

// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title');

// //Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'Task ToDo';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').innerText = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = "#ccc";
