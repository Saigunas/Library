const library =  document.querySelector('.library');

let myLibrary = [];

setDefaultBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function setDefaultBooks() {
  let newBook = new Book("The Last Wish", "Andrzej Sapkowski", '359', 'Read');
  myLibrary.push(newBook);

  newBook = new Book("World War Z", "Max Brooks", '342', 'Reading');
  myLibrary.push(newBook);

  newBook = new Book("The Shining", "Stephen King", '659', 'New');
  myLibrary.push(newBook);

  showLibrary();
}

function showLibrary() {
  console.table(myLibrary);
  for(let index = 0; index < myLibrary.length; index++) {        
    addBookToLibrary(index);
  }
}

function addBookToLibrary(index) {
  library.classList.remove('disabled');
  let book = document.createElement('div');
  book.classList.add('book');
  book.setAttribute(`data-book`, `${index}`);
    
  let title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = myLibrary[index].title;

  let author = document.createElement('h3');
  author.classList.add('author');
  author.textContent = myLibrary[index].author;

  let pages = document.createElement('p');
  pages.classList.add('pages');
  pages.textContent = myLibrary[index].pages;
  
  let status = document.createElement('select');
  
  let optionNew = document.createElement('option');
  optionNew.textContent = "New";
  
  let optionReading = document.createElement('option');
  optionReading.textContent = "Reading";

  let optionRead = document.createElement('option');
  optionRead.textContent = "Read";
  
  switch(myLibrary[index].read) {
    case "New":
      optionNew.selected = true;
      break;
      case "Reading":
        optionReading.selected = true;
        break;
        default:
          optionRead.selected = true;
  }

  status.appendChild(optionNew);
  status.appendChild(optionReading);
  status.appendChild(optionRead);
  
  let remove = document.createElement('img');
  remove.classList.add(`remove-book-button`);
  remove.setAttribute(`data-remove`, `${index}`);
  remove.addEventListener('click', removeBook);
  remove.src = "./icons/close-box.svg";
  
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(status);
  book.appendChild(remove);
  
  library.appendChild(book);
}

//Changes data attribute to match index in array,
//needed for removing books correctly
function recountIndex() {
  let books = document.querySelectorAll('.book');
  books = [...books];

  for(let i = 0; i < books.length; i++) {
    let removeBookButton = books[i].querySelector('.remove-book-button');
    removeBookButton.setAttribute(`data-remove`, `${i}`);
    
    books[i].setAttribute(`data-book`, `${i}`);
    
  }
}

function removeBook(e) {
  let bookIndex = e.target.getAttribute('data-remove');

  let bookToRemove = library.querySelector(`[data-book="${bookIndex}"]`);

  library.removeChild(bookToRemove);

  if(myLibrary.length === 1) {
    myLibrary = [];
    library.classList.add('disabled');
    return;
  } 

  myLibrary.splice(bookIndex, 1);
  recountIndex();
}
