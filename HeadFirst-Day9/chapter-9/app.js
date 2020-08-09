// function pageLoadHandler() {
//     alert("I'm alive");
// }

// window.onload = pageLoadHandler;

window.onload = init;

function init() {
    // const image = document.getElementById("zero");
    const images = document.getElementsByTagName("img");
    // image.onclick = showAnswer;
    for (let i=0; i<images.length; i++){
        images[i].onclick = showAnswer;
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    const image = eventObj.target;

    image.src = `${eventObj.target.id}.jpg`;

    setTimeout(reblur, 2000, image);
}

function reblur (eventObj) {
    const image = eventObj.target;
    // let name = image.id;
    // name = name + "blur.jpg";
    // image.src = name;
    image.src = `${eventObj.target.id}blur.jpg`;
}