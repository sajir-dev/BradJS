//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function (book){
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>
                    `;
    document.getElementById('book-list').appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function (message, className) {
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

//Delete Book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('isbn').value = '';
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