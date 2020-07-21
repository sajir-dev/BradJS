
//Init Github class
const github = new Github;
//define user var
const user = document.getElementById('searchUser');

user.addEventListener('keyup', (e)=> {
    console.log(user.value);

    //Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not found') {     // Alert if no user found

            } else {                                        // Display the profile found
                console.log(data.profile)
            }
        });
    } else {                                                // 

    }

})