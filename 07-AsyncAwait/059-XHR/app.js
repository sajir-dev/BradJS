document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create an XMR Object
    const xhr = new XMLHttpRequest()

    //OPEN
    xhr.open('GET', 'data.txt', true);

    console.log('READYSTATE', xhr.readyState);

    // xhr.onload = function(){
    //     if (this.status === 200){
    //         //console.log(this.responseText)
    //         let div = document.getElementById('loaded-text');
    //         div.innerText = this.responseText;
    //     }
    // }

    xhr.onreadystatechange = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200 && xhr.readyState === 4){
            console.log(xhr.readyState);
            console.log(this.responseText);
        }
    }
    xhr.send();
}

