//local Storage
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '40')

// //set session storage
// sessionStorage.setItem('name', 'Mia');

// //localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// //local storage clear
// localStorage.clear();

document.querySelector('form').addEventListener('submit', 
    function(e){
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks')===null){
            tasks =[];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task Saved');

        e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task)
})