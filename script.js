const myLibrary =  ['The hobbit'];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    }
}

const  userInput = document.querySelectorAll('input');
const addBookBtn = document.querySelector('.add-book');



const addBookToLibrary = (ev) => {
    ev.preventDefault(); // ev is the event being passed to the function here it is preventing the btn from submitting
    let newBook = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        pages: document.querySelector('#pages').value,
        yes: document.querySelector('#yes').value,
        no: document.querySelector('#no').value,
    }
    myLibrary.push(newBook);
    document.forms[0].reset();

    console.warn('added', {myLibrary});
    const bookList = document.querySelector('.books');
    const bookListContent = document.createElement('div');
    bookListContent.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2)
    bookList.appendChild(bookListContent); 
}
addBookBtn.addEventListener('click', addBookToLibrary);



// function displayBooks(){
//     for (let i = 0; i < myLibrary.length; i++) {
//         const bookListContent = document.createElement('div');
//         let book = myLibrary[i];
//         bookListContent.textContent = book
//         bookList.appendChild(bookListContent);        
//     }   
// }    
// displayBooks();


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'no');

theHobbit.info(); 
console.log(theHobbit.info());