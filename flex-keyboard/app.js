const keyboard = document.querySelector('.container');
const rows = document.querySelectorAll('.row');
const keys = document.querySelectorAll('.key');


// function blinking () {
//     keys.forEach(key => {
//         // console.log(Array.from(key.classList));
//         // console.log(key.classList);
//         setInterval(function(){
//             if (Array.from(key.classList).includes('highlight')) {
//                 key.classList.remove('highlight');
//             } else {
//                 key.classList.add('highlight');
//                 console.log(key.innerHTML);
//             }
//         }, 1000);
//     });
// }

// blinking();

// setInterval(blinking, 1000);

// for (let i=0; i < keys.length; i++) {
//     console.log(keys[i].classList);
//     keys[i].classList.add('highlight')
// }

function blinker (element) {
    element.classList.add('highlight');
}