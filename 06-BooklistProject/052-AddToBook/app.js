//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBookToList = function (book){
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#">X</a></td>
                    `;
    console.log(row);
    document.getElementById('book-list').appendChild(row);
}

UI.prototype.clearFields = function() {
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate a book
    const book = new Book(title, author, isbn);

    console.log(book);

    //Instantiate UI
    const ui = new UI();

    console.log(ui)

    //Add book to list
    ui.addBookToList(book);

    //Clear fields
    ui.clearFields();

    e.preventDefault();
});