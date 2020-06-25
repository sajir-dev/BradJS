//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clearTasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();


function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);   
}

//Add task
function addTask(e){
    if (taskInput.value===''){
        alert('add a task');
    }

    //Create li element
    const li = document.createElement('li');

    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon to HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to the ui
    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';

    e.preventDefault();
}
