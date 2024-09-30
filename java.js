const books = JSON.parse(localStorage.getItem("books"));

const bookList = document.getElementById('bookList');

displayBooks();

function displayBook(book) {
    const bookNumber = books.indexOf(book);
    const html = `  
        <div class="book">
        <h1>${book.title}</h1>
        <p>${book.author}</p>
        <p>${book.year}</p>
        <p>${book.genre}</p>
        <p>${book.status}</p>
        <button onclick= "return editBook(${bookNumber})">Редактировать</button>
        <button onclick= "return delliteBook(${bookNumber})">Удалить</button>
    </div >`;
    bookList.innerHTML += html;
    ;
}
function delliteBook(bookNumber) {
    books.splice(bookNumber, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
};

function displayBooks() {
    bookList.innerHTML = null;
    books.forEach(book => displayBook(book));
};

function addBook() {
    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        year: document.getElementById("year").value,
        genre: document.getElementById("genre").value,
        status: document.getElementById("status").value
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
    document.forms[0].reset();
    return false;
};

// function editBook(bookNumber) {
//   const book = displayBook(book)
    
// } 
   

