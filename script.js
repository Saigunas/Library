const library =  document.querySelector('.library');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function readInput() {
    while(true) {
        let stop = prompt('stop?(y/n)');
        if(stop === 'y') break;
        let title = prompt('title');
        let author = prompt('author');
        let pages = prompt('pages');
        let read = prompt('read');

        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
    }
    showLibrary();
}

function showLibrary() {
    console.table(myLibrary);
    for(let index = 0; index < myLibrary.length; index++) {        
        let book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute(`data-book${index}`, "true");
        book.textContent = 'Book added';
        library.appendChild(book);
    }
}

readInput();