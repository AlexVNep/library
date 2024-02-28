const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const yes =  document.querySelector('#yes');
const no = document.querySelector('#no');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    }
}

let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, 'no');
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, 'yes');
let rescue= new Book("The Rescue","Nicholas Sparks", 339, 'yes');

const myLibrary =  [];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;

const  userInput = document.querySelectorAll('input');
const addBookBtn = document.querySelector('.add-book');



const addBookToLibrary = (ev) => {
    ev.preventDefault(); // ev is the event being passed to the function here it is preventing the btn from submitting
    let newBook = {
         title: title.value,
         author: author.value,
         pages: pages.value,
         yes: yes.value,
         no: no.value,
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



theHobbit.info(); 
console.log(theHobbit.info());