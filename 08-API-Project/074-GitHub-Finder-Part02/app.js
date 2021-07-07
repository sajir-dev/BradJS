//Init Github
const github = new Github;

//Init ui
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search event listener 
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== '') {
        //console.log(userText);
        //Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //Show Alert
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                }
            });
    } else {
        //Clear profile
    }
})  