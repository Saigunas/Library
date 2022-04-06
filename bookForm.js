let parentDisabler = document.querySelector('.parent-disable');
let popup = document.querySelector('#popup');


let bookFormCaller = document.querySelector('.book-form-caller');

bookFormCaller.addEventListener('click', () => {
    parentDisabler.classList.remove('disabled');
    popup.classList.remove('disabled');
});


parentDisabler.addEventListener('click', () => {
    parentDisabler.classList.add('disabled');
    popup.classList.add('disabled');
});


let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let bookStatus = document.getElementById('status');

let newBookTitle = title.value;
let newBookAuthor = author.value;
let newBookPages = pages.value;
let newBookStatus = bookStatus.value;

title.addEventListener('change', (e)=> {newBookTitle = e.target.value;});
author.addEventListener('change', (e)=> {newBookAuthor = e.target.value;});
pages.addEventListener('change', (e)=> {newBookPages = e.target.value;});
bookStatus.addEventListener('change', (e)=> {newBookStatus = e.target.value;});


let addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', checkFormValidity);

function checkFormValidity() {
    let newBookForm = document.querySelector('#book-form').reportValidity();
    if(newBookForm === true) {
        let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookStatus);
        myLibrary.push(newBook);
        addBookToLibrary(myLibrary.length - 1);
        parentDisabler.classList.add('disabled');
        popup.classList.add('disabled');
    }
}