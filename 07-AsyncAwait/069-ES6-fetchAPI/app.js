document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

function getJson(){
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post){
                output+=`<li>${post.title}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

function getExternal(){
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(user){
                output+=`<li>${user.login}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        })
        .then(err => console.log(err));
}

// const arr = ['Nathan', 'John', 'Aju'];

// const arr1 = arr.map(element => element.toUpperCase());

// console.log(arr1);

