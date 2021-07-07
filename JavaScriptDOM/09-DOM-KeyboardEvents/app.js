const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);

taskInput.value = '';

// //Keydown
// taskInput.addEventListener('keydown', runEvent);

// //Keyup
// taskInput.addEventListener('keyup', runEvent);

// //Keypress
// taskInput.addEventListener('keypress', runEvent);

// //Focus
// taskInput.addEventListener('focus', runEvent);\

// //Blur
// taskInput.addEventListener('blur', runEvent);

// //Copy
// taskInput.addEventListener('copy', runEvent);

// //cut
// taskInput.addEventListener('cut', runEvent);

// //Paste
// taskInput.addEventListener('paste', runEvent);

// //input event
// taskInput.addEventListener('input', runEvent);

// //Change event
// select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE:${e.type}`);

    console.log(e.target.value);

    //heading.innerText = e.target.value;

    //Get deafault value
    //console.log(taskInput.value);
    //e.preventDefault();
}
