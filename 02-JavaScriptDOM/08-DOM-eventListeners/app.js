// //Adding a click action with anonymous function
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello, World!');
//     e.preventDefault();
// });

//Adding a click action with named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
    let val;
    val = e;

    //Event target
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello';

    //event type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //Coords of event relative to the window
    val = e.clientY;
    val = e.clientX;
     
    //Coords of event relative to the element
    val = e.offsetY;
    val = e.offsetX;
    
    console.log(val);
}
