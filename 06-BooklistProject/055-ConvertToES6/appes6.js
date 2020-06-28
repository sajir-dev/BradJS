//class book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Class UI
class UI {
    //Add book to list
    addBookToList (book) {
        const title = book.title;
        const author = book.author;
        const isbn = book.isbn;

        const row = document.createElement('tr');
        row.innerHTML = `<tr>
                            <td>${title}</td>
                            <td>${author}</td>
                            <td>${isbn}</td>
                            <td><a href="#" class="delete">X</a></td>
                        </tr>`;
        document.getElementById('book-list').appendChild(row);
    }

    //Show Alert
    showAlert (message, className) {
        //Create div
        const div = document.createElement('div');
        //Add class
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        //Insert alert
        container.insertBefore(div, form);
    
        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    //Delete book
    deleteBook (target) {
        console.log(target);
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();

        }
    }

    //Clear fields
    clearFields () {
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    }
}


//Book Add Event Listener
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate a book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if( title ==='' || author ===''|| isbn === ''){
        ui.showAlert('Please fill all field', 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //Clear fields
        ui.clearFields();

        //Show success
        ui.showAlert('Book Added!', 'success')
    }

    e.preventDefault();
});

//Book Delete Event Listener
document.getElementById('book-list').addEventListener('click', function(e){
    //Instantiate UI object
    const ui = new UI();

    //call delete function with UI object
    ui.deleteBook(e.target);

    //Show delete message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
})