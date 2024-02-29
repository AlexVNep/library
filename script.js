const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const radioBtns = document.querySelectorAll('.radio')
const yes =  document.querySelector('#yes');
const no = document.querySelector('#no');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//examples of inputs
let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, 'no');
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, 'yes');
let rescue= new Book("The Rescue","Nicholas Sparks", 339, 'yes');

const myLibrary =  [];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;

const  userInput = document.querySelectorAll('input');
const addBookBtn = document.querySelector('.add-book');
const bookList = document.querySelector('.books');


const addBookToLibrary = (ev) => {
    ev.preventDefault(); // ev = event being passed to function preventing btn from submitting
    let newBook = new Book(title.value, author.value, pages.value, radioBtns.id)
    for(let radio of radioBtns){
        if(radio.checked){
            if (yes.checked){
                console.log(yes.id)
                radioBtns.value = 'yes';
            } else {
                console.log(no.id)
                // no.textContent = 'no';
            }           
            // console.log(radioBtns.value)        
        }
    }
    
        

    myLibrary.push(newBook);
    document.forms[0].reset();

    console.warn('added', {myLibrary});
    // const bookListContent = document.createElement('div');
    // bookListContent.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2)
    // bookList.appendChild(bookListContent); 
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