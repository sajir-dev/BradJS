const data = [
    {
        'name':'Sijo',
        'age':'29',
        'gender':'male',
        'lookingFor':'female',
        'location':'Kochi',
        'profilePic':'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        'name':'Jijo',
        'age':'35',
        'gender': 'male',
        'lookingFor':'male',
        'location':'Kozhikode',
        'profilePic':'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        'name':'Alisa',
        'age':'32',
        'gender':'female',
        'lookingFor':'male',
        'location':'Chennai',
        'profilePic':'https://randomuser.me/api/portraits/women/75.jpg'
    }
]

const profile = profileIterator(data)

//Next event
document.getElementById('next-profile').addEventListener('click', nextProfile);

nextProfile();

//next profile display
function nextProfile () {
    const currentProfile = profile.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profile').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;
        document.getElementById('profile-pic').innerHTML = `
            <img src="${currentProfile.profilePic}">
        `
    } else {
        window.location.reload();
    }
    

}

//Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next : function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++],  done : false} :
            {done : true}
        }
    };
}






