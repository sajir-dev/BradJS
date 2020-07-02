//Search input
const searchUser = document.getElementById('searchUser');

//Search event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
    }
})