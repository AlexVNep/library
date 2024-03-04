const dialog = document.querySelector('dialog');
const newBookBtn = document.querySelector('.new-book')
const closeBtn = document.querySelector('.close-button');
const addBookBtn = document.querySelector('.add-book');
const bookList = document.querySelector('.books');
const read = document.querySelectorAll('input[name="is-read"]');

let isRead;
    read.forEach(radio => {
        radio.addEventListener('click', function(){
            isRead = radio.value;
            console.log(isRead);
        })
    })

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//examples of inputs
let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, 'No');
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, 'Yes');
let rescue= new Book("The Rescue","Nicholas Sparks", 339, 'Yes');

const myLibrary =  [];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;

function showUserInput(){
    dialog.showModal();
}

newBookBtn.addEventListener('click', showUserInput);

function closeInput (){
    dialog.close()
}

closeBtn.addEventListener('click', closeInput);

const addBookToLibrary = (ev) => {
    ev.preventDefault(); // ev = event being passed to function preventing btn from submitting
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    
    
    let newBook = new Book(title, author, pages, isRead)
    
    myLibrary.push(newBook);
    document.forms[0].reset();
   dialog.close();
    console.warn('added', {myLibrary});
}
addBookBtn.addEventListener('click', addBookToLibrary);

function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        const bookListContent = document.createElement('div'); //creating div to append "list" to.
        bookListContent.classList.add('card')
        let book = myLibrary[i]; // book = the array loop output of myLibrary
        const entries = Object.entries(book);
        bookListContent.textContent = entries;
        bookList.appendChild(bookListContent);
     }   
}    
displayBooks();

addBookBtn.addEventListener('click', () => {
    bookList.textContent = '';
    displayBooks();
})